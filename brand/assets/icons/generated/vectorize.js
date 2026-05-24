/**
 * vectorize.js (Node.js CLI)
 * Usage: node vectorize.js <src> <dest> [--css=./src/styles/global.css] [--config=./theme.js] [--color=#D0FD17]
 *
 * Color resolution priority:
 *   1. --color flag (explicit override)
 *   2. --css file   (reads --primary from CSS)
 *   3. --config file (reads primary: from theme/config)
 *   4. Source image dominant color (auto-detect)
 *   5. Fallback #D0FD17
 */

const ImageTracer = require('imagetracerjs');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const { resolveColor, hexToRgb } = require('./color-resolver.js');
const { optimize } = require('svgo');

// ─── CLI Arg Parser ──────────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = { src: null, dest: null, color: null, css: null, config: null };
  const positional = [];

  for (const arg of argv.slice(2)) {
    if (arg.startsWith('--color='))  { args.color  = arg.slice(8); continue; }
    if (arg.startsWith('--css='))    { args.css    = arg.slice(6); continue; }
    if (arg.startsWith('--config=')) { args.config = arg.slice(9); continue; }
    positional.push(arg);
  }

  [args.src, args.dest] = positional;
  return args;
}

// ─── SVG Regex Normalizer ────────────────────────────────────────────────────

/**
 * Replace ImageTracer color output robustly.
 * Handles both "rgb(0,0,0)" and "rgb(0, 0, 0)" formats.
 */
function replaceRgb(svg, r, g, b, replacement) {
  // Build a pattern that tolerates optional spaces around commas
  const pat = new RegExp(
    `fill="rgb\\(\\s*${r}\\s*,\\s*${g}\\s*,\\s*${b}\\s*\\)"`,
    'g'
  );
  return svg.replace(pat, `fill="${replacement}"`);
}

// ─── Core Vectorize ───────────────────────────────────────────────────────────

/**
 * Advanced Vectorization with Smart Palette Mapping
 * 1. Detect background from corners.
 * 2. Identify functional neutrals (grayscale) -> currentColor.
 * 3. Identify brand accent -> var(--primary).
 */
async function vectorize(src, dest, brandColor) {
  try {
    const image = await loadImage(src);

    // Scale down large images
    const MAX = 1200;
    let w = image.width, h = image.height;
    if (w > MAX || h > MAX) {
      const ratio = Math.min(MAX / w, MAX / h);
      w = Math.round(w * ratio);
      h = Math.round(h * ratio);
    }

    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(image, 0, 0, w, h);

    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    // --- 1. Background Detection (Corner Sampling) ---
    const corners = [
      [0, 0], [w - 1, 0], [0, h - 1], [w - 1, h - 1]
    ].map(([x, y]) => {
      const idx = (y * w + x) * 4;
      return `${data[idx]},${data[idx + 1]},${data[idx + 2]},${data[idx + 3]}`;
    });
    
    // Most frequent corner color is BG. Default to white if tied/missing.
    const bgFreq = {};
    corners.forEach(c => bgFreq[c] = (bgFreq[c] || 0) + 1);
    const bgColorStr = Object.entries(bgFreq).sort((a,b) => b[1] - a[1])[0][0];
    const [bgR, bgG, bgB, bgA] = bgColorStr.split(',').map(Number);
    
    // --- 2. Functional Mapping ---
    const brand = hexToRgb(brandColor);
    
    const isVibrantPixel = (r, g, b, threshold = 25) => {
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      return (max - min) > threshold;
    };
    
    const distSq = (r1, g1, b1, r2, g2, b2) => (r1-r2)**2 + (g1-g2)**2 + (b1-b2)**2;

    // Thresholds
    const BG_THRESH_SQ = 40 * 40;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];

      // a. Transparency / Background
      if (a < 128 || distSq(r, g, b, bgR, bgG, bgB) < BG_THRESH_SQ) {
        data[i] = 255; data[i+1] = 255; data[i+2] = 255; data[i+3] = 0;
      } 
      // b. Brand Identity: Logic: Does it have ANY color? (Vibrant check)
      else if (isVibrantPixel(r, g, b)) {
        data[i] = brand.r; data[i+1] = brand.g; data[i+2] = brand.b; data[i+3] = 255;
      }
      // c. Functional Neutral (Outline/Detail)
      else {
        data[i] = 0; data[i+1] = 0; data[i+2] = 0; data[i+3] = 255;
      }
    }

    ctx.putImageData(imgData, 0, 0);

    let svgstr = ImageTracer.imagedataToSVG(imgData, {
      pal: [
        { r: 0,       g: 0,       b: 0,       a: 255 }, // neutral
        { r: brand.r, g: brand.g, b: brand.b, a: 255 }, // accent
      ],
      ltres: 1, qtres: 1, pathomit: 16, scale: 1, viewbox: true
    });

    // --- 3. Robust Variable Injection (Fuzzy Classifier) ---
    
    // Check if color is vibrant/saturated or very close to our target brand
    const isBrandNear = (colorStr) => {
        let r, g, b;
        if (colorStr.startsWith('#')) {
            const hex = colorStr.slice(1);
            r = parseInt(hex.slice(0,2), 16);
            g = parseInt(hex.slice(2,4), 16);
            b = parseInt(hex.slice(4,6), 16);
        } else {
            const matches = colorStr.match(/\d+/g);
            if (!matches) return false;
            [r, g, b] = matches.map(Number);
        }
        
        const saturation = Math.max(r, g, b) - Math.min(r, g, b);
        const dBrand = distSq(r, g, b, brand.r, brand.g, brand.b);
        const dNeutral = distSq(r, g, b, 0, 0, 0);
        
        // It's brand if it's vibrant OR closer to brand than neutral
        return saturation > 25 || dBrand < dNeutral;
    };

    const isWhite = (colorStr) => {
        if (colorStr === 'none' || colorStr === 'transparent') return true;
        let r, g, b;
        if (colorStr.startsWith('#')) {
            const hex = colorStr.slice(1);
            r = parseInt(hex.slice(0,2), 16);
            g = parseInt(hex.slice(2,4), 16);
            b = parseInt(hex.slice(4,6), 16);
        } else {
            const matches = colorStr.match(/\d+/g);
            if (!matches) return false;
            [r, g, b] = matches.map(Number);
        }
        return r > 230 && g > 230 && b > 230;
    };

    // Find all fill/stroke colors in the SVG
    const colorMatches = svgstr.match(/(fill|stroke)="(#[0-9a-f]{3,6}|rgb\([^)]+\))"/gi) || [];
    const uniqueColors = [...new Set(colorMatches.map(m => m.match(/"([^"]+)"/)[1]))];

    uniqueColors.forEach(c => {
        const lower = c.toLowerCase();
        if (isWhite(lower)) {
            svgstr = svgstr.split(`fill="${c}"`).join('fill="none"');
            svgstr = svgstr.split(`stroke="${c}"`).join('stroke="none"');
        } else if (isBrandNear(lower)) {
            svgstr = svgstr.split(`fill="${c}"`).join('fill="var(--primary)"');
            svgstr = svgstr.split(`stroke="${c}"`).join('stroke="var(--primary)"');
        } else {
            svgstr = svgstr.split(`fill="${c}"`).join('fill="currentColor"');
            svgstr = svgstr.split(`stroke="${c}"`).join('stroke="currentColor"');
        }
    });

    // 4. SVGO Optimization
    const optimizationResult = optimize(svgstr, { 
        multipass: true,
        plugins: [
            'preset-default',
            { name: 'removeAttrs', params: { attrs: '(stroke|fill):none' } }
        ]
    });
    svgstr = optimizationResult.data;

    // remove fixed sizes
    svgstr = svgstr.replace(/\s*width="[^"]+"\s*height="[^"]+"/, '');

    fs.writeFileSync(dest, svgstr, 'utf8');
    console.log(`✅ ${path.basename(dest)} [Fuzzy Mapped]`);
    return svgstr;
  } catch (err) {
    console.error(`❌ Failed: ${src}`, err.message);
    throw err;
  }
}

// ─── CLI Entry ───────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(process.argv);

  if (!args.src || !args.dest) {
    console.log([
      'Usage: node vectorize.js <src> <dest> [options]',
      '',
      'Options:',
      '  --color=#hexcolor     Explicit brand color (skips auto-detect)',
      '  --css=./global.css    Read --primary from CSS file',
      '  --config=./theme.js   Read primary from theme/config file',
      '',
      'Color priority: --color > --css > --config > image analysis > fallback',
    ].join('\n'));
    process.exit(0);
  }

  // Resolve brand color
  let brandColor;

  if (args.color) {
    brandColor = args.color;
    console.log(`🎨 Color: ${brandColor} (explicit)`);
  } else {
    brandColor = await resolveColor.resolve({
      cssFile:    args.css,
      configFile: args.config,
      imagePath:  args.src,
      fallback:   '#D0FD17',
    });
    console.log(`🎨 Color: ${brandColor} (auto-resolved)`);
  }

  await vectorize(args.src, args.dest, brandColor);
}

main().catch(err => {
  process.exit(1);
});

module.exports = { vectorize };

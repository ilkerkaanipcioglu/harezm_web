/**
 * color-resolver.js
 * Resolves brand primary color from:
 *   1. CSS custom property (--primary) on :root
 *   2. DOM dominant color analysis (most frequent non-white/non-black pixel)
 *   3. Fallback value
 *
 * Works in: Browser (ES module) + Node.js (CommonJS/ESM)
 */

// ─── Shared Utilities ────────────────────────────────────────────────────────

/**
 * Convert hex color to {r, g, b}
 */
function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const n = parseInt(hex, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/**
 * Convert {r, g, b} to hex
 */
function rgbToHex({ r, g, b }) {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

/**
 * Parse any CSS color string → {r, g, b} | null
 * Handles: #fff, #ffffff, rgb(r,g,b), rgba(r,g,b,a)
 */
function parseCssColor(str) {
  if (!str) return null;
  str = str.trim();
  if (str.startsWith('#')) return hexToRgb(str);
  const m = str.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
  if (m) return { r: +m[1], g: +m[2], b: +m[3] };
  return null;
}

/**
 * Is this color "too white"? (near white or very light)
 */
function isWhiteish(r, g, b, threshold = 200) {
  return r > threshold && g > threshold && b > threshold;
}

/**
 * Is this color "too black"? (near black or very dark)
 */
function isBlackish(r, g, b, threshold = 40) {
  return r < threshold && g < threshold && b < threshold;
}

/**
 * Is this color too gray? (low saturation)
 */
function isGrayish(r, g, b, threshold = 30) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return (max - min) < threshold;
}

/**
 * Quantize a color to a bucket (reduces unique colors for frequency counting)
 */
function quantize(r, g, b, step = 32) {
  const qr = Math.round(r / step) * step;
  const qg = Math.round(g / step) * step;
  const qb = Math.round(b / step) * step;
  return `${qr},${qg},${qb}`;
}

/**
 * Find dominant "brand" color from raw pixel data (Uint8Array/Buffer RGBA).
 * Skips whites, blacks, grays. Returns hex string or null.
 */
function dominantFromPixels(data, width, height) {
  const freq = new Map();
  // Sample every 4th pixel for speed
  const step = 4 * 4;

  for (let i = 0; i < data.length; i += step) {
    const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
    if (a < 128) continue;                         // skip transparent
    if (isWhiteish(r, g, b, 220)) continue;        // skip near-white
    if (isBlackish(r, g, b, 50)) continue;         // skip near-black
    if (isGrayish(r, g, b, 25)) continue;          // skip grays

    const key = quantize(r, g, b, 24);
    freq.set(key, (freq.get(key) ?? 0) + 1);
  }

  if (freq.size === 0) return null;

  // Most frequent bucket
  const [topKey] = [...freq.entries()].sort((a, b) => b[1] - a[1])[0];
  const [r, g, b] = topKey.split(',').map(Number);
  return rgbToHex({ r, g, b });
}


// ─── Browser Implementation ───────────────────────────────────────────────────

const browserResolver = {
  /**
   * Read --primary (or any CSS var) from :root
   */
  fromCssVar(varName = '--primary') {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
    if (!raw) return null;
    // If it's already a valid hex/rgb, return as-is
    const parsed = parseCssColor(raw);
    return parsed ? rgbToHex(parsed) : (raw.startsWith('#') ? raw : null);
  },

  /**
   * Analyze the page's favicon or a small sample of the document's
   * visible colors by drawing a scaled screenshot of the <body> into canvas.
   *
   * Practical approach: read colors from the page's loaded images and
   * CSS background-colors of key elements (header, nav, hero).
   */
  fromDomAnalysis() {
    const candidates = [
      document.querySelector('header'),
      document.querySelector('nav'),
      document.querySelector('[class*="hero"]'),
      document.querySelector('[class*="header"]'),
      document.querySelector('[class*="navbar"]'),
      document.body,
    ].filter(Boolean);

    for (const el of candidates) {
      const bg = getComputedStyle(el).backgroundColor;
      const parsed = parseCssColor(bg);
      if (!parsed) continue;
      const { r, g, b } = parsed;
      if (isWhiteish(r, g, b) || isBlackish(r, g, b) || isGrayish(r, g, b)) continue;
      return rgbToHex({ r, g, b });
    }
    return null;
  },

  /**
   * Analyze an <img> or canvas element for dominant color.
   * @param {HTMLImageElement|HTMLCanvasElement} source
   */
  fromImageElement(source) {
    const canvas = document.createElement('canvas');
    // Downscale for speed
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(source, 0, 0, 64, 64);
    const { data } = ctx.getImageData(0, 0, 64, 64);
    return dominantFromPixels(data, 64, 64);
  },

  /**
   * Main resolver — tries CSS var first, then DOM analysis.
   * @param {object} options
   * @param {string} [options.cssVar='--primary']
   * @param {string} [options.fallback='#D0FD17']
   * @param {HTMLImageElement} [options.imageElement] — pass the preview <img> for logo-based detection
   * @returns {string} hex color
   */
  resolve({ cssVar = '--primary', fallback = '#D0FD17', imageElement = null } = {}) {
    // 1. CSS custom property
    const fromCss = this.fromCssVar(cssVar);
    if (fromCss) return fromCss;

    // 2. Uploaded image dominant color (best signal for logo vectorization)
    if (imageElement?.complete && imageElement.naturalWidth > 0) {
      const fromImg = this.fromImageElement(imageElement);
      if (fromImg) return fromImg;
    }

    // 3. DOM element background colors
    const fromDom = this.fromDomAnalysis();
    if (fromDom) return fromDom;

    // 4. Fallback
    return fallback;
  }
};


// ─── Node.js Implementation ───────────────────────────────────────────────────

let nodeResolver = null;

if (typeof process !== 'undefined' && typeof window === 'undefined') {
  nodeResolver = {
    /**
     * Read --primary from a CSS file on disk.
     * Looks for: :root { --primary: ... } or --primary: ... anywhere
     */
    fromCssFile(cssPath) {
      const fs = require('fs');
      if (!fs.existsSync(cssPath)) return null;
      const css = fs.readFileSync(cssPath, 'utf8');
      // Match --primary: <value>;
      const match = css.match(/--primary\s*:\s*([^;}\n]+)/);
      if (!match) return null;
      const raw = match[1].trim();
      const parsed = parseCssColor(raw);
      return parsed ? rgbToHex(parsed) : (raw.startsWith('#') ? raw : null);
    },

    /**
     * Read --primary from a JS/TS config or theme file.
     * Looks for: primary: '#...' or "primary": "#..."
     */
    fromConfigFile(configPath) {
      const fs = require('fs');
      if (!fs.existsSync(configPath)) return null;
      const content = fs.readFileSync(configPath, 'utf8');
      const match = content.match(/['"]?primary['"]?\s*:\s*['"]([^'"]+)['"]/);
      if (!match) return null;
      const raw = match[1].trim();
      const parsed = parseCssColor(raw);
      return parsed ? rgbToHex(parsed) : (raw.startsWith('#') ? raw : null);
    },

    /**
     * Analyze an image file for dominant color.
     * Requires: npm install sharp
     * @param {string} imagePath
     */
    async fromImageFile(imagePath) {
      try {
        const sharp = require('sharp');
        const { data, info } = await sharp(imagePath)
          .resize(64, 64, { fit: 'inside' })
          .ensureAlpha()
          .raw()
          .toBuffer({ resolveWithObject: true });

        return dominantFromPixels(data, info.width, info.height);
      } catch (e) {
        // sharp not installed or failed — try canvas
        try {
          const { createCanvas, loadImage } = require('canvas');
          const img = await loadImage(imagePath);
          const canvas = createCanvas(64, 64);
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, 64, 64);
          const { data } = ctx.getImageData(0, 0, 64, 64);
          return dominantFromPixels(data, 64, 64);
        } catch (_) {
          return null;
        }
      }
    },

    /**
     * Main resolver for Node.js.
     * @param {object} options
     * @param {string} [options.cssFile]       — path to CSS file
     * @param {string} [options.configFile]    — path to theme/config file
     * @param {string} [options.imagePath]     — path to source image
     * @param {string} [options.fallback='#D0FD17']
     * @returns {Promise<string>} hex color
     */
    async resolve({ cssFile, configFile, imagePath, fallback = '#D0FD17' } = {}) {
      // 1. CSS file
      if (cssFile) {
        const fromCss = this.fromCssFile(cssFile);
        if (fromCss) return fromCss;
      }

      // 2. Config/theme file
      if (configFile) {
        const fromConfig = this.fromConfigFile(configFile);
        if (fromConfig) return fromConfig;
      }

      // 3. Image dominant color
      if (imagePath) {
        const fromImg = await this.fromImageFile(imagePath);
        if (fromImg) return fromImg;
      }

      // 4. Fallback
      return fallback;
    }
  };
}


// ─── Exports ─────────────────────────────────────────────────────────────────

if (typeof module !== 'undefined' && module.exports) {
  // CommonJS (Node.js)
  module.exports = {
    resolveColor: nodeResolver,
    hexToRgb,
    rgbToHex,
    dominantFromPixels,
    parseCssColor,
  };
} else if (typeof window !== 'undefined') {
  // Browser global
  window.ColorResolver = browserResolver;
}

// Removed ESM export for CJS compatibility

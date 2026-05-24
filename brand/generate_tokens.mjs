import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Simple TOML-ish parser for the Harezm Manifest.
 * (Focuses on [section] and key = value pairs)
 */
function parseManifest(tomlContent) {
  const result = {};
  let currentSection = null;

  const lines = tomlContent.split('\n');
  for (let line of lines) {
    line = line.trim();
    if (!line || line.startsWith('#')) continue;

    if (line.startsWith('[') && line.endsWith(']')) {
      const sectionName = line.slice(1, -1);
      const parts = sectionName.split('.');
      let target = result;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (!target[part]) target[part] = {};
        if (i === parts.length - 1) {
          currentSection = target[part];
        } else {
          target = target[part];
        }
      }
      continue;
    }

    if (line.includes('=')) {
      const [key, ...valueParts] = line.split('=');
      const k = key.trim();
      let v = valueParts.join('=').trim();
      
      // Clean quotes
      if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
      if (v.startsWith("'") && v.endsWith("'")) v = v.slice(1, -1);

      // Strip trailing comments (but only IF they are not part of a hex color or quoted string)
      // Simple fix: if it has a space before #, it's likely a comment. 
      // Or just check if the # is NOT the first non-whitespace char after we potentially removed quotes.
      if (v.includes('#') && !v.startsWith('#')) {
        v = v.split('#')[0].trim();
      }

      // Handle arrays [1, 2, 3]
      if (v.startsWith('[') && v.endsWith(']')) {
        v = v.slice(1, -1).split(',').map(item => {
          const trimmed = item.trim();
          if (trimmed.startsWith('"') && trimmed.endsWith('"')) return trimmed.slice(1, -1);
          return isNaN(trimmed) ? trimmed : Number(trimmed);
        });
      } else {
        // Handle numbers
        if (!isNaN(v) && v !== '') v = Number(v);
      }

      if (currentSection) {
        currentSection[k] = v;
      } else {
        result[k] = v;
      }
    }
  }
  return result;
}

const manifestPath = path.join(__dirname, 'manifest.toml');
const manifestStr = fs.readFileSync(manifestPath, 'utf8');
const manifest = parseManifest(manifestStr);

// --- CSS Generator ---
function generateCSS(man) {
  let css = `/* ============================================================\n`;
  css += `   GENERATED TOKENS — DO NOT EDIT MANUALLY\n`;
  css += `   Source: brand/manifest.toml\n`;
  css += `   ============================================================ */\n\n`;

  // Global Backgrounds
  css += `:root {\n`;
  css += `  --bg-light: ${man.global.bg_light};\n`;
  css += `  --bg-dark: ${man.global.bg_dark};\n`;
  css += `}\n\n`;

  // Fonts
  for (const [name, font] of Object.entries(man.fonts)) {
    css += `/* ${name} font: ${font.family} */\n`;
    css += `@import url("${font.source}");\n`;
  }
  css += `\n:root {\n`;
  for (const [name, font] of Object.entries(man.fonts)) {
    const role = font.role.replace(/"/g, ''); // Ensure no quotes in variable name
    css += `  --font-${role}: "${font.family}", sans-serif;\n`;
  }
  css += `}\n\n`;

  // Brand Pillars
  css += `/* Brand Pillars (HSL) */\n`;
  for (const [id, brand] of Object.entries(man.brands)) {
    css += `[data-brand="${id}"] {\n`;
    css += `  --h: ${brand.h};\n`;
    css += `  --s: ${brand.s}%;\n`;
    css += `  --l: ${brand.l}%;\n`;
    css += `}\n`;
  }
  css += `\n`;

  // Default Brand fallback (Harezem)
  if (man.brands.harezm) {
    css += `:root:not([data-brand]) {\n`;
    css += `  --h: ${man.brands.harezm.h};\n`;
    css += `  --s: ${man.brands.harezm.s}%;\n`;
    css += `  --l: ${man.brands.harezm.l}%;\n`;
    css += `}\n\n`;
  }

  // State Machine
  css += `/* Global State Engine */\n`;
  css += `:root {\n`;
  css += `  --primary: hsl(var(--h), var(--s), var(--l));\n`;
  css += `  --primary-faded: hsla(var(--h), var(--s), var(--l), 0.15);\n`;
  css += `}\n\n`;

  css += `/* Dark Mode Readability Boost */\n`;
  css += `[data-theme="dark"] {\n`;
  css += `  --primary: hsl(var(--h), var(--s), calc(var(--l) + 25%));\n`;
  css += `  --primary-faded: hsla(var(--h), var(--s), calc(var(--l) + 25%), 0.15);\n`;
  css += `}\n\n`;

  css += `[data-state="hover"]      { --l: calc(var(--l) + ${man.states.hover_l_delta}%); }\n`;
  css += `[data-state="active"]     { --l: calc(var(--l) + ${man.states.active_l_delta}%); }\n`;
  css += `[data-state="processing"] {\n`;
  css += `  --h: ${man.states.processing.h};\n`;
  css += `  --s: ${man.states.processing.s}%;\n`;
  css += `  --l: ${man.states.processing.l}%;\n`;
  css += `}\n`;
  css += `[data-state="error"] {\n`;
  css += `  --h: ${man.states.error.h};\n`;
  css += `}\n\n`;

  // Radius & Spacing
  css += `/* Layout */\n`;
  css += `:root {\n`;
  for (const [name, val] of Object.entries(man.radius)) {
    css += `  --radius-${name}: ${val === 9999 ? '9999px' : val + 'px'};\n`;
  }
  css += `}\n\n`;

  // ENY Contrast Solutions (V7.1)
  if (man.light_contrast && man.light_contrast.eny) {
    css += `/* ENY Contrast Techniques (V7.1) */\n`;
    css += `[data-theme="light"] {\n`;
    css += `  --eny-label-bg: ${man.light_contrast.eny.chip_bg};\n`;
    css += `  --eny-label-text: ${man.light_contrast.eny.accent_color};\n`;
    css += `  --eny-accent: ${man.light_contrast.eny.accent_color};\n`;
    css += `  --eny-text-readable: #111;\n`;
    css += `}\n`;
  }

  return css;
}

// --- Elixir Generator ---
function generateElixir(man, moduleName = 'GovernanceCoreWeb.Tokens') {
  let ex = `# GENERATED TOKENS — DO NOT EDIT MANUALLY\ndefmodule ${moduleName} do\n`;
  for (const [id, brand] of Object.entries(man.brands)) {
    ex += `  @brand_${id.replace(/-/g, '_')} %{h: ${brand.h}, s: ${brand.s}, l: ${brand.l}}\n`;
  }
  ex += `\n  def get_brand(brand) do\n`;
  ex += `    case brand do\n`;
  for (const [id, brand] of Object.entries(man.brands)) {
    ex += `      "${id}" -> @brand_${id.replace(/-/g, '_')}\n`;
  }
  ex += `      _ -> @brand_harezm\n`;
  ex += `    end\n`;
  ex += `  end\n`;
  ex += `end\n`;
  return ex;
}

// --- Writing Files ---
const tokensCSS = generateCSS(manifest);
const tokensEX = generateElixir(manifest);
const tokensJSON = JSON.stringify(manifest, null, 2);

fs.writeFileSync(path.join(__dirname, 'tokens', 'tokens.css'), tokensCSS);
fs.writeFileSync(path.join(__dirname, 'tokens', 'tokens.ex'), tokensEX);
fs.writeFileSync(path.join(__dirname, 'tokens', 'tokens.json'), tokensJSON);

console.log('✅ Tokens generated successfully!');

// --- Dynamic Token Distribution ---
console.log('⚡ Starting dynamic token distribution...');
const projects = manifest.projects || {};

for (const [key, project] of Object.entries(projects)) {
  const projectPath = project.path;
  const projectType = project.type;
  
  if (!projectPath) {
    console.warn(`⚠️ Project ${key} has no path configured.`);
    continue;
  }
  
  const fullProjectPath = path.resolve(__dirname, '..', '..', projectPath);
  
  if (!fs.existsSync(fullProjectPath)) {
    console.warn(`⚠️ Target project directory does not exist: ${fullProjectPath}`);
    continue;
  }

  try {
    if (projectType === 'astro') {
      const cssDest = path.join(fullProjectPath, 'src', 'styles', 'tokens.css');
      const cssDir = path.dirname(cssDest);
      if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
      }
      fs.writeFileSync(cssDest, tokensCSS);
      console.log(`✅ Distributed CSS token to Astro project: ${cssDest}`);
    } else if (projectType === 'phoenix') {
      // CSS token
      const cssDest = path.join(fullProjectPath, 'assets', 'css', 'tokens.css');
      const cssDir = path.dirname(cssDest);
      if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
      }
      fs.writeFileSync(cssDest, tokensCSS);
      console.log(`✅ Distributed CSS token to Phoenix project: ${cssDest}`);

      // Elixir token
      const elixirModuleName = key.startsWith('africa_ecommerce') ? 'DukkadeeWeb.Tokens' : 'GovernanceCoreWeb.Tokens';
      const elixirWebDirName = key.startsWith('africa_ecommerce') ? 'dukkadee_web' : 'governance_core_web';
      const elixirDest = path.join(fullProjectPath, 'lib', elixirWebDirName, 'tokens.ex');
      const elixirDir = path.dirname(elixirDest);
      if (!fs.existsSync(elixirDir)) {
        fs.mkdirSync(elixirDir, { recursive: true });
      }
      const specificTokensEX = generateElixir(manifest, elixirModuleName);
      fs.writeFileSync(elixirDest, specificTokensEX);
      console.log(`✅ Distributed Elixir token to Phoenix project: ${elixirDest}`);
    } else {
      console.warn(`⚠️ Unknown project type "${projectType}" for project: ${key}`);
    }
  } catch (err) {
    console.error(`❌ Failed to distribute tokens to project ${key}:`, err.message);
  }
}

console.log('✨ All tokens distributed dynamically!');


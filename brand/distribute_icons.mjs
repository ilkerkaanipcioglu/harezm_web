import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, 'assets', 'icons', 'generated', 'svg');
const ROOT_DIR = path.join(__dirname, '..', '..');

// Load dynamic project configuration from tokens.json
const TOKENS_JSON_PATH = path.join(__dirname, 'tokens', 'tokens.json');
if (!fs.existsSync(TOKENS_JSON_PATH)) {
  console.error('❌ tokens.json bulunamadı. Lütfen önce generate_tokens.mjs çalıştırın.');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(TOKENS_JSON_PATH, 'utf8'));
const PROJECTS = Object.values(manifest.projects || {}).map(proj => {
  const relativeIconPath = proj.type === 'phoenix' 
    ? path.join(proj.path, 'priv', 'static', 'icons')
    : path.join(proj.path, 'public', 'icons');
  
  return {
    name: proj.name,
    brand: proj.brand,
    suffix: proj.suffix || '',
    targetDir: path.resolve(ROOT_DIR, relativeIconPath)
  };
});

async function distribute() {
  console.log('🚀 Harezm Ekosistemi V3 - Rebranding & Smart Distribution...');

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Kaynak klasör bulunamadı: ${SOURCE_DIR}`);
    return;
  }

  function getAllSvgFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllSvgFiles(dirPath + "/" + file, arrayOfFiles);
      } else if (file.endsWith('.svg')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    });
    return arrayOfFiles;
  }

  const allIcons = getAllSvgFiles(SOURCE_DIR);
  
  for (const project of PROJECTS) {
    const targetDir = project.targetDir;
    let updatedCount = 0;
    
    try {
      if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
      }

      // Group icons by their base name (e.g., "icon_01_home")
      const groupedIcons = {};
      allIcons.forEach(iconPath => {
          const basename = path.basename(iconPath);
          // Find standard name part (e.g., icon_01_home)
          let standardName = basename.split('_nav')[0].split('_large')[0].split('_illu')[0].split('_e_')[0].split('_l_')[0];
          
          // Re-attach variant tags if they exist in the basename but remove brand tags
          let variantTag = "";
          if (basename.includes('_nav')) variantTag = "_nav";
          if (basename.includes('_illu')) variantTag = "_illu";
          if (basename.includes('_large')) variantTag = "_large";
          
          const key = standardName + variantTag;
          if (!groupedIcons[key]) groupedIcons[key] = [];
          groupedIcons[key].push({ path: iconPath, brand: basename.includes('_e_') ? 'eny' : (basename.includes('_l_') ? 'lesstupid' : 'global') });
      });

      for (const key in groupedIcons) {
          const icons = groupedIcons[key];
          let selectedIcon = null;

          if (project.brand !== 'global') {
              // Priority 1: Match brand specific icon
              selectedIcon = icons.find(i => i.brand === project.brand);
          }

          // Priority 2: Fallback to global icon if brand match doesn't exist
          if (!selectedIcon) {
              selectedIcon = icons.find(i => i.brand === 'global');
          }

          if (selectedIcon) {
              const originalBasename = path.basename(selectedIcon.path);
              // Important: We distribute as the standard name to overwrite old icons in projects
              // But if it's mark-specific, we keep the original name to allow specific calls
              // However, the request says "uyuşanları gönder", usually meaning use them as primary.
              // To provide both, we'll copy it twice: once as standard, once as its original name if it's branded.
              
              let destName = originalBasename;
              
              // If it's a branded icon replacing a generic one, we also copy it to the generic slot
              if (selectedIcon.brand !== 'global') {
                  const genericName = originalBasename.replace('_e_', '_').replace('_l_', '_');
                  fs.copyFileSync(selectedIcon.path, path.join(targetDir, genericName));
              }

              fs.copyFileSync(selectedIcon.path, path.join(targetDir, originalBasename));
              updatedCount++;
          }
      }
      console.log(`✅ ${project.name} [${project.brand}] -> ${updatedCount} ikon grubu güncellendi.`);
    } catch (err) {
      console.error(`❌ ${project.name} için dağıtım başarısız:`, err.message);
    }
  }

  console.log('✨ Tüm platformlar güncellendi.');
}

distribute();

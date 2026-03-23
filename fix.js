const fs = require('fs');
const path = require('path');

const map = {
  'ÄŸ': 'ğ',
  'ÅŸ': 'ş',
  'Ä±': 'ı',
  'Ã¶': 'ö',
  'Ã¼': 'ü',
  'Ã§': 'ç',
  'Äž': 'Ğ',
  'Åž': 'Ş',
  'Ä°': 'İ',
  'Ã–': 'Ö',
  'Ãœ': 'Ü',
  'Ã‡': 'Ç',
  'Ã¢': 'â',
  'â€™': '’',
  'â€œ': '“',
  'â€”': '”',
  'â€': '”'
};

function fixDir(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) fixDir(full);
    else if (full.endsWith('.astro')) {
      let content = fs.readFileSync(full, 'utf8');
      let changed = false;
      
      // Need to replace larger sequences first (like â€™) before smaller ones (like â)
      const sortedKeys = Object.keys(map).sort((a,b) => b.length - a.length);
      
      for (const bad of sortedKeys) {
        const good = map[bad];
        if (content.includes(bad)) {
          content = content.split(bad).join(good);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(full, content, 'utf8');
        console.log('Fixed', full);
      }
    }
  }
}
fixDir('./src');

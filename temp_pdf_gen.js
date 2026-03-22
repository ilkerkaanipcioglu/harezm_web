const fs = require('fs');
const { execSync } = require('child_process');

try {
  console.log('Reading files...');
  const svgContent = fs.readFileSync('public/images/harezm-logo-full.svg');
  const base64Svg = svgContent.toString('base64');
  
  let mdContent = fs.readFileSync('cfo_ajandasi.md', 'utf8');
  
  console.log('Replacing image source with base64 data URI...');
  mdContent = mdContent.replace('public/images/harezm-logo-full.svg', `data:image/svg+xml;base64,${base64Svg}`);
  
  fs.writeFileSync('cfo_ajandasi_temp.md', mdContent);
  
  console.log('Generating PDF...');
  execSync('npx md-to-pdf cfo_ajandasi_temp.md', { stdio: 'inherit' });
  
  console.log('Moving PDF to public directory...');
  fs.renameSync('cfo_ajandasi_temp.pdf', 'public/harezm_cfo_ajandasi.pdf');
  
  console.log('Cleaning up...');
  fs.unlinkSync('cfo_ajandasi_temp.md');
  
  console.log('Done.');
} catch (error) {
  console.error('Error generating PDF:', error);
  process.exit(1);
}

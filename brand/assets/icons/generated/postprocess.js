const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, 'svg');
const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));

for (const file of files) {
    const filePath = path.join(svgDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Replace near-black with currentColor
    content = content.replace(/fill="#[0-3][0-9a-f][0-3][0-9a-f][0-3][0-9a-f]"/gi, 'fill="currentColor"');
    content = content.replace(/stroke="#[0-3][0-9a-f][0-3][0-9a-f][0-3][0-9a-f]"/gi, '');
    
    // 2. Replace the background white with transparent (or delete the path)
    // Actually, ImageTracer creates large filled paths for backgrounds.
    // It's safer to just set near-white to transparent.
    content = content.replace(/fill="#f[a-f0-9][f[a-f0-9][f[a-f0-9]"/gi, 'fill="transparent"');
    content = content.replace(/stroke="#f[a-f0-9][f[a-f0-9][f[a-f0-9]"/gi, '');
    
    // 3. Replace the accent color (yellowish) with CSS variable
    // Looking at the SVGO output, the yellow is things like #d0fd17 or #f8f6e9.
    // Basically anything that is not transparent or currentColor
    content = content.replace(/fill="#[^"]+"/gi, (match) => {
        if (match.includes('currentColor') || match.includes('transparent')) return match;
        return 'fill="var(--accent, #D0FD17)"';
    });
    
    // Clean up empty strokes
    content = content.replace(/ stroke=""/gi, '');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Processed colors for:', file);
}

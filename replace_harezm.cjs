const fs = require('fs');
const path = require('path');

const targetDir = 'b:\\DEV\\harezm._web';

// Directories and file extensions to ignore
const ignoreDirs = ['node_modules', '.git', '.astro', 'dist'];
const ignoreExts = ['.png', '.jpg', '.jpeg', '.gif', '.pdf', '.woff', '.woff2', '.ttf', '.eot', '.ico', '.webp'];

function replaceInString(str) {
    let result = str;
    
    // First harezm variations
    result = result.replace(/Harezm/g, 'Harezm');
    result = result.replace(/harezm/g, 'harezm');
    result = result.replace(/HAREZM/g, 'HAREZM');
    
    // Then harezm variations
    result = result.replace(/Harezm/g, 'Harezm');
    result = result.replace(/harezm/g, 'harezm');
    result = result.replace(/HAREZM/g, 'HAREZM');
    
    return result;
}

function processDirectoryReorder(dir) {
    const minFiles = fs.readdirSync(dir);
    
    // Process children first (bottom-up)
    for (const file of minFiles) {
        const fullPath = path.join(dir, file);
        if (ignoreDirs.includes(file)) continue;
        
        try {
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                processDirectoryReorder(fullPath);
            }
        } catch (err) {}
    }
    
    // Now rename items in this directory
    const files = fs.readdirSync(dir);
    for (let file of files) {
        if (ignoreDirs.includes(file)) continue;
        const newFile = replaceInString(file);
        
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, newFile);
        
        if (oldPath !== newPath) {
            fs.renameSync(oldPath, newPath);
            console.log(`Renamed: ${oldPath} -> ${newPath}`);
        }
    }
}

function processDirectoryContent(dir) {
    const minFiles = fs.readdirSync(dir);
    
    for (const file of minFiles) {
        const fullPath = path.join(dir, file);
        if (ignoreDirs.includes(file)) continue;
        
        try {
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                processDirectoryContent(fullPath);
            } else {
                const ext = path.extname(fullPath).toLowerCase();
                if (ignoreExts.includes(ext)) continue;
                
                const content = fs.readFileSync(fullPath, 'utf8');
                const newContent = replaceInString(content);
                
                if (content !== newContent) {
                    fs.writeFileSync(fullPath, newContent, 'utf8');
                    console.log(`Updated content: ${fullPath}`);
                }
            }
        } catch (err) {
            console.error(`Error processing ${fullPath}: ${err.message}`);
        }
    }
}

console.log("Starting renaming pass...");
processDirectoryReorder(targetDir);

console.log("Starting content replacement pass...");
processDirectoryContent(targetDir);

console.log("Done.");

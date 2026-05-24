import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.join(__dirname, 'assets', 'icons', 'generated');
const VECTORIZE_SCRIPT = path.join(BASE_DIR, 'vectorize.js');

const CATEGORIES = [
    { name: 'eny/nav', brand: 'eny' },
    { name: 'eny/illu', brand: 'eny' },
    { name: 'lesstupid/nav', brand: 'lesstupid' },
    { name: 'lesstupid/illu', brand: 'lesstupid' }
];

async function run() {
    console.log('🚀 Markaya Özel İkon Vektörizasyonu Başlıyor...');

    for (const cat of CATEGORIES) {
        const srcDir = path.join(BASE_DIR, cat.name);
        const destDir = path.join(BASE_DIR, 'svg', cat.name);

        if (!fs.existsSync(srcDir)) {
            console.log(`⚠️ Klasör bulunamadı, atlanıyor: ${cat.name}`);
            continue;
        }

        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.png'));
        console.log(`📂 İşleniyor: ${cat.name} (${files.length} dosya)`);

        for (const file of files) {
            const srcFile = path.join(srcDir, file);
            const destFile = path.join(destDir, file.replace('.png', '.svg'));
            
            try {
                // Uzaktaki vectorize.js scriptini çağır
                execSync(`node "${VECTORIZE_SCRIPT}" "${srcFile}" "${destFile}" "${cat.brand}"`, { stdio: 'inherit' });
            } catch (err) {
                console.error(`❌ Hata: ${file} işlenemedi.`);
            }
        }
    }

    console.log('✨ Tüm işlemler tamamlandı.');
}

run();

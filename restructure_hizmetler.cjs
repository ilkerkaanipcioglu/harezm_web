const fs = require('fs');

const file = 'b:/DEV/harezm._web/src/pages/hizmetler.astro';
let content = fs.readFileSync(file, 'utf8');

const cat1 = `
                <!-- Kategori 1 Başlığı -->
                <div class="md:col-span-12 mt-4 mb-2 border-b border-border-main pb-4">
                    <h3 class="text-2xl font-serif text-teal flex items-center gap-3">
                        <span class="material-symbols-outlined">account_tree</span>
                        1. SAP Platformu
                    </h3>
                </div>
`;

const cat2 = `
                <!-- Kategori 2 Başlığı -->
                <div class="md:col-span-12 mt-12 mb-2 border-b border-border-main pb-4">
                    <h3 class="text-2xl font-serif text-teal flex items-center gap-3">
                        <span class="material-symbols-outlined">receipt_long</span>
                        2. e-Dönüşüm & Dijitalleştirme
                    </h3>
                </div>
`;

const cat3 = `
                <!-- Kategori 3 Başlığı -->
                <div class="md:col-span-12 mt-12 mb-2 border-b border-border-main pb-4">
                    <h3 class="text-2xl font-serif text-teal flex items-center gap-3">
                        <span class="material-symbols-outlined">currency_exchange</span>
                        3. Finansal Otomasyon & Banka Entegrasyonu
                    </h3>
                </div>
`;

const cat4 = `
                <!-- Kategori 4 Başlığı -->
                <div class="md:col-span-12 mt-12 mb-2 border-b border-border-main pb-4">
                    <h3 class="text-2xl font-serif text-teal flex items-center gap-3">
                        <span class="material-symbols-outlined">smart_toy</span>
                        4. AI & Strateji
                    </h3>
                </div>
`;

const gridStart = '<div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">';
const gridEnd = '</div>\n        </div>\n    </section>';

const startIndex = content.indexOf(gridStart) + gridStart.length;
const endIndex = content.indexOf(gridEnd);

const gridContent = content.substring(startIndex, endIndex);

const cards = {};
const regex = /<!-- Card (\d+): [^>]+ -->([\s\S]*?)(?=<!-- Card \d+: |$)/g;
let match;
while ((match = regex.exec(gridContent)) !== null) {
    cards[match[1]] = match[0];
}

let newGridContent = '\n' + cat1 + '\n' +
    (cards['1'] || '') + '\n' +
    (cards['5'] || '') + '\n' +
    (cards['6'] || '') + '\n' +
    (cards['8'] || '') + '\n' +
    (cards['12'] || '') + '\n' +
    (cards['13'] || '') + '\n' +
    cat2 + '\n' +
    (cards['9'] || '') + '\n' +
    cat3 + '\n' +
    '                <!-- Yeni eklenecek sayfalar için yer tutucu -->\n' +
    '                <div class="md:col-span-12 glass-card p-6 rounded-2xl flex items-center gap-4 text-text-70"><span class="material-symbols-outlined">pending</span><span>Online DBS, POS Raporlama ve Enflasyon Muhasebesi modülleri hazırlanıyor.</span></div>\n' +
    cat4 + '\n' +
    (cards['10'] || '') + '\n' +
    (cards['11'] || '') + '\n' +
    (cards['7'] || '') + '\n            ';

let newContent = content.substring(0, startIndex) + newGridContent + content.substring(endIndex);

fs.writeFileSync(file, newContent, 'utf8');
console.log('Restructure complete.');

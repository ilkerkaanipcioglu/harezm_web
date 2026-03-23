const fs = require('fs');

const file = 'b:/DEV/harezm._web/src/pages/hizmetler.astro';
let content = fs.readFileSync(file, 'utf8');

// The chunks we want to insert
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

// Extract cards. We use regex to grab each card block safely.
// They all start with `<!-- Card N: ... -->` and end before the next `<!-- Card` or `</div>\n        </div>\n    </section>`

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

// Assemble the new grid layout
let newGridContent = '\n' + cat1 + '\n' +
    (cards['1'] || '') +
    (cards['5'] || '') +
    (cards['6'] || '') +
    (cards['8'] || '') +
    (cards['12'] || '') +
    (cards['13'] || '') + '\n' +
    cat2 + '\n' +
    (cards['9'] || '') + '\n' +
    cat3 + '\n' +
    '                <!-- Yeni eklenecek sayfalar için yer tutucu -->\n' +
    cat4 + '\n' +
    (cards['10'] || '') +
    (cards['11'] || '') +
    (cards['7'] || '');

let newContent = content.substring(0, startIndex) + newGridContent + '\n            ' + content.substring(endIndex);

fs.writeFileSync(file, newContent, 'utf8');
console.log('Done restructuring.');

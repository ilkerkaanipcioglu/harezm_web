import fs from 'fs';
import path from 'path';

const logos = [
  { name: 'aselsan', domain: 'aselsan.com' },
  { name: 'pfizer', domain: 'pfizer.com' },
  { name: 'tskb', domain: 'tskb.com.tr' },
  { name: 'evyap', domain: 'evyap.com.tr' },
  { name: 'ferrero', domain: 'ferrero.com' },
  { name: 'temsa', domain: 'temsa.com' },
  { name: 'borcelik', domain: 'borcelik.com' },
  { name: 'hayat', domain: 'hayat.com.tr' },
  { name: 'wavin', domain: 'wavin.com' },
  { name: 'ucb', domain: 'ucb.com' }
];

const dir = './public/images/logos';

async function download() {
  for (const logo of logos) {
    const dest = path.join(dir, `${logo.name}.png`);
    try {
      const res = await fetch(`https://icon.horse/icon/${logo.domain}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(arrayBuffer));
      console.log(`[OK] Downloaded ${logo.name}`);
    } catch (e) {
      console.error(`[FAIL] Failed to download ${logo.name}`, e.message);
    }
  }
}

download();

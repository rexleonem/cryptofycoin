import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { finished } from 'node:stream/promises';

const images = [
  'coin.png',
  'menu.svg',
  'cfyd.jpg',
  'blockchain.jpg',
  'token.jpg',
  'youtube.jpg',
  'bot.jpg',
  'smartc.jpg',
  'design.png',
  'coinstore.jpg',
  'p2b.jpg',
  'bitmart.jpg',
  'mexc.jpg',
  'bsc.jpg',
  'dxsale.jpg',
  '2.jpg'
];

const targetDir = path.join(process.cwd(), 'public', 'image');
fs.mkdirSync(targetDir, { recursive: true });

async function downloadImage(filename) {
  const url = `https://cryptofycoin.com/image/${filename}`;
  const filepath = path.join(targetDir, filename);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${filename}: ${res.status} ${res.statusText}`);
  }
  
  const fileStream = fs.createWriteStream(filepath, { flags: 'wx' });
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
  console.log(`Downloaded ${filename}`);
}

async function run() {
  for (const img of images) {
    try {
      await downloadImage(img);
    } catch (e) {
      if (e.code === 'EEXIST') {
         console.log(`File ${img} already exists`);
      } else {
         console.error(e.message);
      }
    }
  }
}

run();

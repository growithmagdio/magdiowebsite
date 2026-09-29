import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import puppeteer from 'puppeteer';
import { mkdirSync } from 'node:fs';

const DIST = join(process.cwd(), 'dist');
const PORT = 4174;

console.log('1. Reading shell index.html...');
const shell = await readFile(join(DIST, 'index.html'), 'utf8');

console.log('2. Starting server...');
const server = createServer(async (req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]);
  if (extname(path)) {
    try {
      const file = join(DIST, path);
      if ((await stat(file)).isFile()) {
        res.writeHead(200);
        return res.end(await readFile(file));
      }
    } catch { }
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(shell);
});
await new Promise((r) => server.listen(PORT, r));
console.log(`Server listening on ${PORT}`);

console.log('3. Launching browser with temp user-data-dir...');
const tempProfile = join(process.cwd(), 'scratch', 'temp_profile_' + Date.now());
mkdirSync(tempProfile, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: 'new',
  userDataDir: tempProfile,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-gpu',
    '--remote-debugging-port=0'
  ],
});

console.log('4. Creating page...');
const page = await browser.newPage();

console.log('5. Navigating to http://localhost:' + PORT + '/');
await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'domcontentloaded', timeout: 10000 });
console.log('6. Page loaded!');
const title = await page.title();
console.log('Title:', title);
await browser.close();
server.close();
console.log('TEST COMPLETE SUCCESS!');

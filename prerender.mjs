// scripts/prerender.mjs
// Runs after `vite build`. Opens every route from dist/sitemap.xml in headless Chrome,
// waits for React to render, and saves the fully rendered HTML to dist/<route>/index.html.
// Result: crawlers (Voiceflow, Google, ChatGPT, Perplexity) get real page content without running JS.

import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import puppeteer from 'puppeteer';

const DIST = join(process.cwd(), 'dist');
const PORT = 4173;

function getSystemChromePath() {
  const possiblePaths = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  for (const p of possiblePaths) {
    if (p && existsSync(p)) return p;
  }
  return undefined;
}

// Extra routes not listed in sitemap.xml (optional)
const EXTRA_ROUTES = ['/'];

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml',
  '.txt': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.gif': 'image/gif', '.ico': 'image/x-icon', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.mp4': 'video/mp4',
};

// Keep the original empty SPA shell in memory so every route renders from a clean start
const shell = await readFile(join(DIST, 'index.html'), 'utf8');

// 1) Local static server with SPA fallback (same behaviour as your live host)
const server = createServer(async (req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0]);
  if (extname(path)) {
    try {
      const file = join(DIST, path);
      if ((await stat(file)).isFile()) {
        res.writeHead(200, { 'Content-Type': MIME[extname(path)] || 'application/octet-stream' });
        return res.end(await readFile(file));
      }
    } catch { /* fall through to shell */ }
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(shell);
});
await new Promise((r) => server.listen(PORT, r));

// 2) Collect routes from sitemap.xml
let routes = [...EXTRA_ROUTES];
try {
  const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8');
  for (const m of sitemap.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)) {
    routes.push(new URL(m[1]).pathname);
  }
} catch {
  console.warn('⚠ dist/sitemap.xml not found — only EXTRA_ROUTES will be prerendered');
}
routes = [...new Set(routes.map((r) => (r !== '/' ? r.replace(/\/$/, '') : r)))];
console.log(`Prerendering ${routes.length} routes...`);

// 3) Render each route in headless Chrome
const chromePath = getSystemChromePath();
const browser = await puppeteer.launch({
  headless: true,
  ...(chromePath ? { executablePath: chromePath } : {}),
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1366, height: 900 });

// Block all external requests (GTM, analytics, Firebase, external APIs) so rendering is instant
await page.setRequestInterception(true);
page.on('request', (req) => {
  if (!req.url().startsWith(`http://localhost:${PORT}`)) {
    req.abort().catch(() => {});
  } else {
    req.continue().catch(() => {});
  }
});

let failed = 0;
for (const route of routes) {
  try {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
    await new Promise((r) => setTimeout(r, 200));

    // Scroll to the bottom so scroll-triggered / lazy sections render
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let y = 0;
        let count = 0;
        const timer = setInterval(() => {
          window.scrollBy(0, 600);
          y += 600;
          count++;
          if (y >= document.body.scrollHeight || count > 20) { clearInterval(timer); resolve(); }
        }, 30);
      });
      window.scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 200));

    const html = await page.content();
    const outDir = join(DIST, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), html);

    const words = (await page.evaluate(() => document.body.innerText)).split(/\s+/).length;
    process.stdout.write(`✓ ${route}  (${words} words)\n`);
  } catch (err) {
    failed++;
    process.stdout.write(`✗ ${route}  ${err.message}\n`);
  }
}

await browser.close();
server.close();
console.log(`Done. ${routes.length - failed} ok, ${failed} failed.`);
if (failed) process.exitCode = 1;

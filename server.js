import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    return res.end('Method Not Allowed');
  }

  const cleanUrl = req.url.split('?')[0];
  let reqPath = decodeURIComponent(cleanUrl);
  if (reqPath.endsWith('/') && reqPath.length > 1) {
    reqPath = reqPath.slice(0, -1);
  }

  // 1. Direct static file match (e.g. /favicon.png or /assets/index-xxx.js)
  let filePath = path.join(DIST_DIR, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return serveFile(res, filePath);
  }

  // 2. Nested directory index.html (e.g. /about -> dist/about/index.html)
  let dirIndexPath = path.join(DIST_DIR, reqPath, 'index.html');
  if (fs.existsSync(dirIndexPath) && fs.statSync(dirIndexPath).isFile()) {
    return serveFile(res, dirIndexPath);
  }

  // 3. Flat HTML file (e.g. /about -> dist/about.html)
  let flatHtmlPath = path.join(DIST_DIR, `${reqPath}.html`);
  if (fs.existsSync(flatHtmlPath) && fs.statSync(flatHtmlPath).isFile()) {
    return serveFile(res, flatHtmlPath);
  }

  // 4. Custom 404 page
  let notFoundPath = path.join(DIST_DIR, '404', 'index.html');
  if (!fs.existsSync(notFoundPath)) {
    notFoundPath = path.join(DIST_DIR, '404.html');
  }

  if (fs.existsSync(notFoundPath) && fs.statSync(notFoundPath).isFile()) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    return fs.createReadStream(notFoundPath).pipe(res);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  let cacheControl = 'no-cache';
  if (filePath.includes(path.join('dist', 'assets'))) {
    cacheControl = 'public, max-age=31536000, immutable';
  } else if (ext === '.html') {
    cacheControl = 'public, max-age=0, must-revalidate';
  }

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': cacheControl
  });
  fs.createReadStream(filePath).pipe(res);
}

server.listen(PORT, () => {
  console.log(`🌐 MAGDIO Static SSG Server running at http://localhost:${PORT}`);
});

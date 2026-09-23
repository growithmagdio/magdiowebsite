import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { mockBlogs } from './src/utils/blogService.js';
import { servicesData } from './src/data/servicesData.js';
import { industriesData } from './src/data/industriesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');
const SERVER_PORT = 0;

function writeHtmlFile(filePath, htmlContent) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, htmlContent, 'utf-8');
}

function getSystemChromePath() {
  const possiblePaths = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];

  for (const p of possiblePaths) {
    if (p && fs.existsSync(p)) {
      return p;
    }
  }
  return undefined;
}

async function fetchFirestoreBlogs() {
  let firestoreBlogs = [];
  return firestoreBlogs;
}

function startLocalStaticServer(distDir, port) {
  const mimeTypes = {
    '.html': 'text/html',
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
  };

  const server = http.createServer((req, res) => {
    const cleanUrl = req.url.split('?')[0];
    let filePath = path.join(distDir, cleanUrl);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': mimeTypes[ext] || 'application/octet-stream',
        'Cache-Control': 'no-cache'
      });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // Fallback SPA routing to main index.html template
    const indexPath = path.join(distDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache'
      });
      fs.createReadStream(indexPath).pipe(res);
      return;
    }

    res.writeHead(404);
    res.end('Not found');
  });

  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => {
      const activePort = server.address().port;
      console.log(`🌐 Local static preview server running at http://127.0.0.1:${activePort}`);
      resolve({ server, port: activePort });
    });
  });
}

async function runPrerender() {
  console.log('🚀 Starting Full Static HTML Pre-rendering for Voiceflow & SEO...');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist directory does not exist. Run vite build first.');
    process.exit(1);
  }

  const blogs = await fetchFirestoreBlogs();

  // Define route list
  const routesToPrerender = new Set([
    '/',
    '/services',
    '/about',
    '/contact',
    '/portfolio',
    '/mission',
    '/blog',
    '/blogs',
    '/admin',
    // Landing pages
    '/digital-marketing-company-in-chennai-magdio',
    '/digital-marketing-company-chennai-magdio',
    '/digital-marketing-agency-in-chennai-magdio',
    '/digital-marketing-agency-chennai-magdio',
    '/digital-marketing-company-tamilnadu-magdio',
    '/seo-company-in-chennai-magdio',
    '/seo-company-chennai-magdio',
    '/seo-agency-in-chennai-magdio',
    '/seo-agency-chennai-magdio',
    '/seo-services-chennai-magdio',
    '/seo-services-in-chennai-magdio',
    '/seo-services-tamilnadu-magdio',
    '/geo-services-agency-chennai-magdio',
    '/geo-services-agency-in-chennai-magdio',
    '/geo-service-agency-in-chennai-magdio',
    '/geo-services-company-in-chennai-magdio',
    '/geo-services-tamilnadu-magdio',
    '/social-media-marketing-agency-in-chennai-magdio',
    '/social-media-marketing-agency-chennai-magdio',
    '/social-media-marketing-company-in-chennai-magdio',
    '/social-media-marketing-tamilnadu-magdio',
    '/google-ads-agency-chennai-magdio',
    '/google-ads-agency-in-chennai-magdio',
    '/google-ads-company-in-chennai-magdio',
    '/google-ads-company-chennai-magdio',
    '/google-ads-tamilnadu-magdio',
    '/best-performance-marketing-agency-in-chennai-magdio',
    '/performance-marketing-agency-in-chennai-magdio',
    '/performance-marketing-agency-chennai-magdio',
    '/performance-marketing-company-in-chennai-magdio',
    '/performance-marketing-tamilnadu-magdio',
    '/meta-ads-agency-in-chennai-magdio',
    '/meta-ads-agency-chennai-magdio',
    '/meta-ads-company-in-chennai-magdio',
    '/meta-ads-tamilnadu-magdio',
    '/linkedin-marketing-b2b-marketing-in-chennai-magdio',
    '/linkedin-marketing-agency-in-chennai-magdio',
    '/linkedin-ads-agency-in-chennai-magdio',
    '/linkedin-ads-agency-chennai-magdio',
    '/linkedin-ads-tamilnadu-magdio',
    '/youtube-marketing-agency-chennai-magdio',
    '/youtube-marketing-agency-in-chennai-magdio',
    '/youtube-ads-agency-in-chennai-magdio',
    '/youtube-ads-agency-chennai-magdio',
    '/youtube-ads-tamilnadu-magdio',
    '/whatsapp-marketing-services-in-chennai-magdio',
    '/whatsapp-marketing-agency-in-chennai-magdio',
    '/whatsapp-marketing-agency-chennai-magdio',
    '/whatsapp-marketing-chennai-magdio',
    '/whatsapp-marketing-tamilnadu-magdio',
    // Category services
    '/services/marketing',
    '/services/development',
    '/services/branding',
    '/services/consulting',
    '/services/analytics',
    // Case studies
    '/portfolio/haber-living-seo-growth',
    '/portfolio/automobile-ecommerce-seo-growth',
    '/portfolio/dreamzil-meta-ads-growth',
    '/portfolio/odoo-erp-lead-generation',
    '/portfolio/bitty-clicks-seo-case-study',
    '/portfolio/badie-studio-seo-case-study',
    '/portfolio/namma-markt-seo-case-study',
    '/portfolio/sasvitha-home-finance-seo-case-study'
  ]);

  // Add all service detail routes from servicesData
  servicesData.forEach(s => {
    if (s.id) {
      routesToPrerender.add(`/services/${s.id}`);
    }
  });

  // Add all industry detail routes from industriesData
  industriesData.forEach(i => {
    if (i.id) {
      routesToPrerender.add(`/industries/${i.id}`);
    }
  });

  // Add all blog detail routes
  blogs.forEach(b => {
    if (b.slug) {
      routesToPrerender.add(`/blog/${b.slug}`);
      routesToPrerender.add(`/blogs/${b.slug}`);
    }
  });

  console.log(`📋 Total routes queued for pre-rendering: ${routesToPrerender.size}`);

  const { server, port: activePort } = await startLocalStaticServer(DIST_DIR, SERVER_PORT);

  const executablePath = getSystemChromePath();
  console.log(`🌐 Launching headless browser for static rendering... ${executablePath ? `(Using system browser: ${executablePath})` : ''}`);

  const tmpUserDataDir = path.join(__dirname, 'scratch', `chrome_data_${Date.now()}`);
  fs.mkdirSync(tmpUserDataDir, { recursive: true });

  const launchOptions = {
    headless: 'shell',
    args: [
      '--headless=shell',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--disable-translate',
      `--user-data-dir=${tmpUserDataDir}`
    ]
  };

  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }

  const browser = await puppeteer.launch(launchOptions);

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Prerenderer');

  const sitemapUrls = [];
  let renderedCount = 0;

  for (const route of routesToPrerender) {
    const targetUrl = `http://127.0.0.1:${activePort}${route}`;
    console.log(`⏳ Pre-rendering route: ${route}...`);
    try {
      await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      
      // Wait for actual page content (heading, main section, title) to be populated in #root
      await page.waitForFunction(() => {
        const root = document.querySelector('#root');
        if (!root) return false;
        
        // Ensure PageLoader spinner is gone
        if (root.querySelector('.animate-spin')) return false;

        // Check if meaningful content elements exist inside root
        const h1 = root.querySelector('h1');
        const main = root.querySelector('main');
        const heading = root.querySelector('h2, h3, h4');

        return (h1 && h1.innerText.trim().length > 0) || 
               (main && main.innerText.trim().length > 50) || 
               (heading && heading.innerText.trim().length > 0);
      }, { timeout: 8000 });

      // Small extra pause to allow React Helmet tags (title, meta, canonical) to flush
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 150)));

      const pageHtml = await page.content();

      if (route === '/') {
        writeHtmlFile(path.join(DIST_DIR, 'index.html'), pageHtml);
      } else {
        const routePath = route.startsWith('/') ? route.slice(1) : route;
        writeHtmlFile(path.join(DIST_DIR, routePath, 'index.html'), pageHtml);
        writeHtmlFile(path.join(DIST_DIR, `${routePath}.html`), pageHtml);
      }

      renderedCount++;
      console.log(`  [${renderedCount}/${routesToPrerender.size}] ✅ Pre-rendered HTML for ${route}`);

      if (!route.includes('/admin')) {
        sitemapUrls.push(`
  <url>
    <loc>${BASE_URL}${route === '/' ? '' : route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/services') || route.includes('-magdio') ? '0.9' : '0.8'}</priority>
  </url>`);
      }
    } catch (err) {
      console.error(`  ❌ Error pre-rendering ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  // Generate sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapUrls.join('')}
</urlset>`;

  writeHtmlFile(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml);
  writeHtmlFile(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml);
  console.log('✅ sitemap.xml generated with all pre-rendered URLs.');

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/*
Disallow: /*?*v=
Disallow: /*?v=*

Sitemap: ${BASE_URL}/sitemap.xml
`;

  writeHtmlFile(path.join(DIST_DIR, 'robots.txt'), robotsTxt);
  writeHtmlFile(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully.');

  console.log(`🎉 Static HTML Pre-rendering Finished! Successfully generated HTML for ${renderedCount} pages.`);
}

runPrerender().catch(err => {
  console.error('❌ Prerender script failed:', err);
  process.exit(1);
});

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
const BASE_URL = 'https://www.magdio.com';
const SERVER_PORT = 41733;

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
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
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
  try {
    const res = await fetch(
      'https://firestore.googleapis.com/v1/projects/growth-studio-2026/databases/(default)/documents/blogs',
      { signal: AbortSignal.timeout(6000) }
    );
    if (res.ok) {
      const data = await res.json();
      if (data.documents && Array.isArray(data.documents)) {
        firestoreBlogs = data.documents.map(doc => {
          const fields = doc.fields || {};
          const docId = doc.name.split('/').pop();
          const title = fields.title?.stringValue || 'Untitled Article';
          const rawContent = fields.content?.stringValue || '';
          const snippet = rawContent.replace(/<[^>]*>/g, '').replace(/[\s\n]+/g, ' ').trim();
          const excerpt = fields.excerpt?.stringValue || (snippet ? snippet.slice(0, 160) + '...' : 'Read full article for insights.');
          const slug = fields.slug?.stringValue || title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
          
          return {
            id: docId,
            slug,
            title,
            excerpt,
            content: rawContent,
            author: fields.author?.stringValue || 'Admin',
            category: fields.category?.stringValue || 'Technology',
            readTime: fields.readTime?.stringValue || '5 min read',
            date: fields.date?.stringValue || 'Oct 2026',
            imageUrl: fields.imageUrl?.stringValue || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
            metaTitle: fields.metaTitle?.stringValue || `${title} | Magdio`,
            metaDescription: fields.metaDescription?.stringValue || excerpt,
            canonicalUrl: fields.canonicalUrl?.stringValue || `${BASE_URL}/blog/${slug}`
          };
        });
      }
    }
  } catch (err) {
    console.warn('⚠️ Firestore fetch during build skipped, falling back to mock blogs:', err.message);
  }

  const allSources = [...firestoreBlogs, ...mockBlogs];
  const seenSlugs = new Set();
  const uniqueBlogs = [];

  for (const blog of allSources) {
    const slug = (blog.slug || blog.id || '').toLowerCase().trim();
    if (!slug || seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);
    uniqueBlogs.push(blog);
  }

  return uniqueBlogs;
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
      console.log(`🌐 Local static preview server running at http://127.0.0.1:${port}`);
      resolve(server);
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

  const server = await startLocalStaticServer(DIST_DIR, SERVER_PORT);

  const executablePath = getSystemChromePath();
  console.log(`🌐 Launching headless browser for static rendering... ${executablePath ? `(Using system browser: ${executablePath})` : ''}`);

  const launchOptions = {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run'
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
    const targetUrl = `http://127.0.0.1:${SERVER_PORT}${route}`;
    try {
      await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
      // Wait for React app to mount and render content in #root
      await page.waitForSelector('#root > *', { timeout: 15000 });
      // Small pause to allow Suspense components and React Helmet tags to populate
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 400)));

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

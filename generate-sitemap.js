import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { servicesData } from './src/data/servicesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.magdio.com';


const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/portfolio',
  '/portfolio/haber-living-seo-growth',
  '/portfolio/automobile-ecommerce-seo-growth',
  '/portfolio/dreamzil-meta-ads-growth',
  '/portfolio/odoo-erp-lead-generation',
  '/portfolio/bitty-clicks-seo-case-study',
  '/portfolio/badie-studio-seo-case-study',
  '/portfolio/namma-markt-seo-case-study',
  '/portfolio/sasvitha-home-finance-seo-case-study',
  '/services',
  '/services/performance-marketing',
  '/blog',
  '/mission'
];

async function generateSitemap() {
  console.log('Generating sitemap...');
  
  const urls = [];
  const addUrl = (route, priority) => {
    urls.push(`
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`);
  };

  // Add static routes
  staticRoutes.forEach(route => {
    const priority = route === '/' ? '1.0' : '0.8';
    addUrl(route, priority);
  });

  // Add dynamic service pages
  servicesData.forEach(service => {
    const route = `/services/${service.id}`;
    addUrl(route, '0.9');
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('')}
</urlset>`;

  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
  console.log('✅ sitemap.xml generated successfully.');

  // Write robots.txt
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /*?*v=
Disallow: /*?v=*
Disallow: /*?*version=
Disallow: /*?version=*

Sitemap: ${BASE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully.');
}

generateSitemap();

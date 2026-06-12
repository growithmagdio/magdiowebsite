import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { servicesData } from './src/data/servicesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.magdio.com';

// Define explicit custom slugs for SEO
const customServiceSlugs = {
  'digital-marketing': '/digital-marketing-company-tamilnadu-magdio',
  'seo-services': '/seo-services-tamilnadu-magdio',
  'social-media-marketing': '/social-media-marketing-tamilnadu-magdio',
  'google-ads': '/google-ads-tamilnadu-magdio',
  'performance-marketing': '/performance-marketing-tamilnadu-magdio',
  'linkedin-ads': '/linkedin-ads-tamilnadu-magdio',
  'youtube-ads': '/youtube-ads-tamilnadu-magdio',
  'whatsapp-marketing': '/whatsapp-marketing-tamilnadu-magdio'
};

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/portfolio',
  '/services',
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
    // If it has a custom SEO slug, use that. Otherwise use the standard /services/id pattern
    const route = customServiceSlugs[service.id] || `/services/${service.id}`;
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

Sitemap: ${BASE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully.');
}

generateSitemap();

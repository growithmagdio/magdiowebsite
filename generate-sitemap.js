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
  '/services',
  '/blog',
  '/mission',

  // 10 Chennai Keyword Pages & Search Aliases
  '/digital-marketing-company-in-chennai-magdio',
  '/digital-marketing-company-chennai-magdio',
  '/digital-marketing-agency-in-chennai-magdio',
  '/digital-marketing-agency-chennai-magdio',

  '/seo-company-in-chennai-magdio',
  '/seo-company-chennai-magdio',
  '/seo-agency-in-chennai-magdio',
  '/seo-agency-chennai-magdio',
  '/seo-services-chennai-magdio',
  '/seo-services-in-chennai-magdio',

  '/social-media-marketing-agency-in-chennai-magdio',
  '/social-media-marketing-agency-chennai-magdio',
  '/social-media-marketing-company-in-chennai-magdio',

  '/google-ads-agency-chennai-magdio',
  '/google-ads-agency-in-chennai-magdio',
  '/google-ads-company-in-chennai-magdio',

  '/linkedin-marketing-b2b-marketing-in-chennai-magdio',
  '/linkedin-marketing-agency-in-chennai-magdio',
  '/linkedin-ads-agency-in-chennai-magdio',

  '/youtube-marketing-agency-chennai-magdio',
  '/youtube-marketing-agency-in-chennai-magdio',
  '/youtube-ads-agency-in-chennai-magdio',

  '/whatsapp-marketing-services-in-chennai-magdio',
  '/whatsapp-marketing-agency-in-chennai-magdio',
  '/whatsapp-marketing-chennai-magdio',

  '/best-performance-marketing-agency-in-chennai-magdio',
  '/performance-marketing-agency-in-chennai-magdio',
  '/performance-marketing-company-in-chennai-magdio',

  '/meta-ads-agency-in-chennai-magdio',
  '/meta-ads-agency-chennai-magdio',

  '/geo-services-agency-chennai-magdio',
  '/geo-services-agency-in-chennai-magdio',
  '/geo-service-agency-in-chennai-magdio',

  // 8 Tamil Nadu Keyword Pages
  '/digital-marketing-company-tamilnadu-magdio',
  '/seo-services-tamilnadu-magdio',
  '/social-media-marketing-tamilnadu-magdio',
  '/google-ads-tamilnadu-magdio',
  '/performance-marketing-tamilnadu-magdio',
  '/linkedin-ads-tamilnadu-magdio',
  '/youtube-ads-tamilnadu-magdio',
  '/whatsapp-marketing-tamilnadu-magdio',

  // Service Category Pages
  '/services/marketing',
  '/services/development',
  '/services/branding',
  '/services/consulting',
  '/services/analytics',

  // Core Service Pages & Aliases
  '/services/digital-marketing',
  '/services/seo-services',
  '/services/seo',
  '/services/geo-services',
  '/services/geo',
  '/services/social-media-marketing',
  '/services/social-media',
  '/services/google-ads',
  '/services/meta-ads',
  '/services/whatsapp-marketing',
  '/services/youtube-ads',
  '/services/linkedin-ads',
  '/services/performance-marketing',

  // 8 Case Study Pages
  '/portfolio/haber-living-seo-growth',
  '/portfolio/automobile-ecommerce-seo-growth',
  '/portfolio/dreamzil-meta-ads-growth',
  '/portfolio/odoo-erp-lead-generation',
  '/portfolio/bitty-clicks-seo-case-study',
  '/portfolio/badie-studio-seo-case-study',
  '/portfolio/namma-markt-seo-case-study',
  '/portfolio/sasvitha-home-finance-seo-case-study'
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

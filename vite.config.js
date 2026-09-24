import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { servicesData } from './src/data/servicesData.js'
import { industriesData } from './src/data/industriesData.js'
import { mockBlogs } from './src/utils/blogService.js'

function getAllRoutes() {
  const staticRoutes = [
    '/',
    '/services',
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
    '/services/marketing',
    '/services/development',
    '/services/branding',
    '/services/consulting',
    '/services/analytics',
    '/mission',
    '/portfolio',
    '/portfolio/haber-living-seo-growth',
    '/portfolio/automobile-ecommerce-seo-growth',
    '/portfolio/dreamzil-meta-ads-growth',
    '/portfolio/odoo-erp-lead-generation',
    '/portfolio/bitty-clicks-seo-case-study',
    '/portfolio/badie-studio-seo-case-study',
    '/portfolio/namma-markt-seo-case-study',
    '/portfolio/sasvitha-home-finance-seo-case-study',
    '/about',
    '/blog',
    '/blogs',
    '/admin',
    '/contact',
    '/404'
  ];

  // Exclude alias redirect paths that render <Navigate />
  const redirectPaths = new Set([
    '/services/digital-marketing',
    '/digital-marketing',
    '/services/seo-services',
    '/services/seo',
    '/seo',
    '/services/geo-services',
    '/services/geo',
    '/geo',
    '/services/social-media-marketing',
    '/services/social-media',
    '/social-media',
    '/services/google-ads',
    '/google-ads',
    '/services/performance-marketing',
    '/performance-marketing',
    '/services/meta-ads',
    '/meta-ads',
    '/services/linkedin-ads',
    '/linkedin-ads',
    '/services/youtube-ads',
    '/youtube-ads',
    '/services/whatsapp-marketing'
  ]);

  const serviceRoutes = servicesData
    .map(s => `/services/${s.id}`)
    .filter(p => !redirectPaths.has(p));

  const industryRoutes = industriesData.map(i => `/industries/${i.id}`);
  const blogRoutes = mockBlogs.map(b => `/blog/${b.slug}`);
  const blogsRoutes = mockBlogs.map(b => `/blogs/${b.slug}`);

  const all = Array.from(new Set([
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...blogsRoutes
  ])).filter(p => !redirectPaths.has(p));

  return all;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested',
    mock: true,
    beastiesOptions: false,
    async includedRoutes() {
      return getAllRoutes();
    }
  },
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    cssMinify: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  }
})

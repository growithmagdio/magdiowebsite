import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { servicesData } from './src/data/servicesData.js';
import { industriesData } from './src/data/industriesData.js';
import { mockBlogs } from './src/utils/blogService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const PUBLIC_DIR = path.join(__dirname, 'public');
const BASE_URL = 'https://www.magdio.com';

function writeHtmlFile(filePath, htmlContent) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, htmlContent, 'utf-8');
}

// Common HTML Navbar Header
const renderHeaderHtml = (currentPath) => `
<header class="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 py-5" style="background: rgba(4,8,28,0.9); backdrop-filter: blur(12px);">
  <div class="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
    <a class="flex items-center group" href="/">
      <img alt="MAGDIO — The AI Growth Studio" width="180" height="48" class="h-10 md:h-12 w-auto object-contain" src="/logo.webp" />
    </a>
    <nav class="hidden md:flex items-center gap-8">
      <a class="nav-link ${currentPath === '/' ? 'active' : ''}" href="/">Home</a>
      <a class="nav-link ${currentPath === '/about' ? 'active' : ''}" href="/about">About</a>
      <a class="nav-link ${currentPath.startsWith('/services') ? 'active' : ''}" href="/services">Services</a>
      <a class="nav-link ${currentPath.startsWith('/industries') ? 'active' : ''}" href="/services">Industries</a>
      <a class="nav-link ${currentPath === '/portfolio' ? 'active' : ''}" href="/portfolio">Portfolio</a>
      <a class="nav-link ${currentPath.startsWith('/blog') ? 'active' : ''}" href="/blog">Blog</a>
      <a class="nav-link ${currentPath === '/contact' ? 'active' : ''}" href="/contact">Contact</a>
    </nav>
    <div class="hidden md:flex items-center gap-3">
      <a class="px-6 py-2 rounded-full font-semibold text-white text-sm bg-gradient-to-r from-brand-blue to-brand-purple" href="/contact">Let's Talk</a>
    </div>
  </div>
</header>
`;

// Common HTML Footer
const renderFooterHtml = () => `
<footer class="bg-[#02040d] border-t border-white/10 text-white/70 py-16">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
    <div>
      <img src="/logo.webp" alt="MAGDIO — The AI Growth Studio" class="h-10 w-auto mb-4" />
      <p class="text-xs text-white/50 leading-relaxed">MAGDIO is a premier AI Growth Studio specializing in SEO, Performance Marketing, AI-Powered Workflows, and Custom Digital Experiences.</p>
    </div>
    <div>
      <h4 class="text-white font-bold text-sm uppercase mb-4 tracking-wider">Services</h4>
      <ul class="space-y-2 text-xs">
        <li><a href="/digital-marketing-company-in-chennai-magdio" class="hover:text-white">Digital Marketing</a></li>
        <li><a href="/seo-company-in-chennai-magdio" class="hover:text-white">SEO Services</a></li>
        <li><a href="/geo-services-agency-chennai-magdio" class="hover:text-white">GEO AI Services</a></li>
        <li><a href="/services/web-development" class="hover:text-white">Web Development</a></li>
        <li><a href="/services/conversion-tracking" class="hover:text-white">Conversion Tracking</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-bold text-sm uppercase mb-4 tracking-wider">Company</h4>
      <ul class="space-y-2 text-xs">
        <li><a href="/about" class="hover:text-white">About Us</a></li>
        <li><a href="/mission" class="hover:text-white">Our Mission</a></li>
        <li><a href="/portfolio" class="hover:text-white">Portfolio &amp; Case Studies</a></li>
        <li><a href="/blog" class="hover:text-white">Blog &amp; Insights</a></li>
        <li><a href="/contact" class="hover:text-white">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-bold text-sm uppercase mb-4 tracking-wider">Contact</h4>
      <p class="text-xs text-white/50 mb-2">Email: contactus@magdio.com</p>
      <p class="text-xs text-white/50 mb-2">Phone: +91 8838887303</p>
      <p class="text-xs text-white/50">Location: Chennai, Tamil Nadu, India</p>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 text-center text-xs text-white/40">
    &copy; ${new Date().getFullYear()} MAGDIO — The AI Growth Studio. All rights reserved.
  </div>
</footer>
`;

function buildFullHtmlPage(templateHtml, pageData) {
  const { title, description, canonicalUrl, bodyContent, currentPath } = pageData;
  
  // Replace <title>
  let html = templateHtml.replace(/<title>.*?<\/title>/gi, `<title>${title}</title>`);
  
  // Replace or inject meta description & canonical
  const headInject = `
    <title>${title}</title>
    <meta name="description" content="${description.replace(/"/g, '&quot;')}">
    <meta property="og:title" content="${title.replace(/"/g, '&quot;')}">
    <meta property="og:description" content="${description.replace(/"/g, '&quot;')}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <link rel="canonical" href="${canonicalUrl}">
  `;
  
  html = html.replace('</head>', `${headInject}\n</head>`);
  
  // Inject rendered body content into <div id="root">
  const fullRootInner = `
    <div className="overflow-x-hidden w-full relative min-h-screen flex flex-col bg-transparent">
      ${renderHeaderHtml(currentPath)}
      <div className="flex-grow pt-24">
        ${bodyContent}
      </div>
      ${renderFooterHtml()}
    </div>
  `.replace(/className=/g, 'class=');

  html = html.replace('<div id="root"></div>', `<div id="root">${fullRootInner}</div>`);
  
  return html;
}

// ── SERVICE TEMPLATE RENDERER ──
function renderServiceContent(service) {
  const faqs = service.faqs || [
    { q: 'How do you customize this service for our business?', a: 'We perform an in-depth audit of your current tech stack, target audience, and market objectives to create a tailored execution strategy.' },
    { q: 'What metrics are tracked?', a: 'We configure server-side conversion tracking, GA4 event pipelines, and real-time ROI analytics dashboards.' },
    { q: 'What is the onboarding process?', a: 'Onboarding takes 3-5 business days, with core integrations and strategies going live within the first 2 weeks.' }
  ];

  return `
    <main class="page-bg min-h-screen bg-[#03030b] text-white py-12 px-6 max-w-7xl mx-auto">
      <!-- Breadcrumb -->
      <nav class="text-xs text-white/50 mb-6 flex items-center gap-2">
        <a href="/" class="hover:text-white">Home</a> &gt;
        <a href="/services" class="hover:text-white">Services</a> &gt;
        <a href="/services/${(service.category || 'marketing').toLowerCase()}" class="hover:text-white">${service.category || 'Services'}</a> &gt;
        <span class="text-brand-yellow font-medium">${service.title}</span>
      </nav>

      <!-- Hero Header -->
      <section class="text-center py-12 border-b border-white/10">
        <div class="inline-block px-4 py-1.5 rounded-full border border-brand-purple/40 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
          ✦ MAGDIO Professional ${service.category || 'Services'}
        </div>
        <h1 class="font-display font-black text-4xl sm:text-6xl text-white mb-6 leading-tight">
          ${service.title}
        </h1>
        <p class="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
          ${service.subtitle || service.overview}
        </p>
        <div class="flex justify-center gap-4">
          <a href="/contact" class="px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple">Get Started</a>
          <a href="https://wa.me/918838887303" target="_blank" class="px-8 py-3.5 rounded-full font-bold text-white border border-white/20">Talk To An Expert</a>
        </div>
      </section>

      <!-- Service Overview -->
      <section class="py-16 border-b border-white/10">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-white mb-6">Service Overview</h2>
        <p class="text-base text-white/70 leading-relaxed max-w-4xl">
          ${service.overview}
        </p>
      </section>

      <!-- Key Features -->
      ${service.features && service.features.length ? `
      <section class="py-16 border-b border-white/10">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-white mb-8">Key Capabilities &amp; Features</h2>
        <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${service.features.map(f => `
            <li class="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <span class="text-brand-yellow font-bold text-lg mb-2 block">✓ ${f}</span>
              <p class="text-xs text-white/50 leading-relaxed">Enterprise implementation of ${f} tailored for optimal business conversion.</p>
            </li>
          `).join('')}
        </ul>
      </section>
      ` : ''}

      <!-- Core Benefits -->
      ${service.benefits && service.benefits.length ? `
      <section class="py-16 border-b border-white/10">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-white mb-8">Core Benefits &amp; Impact</h2>
        <ul class="grid sm:grid-cols-3 gap-6">
          ${service.benefits.map(b => `
            <li class="p-6 rounded-2xl bg-brand-purple/10 border border-brand-purple/30">
              <h3 class="font-bold text-white text-lg mb-2">★ ${b}</h3>
              <p class="text-xs text-white/60">Delivering measurable ROI and long-term business growth through ${b}.</p>
            </li>
          `).join('')}
        </ul>
      </section>
      ` : ''}

      <!-- Tools & Platforms -->
      ${service.tools && service.tools.length ? `
      <section class="py-16 border-b border-white/10">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-white mb-8">Tools, Platforms &amp; Technologies</h2>
        <div class="flex flex-wrap gap-4">
          ${service.tools.map(t => `
            <span class="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-brand-lightblue font-semibold text-sm">
              ${t}
            </span>
          `).join('')}
        </div>
      </section>
      ` : ''}

      <!-- Frequently Asked Questions -->
      <section class="py-16 border-b border-white/10">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-white mb-8">Frequently Asked Questions</h2>
        <div class="space-y-6 max-w-4xl">
          ${faqs.map(faq => `
            <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 class="font-bold text-white text-base mb-2">Q: ${faq.q}</h3>
              <p class="text-sm text-white/60 leading-relaxed">${faq.a}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 text-center">
        <h2 class="font-display font-bold text-3xl text-white mb-4">Ready to Accelerate Your Growth?</h2>
        <p class="text-white/60 mb-8">Partner with MAGDIO to deploy tailored ${service.title} strategies.</p>
        <a href="/contact" class="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple inline-block">Schedule Strategic Consultation</a>
      </section>
    </main>
  `;
}

// ── LANDING PAGE CONTENT RENDERER ──
function renderLandingPageContent(pageKey) {
  const landingData = {
    'digital-marketing': {
      h1: 'Digital Marketing Company In Chennai',
      title: 'Best Digital Marketing Company In Chennai | MAGDIO',
      desc: 'Magdio offers result-driven digital marketing services in Chennai, including SEO, Google Ads, branding and social media marketing strategies for online growth.',
      overview: 'Businesses today need a complete digital marketing strategy that helps them increase visibility, generate qualified leads, improve conversions, and build long-term brand authority online.',
      services: ['Search Engine Optimization (SEO)', 'Google Ads Services', 'Meta Ads Management', 'Instagram Marketing', 'Social Media Marketing', 'YouTube Ads', 'LinkedIn Ads', 'WhatsApp Marketing', 'AI Marketing Automation', 'Website Development', 'Content Marketing', 'Branding Strategy']
    },
    'seo-services': {
      h1: 'SEO Company In Chennai',
      title: 'Best SEO Company In Chennai | MAGDIO',
      desc: 'Rank #1 on Google with Magdio — the top SEO company in Chennai. Advanced technical SEO, content strategy, link building, and local SEO services.',
      overview: 'Dominating search engine results requires technical excellence, semantically rich content, authoritative link building, and Generative Engine Optimization (GEO).',
      services: ['Technical SEO Audits', 'Keyword & Intent Mapping', 'On-Page Content Optimization', 'Local Pack Ranking', 'E-Commerce SEO', 'AEO & GEO AI Search Optimization']
    },
    'geo-services': {
      h1: 'GEO Services Agency Chennai',
      title: 'GEO Services Agency in Chennai | MAGDIO AI Search',
      desc: 'Get your business recommended by ChatGPT, Google Gemini, Claude, and Perplexity with Magdio Generative Engine Optimization (GEO) services in Chennai.',
      overview: 'Generative Engine Optimization (GEO) ensures your brand is recommended by AI search assistants and LLM conversational engines when buyers search online.',
      services: ['AI Search Visibility Audits', 'Entity & Schema Architecture', 'Conversational Answer Optimization', 'Brand Authority Citations', 'Perplexity & ChatGPT Search Placements']
    },
    'social-media': {
      h1: 'Social Media Marketing Agency In Chennai',
      title: 'Best Social Media Marketing Agency In Chennai | MAGDIO',
      desc: 'Scale your brand engagement with Magdio — leading social media marketing agency in Chennai. Creative campaigns across Instagram, Facebook, and LinkedIn.',
      overview: 'Build an engaged audience and turn social media interactions into predictable customer pipelines through creative storytelling and paid ad channels.',
      services: ['Instagram Reels & Content Creation', 'Community Management', 'Meta Paid Ads Campaigns', 'Influencer Marketing', 'B2B LinkedIn Content']
    },
    'google-ads': {
      h1: 'Google Ads Agency Chennai',
      title: 'Google Ads Agency in Chennai | MAGDIO Performance PPC',
      desc: 'Capture high-intent customer traffic with Magdio Google Ads agency in Chennai. Certified PPC experts managing Search, Shopping, and Display campaigns.',
      overview: 'Stop wasting ad spend. We build hyper-targeted Google Search & Shopping campaigns that maximize lead intent and minimize cost per acquisition.',
      services: ['Search Ads Strategy', 'Shopping & Performance Max', 'Conversion Rate Optimization', 'Negative Keyword Audits', 'A/B Ad Testing']
    },
    'performance-marketing': {
      h1: 'Best Performance Marketing Agency In Chennai',
      title: 'Best Performance Marketing Agency In Chennai | MAGDIO',
      desc: 'Drive measurable ROI with Magdio — top performance marketing agency in Chennai. Scalable paid media campaigns, server-side tracking, and conversion funnels.',
      overview: 'Every marketing dollar spent must deliver clear revenue return. We design server-side tracked performance campaigns across Search, Social, and Display channels.',
      services: ['Multi-Channel Paid Media', 'Server-Side Conversion Tracking', 'Funnel Optimization', 'Customer Acquisition Cost Reduction', 'ROAS Optimization']
    },
    'meta-ads': {
      h1: 'Meta Ads Agency In Chennai',
      title: 'Meta Ads Agency in Chennai | MAGDIO Facebook & Instagram Ads',
      desc: 'Scale your ecommerce sales and lead gen with Magdio Meta Ads agency in Chennai. High-converting creative design and laser-targeted audience funnels.',
      overview: 'Harness Meta’s machine learning algorithms with scroll-stopping video creatives, dynamic product catalogs, and precise audience retargeting.',
      services: ['Facebook & Instagram Ad Creatives', 'Custom & Lookalike Audiences', 'Dynamic Product Catalog Ads', 'Full Funnel Retargeting', 'CAPI Server Tracking']
    },
    'linkedin-ads': {
      h1: 'LinkedIn Marketing & B2B Marketing In Chennai',
      title: 'LinkedIn Ads & B2B Marketing Agency In Chennai | MAGDIO',
      desc: 'Target corporate decision-makers with Magdio B2B LinkedIn marketing agency in Chennai. Account-based marketing (ABM) and lead generation campaigns.',
      overview: 'Connect directly with executives, procurement managers, and B2B buyers through Account-Based Marketing (ABM) and targeted LinkedIn Sponsored Content.',
      services: ['Account-Based Marketing (ABM)', 'Lead Gen Forms Setup', 'InMail Sponsored Messages', 'Company Page Authority', 'B2B Funnel Nurturing']
    },
    'youtube-ads': {
      h1: 'YouTube Marketing Agency Chennai',
      title: 'YouTube Marketing & Ads Agency in Chennai | MAGDIO',
      desc: 'Engage video audiences with Magdio YouTube marketing agency in Chennai. High-impact video ad creation and targeted YouTube channel growth.',
      overview: 'YouTube is the world’s 2nd largest search engine. We create in-stream and discovery video ads that capture viewer attention and drive conversions.',
      services: ['In-Stream Video Ads', 'Discovery Video Search Ads', 'Bumper Ad Campaigns', 'Video Creative Scripting', 'Audience Interest Targeting']
    },
    'whatsapp-marketing': {
      h1: 'WhatsApp Marketing Services In Chennai',
      title: 'WhatsApp Marketing Services & Agency In Chennai | MAGDIO',
      desc: 'Connect directly with customers using Magdio WhatsApp marketing services in Chennai. Official WhatsApp Business API setup, broadcast campaigns, and chatbots.',
      overview: 'Achieve 90%+ open rates with official WhatsApp Business API integrations, automated customer support flows, and direct broadcast marketing.',
      services: ['Official WhatsApp Business API', 'Automated Chatbot Workflows', 'Broadcast Campaign Strategy', 'CRM & E-Commerce Integration', 'Opt-in Customer Capture']
    }
  };

  const data = landingData[pageKey] || landingData['digital-marketing'];

  return `
    <main class="page-bg min-h-screen bg-[#03030b] text-white py-12 px-6 max-w-7xl mx-auto">
      <nav class="text-xs text-white/50 mb-6 flex items-center gap-2">
        <a href="/" class="hover:text-white">Home</a> &gt;
        <a href="/services" class="hover:text-white">Services</a> &gt;
        <span class="text-brand-yellow font-medium">${data.h1}</span>
      </nav>

      <section class="text-center py-12 border-b border-white/10">
        <div class="inline-block px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
          ✦ MAGDIO Growth Studio
        </div>
        <h1 class="font-display font-black text-4xl sm:text-6xl text-white mb-6 leading-tight">
          ${data.h1}
        </h1>
        <p class="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
          ${data.overview}
        </p>
        <div class="flex justify-center gap-4">
          <a href="/contact" class="px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple">Get Started</a>
          <a href="https://wa.me/918838887303" target="_blank" class="px-8 py-3.5 rounded-full font-bold text-white border border-white/20">Talk To An Expert</a>
        </div>
      </section>

      <section class="py-16 border-b border-white/10">
        <h2 class="font-display font-bold text-2xl sm:text-3xl text-white mb-8">Our Core Services &amp; Capabilities</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${data.services.map(s => `
            <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 class="font-bold text-white text-lg mb-2 text-brand-yellow">✓ ${s}</h3>
              <p class="text-xs text-white/50">Customized execution of ${s} designed for maximum brand growth and lead acquisition.</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="py-16 text-center">
        <h2 class="font-display font-bold text-3xl text-white mb-4">Start Growing Your Business Today</h2>
        <p class="text-white/60 mb-8">Contact MAGDIO to schedule your digital growth audit.</p>
        <a href="/contact" class="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple inline-block">Contact Us Now</a>
      </section>
    </main>
  `;
}

// ── MAIN RUNNER ──
async function generateAllStaticPages() {
  console.log('🚀 Running Instant Static HTML Pre-renderer for All 108 Routes...');

  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ dist/index.html does not exist.');
    process.exit(1);
  }

  const templateHtml = fs.readFileSync(indexPath, 'utf-8');
  let generatedCount = 0;

  const processRoute = (route, pageData) => {
    const fullHtml = buildFullHtmlPage(templateHtml, pageData);
    
    if (route === '/') {
      writeHtmlFile(path.join(DIST_DIR, 'index.html'), fullHtml);
    } else {
      const cleanPath = route.startsWith('/') ? route.slice(1) : route;
      writeHtmlFile(path.join(DIST_DIR, cleanPath, 'index.html'), fullHtml);
      writeHtmlFile(path.join(DIST_DIR, `${cleanPath}.html`), fullHtml);
    }
    generatedCount++;
    console.log(`  [${generatedCount}] ✅ Pre-rendered HTML for: ${route}`);
  };

  // 1. Service Detail Pages from servicesData
  servicesData.forEach(service => {
    const route = `/services/${service.id}`;
    const seoTitle = `${service.title} | ${service.category || 'Services'} | MAGDIO`;
    const seoDescription = service.subtitle || service.overview || `Professional ${service.title} services by MAGDIO.`;
    
    processRoute(route, {
      title: seoTitle,
      description: seoDescription,
      canonicalUrl: `${BASE_URL}${route}`,
      bodyContent: renderServiceContent(service),
      currentPath: route
    });
  });

  // 2. Service Category Pages
  ['marketing', 'development', 'branding', 'consulting', 'analytics'].forEach(cat => {
    const route = `/services/${cat}`;
    const catTitle = `${cat.charAt(0).toUpperCase() + cat.slice(1)} Services | MAGDIO`;
    const catDesc = `Explore professional ${cat} services by MAGDIO to scale your brand and customer acquisition.`;
    const catServices = servicesData.filter(s => (s.category || '').toLowerCase() === cat);
    
    const catContent = `
      <main class="page-bg min-h-screen bg-[#03030b] text-white py-12 px-6 max-w-7xl mx-auto">
        <h1 class="font-display font-black text-4xl sm:text-6xl text-white mb-6 text-center capitalize">${cat} Services</h1>
        <p class="text-lg text-white/70 max-w-3xl mx-auto text-center mb-12">${catDesc}</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${catServices.map(s => `
            <div class="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h2 class="font-bold text-white text-xl mb-2 text-brand-yellow"><a href="/services/${s.id}">${s.title}</a></h2>
              <p class="text-sm text-white/60 mb-4">${s.subtitle || s.overview}</p>
              <a href="/services/${s.id}" class="text-xs text-brand-lightblue font-semibold">Explore ${s.title} &rarr;</a>
            </div>
          `).join('')}
        </div>
      </main>
    `;

    processRoute(route, {
      title: catTitle,
      description: catDesc,
      canonicalUrl: `${BASE_URL}${route}`,
      bodyContent: catContent,
      currentPath: route
    });
  });

  // 3. Chennai & Tamil Nadu Landing Pages & Aliases
  const landingRoutesMap = {
    '/digital-marketing-company-in-chennai-magdio': 'digital-marketing',
    '/digital-marketing-company-chennai-magdio': 'digital-marketing',
    '/digital-marketing-agency-in-chennai-magdio': 'digital-marketing',
    '/digital-marketing-agency-chennai-magdio': 'digital-marketing',
    '/digital-marketing-company-tamilnadu-magdio': 'digital-marketing',

    '/seo-company-in-chennai-magdio': 'seo-services',
    '/seo-company-chennai-magdio': 'seo-services',
    '/seo-agency-in-chennai-magdio': 'seo-services',
    '/seo-agency-chennai-magdio': 'seo-services',
    '/seo-services-chennai-magdio': 'seo-services',
    '/seo-services-in-chennai-magdio': 'seo-services',
    '/seo-services-tamilnadu-magdio': 'seo-services',

    '/geo-services-agency-chennai-magdio': 'geo-services',
    '/geo-services-agency-in-chennai-magdio': 'geo-services',
    '/geo-service-agency-in-chennai-magdio': 'geo-services',
    '/geo-services-company-in-chennai-magdio': 'geo-services',
    '/geo-services-tamilnadu-magdio': 'geo-services',

    '/social-media-marketing-agency-in-chennai-magdio': 'social-media',
    '/social-media-marketing-agency-chennai-magdio': 'social-media',
    '/social-media-marketing-company-in-chennai-magdio': 'social-media',
    '/social-media-marketing-tamilnadu-magdio': 'social-media',

    '/google-ads-agency-chennai-magdio': 'google-ads',
    '/google-ads-agency-in-chennai-magdio': 'google-ads',
    '/google-ads-company-in-chennai-magdio': 'google-ads',
    '/google-ads-company-chennai-magdio': 'google-ads',
    '/google-ads-tamilnadu-magdio': 'google-ads',

    '/best-performance-marketing-agency-in-chennai-magdio': 'performance-marketing',
    '/performance-marketing-agency-in-chennai-magdio': 'performance-marketing',
    '/performance-marketing-agency-chennai-magdio': 'performance-marketing',
    '/performance-marketing-company-in-chennai-magdio': 'performance-marketing',
    '/performance-marketing-tamilnadu-magdio': 'performance-marketing',

    '/meta-ads-agency-in-chennai-magdio': 'meta-ads',
    '/meta-ads-agency-chennai-magdio': 'meta-ads',
    '/meta-ads-company-in-chennai-magdio': 'meta-ads',
    '/meta-ads-tamilnadu-magdio': 'meta-ads',

    '/linkedin-marketing-b2b-marketing-in-chennai-magdio': 'linkedin-ads',
    '/linkedin-marketing-agency-in-chennai-magdio': 'linkedin-ads',
    '/linkedin-ads-agency-in-chennai-magdio': 'linkedin-ads',
    '/linkedin-ads-agency-chennai-magdio': 'linkedin-ads',
    '/linkedin-ads-tamilnadu-magdio': 'linkedin-ads',

    '/youtube-marketing-agency-chennai-magdio': 'youtube-ads',
    '/youtube-marketing-agency-in-chennai-magdio': 'youtube-ads',
    '/youtube-ads-agency-in-chennai-magdio': 'youtube-ads',
    '/youtube-ads-agency-chennai-magdio': 'youtube-ads',
    '/youtube-ads-tamilnadu-magdio': 'youtube-ads',

    '/whatsapp-marketing-services-in-chennai-magdio': 'whatsapp-marketing',
    '/whatsapp-marketing-agency-in-chennai-magdio': 'whatsapp-marketing',
    '/whatsapp-marketing-agency-chennai-magdio': 'whatsapp-marketing',
    '/whatsapp-marketing-chennai-magdio': 'whatsapp-marketing',
    '/whatsapp-marketing-tamilnadu-magdio': 'whatsapp-marketing'
  };

  Object.entries(landingRoutesMap).forEach(([route, key]) => {
    const content = renderLandingPageContent(key);
    const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
    const h1Title = titleMatch ? titleMatch[1].replace(/<[^>]*>/g, '').trim() : 'Digital Marketing Services';
    
    processRoute(route, {
      title: `${h1Title} | MAGDIO`,
      description: `Professional ${h1Title} by MAGDIO — The AI Growth Studio in Chennai, Tamil Nadu.`,
      canonicalUrl: `${BASE_URL}${route}`,
      bodyContent: content,
      currentPath: route
    });
  });

  // Also build core service alias routes (e.g. /services/digital-marketing, /services/seo-services, etc.)
  const aliasToLandingMap = {
    '/services/digital-marketing': 'digital-marketing',
    '/services/seo-services': 'seo-services',
    '/services/seo': 'seo-services',
    '/services/geo-services': 'geo-services',
    '/services/geo': 'geo-services',
    '/services/social-media-marketing': 'social-media',
    '/services/google-ads': 'google-ads',
    '/services/performance-marketing': 'performance-marketing',
    '/services/meta-ads': 'meta-ads',
    '/services/linkedin-ads': 'linkedin-ads',
    '/services/youtube-ads': 'youtube-ads',
    '/services/whatsapp-marketing': 'whatsapp-marketing'
  };

  Object.entries(aliasToLandingMap).forEach(([route, key]) => {
    const content = renderLandingPageContent(key);
    processRoute(route, {
      title: `${key.toUpperCase().replace(/-/g, ' ')} Services | MAGDIO`,
      description: `Comprehensive ${key.replace(/-/g, ' ')} services by MAGDIO.`,
      canonicalUrl: `${BASE_URL}${route}`,
      bodyContent: content,
      currentPath: route
    });
  });

  // 4. Industry Pages from industriesData
  industriesData.forEach(ind => {
    const route = `/industries/${ind.id}`;
    const indContent = `
      <main class="page-bg min-h-screen bg-[#03030b] text-white py-12 px-6 max-w-7xl mx-auto">
        <h1 class="font-display font-black text-4xl sm:text-6xl text-white mb-6 text-center">${ind.title || ind.name}</h1>
        <p class="text-lg text-white/70 max-w-3xl mx-auto text-center mb-12">${ind.subtitle || ind.overview}</p>
        <div class="p-8 rounded-2xl bg-white/[0.03] border border-white/10 mb-12">
          <h2 class="font-bold text-2xl mb-4">Industry Overview</h2>
          <p class="text-white/70 leading-relaxed">${ind.overview}</p>
        </div>
        ${ind.solutions && ind.solutions.length ? `
        <div class="mb-12">
          <h2 class="font-bold text-2xl mb-6">Tailored Solutions</h2>
          <div class="grid sm:grid-cols-2 gap-6">
            ${ind.solutions.map(s => `<div class="p-6 rounded-xl bg-white/5 border border-white/10 font-semibold text-brand-yellow">✓ ${s}</div>`).join('')}
          </div>
        </div>
        ` : ''}
      </main>
    `;

    processRoute(route, {
      title: `${ind.name} Digital Solutions | MAGDIO`,
      description: ind.subtitle || ind.overview,
      canonicalUrl: `${BASE_URL}${route}`,
      bodyContent: indContent,
      currentPath: route
    });
  });

  // 5. Blog Detail Pages
  mockBlogs.forEach(blog => {
    const routes = [`/blog/${blog.slug}`, `/blogs/${blog.slug}`];
    const blogContent = `
      <main class="page-bg min-h-screen bg-[#03030b] text-white py-12 px-6 max-w-4xl mx-auto">
        <h1 class="font-display font-black text-3xl sm:text-5xl text-white mb-6">${blog.title}</h1>
        <div class="text-xs text-white/50 mb-8">By ${blog.author} &bull; ${blog.date} &bull; ${blog.readTime}</div>
        <div class="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-6">
          <p class="text-lg font-medium text-white/90">${blog.excerpt}</p>
          <div>${blog.content.replace(/\n\n/g, '<br><br>')}</div>
        </div>
      </main>
    `;

    routes.forEach(r => {
      processRoute(r, {
        title: blog.metaTitle || `${blog.title} | MAGDIO`,
        description: blog.metaDescription || blog.excerpt,
        canonicalUrl: `${BASE_URL}${r}`,
        bodyContent: blogContent,
        currentPath: r
      });
    });
  });

  // 6. Case Studies Pages
  const caseStudies = [
    { id: 'haber-living-seo-growth', title: 'Haber Living SEO & Revenue Growth Case Study' },
    { id: 'automobile-ecommerce-seo-growth', title: 'Automobile E-Commerce SEO & Sales Case Study' },
    { id: 'dreamzil-meta-ads-growth', title: 'Dreamzil Meta Ads Scale Case Study' },
    { id: 'odoo-erp-lead-generation', title: 'Odoo ERP B2B Lead Generation Case Study' },
    { id: 'bitty-clicks-seo-case-study', title: 'Bitty Clicks Organic Traffic Case Study' },
    { id: 'badie-studio-seo-case-study', title: 'Badie Studio Search Ranking Case Study' },
    { id: 'namma-markt-seo-case-study', title: 'Namma Markt E-Commerce SEO Growth Case Study' },
    { id: 'sasvitha-home-finance-seo-case-study', title: 'Sasvitha Home Finance Lead Gen Case Study' }
  ];

  caseStudies.forEach(cs => {
    const route = `/portfolio/${cs.id}`;
    const csContent = `
      <main class="page-bg min-h-screen bg-[#03030b] text-white py-12 px-6 max-w-5xl mx-auto">
        <h1 class="font-display font-black text-3xl sm:text-5xl text-white mb-6 text-center">${cs.title}</h1>
        <p class="text-lg text-white/70 text-center max-w-3xl mx-auto mb-12">Detailed case study outlining key objectives, strategy, implementation, and verified ROI metrics achieved by MAGDIO.</p>
        <div class="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
          <h2 class="font-bold text-2xl text-brand-yellow mb-4">Project Overview &amp; Results</h2>
          <p class="text-white/70 leading-relaxed mb-6">Our team implemented a multi-channel growth engine combining technical SEO, conversion rate optimization, and paid media scaling.</p>
          <a href="/contact" class="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple inline-block">Get Similar Results</a>
        </div>
      </main>
    `;

    processRoute(route, {
      title: `${cs.title} | MAGDIO Portfolio`,
      description: `Explore the ${cs.title} by MAGDIO — The AI Growth Studio.`,
      canonicalUrl: `${BASE_URL}${route}`,
      bodyContent: csContent,
      currentPath: route
    });
  });

  // 7. Core Static Pages: /, /about, /contact, /portfolio, /services, /mission, /blog, /blogs
  const corePages = [
    { route: '/', title: 'Best Digital Marketing Agency in Chennai | MAGDIO', desc: 'MAGDIO — The AI Growth Studio. Boost your online presence with AI-powered digital marketing, SEO, web development, and branding.' },
    { route: '/about', title: 'About Us | MAGDIO — The AI Growth Studio', desc: 'Learn about MAGDIO, a premier AI growth studio in Chennai scaling brands with performance marketing, SEO, and software.' },
    { route: '/contact', title: 'Contact Us | MAGDIO — The AI Growth Studio', desc: 'Get in touch with MAGDIO experts for digital marketing, SEO, branding, or custom web development.' },
    { route: '/portfolio', title: 'Portfolio & Case Studies | MAGDIO', desc: 'Explore MAGDIO portfolio and case studies demonstrating organic search growth and high ROAS paid campaigns.' },
    { route: '/services', title: 'All Services | MAGDIO — The AI Growth Studio', desc: 'Comprehensive digital services: SEO, Google Ads, Meta Ads, GEO, Web Development, Branding, and Analytics.' },
    { route: '/mission', title: 'Our Mission | MAGDIO — The AI Growth Studio', desc: 'Our mission is to empower brands through modern AI tools, technical search engineering, and performance marketing.' },
    { route: '/blog', title: 'Blog & Digital Growth Insights | MAGDIO', desc: 'Read the latest insights on AI in marketing, SEO strategies, UI/UX design trends, and custom software.' },
    { route: '/blogs', title: 'Blog & Digital Growth Insights | MAGDIO', desc: 'Read the latest insights on AI in marketing, SEO strategies, UI/UX design trends, and custom software.' }
  ];

  corePages.forEach(p => {
    const pageContent = `
      <main class="page-bg min-h-screen bg-[#03030b] text-white py-16 px-6 max-w-7xl mx-auto text-center">
        <h1 class="font-display font-black text-4xl sm:text-6xl text-white mb-6">${p.title}</h1>
        <p class="text-lg text-white/70 max-w-3xl mx-auto mb-10">${p.desc}</p>
        <a href="/contact" class="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple inline-block">Contact MAGDIO Experts</a>
      </main>
    `;

    processRoute(p.route, {
      title: p.title,
      description: p.desc,
      canonicalUrl: `${BASE_URL}${p.route === '/' ? '' : p.route}`,
      bodyContent: pageContent,
      currentPath: p.route
    });
  });

  console.log(`🎉 Static HTML Pre-rendering Finished! Successfully generated HTML for ${generatedCount} pages.`);
}

generateAllStaticPages().catch(err => {
  console.error('❌ Static pre-render failed:', err);
  process.exit(1);
});

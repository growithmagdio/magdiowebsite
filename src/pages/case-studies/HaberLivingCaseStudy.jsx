import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaSearch, FaTrophy, FaServer, FaShieldAlt, FaChartBar, FaExpand, FaTimesCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Import local images from root casestudy 1
import picture1 from '../../../casestudy 1/Picture1.png';
import picture2 from '../../../casestudy 1/Picture2.png';

export default function HaberLivingCaseStudy() {
  const [lightboxImage, setLightboxImage] = useState(null);

  // Esc key close for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="page-bg min-h-screen pt-24 pb-16 md:pt-28 md:pb-20 text-white bg-[#03030b]">
      <SEO 
        title="Ecommerce SEO Case Study – 503K+ Impressions | MAGDIO" 
        description="Explore how MAGDIO helped luxury towel brand Haber Living scale from low organic visibility to top search rankings and 503K+ impressions through technical SEO and website optimization."
        canonicalUrl="https://www.magdio.com/portfolio/haber-living-seo-growth"
      />

      {/* Background Blobs */}
      <div className="blob w-96 h-96 top-20 -right-20 opacity-20" style={{ background: '#1A22B8' }} />
      <div className="blob w-80 h-80 bottom-40 -left-20 opacity-10" style={{ background: '#F2B300' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back Link */}
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-yellow transition-colors mb-8 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </Link>

        {/* ═══ 1. CASE STUDY HERO ═══ */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-20 border-b border-white/10 pb-16">
          <div className="lg:col-span-7">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 mb-6 inline-block">
              ECOMMERCE SEO • TECHNICAL SEO
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight mb-6 text-white">
              From Low Visibility to Google’s Top Positions
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Haber Living is a premium towel and luxury home essentials brand. While their products were industry-leading, their website visibility, speed, and ranking structure did not reflect their quality. Discover how we built a high-performing organic presence.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/50 border-t border-white/5 pt-8">
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Client</span>
                <span className="text-white/70">Haber Living</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Industry</span>
                <span className="text-white/70">Luxury Home & Living</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Location</span>
                <span className="text-white/70">India</span>
              </div>
            </div>
          </div>

          {/* Results snapshot */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card-premium p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">Results Snapshot</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">503K+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Google Search Impressions</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-lightblue">Top #1</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Positions for Target Keywords</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-2xl font-bold font-display text-white">Optimized</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Website Architecture & Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 2. BUSINESS OVERVIEW ═══ */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <span className="text-6xl font-black text-white/5 font-display block leading-none mb-2">01</span>
              <h2 className="text-2xl font-bold font-display uppercase tracking-wider text-brand-yellow">The Business</h2>
              <div className="w-12 h-1 bg-brand-yellow mt-4" />
            </div>
          </div>
          <div className="md:col-span-8 text-white/70 text-lg leading-relaxed space-y-6">
            <p>
              Haber Living is a premium towel and home essentials brand focused on high-quality, luxury products for modern Indian households. The brand offers elegant bath towels, lifestyle essentials, and premium fabric products through its ecommerce store across India.
            </p>
            <p>
              Although the products were positioned as premium, the website experience and search visibility did not reflect the brand quality. Organic traffic was extremely low, important pages were not ranking, and the website lacked proper SEO and performance optimization.
            </p>
            <p>
              The goal was to improve the overall website experience, increase organic visibility, and generate long-term ecommerce growth through SEO and technical improvements.
            </p>
          </div>
        </div>

        {/* ═══ 3. THE CHALLENGE ═══ */}
        <div className="mb-20">
          <div className="mb-10 text-left max-w-2xl">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">✦ Key Obstacles</span>
            <div className="border-l-4 border-[#ff6b6b] pl-3 mb-4">
              <h2 className="text-3xl font-bold font-display text-white">The Bottlenecks (Business Challenges)</h2>
            </div>
            <p className="text-white/60 text-sm mt-3">
              When Haber approached us, the website had several performance and SEO issues affecting both search rankings and buyer conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Low Organic Traffic', desc: 'Minimal search engine presence and keyword rankings.' },
              { title: 'Poor Rankings', desc: 'Product and category keywords were completely unranked.' },
              { title: 'Slow Page Speed', desc: 'Large unoptimized image sizes and scripts caused high load times.' },
              { title: 'Technical Errors', desc: 'Multiple broken pages, redirect errors, and poor canonical structure.' },
              { title: 'Tracking Gaps', desc: 'Missing conversion pixel setups and Google Analytics integration.' },
              { title: 'Indexing Issues', desc: 'Search engines suffered from very low crawl efficiency across target pages.' }
            ].map((item, idx) => (
              <div key={idx} className="glass-card-premium p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-white/10 transition-colors">
                <h3 className="font-display font-bold text-white text-lg mb-3 flex items-center gap-2">
                  <FaTimesCircle className="text-[#ff6b6b] shrink-0" size={18} />
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ 4. OUR STRATEGY ═══ */}
        <div className="mb-20">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">✦ Strategic Framework</span>
            <h2 className="text-3xl font-bold font-display text-white">Our Strategy</h2>
            <p className="text-white/60 text-sm mt-3">
              Instead of chasing quick keyword rankings, we focused on building a technically solid foundation and a structured ecommerce experience.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Website Revamp & Performance Optimization',
                points: [
                  'Revamped the website with a cleaner premium ecommerce layout',
                  'Optimized large images without affecting structural display quality',
                  'Reduced unnecessary scripts and improved loading speed metrics',
                  'Improved mobile responsiveness and page usability'
                ]
              },
              {
                num: '02',
                title: 'Technical SEO Fixes',
                points: [
                  'Fixed major 404 pages and incorrect redirect loops',
                  'Improved sitemap indexing structure for crawl robots',
                  'Optimized internal linking context between product and category nodes',
                  'Implemented proper canonical and custom metadata structures'
                ]
              },
              {
                num: '03',
                title: 'Ecommerce SEO Optimization',
                points: [
                  'Optimized product titles and primary category landing pages',
                  'Improved product descriptions with SEO-focused semantic content',
                  'Added keyword-focused meta tags and header hierarchies',
                  'Improved image alt tags and relevant semantic terminology'
                ]
              },
              {
                num: '04',
                title: 'Analytics & Tracking Setup',
                points: [
                  'Integrated Google Analytics 4 (GA4) and Google Search Console',
                  'Configured full funnel conversion tracking events',
                  'Enabled detailed behavioral path analysis for SEO adjustments'
                ]
              }
            ].map((step, idx) => (
              <div key={idx} className="glass-card-premium p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row gap-6 items-start bg-white/5">
                <div className="text-5xl font-black font-display text-brand-yellow/20 leading-none">{step.num}</div>
                <div className="flex-grow">
                  <h3 className="font-display font-bold text-white text-xl mb-4">{step.title}</h3>
                  <ul className="grid sm:grid-cols-2 gap-3 text-white/60 text-sm">
                    {step.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-yellow mt-1.5 font-bold shrink-0">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ 5. RESULTS SECTION ═══ */}
        <div className="mb-20 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-purple/10 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />
          
          <div className="text-center mb-12">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">THE OUTCOME</span>
            <h2 className="text-3xl font-bold font-display text-white">Results That Moved the Business Forward</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-5xl font-black font-display text-white mb-2">503K+</div>
              <div className="text-sm text-white/60 font-semibold">Search Impressions</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-yellow mb-2">Top #1</div>
              <div className="text-sm text-white/60 font-semibold">Google Rankings</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-lightblue mb-2">Optimized</div>
              <div className="text-sm text-white/60 font-semibold">Website Performance</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-white mb-2">Integrated</div>
              <div className="text-sm text-white/60 font-semibold">Analytics & Tracking</div>
            </div>
          </div>

          {/* Table representation as responsive clean grid */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 max-w-3xl mx-auto overflow-hidden">
            <h3 className="font-display font-bold text-white text-base mb-4 text-center sm:text-left">Performance Metrics Comparison</h3>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-3 font-bold border-b border-white/10 pb-2 text-white/40">
                <span>Metric</span>
                <span>Before</span>
                <span>After</span>
              </div>
              <div className="grid grid-cols-3 border-b border-white/5 py-2">
                <span className="font-medium">Organic Visibility</span>
                <span className="text-white/50">Very Low</span>
                <span className="text-brand-yellow font-bold">Top Ranking Positions</span>
              </div>
              <div className="grid grid-cols-3 border-b border-white/5 py-2">
                <span className="font-medium">Search Impressions</span>
                <span className="text-white/50">Minimal</span>
                <span className="text-white font-bold">503K+</span>
              </div>
              <div className="grid grid-cols-3 border-b border-white/5 py-2">
                <span className="font-medium">Website Performance</span>
                <span className="text-white/50">Poor</span>
                <span className="text-brand-lightblue font-bold">Optimized</span>
              </div>
              <div className="grid grid-cols-3 border-b border-white/5 py-2">
                <span className="font-medium">SEO Structure</span>
                <span className="text-white/50">Unoptimized</span>
                <span className="text-white font-bold">Fully Optimized</span>
              </div>
              <div className="grid grid-cols-3 py-2">
                <span className="font-medium">Analytics & Tracking</span>
                <span className="text-white/50">Not Configured</span>
                <span className="text-brand-yellow font-bold">Fully Integrated</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 6. PERFORMANCE PROOF GALLERY ═══ */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">✦ VERIFIED RESULTS</span>
            <h2 className="text-3xl font-bold font-display text-white">Performance, Verified.</h2>
            <p className="text-white/60 text-sm mt-3">
              Real screenshots from Google Search Console and Google search ranking metrics showing Haber Living's growth story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GSC screenshot */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture1} 
                  alt="Haber Living Google Search Console performance showing 503K impressions" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <button 
                  onClick={() => setLightboxImage(picture1)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                >
                  <FaExpand /> Zoom Screenshot
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">Google Search Console Performance Report</p>
                <p className="text-xs text-white/50 mt-1">Verified clicks & impressions dashboard metrics</p>
              </div>
            </div>

            {/* Google Search Rank 1 */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture2} 
                  alt="Haber Living search result proof showing ranking position #1 for organic cotton towels" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <button 
                  onClick={() => setLightboxImage(picture2)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                >
                  <FaExpand /> Zoom Screenshot
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">Google Search Position Ranking Proof</p>
                <p className="text-xs text-white/50 mt-1">Ranked #1 for high-volume keyword "organic cotton towels"</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 7. KEY BUSINESS IMPACT ═══ */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">✦ BUSINESS VALUE</span>
            <h2 className="text-3xl font-bold font-display text-white">Beyond the Metrics</h2>
            <p className="text-white/60 text-sm mt-3">
              The real value of this SEO campaign goes beyond search clicks. It built a sustainable digital asset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Organic Domain Authority', desc: 'Developed a robust domain presence that naturally attracts and indexes new keywords automatically without extra investment.' },
              { title: 'Consistent Leads & Sales', desc: 'The increase in impressions translated directly into daily, reliable organic traffic, generating sustainable sales.' },
              { title: 'Reduced Ad Dependency', desc: 'Higher organic rankings lessened client reliance on high cost-per-click paid advertising platforms.' },
              { title: 'Premium Branding Experience', desc: 'The revamped website design and optimized page load times established trust and reflected premium brand positioning.' }
            ].map((impact, idx) => (
              <div key={idx} className="glass-card-premium p-6 rounded-2xl border border-white/5 bg-white/5">
                <h4 className="font-display font-bold text-brand-yellow text-lg mb-2">{impact.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{impact.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ 8. CONCLUSION ═══ */}
        <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-16 mb-20">
          <h2 className="text-2xl font-bold font-display mb-4 text-white">Conclusion</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Haber Living already had exceptional product quality. Their primary blocker was technical performance and search discoverability. By engineering a fast, SEO-friendly site structure and optimizing their category catalog, we generated substantial visibility. This campaign proves how a solid search foundation scales ecommerce brands sustainably.
          </p>
        </div>

        {/* ═══ 9. CASE STUDY NAVIGATION ═══ */}
        <div className="flex justify-between items-center border-t border-b border-white/10 py-8 mb-20">
          <div className="text-left">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1">Previous Story</span>
            <span className="text-sm font-semibold text-white/50">Return to Portfolio</span>
          </div>
          <Link to="/portfolio/automobile-ecommerce-seo-growth" className="text-right group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1 text-white/50">Next Growth Story →</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Automobile Ecommerce Brand</span>
          </Link>
        </div>

        {/* ═══ 10. FINAL CTA ═══ */}
        <div className="glass-card-premium p-8 md:p-12 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto relative overflow-hidden bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-30 pointer-events-none" />
          <h2 className="text-3xl font-black font-display mb-4 text-white">Ready to Build Your Growth Story?</h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            From search visibility to qualified leads and measurable revenue growth, MAGDIO builds strategies focused on real business outcomes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3.5 rounded-full font-bold text-sm bg-brand-yellow text-black hover:scale-105 shadow-[0_0_20px_rgba(242,179,0,0.3)] transition-all">
              Start Your Growth Journey
            </Link>
            <Link to="/contact" className="px-8 py-3.5 rounded-full font-bold text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white hover:text-brand-yellow text-2xl"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={lightboxImage} 
              alt="Verified screenshot full view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

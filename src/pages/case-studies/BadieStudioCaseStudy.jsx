import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaTrophy, FaServer, FaChartBar, FaExpand, FaMapMarkerAlt, FaGlobe, FaTimesCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Import local images from root Casestudy 2
import picture2 from '../../../Casestudy 2/Picture2.png';
import picture3 from '../../../Casestudy 2/Picture3.png';
import picture4 from '../../../Casestudy 2/Picture4.png';
import picture5 from '../../../Casestudy 2/Picture5.png';

export default function BadieStudioCaseStudy() {
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
        title="Ecommerce SEO Case Study – Badie Studio | MAGDIO" 
        description="Learn how MAGDIO optimized organic traffic and keyword visibility for premium musical instrument retailer Badie Studio in Qatar."
        canonicalUrl="https://www.magdio.com/portfolio/badie-studio-seo-case-study"
      />

      {/* Background Blobs */}
      <div className="blob w-96 h-96 top-20 -right-20 opacity-20 bg-brand-blue" />
      <div className="blob w-80 h-80 bottom-40 -left-20 opacity-10 bg-brand-yellow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back Link */}
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-brand-yellow transition-colors mb-8 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </Link>

        {/* ═══ 1. CASE STUDY HERO ═══ */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-20 border-b border-white/10 pb-16">
          <div className="lg:col-span-7">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 mb-6 inline-block">
              ECOMMERCE SEO • ORGANIC GROWTH • GEO
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight mb-6 text-white">
              Building a Stronger Brand & Organic Audience for Qatar's Oldest Music Store
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Badie Studio had a strong product range and trusted global brands, but low organic visibility and weak product-page optimization limited discovery. We built their digital growth engine.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/50 border-t border-white/5 pt-8">
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Client</span>
                <span className="text-white/70">Badie Studio</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Industry</span>
                <span className="text-white/70">Musical Instrument Store</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Location</span>
                <span className="text-white/70">Doha, Qatar</span>
              </div>
            </div>
          </div>

          {/* Results snapshot */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card-premium p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden bg-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">Results Snapshot</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">92.8K+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Google Search Impressions Grew</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-lightblue">5,000+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Organic Users Acquired</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-2xl font-bold font-display text-white">Top #1</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Google Positions for Core Keywords</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 2. BUSINESS OVERVIEW ═══ */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <span className="text-6xl font-black text-white/5 font-display block leading-none mb-2">02</span>
              <h2 className="text-2xl font-bold font-display uppercase tracking-wider text-brand-yellow">The Business</h2>
              <div className="w-12 h-1 bg-brand-yellow mt-4" />
            </div>
          </div>
          <div className="md:col-span-8 text-white/70 text-lg leading-relaxed space-y-6">
            <p>
              Badie Studio is a Qatar-based musical instrument retailer offering a wide range of premium musical instruments, audio equipment, and accessories. The brand serves musicians, educational institutions, and music enthusiasts with high-quality products from leading global brands, backed by expert guidance and reliable customer service.
            </p>
            <p>
              The goal was to increase Badie Studio's organic visibility, branding, improve keyword rankings and drive qualified traffic and online sales through organic search.
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
              Badie Studio struggled to rank for search queries despite their rich history and authorized brand inventory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Low Organic Visibility', desc: 'Minimal presence across core searches in Qatar.' },
              { title: 'Weak Product Search Positions', desc: 'Authorized brand search terms failed to trigger positions.' },
              { title: 'Weak On-page SEO structure', desc: 'Lack of keyword density and structured tags across catalog pages.' },
              { title: 'Unoptimized Metadata', desc: 'Missing meta descriptions, unoptimized title layouts, and poor tag alignment.' },
              { title: 'Crawlability and Redirection Errors', desc: 'Technical duplicate pages and redirection pathways blocking crawler bots.' },
              { title: 'Missing Tracking & Setup', desc: 'Lack of configured conversions to measure e-commerce cart activity.' }
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
            <h2 className="text-3xl font-bold font-display text-white">Strategy Architecture</h2>
            <p className="text-white/60 text-sm mt-3">
              We implemented technical fixes, deep-catalog SEO optimization, localized map pack rankings, and backlink outreach to build domain authority.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Website Performance Optimization',
                points: [
                  'Optimized Core Web Vitals to elevate user metrics and search credibility',
                  'Configured smart image lazy loading across catalog pages',
                  'Reduced page weight and loading latency across core navigation areas',
                  'Improved catalog navigation flow for quick checkout transitions',
                  'Monitored speed metrics on multiple terminal platforms'
                ]
              },
              {
                num: '02',
                title: 'Technical SEO Fixes',
                points: [
                  'Corrected search indexing boundaries and crawler blockages',
                  'Cleaned up broken redirection links and dead URLs',
                  'Implemented optimized internal link mapping across catalog layers',
                  'Resolved tag duplicates and metadata crawl conflicts'
                ]
              },
              {
                num: '03',
                title: 'On-Page & Local SEO Optimization',
                points: [
                  'Researched high-volume e-commerce keywords for instruments in Qatar',
                  'Optimized headings, item descriptions, and categories',
                  'Enhanced title metadata, description lines, and alt markers',
                  'Built localized SEO signals for physical stores in Doha',
                  'Constructed 6,000+ authoritative backlinks to establish search trust'
                ]
              },
              {
                num: '04',
                title: 'Analytics & Conversions Integration',
                points: [
                  'Connected Google Analytics and Google Search Console accounts',
                  'Set up customized transaction goals and purchase events tracking',
                  'Integrated custom dashboards to evaluate customer search pathways'
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
            <h2 className="text-3xl font-bold font-display text-white">Factual Results Achieved</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="text-5xl font-black font-display text-white mb-2">92.8K+</div>
              <div className="text-sm text-white/60 font-semibold">Search Impressions</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-yellow mb-2">5,000+</div>
              <div className="text-sm text-white/60 font-semibold">Organic Website Users</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-lightblue mb-2">Top #1</div>
              <div className="text-sm text-white/60 font-semibold">Google Rankings for Target Keywords</div>
            </div>
          </div>

          {/* Before/After Transformation Grid */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 max-w-3xl mx-auto overflow-hidden bg-white/5">
            <h3 className="font-display font-bold text-white text-base mb-4 text-center sm:text-left">Before vs. After Transformation</h3>
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
                <span className="font-medium">Organic Traffic</span>
                <span className="text-white/50">Very Low</span>
                <span className="text-brand-lightblue font-bold">5,000+ Organic Users</span>
              </div>
              <div className="grid grid-cols-3 border-b border-white/5 py-2">
                <span className="font-medium">Website Performance</span>
                <span className="text-white/50">Poor</span>
                <span className="text-white font-bold">Optimized</span>
              </div>
              <div className="grid grid-cols-3 border-b border-white/5 py-2">
                <span className="font-medium">SEO Structure</span>
                <span className="text-white/50">Unoptimized</span>
                <span className="text-white font-bold">Fully Optimized</span>
              </div>
              <div className="grid grid-cols-3 py-2">
                <span className="font-medium">Analytics Tracking</span>
                <span className="text-white/50">Not Configured</span>
                <span className="text-brand-yellow font-bold">Fully Integrated</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 6. PERFORMANCE PROOF GALLERY ═══ */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">✦ VERIFIED EVIDENCE</span>
            <h2 className="text-3xl font-bold font-display text-white">Verified Performance Evidence</h2>
            <p className="text-white/60 text-sm mt-3">
              Original proof screenshots showing real Search Console results, rank positions, local map pack listings, and Generative Engine Optimization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Pic 2: GSC */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture2} 
                  alt="Badie Studio Google Search Console showing 92.8K Impressions and 4.67K Clicks" 
                  className="w-full h-full object-contain"
                />
                <button 
                  onClick={() => setLightboxImage(picture2)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                >
                  <FaExpand /> Zoom Screenshot
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">Google Search Console Performance Dashboard</p>
                <p className="text-xs text-white/50 mt-1">Verified growth validation: 92.8K+ impressions with a 5% average CTR</p>
              </div>
            </div>

            {/* Pic 3: Search Rank #1 */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture3} 
                  alt="Google search results showing Badie Studio ranked number 1 for Musical instruments shop in Qatar" 
                  className="w-full h-full object-contain"
                />
                <button 
                  onClick={() => setLightboxImage(picture3)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                >
                  <FaExpand /> Zoom Screenshot
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">Google Search Ranking Position #1</p>
                <p className="text-xs text-white/50 mt-1">Ranking verification for target term 'musical instruments shop in qatar'</p>
              </div>
            </div>

            {/* Pic 4: Map Pack */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture4} 
                  alt="Google Maps and local search results showing Badie Studio ranked first in Doha map pack" 
                  className="w-full h-full object-contain"
                />
                <button 
                  onClick={() => setLightboxImage(picture4)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                >
                  <FaExpand /> Zoom Screenshot
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">Google Local Maps Pack Recommendation</p>
                <p className="text-xs text-white/50 mt-1">Priority map presence for local musical equipment queries in Doha</p>
              </div>
            </div>

            {/* Pic 5: Claude GEO */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture5} 
                  alt="AI Search Assistant Claude recommending Badie Studio as the top musical instrument retailer in Qatar" 
                  className="w-full h-full object-contain"
                />
                <button 
                  onClick={() => setLightboxImage(picture5)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                >
                  <FaExpand /> Zoom Screenshot
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">Generative Engine Optimization (GEO) Visibility</p>
                <p className="text-xs text-white/50 mt-1">Proof of search brand recommendation inside modern AI search assistant responses</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 7. CONCLUSION ═══ */}
        <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-16 mb-20">
          <h2 className="text-2xl font-bold font-display mb-4 text-white">Conclusion</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            By addressing technical issues, strengthening on-page SEO, and optimizing the website for search performance, Badie Studio transformed its online presence. The improvements resulted in greater search visibility, stronger keyword rankings, and increased organic traffic, positioning the brand for sustainable long-term growth.
          </p>
        </div>

        {/* ═══ 8. CASE STUDY NAVIGATION ═══ */}
        <div className="flex justify-between items-center border-t border-b border-white/10 py-8 mb-20">
          <Link to="/portfolio/bitty-clicks-seo-case-study" className="text-left group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1">← Previous Story</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Bitty Clicks</span>
          </Link>
          <Link to="/portfolio/namma-markt-seo-case-study" className="text-right group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1 text-white/50">Next Growth Story →</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Namma Markt</span>
          </Link>
        </div>

        {/* ═══ 9. FINAL CTA ═══ */}
        <div className="glass-card-premium p-8 md:p-12 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto relative overflow-hidden bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-30 pointer-events-none" />
          <h2 className="text-3xl font-black font-display mb-4 text-white">Ready to Elevate Your E-commerce Sales?</h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            From technical SEO audits to advanced search engine authority growth, MAGDIO designs tailored digital frameworks to scale your customer base.
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

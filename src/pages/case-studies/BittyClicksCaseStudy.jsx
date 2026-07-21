import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaTrophy, FaServer, FaShieldAlt, FaChartBar, FaExpand, FaTimesCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Import local images from root Casestudy 2
import picture1 from '../../../Casestudy 2/Picture1.png';

export default function BittyClicksCaseStudy() {
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
        title="SEO & AI Overview Case Study – Bitty Clicks | MAGDIO" 
        description="Discover how MAGDIO helped food and product photography studio Bitty Clicks achieve top Google rankings and Google AI Overview visibility in Chennai."
        canonicalUrl="https://www.magdio.com/portfolio/bitty-clicks-seo-case-study"
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
              SEO • AI OVERVIEW • TECHNICAL OPTIMIZATION
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight mb-6 text-white">
              From Low Keyword Positions to Top Google Rankings & AI Overview
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Bitty Clicks had a strong photography portfolio and high-quality services, but limited organic visibility made the business difficult to discover through search. Discover how we built their search presence.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/50 border-t border-white/5 pt-8">
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Client</span>
                <span className="text-white/70">Bitty Clicks</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Industry</span>
                <span className="text-white/70">Product Photographer & Videographer</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Location</span>
                <span className="text-white/70">Chennai, India</span>
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
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">Top #1</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Google Positions for Target Keywords</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-lightblue">Achieved</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Google AI Overview Visibility</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-2xl font-bold font-display text-white">Improved</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Qualified Organic Lead Generation</div>
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
              Bitty Clicks is a Chennai-based food and product photography studio specializing in high-quality visual content for brands. The studio offers expert services in food styling, product photography, jewellery photography, restaurant and resto bar photography, social media ad shoots, packaging photography and YouTube ad videos across India.
            </p>
            <p>
              Although Bitty Clicks had a strong portfolio and delivered high-quality photography services, the brand had very limited visibility on search engines. Most of its target keywords were either not ranking or appeared in low positions on Google. The website lacked search presence, making it difficult for customers to discover the business through organic search.
            </p>
            <p>
              The goal was to increase organic visibility, improve keyword rankings, secure placement in Google's AI Overview, strengthen the website's internal linking structure and drive more qualified leads through organic search.
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
              When Bitty Clicks approached us, the website struggled to attract organic traffic and generate consistent leads due to several critical performance and SEO blockers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Low Organic Visibility', desc: 'Minimal search engine presence and target keyword rankings.' },
              { title: 'Poor Keyword Rankings', desc: 'Product and category keywords were completely unranked or sat in extremely low positions.' },
              { title: 'Unoptimized Pages', desc: 'Service and portfolio catalog pages lacked proper keyword targeting and structure.' },
              { title: 'Heavy Images', desc: 'High-resolution photography portfolios were uncompressed, causing slow page loading times.' },
              { title: 'Weak Internal Linking', desc: 'Fragmented website structure preventing proper page crawl flow.' },
              { title: 'Missing Tracking & Setup', desc: 'No conversion tracking or advanced analytics tracking was configured.' }
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
              We focused on improving the technical foundation, optimizing portfolio image delivery, and building an authority structure optimized for generative search (AI Overview).
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Website Performance Optimization',
                points: [
                  'Optimized Core Web Vitals to improve page speed and user experience metrics',
                  'Implemented lazy loading across all photography and media assets',
                  'Compressed and optimized heavy images without losing premium display resolution',
                  'Removed redundant scripts to achieve fast page load parameters'
                ]
              },
              {
                num: '02',
                title: 'Technical SEO Fixes',
                points: [
                  'Resolved search crawlability and indexing issues',
                  'Optimized sitemap.xml and robots.txt structures for crawlers',
                  'Corrected internal linking to guide page crawl paths',
                  'Implemented canonical configuration and structured metadata schemas'
                ]
              },
              {
                num: '03',
                title: 'SEO Optimization & AI Overview Targeting',
                points: [
                  'Conducted extensive keyword targeting research for photography categories',
                  'Optimized title tags, meta tags, and header hierarchies',
                  'Optimized image alt tags and relevant media schemas',
                  'Structured descriptive content to capture Google\'s AI Overview answers'
                ]
              },
              {
                num: '04',
                title: 'Analytics & Tracking Setup',
                points: [
                  'Integrated Google Analytics and Search Console profiles',
                  'Set up custom conversion event triggers for quote inquiries',
                  'Configured analytics maps to analyze user search pathways'
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
              <div className="text-5xl font-black font-display text-white mb-2">Top #1</div>
              <div className="text-sm text-white/60 font-semibold">Google Rankings</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-yellow mb-2">Achieved</div>
              <div className="text-sm text-white/60 font-semibold">Google AI Overview Placement</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-lightblue mb-2">Optimized</div>
              <div className="text-sm text-white/60 font-semibold">Website Performance & Speed</div>
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
                <span className="font-medium">AI Overview</span>
                <span className="text-white/50">Poor</span>
                <span className="text-brand-lightblue font-bold">Achieved</span>
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
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">✦ VERIFIED RESULTS</span>
            <h2 className="text-3xl font-bold font-display text-white">Performance, Verified.</h2>
            <p className="text-white/60 text-sm mt-3">
              A closer look at the search visibility and performance evidence behind the growth story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* GSC screenshot */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-[3/2] max-h-[500px] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture1} 
                  alt="Bitty Clicks Google AI Overview result showing recommended studio for food product videography in Chennai" 
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
                <p className="text-sm font-semibold text-white">Google Search AI Overview Result Placement</p>
                <p className="text-xs text-white/50 mt-1">Verified featured result ranking Bitty Clicks at the top of generative search snippets</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 7. KEY BUSINESS IMPACT ═══ */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">✦ BUSINESS VALUE</span>
            <h2 className="text-3xl font-bold font-display text-white">Beyond Rankings</h2>
            <p className="text-white/60 text-sm mt-3">
              Strong SEO results create more than keyword positions. They build lasting customer discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Search Discoverability', desc: 'Positioned photography categories to organically rank on page #1, generating inbound customer views.' },
              { title: 'AI Search Visibility', desc: 'Featured in Google\'s AI Overview answers, claiming priority screen space for key commercial queries.' },
              { title: 'Qualified Lead Generation', desc: 'Higher organic rankings drove client-side bookings for jewellery, packaging, and restaurant shoots.' },
              { title: 'Website Performance', desc: 'Compressed high-resolution portfolios to build a rapid mobile loading speed layout.' },
              { title: 'Measurement Foundation', desc: 'Integrated custom tracking setups to identify top traffic channels and campaign paths.' }
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
            Bitty Clicks already had quality services. The challenge was limited search visibility, technical SEO performance and overall website positioning, which restricted organic traffic and lead generation. By improving the website structure, fixing technical SEO issues, and by optimizing images, the brand started gaining strong organic visibility and better search rankings.
          </p>
        </div>

        {/* ═══ 9. CASE STUDY NAVIGATION ═══ */}
        <div className="flex justify-between items-center border-t border-b border-white/10 py-8 mb-20">
          <Link to="/portfolio/odoo-erp-lead-generation" className="text-left group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1">← Previous Story</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Odoo ERP Lead Generation</span>
          </Link>
          <Link to="/portfolio/badie-studio-seo-case-study" className="text-right group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1 text-white/50">Next Growth Story →</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Badie Studio</span>
          </Link>
        </div>

        {/* ═══ 10. FINAL CTA ═══ */}
        <div className="glass-card-premium p-8 md:p-12 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto relative overflow-hidden bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-30 pointer-events-none" />
          <h2 className="text-3xl font-black font-display mb-4 text-white">Ready to Grow Your Search Visibility?</h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            From technical SEO and content optimization to AI search visibility and sustainable organic growth, MAGDIO builds strategies focused on measurable business outcomes.
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

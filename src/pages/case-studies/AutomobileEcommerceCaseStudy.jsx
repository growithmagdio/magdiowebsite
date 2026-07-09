import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaSearch, FaTrophy, FaServer, FaShieldAlt, FaChartBar, FaExpand, FaTimesCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Import local images from root casestudy 1
import picture3 from '../../../casestudy 1/Picture3.png';

export default function AutomobileEcommerceCaseStudy() {
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
        title="Ecommerce SEO Case Study – ₹1 Crore+ Sales | MAGDIO" 
        description="Explore how MAGDIO scaled an anonymous Automobile Spare Parts E-commerce brand in India from zero organic presence to ₹1 Crore+ in sales and ₹2.75 Lakhs+ revenue from ChatGPT."
        canonicalUrl="https://www.magdio.com/portfolio/automobile-ecommerce-seo-growth"
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
              SEO • AEO • GEO
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight mb-6 text-white">
              From Zero to ₹1 Crore+ in Online Sales
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Starting from a newly launched website with zero domain authority and search visibility, MAGDIO constructed a full-scale search and generative answer (AEO & GEO) foundation to drive sustainable revenue.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/50 border-t border-white/5 pt-8">
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Client</span>
                <span className="text-white/70">Automobile Spare Parts Brand (Anonymous)</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Industry</span>
                <span className="text-white/70">Automobile Spare Parts E-commerce</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Location</span>
                <span className="text-white/70">India</span>
              </div>
            </div>
          </div>

          {/* Results snapshot Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card-premium p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">Results Snapshot</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">₹1 Crore+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Online Sales Attributed to Marketing</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-lightblue">₹2.75 Lakhs+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Revenue Directly Attributed to ChatGPT</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-2xl font-bold font-display text-white">Hundreds</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">of Product Pages Indexed & Ranking</div>
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
              The client is a fast-growing Indian automobile e-commerce brand selling high-quality bike and car spare parts across India. The company offers genuine replacement parts, accessories, and maintenance products for multiple vehicle brands through its online store.
            </p>
            <p>
              As a newly launched business, the goal was to build a strong organic presence, generate consistent sales, and reduce dependency on paid advertising from the very beginning.
            </p>
            <p>
              The objective was simple: build a scalable SEO foundation capable of generating long-term organic revenue.
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
              Because the website was brand new, there was no existing search visibility or organic traffic. Everything had to be built from scratch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Zero Domain Authority', desc: 'A newly registered domain with zero authority in Google\'s search index.' },
              { title: 'No Traffic or Rankings', desc: 'No organic visitors and no keywords ranking in SERPs.' },
              { title: 'Unindexed Site Pages', desc: 'Vast collections of product SKU pages were not crawled or indexed by Google.' },
              { title: 'Weak Topical Authority', desc: 'No established authority or niche presence in the highly competitive automobile field.' },
              { title: 'No AI Search Presence', desc: 'Zero search presence or visibility across ChatGPT, Claude, or Google AI Overviews.' },
              { title: 'Missing Tracking Setup', desc: 'No conversion tracking or advanced ecommerce analytics setup was implemented.' }
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
              Instead of chasing quick rankings, we focused on building a technically strong website that search engines and AI platforms could easily understand.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'SEO Foundation & Site Architecture',
                points: [
                  'Built a highly scalable SEO-friendly website and folder structure',
                  'Planned keyword-focused product and category taxonomy hierarchy',
                  'Created optimized URL paths to enhance automated bot crawling',
                  'Implemented clear breadcrumb path navigation for search crawlers'
                ]
              },
              {
                num: '02',
                title: 'Technical SEO',
                points: [
                  'Conducted a thorough technical audit and site indexing setup',
                  'Optimized product databases for clean indexability',
                  'Improved site performance parameters and Core Web Vitals speed',
                  'Created XML sitemaps and optimized robots.txt crawling rules'
                ]
              },
              {
                num: '03',
                title: 'On-Page SEO',
                points: [
                  'Optimized product names, metadata title tags, and descriptions',
                  'Integrated keyword-rich semantic contexts across catalog copy',
                  'Structured logical header tags and contextual internal links',
                  'Optimized product image files with descriptive alternative text'
                ]
              },
              {
                num: '04',
                title: 'GEO & AEO Optimization (Generative Engine Optimization)',
                points: [
                  'Structured copy patterns optimized for AI-powered answer engines',
                  'Optimized catalog attributes for platforms like ChatGPT and Google AI Overviews',
                  'Implemented custom JSON-LD schema schemas and target FAQ markups'
                ]
              },
              {
                num: '05',
                title: 'Analytics & Performance Tracking',
                points: [
                  'Fully configured GA4 and integrated Google Search Console',
                  'Set up advanced ecommerce transaction conversion maps',
                  'Monitored search behavior patterns for constant campaign refinement'
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
              <div className="text-5xl font-black font-display text-white mb-2">₹1 Crore+</div>
              <div className="text-sm text-white/60 font-semibold">Organic E-commerce Sales</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-yellow mb-2">₹2.75L+</div>
              <div className="text-sm text-white/60 font-semibold">Sales from ChatGPT Traffic</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-lightblue mb-2">Hundreds</div>
              <div className="text-sm text-white/60 font-semibold">Product Pages Indexed</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-white mb-2">AEO / GEO</div>
              <div className="text-sm text-white/60 font-semibold">Generative Visibility</div>
            </div>
          </div>
        </div>

        {/* ═══ 6. PERFORMANCE PROOF GALLERY ═══ */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">✦ VERIFIED RESULTS</span>
            <h2 className="text-3xl font-bold font-display text-white">Performance, Verified.</h2>
            <p className="text-white/60 text-sm mt-3">
              Real dashboard screenshot showing e-commerce revenue attribution and ChatGPT referral traffic patterns.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Sales Dashboard Screenshot */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture3} 
                  alt="Shopify ecommerce sales dashboard showing 1.12 Crore sales attributed to marketing and ChatGPT traffic sessions" 
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
                <p className="text-sm font-semibold text-white">Ecommerce Revenue & Traffic Source Attribution Dashboard</p>
                <p className="text-xs text-white/50 mt-1">Verified sales dashboard showing order attribution, conversion rates, and ChatGPT referral logs</p>
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
              This campaign constructed a powerful, long-term foundation that allows traffic to scale without relying on ad budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: '₹1 Crore+ in New Revenue', desc: 'Generated high-intent transactional organic traffic, directly translating into over ₹1 Crore in sales.' },
              { title: 'Generative Engine Discovery', desc: 'Positioned product catalog nodes as top answers for users querying search assistants like ChatGPT.' },
              { title: 'Scalable Catalog Architecture', desc: 'The technical indexing structure allows automated discovery and mapping for thousands of SKU pages.' },
              { title: 'Search Engine Indexing', desc: 'Bypassed competitive keywords by building topical authority and indexing hundreds of product pages efficiently.' }
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
            By avoiding short-term shortcuts and engineering a scalable SEO, AEO, and GEO model, this brand scaled from zero visibility to over ₹1 Crore in sales. This case study demonstrates the capability of modern optimization principles that target both search engines and artificial intelligence platforms alike.
          </p>
        </div>

        {/* ═══ 9. CASE STUDY NAVIGATION ═══ */}
        <div className="flex justify-between items-center border-t border-b border-white/10 py-8 mb-20">
          <Link to="/portfolio/haber-living-seo-growth" className="text-left group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1">← Previous Story</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Haber Living</span>
          </Link>
          <Link to="/portfolio/dreamzil-meta-ads-growth" className="text-right group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1 text-white/50">Next Growth Story →</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Dreamzil Meta Ads Campaign</span>
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

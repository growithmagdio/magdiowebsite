import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaTrophy, FaServer, FaChartBar, FaExpand, FaGlobe, FaTimesCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Import local images from root Casestudy 2
import picture6 from '../../../Casestudy 2/Picture6.png';

export default function NammaMarktCaseStudy() {
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
        title="SEO Recovery & Domain Migration Case Study – Namma Markt | MAGDIO" 
        description="Discover how MAGDIO rebuilt Domain Authority and restored search engine visibility for Germany-based Indian online grocery store Namma Markt."
        canonicalUrl="https://www.magdio.com/portfolio/namma-markt-seo-case-study"
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
              SEO RECOVERY • DOMAIN AUTHORITY • ECOMMERCE SEO
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight mb-6 text-white">
              Rebuilding Domain Authority & Organic Performance Post-Migration
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Following a domain migration from Namma Grocery to Namma Markt, organic rankings fell sharply. Discover how we rebuilt their domain authority and restored search presence in Germany.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/50 border-t border-white/5 pt-8">
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Client</span>
                <span className="text-white/70">Namma Markt</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Industry</span>
                <span className="text-white/70">Indian Online Grocery Store</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Location</span>
                <span className="text-white/70">Germany</span>
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
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">1st Page</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Google Search Organic Visibility</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-lightblue">14%</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Domain Authority (from 1%)</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-2xl font-bold font-display text-white">4,200+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">High-Quality Backlinks Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 2. BUSINESS OVERVIEW ═══ */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <span className="text-6xl font-black text-white/5 font-display block leading-none mb-2">03</span>
              <h2 className="text-2xl font-bold font-display uppercase tracking-wider text-brand-yellow">The Business</h2>
              <div className="w-12 h-1 bg-brand-yellow mt-4" />
            </div>
          </div>
          <div className="md:col-span-8 text-white/70 text-lg leading-relaxed space-y-6">
            <p>
              Namma Markt is an online Indian grocery store based in Germany, offering a wide range of authentic Indian groceries, spices, fresh produce, frozen foods, and household essentials. The platform provides convenient online shopping with reliable delivery, making it easy for the Indian community across Germany to access quality products from trusted brands.
            </p>
            <p>
              Although Namma Markt offered a wide range of authentic Indian groceries, the website experienced a significant decline in search visibility after the domain change from "Namma Grocery" to "Namma Markt". The reduced domain authority and lower keyword rankings impacted its organic presence, making it difficult for potential customers to discover the business through Google search.
            </p>
            <p>
              The goal was to restore domain authority, increase organic search visibility and drive more qualified traffic.
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
              Migrating to a new brand domain is a high-risk event. Namma Markt faced a major drop in page indexes, authority, and sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Loss of Organic Traffic', desc: 'Drastic decline in search query traffic post brand migration.' },
              { title: 'Indexing & Crawlability Issues', desc: 'New domain catalog pages struggled to index on search systems.' },
              { title: 'Poor Product-level Ranks', desc: 'Grocery terms sat in low ranks without organic visibility.' },
              { title: 'Unoptimized Product Content', desc: 'Missing structured descriptions and keywords on product pages.' },
              { title: 'Poor Image Delivery & Loading', desc: 'Large uncompressed grocery images bloated load times.' },
              { title: 'Low Authority and Trust', desc: 'Domain Authority dropped to 1% following the domain switch.' }
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
              We rebuilt technical components, restructured redirect parameters, optimized e-commerce product schema metadata, and built backlinks.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Website Performance Optimization',
                points: [
                  'Upgraded Core Web Vitals to provide a smooth online shopping setup',
                  'Configured lazy load elements for product image cards',
                  'Optimized product images to reduce server loading payload',
                  'Removed blocking script files to speed up catalog loading',
                  'Enhanced mobile checkout parameters for shoppers in Germany'
                ]
              },
              {
                num: '02',
                title: 'Technical SEO Rebuild & Scheme Markup',
                points: [
                  'Resolved catalog index limits and indexing blockers',
                  'Corrected broken mapping URLs and redone redirect paths',
                  'Created clean canonical tag indexes and metadata parameters',
                  'Added advanced Organization and GroceryStore JSON-LD schema details'
                ]
              },
              {
                num: '03',
                title: 'E-commerce Content Optimization',
                points: [
                  'Targeted buyer search terms for Indian spices and foods in Germany',
                  'Optimized headings, title meta values, and catalog descriptions',
                  'Fleshed out text content on key category listing pages',
                  'Added search keywords inside image alt designations'
                ]
              },
              {
                num: '04',
                title: 'Backlink Campaign & Authority Rebuild',
                points: [
                  'Acquired 4,200+ high-quality authoritative backlinks',
                  'Built local German citations to build regional geographical trust signals',
                  'Restored the authority profile from 1% up to 14% DA'
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
              <div className="text-5xl font-black font-display text-white mb-2">1st Page</div>
              <div className="text-sm text-white/60 font-semibold">Google Organic Visibility</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-yellow mb-2">14%</div>
              <div className="text-sm text-white/60 font-semibold">Domain Authority (from 1%)</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-lightblue mb-2">4.2K</div>
              <div className="text-sm text-white/60 font-semibold">Backlinks Built</div>
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
                <span className="text-brand-yellow font-bold">1st Page Rankings</span>
              </div>
              <div className="grid grid-cols-3 border-b border-white/5 py-2">
                <span className="font-medium">Backlink Volume</span>
                <span className="text-white/50">Low</span>
                <span className="text-brand-lightblue font-bold">4.2K Backlinks</span>
              </div>
              <div className="grid grid-cols-3 border-b border-white/5 py-2">
                <span className="font-medium">Domain Authority</span>
                <span className="text-white/50">1%</span>
                <span className="text-white font-bold">14% DA</span>
              </div>
              <div className="grid grid-cols-3 border-b border-white/5 py-2">
                <span className="font-medium">Website Performance</span>
                <span className="text-white/50">Poor</span>
                <span className="text-white font-bold">Optimized</span>
              </div>
              <div className="grid grid-cols-3 py-2">
                <span className="font-medium">SEO Structure</span>
                <span className="text-white/50">Unoptimized</span>
                <span className="text-brand-yellow font-bold">Fully Optimized</span>
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
              Verification screenshot validating Namma Markt ranking on Google first page search results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* GSC screenshot */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-[3/2] max-h-[500px] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture6} 
                  alt="Google search results showing Namma Markt ranked on the first page for Indian online grocery store in Germany" 
                  className="w-full h-full object-contain"
                />
                <button 
                  onClick={() => setLightboxImage(picture6)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                >
                  <FaExpand /> Zoom Screenshot
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">Google Search Results Ranking Position</p>
                <p className="text-xs text-white/50 mt-1">Verified search ranking for 'indian online grocery store in germany' showing NammaMarkt on page #1</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 7. CONCLUSION ═══ */}
        <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-16 mb-20">
          <h2 className="text-2xl font-bold font-display mb-4 text-white">Conclusion</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            By restoring technical SEO, strengthening the website structure, implementing a targeted SEO strategy and building high-quality backlinks, the website regained organic visibility, improved Google rankings and established a stronger foundation for long-term organic growth.
          </p>
        </div>

        {/* ═══ 8. CASE STUDY NAVIGATION ═══ */}
        <div className="flex justify-between items-center border-t border-b border-white/10 py-8 mb-20">
          <Link to="/portfolio/badie-studio-seo-case-study" className="text-left group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1">← Previous Story</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Badie Studio</span>
          </Link>
          <Link to="/portfolio/sasvitha-home-finance-seo-case-study" className="text-right group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1 text-white/50">Next Growth Story →</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Sasvitha Home Finance</span>
          </Link>
        </div>

        {/* ═══ 9. FINAL CTA ═══ */}
        <div className="glass-card-premium p-8 md:p-12 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto relative overflow-hidden bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-30 pointer-events-none" />
          <h2 className="text-3xl font-black font-display mb-4 text-white">Need to Recover Search Rankings?</h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            Whether migrating domains or resolving structural Google penalties, MAGDIO builds structured retrieval frameworks to re-establish your organic visibility.
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

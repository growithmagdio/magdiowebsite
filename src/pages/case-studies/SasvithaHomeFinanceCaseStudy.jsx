import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaTrophy, FaServer, FaChartBar, FaExpand, FaTimesCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Import local images from root Casestudy 2
import picture10 from '../../../Casestudy 2/Picture10.png';

export default function SasvithaHomeFinanceCaseStudy() {
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
        title="Local SEO & Finance Case Study – Sasvitha Home Finance | MAGDIO" 
        description="Learn how MAGDIO grew local search rankings and organic loan inquiry leads for Tamil Nadu's Sasvitha Home Finance."
        canonicalUrl="https://www.magdio.com/portfolio/sasvitha-home-finance-seo-case-study"
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
              SEO • LOCAL SEARCH • LEAD GENERATION
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight mb-6 text-white">
              From Low Visibility to Google Top Position for Home Loan Queries
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Sasvitha Home Finance needed stronger visibility for competitive home-loan searches and more qualified loan inquiries. Discover how we optimized their search framework.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/50 border-t border-white/5 pt-8">
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Client</span>
                <span className="text-white/70">Sasvitha Home Finance</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Industry</span>
                <span className="text-white/70">Finance Company</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Location</span>
                <span className="text-white/70">Tamil Nadu, India</span>
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
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">Top Ranks</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Google Rankings for Target Keywords</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-lightblue">Increased</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Qualified Organic Loan Inquiries</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-2xl font-bold font-display text-white">Enhanced</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Local Map Pack Search Visibility</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 2. BUSINESS OVERVIEW ═══ */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <span className="text-6xl font-black text-white/5 font-display block leading-none mb-2">04</span>
              <h2 className="text-2xl font-bold font-display uppercase tracking-wider text-brand-yellow">The Business</h2>
              <div className="w-12 h-1 bg-brand-yellow mt-4" />
            </div>
          </div>
          <div className="md:col-span-8 text-white/70 text-lg leading-relaxed space-y-6">
            <p>
              Sasvitha Home Finance is a trusted home loan service provider in Tamil Nadu, helping individuals and families secure the right financing solutions for their dream homes. The company specializes in home loans, construction loans, mortgage loans, plot loans, and balance transfer services, offering personalized financial guidance with a simple and transparent loan process.
            </p>
            <p>
              The goal was to improve organic visibility and generate leads.
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
              Home financing is one of the most competitive search spaces. Sasvitha needed to capture regional intent effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Low Search Keyword Ranks', desc: 'Struggled to compete for local home loan terms on Google.' },
              { title: 'Unoptimized Service Pages', desc: 'Plot, construction, and mortgage loan pages lacked keyword targeting.' },
              { title: 'Slow Page Speeds', desc: 'Slow loading latency affecting mobile traffic retention.' },
              { title: 'Weak Internal Linking', desc: 'Crawl paths did not guide visitors or crawlers logically.' },
              { title: 'Low Crawl Efficiency', desc: 'Crawling and indexation delays on newly deployed layout elements.' },
              { title: 'Unqualified Traffic', desc: 'Lack of local intent keywords drove visitors who were not looking for regional loans.' }
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
              We developed hyper-local search keyword groups, reconstructed metadata structures, and established domain trust scores.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'On-Page & Local SEO Optimization',
                points: [
                  'Conducted keyword intent analysis on financial home loan queries',
                  'Targeted buyer search terms for specific cities in Tamil Nadu',
                  'Optimized title tags, headers, and meta structure for plot and construction loans',
                  'Restructured layout copy for better formatting and user readability'
                ]
              },
              {
                num: '02',
                title: 'Technical SEO Audit & Setup',
                points: [
                  'Corrected crawl pathways and resolved 404 links',
                  'Optimized sitemap files and internal catalog link flows',
                  'Implemented strict canonical definitions and schema tags'
                ]
              },
              {
                num: '03',
                title: 'Backlink Building & Trust Signals',
                points: [
                  'Acquired high-quality external financial sector backlinks',
                  'Improved overall domain trust scores and local citations',
                  'Strengthened search engine index trust thresholds'
                ]
              },
              {
                num: '04',
                title: 'Analytics & Reporting Dashboard',
                points: [
                  'Connected Google Analytics and Google Search Console',
                  'Integrated custom contact forms tracking to evaluate lead sources',
                  'Monitored user behavior metrics to continuously adjust content strategy'
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-5xl font-black font-display text-white mb-2">Top Ranks</div>
              <div className="text-sm text-white/60 font-semibold">Improved Keyword Positions</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-yellow mb-2">Increased</div>
              <div className="text-sm text-white/60 font-semibold">Qualified Organic Loan Leads</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-lightblue mb-2">Enhanced</div>
              <div className="text-sm text-white/60 font-semibold">Local Maps Pack Visibility</div>
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
                  src={picture10} 
                  alt="Google search results showing Sasvitha Home Finance ranked on page 1 for Composite Loan in Tirunelveli" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <button 
                  onClick={() => setLightboxImage(picture10)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                >
                  <FaExpand /> Zoom Screenshot
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">Google Search Results Ranking & AI Overview Placement</p>
                <p className="text-xs text-white/50 mt-1">Verified search ranking for 'Composite Loan in Tirunelveli' showing Sasvitha Home Finance on page #1</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ 7. CONCLUSION ═══ */}
        <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-16 mb-20">
          <h2 className="text-2xl font-bold font-display mb-4 text-white">Conclusion</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Through a strategic combination of SEO, technical optimization, location-focused content, and performance improvements, the website evolved into a stronger lead generation engine with improved search visibility, higher Google rankings and increased organic customer acquisition.
          </p>
        </div>

        {/* ═══ 8. CASE STUDY NAVIGATION ═══ */}
        <div className="flex justify-between items-center border-t border-b border-white/10 py-8 mb-20">
          <Link to="/portfolio/namma-markt-seo-case-study" className="text-left group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1">← Previous Story</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Namma Markt</span>
          </Link>
          <div className="text-right">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1">Next Story</span>
            <span className="text-sm font-semibold text-white/50">End of Portfolio</span>
          </div>
        </div>

        {/* ═══ 9. FINAL CTA ═══ */}
        <div className="glass-card-premium p-8 md:p-12 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto relative overflow-hidden bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-30 pointer-events-none" />
          <h2 className="text-3xl font-black font-display mb-4 text-white">Ready to Boost Your Local Lead Volume?</h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            From financial and corporate services to niche commerce, MAGDIO constructs high-intent local SEO campaigns that drive measurable lead volume.
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

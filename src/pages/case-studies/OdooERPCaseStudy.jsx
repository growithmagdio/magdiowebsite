import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaSearch, FaTrophy, FaServer, FaShieldAlt, FaChartBar, FaExpand, FaTimesCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Import local images from root casestudy 1
import picture6 from '../../../casestudy 1/Picture6.png';

export default function OdooERPCaseStudy() {
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
        title="Odoo ERP Meta Ads Case Study – 680+ Leads | MAGDIO" 
        description="Discover how MAGDIO optimized Meta Ads campaigns for an Odoo Gold Partner, generating 680+ highly qualified B2B leads and significantly reducing acquisition costs."
        canonicalUrl="https://www.magdio.com/portfolio/odoo-erp-lead-generation"
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
              META ADS • B2B LEAD GENERATION • CONVERSION OPTIMIZATION
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight mb-6 text-white">
              Reduced Lead Costs & Generated 680+ Qualified Leads
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Discover how MAGDIO audit, pixel restructuring, and lead qualification funnel updates turned around underperforming campaigns to generate steady B2B inquiries for an Odoo Gold Partner.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/50 border-t border-white/5 pt-8">
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Client</span>
                <span className="text-white/70">Oodu Implementers (Odoo Gold Partner)</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Industry</span>
                <span className="text-white/70">ERP Implementation & Business Automation</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Location</span>
                <span className="text-white/70">India / Worldwide</span>
              </div>
            </div>
          </div>

          {/* Results snapshot Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card-premium p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden bg-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">Results Snapshot</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">680+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Qualified ERP Implementation Leads</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-lightblue">₹134.17</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Lowest Cost Per Lead (CPL)</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-2xl font-bold font-display text-white">Consistent</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Lead Flow Across Multiple Verticals</div>
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
              Oodu Implementers is a certified Odoo Gold Partner helping businesses streamline operations through Odoo ERP implementation, customization, integration, and ongoing support.
            </p>
            <p>
              They work with companies across multiple industries, enabling them to automate business processes, improve operational efficiency, and accelerate digital transformation with tailored ERP solutions.
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
              Although the client was already investing in Meta Ads, the campaigns were delivering inconsistent results and poor lead quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'High Cost Per Lead', desc: 'Acquisition costs were significantly higher than industry benchmarks.' },
              { title: 'Low Lead Quality', desc: 'Inquiries came from low-intent searchers without active purchase requirements.' },
              { title: 'Volatile Lead Influx', desc: 'Erratic lead flow patterns caused tracking problems for sales teams.' },
              { title: 'No Full-Funnel Structure', desc: 'Lacked a retargeting funnel or custom landing experiences.' },
              { title: 'Unoptimized Meta Pixel', desc: 'Meta tracking systems were not configured to filter target user attributes.' },
              { title: 'Creative Fatigue', desc: 'Relying on the same static visual ads created campaign fatigue over time.' }
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
              Rather than making minor setting tweaks, we rebuilt the lead generation funnel and qualification process from the ground up.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Campaign & Account Audit',
                points: [
                  'Performed a deep analysis of client\'s historical Meta Ads logs',
                  'Identified specific high-cost drop-off zones in campaign parameters',
                  'Audited competitor advertising strategies in ERP spaces'
                ]
              },
              {
                num: '02',
                title: 'Tracking & Technical Setup',
                points: [
                  'Reconfigured Meta Pixel attributes for accurate analytics',
                  'Implemented custom conversion event hooks across landing parameters',
                  'Isolated search visitor attributes to train algorithm delivery'
                ]
              },
              {
                num: '03',
                title: 'Creative & Content Strategy',
                points: [
                  'Developed multiple copy variants targeting specific business pain points',
                  'Highlighted core ERP modular benefits (Manufacturing, Garments, Chemicals)',
                  'Implemented weekly creative rotations to eliminate creative fatigue'
                ]
              },
              {
                num: '04',
                title: 'Funnel Optimization & Scaling',
                points: [
                  'Introduced custom qualification questions inside ad forms to screen intent',
                  'Configured retargeting campaigns targeting past website visitors',
                  'Scaled budget parameters on high-intent vertical campaigns'
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
            <h2 className="text-3xl font-bold font-display text-white">Consistent High-Intent B2B Leads</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-5xl font-black font-display text-white mb-2">680+</div>
              <div className="text-sm text-white/60 font-semibold">Total Leads Generated</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-yellow mb-2">₹134.17</div>
              <div className="text-sm text-white/60 font-semibold">Lowest Cost Per Lead</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-lightblue mb-2">₹1.35L+</div>
              <div className="text-sm text-white/60 font-semibold">Total Ad Spend Logged</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-white mb-2">High Intent</div>
              <div className="text-sm text-white/60 font-semibold">Qualified Inquiries</div>
            </div>
          </div>

          {/* Table representation as responsive clean grid */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 max-w-3xl mx-auto overflow-hidden">
            <h3 className="font-display font-bold text-white text-base mb-4 text-center sm:text-left">Performance Metrics Comparison</h3>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 font-bold border-b border-white/10 pb-2 text-white/40">
                <span>Metric</span>
                <span>Result</span>
              </div>
              <div className="grid grid-cols-2 border-b border-white/5 py-2">
                <span className="font-medium">Qualified Leads Generated</span>
                <span className="text-white font-bold">680+</span>
              </div>
              <div className="grid grid-cols-2 border-b border-white/5 py-2">
                <span className="font-medium">Total Meta Ad Spend</span>
                <span className="text-white font-bold">₹1,35,941</span>
              </div>
              <div className="grid grid-cols-2 border-b border-white/5 py-2">
                <span className="font-medium">Lowest Cost Per Lead</span>
                <span className="text-brand-yellow font-bold">₹134.17</span>
              </div>
              <div className="grid grid-cols-2 border-b border-white/5 py-2">
                <span className="font-medium">Highest Cost Per Lead</span>
                <span className="text-brand-lightblue font-bold">₹375.00</span>
              </div>
              <div className="grid grid-cols-2 border-b border-white/5 py-2">
                <span className="font-medium">Campaign Performance</span>
                <span className="text-white font-bold">Consistent lead generation across multiple campaigns</span>
              </div>
              <div className="grid grid-cols-2 border-b border-white/5 py-2">
                <span className="font-medium">Lead Quality</span>
                <span className="text-brand-yellow font-bold">Improved through advanced qualification forms</span>
              </div>
              <div className="grid grid-cols-2 py-2">
                <span className="font-medium">Funnel Performance</span>
                <span className="text-white font-bold">Better audience targeting and retargeting efficiency</span>
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
              Real Meta Ads dashboard screenshots showing Odoo Gold Partner campaign metrics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* GSC screenshot */}
            <div className="glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-[16/5] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture6} 
                  alt="Meta Ads dashboard showing campaign names and CPL metrics for Odoo Gold Partner" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <button 
                  onClick={() => setLightboxImage(picture6)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold gap-2 transition-opacity duration-300"
                >
                  <FaExpand /> Zoom Screenshot
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">Meta Ads Campaign Metrics Dashboard</p>
                <p className="text-xs text-white/50 mt-1">Verified dashboard showing lead generation numbers for specific ERP modules</p>
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
              Rebuilding this account created a streamlined client capture channel that fuels business development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: '680+ Qualified ERP Leads', desc: 'Delivered actual qualified business inquiries from decision makers seeking custom automation services.' },
              { title: 'Drastic Cost Per Lead Reduction', desc: 'Decreased average acquisition costs to as low as ₹134.17 per B2B lead, maximizing budget efficiency.' },
              { title: 'Modular Industry Targeting', desc: 'Created high-intent target audience segments across Restaurant, Garment, Chemical, and Manufacturing verticals.' },
              { title: 'Zero Creative Fatigue', desc: 'Constructed a repeatable weekly creative rotation framework that keeps audience metrics fresh.' }
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
            B2B ERP marketing requires deep alignment with target organizational buyers. By separating our campaigns into modular industrial sectors and optimizing Meta Pixel attributes, we scaled inquiries to 680+ leads. This case study demonstrates how advanced audience parameters generate qualified leads in high-value enterprise niches.
          </p>
        </div>

        {/* ═══ 9. CASE STUDY NAVIGATION ═══ */}
        <div className="flex justify-between items-center border-t border-b border-white/10 py-8 mb-20">
          <Link to="/portfolio/dreamzil-meta-ads-growth" className="text-left group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1">← Previous Story</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Dreamzil Meta Ads Campaign</span>
          </Link>
          <Link to="/portfolio/bitty-clicks-seo-case-study" className="text-right group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1 text-white/50">Next Growth Story →</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Bitty Clicks</span>
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

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaSearch, FaTrophy, FaServer, FaShieldAlt, FaChartBar, FaExpand, FaTimesCircle } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Import local images from root casestudy 1
import picture4 from '../../../casestudy 1/Picture4png.png';
import picture5 from '../../../casestudy 1/Picture5.png';

export default function DreamzilCaseStudy() {
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
        title="Meta Ads Case Study – 470+ Leads & ₹5L+ Sales | MAGDIO" 
        description="Discover how MAGDIO generated 470+ qualified B2B leads and over ₹5 Lakhs in sales for Dreamzil using highly targeted Meta Ads campaigns and Reels content optimization."
        canonicalUrl="https://www.magdio.com/portfolio/dreamzil-meta-ads-growth"
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
              META ADS • B2B LEAD GENERATION • SOCIAL GROWTH
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight mb-6 text-white">
              Generated 470+ Qualified Leads & ₹5 Lakhs+ in Sales
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              By establishing an optimized advertising funnel and training Meta's algorithm from scratch, MAGDIO positioned Dreamzil's B2B eco-friendly catalogs to convert high-value buyers.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-white/50 border-t border-white/5 pt-8">
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Client</span>
                <span className="text-white/70">Dreamzil</span>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div>
                <span className="block font-bold text-white uppercase text-xs tracking-wider mb-1">Industry</span>
                <span className="text-white/70">Eco-Friendly Promotional Products & Corporate Gifting</span>
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
            <div className="glass-card-premium p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden bg-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">Results Snapshot</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">472+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Qualified B2B Leads Generated</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-lightblue">₹5 Lakhs+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Attributed Sales (With &lt; ₹2,600 Spend)</div>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <div className="text-2xl font-bold font-display text-white">2,917+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">New Social Media Followers</div>
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
              Dreamzil is an Indian manufacturer of eco-friendly and customized promotional products, including seed pencils, plantable pens, eco-friendly notebooks, tote bags, and corporate gifting solutions.
            </p>
            <p>
              Their primary customers include businesses, educational institutions, event organizers, and corporate brands looking for sustainable promotional merchandise.
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
              Although Dreamzil had high-quality products and strong market demand, their social media presence was not converting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Low Social Engagement', desc: 'Minimal followers and interaction rates on Facebook and Instagram.' },
              { title: 'No Meta Campaign History', desc: 'No prior advertising history or audience signals to optimize.' },
              { title: 'Unconfigured Tracking', desc: 'Meta Business Manager, Ad Accounts, and Meta Pixel trackers were not configured.' },
              { title: 'No Algorithm Learning Data', desc: 'Meta\'s delivery algorithm lacked profile data on prospective corporate buyers.' },
              { title: 'Unoptimized Ad Funnel', desc: 'No structured pipeline to move social views into B2B lead completions.' },
              { title: 'Limited Video Assets', desc: 'Lack of verified video copy or hooks tailored for corporate accounts.' }
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
              We focused on building a solid profile presence and technical pixel setup before initiating B2B lead generation campaigns.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: 'Social Media Preparation',
                points: [
                  'Published high-quality visual creatives and product showcase reels',
                  'Maintained consistent posting cadences to establish account verification',
                  'Improved profile layout to appeal to B2B corporate buyers'
                ]
              },
              {
                num: '02',
                title: 'Meta Ads Setup',
                points: [
                  'Constructed and verified the client\'s Meta Business Manager portal',
                  'Installed and tested Meta Pixel tracking across landing parameters',
                  'Structured campaigns around tight target interests following Meta best practices'
                ]
              },
              {
                num: '03',
                title: 'Creative & Campaign Strategy',
                points: [
                  'Developed high-converting B2B hooks focused on eco-friendly corporate values',
                  'A/B tested campaign objectives between Messenger leads and On-Facebook forms',
                  'Optimized native lead capture forms to filter out low-intent users'
                ]
              },
              {
                num: '04',
                title: 'Campaign Optimization & Scaling',
                points: [
                  'Began with page engagement objectives to feed audience signals to Meta\'s Pixel',
                  'Launched targeted Lead Generation once Pixel trained database established signals',
                  'Continuously scaled top-performing creatives while dropping CPL'
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
            <h2 className="text-3xl font-bold font-display text-white">Exceptional Leads at Lowest Cost</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-5xl font-black font-display text-white mb-2">472+</div>
              <div className="text-sm text-white/60 font-semibold">Total Qualified Leads</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-yellow mb-2">₹3.23</div>
              <div className="text-sm text-white/60 font-semibold">Lowest Cost Per Lead</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-brand-lightblue mb-2">₹5 Lakhs+</div>
              <div className="text-sm text-white/60 font-semibold">Attributed Sales Generated</div>
            </div>
            <div>
              <div className="text-5xl font-black font-display text-white mb-2">2,917+</div>
              <div className="text-sm text-white/60 font-semibold">New Profile Followers</div>
            </div>
          </div>

          {/* Clean layout comparing campaigns */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            <div className="glass-card-premium p-6 rounded-2xl border border-white/10 bg-white/5">
              <h4 className="font-display font-bold text-brand-yellow text-lg border-b border-white/10 pb-2 mb-4">Eco-Friendly Notebooks Campaign</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex justify-between"><span>Qualified Leads</span> <strong className="text-white">197</strong></li>
                <li className="flex justify-between"><span>Cost Per Lead</span> <strong className="text-brand-yellow">₹8.59</strong></li>
                <li className="flex justify-between"><span>Ad Spend</span> <strong className="text-white">₹1,697</strong></li>
                <li className="flex justify-between"><span>Estimated Sales</span> <strong className="text-brand-lightblue">₹3 Lakhs+</strong></li>
              </ul>
            </div>
            <div className="glass-card-premium p-6 rounded-2xl border border-white/10 bg-white/5">
              <h4 className="font-display font-bold text-brand-lightblue text-lg border-b border-white/10 pb-2 mb-4">Customized Tote Bags Campaign</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex justify-between"><span>Qualified Leads</span> <strong className="text-white">275</strong></li>
                <li className="flex justify-between"><span>Cost Per Lead</span> <strong className="text-brand-lightblue">₹3.23</strong></li>
                <li className="flex justify-between"><span>Ad Spend</span> <strong className="text-white">₹888.71</strong></li>
                <li className="flex justify-between"><span>Estimated Sales</span> <strong className="text-brand-yellow">₹2 Lakhs+</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ═══ 6. PERFORMANCE PROOF GALLERY ═══ */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 block">✦ VERIFIED RESULTS</span>
            <h2 className="text-3xl font-bold font-display text-white">Performance, Verified.</h2>
            <p className="text-white/60 text-sm mt-3">
              Real screenshots from Meta Ads Manager dashboard and Instagram Reel insights.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Meta Ads list */}
            <div className="md:col-span-8 glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5">
              <div className="relative aspect-[16/5] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture4} 
                  alt="Meta Ads Manager dashboard showing Dreamzil lead campaigns metrics" 
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
                <p className="text-sm font-semibold text-white">Meta Ads Manager Dashboard Campaign Leads Log</p>
                <p className="text-xs text-white/50 mt-1">Verified Cost Per Lead (CPL) stats showing lead numbers and ad spend values</p>
              </div>
            </div>

            {/* Reel stats */}
            <div className="md:col-span-4 glass-card-premium p-4 rounded-3xl border border-white/10 group bg-white/5 mx-auto max-w-[280px]">
              <div className="relative aspect-[9/19] rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <img 
                  src={picture5} 
                  alt="Instagram Reel insights showing 365,733 views and high social engagement" 
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
                <p className="text-sm font-semibold text-white">Instagram Reel Insights</p>
                <p className="text-xs text-white/50 mt-1">365K+ views and organic B2B reach indicators</p>
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
              We did not just generate temporary clicks; we established a functional, repeatable B2B pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: '472+ Verified Corporate Leads', desc: 'Gathered actual corporate purchase intent leads, establishing a robust future client database.' },
              { title: '₹5 Lakhs+ Attributed Revenue', desc: 'Generated sales worth ₹5 Lakhs with an ad spend of less than ₹2,600, yielding high return on ad spend.' },
              { title: 'Meta Account Algorithm Optimization', desc: 'Trained the Meta Pixel database on B2B purchaser indicators, facilitating cheaper automated targeting in future campaigns.' },
              { title: '2,917+ Targeted Followers', desc: 'Earned targeted social followings consisting of purchasers, distributors, and business clients.' }
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
            Dreamzil\'s results demonstrate that smart targeting and proper technical optimization generate exceptional ROI. With less than ₹2,600 spent on advertising, we opened a scalable, high-volume channel for corporate leads, establishing standard structures for all B2B eco-friendly catalogs.
          </p>
        </div>

        {/* ═══ 9. CASE STUDY NAVIGATION ═══ */}
        <div className="flex justify-between items-center border-t border-b border-white/10 py-8 mb-20">
          <Link to="/portfolio/automobile-ecommerce-seo-growth" className="text-left group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1">← Previous Story</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Automobile Ecommerce Brand</span>
          </Link>
          <Link to="/portfolio/odoo-erp-lead-generation" className="text-right group hover:text-brand-yellow transition-colors">
            <span className="text-xs text-white/40 block uppercase tracking-wider mb-1 text-white/50">Next Growth Story →</span>
            <span className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">Odoo Gold Partner / ERP Lead Generation</span>
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

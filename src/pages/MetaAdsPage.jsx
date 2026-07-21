import { motion } from 'framer-motion';
import { 
  FaArrowRight, FaCheckCircle, FaTimesCircle, FaFacebook, FaInstagram,
  FaWhatsapp, FaChartLine, FaFilter, FaUsers, FaTools, FaCheck, FaBuilding
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

const metaFaqs = [
  {
    q: 'What does a Meta Ads agency in Chennai do?',
    a: 'A Meta Ads agency creates, manages, and optimizes advertising campaigns across Facebook, Instagram, Messenger, and the Meta Audience Network. At Magdio, we focus on generating qualified leads, sales, and measurable business growth through data-driven campaign management.'
  },
  {
    q: 'Is Meta Ads better than Google Ads?',
    a: 'It depends on your business goals. Meta Ads are ideal for building brand awareness, generating demand, and reaching audiences based on interests and behaviour. Google Ads perform best when customers are actively searching for your products or services. Many businesses achieve the best results by combining both platforms.'
  },
  {
    q: 'How much budget do I need for Meta Ads?',
    a: 'There is no fixed budget. The right investment depends on your industry, competition, campaign objective, and customer acquisition cost. We recommend starting with a budget that allows sufficient data collection before scaling successful campaigns.'
  },
  {
    q: 'How long does it take to see results from Meta Ads?',
    a: 'Most campaigns begin generating impressions, clicks, and enquiries within a few days of launch. However, meaningful optimization usually takes 2–4 weeks, as Meta\'s algorithm gathers enough conversion data to improve performance.'
  },
  {
    q: 'Can Meta Ads generate B2B leads?',
    a: 'Yes. Meta Ads are effective for B2B businesses when campaigns target the right decision-makers using lead forms, landing pages, remarketing, and high-value content offers.'
  },
  {
    q: 'Which industries benefit most from Meta Ads?',
    a: 'Meta Ads perform well across ecommerce, healthcare, education, real estate, SaaS, manufacturing, hospitality, professional services, local businesses, and personal brands. Campaign strategy varies based on customer behaviour and business goals.'
  },
  {
    q: 'What metrics do you use to measure Meta Ads performance?',
    a: 'We monitor key performance indicators such as Click-Through Rate (CTR), Cost Per Click (CPC), Cost Per Lead (CPL), Cost Per Acquisition (CPA), Conversion Rate (CVR), Return on Ad Spend (ROAS), Frequency, and overall lead quality to ensure campaigns deliver profitable results.'
  },
  {
    q: 'What is the difference between Meta Pixel and Conversion API?',
    a: 'Meta Pixel tracks user activity through the browser, while Conversion API sends conversion data directly from the server. Using both together improves tracking accuracy, especially after privacy updates and browser restrictions.'
  },
  {
    q: 'How do you reduce the cost per lead in Meta Ads?',
    a: 'We improve Cost Per Lead (CPL) by refining audience targeting, testing multiple ad creatives, optimizing campaign objectives, improving landing pages, implementing accurate conversion tracking, and continuously analyzing campaign performance.'
  },
  {
    q: 'Why choose Magdio as your Meta Ads marketing agency in Chennai?',
    a: 'Magdio combines strategic planning, audience research, creative testing, Meta Pixel and Conversion API implementation, landing page optimization, and continuous performance analysis to help businesses generate qualified leads, improve ROI, and scale their advertising with confidence.'
  }
];

export default function MetaAdsPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0 bg-[#03030b]">
      <SEO 
        title="Meta Ads Agency in Chennai | Best Meta Ads Expert | MAGDIO" 
        description="MAGDIO is a trusted Facebook marketing company in Chennai offering Facebook Ads, audience targeting, campaign optimization, and lead generation services." 
        canonicalUrl="https://www.magdio.com/services/meta-ads"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Meta Ads Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "MAGDIO"
          },
          "areaServed": ["Chennai", "Coimbatore", "Madurai", "Tamil Nadu", "India"]
        }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03030b]/85 via-[#06071a]/95 to-[#03030b] z-10" />
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #3b5998, transparent 70%)' }} />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #E1306C, transparent 70%)' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Meta & Social Advertising Ecosystem
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Meta Ads Agency <span className="gradient-text-blue">in Chennai</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg sm:text-2xl font-bold text-white/90 mb-6 max-w-4xl mx-auto font-display font-black"
          >
            Turn Meta Advertising Into Measurable Business Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            Running Meta Ads is easy. Building campaigns that consistently generate qualified leads, sales, and profitable returns is far more challenging. Many businesses come to us after investing in Facebook and Instagram advertising without seeing meaningful business results. Their campaigns often receive thousands of impressions, clicks, and engagement—but very few enquiries or purchases.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8"
          >
            <button onClick={scrollToEnquiry} className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5" style={{ background: 'linear-gradient(45deg, #1877F2, #E1306C)' }}>
              Launch Your Meta Campaign
            </button>
            <a href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20Meta%20Ads%20experts." target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-3 flex items-center justify-center gap-2">
              <FaWhatsapp size={18} /> Talk To Our Experts
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 1.5 CAMPAIGN ISSUES & EXPERIENCE ── */}
      <section className="py-16 lg:py-24 relative bg-black/5 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest">
                ✦ Common Pitfalls
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
                Why Underperforming <br />
                <span className="gradient-text-purple">Campaigns Struggle</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                In most cases, the problem isn't Meta's advertising platform. It's the strategy behind the campaign. Underperforming campaigns usually suffer from:
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Campaigns optimized for traffic instead of conversions',
                  'Broad audience targeting that attracts low-quality clicks',
                  'Creatives that grab attention but don\'t encourage action',
                  'Missing Meta Pixel or Conversion API tracking',
                  'No remarketing strategy to re-engage interested users',
                  'Decisions based on likes and reach rather than revenue'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-white/70 text-xs sm:text-sm">
                    <FaTimesCircle className="text-red-500 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-premium p-8 border border-white/10 relative overflow-hidden shadow-2xl rounded-3xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
                What Our Campaign Experience Shows
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                From managing Meta Ads campaigns across different industries, we've found that consistent results come from strategy, testing, and optimization—not simply increasing ad spend.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-black text-white text-base">680+ Qualified Leads</h4>
                    <p className="text-white/40 text-xs mt-0.5">Generated for a localized B2B ERP campaign.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-black text-white text-base">₹1.35 Lakhs Invested</h4>
                    <p className="text-white/40 text-xs mt-0.5">Ad spend systematically managed and optimized.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-black text-white text-base">Optimized CPL & Pixel Analytics</h4>
                    <p className="text-white/40 text-xs mt-0.5">Using Meta Pixel & Conversion API to optimize based on actual business outcomes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. IS META ADVERTISING RIGHT FOR YOUR BUSINESS? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Strategic Assessment
            </div>
            <h2 className="section-title mb-4">
              Is Meta Advertising the <span className="gradient-text-blue">Right Choice for Your Business?</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-white/60">
              Not every business should invest in Meta Ads immediately. The platform performs best when there is a clear offer, a defined audience, and a measurable conversion goal.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="glass-card p-6 border border-white/5">
              <h3 className="font-display font-bold text-white text-lg mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> Generate Qualified Leads
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Businesses offering consultations, B2B solutions, education, healthcare, or services can use Meta Ads to generate enquiries through lead forms, landing pages, and WhatsApp campaigns.
              </p>
            </div>

            <div className="glass-card p-6 border border-white/5">
              <h3 className="font-display font-bold text-white text-lg mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> Increase Ecommerce Sales
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Meta Ads help ecommerce brands reach new buyers, recover abandoned carts, promote seasonal offers, and encourage repeat purchases using dynamic catalog advertising.
              </p>
            </div>

            <div className="glass-card p-6 border border-white/5">
              <h3 className="font-display font-bold text-white text-lg mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> Launch New Products
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                If your audience doesn't know your brand yet, Meta Ads allow you to introduce products through videos, Reels, and engaging visual layouts before they search online.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 max-w-4xl mx-auto mt-12 space-y-4">
            <h4 className="font-display font-black text-white text-sm uppercase tracking-widest text-brand-yellow">When Meta Ads May Not Be the Best First Step:</h4>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Meta Ads are powerful, but they cannot compensate for fundamental business issues. For example, if your website loads slowly, your landing page lacks a clear call-to-action, or you don't have conversion tracking in place, advertising alone is unlikely to produce profitable outcomes. Niche B2B offerings may also perform better by combining Meta Ads with Google Ads and SEO.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. WHY BUSINESSES STRUGGLE WITH META ADS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Common Roadblocks
            </div>
            <h2 className="section-title mb-4">
              Why Businesses <span className="gradient-text-purple">Struggle With Meta Ads</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-white/60">
              During campaign audits, we commonly identify key issues. Fixing these issues often improves performance more effectively than simply increasing budgets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto glass-card border border-white/5 rounded-2xl p-2 sm:p-6 max-w-4xl mx-auto"
          >
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10 text-white font-display font-bold text-sm uppercase">
                  <th className="py-4 px-4 text-red-400">Common Challenge</th>
                  <th className="py-4 px-4 text-brand-yellow">Business Impact</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                {[
                  { challenge: 'Choosing the wrong campaign objective', impact: 'High traffic but low conversions' },
                  { challenge: 'Broad audience targeting', impact: 'Poor-quality leads and wasted budget' },
                  { challenge: 'Weak creatives', impact: 'Low engagement and declining click-through rates' },
                  { challenge: 'Missing Pixel or Conversion API', impact: 'Inaccurate reporting and limited optimization' },
                  { challenge: 'No remarketing campaigns', impact: 'Lost opportunities from previous visitors' },
                  { challenge: 'Poor landing page experience', impact: 'High bounce rates and low conversion rates' }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01]">
                    <td className="py-4 px-4 font-bold flex items-center gap-2">
                      <FaTimesCircle className="text-red-500 shrink-0" size={12}/> {row.challenge}
                    </td>
                    <td className="py-4 px-4">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHAT MAKES A SUCCESSFUL META ADS CAMPAIGN? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              What Makes a <span className="gradient-text-blue">Successful Meta Ads Campaign?</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base text-white/60">
              A high-performing campaign combines multiple elements working together to guide users from awareness to conversions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'A Clear Business Objective', desc: 'Campaigns mapped directly to conversion metrics like purchases, lead form completions, or direct WhatsApp enquiries.' },
              { title: 'The Right Audience', desc: 'Focusing on narrow customer profiles using demographics, lookalike groups, custom lists, and online behavior.' },
              { title: 'High-Performing Creatives', desc: 'Scroll-stopping assets designed to address pain points, offer social proof, and include clear call-to-actions.' },
              { title: 'Accurate Conversion Tracking', desc: 'Pixel, Conversion API (CAPI), GTM, and GA4 telemetry configuration to properly link ad clicks to sales metrics.' },
              { title: 'Continuous Testing', desc: 'Constant A/B tests of copywriting, creative styles, layouts, placements, and custom audience segments.' }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <FaCheckCircle size={16} />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE MAGDIO & INDUSTRIES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Magdio as Your <br className="hidden sm:inline" />
                  <span className="gradient-text-purple">Meta Ads Agency?</span>
               </h2>
               <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                  Many businesses waste advertising budgets because campaigns are launched without strategy, tracking, or optimization.
               </p>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 shadow-lg">
                  <h3 className="text-white text-base sm:text-lg font-bold mb-4">At Magdio, we focus on:</h3>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4 text-white/80 text-xs sm:text-sm">
                     {[
                        'Conversion-focused Meta Ads', 'Lead generation systems', 
                        'Search intent targeting', 'Landing page optimization',
                        'ROI tracking', 'AI-powered bidding strategies',
                        'Continuous performance improvement'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                           <FaCheckCircle className="text-purple-400 shrink-0" size={16}/> {item}
                        </li>
                      ))}
                  </ul>
               </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
               <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
               <div className="glass-card-premium p-8 sm:p-10 relative border border-white/10 shadow-2xl rounded-3xl">
                  <h3 className="text-3xl font-bold text-white mb-4">Industries We Serve</h3>
                  <p className="text-white/70 mb-8 text-sm sm:text-base">Our Meta Ads services support businesses across multiple industries including:</p>
                  <ul className="grid grid-cols-2 gap-4">
                     {[
                        'Ecommerce', 'SaaS', 'Healthcare', 'Real Estate', 
                        'Education', 'Manufacturing', 'Hospitality', 'Startups',
                        'Professional Services', 'Consultants', 'Local Businesses'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80 text-xs sm:text-sm font-medium bg-black/20 p-3 rounded-xl border border-white/5">
                           <span className="w-2 h-2 bg-blue-400 rounded-full shrink-0 animate-pulse" /> {item}
                        </li>
                     ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/60 text-sm leading-relaxed">
                      Every industry requires a different advertising strategy, and our campaigns are customized accordingly.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. GEOGRAPHIC SERVICE AREA ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-8 leading-tight">
               Meta Ads Agency in <span className="gradient-text-blue">Chennai</span>
            </h2>
            <div className="glass-card p-8 sm:p-10 border border-white/5 shadow-xl text-left space-y-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                 Magdio provides Meta Ads services for businesses across Chennai, Coimbatore, Madurai, and throughout Tamil Nadu. We also work remotely with businesses across India and international clients.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-semibold">
                 Whether you need a Meta Ads agency in Chennai, a Meta Ads agency in Tamil Nadu, or a Meta Ads company capable of managing national campaigns, our team provides customized solutions designed around business objectives and measurable outcomes.
              </p>
            </div>
         </div>
      </section>

      {/* ── 7. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-blue-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Ready to Accelerate Your <span className="gradient-text-blue">Meta Advertising ROI?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto"
          >
            Stop focusing on simple vanity metrics. Build conversion-oriented Meta Ads funnels today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary text-base sm:text-lg px-10 py-4 shadow-[0_0_40px_rgba(66,133,244,0.3)] hover:shadow-[0_0_60px_rgba(66,133,244,0.5)]"
              style={{ background: 'linear-gradient(45deg, #1877F2, #E1306C)' }}
            >
              Get Your Meta Ads Strategy
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="gradient-text-purple">Questions</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our Meta Ads services.</p>
          </div>
          <FAQAccordion faqs={metaFaqs} />
        </div>
      </section>

      {/* ── 9. ENQUIRY SECTION ── */}
      <div id="enquiry">
        <EnquirySection />
      </div>
    </div>
  );
}

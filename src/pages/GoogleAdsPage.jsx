import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaSearch, FaChartLine, FaVideo, FaShoppingCart, FaRedo,
  FaBrain, FaEdit, FaGoogle, FaWhatsapp, FaCheck, FaBuilding
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

const googleAdsFaqs = [
  {
    q: 'What does a Google Ads agency do?',
    a: 'A Google Ads agency creates, manages, and optimizes advertising campaigns on Google\'s platform. Magdio helps businesses generate leads, sales, and qualified traffic through strategic Google Ads management.'
  },
  {
    q: 'Is Google Ads worth it for small businesses?',
    a: 'Yes. Google Ads allows small businesses to reach customers actively searching for their products or services. When managed correctly, Google Ads can generate highly qualified leads and measurable business growth.'
  },
  {
    q: 'How much budget do I need for Google Ads?',
    a: 'There is no fixed budget. The ideal budget depends on your industry, competition, goals, and customer acquisition costs. Magdio helps businesses determine the right advertising budget based on growth objectives.'
  },
  {
    q: 'How quickly can Google Ads generate results?',
    a: 'Google Ads can start generating traffic and leads shortly after campaigns go live. However, campaign optimization and data collection are important for improving long-term performance.'
  },
  {
    q: 'What is the difference between SEO and Google Ads?',
    a: 'SEO focuses on organic visibility and long-term growth, while Google Ads generates immediate visibility through paid advertising. Many businesses achieve the best results by combining both strategies.'
  },
  {
    q: 'Which of the following is a core benefit of Google Ads automated bidding?',
    a: 'The core benefit of Google Ads automated bidding is automated bid optimization using machine learning and auction-time signals to improve clicks, conversions, or conversion value while reducing manual bid management.'
  },
  {
    q: 'How much do Google Ads cost?',
    a: 'Google Ads has no fixed cost. Your budget depends on your industry, competition, target keywords, and business goals. At Magdio, we recommend a budget based on your objectives and continuously optimize campaigns to maximize ROI and reduce unnecessary ad spend.'
  }
];

export default function GoogleAdsPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0 bg-[#03030b]">
      <SEO 
        title="Google Ads Agency in Chennai for Business Growth | MAGDIO" 
        description="Grow your business with the best Google Ads agency in Chennai. Magdio creates targeted PPC campaigns to improve ROI, generate leads, and boost visibility." 
        canonicalUrl="https://www.magdio.com/services/google-ads"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Google Ads Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "MAGDIO"
          },
          "areaServed": ["Chennai", "Coimbatore", "Madurai", "Tamil Nadu"]
        }}
      />
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03030b]/85 via-[#06071a]/95 to-[#03030b] z-10" />
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #4285F4, transparent 70%)' }} />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #34A853, transparent 70%)' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Performance & Paid Search
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Google Ads Agency <span className="gradient-text-blue">in Chennai</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg sm:text-2xl font-bold text-white/90 mb-6 max-w-4xl mx-auto font-display"
          >
            Google Ads Services That Help Businesses Generate Quality Leads and Increase Revenue
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8"
          >
            <button onClick={scrollToEnquiry} className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5" style={{ background: 'linear-gradient(45deg, #4285F4, #34A853)' }}>
              Get a Free Ads Audit
            </button>
            <a href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20Google%20Ads%20experts." target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-3 flex items-center justify-center gap-2">
              <FaWhatsapp size={18} /> Talk To Our Experts
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-6 text-left border-t border-white/10 pt-12 max-w-4xl mx-auto"
          >
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm leading-relaxed">
                When potential customers search on Google, they are already looking for a solution, product, or service. This makes Google Ads one of the fastest and most effective digital marketing channels for generating leads, sales, inquiries, and business growth.
              </p>
            </div>
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm leading-relaxed">
                Magdio is a Google Ads Agency in Tamil Nadu helping businesses create high-performing Google Ads campaigns that drive measurable results. As a performance-focused Google Ads agency, we help businesses reach customers at the exact moment they are searching for products and services.
              </p>
            </div>
          </motion.div>

          <p className="text-white/50 text-sm mt-8 text-left max-w-4xl mx-auto leading-relaxed border-l-4 border-blue-500 pl-4">
            Whether you are a startup, local business, ecommerce brand, SaaS company, healthcare business, educational institution, or service provider, our Google Ads services focus on attracting high-intent customers, reducing wasted ad spend, and maximizing return on investment. Businesses searching for a Google Ads services in Chennai, a Google Ads specialist, or the Best Google Ads agency in Chennai choose Magdio because we focus on business outcomes rather than vanity metrics. Our campaigns are designed to generate leads, sales, appointments, and measurable growth through strategic Google advertising.
          </p>
        </div>
      </section>

      {/* ── 1.5 HOW WE MEASURE SUCCESS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Campaign Telemetry
            </div>
            <h2 className="section-title mb-4">
              How We Measure <span className="gradient-text-blue">Google Ads Success</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto text-sm sm:text-base text-white/60">
              At Magdio, we believe successful Google Ads campaigns are measured by business outcomes, not just clicks. That's why we use Google Ads, Google Analytics 4 (GA4), Google Tag Manager (GTM), and Google Search Console to monitor campaign performance and make data-driven optimization decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { val: '4–10%+', metric: 'Click-Through Rate (CTR)', desc: 'For well-optimized Search campaigns' },
              { val: '5–15%+', metric: 'Conversion Rate (CVR)', desc: 'Depending on the industry conversion rates' },
              { val: '7–10/10', metric: 'Quality Score', desc: 'Target scores for better relevance and lower CPC' },
              { val: '3x–5x+', metric: 'Return on Ad Spend (ROAS)', desc: 'Based on targeted campaign objectives' },
              { val: 'Optimized', metric: 'Cost Per Acquisition (CPA)', desc: 'Structured to acquire target leads profitably' },
              { val: 'Monitored', metric: 'Impression Share', desc: 'Maximizing visibility in competitive auction spaces' }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 border border-white/5 hover:border-blue-500/35 transition-all text-center">
                <h3 className="font-display font-black text-2xl text-brand-yellow">{item.val}</h3>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mt-2">{item.metric}</h4>
                <p className="text-white/40 text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. WHAT IS GOOGLE ADS? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
                ✦ Platform Definition
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                What Is <br className="hidden sm:inline" />
                <span className="gradient-text-blue">Google Ads?</span>
              </h2>
              
              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <FaGoogle size={18} />
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Google Ads is Google's online advertising platform that allows businesses to display ads across Google Search, Google Maps, YouTube, Gmail, Google Shopping, and millions of partner websites.
                </p>
              </div>

              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <FaSearch size={18} />
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Businesses use Google Ads to appear when potential customers search for products, services, or solutions related to their business. Unlike SEO, which takes time to build organic visibility, Google Ads can place your business at the top of search results almost immediately.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-premium p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-blue-400" /> Professional Bidding Strategy
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                As a Google Ads agency, Magdio helps businesses create, manage, optimize, and scale campaigns that attract qualified traffic and improve conversions. Our Google Ads specialists focus on campaign strategy, keyword targeting, ad creation, audience targeting, bidding optimization, and conversion tracking to maximize performance.
              </p>
              <div className="h-px bg-white/10 mb-6" />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-white text-xl mb-1">CPA</h4>
                  <p className="text-white/40 text-xs">Minimized Lead Cost</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-brand-yellow text-xl mb-1">Conversion</h4>
                  <p className="text-white/40 text-xs">Maximizing ROI</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY BUSINESSES INVEST IN GOOGLE ADS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Core ROI Channel
            </div>
            <h2 className="section-title mb-4">
              Why Businesses Invest in <span className="gradient-text-blue">Google Ads</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto text-sm sm:text-base text-white/60">
              Google processes billions of searches every day, making it one of the most powerful advertising platforms available.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              'Generate leads quickly', 'Increase sales opportunities', 
              'Reach high-intent customers', 'Improve online visibility', 
              'Control advertising budgets', 'Measure campaign performance', 
              'Scale customer acquisition', 'Track return on investment'
            ].map((reason, idx) => (
              <div key={idx} className="glass-card p-5 border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <FaCheckCircle size={14} />
                </div>
                <h4 className="font-display font-bold text-white text-base leading-snug">{reason}</h4>
                <p className="text-white/40 text-xs mt-2 leading-relaxed">Target customers based on keywords, location, demographics and buyer intent parameters.</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 border-l-4 border-blue-500 max-w-3xl mx-auto">
            <p className="text-white/70 text-sm leading-relaxed">
              Unlike traditional advertising, Google Ads allows businesses to target customers based on keywords, location, interests, demographics, search behavior, and buying intent. As a Google Ads Agency in Chennai, Magdio creates campaigns focused on conversions, qualified traffic, and long-term business growth rather than simply increasing clicks.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3.5 GOOGLE ADS VS SEO TABLE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Comparison Matrix
            </div>
            <h2 className="section-title mb-4">
              Which is better: <span className="gradient-text-gold">Google Ads or SEO?</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Google Ads and SEO deliver different results depending on your business goals. Google Ads is ideal for immediate lead generation, while SEO provides sustainable organic growth and often delivers a higher long-term return on investment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto glass-card border border-white/5 rounded-2xl p-2 sm:p-6 max-w-4xl mx-auto"
          >
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-white font-display font-bold text-sm uppercase">
                  <th className="py-4 px-4">Comparison Factor</th>
                  <th className="py-4 px-4 text-blue-400">Google Ads</th>
                  <th className="py-4 px-4 text-brand-yellow">SEO</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold">Time to Results</td>
                  <td className="py-4 px-4">1–7 days</td>
                  <td className="py-4 px-4">3–6+ months</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold">Lead Generation Speed</td>
                  <td className="py-4 px-4">80–90% Faster</td>
                  <td className="py-4 px-4">Gradual growth</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold">Click Cost</td>
                  <td className="py-4 px-4">Pay for every click</td>
                  <td className="py-4 px-4">No cost per click</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold">Traffic After Stopping Investment</td>
                  <td className="py-4 px-4">Stops almost immediately</td>
                  <td className="py-4 px-4">Can continue for months or years</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold">Long-Term ROI</td>
                  <td className="py-4 px-4">2x–5x ROAS (campaign dependent)</td>
                  <td className="py-4 px-4">Higher ROI over time due to compounding organic traffic</td>
                </tr>
                <tr className="hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold">Best Use Case</td>
                  <td className="py-4 px-4">Immediate leads, sales & promotions</td>
                  <td className="py-4 px-4">Long-term visibility, authority & sustainable growth</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 3.8 IS GOOGLE ADS RIGHT FOR YOU? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-6">
                Is Google Ads the Right Choice for Your Business?
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Google Ads can be one of the fastest ways to generate qualified leads and sales, but success depends on factors like search demand, website experience, landing pages, and accurate conversion tracking.
              </p>
            </div>
            <div className="glass-card p-6 border border-white/5">
              <h3 className="text-white font-bold text-base mb-4">Google Ads is a good fit for businesses that:</h3>
              <ul className="space-y-3">
                {[
                  'Offer products or services customers actively search for',
                  'Want to generate leads or sales quickly',
                  'Have dedicated landing pages',
                  'Can track enquiries, phone calls, or purchases',
                  'Are committed to ongoing campaign optimization'
                ].map((fit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{fit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR GOOGLE ADS SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Our Google <span className="gradient-text-blue">Ads Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Magdio provides complete Google Ads management services designed to help businesses maximize their advertising investment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <FaSearch size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Search Ads</h3>
              <p className="text-white/70 text-sm mb-4">Google Search Ads help businesses appear at the top of search results when users search for products or services.</p>
              <ul className="text-white/60 text-xs space-y-1 mb-4 pl-4 list-disc">
                <li>Keyword research</li>
                <li>Search intent analysis</li>
                <li>Ad copy creation</li>
                <li>Campaign setup</li>
                <li>Bid optimization</li>
                <li>Conversion tracking</li>
              </ul>
              <p className="text-white/70 text-xs italic">Search campaigns are ideal for businesses looking to generate inquiries, phone calls, form submissions, and direct sales.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <FaChartLine size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Display Ads</h3>
              <p className="text-white/70 text-sm mb-4">Display advertising allows businesses to reach potential customers across millions of websites and apps within Google's advertising network.</p>
              <ul className="text-white/60 text-xs space-y-1 mb-4 pl-4 list-disc">
                <li>Brand awareness</li>
                <li>Remarketing</li>
                <li>Audience expansion</li>
                <li>Product promotion</li>
                <li>Customer retention</li>
              </ul>
              <p className="text-white/70 text-xs italic">As a Google Ads agency, we develop audience-focused display campaigns that improve visibility and engagement.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-red-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center mb-6">
                <FaVideo size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">YouTube Ads</h3>
              <p className="text-white/70 text-sm mb-4">Video advertising continues to grow rapidly. YouTube advertising allows businesses to connect with potential customers through highly engaging video content.</p>
              <ul className="text-white/60 text-xs space-y-1 mb-4 pl-4 list-disc">
                <li>Build brand awareness</li>
                <li>Reach targeted audiences</li>
                <li>Increase engagement</li>
                <li>Generate leads</li>
                <li>Promote products and services</li>
              </ul>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <FaShoppingCart size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Shopping Ads</h3>
              <p className="text-white/70 text-sm mb-4">For ecommerce businesses, Google Shopping Ads can drive highly qualified traffic from customers actively searching for products.</p>
              <ul className="text-white/60 text-xs space-y-1 mb-4 pl-4 list-disc">
                <li>Product feeds</li>
                <li>Merchant Center accounts</li>
                <li>Shopping campaigns</li>
                <li>Conversion tracking</li>
                <li>Bid strategies</li>
              </ul>
              <p className="text-white/70 text-xs italic">This helps businesses increase product visibility and improve online sales performance.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-yellow-500/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6">
                <FaRedo size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Remarketing Campaigns</h3>
              <p className="text-white/70 text-sm mb-4">Most website visitors do not convert during their first visit. Remarketing campaigns help reconnect with users who have previously interacted with your website, products, or services.</p>
              <p className="text-white/70 text-xs italic">Remarketing often improves conversion rates because it targets audiences already familiar with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MANAGEMENT & OPTIMIZATION PROCESS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Google Ads Management <span className="gradient-text-blue">& Optimization Process</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Successful Google Ads campaigns require more than simply launching advertisements. At Magdio, our process includes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: '1', title: 'Business & Competitor Analysis', desc: 'We understand your business goals, competitor landscape, customer journey, and growth opportunities before launching campaigns.' },
              { num: '2', title: 'Keyword Research & Planning', desc: 'Our Google Ads specialists identify high-intent keywords that align with customer search behavior and buying intent.' },
              { num: '3', title: 'Campaign Setup & Ad Creation', desc: 'We build conversion-focused campaigns with optimized ad groups, compelling ad copy, audience targeting, and conversion tracking.' },
              { num: '4', title: 'Continuous Optimization', desc: 'Campaigns are continuously monitored and optimized based on performance data, conversion metrics, and audience behavior.' },
              { num: '5', title: 'Reporting & Tracking', desc: 'We provide transparent reporting so businesses can clearly understand campaign performance, lead generation, and return on investment.' }
            ].map((step, idx) => (
              <div key={idx} className="glass-card p-6 border border-white/5 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-300">
                <div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold mb-4 group-hover:scale-110 transition-transform">{step.num}</div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-brand-yellow transition-colors">{step.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. AUTOMATED BIDDING & EDITOR ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 border border-white/5">
               <div className="flex items-center gap-3 mb-6">
                  <FaBrain className="text-blue-400 text-3xl" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Automated Bidding & AI-Powered Optimization</h2>
               </div>
               <p className="text-white/70 mb-4 text-xs sm:text-sm">One of the most common questions businesses ask is: <br/><strong>Which of the following is a core benefit of Google Ads automated bidding?</strong></p>
               <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                     The core benefit of Google Ads automated bidding is that Google uses machine learning and real-time auction signals to automatically adjust bids based on the likelihood of clicks, conversions, or conversion value. This helps advertisers optimize performance without manually adjusting bids for every keyword.
                  </p>
               </div>
               <p className="text-white/70 mb-3 text-xs sm:text-sm">Google's Smart Bidding strategies use signals such as:</p>
               <div className="flex flex-wrap gap-2 mb-6">
                  {['Device', 'Location', 'Time of day', 'Search intent', 'User behavior', 'Remarketing audiences'].map(signal => (
                     <span key={signal} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/20">{signal}</span>
                  ))}
               </div>
               <p className="text-white/70 text-xs sm:text-sm">
                  At Magdio, our Google Ads managers combine automated bidding, conversion tracking, and strategic campaign optimization to maximize advertising performance and improve ROI.
               </p>
            </div>

            <div className="glass-card p-8 border border-white/5">
               <div className="flex items-center gap-3 mb-6">
                  <FaEdit className="text-emerald-400 text-3xl" />
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Google Ads Editor & Advanced Campaign Management</h2>
               </div>
               <p className="text-white/70 mb-6 text-xs sm:text-sm leading-relaxed">
                  Google Ads Editor is a powerful tool that allows advertisers to manage campaigns, make bulk changes, optimize accounts, and improve campaign efficiency.
               </p>
               <p className="text-white/70 mb-3 text-xs sm:text-sm">Our Google Ads managers use Google Ads Editor for:</p>
               <ul className="space-y-2 mb-6">
                  {['Campaign restructuring', 'Bulk ad updates', 'Keyword management', 'Account optimization', 'Large-scale campaign management'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                        <FaCheckCircle className="text-emerald-400 shrink-0" size={14} /> {item}
                     </li>
                  ))}
               </ul>
               <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  This allows us to efficiently manage complex Google Ads accounts while maintaining campaign quality and performance.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY CHOOSE MAGDIO & INDUSTRIES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Magdio as Your <br className="hidden sm:inline" />
                  <span className="gradient-text-blue">Google Ads Agency?</span>
               </h2>
               <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                  Many businesses waste advertising budgets because campaigns are launched without strategy, tracking, or optimization.
               </p>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 shadow-lg">
                  <h3 className="text-white text-base sm:text-lg font-bold mb-4">At Magdio, we focus on:</h3>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                     {[
                        'Conversion-focused Google Ads campaigns', 'Lead generation systems', 
                        'Search intent targeting', 'Landing page optimization',
                        'ROI tracking', 'AI-powered bidding strategies',
                        'Continuous performance improvement'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                           <FaCheckCircle className="text-blue-400 shrink-0" size={16}/> {item}
                        </li>
                      ))}
                  </ul>
               </div>
               <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Whether you are looking for a Google Ads agency in Chennai, a Google Ads specialist, a Google Ads manager, or the Best Google Ads agency in Chennai, our goal is to help your business generate measurable growth through paid search advertising.
               </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
               <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
               <div className="glass-card-premium p-8 sm:p-10 relative border border-white/10 shadow-2xl rounded-3xl">
                  <h3 className="text-3xl font-bold text-white mb-4">Industries We Serve</h3>
                  <p className="text-white/70 mb-8 text-sm sm:text-base">Our Google Ads services support businesses across multiple industries including:</p>
                  <ul className="grid grid-cols-2 gap-4">
                     {[
                        'Ecommerce', 'SaaS', 'Healthcare', 'Real Estate', 
                        'Education', 'Manufacturing', 'Professional Services', 
                        'Startups', 'Consultants', 'Local Businesses'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80 text-xs sm:text-sm font-medium bg-black/20 p-3 rounded-xl border border-white/5">
                           <span className="w-2 h-2 bg-blue-400 rounded-full shrink-0" /> {item}
                        </li>
                     ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/60 text-xs leading-relaxed">
                      Every industry has different customer behavior, search patterns, and conversion journeys. Our Google Ads strategies are customized accordingly.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. LOCATIONS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-8 leading-tight">
               Google Ads Agency in <span className="gradient-text-blue">Chennai</span>
            </h2>
            <div className="glass-card p-8 sm:p-10 border border-white/5 shadow-xl text-left space-y-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                 Magdio provides Google Ads services for businesses across Chennai, Coimbatore, Madurai, and throughout Tamil Nadu. We also work remotely with businesses across India and international clients.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-semibold">
                 Whether you need a Google Ads agency in Chennai, a Google Ads agency in Tamil Nadu, or a Google Ads company capable of managing national campaigns, our team provides customized solutions designed around business objectives and measurable outcomes.
              </p>
            </div>
         </div>
      </section>

      {/* ── 9. GET STARTED CTA ── */}
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
            Ready to Generate <span className="gradient-text-blue">High-Quality Leads?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto"
          >
            Start reaching customers right when they search for your business.
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
              style={{ background: 'linear-gradient(45deg, #4285F4, #34A853)' }}
            >
              Get Your Ads Strategy
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 10. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="gradient-text-blue">Questions</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our Google Ads services.</p>
          </div>
          <FAQAccordion faqs={googleAdsFaqs} />
        </div>
      </section>

      {/* ── 11. ENQUIRY SECTION ── */}
      <div id="enquiry">
        <EnquirySection />
      </div>
    </div>
  );
}

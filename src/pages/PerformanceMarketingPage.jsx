import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaFilter, FaBullseye, FaShoppingBag, 
  FaInstagram, FaFacebookF, FaCogs, FaUsers, FaWhatsapp, FaBuilding
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

const pmFaqs = [
  {
    q: 'What is performance marketing?',
    a: 'Performance marketing is a digital marketing approach where businesses pay for measurable outcomes such as leads, sales, purchases, sign-ups, or conversions. Magdio uses performance marketing strategies focused on business growth and measurable ROI.'
  },
  {
    q: 'Are Instagram Ads effective for lead generation?',
    a: 'Yes. Instagram Ads can be highly effective for lead generation when campaigns are properly targeted and optimized. Magdio creates Instagram Ads campaigns designed to attract qualified prospects and improve conversion rates.'
  },
  {
    q: 'What is the difference between Facebook Ads and Instagram Ads?',
    a: 'Both platforms operate through Meta\'s advertising system, but audience behavior differs. Instagram focuses heavily on visual content and engagement, while Facebook provides broader audience reach and targeting opportunities.'
  },
  {
    q: 'What does an Instagram Ads manager do?',
    a: 'An Instagram Ads manager creates, manages, monitors, and optimizes advertising campaigns. Magdio handles audience targeting, creative testing, budget management, conversion tracking, and campaign scaling.'
  },
  {
    q: 'How much budget do I need for Instagram Ads?',
    a: 'The ideal budget depends on your industry, audience size, competition, and campaign goals. Magdio helps businesses determine advertising budgets based on growth objectives and customer acquisition targets.'
  },
  {
    q: 'How quickly can performance marketing generate results?',
    a: 'Performance marketing campaigns can begin generating traffic, leads, and conversions shortly after launch. Continuous optimization helps improve efficiency and long-term campaign performance.'
  },
  {
    q: 'Why choose Magdio as your performance marketing agency?',
    a: 'Magdio combines performance marketing strategy, Instagram Ads management, Facebook Ads expertise, conversion tracking, lead generation systems, creative optimization, and business growth consulting to help businesses generate measurable results from digital advertising.'
  }
];

export default function PerformanceMarketingPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0 bg-[#03030b]">
      <SEO 
        title="Best Performance Marketing Agency in Chennai | MAGDIO" 
        description="Magdio is a result-driven performance marketing company in Chennai delivering strategic campaigns to improve leads, conversions, ROI, and business growth." 
        canonicalUrl="https://www.magdio.com/services/performance-marketing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Performance Marketing Services",
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
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #8A2BE2, transparent 70%)' }} />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #E1306C, transparent 70%)' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            ROI & Paid media optimization
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Performance Marketing Agency <br className="hidden sm:inline" />
            <span className="gradient-text-purple">in Chennai</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg sm:text-2xl font-bold text-white/90 mb-6 max-w-4xl mx-auto font-display font-black"
          >
            Performance Marketing Services That Focus on Results, Not Just Reach
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8"
          >
            <button onClick={scrollToEnquiry} className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5">
              Scale Your Campaigns
            </button>
            <a href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20performance%20marketing%20experts." target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-3 flex items-center justify-center gap-2">
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
                Many businesses spend money on advertising but struggle to generate quality leads, sales, and measurable growth. The problem is not the advertising platform itself. The problem is often poor targeting, weak creative strategy, ineffective landing pages, and lack of campaign optimization.
              </p>
            </div>
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm leading-relaxed">
                Magdio is a leading Performance Marketing Agency in Chennai that helps businesses generate measurable results through Instagram Ads, Facebook Ads, Meta Ads, lead generation campaigns, conversion-focused advertising, and full-funnel performance marketing services.
              </p>
            </div>
          </motion.div>

          <p className="text-white/50 text-sm mt-8 text-left max-w-4xl mx-auto leading-relaxed border-l-4 border-brand-purple pl-4">
            Unlike traditional advertising, performance marketing focuses on outcomes such as leads, purchases, bookings, inquiries, and revenue. Every campaign is designed around measurable business goals and optimized using real-time performance data. Whether you are a startup, ecommerce brand, SaaS company, local business, consultant, healthcare provider, or service-based business, our performance marketing services help attract qualified customers and improve marketing ROI. Businesses looking for Instagram Ads management, Facebook Ads expertise, Meta Ads strategy, or a trusted Performance Marketing Company in Chennai choose Magdio because we focus on growth, conversions, and business impact rather than vanity metrics.
          </p>
        </div>
      </section>

      {/* ── 2. WHAT IS PERFORMANCE MARKETING? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest">
                ✦ Industry Definition
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                What Is <br className="hidden sm:inline" />
                <span className="gradient-text-purple">Performance Marketing?</span>
              </h2>
              
              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                  <FaFilter size={18} />
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  As a Performance Marketing Agency in Chennai, performance marketing is a digital marketing approach where advertising campaigns are optimized based on measurable actions such as leads, purchases, sign-ups, appointments, or conversions. Unlike traditional advertising, performance marketing focuses on actual business outcomes instead of impressions or reach alone.
                </p>
              </div>

              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <FaUsers size={18} />
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  Businesses invest in performance marketing services because every campaign can be tracked, measured, optimized, and improved using data.
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
                Advanced Growth Framework
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                At Magdio, we use performance marketing frameworks that help businesses improve lead quality, reduce acquisition costs, and increase return on advertising spend.
              </p>
              <p className="text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-3">
                A PERFORMANCE MARKETING STRATEGY COMBINES:
              </p>
              <div className="grid grid-cols-2 gap-2 text-white/60 text-xs sm:text-sm">
                {['Instagram Ads', 'Facebook Ads', 'Meta Ads', 'Conversion Tracking', 'Landing Page Optimization', 'Audience Targeting', 'Creative Testing', 'Retargeting Campaigns'].map((bullet, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY INSTAGRAM ADS ARE IMPORTANT ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest">
                ✦ Mobile Attention Engine
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                Why Instagram Ads Are <br />
                <span className="gradient-text-purple">Important for Modern Businesses</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Instagram has become one of the most influential marketing platforms for brands looking to increase visibility, engagement, leads, and sales. Instagram Ads allow businesses to reach highly targeted audiences based on interests, demographics, online behavior, engagement patterns, and purchase intent.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                As consumer attention continues shifting toward short-form content and mobile experiences, Instagram Ads remain one of the most effective performance marketing channels available. Businesses searching for Instagram Ads management or an experienced Instagram Ads manager need campaigns that convert attention into action. That's exactly what our team focuses on.
              </p>
            </motion.div>

            {/* Right: Instagram target list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 sm:p-8 border border-white/5 space-y-4"
            >
              <h3 className="font-display font-bold text-white text-lg flex items-center gap-2 text-pink-400">
                <FaInstagram /> Our Instagram Ads services help:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-white/70 text-xs sm:text-sm">
                {[
                  'Generate leads', 'Increase website traffic', 
                  'Improve brand visibility', 'Promote products', 
                  'Drive ecommerce sales', 'Increase inquiries', 
                  'Build remarketing audiences'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. FACEBOOK & META ADS SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Graphic display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card-premium p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl lg:order-last"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                Unified Performance Channels
              </h3>
              <div className="grid grid-cols-2 gap-4 text-white/70 text-xs sm:text-sm">
                {['Lead Generation', 'Website Conversions', 'Ecommerce Sales', 'App Downloads', 'Brand Awareness', 'Remarketing', 'Customer Acquisition'].map((adGoal, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                    <span className="font-semibold">{adGoal}</span>
                  </div>
                ))}
              </div>
              <div className="h-px bg-white/10 my-6" />
              <p className="text-white/40 text-xs leading-relaxed text-center">
                By combining Facebook Ads and Instagram Ads within a unified performance marketing strategy, businesses can maximize reach while maintaining strong conversion efficiency.
              </p>
            </motion.div>

            {/* Right: Copy details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
                ✦ Paid Social Media Ecosystem
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                Facebook Ads & <br />
                <span className="gradient-text-blue">Meta Ads Services</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Meta's advertising ecosystem gives businesses access to Facebook, Instagram, Messenger, Audience Network, and advanced audience targeting capabilities. Our Facebook Ads and Meta Ads services are designed to help businesses generate measurable growth through highly targeted advertising campaigns.
              </p>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                As a performance marketing agency, we focus on audience segmentation, conversion tracking, creative testing, and continuous optimization to improve campaign performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. OUR PERFORMANCE MARKETING SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Predictable Scalability
            </div>
            <h2 className="section-title mb-4">
              Our Performance <span className="gradient-text-purple">Marketing Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Magdio provides complete performance marketing services for businesses that want predictable and scalable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Service 1: Instagram Ads */}
            <div className="glass-card p-6 border border-white/5 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4 border border-pink-500/20">
                <FaInstagram size={20} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Instagram Ads Management</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Our Instagram Ads specialists create campaigns designed to generate engagement, leads, inquiries, and sales.</p>
              <div className="flex flex-wrap gap-2 text-white/50 text-xs font-semibold mb-2">
                {['Audience Research', 'Campaign Setup', 'Ad Creative Strategy', 'Instagram Ads Manager Setup', 'Conversion Tracking', 'Campaign Optimization'].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-white/5 border border-white/5">• {tag}</span>
                ))}
              </div>
              <p className="text-white/40 text-xs mt-3">We focus on improving campaign performance while reducing wasted advertising spend.</p>
            </div>

            {/* Service 2: Facebook Ads */}
            <div className="glass-card p-6 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
                <FaFacebookF size={20} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Facebook Ads Management</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Facebook remains one of the strongest advertising platforms for lead generation and customer acquisition.</p>
              <div className="flex flex-wrap gap-2 text-white/50 text-xs font-semibold mb-2">
                {['Campaign Planning', 'Audience Targeting', 'Ad Creation', 'Budget Management', 'Conversion Tracking', 'Performance Optimization'].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-white/5 border border-white/5">• {tag}</span>
                ))}
              </div>
              <p className="text-white/40 text-xs mt-3">Our goal is to generate measurable business outcomes rather than simply increasing traffic.</p>
            </div>

            {/* Service 3: Lead Gen */}
            <div className="glass-card p-6 border border-white/5 hover:border-brand-yellow/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center mb-4 border border-brand-yellow/20">
                <FaBullseye size={20} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Lead Generation Campaigns</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Generating leads is one of the primary objectives of performance marketing.</p>
              <div className="flex flex-wrap gap-2 text-white/50 text-xs font-semibold mb-2">
                {['Meta Ads', 'Landing Pages', 'Lead Forms', 'CRM Integration', 'Retargeting Campaigns'].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-white/5 border border-white/5">• {tag}</span>
                ))}
              </div>
              <p className="text-white/40 text-xs mt-3">This helps businesses consistently attract qualified prospects.</p>
            </div>

            {/* Service 4: Ecommerce */}
            <div className="glass-card p-6 border border-white/5 hover:border-brand-purple/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/20 text-brand-lightblue flex items-center justify-center mb-4 border border-brand-purple/30">
                <FaShoppingBag size={20} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Ecommerce Performance Marketing</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">For ecommerce brands, our performance marketing services focus on improving product visibility, increasing purchases, and reducing customer acquisition costs.</p>
              <div className="flex flex-wrap gap-2 text-white/50 text-xs font-semibold mb-2">
                {['Catalog Ads', 'Dynamic Product Ads', 'Retargeting', 'Conversion Campaigns', 'Purchase Optimization'].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-white/5 border border-white/5">• {tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. INSTAGRAM ADS MANAGER & CAMPAIGN OPTIMIZATION ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center border border-pink-500/20">
                  <FaCogs size={22} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Instagram Ads Manager & Campaign Optimization</h2>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Instagram Ads Manager plays a crucial role in campaign management, audience targeting, ad placement selection, budget allocation, and performance analysis.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Proper campaign management helps businesses achieve better results while maintaining advertising efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 border border-white/5"
            >
              <h3 className="text-white font-bold text-base mb-4">We use Instagram Ads Manager to:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-white/70 text-xs sm:text-sm">
                {[
                  'Launch campaigns efficiently', 'Track conversions', 
                  'Monitor performance', 'Optimize audiences', 
                  'Improve ad relevance', 'Scale successful campaigns'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-pink-400 shrink-0" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. PERFORMANCE MARKETING PROCESS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our Performance <span className="gradient-text-purple">Marketing Process</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base text-white/60">
              Successful performance marketing requires strategy, testing, optimization, and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Business Analysis', desc: 'We analyze your business model, target audience, competitors, and customer journey.' },
              { step: '2', title: 'Audience Research', desc: 'Understanding customer behavior helps us build highly targeted campaigns.' },
              { step: '3', title: 'Campaign Development', desc: 'We create ad structures, creative concepts, targeting strategies, and conversion-focused funnels.' },
              { step: '4', title: 'Launch & Optimization', desc: 'Campaigns are continuously monitored and optimized based on real-time performance data.' },
              { step: '5', title: 'Reporting & Scaling', desc: 'We identify successful campaigns and scale them strategically while maintaining efficiency.' }
            ].map((proc, idx) => (
              <div key={idx} className="glass-card p-6 border border-white/5 flex flex-col justify-between hover:border-brand-purple/30 transition-all duration-300 group">
                <div>
                  <span className="w-8 h-8 rounded-full bg-brand-purple/20 text-brand-lightblue flex items-center justify-center shrink-0 font-bold mb-4 group-hover:scale-110 transition-transform">{proc.step}</span>
                  <h4 className="font-display font-bold text-white text-base mb-2 group-hover:text-brand-yellow transition-colors leading-snug">{proc.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. WHY CHOOSE MAGDIO & INDUSTRIES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Magdio as Your <br className="hidden sm:inline" />
                  <span className="gradient-text-purple">Performance Marketing Agency?</span>
               </h2>
               <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
                  Many businesses run Instagram Ads and Facebook Ads without a clear strategy. At Magdio, we focus on building complete performance marketing systems designed around measurable business growth.
               </p>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 shadow-lg">
                  <h3 className="text-white text-base sm:text-lg font-bold mb-4">Our approach includes:</h3>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4 text-white/80 text-xs sm:text-sm">
                     {[
                        'Performance Marketing Strategy', 'Instagram Ads Management', 
                        'Facebook Ads Management', 'Conversion Tracking',
                        'Creative Testing', 'Landing Page Optimization',
                        'Audience Segmentation', 'Lead Generation Systems'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                           <FaCheckCircle className="text-purple-400 shrink-0" size={16}/> {item}
                        </li>
                      ))}
                  </ul>
               </div>
               <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  We help businesses transform advertising spend into measurable business outcomes.
               </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
               <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
               <div className="glass-card-premium p-8 sm:p-10 relative border border-white/10 shadow-2xl rounded-3xl">
                  <h3 className="text-3xl font-bold text-white mb-4">Industries We Serve</h3>
                  <p className="text-white/70 mb-8 text-sm sm:text-base">Our performance marketing services support businesses across multiple industries:</p>
                  <ul className="grid grid-cols-2 gap-4">
                     {[
                        'Ecommerce', 'SaaS', 'Healthcare', 'Education', 
                        'Real Estate', 'Restaurants', 'Consultants', 'Coaches',
                        'Personal Brands', 'Manufacturing', 'Startups', 'Service-Based Businesses'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80 text-xs sm:text-sm font-medium bg-black/20 p-3 rounded-xl border border-white/5">
                           <span className="w-2 h-2 bg-brand-yellow rounded-full shrink-0 animate-pulse" /> {item}
                        </li>
                     ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/60 text-sm leading-relaxed">
                      Every industry requires a different performance marketing strategy, and our campaigns are customized accordingly.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. LOCATIONS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-8 leading-tight">
               Performance Marketing Agency in <span className="gradient-text-purple">Chennai</span>
            </h2>
            <div className="glass-card p-8 sm:p-10 border border-white/5 shadow-xl text-left space-y-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                 Magdio provides performance marketing services for businesses across Coimbatore, Chennai, Madurai, and throughout Tamil Nadu. We also work remotely with businesses across India and international clients.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-semibold">
                 Whether you are looking for Instagram Ads management, Facebook Ads expertise, Meta Ads campaigns, or a performance marketing agency capable of scaling customer acquisition, our team provides customized advertising solutions aligned with business goals.
              </p>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                 Businesses searching for the best Performance Marketing Agency in Chennai or a reliable Performance Marketing Company in Chennai need a partner that focuses on measurable growth, transparent reporting, and continuous campaign optimization. That's the approach we follow for every client engagement.
              </p>
            </div>
         </div>
      </section>

      {/* ── 10. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Ready to Accelerate Your <span className="gradient-text-purple">Paid Ad Returns?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto"
          >
            Stop wasting budgets. Build growth-oriented performance advertising systems today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary text-base sm:text-lg px-10 py-4 shadow-[0_0_40px_rgba(138,43,226,0.3)] hover:shadow-[0_0_60px_rgba(138,43,226,0.5)]"
            >
              Get Your Performance Ads Roadmap
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 11. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="gradient-text-purple">Questions</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our performance marketing services.</p>
          </div>
          <FAQAccordion faqs={pmFaqs} />
        </div>
      </section>

      {/* ── 12. ENQUIRY SECTION ── */}
      <div id="enquiry">
        <EnquirySection />
      </div>
    </div>
  );
}

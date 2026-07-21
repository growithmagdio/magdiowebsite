import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaVideo, FaSearch, FaCogs, FaChartLine, FaUsers,
  FaPlay, FaGlobe, FaBullhorn, FaWhatsapp
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

const ytFaqs = [
  {
    q: 'What does a YouTube Ads Agency do?',
    a: 'A YouTube Ads Agency plans, creates, manages, and optimizes video advertising campaigns on YouTube using Google Ads. The goal is to help businesses increase brand awareness, generate qualified leads, drive website traffic, and improve return on ad spend through data-driven campaign management.'
  },
  {
    q: 'Is YouTube advertising effective for small businesses?',
    a: 'Yes. YouTube advertising can be highly effective for small businesses because it allows you to target specific audiences based on location, interests, search behaviour, demographics, and remarketing data. With the right strategy, even modest budgets can generate quality leads and brand awareness.'
  },
  {
    q: 'How much do YouTube Ads cost?',
    a: 'There is no fixed cost for YouTube Ads. Your budget depends on your industry, audience, competition, campaign objective, and bidding strategy. A YouTube advertising agency can help you determine a budget that aligns with your business goals and maximizes ROI.'
  },
  {
    q: 'How quickly can YouTube Ads generate results?',
    a: 'YouTube Ads can start generating views, traffic, and leads shortly after a campaign goes live. However, consistent optimization, audience testing, and performance analysis are essential for improving results over time.'
  },
  {
    q: 'Which businesses benefit most from YouTube marketing services?',
    a: 'YouTube marketing services work well for ecommerce brands, SaaS companies, healthcare providers, educational institutions, real estate businesses, manufacturers, coaches, and service-based businesses that want to educate customers and build trust through video.'
  },
  {
    q: 'What is the difference between YouTube Ads and Google Search Ads?',
    a: 'YouTube Ads focus on video storytelling, visual brand demonstrations, and building audience demand while users watch content. Google Search Ads utilize text-based creatives to capture existing intent from users actively searching for answers. Combining both generates the best conversion results.'
  },
  {
    q: 'What metrics should I track for YouTube Ads?',
    a: 'A successful YouTube Ads campaign should be measured using metrics such as View Rate, Click-Through Rate (CTR), Cost Per View (CPV), Conversion Rate, Cost Per Acquisition (CPA), Watch Time, and Return on Ad Spend (ROAS). These metrics help evaluate campaign effectiveness and identify opportunities for optimization.'
  },
  {
    q: 'Can a YouTube marketing agency improve existing campaigns?',
    a: 'Yes. A YouTube marketing agency can audit your existing campaigns, identify issues such as poor audience targeting, low engagement, weak creatives, or inaccurate conversion tracking, and optimize them to improve campaign performance and ROI.'
  },
  {
    q: 'How often should YouTube Ads campaigns be optimized?',
    a: 'Campaigns should be monitored regularly, with performance reviews conducted weekly or bi-weekly. Continuous optimization of audiences, bidding strategies, video creatives, and placements helps improve results while reducing advertising costs.'
  },
  {
    q: 'What makes a successful YouTube Ads campaign?',
    a: 'A successful campaign combines engaging video content, accurate audience targeting, strong calls to action, optimized landing pages, conversion tracking, and continuous performance optimization. Success is measured by metrics such as CTR, View Rate, CPA, Conversion Rate, and ROAS, rather than views alone.'
  }
];

export default function YouTubeAdsPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0 bg-[#03030b]">
      <SEO 
        title="Best YouTube Advertising Agency in Chennai | MAGDIO" 
        description="Build stronger online engagement with Magdio, a YouTube marketing agency in Chennai delivering creative video campaigns for leads, visibility and online growth." 
        canonicalUrl="https://www.magdio.com/youtube-marketing-agency-chennai-magdio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "YouTube Ads Services",
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
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #ff0000, transparent 70%)' }} />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #8A2BE2, transparent 70%)' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Video Marketing & Conversion
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            YouTube Ads Agency
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg sm:text-2xl font-bold text-white/90 mb-6 max-w-4xl mx-auto font-display"
          >
            YouTube Advertising Services That Turn Views into Qualified Leads
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            Every day, millions of people use YouTube to research products, compare services, learn new skills, and make buying decisions. A well-planned YouTube advertising campaign helps your business reach these potential customers with the right message at the right time. As a Best YouTube Ads Agency in Chennai, Magdio creates video advertising campaigns that focus on generating qualified leads, increasing sales, improving brand awareness, and maximizing return on advertising spend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8"
          >
            <button onClick={scrollToEnquiry} className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5" style={{ background: 'linear-gradient(45deg, #ff0000, #b30000)' }}>
              Launch Your Video Campaign
            </button>
            <a href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20YouTube%20Ads%20experts." target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-3 flex items-center justify-center gap-2">
              <FaWhatsapp size={18} /> Talk To Our Experts
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 2. BRAND METRICS CRITICAL OBSERVED ── */}
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
                ✦ ROI Acceleration
              </div>
              <h2 className="font-display font-black text-3xl text-white leading-tight">
                Aligning Videos with <br />
                <span className="gradient-text-purple">Real Business Objectives</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                One pattern we've consistently observed is that businesses often focus on increasing video views, while their real objective is generating enquiries, sales, or qualified leads. A successful YouTube campaign aligns the video, audience, landing page, and conversion tracking with clear business goals—not just view count.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Our YouTube marketing services are designed to help businesses achieve measurable outcomes:
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Reach high-intent audiences using Google\'s advanced audience targeting.',
                  'Generate qualified leads with conversion-focused video campaigns.',
                  'Increase product awareness before customers begin comparing competitors.',
                  'Launch new products and services with targeted video campaigns.',
                  'Measure success through Conversions, CPA, ROAS, View Rate, and CAC.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-white/70 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-red-500" /> Operational Framework Metrics
              </h3>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-white text-xl sm:text-2xl mb-1">Up to 95%</h4>
                  <p className="text-white/50 text-xs sm:text-sm">Operational efficiency through campaign automation, audience segmentation, and continuous optimization.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-red-500 text-xl sm:text-2xl mb-1">Up to 10×</h4>
                  <p className="text-white/50 text-xs sm:text-sm">ROI acceleration by focusing advertising spend on high-intent audiences and conversion-driven campaigns.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-white text-xl sm:text-2xl mb-1">Up to 88%</h4>
                  <p className="text-white/50 text-xs sm:text-sm">Improvement in user retention using YouTube remarketing and audience nurturing strategies.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT IS YOUTUBE ADVERTISING? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-last"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest">
                ✦ Video Discoverability
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                What Is <br className="hidden sm:inline" />
                <span className="gradient-text-purple">YouTube Advertising?</span>
              </h2>
              
              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                  <FaVideo size={18} />
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  YouTube Advertising allows businesses to display video ads across YouTube and the Google video partner network using Google Ads. Unlike organic YouTube videos that rely on subscribers or search rankings, YouTube Ads help businesses reach highly targeted audiences based on search intent, interests, demographics, online behaviour, life events, remarketing lists, and custom audiences.
                </p>
              </div>

              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <FaSearch size={18} />
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  From our experience, businesses that combine compelling video creatives with accurate audience targeting and conversion tracking consistently achieve better campaign performance than businesses that simply promote existing videos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 sm:p-8 border border-white/5 space-y-4"
            >
              <h3 className="font-display font-bold text-white text-lg flex items-center gap-2 text-red-400">
                <FaBullhorn /> Why Businesses Invest in YouTube Ads:
              </h3>
              <p className="text-white/60 text-xs sm:text-sm">Video has become one of the most influential content formats. Many customers prefer watching a short video before making a purchase or requesting a consultation.</p>
              <div className="grid sm:grid-cols-2 gap-3 text-white/70 text-xs sm:text-sm pt-2">
                {[
                  'Increase brand awareness', 'Generate qualified leads', 
                  'Promote products and services', 'Launch new products', 
                  'Drive ecommerce sales', 'Increase website traffic', 
                  'Build remarketing audiences', 'Support Google Search campaigns'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-xs leading-relaxed mt-4 italic">For businesses with longer buying cycles, YouTube Ads often help build trust before customers contact the business directly.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR YOUTUBE MARKETING SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ End-to-End Execution
            </div>
            <h2 className="section-title mb-4">
              Our YouTube <span className="gradient-text-purple">Marketing Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base text-white/60">
              Complete campaign management designed to improve advertising performance and maximize ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* Service 1: Campaign Strategy */}
            <div className="glass-card p-5 border border-white/5 hover:border-red-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 text-red-500 flex items-center justify-center mb-4">
                <FaGlobe size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Campaign Strategy</h3>
              <p className="text-white/40 text-xs leading-relaxed">We identify your business goals, target audience, competitors, and customer journey before planning your campaign.</p>
            </div>

            {/* Service 2: Audience Research */}
            <div className="glass-card p-5 border border-white/5 hover:border-red-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 text-red-500 flex items-center justify-center mb-4">
                <FaUsers size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Audience Research</h3>
              <p className="text-white/40 text-xs leading-relaxed">We build audience segments using demographics, interests, in-market audiences, and custom lists to improve targeting.</p>
            </div>

            {/* Service 3: Video Ad Setup */}
            <div className="glass-card p-5 border border-white/5 hover:border-red-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 text-red-500 flex items-center justify-center mb-4">
                <FaPlay size={16} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Video Ad Setup</h3>
              <p className="text-white/40 text-xs mb-3 leading-relaxed">Campaign setups for Skippable In-Stream, Non-Skippable, Shorts, In-Feed, Bumper and Demand Gen formats.</p>
            </div>

            {/* Service 4: Conversion Tracking */}
            <div className="glass-card p-5 border border-white/5 hover:border-red-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 text-red-500 flex items-center justify-center mb-4">
                <FaCogs size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Conversion Tracking</h3>
              <p className="text-white/40 text-xs leading-relaxed">Accurate measurement using Google Ads, GA4, GTM, and enhanced conversion configurations.</p>
            </div>

            {/* Service 5: Campaign Optimization */}
            <div className="glass-card p-5 border border-white/5 hover:border-red-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 text-red-500 flex items-center justify-center mb-4">
                <FaChartLine size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Campaign Optimization</h3>
              <p className="text-white/40 text-xs leading-relaxed">Continuous optimization of targeting, bidding, video creatives, and placements based on performance telemetry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOW WE MEASURE SUCCESS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Performance Telemetry
            </div>
            <h2 className="section-title mb-4">
              How We Measure <span className="gradient-text-purple">YouTube Advertising Success</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base text-white/60">
              One of the biggest misconceptions about YouTube Ads is that campaign success is measured by views alone. In reality, we evaluate campaigns using business-focused metrics.
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
                  <th className="py-4 px-4 text-red-400">Metric</th>
                  <th className="py-4 px-4 text-brand-yellow">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                {[
                  { name: 'View Rate', desc: 'Indicates how engaging the video is' },
                  { name: 'Click-Through Rate (CTR)', desc: 'Measures audience interest' },
                  { name: 'Cost Per View (CPV)', desc: 'Helps control advertising costs' },
                  { name: 'Conversion Rate', desc: 'Measures lead or sales performance' },
                  { name: 'Cost Per Acquisition (CPA)', desc: 'Shows the cost of acquiring customers' },
                  { name: 'Return on Ad Spend (ROAS)', desc: 'Measures campaign profitability' },
                  { name: 'Watch Time', desc: 'Indicates audience engagement' }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01]">
                    <td className="py-4 px-4 font-bold flex items-center gap-2">
                      <FaCheckCircle className="text-red-500 shrink-0" size={12}/> {row.name}
                    </td>
                    <td className="py-4 px-4">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 6. IS YOUTUBE ADVERTISING RIGHT FOR YOU? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                Is YouTube Advertising Right for Your Business?
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                From our experience managing digital advertising campaigns, YouTube Ads perform best for businesses that need to educate potential customers before they make a buying decision.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                If your business offers complex, premium, or visually engaging products and services, YouTube Ads can help build trust earlier in the customer journey while supporting lead generation and sales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 border border-white/5"
            >
              <h3 className="text-white font-bold text-base mb-4">YouTube Ads are particularly effective for:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Healthcare providers', 'Educational institutions', 
                  'SaaS companies', 'Ecommerce brands', 
                  'Real estate businesses', 'Professional service providers', 
                  'Manufacturers', 'Local businesses'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/70 text-xs sm:text-sm bg-black/20 p-2.5 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. GEOGRAPHIC COVERAGE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              ✦ Geographic Service Area
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-8 leading-tight">
               YouTube Ads Agency in <span className="gradient-text-purple">Chennai</span>
            </h2>
            <div className="glass-card p-8 sm:p-10 border border-white/5 shadow-xl text-left space-y-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                 Magdio is a YouTube Ads Agency in Chennai helping businesses across Chennai, Coimbatore, Madurai, Tamil Nadu, and India create high-performing video advertising campaigns.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-semibold">
                 Whether you're looking for a YouTube marketing agency in Chennai, YouTube advertising agency, or professional YouTube marketing services, our team develops customized strategies designed around your business goals, target audience, and return on investment.
              </p>
            </div>
         </div>
      </section>

      {/* ── 8. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-red-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Ready to Accelerate Your <span className="gradient-text-gold">Video Ad ROI?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto"
          >
            Stop focusing on simple view counts. Build conversion-oriented video campaign funnels today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary text-base sm:text-lg px-10 py-4 shadow-[0_0_40px_rgba(255,0,0,0.3)] hover:shadow-[0_0_60px_rgba(255,0,0,0.5)]"
              style={{ background: 'linear-gradient(45deg, #ff0000, #b30000)' }}
            >
              Get Your YouTube Ads Strategy
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 9. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="gradient-text-purple">Questions</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our YouTube Ads services.</p>
          </div>
          <FAQAccordion faqs={ytFaqs} />
        </div>
      </section>

      {/* ── 10. ENQUIRY SECTION ── */}
      <div id="enquiry">
        <EnquirySection />
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaChartLine, FaFilter, FaBullseye, FaShoppingBag, 
  FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaCogs, FaUsers
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
    q: 'How much budget do I need for performance marketing campaigns?',
    a: 'The ideal budget depends on your industry, audience size, competition, and campaign goals. Magdio helps businesses determine advertising budgets based on growth objectives and customer acquisition targets.'
  },
  {
    q: 'How quickly can performance marketing generate results?',
    a: 'Performance marketing campaigns can begin generating traffic, leads, and conversions shortly after launch. Continuous optimization helps improve efficiency and long-term campaign performance.'
  },
  {
    q: 'Why choose Magdio as your performance marketing agency?',
    a: 'Magdio combines performance marketing strategy, Instagram Ads management, Facebook Ads expertise, YouTube and LinkedIn ads, conversion tracking, lead generation systems, creative optimization, and business growth consulting to help businesses generate measurable results from digital advertising.'
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
    <div className="page-bg min-h-screen pt-0 pb-0">
      <SEO 
        title="Performance Marketing Agency in Tamil Nadu | Magdio" 
        description="Performance marketing agency in Tamil Nadu specializing in Instagram Ads, Facebook Ads, Meta Ads, lead generation and ROI-focused paid campaigns." 
        canonicalUrl="https://www.magdio.com/performance-marketing-tamilnadu-magdio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Performance Marketing",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Magdio"
          },
          "areaServed": "Tamil Nadu"
        }}
      />
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03030b]/85 via-[#06071a]/95 to-[#03030b] z-10" />
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #E1306C, transparent 70%)' }} />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #1A22B8, transparent 70%)' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            ROI & Measurable Growth
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Performance Marketing <br className="hidden sm:inline" />
            <span className="gradient-text-purple">Agency</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8"
          >
            <button onClick={scrollToEnquiry} className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5">
              Scale Your Campaigns
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 1.5 INTRO SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-8 leading-tight">
            Performance Marketing Services That Focus on Results, Not Just Reach
          </h2>
          <div className="space-y-6 text-white/70 text-base sm:text-lg leading-relaxed text-left glass-card p-8 border border-white/5 shadow-xl">
            <p>
              Many businesses spend money on advertising but struggle to generate quality leads, sales, and measurable growth. The problem is not the advertising platform itself. The problem is often poor targeting, weak creative strategy, ineffective landing pages, and lack of campaign optimization.
            </p>
            <p>
              Magdio is a performance marketing agency that helps businesses generate measurable results through Instagram Ads, Facebook Ads, Meta Ads, YouTube Ads, LinkedIn Ads, lead generation campaigns, conversion-focused advertising, and full-funnel performance marketing services.
            </p>
            <p>
              Unlike traditional advertising, performance marketing focuses on outcomes such as leads, purchases, bookings, inquiries, and revenue. Every campaign is designed around measurable business goals and optimized using real-time performance data.
            </p>
            <p>
              Whether you are a startup, ecommerce brand, SaaS company, local business, consultant, healthcare provider, or service-based business, our performance marketing services help attract qualified customers and improve marketing ROI.
            </p>
            <p>
              Businesses looking for Instagram Ads management, Facebook Ads expertise, Meta Ads strategy, or a performance marketing agency choose Magdio because we focus on growth, conversions, and business impact rather than vanity metrics.
            </p>
          </div>
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
                  <FaBullseye size={18} />
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Performance marketing is a digital marketing approach where advertising campaigns are optimized based on measurable actions such as leads, purchases, sign-ups, appointments, or conversions. Unlike traditional advertising, performance marketing focuses on actual business outcomes instead of impressions or reach alone.
                </p>
              </div>

              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <FaChartLine size={18} />
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Businesses invest in performance marketing services because every campaign can be tracked, measured, optimized, and improved using data. At Magdio, we use performance marketing frameworks that help businesses improve lead quality, reduce acquisition costs, and increase return on advertising spend.
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
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
                <FaCogs className="text-purple-400" /> A Winning Strategy Combines:
              </h3>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-2">
                {[
                  'Instagram Ads', 'Facebook Ads', 'Meta Ads', 'YouTube Ads',
                  'LinkedIn Ads', 'Conversion Tracking', 'Landing Page Optimization',
                  'Audience Targeting', 'Creative Testing', 'Retargeting Campaigns'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. CHANNELS: INSTAGRAM, FACEBOOK, YOUTUBE, LINKEDIN ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Performance Marketing <span className="gradient-text-purple">Platforms</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto text-sm sm:text-base">
              We leverage the most powerful digital platforms to drive measurable results. Here is how we utilize each channel for maximum impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Instagram Ads */}
            <div className="glass-card p-8 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white">
                  <FaInstagram size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Instagram Ads</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Instagram has become one of the most influential marketing platforms for brands looking to increase visibility, engagement, leads, and sales. Instagram Ads allow businesses to reach highly targeted audiences based on interests, demographics, online behavior, engagement patterns, and purchase intent.
              </p>
              <div className="mb-4">
                <strong className="text-white text-sm">Our Instagram Ads services help businesses:</strong>
                <ul className="grid grid-cols-2 gap-2 mt-2 text-white/60 text-sm">
                  <li>• Generate leads</li>
                  <li>• Increase website traffic</li>
                  <li>• Improve brand visibility</li>
                  <li>• Promote products</li>
                  <li>• Drive ecommerce sales</li>
                  <li>• Build remarketing audiences</li>
                </ul>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                As consumer attention shifts toward short-form content, Instagram Ads remain one of the most effective channels. We focus on converting that attention into action.
              </p>
            </div>

            {/* Facebook / Meta Ads */}
            <div className="glass-card p-8 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <FaFacebookF size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Facebook Ads & Meta Ads</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Meta's advertising ecosystem gives businesses access to Facebook, Instagram, Messenger, Audience Network, and advanced audience targeting capabilities. Our Facebook Ads and Meta Ads services are designed to help businesses generate measurable growth.
              </p>
              <div className="mb-4">
                <strong className="text-white text-sm">We create campaigns for:</strong>
                <ul className="grid grid-cols-2 gap-2 mt-2 text-white/60 text-sm">
                  <li>• Lead Generation</li>
                  <li>• Website Conversions</li>
                  <li>• Ecommerce Sales</li>
                  <li>• App Downloads</li>
                  <li>• Brand Awareness</li>
                  <li>• Customer Acquisition</li>
                </ul>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Our Meta Ads strategies focus on audience segmentation, conversion tracking, creative testing, and continuous optimization to maximize reach and conversion efficiency.
              </p>
            </div>

            {/* YouTube Ads */}
            <div className="glass-card p-8 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <FaYoutube size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">YouTube Ads</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Video is the most engaging medium today. YouTube Ads allow businesses to capture user intent and attention simultaneously, acting as both a visual discovery engine and a high-converting performance marketing channel.
              </p>
              <div className="mb-4">
                <strong className="text-white text-sm">Our YouTube Ads services help businesses:</strong>
                <ul className="grid grid-cols-2 gap-2 mt-2 text-white/60 text-sm">
                  <li>• Drive high-intent traffic</li>
                  <li>• Increase brand recall</li>
                  <li>• Generate video leads</li>
                  <li>• Boost product awareness</li>
                  <li>• Build subscriber bases</li>
                  <li>• Execute video remarketing</li>
                </ul>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                We craft performance-driven video campaigns that don't just entertain—they convert viewers into paying customers and qualified inquiries.
              </p>
            </div>

            {/* LinkedIn Ads */}
            <div className="glass-card p-8 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center text-white">
                  <FaLinkedinIn size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">LinkedIn Ads</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                For B2B companies, SaaS, and professional services, LinkedIn Ads offer unparalleled targeting based on job titles, industries, company size, and professional seniority.
              </p>
              <div className="mb-4">
                <strong className="text-white text-sm">Our LinkedIn Ads strategies focus on:</strong>
                <ul className="grid grid-cols-2 gap-2 mt-2 text-white/60 text-sm">
                  <li>• B2B Lead Generation</li>
                  <li>• Account-Based Marketing (ABM)</li>
                  <li>• Corporate Event Sign-ups</li>
                  <li>• High-Ticket Sales</li>
                  <li>• Industry Authority</li>
                  <li>• Professional Retargeting</li>
                </ul>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                We design precise B2B performance marketing funnels using LinkedIn Lead Gen Forms and Sponsored Content to deliver high-quality professional leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR PERFORMANCE MARKETING SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Our Performance <span className="gradient-text-purple">Marketing Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Magdio provides complete performance marketing services for businesses that want predictable and scalable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8 border border-white/5 hover:border-pink-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Instagram Ads Management</h3>
              <p className="text-white/70 text-sm mb-4">Our Instagram Ads specialists create campaigns designed to generate engagement, leads, inquiries, and sales.</p>
              <ul className="text-white/60 text-sm space-y-1 mb-4 pl-4 list-disc">
                <li>Audience Research</li>
                <li>Campaign Setup</li>
                <li>Ad Creative Strategy</li>
                <li>Instagram Ads Manager Setup</li>
                <li>Conversion Tracking</li>
                <li>Campaign Optimization</li>
              </ul>
              <p className="text-white/70 text-sm italic">We focus on improving campaign performance while reducing wasted advertising spend.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Facebook Ads Management</h3>
              <p className="text-white/70 text-sm mb-4">Facebook remains one of the strongest advertising platforms for lead generation and customer acquisition.</p>
              <ul className="text-white/60 text-sm space-y-1 mb-4 pl-4 list-disc">
                <li>Campaign Planning</li>
                <li>Audience Targeting</li>
                <li>Ad Creation</li>
                <li>Budget Management</li>
                <li>Conversion Tracking</li>
                <li>Performance Optimization</li>
              </ul>
              <p className="text-white/70 text-sm italic">Our goal is to generate measurable business outcomes rather than simply increasing traffic.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-red-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">YouTube & LinkedIn Ads</h3>
              <p className="text-white/70 text-sm mb-4">We expand your performance marketing efforts to the most engaging video platform and the largest professional network.</p>
              <ul className="text-white/60 text-sm space-y-1 mb-4 pl-4 list-disc">
                <li>Video Ad Creation</li>
                <li>B2B Audience Targeting</li>
                <li>Lead Gen Form Setup</li>
                <li>ABM Strategies</li>
                <li>Cross-Channel Retargeting</li>
                <li>Performance Analytics</li>
              </ul>
              <p className="text-white/70 text-sm italic">Leveraging high-intent platforms to diversify and scale your acquisition channels.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-emerald-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Lead Generation Campaigns</h3>
              <p className="text-white/70 text-sm mb-4">Generating leads is one of the primary objectives of performance marketing. We create systems that combine:</p>
              <ul className="text-white/60 text-sm space-y-1 mb-4 pl-4 list-disc">
                <li>Meta Ads</li>
                <li>Landing Pages</li>
                <li>Lead Forms</li>
                <li>CRM Integration</li>
                <li>Retargeting Campaigns</li>
              </ul>
              <p className="text-white/70 text-sm italic">This helps businesses consistently attract qualified prospects.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-yellow-500/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Ecommerce Performance Marketing</h3>
              <p className="text-white/70 text-sm mb-4">For ecommerce brands, we focus on improving product visibility, increasing purchases, reducing CAC, and maximizing ROAS.</p>
              <ul className="text-white/60 text-sm space-y-1 mb-4 pl-4 list-disc">
                <li>Catalog Ads</li>
                <li>Dynamic Product Ads</li>
                <li>Retargeting</li>
                <li>Conversion Campaigns</li>
                <li>Purchase Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ADS MANAGER & CAMPAIGN OPTIMIZATION ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
               <div className="glass-card-premium p-8 relative border border-white/10 shadow-2xl rounded-3xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Performance Marketing Process</h3>
                  <p className="text-white/70 mb-6 text-sm">Successful performance marketing requires strategy, testing, optimization, and continuous improvement.</p>
                  
                  <div className="space-y-6">
                     <div>
                        <h4 className="text-lg font-bold text-brand-yellow flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-brand-yellow/20 flex items-center justify-center text-xs">1</span> Business Analysis</h4>
                        <p className="text-white/60 text-sm pl-8">We analyze your business model, target audience, competitors, and customer journey.</p>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-pink-400 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-xs">2</span> Audience Research</h4>
                        <p className="text-white/60 text-sm pl-8">Understanding customer behavior helps us build highly targeted campaigns.</p>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-blue-400 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs">3</span> Campaign Development</h4>
                        <p className="text-white/60 text-sm pl-8">We create ad structures, creative concepts, targeting strategies, and conversion-focused funnels.</p>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-emerald-400 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">4</span> Launch & Optimization</h4>
                        <p className="text-white/60 text-sm pl-8">Campaigns are continuously monitored and optimized based on real-time performance data.</p>
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-purple-400 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-xs">5</span> Reporting & Scaling</h4>
                        <p className="text-white/60 text-sm pl-8">We identify successful campaigns and scale them strategically while maintaining efficiency.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="order-1 lg:order-2">
               <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Instagram Ads Manager & <br className="hidden sm:inline" />
                  <span className="gradient-text-purple">Campaign Optimization</span>
               </h2>
               <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Instagram Ads Manager (and Meta's unified ad ecosystem) plays a crucial role in campaign management, audience targeting, ad placement selection, budget allocation, and performance analysis.
               </p>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 shadow-lg">
                  <h3 className="text-white text-lg font-bold mb-4">At Magdio, our advertising specialists use Meta's advertising tools to:</h3>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                     {[
                        'Launch campaigns efficiently', 'Track conversions', 
                        'Monitor performance', 'Optimize audiences',
                        'Improve ad relevance', 'Scale successful campaigns'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/80 text-base">
                           <FaCheckCircle className="text-purple-400 shrink-0" size={16}/> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <p className="text-white/70 text-lg leading-relaxed">
                  Proper campaign management helps businesses achieve better results while maintaining advertising efficiency. The same principles apply whether we are managing budgets inside Meta Ads Manager, LinkedIn Campaign Manager, or Google Ads for YouTube.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE MAGDIO & INDUSTRIES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Magdio as Your <br className="hidden sm:inline" />
                  <span className="gradient-text-purple">Performance Marketing Agency?</span>
               </h2>
               <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Many businesses run Instagram Ads and Facebook Ads without a clear strategy. At Magdio, we focus on building complete performance marketing systems designed around measurable business growth.
               </p>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 shadow-lg">
                  <h3 className="text-white text-lg font-bold mb-4">Our approach includes:</h3>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                     {[
                        'Performance Marketing Strategy', 'Instagram Ads Management', 
                        'Facebook Ads Management', 'Conversion Tracking',
                        'Creative Testing', 'Landing Page Optimization',
                        'Audience Segmentation', 'Lead Generation Systems'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                           <FaCheckCircle className="text-pink-400 shrink-0" size={16}/> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <p className="text-white/70 text-lg font-bold">
                  We help businesses transform advertising spend into measurable business outcomes.
               </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
               <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
               <div className="glass-card-premium p-8 sm:p-10 relative border border-white/10 shadow-2xl rounded-3xl">
                  <h3 className="text-3xl font-bold text-white mb-4">Industries We Serve</h3>
                  <p className="text-white/70 mb-8 text-base">Our performance marketing services support businesses across multiple industries:</p>
                  <ul className="grid grid-cols-2 gap-4">
                     {[
                        'Ecommerce', 'SaaS', 'Healthcare', 'Education', 
                        'Real Estate', 'Restaurants', 'Consultants', 
                        'Coaches', 'Personal Brands', 'Manufacturing', 
                        'Startups', 'Service-Based Businesses'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80 text-base font-medium bg-black/20 p-3 rounded-xl border border-white/5">
                           <span className="w-2 h-2 bg-brand-yellow rounded-full shrink-0" /> {item}
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

      {/* ── 7. LOCATIONS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-8 leading-tight">
               Performance Marketing Agency in <span className="gradient-text-purple">Tamil Nadu</span>
            </h2>
            <div className="glass-card p-8 sm:p-10 border border-white/5 shadow-xl text-left space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                 Magdio provides performance marketing services for businesses across Coimbatore, Chennai, Madurai, and throughout Tamil Nadu.
              </p>
              <p className="text-white/80 text-lg leading-relaxed font-semibold">
                 Whether you are looking for Instagram Ads management, Facebook Ads expertise, Meta Ads campaigns, or a performance marketing agency capable of scaling customer acquisition, our team provides customized advertising solutions aligned with business goals.
              </p>
            </div>
         </div>
      </section>

      {/* ── 8. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-purple/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Ready to Generate <span className="gradient-text-purple">Measurable Growth?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
          >
            Transform your advertising spend into highly qualified leads and revenue.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary text-lg px-10 py-4 shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]"
            >
              Get Your Growth Strategy
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 9. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b]">
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

      {/* ── 10. ENQUIRY SECTION ── */}
      <EnquirySection />
    </div>
  );
}

import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaSearch, FaChartLine, FaVideo, FaShoppingCart, FaRedo,
  FaBrain, FaEdit, FaGoogle
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
    q: 'Why choose Magdio as your Google Ads agency?',
    a: 'Magdio combines Google Ads management, conversion tracking, landing page optimization, automated bidding strategies, audience targeting, and performance marketing expertise to help businesses generate measurable growth through paid advertising.'
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
    <div className="page-bg min-h-screen pt-0 pb-0">
      <SEO 
        title="Google Ads Agency in Tamil Nadu | Magdio" 
        description="Google Ads agency in Tamil Nadu offering Google Ads management, PPC advertising, search campaigns, lead generation and conversion rate optimization." 
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
            Performance & Growth
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Google Ads Agency <br className="hidden sm:inline" />
            <span className="gradient-text-blue">in Tamil Nadu</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8"
          >
            <button onClick={scrollToEnquiry} className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5" style={{ background: 'linear-gradient(45deg, #4285F4, #34A853)' }}>
              Get a Free Ads Audit
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 1.5 INTRO SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-8 leading-tight">
            Google Ads Services That Help Businesses Generate Quality Leads and Increase Revenue
          </h2>
          <div className="space-y-6 text-white/70 text-base sm:text-lg leading-relaxed text-left glass-card p-8 border border-white/5 shadow-xl">
            <p>
              When potential customers search on Google, they are already looking for a solution, product, or service. This makes Google Ads one of the fastest and most effective digital marketing channels for generating leads, sales, inquiries, and business growth.
            </p>
            <p>
              Magdio is a Google Ads Agency in Tamil Nadu helping businesses create high-performing Google Ads campaigns that drive measurable results. As a performance-focused Google Ads agency, we help businesses reach customers at the exact moment they are searching for products and services.
            </p>
            <p>
              Whether you are a startup, local business, ecommerce brand, SaaS company, healthcare business, educational institution, or service provider, our Google Ads services focus on attracting high-intent customers, reducing wasted ad spend, and maximizing return on investment.
            </p>
            <p>
              Businesses searching for a Google Ads agency in Chennai, a Google Ads specialist, or the Best Google Ads marketing agency in Coimbatore choose Magdio because we focus on business outcomes rather than vanity metrics. Our campaigns are designed to generate leads, sales, appointments, and measurable growth through strategic Google advertising.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT IS GOOGLE ADS? ── */}
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
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <FaChartLine size={18} />
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
                <FaCheckCircle className="text-blue-400" /> Focus on Conversions
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                As a Google Ads agency, Magdio helps businesses create, manage, optimize, and scale campaigns that attract qualified traffic and improve conversions. Our Google Ads specialists focus on campaign strategy, keyword targeting, ad creation, audience targeting, bidding optimization, and conversion tracking to maximize performance.
              </p>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <p className="text-white/90 text-sm font-semibold">
                  Google Ads is not simply about getting clicks. The real goal is generating qualified leads, increasing sales, improving customer acquisition, and creating profitable growth systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY INVEST IN GOOGLE ADS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center mb-12">
            <h2 className="section-title mb-6">
              Why Businesses Invest in <br className="hidden sm:inline" />
              <span className="gradient-text-blue">Google Ads</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Google processes billions of searches every day, making it one of the most powerful advertising platforms available.
            </p>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left mb-10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Businesses invest in Google Ads because it helps them:</h3>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  'Generate leads quickly', 'Increase sales opportunities', 
                  'Reach high-intent customers', 'Improve online visibility', 
                  'Control advertising budgets', 'Measure campaign performance', 
                  'Scale customer acquisition', 'Track return on investment'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-lg">
                    <FaCheckCircle className="text-blue-400 shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 border-l-4 border-blue-500 text-left space-y-4">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Unlike traditional advertising, Google Ads allows businesses to target customers based on keywords, location, interests, demographics, search behavior, and buying intent.
              </p>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                As a Google Ads Agency in Tamil Nadu, Magdio creates campaigns focused on conversions, qualified traffic, and long-term business growth rather than simply increasing clicks.
              </p>
            </div>
         </div>
      </section>

      {/* ── 4. OUR GOOGLE ADS SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Our Google Ads <span className="gradient-text-blue">Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Magdio provides complete Google Ads management services designed to help businesses maximize their advertising investment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <FaSearch size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Search Ads</h3>
              <p className="text-white/70 text-sm mb-4">Google Search Ads help businesses appear at the top of search results when users search for products or services.</p>
              <ul className="text-white/60 text-sm space-y-1 mb-4 pl-4 list-disc">
                <li>Keyword research</li>
                <li>Search intent analysis</li>
                <li>Ad copy creation</li>
                <li>Campaign setup</li>
                <li>Bid optimization</li>
                <li>Conversion tracking</li>
              </ul>
              <p className="text-white/70 text-sm italic">Search campaigns are ideal for businesses looking to generate inquiries, phone calls, form submissions, and direct sales.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                <FaChartLine size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Display Ads</h3>
              <p className="text-white/70 text-sm mb-4">Display advertising allows businesses to reach potential customers across millions of websites and apps within Google's advertising network.</p>
              <ul className="text-white/60 text-sm space-y-1 mb-4 pl-4 list-disc">
                <li>Brand awareness</li>
                <li>Remarketing</li>
                <li>Audience expansion</li>
                <li>Product promotion</li>
                <li>Customer retention</li>
              </ul>
              <p className="text-white/70 text-sm italic">As a Google Ads agency, we develop audience-focused display campaigns that improve visibility and engagement.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-red-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center mb-6">
                <FaVideo size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">YouTube Ads</h3>
              <p className="text-white/70 text-sm mb-4">Video advertising continues to grow rapidly. Our YouTube Ads campaigns help businesses:</p>
              <ul className="text-white/60 text-sm space-y-1 mb-4 pl-4 list-disc">
                <li>Build brand awareness</li>
                <li>Reach targeted audiences</li>
                <li>Increase engagement</li>
                <li>Generate leads</li>
                <li>Promote products and services</li>
              </ul>
              <p className="text-white/70 text-sm italic">YouTube advertising allows businesses to connect with potential customers through highly engaging video content.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <FaShoppingCart size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Shopping Ads</h3>
              <p className="text-white/70 text-sm mb-4">For ecommerce businesses, Google Shopping Ads can drive highly qualified traffic from customers actively searching for products.</p>
              <ul className="text-white/60 text-sm space-y-1 mb-4 pl-4 list-disc">
                <li>Product feeds</li>
                <li>Merchant Center accounts</li>
                <li>Shopping campaigns</li>
                <li>Conversion tracking</li>
                <li>Bid strategies</li>
              </ul>
              <p className="text-white/70 text-sm italic">This helps businesses increase product visibility and improve online sales performance.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6">
                <FaRedo size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Remarketing Campaigns</h3>
              <p className="text-white/70 text-sm mb-4">Most website visitors do not convert during their first visit. Remarketing campaigns help businesses reconnect with users who have previously interacted with their website, products, or services.</p>
              <p className="text-white/70 text-sm italic">Remarketing often improves conversion rates because it targets audiences already familiar with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MANAGEMENT & OPTIMIZATION PROCESS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Google Ads Management <span className="gradient-text-blue">& Optimization Process</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Successful Google Ads campaigns require more than simply launching advertisements. At Magdio, our process includes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 border border-white/5 flex gap-4">
               <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold">1</div>
               <div>
                  <h3 className="text-lg font-bold text-white mb-2">Business & Competitor Analysis</h3>
                  <p className="text-white/70 text-sm">We understand your business goals, industry landscape, competitors, customer journey, and growth opportunities before launching campaigns.</p>
               </div>
            </div>
            <div className="glass-card p-6 border border-white/5 flex gap-4">
               <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold">2</div>
               <div>
                  <h3 className="text-lg font-bold text-white mb-2">Keyword Research & Campaign Planning</h3>
                  <p className="text-white/70 text-sm">Our Google Ads specialists identify high-intent keywords that align with customer search behavior and buying intent.</p>
               </div>
            </div>
            <div className="glass-card p-6 border border-white/5 flex gap-4">
               <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold">3</div>
               <div>
                  <h3 className="text-lg font-bold text-white mb-2">Campaign Setup & Ad Creation</h3>
                  <p className="text-white/70 text-sm">We build conversion-focused campaigns with optimized ad groups, compelling ad copy, audience targeting, and conversion tracking.</p>
               </div>
            </div>
            <div className="glass-card p-6 border border-white/5 flex gap-4">
               <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold">4</div>
               <div>
                  <h3 className="text-lg font-bold text-white mb-2">Continuous Optimization</h3>
                  <p className="text-white/70 text-sm">Campaigns are continuously monitored and optimized based on performance data, conversion metrics, and audience behavior.</p>
               </div>
            </div>
            <div className="glass-card p-6 border border-white/5 flex gap-4 md:col-span-2 md:w-1/2 md:mx-auto">
               <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold">5</div>
               <div>
                  <h3 className="text-lg font-bold text-white mb-2">Reporting & Performance Tracking</h3>
                  <p className="text-white/70 text-sm">We provide transparent reporting so businesses can clearly understand campaign performance, lead generation, and return on investment.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. AUTOMATED BIDDING & EDITOR ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 border border-white/5">
               <div className="flex items-center gap-3 mb-6">
                  <FaBrain className="text-blue-400 text-3xl" />
                  <h2 className="text-2xl font-bold text-white">Automated Bidding & AI-Powered Optimization</h2>
               </div>
               <p className="text-white/70 mb-4 text-sm">One of the most common questions businesses ask is: <br/><strong>Which of the following is a core benefit of Google Ads automated bidding?</strong></p>
               <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                  <p className="text-white/80 text-sm leading-relaxed">
                     The core benefit of Google Ads automated bidding is that Google uses machine learning and real-time auction signals to automatically adjust bids based on the likelihood of clicks, conversions, or conversion value. This helps advertisers optimize performance without manually adjusting bids for every keyword.
                  </p>
               </div>
               <p className="text-white/70 mb-3 text-sm">Google's Smart Bidding strategies use signals such as:</p>
               <div className="flex flex-wrap gap-2 mb-6">
                  {['Device', 'Location', 'Time of day', 'Search intent', 'User behavior', 'Remarketing audiences'].map(signal => (
                     <span key={signal} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full border border-blue-500/20">{signal}</span>
                  ))}
               </div>
               <p className="text-white/70 text-sm">
                  At Magdio, our Google Ads managers combine automated bidding, conversion tracking, and strategic campaign optimization to maximize advertising performance and improve ROI.
               </p>
            </div>

            <div className="glass-card p-8 border border-white/5">
               <div className="flex items-center gap-3 mb-6">
                  <FaEdit className="text-emerald-400 text-3xl" />
                  <h2 className="text-2xl font-bold text-white">Google Ads Editor & Advanced Campaign Management</h2>
               </div>
               <p className="text-white/70 mb-6 text-sm leading-relaxed">
                  Google Ads Editor is a powerful tool that allows advertisers to manage campaigns, make bulk changes, optimize accounts, and improve campaign efficiency.
               </p>
               <p className="text-white/70 mb-3 text-sm">Our Google Ads managers use Google Ads Editor for:</p>
               <ul className="space-y-2 mb-6">
                  {['Campaign restructuring', 'Bulk ad updates', 'Keyword management', 'Account optimization', 'Large-scale campaign management'].map(item => (
                     <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                        <FaCheckCircle className="text-emerald-400 shrink-0" size={14} /> {item}
                     </li>
                  ))}
               </ul>
               <p className="text-white/70 text-sm leading-relaxed">
                  This allows us to efficiently manage complex Google Ads accounts while maintaining campaign quality and performance.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHY CHOOSE MAGDIO & INDUSTRIES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Magdio as Your <br className="hidden sm:inline" />
                  <span className="gradient-text-blue">Google Ads Agency?</span>
               </h2>
               <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Many businesses waste advertising budgets because campaigns are launched without strategy, tracking, or optimization.
               </p>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 shadow-lg">
                  <h3 className="text-white text-lg font-bold mb-4">At Magdio, we focus on:</h3>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                     {[
                        'Conversion-focused Google Ads campaigns', 'Lead generation systems', 
                        'Search intent targeting', 'Landing page optimization',
                        'ROI tracking', 'AI-powered bidding strategies',
                        'Continuous performance improvement'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                           <FaCheckCircle className="text-blue-400 shrink-0" size={16}/> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <p className="text-white/70 text-base leading-relaxed">
                  Whether you are looking for a Google Ads agency in Chennai, a Google Ads specialist, a Google Ads manager, or the Best Google Ads marketing agency in Coimbatore, our goal is to help your business generate measurable growth through paid search advertising.
               </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
               <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
               <div className="glass-card-premium p-8 sm:p-10 relative border border-white/10 shadow-2xl rounded-3xl">
                  <h3 className="text-3xl font-bold text-white mb-4">Industries We Serve</h3>
                  <p className="text-white/70 mb-8 text-base">Our Google Ads services support businesses across multiple industries including:</p>
                  <ul className="grid grid-cols-2 gap-4">
                     {[
                        'Ecommerce', 'SaaS', 'Healthcare', 'Real Estate', 
                        'Education', 'Manufacturing', 'Professional Services', 
                        'Startups', 'Consultants', 'Local Businesses'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80 text-base font-medium bg-black/20 p-3 rounded-xl border border-white/5">
                           <span className="w-2 h-2 bg-blue-400 rounded-full shrink-0" /> {item}
                        </li>
                     ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/60 text-sm leading-relaxed">
                      Every industry has different customer behavior, search patterns, and conversion journeys. Our Google Ads strategies are customized accordingly.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. LOCATIONS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-8 leading-tight">
               Google Ads Agency in <span className="gradient-text-blue">Tamil Nadu</span>
            </h2>
            <div className="glass-card p-8 sm:p-10 border border-white/5 shadow-xl text-left space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                 Magdio provides Google Ads services for businesses across Chennai, Coimbatore, Madurai, and throughout Tamil Nadu. We also work remotely with businesses across India and international clients.
              </p>
              <p className="text-white/80 text-lg leading-relaxed font-semibold">
                 Whether you need a Google Ads agency in Chennai, a Google Ads agency in Tamil Nadu, or a Google Ads company capable of managing national campaigns, our team provides customized solutions designed around business objectives and measurable outcomes.
              </p>
            </div>
         </div>
      </section>

      {/* ── 9. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
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
            className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
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
              className="btn-primary text-lg px-10 py-4 shadow-[0_0_40px_rgba(66,133,244,0.3)] hover:shadow-[0_0_60px_rgba(66,133,244,0.5)]"
              style={{ background: 'linear-gradient(45deg, #4285F4, #34A853)' }}
            >
              Get Your Ads Strategy
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 10. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b]">
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
      <EnquirySection />
    </div>
  );
}

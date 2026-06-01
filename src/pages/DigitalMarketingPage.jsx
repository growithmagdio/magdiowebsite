import { motion } from 'framer-motion';
import { 
  FaRocket, FaArrowRight, FaBrain, FaSearch, FaCogs, FaCheckCircle, 
  FaTimesCircle, FaChartLine, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaBullhorn, FaGlobe, FaMobileAlt, FaLaptopCode, FaChartBar,
  FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaRegLightbulb
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

// Dynamic data constants to keep the code extremely clean and structured
const coreServicesList = [
  { name: 'Search Engine Optimization (SEO)', desc: 'Dominate traditional searches and modern AI-driven conversational answers.', icon: FaSearch, border: 'hover:border-blue-500/50' },
  { name: 'Google Ads Services', desc: 'Capture high-intent search traffic with optimized target search and smart bidding.', icon: FaBullhorn, border: 'hover:border-red-500/50' },
  { name: 'Meta Ads Management', desc: 'Scroll-stopping visual ads and customized retargeting funnels across Facebook and Instagram.', icon: FaFacebookF, border: 'hover:border-indigo-500/50' },
  { name: 'Instagram Marketing', desc: 'Creative visual campaigns and short-form storytelling engineered to engage audiences.', icon: FaInstagram, border: 'hover:border-pink-500/50' },
  { name: 'Social Media Marketing', desc: 'Strategic audience psychology and structured content distribution models.', icon: FaGlobe, border: 'hover:border-emerald-500/50' },
  { name: 'YouTube Ads', desc: 'High-impact in-stream and discovery video ads that capture instant attention.', icon: FaYoutube, border: 'hover:border-red-600/50' },
  { name: 'LinkedIn Ads', desc: 'Laser-focused B2B lead generation targeting key corporate decision-makers.', icon: FaLinkedinIn, border: 'hover:border-blue-600/50' },
  { name: 'WhatsApp Marketing', desc: 'Automated chatbots and broadcasts yielding direct conversational conversions.', icon: FaWhatsapp, border: 'hover:border-green-500/50' },
  { name: 'AI Marketing Automation', desc: 'Intelligent multi-tenant triggers and CRM syncs that put operations on autopilot.', icon: FaBrain, border: 'hover:border-purple-500/50' },
  { name: 'Website Development', desc: 'Lightning-fast, highly optimized landing pathways engineered for conversions.', icon: FaLaptopCode, border: 'hover:border-cyan-500/50' },
  { name: 'Content Marketing', desc: 'Topical authority systems and semantically enriched copy written for humans and bots.', icon: FaRegLightbulb, border: 'hover:border-yellow-500/50' },
  { name: 'Branding & Growth Strategy', desc: 'Premium visual brand identities and structured long-term digital growth blueprints.', icon: FaChartLine, border: 'hover:border-brand-purple/50' },
];

const problemCards = [
  { title: 'Poor Google Rankings', desc: 'Your website does not rank on the first page, causing you to lose valuable high-intent organic traffic to competitors.' },
  { title: 'Weak Social Media Strategy', desc: 'Social media lacks consistent strategy and fails to build a loyal community or generate inquiries.' },
  { title: 'Wasted Ad Budgets', desc: 'Paid ad campaigns are run without proper audience research or tracking, resulting in zero quality leads.' },
  { title: 'Inconsistent Branding', desc: 'Disjointed logos, tone, and messaging across touchpoints hurt consumer trust and recognition.' },
  { title: 'High Customer Acquisition Costs', desc: 'Inefficient marketing structures increase CAC, eating directly into company margins.' },
  { title: 'No Lead Generation System', desc: 'Lacking automated funnels, leaving the business dependent on unpredictable referrals.' },
];

const solutionCards = [
  { title: 'Increase Online Visibility', desc: 'Dominate both traditional search engine rankings and AI answers, ensuring your target buyers find you first.' },
  { title: 'Generate Consistent Leads', desc: 'Establish predictable marketing funnels that capture and nurture high-quality organic and paid prospects.' },
  { title: 'Improve Sales Opportunities', desc: 'Attract high-intent visitors and route them directly to optimized conversion-focused landing systems.' },
  { title: 'Build Customer Trust', desc: 'Deliver consistent, high-end branding and valuable content that positions you as a market leader.' },
  { title: 'Strengthen Brand Awareness', desc: 'Maintain omni-channel campaigns that build massive, compounding brand equity over time.' },
  { title: 'Reduce Referral Dependency', desc: 'Put a scalable digital growth engine on autopilot to sustain active pipelines in any season.' },
  { title: 'Improve Marketing ROI', desc: 'Optimize tracking and ad allocations using deep analytical parameters to make every dollar count.' },
];

const choosePoints = [
  { title: 'Business-First Approach', desc: 'We take time to analyze your specific business model, competitors, customer behavior, and sales pipelines.' },
  { title: 'AI-Driven Insights', desc: 'We combine performance marketing with advanced AI strategies, optimizing campaign assets and conversion paths.' },
  { title: 'Conversion-Focused Execution', desc: 'We build systems designed to capture and convert traffic into leads and sales, bypassing vanity metrics.' },
  { title: 'Audience Analytics', desc: 'Laser-focused target profiling based on user psychology and behavioral telemetry to maximize organic yields.' },
  { title: 'SEO Expertise', desc: 'Advanced search engineering optimizing for traditional rankings and AI platforms like ChatGPT, Gemini, and Claude.' },
  { title: 'Scalable Growth Strategy', desc: 'Custom strategic roadmaps built to compound your brand equity and increase margins consistently.' },
];

const locationBadges = [
  { name: 'Coimbatore', desc: 'Our Core Growth Studio Hub' },
  { name: 'Chennai', desc: 'Tamil Nadu Corporate Operations' },
  { name: 'Madurai', desc: 'Regional Enterprise Strategies' },
  { name: 'Trichy', desc: 'Local Business Accelerators' },
  { name: 'Remote Services', desc: 'Active Across India' },
  { name: 'Global Network', desc: 'Serving International Clients' },
];

const dmFaqs = [
  {
    q: 'What does a digital marketing agency do?',
    a: 'A digital marketing agency helps businesses generate leads, improve online visibility, and grow through SEO, Google Ads, social media marketing, and paid advertising. Magdio creates customized digital marketing strategies focused on real business growth and conversions.'
  },
  {
    q: 'Why should I hire a digital marketing agency?',
    a: 'Hiring a digital marketing agency gives your business access to strategy, tools, content, ads, SEO, and analytics without building a full in-house team. Magdio helps businesses save time, improve ROI, and scale marketing efficiently.'
  },
  {
    q: 'Which digital marketing service is best for my business?',
    a: 'The right digital marketing service depends on your goals, industry, audience, and budget. Magdio analyzes your business first and recommends the right mix of SEO, Google Ads, Meta Ads, social media marketing, or lead generation strategies.'
  },
  {
    q: 'How long does digital marketing take to show results?',
    a: 'Paid advertising can generate leads quickly, while SEO and content marketing take longer to build long-term growth. Magdio creates both short-term and long-term digital marketing strategies based on business goals.'
  },
  {
    q: 'Can digital marketing help generate more leads?',
    a: 'Yes. Digital marketing helps businesses attract targeted customers through SEO, Google Ads, Meta Ads, landing pages, and conversion-focused campaigns. Magdio focuses on lead generation strategies that improve inquiries and sales opportunities.'
  },
  {
    q: 'Is digital marketing suitable for small businesses?',
    a: 'Yes. Digital marketing helps small businesses compete online by improving visibility, targeting local customers, and generating leads without huge advertising budgets. Magdio works with startups, local businesses, and growing brands across different industries.'
  },
  {
    q: 'What industries do you work with?',
    a: 'Magdio works with ecommerce brands, startups, SaaS companies, restaurants, real estate businesses, personal brands, coaches, and service-based businesses looking to improve online growth and lead generation.'
  },
  {
    q: 'Do you provide digital marketing services only in Coimbatore?',
    a: 'No. Magdio provides digital marketing services in Coimbatore, Chennai, Trichy and Madurai while also working remotely with businesses across India and international clients.'
  },
  {
    q: 'How is Magdio different from other digital marketing agencies?',
    a: 'Magdio focuses on strategy, performance marketing, AI-powered systems, SEO, and business growth instead of just posting content or running random ads. Our approach is built around leads, conversions, and scalable growth systems.'
  },
  {
    q: 'What should I check before hiring a digital marketing agency?',
    a: 'Before hiring a digital marketing agency, businesses should check experience, reporting process, communication, strategy approach, case studies, and transparency. Magdio believes in strategy-first marketing with clear reporting and measurable goals.'
  },
  {
    q: 'Will I get reports and performance updates?',
    a: 'Yes. Magdio provides regular campaign reports, analytics insights, and performance tracking so businesses can understand traffic, leads, conversions, and marketing progress clearly.'
  },
  {
    q: 'Do I need SEO, ads, and social media together?',
    a: 'Most businesses grow faster when SEO, paid ads, and social media marketing work together. Magdio creates integrated digital marketing systems that combine visibility, lead generation, branding, and conversion optimization.'
  },
  {
    q: 'Why do many businesses fail with digital marketing?',
    a: 'Many businesses fail because they run ads without strategy, post inconsistent content, ignore SEO, or focus only on vanity metrics. Magdio focuses on audience targeting, conversion strategy, and long-term business growth instead of just impressions or followers.'
  }
];

export default function DigitalMarketingPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0">
      <SEO 
        title="Digital Marketing Agency in Tamil Nadu | Magdio" 
        description="Complete digital marketing strategy to increase visibility, generate qualified leads, and improve conversions for modern businesses." 
      />
      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-24 pb-32 md:pt-36 md:pb-44 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03030b]/85 via-[#06071a]/95 to-[#03030b] z-10" />
          <div
            className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #1A22B8, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, #8A2BE2, transparent 70%)' }}
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
            Performance & Growth Studio
          </motion.div>

          {/* Main H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Digital Marketing Agency <br className="hidden sm:inline" />
            <span className="gradient-text-gold">In Tamil Nadu</span>
          </motion.h1>

          {/* Subtitle / Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            Businesses today need more than just social media posting or running random ads. Modern businesses require a complete digital marketing strategy that helps them increase visibility, generate qualified leads, improve conversions, and build long-term brand authority online.
          </motion.p>

          {/* Double CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5"
            >
              Get Free Consultation
            </button>
            <a
              href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20digital%20marketing%20experts."
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-3 flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={18} /> Talk To Our Experts
            </a>
          </motion.div>

          {/* Additional Intro Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-6 text-left border-t border-white/10 pt-12 max-w-4xl mx-auto"
          >
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                We are a results-driven digital marketing agency in Coimbatore helping startups, local businesses, ecommerce brands, SaaS companies, and service-based businesses grow through SEO, Google Ads, social media marketing, Meta Ads, AI-powered marketing strategies, and performance-driven digital campaigns.
              </p>
            </div>
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Our team works with businesses across Coimbatore, Chennai, Madurai, and other locations remotely to create scalable digital growth systems focused on real business outcomes instead of vanity metrics. Whether your goal is lead generation, online branding, website traffic growth, customer acquisition, or sales optimization, we create customized digital marketing solutions tailored to your business objectives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. WHAT IS DIGITAL MARKETING? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Interactive content cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest">
                ✦ Industry Definition
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                What Is <br className="hidden sm:inline" />
                <span className="gradient-text-purple">Digital Marketing?</span>
              </h2>
              
              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-lightblue flex items-center justify-center shrink-0 border border-brand-blue/30">
                  <FaGlobe size={18} />
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  Digital marketing is the process of promoting products, services, or brands using online platforms such as Google, Instagram, Facebook, YouTube, LinkedIn, websites, and search engines. Unlike traditional marketing, digital marketing allows businesses to target specific audiences, track campaign performance, measure conversions, and optimize marketing strategies based on real-time data.
                </p>
              </div>

              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <FaSearch size={18} />
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  Today, customers search online before making purchasing decisions. Whether someone is searching for a product on Google, discovering a brand on Instagram, watching videos on YouTube, or comparing services online, digital marketing helps businesses appear in front of potential customers at the right time.
                </p>
              </div>
            </motion.div>

            {/* Right Column Layout */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-premium p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-brand-yellow" /> Custom Growth Blueprint
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                A professional digital marketing company helps businesses improve online visibility, generate high-quality leads, increase sales, build trust, and create a strong digital presence through strategic marketing campaigns and data-driven execution.
              </p>
              <div className="h-px bg-white/10 mb-6" />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-white text-xl sm:text-2xl mb-1">Targeted</h4>
                  <p className="text-white/40 text-xs sm:text-sm">Reach Exact Buyers</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-brand-yellow text-xl sm:text-2xl mb-1">Measurable</h4>
                  <p className="text-white/40 text-xs sm:text-sm">Real-time Data Insights</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. AI-POWERED DIGITAL MARKETING SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Advanced Space Marketing
            </div>
            <h2 className="section-title mb-4">
              AI-Powered Digital Marketing Services <br className="hidden sm:inline" />
              <span className="gradient-text-gold">for Modern Businesses</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Combining AI automation, GEO algorithms, and predictive analytics to scale campaign yield.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: 'The Challenge', 
                desc: 'The digital marketing industry is rapidly evolving with AI-driven search, automation, personalization, and changing consumer behavior. Businesses that still rely only on traditional marketing methods often struggle with poor reach, low-quality leads, weak conversion rates, and increasing customer acquisition costs.',
                color: 'border-red-500/20 hover:border-red-500/40',
                badge: 'bg-red-500/10 text-red-400'
              },
              { 
                title: 'Our AI-Driven Approach', 
                desc: 'As a modern digital marketing agency, we combine AI-powered marketing strategies, SEO, content marketing, performance advertising, automation systems, and audience analytics to help businesses scale more efficiently. Our approach focuses on understanding customer behavior, optimizing user journeys, improving campaign performance, and building sustainable digital growth systems.',
                color: 'border-brand-purple/20 hover:border-brand-purple/50',
                badge: 'bg-brand-purple/10 text-brand-lightblue'
              },
              { 
                title: 'Tailored Marketing Matrix', 
                desc: 'We do not believe in generic marketing strategies. Every business has different goals, competitors, target audiences, and challenges. That is why our digital marketing services are built around research, business analysis, and customized strategy development.',
                color: 'border-brand-yellow/20 hover:border-brand-yellow/40',
                badge: 'bg-brand-yellow/10 text-brand-yellow'
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`glass-card p-6 sm:p-8 flex flex-col justify-between border ${card.color} transition-all duration-300 min-h-[280px] group`}
              >
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${card.badge}`}>
                    {card.title}
                  </span>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-white/10 rounded-full mt-6 group-hover:w-16 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Interactive Feature Tags Row */}
          <div className="flex flex-wrap justify-center gap-4 text-center max-w-4xl mx-auto">
            {['AI-Powered Marketing', 'Automation Integrations', 'Hyper Personalization', 'Predictive Audience Analytics', 'Sustainable Growth Systems'].map((item, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full glass-card border-white/5 text-white/70 text-xs sm:text-sm font-semibold hover:border-brand-purple/40 hover:text-white transition-colors select-none"
              >
                ✦ {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR CORE DIGITAL MARKETING SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Capabilities Grid
            </div>
            <h2 className="section-title mb-4">
              Our Core <span className="gradient-text-purple">Digital Marketing Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              We provide complete digital marketing services designed to improve online growth, lead generation, and brand visibility for businesses across multiple industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServicesList.map((service, i) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.08, duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className={`glass-card p-6 flex flex-col justify-between border border-white/5 ${service.border} transition-all duration-300 group min-h-[180px] cursor-pointer`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-brand-yellow flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      <IconComp size={18} />
                    </div>
                    <h4 className="font-display font-bold text-white text-base sm:text-lg mb-2 leading-snug group-hover:text-brand-yellow transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mt-4" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. WHY BUSINESSES NEED DIGITAL MARKETING IN 2026 ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ The 2026 Imperative
            </div>
            <h2 className="section-title mb-4">
              Why Businesses Need <span className="gradient-text-gold">Digital Marketing in 2026</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto text-sm sm:text-base">
              Consumer behavior has changed completely over the last few years. People now search, compare, analyze, and interact with businesses online before making purchasing decisions. If your business is not visible online, there is a high chance your competitors are capturing your potential customers.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left: Problems Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="font-display font-bold text-xl sm:text-2xl text-red-400 flex items-center gap-2 pl-2 border-l-4 border-red-500">
                The Bottlenecks (Business Challenges)
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {problemCards.map((prob, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-red-950/10 border border-red-900/20 hover:border-red-900/40 transition-colors">
                    <h4 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                      <FaTimesCircle className="text-red-400 shrink-0" size={14} /> {prob.title}
                    </h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Solutions Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="font-display font-bold text-xl sm:text-2xl text-emerald-400 flex items-center gap-2 pl-2 border-l-4 border-emerald-500">
                The Roadmap (MAGDIO Solutions)
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {solutionCards.map((sol, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-900/20 hover:border-emerald-900/40 transition-colors">
                    <h4 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                      <FaCheckCircle className="text-emerald-400 shrink-0" size={14} /> {sol.title}
                    </h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE OUR DIGITAL MARKETING AGENCY ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Description */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
                  ✦ Dynamic Execution Model
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Our <br className="hidden sm:inline" />
                  <span className="gradient-text-purple">Digital Marketing Agency?</span>
                </h2>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-6">
                  Choosing the right digital marketing agency can directly impact your business growth, online visibility, and marketing ROI. Many agencies focus only on vanity metrics such as followers, likes, or impressions without understanding actual business objectives.
                </p>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base mb-8">
                  Our approach is different. We focus on building marketing systems that generate measurable business results through SEO, paid advertising, social media marketing, content strategy, and automation.
                </p>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <p className="text-brand-yellow font-bold text-sm">We combine: strategy, paid ads, SEO, AI-insights, analytics, and conversion-focused execution.</p>
                </div>
              </motion.div>
            </div>

            {/* Right Col: 6 Features Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {choosePoints.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass-card p-6 border border-white/5 hover:border-brand-purple/40 hover:shadow-[0_8px_30px_rgba(138,43,226,0.12)] transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-brand-purple/20 text-brand-lightblue mb-4 border border-brand-purple/30 group-hover:scale-110 transition-transform">
                    <FaCheckCircle size={14} />
                  </div>
                  <h4 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-brand-yellow transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. SEO-FOCUSED DIGITAL MARKETING STRATEGIES ── */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest">
                ✦ AI-Ready Search Engine Architecture
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                SEO-Focused <br />
                <span className="gradient-text-gold">Digital Marketing Strategies</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Search Engine Optimization is one of the most important components of long-term digital marketing success. Businesses that rank on Google for relevant keywords generate consistent organic traffic, improve credibility, and reduce dependency on paid advertising.
              </p>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                As an SEO-focused digital marketing agency in Coimbatore, we help businesses improve visibility through: On-Page SEO, Technical SEO, Local SEO, Content Optimization, AEO Optimization, GEO Optimization, and Google Business Profile Optimization.
              </p>

              {/* Bullet tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['On-page SEO', 'Technical SEO', 'Local SEO', 'AEO Optimization', 'GEO Optimization', 'Topical Authority'].map((badge, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white/5 text-white/70 text-xs sm:text-sm font-semibold select-none">
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: AI-Ready showcase container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-premium p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
                AI Engines Optimization (AEO/GEO)
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                Our SEO strategies are designed not only for traditional search engines but also for AI-driven search experiences such as Google AI Overviews, ChatGPT, Gemini, Claude, Perplexity, and conversational search platforms.
              </p>
              <p className="text-brand-lightblue text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
                WE FOCUS ON CREATING:
              </p>
              <ul className="space-y-3 mb-8">
                {['Semantically optimized content structures', 'Entity-rich schema pages', 'Conversational search optimization triggers', 'Establishment of absolute topical authority', 'AI-readable modular content hierarchies'].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0 mt-1.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              
              {/* AI Logos Badge Panel */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span className="text-white/40 text-xs uppercase tracking-widest font-bold">AI Targets</span>
                <span className="text-white/70 text-xs font-semibold">Overviews ✦ GPT ✦ Gemini ✦ Claude ✦ Perplexity</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. PERFORMANCE MARKETING & PAID ADVERTISING ── */}
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                Target Platform Deployments
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Google Ads', 'Meta Ads', 'Instagram Ads', 'YouTube Ads', 'LinkedIn Ads'].map((adPlatform, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                    <span className="text-white/70 font-semibold text-xs sm:text-sm">{adPlatform}</span>
                  </div>
                ))}
              </div>
              <div className="h-px bg-white/10 my-6" />
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <h4 className="font-display font-bold text-brand-lightblue text-sm sm:text-base">Lead Gen</h4>
                  <p className="text-white/30 text-[10px]">Active Pipelines</p>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <h4 className="font-display font-bold text-brand-purple text-sm sm:text-base">CRO</h4>
                  <p className="text-white/30 text-[10px]">Optimal Paths</p>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <h4 className="font-display font-bold text-brand-yellow text-sm sm:text-base">Lower CAC</h4>
                  <p className="text-white/30 text-[10px]">Max Margins</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Copy details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest">
                ✦ High Conversion Metrics
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                Performance Marketing <br />
                <span className="gradient-text-purple">& Paid Advertising</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Running ads without strategy often leads to wasted marketing budgets and low-quality leads. Effective performance marketing requires audience research, conversion tracking, funnel optimization, ad creative testing, and continuous campaign optimization.
              </p>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                Our paid advertising strategies focus on generating quality leads, sales conversions, lower acquisition costs, and improved ROI. We create and manage campaigns across Google Ads, Meta Ads, Instagram Ads, YouTube Ads, and LinkedIn Ads, utilizing customer intent parameters instead of simply increasing traffic numbers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. SOCIAL MEDIA MARKETING FOR BRAND GROWTH ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Strategic Storytelling
            </div>
            <h2 className="section-title mb-4">
              Social Media Marketing <span className="gradient-text-gold">for Brand Growth</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto text-sm sm:text-base">
              Social media marketing is no longer just about posting content consistently. Modern social media marketing involves audience psychology, storytelling, brand positioning, short-form video strategy, engagement optimization, content distribution, and conversion-focused campaigns.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left: Platforms list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-4 pl-2 border-l-4 border-brand-yellow">
                Creative Content Distributions
              </h3>
              {[
                { name: 'Instagram Campaigns', desc: 'Short-form visual storytelling, reels strategy, and community nurturing.', icon: FaInstagram, color: 'text-pink-400' },
                { name: 'Facebook Funnels', desc: 'Custom audience targeting, pixel tracking, and community groups management.', icon: FaFacebookF, color: 'text-indigo-400' },
                { name: 'LinkedIn B2B Positioning', desc: 'Thought leadership articles, executive branding, and organic industry indexing.', icon: FaLinkedinIn, color: 'text-blue-400' },
                { name: 'YouTube Content Syndication', desc: 'Long-form tutorials, custom thumbnails optimization, and bumper video ads.', icon: FaYoutube, color: 'text-red-400' },
              ].map((platform, i) => (
                <div key={i} className="glass-card p-5 border-white/5 flex items-start gap-4 hover:border-brand-purple/30 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 ${platform.color}`}>
                    <platform.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base mb-1">{platform.name}</h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{platform.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right: Objectives list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-4 pl-2 border-l-4 border-brand-purple">
                How We Help Businesses Grow
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                We help businesses create a stronger online presence through strategic social media marketing campaigns tailored to their industry and audience behavior. Our focus secures:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Brand Awareness', desc: 'Capture massive consumer reach.' },
                  { name: 'Engagement Boost', desc: 'Increase active user threads and likes.' },
                  { name: 'Lead Generation', desc: 'Convert social interactions into inquiry files.' },
                  { name: 'Brand Positioning', desc: 'Maintain custom high-end visual tone.' },
                  { name: 'Customer Retention', desc: 'Nurture compound user loyalty indices.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-yellow/30 transition-colors">
                    <h4 className="font-display font-bold text-brand-yellow text-sm sm:text-base mb-1.5">✦ {item.name}</h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 10. DIGITAL MARKETING SERVICES IN TAMIL NADU ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Localized & Global Coverage
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Digital Marketing Services <span className="gradient-text-purple">in Tamil Nadu</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto text-sm sm:text-base">
              Serving businesses across Coimbatore, Chennai, and Madurai while also working remotely with businesses across India and international clients.
            </p>
          </motion.div>

          {/* Location grid badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {locationBadges.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-card p-6 border border-white/5 hover:border-brand-yellow/30 transition-all duration-300 select-none group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 text-brand-yellow flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110">
                  <FaMapMarkerAlt size={16} />
                </div>
                <h4 className="font-display font-bold text-white text-base sm:text-lg mb-1 group-hover:text-brand-yellow transition-colors">
                  {loc.name}
                </h4>
                <p className="text-white/30 text-[11px] sm:text-xs">{loc.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 max-w-3xl mx-auto text-left"
          >
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed text-center">
              Our remote-first workflow allows us to collaborate efficiently with businesses through online meetings, reporting systems, campaign dashboards, strategy sessions, and digital collaboration tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 11. FAQ ACCORDION SECTION ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-[#03030b] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Client Telemetry FAQs
            </div>
            <h2 className="section-title mb-4">
              Frequently Asked <span className="gradient-text-blue">Questions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about working with Tamil Nadu's premium growth studio.
            </p>
          </div>
          <FAQAccordion faqs={dmFaqs} />
        </div>
      </section>

      {/* ── 12. LET'S BUILD YOUR BUSINESS GROWTH SYSTEM (FORM) ── */}
      <section id="enquiry" className="py-16 lg:py-24 relative overflow-hidden bg-black/40 border-t border-white/5">
        {/* Background glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Conversion Prompt */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest">
                ✦ Grow Smarter & Faster
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                Let's Build Your <br />
                <span className="gradient-text">Business Growth System</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Digital marketing today requires more than basic advertising or random content creation. Businesses need strategic planning, audience understanding, performance tracking, SEO optimization, AI-powered marketing systems, and conversion-focused execution to compete effectively online.
              </p>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                If you are looking for a digital marketing agency in Coimbatore, Chennai, or Madurai that focuses on business growth, lead generation, SEO, paid advertising, social media marketing, and AI-powered digital strategies, our team is ready to help.
              </p>
              <div className="h-px bg-white/10" />
              <div className="space-y-3">
                {['Generating more quality leads', 'Increasing online search visibility', 'Improving organic search rankings', 'Scaling active paid campaigns', 'Building absolute brand authority', 'Optimizing conversions'].map((target, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0 mt-1.5" />
                    <span>{target}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Interactive Form Container */}
            <div className="lg:col-span-7">
              <EnquirySection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

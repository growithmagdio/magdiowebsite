import { motion } from 'framer-motion';
import { 
  FaArrowRight, FaBrain, FaSearch, FaCogs, FaCheckCircle, 
  FaTimesCircle, FaChartLine, FaMapMarkerAlt, 
  FaBullhorn, FaGlobe, FaMobileAlt, FaLaptopCode, FaChartBar,
  FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaRegLightbulb,
  FaCheck, FaTimes, FaBuilding, FaUserCheck, FaTools
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';

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
  { title: 'their website does not rank on Google', desc: 'Invisible search status means potential customers find your competitors instead of you.' },
  { title: 'social media lacks strategy', desc: 'Posting content without strategic intent fails to build trust or generate actionable inquiries.' },
  { title: 'ad campaigns waste money', desc: 'Running ads without targeting filters or tracking results leads to zero quality conversions.' },
  { title: 'branding is inconsistent', desc: 'Mismatched logos, tones, and layouts across channels dilute credibility and authority.' },
  { title: 'customer acquisition costs are too high', desc: 'High CAC structures eat into profit margins, making marketing efforts unsustainable.' },
  { title: 'no proper lead generation system', desc: 'Missing automated pathways leaves your business dependent on unpredictable referrals.' },
];

const solutionCards = [
  { title: 'increase online visibility', desc: 'Rank at the top of search engines and conversational AI recommendations.' },
  { title: 'generate consistent leads', desc: 'Put structured and predictable customer acquisition systems on autopilot.' },
  { title: 'improve sales opportunities', desc: 'Guide high-intent target buyers into optimized conversion funnels.' },
  { title: 'build customer trust', desc: 'Create strong digital brand authority with semantically rich, helpful content.' },
  { title: 'strengthen brand awareness', desc: 'Maintain cohesive multi-channel presence that increases brand loyalty.' },
  { title: 'reduce dependency on referrals', desc: 'Drive outbound and inbound pipelines systematically through automated engines.' },
  { title: 'improve ROI from investments', desc: 'Optimize tracking to make sure every dollar of ad spend yields profit.' },
];

const locationBadges = [
  { name: 'Chennai', desc: 'Primary Service Operations' },
  { name: 'Coimbatore', desc: 'Studio Hub Engagements' },
  { name: 'Madurai', desc: 'Regional Expansion Frameworks' },
];

const dmFaqs = [
  {
    q: 'What does a digital marketing company do?',
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
    q: 'Do you provide digital marketing services only in Chennai?',
    a: 'No. Magdio provides digital marketing services in Chennai, Coimbatore, Trichy and Madurai while also working remotely with businesses across India and international clients.'
  },
  {
    q: 'How is Magdio different from other digital marketing agencies?',
    a: 'Magdio focuses on strategy, performance marketing, AI-powered systems, SEO, and business growth instead of just posting content or running random ads. Our approach is built around leads, conversions, and scalable growth systems.'
  },
  {
    q: 'What should I check before hiring a digital marketing company?',
    a: 'Before hiring a digital marketing company, businesses should check experience, reporting process, communication, strategy approach, case studies, and transparency. Magdio believes in strategy-first marketing with clear reporting and measurable goals.'
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
    <div className="page-bg min-h-screen pt-0 pb-0 bg-[#03030b]">
      <SEO 
        title="Best Digital Marketing Company In Chennai | MAGDIO" 
        description="Magdio offers result-driven digital marketing services in Chennai, including SEO, Google Ads, branding and social media marketing strategies for online growth." 
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Marketing Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "MAGDIO"
          },
          "areaServed": ["Chennai", "Coimbatore", "Madurai", "Tamil Nadu"]
        }}
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
          <div className="flex justify-center mb-4">
            <Breadcrumb items={[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: 'Marketing', path: '/services/marketing' },
              { label: 'Digital Marketing' }
            ]} />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
            Performance & Growth Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Digital Marketing Company <br className="hidden sm:inline" />
            <span className="gradient-text-gold">In Chennai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            Businesses today need more than just social media posting or running random ads. Modern businesses require a complete digital marketing strategy that helps them increase visibility, generate qualified leads, improve conversions, and build long-term brand authority online.
          </motion.p>

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
              Talk to a Digital Marketing Expert
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-6 text-left border-t border-white/10 pt-12 max-w-4xl mx-auto"
          >
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm leading-relaxed">
                We are a results-driven digital marketing company in chennai helping startups, local businesses, ecommerce brands, SaaS companies, and service-based businesses grow through SEO, Google Ads, social media marketing, Meta Ads, AI-powered marketing strategies, and performance-driven digital campaigns.
              </p>
            </div>
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm leading-relaxed">
                Our team works with businesses across Coimbatore, Chennai, Madurai, and other locations remotely to create scalable digital growth systems focused on real business outcomes instead of vanity metrics. Whether your goal is lead generation, online branding, website traffic growth, customer acquisition, or sales optimization, we create customized digital marketing solutions tailored to your business objectives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. WHAT MAKES MAGDIO DIFFERENT ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Value Proposition
            </div>
            <h2 className="section-title mb-4">
              What Makes <span className="gradient-text-gold">MAGDIO Different?</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-white/60">
              We leverage modern platforms, analytics and AI tools to deliver compound brand outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'AI-Powered Marketing Strategies', desc: 'Integrating generative optimization and automated search workflows.' },
              { title: 'Data-Driven Decision Making', desc: 'Relying strictly on metrics, telemetry, and conversion analytics.' },
              { title: 'SEO, GEO & AEO Optimization', desc: 'Ensuring discoverability across Google Search, ChatGPT, Gemini, and Claude.' },
              { title: '100% Transparent Reporting', desc: 'Access to interactive dashboards and clear performance reviews.' },
              { title: 'Performance-Focused Campaigns', desc: 'Aligning marketing structures to leads, sales, and high margin metrics.' },
              { title: 'Multi-Channel Expertise', desc: 'Cohesive branding and ads setup across social, search, and mail channels.' },
              { title: 'Local & Global Experience', desc: 'Strategies suited for Chennai retail stores or international enterprise brands.' }
            ].map((diff, i) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="glass-card p-6 border border-white/5 hover:border-brand-purple/35 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <FaCheck className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-brand-yellow transition-colors">
                  {diff.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">
                  {diff.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHAT IS DIGITAL MARKETING ── */}
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-premium p-8 border border-white/10 relative overflow-hidden shadow-2xl"
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
                  <h4 className="font-display font-black text-white text-xl mb-1">Targeted</h4>
                  <p className="text-white/40 text-xs">Reach Exact Buyers</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-brand-yellow text-xl mb-1">Measurable</h4>
                  <p className="text-white/40 text-xs">Real-time Data Insights</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. AI-POWERED SERVICES IN DETAIL ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Advanced Market Engineering
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
        </div>
      </section>

      {/* ── 5. SERVICES CAPABILITIES GRID ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ What Digital Marketing Services Does MAGDIO Offer?
            </div>
            <h2 className="section-title mb-4">
              Our Core <span className="gradient-text-purple">Digital Marketing Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Each service is designed to support different stages of your customer journey, from visibility and traffic generation to lead conversion and long-term customer retention.
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

      {/* ── 6. WHY BUSINESSES NEED DIGITAL MARKETING ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
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
                Many businesses struggle because:
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
                A strong digital marketing strategy helps:
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

      {/* ── 7. WHY CHOOSE OUR DIGITAL MARKETING COMPANY ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
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
                  ✦ Strategic Advantage
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Our <br className="hidden sm:inline" />
                  <span className="gradient-text-purple">Digital Marketing Company?</span>
                </h2>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-6">
                  Choosing the right digital marketing company can directly impact your business growth, online visibility, and marketing ROI. With over 5+ years of experience, MAGDIO has been helping businesses build their online presence, attract more customers, and achieve measurable results through smart, data-driven marketing.
                </p>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base mb-8">
                  Our approach is different. We focus on building marketing systems that generate measurable business results through SEO, paid advertising, social media marketing, content strategy, and automation.
                </p>
              </motion.div>
            </div>

            {/* Right Col: 2 Feature Lists */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 border border-white/5">
                <h3 className="font-display font-bold text-white text-base sm:text-lg mb-4 text-brand-yellow flex items-center gap-2">
                  <FaUserCheck size={14} /> We take time to understand:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Your business model',
                    'Target audience',
                    'Industry competition',
                    'Customer behavior',
                    'Current marketing challenges',
                    'Conversion opportunities'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 border border-white/5">
                <h3 className="font-display font-bold text-white text-base sm:text-lg mb-4 text-brand-purple flex items-center gap-2">
                  <FaTools size={14} /> Unlike traditional agencies, we combine:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Marketing strategy',
                    'AI-driven insights',
                    'Search engine optimization',
                    'Paid advertising',
                    'Audience analytics',
                    'Conversion-focused execution'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. SEO-FOCUSED DIGITAL MARKETING STRATEGIES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
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
              <p className="text-white/60 text-sm leading-relaxed">
                Search Engine Optimization is one of the most important components of long-term digital marketing success. Businesses that rank on Google for relevant keywords generate consistent organic traffic, improve credibility, and reduce dependency on paid advertising.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                As an SEO-focused digital marketing company in Chennai, we help businesses improve visibility through: on-page SEO, technical SEO, local SEO, content optimization, AEO optimization, GEO optimization, and Google Business Profile optimization.
              </p>

              {/* Bullet tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['on-page SEO', 'technical SEO', 'local SEO', 'content optimization', 'AEO optimization', 'GEO optimization', 'Google Business Profile'].map((badge, idx) => (
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
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Our SEO strategies are designed not only for traditional search engines but also for AI-driven search experiences such as Google AI Overviews, ChatGPT, Gemini, Claude, Perplexity, and conversational search platforms.
              </p>
              <p className="text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
                WE FOCUS ON CREATING:
              </p>
              <ul className="space-y-3 mb-8">
                {['semantically optimized content', 'entity-rich pages', 'conversational search optimization', 'topical authority', 'AI-readable content structures'].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0 mt-1.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. PERFORMANCE MARKETING & PAID ADVERTISING ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
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
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <h4 className="font-display font-bold text-brand-lightblue text-sm sm:text-base">quality leads</h4>
                  <p className="text-white/30 text-[10px]">Active Pipelines</p>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                  <h4 className="font-display font-bold text-brand-yellow text-sm sm:text-base">lower acquisition costs</h4>
                  <p className="text-white/30 text-[10px]">Max ROI</p>
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
                ✦ High Conversion Paid Media
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                Performance Marketing <br />
                <span className="gradient-text-purple">& Paid Advertising</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Running ads without strategy often leads to wasted marketing budgets and low-quality leads. Effective performance marketing requires audience research, conversion tracking, funnel optimization, ad creative testing, and continuous campaign optimization.
              </p>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed">
                Our paid advertising strategies focus on generating quality leads, sales conversions, lower acquisition costs, and improved ROI. We create and manage campaigns across Google Ads, Meta Ads, Instagram Ads, YouTube Ads, and LinkedIn Ads, targeting customer intent instead of simply increasing traffic numbers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 10. SOCIAL MEDIA MARKETING FOR BRAND GROWTH ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Strategic Brand Presence
            </div>
            <h2 className="section-title mb-4">
              Social Media Marketing <span className="gradient-text-gold">for Brand Growth</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto text-sm sm:text-base">
              Social media marketing is no longer just about posting content consistently. Modern social media marketing involves audience psychology, storytelling, brand positioning, short-form video strategy, engagement optimization, content distribution, and conversion-focused campaigns.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="font-display font-bold text-lg sm:text-xl text-white pl-2 border-l-4 border-brand-yellow">
                Positioning Your Brand
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                We help businesses create a stronger online presence through strategic social media marketing campaigns tailored to their industry and audience behavior.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Increase brand awareness',
                  'Improve audience engagement',
                  'Generate leads',
                  'Strengthen brand identity',
                  'Build trust with customers',
                  'Improve customer retention'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Platforms */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 border-white/5 space-y-4"
            >
              <h3 className="font-display font-bold text-lg text-white mb-4">Core Media Networks</h3>
              <p className="text-white/40 text-xs sm:text-sm">
                We align content strategies designed for modern platforms while focusing on customer metrics that drive business conversions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Instagram Marketing', 'Facebook Marketing', 'LinkedIn Ads', 'YouTube Ads'].map(plat => (
                  <span key={plat} className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-white/80 text-xs font-bold uppercase tracking-wider">
                    {plat}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 11. GEOGRAPHIC COVERAGE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Geographic Coverage
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Digital Marketing Services <span className="gradient-text-purple">in Chennai</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto text-sm sm:text-base">
              We provide professional digital marketing services for businesses in Chennai, Coimbatore and Madurai while also working remotely with businesses across India and international clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
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

          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 max-w-3xl mx-auto text-left space-y-4">
            <h4 className="font-display font-bold text-white text-sm text-center uppercase tracking-widest text-brand-yellow">Remote-First Growth Workflows:</h4>
            <div className="grid sm:grid-cols-5 gap-3 text-center">
              {['online meetings', 'reporting systems', 'campaign dashboards', 'strategy sessions', 'digital collaboration'].map(wf => (
                <div key={wf} className="p-3 rounded-lg bg-white/5 border border-white/5 text-white/70 text-xs font-semibold">
                  {wf}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. INDUSTRIES WE SERVE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Domain Verticals
            </div>
            <h2 className="section-title mb-4">
              Industries <span className="gradient-text-gold">We Serve</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-white/60">
              While every business is different, many industries face similar digital marketing challenges. Instead of applying the same strategy to every industry, we adapt our approach based on customer behavior, competition, and business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              'Healthcare', 'Education', 'Real Estate', 'Manufacturing', 
              'Information Technology', 'Retail & E-commerce', 'Hospitality', 
              'Automotive', 'Startups', 'SaaS Companies'
            ].map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-brand-purple/20 transition-all text-center group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 text-brand-yellow flex items-center justify-center mx-auto mb-2 transition-transform group-hover:scale-110">
                  <FaBuilding size={14} />
                </div>
                <h4 className="font-display font-bold text-white text-xs sm:text-sm">{ind}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. CASE STUDIES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Verified Business Growth
            </div>
            <h2 className="section-title mb-4">
              Case Studies: How We Turn Strategy <span className="gradient-text-purple">into Business Growth</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto text-white/60">
              No two businesses grow the same way. Some aim to generate 500+ qualified leads, others want to achieve 5X growth in organic visibility, increase 300% more website traffic, improve local search rankings, or maximize their return on advertising spend.
            </p>
          </motion.div>

          <div className="glass-card p-8 border border-white/5 max-w-4xl mx-auto space-y-6">
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Before launching any campaign, we take the time to understand your business, target audience, competitors, and growth objectives. From there, we build a customized marketing plan that combines SEO, Google Ads, social media marketing, content marketing, and AI-driven optimization to deliver measurable business outcomes.
            </p>
            <div className="h-px bg-white/5" />
            <h4 className="font-display font-bold text-white text-base">Key Growth Results Achieved:</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { val: '500+', lab: 'Qualified Leads', desc: 'Generated through paid performance campaigns.' },
                { val: '500K+', lab: 'Organic Impressions', desc: 'Achieved with strategic search optimization.' },
                { val: '#1', lab: 'Google Rankings', desc: 'For competitive high-intent buyer keywords.' },
                { val: '₹5L+', lab: 'Revenue Influenced', desc: 'Driven by digital marketing execution.' }
              ].map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-purple/20 transition-all text-center">
                  <h3 className="font-display font-black text-2xl text-brand-yellow">{stat.val}</h3>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mt-1">{stat.lab}</h4>
                  <p className="text-white/40 text-[10px] sm:text-xs mt-1 leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <a
                href="/portfolio"
                className="text-brand-yellow hover:text-white inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors"
              >
                Explore Case Studies Portfolio <FaArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-brand-blue/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Let’s Build Your <span className="gradient-text-gold">Business Growth System</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base sm:text-lg mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Digital marketing today requires more than basic advertising or random content creation. Businesses need strategic planning, audience understanding, performance tracking, SEO optimization, AI-powered marketing systems, and conversion-focused execution to compete effectively online.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary text-base sm:text-lg px-10 py-4 shadow-[0_0_40px_rgba(242,179,0,0.3)] hover:shadow-[0_0_60px_rgba(242,179,0,0.5)]"
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 15. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="gradient-text-purple">Questions</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our digital marketing services.</p>
          </div>
          <FAQAccordion faqs={dmFaqs} />
        </div>
      </section>

      {/* ── 16. ENQUIRY SECTION ── */}
      <div id="enquiry">
        <EnquirySection />
      </div>
    </div>
  );
}

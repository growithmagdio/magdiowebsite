import { motion } from 'framer-motion';
import { 
  FaArrowRight, FaBrain, FaSearch, FaCogs, FaCheckCircle, 
  FaChartLine, FaMapMarkerAlt, 
  FaBullhorn, FaGlobe, FaMobileAlt, FaLaptopCode, FaChartBar,
  FaWhatsapp, FaRegLightbulb, FaRobot, FaDatabase, FaListUl,
  FaProjectDiagram, FaServer, FaUserCheck, FaTools, FaCheck
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

// Dynamic data constants
const experienceStats = [
  { value: '5+ Years', label: 'Marketing Expertise', desc: 'Helping businesses grow through AI-powered digital marketing since 2021.', icon: FaChartLine },
  { value: '120+', label: 'Businesses Served', desc: 'Partnering with startups, SMEs, and established brands to deliver growth.', icon: FaGlobe },
  { value: '250+', label: 'Websites Optimized', desc: 'Building clear entity signals and trust profiles for modern AI search.', icon: FaLaptopCode },
  { value: '6 Countries', label: 'Global Footprint', desc: 'Serving clients in India, UAE, UK, US, Australia, and Japan.', icon: FaMapMarkerAlt },
  { value: '503K+', label: 'Organic Impressions', desc: 'Increasing search impressions through strategic entity and content SEO.', icon: FaSearch },
  { value: '₹5L+', label: 'AI Sales Influenced', desc: 'Driving qualified leads and revenue through AI-powered discovery.', icon: FaBrain },
  { value: '98%', label: 'Retention Rate', desc: 'Building long-term partnerships through transparency and performance.', icon: FaUserCheck }
];

const whyChoosePoints = [
  { title: 'AI-First Digital Marketing', desc: 'We don\'t rely solely on traditional SEO techniques. Every GEO strategy is designed to improve how AI platforms understand, evaluate, and recommend your business.' },
  { title: 'Human-Centric, AI-Friendly', desc: 'Our content is written for people first while ensuring AI systems can accurately interpret your expertise, products, and services.' },
  { title: 'Data-Driven Optimization', desc: 'Every recommendation is backed by website audits, competitor analysis, entity research, structured data, user behavior insights, and performance metrics.' },
  { title: 'Complete AI Ecosystem Visibility', desc: 'Instead of optimizing for a single platform, we help businesses build visibility across the entire AI search ecosystem.' },
  { title: 'Transparent Reporting', desc: 'You\'ll receive clear reporting, measurable KPIs, and ongoing optimization recommendations throughout your campaign.' },
  { title: 'Long-Term Growth Focus', desc: 'Rather than chasing short-term rankings, we build sustainable digital authority that continues to generate visibility and qualified leads over time.' }
];

const geoServicesList = [
  { name: 'AI Visibility Audit', desc: 'Complete analysis of how AI search engines perceive your website, authority, structured data, and knowledge graphs.', icon: FaSearch, border: 'hover:border-blue-500/50' },
  { name: 'ChatGPT Optimization', desc: 'Optimize content structure, citation factors, and entity relationships to be recommended by ChatGPT.', icon: FaRobot, border: 'hover:border-emerald-500/50' },
  { name: 'Google AI Overviews', desc: 'Improve content formatting, semantic tags, and EEAT signals to qualify for Google AI Overview summaries.', icon: FaGoogleIconPlaceholder, border: 'hover:border-red-500/50' },
  { name: 'Google AI Mode', desc: 'Structure contents and direct answers to align with Google\'s conversational search interfaces.', icon: FaCogs, border: 'hover:border-purple-500/50' },
  { name: 'Gemini Optimization', desc: 'Align your business entity and services with Google\'s advanced Gemini ecosystem.', icon: FaBrain, border: 'hover:border-pink-500/50' },
  { name: 'Microsoft Copilot', desc: 'Strengthen web authority and index status within Bing and Microsoft Copilot systems.', icon: FaLaptopCode, border: 'hover:border-blue-400/50' },
  { name: 'Perplexity AI Optimization', desc: 'Build high-quality, citation-worthy data points and insights that Perplexity can quote.', icon: FaGlobe, border: 'hover:border-teal-500/50' },
  { name: 'Claude AI Optimization', desc: 'Create deep, descriptive, well-structured guides emphasizing expertise and trustworthiness.', icon: FaRegLightbulb, border: 'hover:border-orange-500/50' },
  { name: 'Entity SEO', desc: 'Optimize business, founder, products, and location entities to build machine readability.', icon: FaProjectDiagram, border: 'hover:border-indigo-500/50' },
  { name: 'Knowledge Graph Optimization', desc: 'Connect your business with people, services, and directories to build a solid knowledge base.', icon: FaDatabase, border: 'hover:border-purple-600/50' },
  { name: 'Schema Markup Optimization', desc: 'Detailed implementation of LocalBusiness, Service, FAQ, Product, and Article schemas.', icon: FaServer, border: 'hover:border-yellow-500/50' },
  { name: 'AI Content Strategy', desc: 'Create pillar pages, topic clusters, and buying guides designed for humans and AI parsing.', icon: FaBullhorn, border: 'hover:border-brand-purple/50' },
  { name: 'AI Citation Building', desc: 'Generate brand mentions, digital PR, and directory listings across highly trusted platforms.', icon: FaChartLine, border: 'hover:border-green-500/50' },
  { name: 'Topical Authority Development', desc: 'Construct deep content ecosystems around your core industry to demonstrate complete expertise.', icon: FaListUl, border: 'hover:border-rose-500/50' },
  { name: 'AI-Friendly Website Optimization', desc: 'Boost Core Web Vitals, speed, crawlability, and layout for seamless agent navigation.', icon: FaMobileAlt, border: 'hover:border-cyan-500/50' },
  { name: 'Local GEO Optimization', desc: 'Optimize for regional queries (Chennai, Tamil Nadu) in AI platform local searches.', icon: FaMapMarkerAlt, border: 'hover:border-red-600/50' },
  { name: 'GEO Performance Monitoring', desc: 'Ongoing tracking of brand visibility, competitor benchmarking, and continuous updates.', icon: FaChartBar, border: 'hover:border-yellow-600/50' }
];

// Helper to provide a Google placeholder icon
function FaGoogleIconPlaceholder(props) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 488 512" height={props.size || "1em"} width={props.size || "1em"} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
    </svg>
  );
}

const geoFaqs = [
  {
    q: 'What is Generative Engine Optimization (GEO)?',
    a: 'Generative Engine Optimization (GEO) is the process of optimizing your website, content, and digital presence so AI-powered search platforms can understand, trust, and recommend your business in AI-generated responses.'
  },
  {
    q: 'How is GEO different from traditional SEO?',
    a: 'SEO focuses primarily on improving rankings in traditional search engines, while GEO is designed to increase your visibility within AI-generated answers. GEO combines SEO, Entity Optimization, Structured Data, Knowledge Graphs, and AI-friendly content strategies.'
  },
  {
    q: 'Does GEO replace SEO?',
    a: 'No. GEO complements SEO rather than replacing it. Businesses achieve the best results when SEO and GEO work together as part of a comprehensive digital marketing strategy.'
  },
  {
    q: 'Which AI platforms does MAGDIO optimize for?',
    a: 'Our GEO strategies are designed to improve visibility across ChatGPT, Google AI Overviews, Google Gemini, Claude AI, Microsoft Copilot, and Perplexity AI.'
  },
  {
    q: 'How long does GEO take to show results?',
    a: 'Timelines vary depending on your website\'s authority, industry, competition, and current optimization. Many businesses begin seeing improvements within 2–4 months, while stronger AI visibility typically develops over 3–6 months through consistent optimization.'
  },
  {
    q: 'Can GEO help local businesses in Chennai and Tamil Nadu?',
    a: 'Absolutely. GEO helps local businesses become more discoverable when users ask AI platforms for recommendations, services, products, or businesses in specific locations such as Chennai, Coimbatore, Madurai, Salem, and across Tamil Nadu.'
  },
  {
    q: 'Do you provide AI Visibility Audits?',
    a: 'Yes. We offer comprehensive AI Visibility Audits that evaluate your current presence across AI-powered search platforms and identify opportunities to improve discoverability.'
  },
  {
    q: 'Why should I choose MAGDIO as my GEO agency?',
    a: 'MAGDIO combines AI-first strategies, technical SEO expertise, Entity Optimization, structured data implementation, and real-world experience to help businesses improve visibility across both traditional search engines and AI-powered search experiences.'
  }
];

export default function GeoServicesPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0">
      <SEO 
        title="GEO Service Agency in Chennai | GEO Expert Chennai | MAGDIO" 
        description="MAGDIO is the best GEO company in Chennai, helping businesses improve visibility across AI platforms with expert Generative Engine Optimization(GEO) services." 
        canonicalUrl="https://www.magdio.com/geo-services-agency-chennai-magdio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Generative Engine Optimization (GEO) Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "MAGDIO"
          },
          "areaServed": "Tamil Nadu"
        }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-24 pb-32 md:pt-36 md:pb-44 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03030b]/85 via-[#06071a]/95 to-[#03030b] z-10" />
          <div
            className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #8A2BE2, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, #1A22B8, transparent 70%)' }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
            AI-Powered Search Optimization (GEO)
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            GEO Service Agency <span className="gradient-text">In Chennai</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-white/90 mb-6 max-w-4xl mx-auto font-display"
          >
            Future-Proof Your Business with AI-Powered Search Optimization
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            Search has evolved beyond traditional search engines. Today, millions of users rely on AI platforms like ChatGPT, Google AI Overviews, Gemini, Claude and Perplexity AI to discover businesses, compare services, and make purchasing decisions. If your business isn't visible in AI-generated answers, you're missing valuable opportunities to connect with high-intent customers.
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
              Talk to a GEO Expert
            </button>
            <a
              href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20GEO%20experts."
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
                At MAGDIO, we help businesses become found across both search engines and AI-powered platforms through our Generative Engine Optimization (GEO) Services. As a leading GEO Service Agency in Chennai, we combine AI expertise, semantic SEO, structured data, entity optimization, and content strategy to improve your brand's authority and AI visibility.
              </p>
            </div>
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm leading-relaxed">
                Whether you're a startup, growing business, or enterprise, our customized Generative Engine Optimization Services in Chennai are designed to ensure your business is recognized, trusted, and recommended by modern AI search engines.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. EXPERIENCE STATS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Why Businesses Trust MAGDIO
            </div>
            <h2 className="section-title mb-4">
              Our Experience <span className="gradient-text-purple">At A Glance</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our experience goes beyond improving rankings—we help businesses build lasting authority that search engines and AI platforms recognize.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="glass-card p-6 flex flex-col justify-between border border-white/5 hover:border-brand-purple/30 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-brand-yellow flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-1">
                      {stat.value}
                    </h3>
                    <h4 className="text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-2">
                      {stat.label}
                    </h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. UNDERSTANDING GEO ── */}
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
                What is <br className="hidden sm:inline" />
                <span className="gradient-text-purple">Generative Engine Optimization?</span>
              </h2>
              
              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-lightblue flex items-center justify-center shrink-0 border border-brand-blue/30">
                  <FaBrain size={18} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-white text-base">Helping Your Business Get Recommended by AI Search Engines</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    The way people search for information has fundamentally changed. Instead of browsing through multiple search results, users now ask AI platforms direct questions and receive instant recommendations. Platforms like ChatGPT, Google AI Overviews, Gemini, Claude, and Perplexity AI analyze information from trusted websites and generate personalized answers.
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <FaGlobe size={18} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-white text-base">Becoming a Trusted AI Source</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Your website may rank well on Google, but if AI systems cannot understand, trust, or reference your content, your business may never appear in AI-generated recommendations. This is where GEO comes in. As a leading GEO company in Chennai, MAGDIO helps businesses optimize their digital presence so AI search engines can recognize, understand, and recommend their brand with confidence.
                  </p>
                </div>
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
                <FaCheckCircle className="text-brand-yellow" /> Evolution of Discovery
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Over the past five years, we've seen AI search evolve from experimental tools into a major discovery channel. Across websites we've optimized, one consistent trend stands out: businesses with clear entity signals, comprehensive content, and consistent brand information are more likely to be referenced in AI-generated responses. Publishing more pages alone isn't enough—AI systems reward clarity, authority, and trust.
              </p>
              <div className="h-px bg-white/10 mb-6" />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-white text-xl mb-1">Clarity</h4>
                  <p className="text-white/40 text-xs">Structured Metadata</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-brand-yellow text-xl mb-1">Trust</h4>
                  <p className="text-white/40 text-xs">Verified Mentions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE MAGDIO ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ What Sets Us Apart
            </div>
            <h2 className="section-title mb-4">
              Why Choose MAGDIO as Your <span className="gradient-text-gold">GEO Agency in Chennai?</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Choosing the right GEO partner isn't just about improving search rankings—it's about preparing your business for the future of AI-powered search. MAGDIO combines years of digital marketing expertise with the latest AI optimization strategies to help businesses become trusted entities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="glass-card p-6 border border-white/5 hover:border-brand-purple/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 mt-0.5 border border-brand-yellow/20">
                    <FaCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-brand-yellow transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. COMPARISON TABLE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Understanding the Difference
            </div>
            <h2 className="section-title mb-4">
              GEO vs SEO vs AEO <span className="gradient-text-purple">Comparison</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The three strategies are not competitors—they complement each other. We integrate all three into a unified digital strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto glass-card border border-white/5 rounded-2xl p-2 sm:p-6"
          >
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-white font-display font-bold text-sm uppercase">
                  <th className="py-4 px-4 text-brand-lightblue">Criteria</th>
                  <th className="py-4 px-4 bg-white/[0.02]">SEO</th>
                  <th className="py-4 px-4">AEO</th>
                  <th className="py-4 px-4 bg-brand-purple/10 text-brand-yellow">GEO</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold text-white font-display">Target Systems</td>
                  <td className="py-4 px-4 bg-white/[0.02]">Google Search & Search Engines</td>
                  <td className="py-4 px-4">Featured snippets & direct answers</td>
                  <td className="py-4 px-4 bg-brand-purple/5 font-semibold text-white">AI Search, LLMs & ChatGPT</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold text-white font-display">Optimization Focus</td>
                  <td className="py-4 px-4 bg-white/[0.02]">Keywords, crawlability, backlinks</td>
                  <td className="py-4 px-4">Concise answers, structured lists</td>
                  <td className="py-4 px-4 bg-brand-purple/5 font-semibold text-white">Entities, brand trust, AI context</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold text-white font-display">Primary Goal</td>
                  <td className="py-4 px-4 bg-white/[0.02]">Ranking on search results</td>
                  <td className="py-4 px-4">Answering queries directly</td>
                  <td className="py-4 px-4 bg-brand-purple/5 font-semibold text-white">Becoming the business AI recommends</td>
                </tr>
                <tr className="hover:bg-white/[0.01]">
                  <td className="py-4 px-4 font-bold text-white font-display">Core Audience</td>
                  <td className="py-4 px-4 bg-white/[0.02]">Search Engine Focused</td>
                  <td className="py-4 px-4">Answer Engine Focused</td>
                  <td className="py-4 px-4 bg-brand-purple/5 font-semibold text-white text-brand-yellow">Generative AI Engine Focused</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 6. WHY YOUR BUSINESS NEEDS GEO NOW ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest">
                ✦ The 2026 Shift
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
                Why Your Business <br />
                <span className="gradient-text-gold">Needs GEO Now</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                AI-powered search is becoming a primary source of information for consumers, professionals, and decision-makers. Unlike traditional search engines, AI evaluates your entire digital presence before recommending your business. If your signals are weak or inconsistent, your business is less likely to appear in AI-generated responses.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Discover trusted businesses',
                  'Compare products and services',
                  'Research industries',
                  'Find local companies',
                  'Evaluate brands',
                  'Ask follow-up questions',
                  'Make purchasing decisions'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
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
              className="glass-card p-8 border border-white/5 space-y-6"
            >
              <h3 className="font-display font-bold text-xl text-white">Signals Evaluated by AI Search Engines:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Brand authority', desc: 'Reputation & online mentions' },
                  { title: 'Website expertise', desc: 'High-quality technical content' },
                  { title: 'Entity relationships', desc: 'Clear industry association' },
                  { title: 'Structured data', desc: 'Rich schemas & tags' },
                  { title: 'Content quality', desc: 'Experience & insights' },
                  { title: 'Customer trust', desc: 'Reviews & customer feedback' },
                  { title: 'Consistent info', desc: 'NAP & brand info clarity' },
                  { title: 'Citations', desc: 'Citations across web domains' }
                ].map((signal, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                    <h4 className="font-display font-bold text-white text-sm">{signal.title}</h4>
                    <p className="text-white/40 text-xs">{signal.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. MAGDIO GEO FRAMEWORK ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Methodology
            </div>
            <h2 className="section-title mb-4">
              Introducing the <span className="gradient-text-purple">MAGDIO GEO Framework</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our proprietary MAGDIO GEO Framework combines technical optimization, semantic content, entity SEO, structured data, and continuous AI monitoring into one strategic process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 'Step 1', title: 'AI Visibility Audit', desc: 'We evaluate how AI platforms currently understand your business by analyzing brand mentions, entity recognition, AI search visibility, website authority, schema health, and Knowledge Graph presence.' },
              { step: 'Step 2', title: 'Entity & Brand Optimization', desc: 'Modern AI search engines rely heavily on entities rather than keywords. We strengthen your digital identity by optimizing brand consistency, organization schemas, founder bios, and industry associations.' },
              { step: 'Step 3', title: 'AI-Friendly Content Strategy', desc: 'Our content strategy focuses on creating comprehensive, experience-driven service pages, location pages, resource clusters, and FAQs that satisfy both user search intent and AI parsing models.' },
              { step: 'Step 4', title: 'Schema & Structured Data', desc: 'Structured data acts as a machine-readable roadmap. We implement LocalBusiness, Service, FAQ, Product, and Organization schemas to guarantee AI platforms interpret your content with absolute precision.' },
              { step: 'Step 5', title: 'AI Citation & Authority Building', desc: 'AI engines prioritize brands backed by external trust. We increase your credibility via brand mentions, digital PR, directory listings, Knowledge Graph optimization, and citation networks.' },
              { step: 'Step 6', title: 'Continuous AI Monitoring', desc: 'AI search models update rapidly. We continuously track your visibility on ChatGPT, Google AI Overviews, Gemini, Claude, and Perplexity, updating your content to maintain recommendations.' }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="glass-card p-8 border border-white/5 relative overflow-hidden group hover:border-brand-purple/35 transition-colors duration-300"
              >
                <span className="absolute top-4 right-4 text-brand-purple/20 font-black text-6xl group-hover:text-brand-purple/30 transition-colors">
                  {item.step.split(' ')[1]}
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
                  {item.step}
                </span>
                <h3 className="font-display font-bold text-white text-lg mb-3 relative z-10 group-hover:text-brand-yellow transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PLATFORMS WE OPTIMIZE FOR ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Targeted Platforms
            </div>
            <h2 className="section-title mb-4">
              AI Platforms We <span className="gradient-text-gold">Optimize For</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our GEO services are designed to improve your visibility across today's most influential AI-powered search platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: 'ChatGPT Optimization', desc: 'We optimize your content, entity signals, and authority to increase the likelihood of being referenced and recommended in ChatGPT responses.' },
              { name: 'Google AI Overviews', desc: 'Our strategies help your content qualify for AI-generated summaries appearing at the top of Google Search.' },
              { name: 'Google AI Mode', desc: 'We prepare your website for Google\'s conversational search experience by improving semantic relevance and structured content.' },
              { name: 'Google Gemini', desc: 'We optimize content to align with Google\'s AI ecosystem and knowledge graph understanding.' },
              { name: 'Microsoft Copilot', desc: 'We strengthen your digital authority to improve discoverability within Microsoft\'s AI-powered search experience.' },
              { name: 'Claude AI', desc: 'We structure content around expertise, trustworthiness, and clarity to enhance visibility within Claude\'s AI responses.' },
              { name: 'Perplexity AI', desc: 'We build citation-worthy content that Perplexity AI can reference as trusted information.' }
            ].map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="glass-card p-6 border border-white/5 hover:border-brand-yellow/30 transition-all duration-300"
              >
                <h3 className="font-display font-bold text-white text-base sm:text-lg mb-3 hover:text-brand-yellow transition-colors">
                  {platform.name}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                  {platform.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. SERVICES GRID ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Complete GEO Solutions
            </div>
            <h2 className="section-title mb-4">
              Our Generative Engine <span className="gradient-text-purple">Optimization Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              At MAGDIO, we don't believe in a one-size-fits-all approach. Our GEO Services in Chennai are tailored to your industry, target audience, and business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {geoServicesList.map((service, i) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.05, duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className={`glass-card p-6 flex flex-col justify-between border border-white/5 ${service.border} transition-all duration-300 group min-h-[200px] cursor-pointer`}
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

      {/* ── 10. WHY OUR GEO WORKS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest">
                ✦ High Performance Strategy
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
                Why Our GEO Process <br />
                <span className="gradient-text-gold">Delivers Better Results</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Unlike traditional agencies that focus only on rankings, MAGDIO optimizes your business for the complete AI search ecosystem. This methodology improves your chances of being recommended across multiple AI platforms—not just ranking in search results.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Technical SEO & Site Speed',
                  'Semantic SEO & Topic Clusters',
                  'Entity SEO & Knowledge Mapping',
                  'Structured Schema Markups',
                  'AI-Oriented Content Optimization',
                  'Knowledge Graph Verification',
                  'Digital Authority & Citations',
                  'Ongoing AI Visibility & Performance Tracking'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-premium p-8 border border-white/10 relative overflow-hidden shadow-2xl space-y-6"
            >
              <h3 className="font-display font-bold text-xl text-white">Traditional SEO vs MAGDIO GEO</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                  <h4 className="font-display font-bold text-red-400 text-sm mb-1">Traditional SEO Agencies Focus On:</h4>
                  <p className="text-white/50 text-xs">Google rankings, Keywords, Backlinks, Traffic reports</p>
                </div>
                <div className="p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20">
                  <h4 className="font-display font-bold text-brand-yellow text-sm mb-1">MAGDIO Focuses On:</h4>
                  <p className="text-white/80 text-xs">AI Visibility, Entity SEO, Knowledge Graph Optimization, Semantic Content, AI Citations, Structured Data, Google AI Overviews, ChatGPT Discoverability, Perplexity/Claude/Gemini Optimization</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 11. CASE STUDIES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Success Stories
            </div>
            <h2 className="section-title mb-4">
              Real Business <span className="gradient-text-purple">Success Stories</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our strategies are built on real-world experience and measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Case Study 1: Badie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 border border-white/5 hover:border-brand-purple/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
                  Musical Instrument Store
                </span>
                <h3 className="font-display font-black text-2xl text-white mb-2">1. Badie</h3>
                <p className="text-white/40 text-xs mb-4">Qatar</p>
                <div className="h-px bg-white/5 my-4" />
                <h4 className="font-bold text-white text-sm mb-2">Challenge & Strategy</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                  Badie wanted to improve its visibility beyond traditional Google search. The objective was to ensure potential customers could discover the brand when using AI-powered search platforms. MAGDIO implemented a comprehensive Generative Engine Optimization strategy including entity SEO, Knowledge Graph, advanced schema, and content restructuring.
                </p>
                <h4 className="font-bold text-brand-yellow text-sm mb-2">Results (For "Best musical instruments in Qatar")</h4>
                <ul className="space-y-1 mb-6 text-xs sm:text-sm text-white/80">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-yellow shrink-0" /> Brand recognized by ChatGPT</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-yellow shrink-0" /> Featured in Google AI Overviews</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-yellow shrink-0" /> Recommended by Claude AI & Perplexity</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-yellow shrink-0" /> Stronger entity recognition across search engines</li>
                </ul>
              </div>
              <a
                href="https://www.magdio.com/portfolio/badie-studio-seo-case-study"
                target="_blank"
                rel="noreferrer"
                className="text-brand-yellow hover:text-white inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors"
              >
                Read Case Study <FaArrowRight size={12} />
              </a>
            </motion.div>

            {/* Case Study 2: Namma Markt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass-card p-8 border border-white/5 hover:border-brand-purple/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
                  Retail & Commerce
                </span>
                <h3 className="font-display font-black text-2xl text-white mb-2">2. Namma Markt</h3>
                <p className="text-white/40 text-xs mb-4">India</p>
                <div className="h-px bg-white/5 my-4" />
                <h4 className="font-bold text-white text-sm mb-2">Challenge & Strategy</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                  Our GEO strategy helped Namma Market strengthen its presence across AI-powered search platforms by optimizing entity signals, structured data, topical authority, and AI-friendly content. This resulted in improved discoverability in ChatGPT, Google AI Overviews, Claude, and Perplexity for commercial and shopping queries.
                </p>
                <h4 className="font-bold text-brand-yellow text-sm mb-2">Results</h4>
                <ul className="space-y-1 mb-6 text-xs sm:text-sm text-white/80">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-yellow shrink-0" /> Brand recognized by ChatGPT for commercial queries</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-yellow shrink-0" /> Recommended by Claude AI in answers</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-yellow shrink-0" /> Cited by Perplexity AI for shopping queries</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-yellow shrink-0" /> Stronger entity recognition & search demand</li>
                </ul>
              </div>
              <a
                href="https://www.magdio.com/portfolio/namma-markt-seo-case-study"
                target="_blank"
                rel="noreferrer"
                className="text-brand-yellow hover:text-white inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors"
              >
                Read Case Study <FaArrowRight size={12} />
              </a>
            </motion.div>
          </div>

          {/* Industries Grid */}
          <div className="border-t border-white/5 pt-16">
            <h3 className="font-display font-black text-xl sm:text-2xl text-center text-white mb-10">
              Industries We Help Grow Through GEO
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { title: 'Healthcare', desc: 'Hospitals, Clinics, Edtech' },
                { title: 'IT & SaaS', desc: 'Software, ERP, Apps' },
                { title: 'E-commerce', desc: 'Lifestyle, Jewellery' },
                { title: 'Manufacturing', desc: 'B2B, Industrial, Export' },
                { title: 'Education', desc: 'Colleges, Schools' },
                { title: 'Real Estate', desc: 'Builders, Interior Designers' },
                { title: 'Professional Services', desc: 'Legal, Consulting, CA' },
                { title: 'Retail', desc: 'Local Shops, Franchisees' }
              ].map((ind, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors text-center">
                  <h4 className="font-display font-bold text-white text-sm sm:text-base">{ind.title}</h4>
                  <p className="text-white/40 text-xs mt-1">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. TOOLS SECTION ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ AI Infrastructure
            </div>
            <h2 className="section-title mb-4">
              The Tools Behind Our <span className="gradient-text-gold">GEO Strategy</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We combine industry-leading marketing technologies with AI-powered platforms to deliver measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'SEO & Technical Tools',
                toolsList: ['Google Search Console', 'Google Analytics 4', 'Google Tag Manager', 'Ahrefs', 'Semrush', 'Screaming Frog', 'PageSpeed Insights']
              },
              {
                category: 'AI Platforms Optimized',
                toolsList: ['ChatGPT', 'Google Gemini', 'Claude AI', 'Perplexity AI', 'Microsoft Copilot']
              },
              {
                category: 'Content & Entity Optimization',
                toolsList: ['Schema Markup Tools', 'Knowledge Graph Analysis', 'Entity Mapping', 'Semantic Content Analysis', 'AI Visibility Tracking']
              }
            ].map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 border border-white/5"
              >
                <h3 className="font-display font-bold text-white text-base sm:text-lg mb-4 flex items-center gap-2 text-brand-yellow">
                  <FaTools size={14} /> {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.toolsList.map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-white/70 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Ready to Make Your Business <span className="gradient-text-gold">Visible in AI Search?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base sm:text-lg mb-10 max-w-3xl mx-auto"
          >
            The future of search is already here. Customers are increasingly asking ChatGPT, Gemini, Claude, and Perplexity for recommendations. Find how your business appears across AI search platforms and receive actionable recommendations.
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

      {/* ── 14. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="gradient-text-purple">Questions</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our GEO services.</p>
          </div>
          <FAQAccordion faqs={geoFaqs} />
        </div>
      </section>

      {/* ── 15. ENQUIRY SECTION ── */}
      <EnquirySection />
    </div>
  );
}

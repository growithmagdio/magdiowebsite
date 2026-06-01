import { motion } from 'framer-motion';
import { 
  FaRocket, FaArrowRight, FaBrain, FaSearch, FaCogs, FaCheckCircle, 
  FaTimesCircle, FaChartLine, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaBullhorn, FaGlobe, FaMobileAlt, FaLaptopCode, FaChartBar,
  FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaRegLightbulb,
  FaStore
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

// Dynamic data constants
const coreServicesList = [
  { name: 'Technical SEO', desc: 'Optimize website architecture, page speed, Core Web Vitals, and technical performance.', icon: FaCogs, border: 'hover:border-blue-500/50' },
  { name: 'On-Page SEO', desc: 'Optimize content structure, metadata, heading hierarchy, and keyword targeting.', icon: FaLaptopCode, border: 'hover:border-indigo-500/50' },
  { name: 'Local SEO', desc: 'Improve visibility in local search results through Google Business Profile optimization.', icon: FaMapMarkerAlt, border: 'hover:border-red-500/50' },
  { name: 'Content SEO', desc: 'Create useful, search-intent-driven content that improves topical authority.', icon: FaRegLightbulb, border: 'hover:border-yellow-500/50' },
  { name: 'Ecommerce SEO', desc: 'Improve product visibility, category rankings, and organic sales opportunities.', icon: FaStore, border: 'hover:border-emerald-500/50' },
  { name: 'AEO Optimization', desc: 'Help businesses appear in direct answers, featured snippets, and AI summaries.', icon: FaBrain, border: 'hover:border-purple-500/50' },
  { name: 'GEO Optimization', desc: 'Improve visibility within generative AI systems like ChatGPT, Gemini, and Claude.', icon: FaGlobe, border: 'hover:border-pink-500/50' },
  { name: 'Authority Building', desc: 'Increase website authority and credibility with high-quality strategic link building.', icon: FaChartLine, border: 'hover:border-brand-purple/50' },
];

const problemCards = [
  { title: 'Poor Google Rankings', desc: 'Your website does not rank on the first page, causing you to lose valuable organic traffic.' },
  { title: 'Low Quality Traffic', desc: 'Your website attracts visitors, but they are not the right audience or converting into leads.' },
  { title: 'Invisible in Local Search', desc: 'Local customers cannot find you when they search for your services in their area.' },
  { title: 'Technical SEO Issues', desc: 'Slow loading speeds and poor mobile usability are hurting both rankings and user experience.' },
  { title: 'Outranked by Competitors', desc: 'Your competitors consistently appear above you for high-intent industry keywords.' },
  { title: 'No AI Search Visibility', desc: 'Your business is invisible to modern users asking questions on AI platforms like ChatGPT.' },
];

const solutionCards = [
  { title: 'Increase Organic Traffic', desc: 'Attract highly qualified visitors actively searching for your products or services.' },
  { title: 'Dominate Local Search', desc: 'Ensure your business appears first when local customers search for your offerings.' },
  { title: 'Generate Qualified Leads', desc: 'Convert high-intent organic traffic into inquiries, phone calls, and actual sales.' },
  { title: 'Build Brand Authority', desc: 'Position your website as a trusted resource in your industry with quality content.' },
  { title: 'Reduce Ad Dependency', desc: 'Create sustainable growth that does not vanish the moment you stop paying for ads.' },
  { title: 'Future-Proof Visibility', desc: 'Rank seamlessly across traditional search engines and emerging AI discovery platforms.' },
];

const choosePoints = [
  { title: 'Long-Term Organic Growth', desc: 'We build sustainable SEO strategies that continue delivering value over time.' },
  { title: 'High-Intent Keyword Targeting', desc: 'Focusing on keywords that actually drive sales and business growth.' },
  { title: 'AI Search Visibility', desc: 'Optimizing for AEO and GEO to appear in AI Overviews, ChatGPT, and Gemini.' },
  { title: 'Conversion-Focused execution', desc: 'SEO is meaningless without conversions. We optimize for leads, not just traffic.' },
  { title: 'Content Authority', desc: 'Creating valuable digital assets that attract, engage, and convert customers.' },
  { title: 'Transparent Performance', desc: 'Clear communication and insights on rankings, traffic, and lead generation.' },
];

const seoFaqs = [
  {
    q: 'What are SEO services?',
    a: 'SEO services help improve your website\'s visibility on Google and other search engines. At Magdio, our SEO services focus on increasing organic traffic, leads, and online visibility through technical SEO, content optimization, local SEO, and AI search optimization.'
  },
  {
    q: 'How long does SEO take to show results?',
    a: 'Most businesses start seeing SEO improvements within 3 to 6 months, while competitive industries may take longer. Magdio focuses on sustainable SEO growth rather than short-term ranking tricks.'
  },
  {
    q: 'Are SEO results guaranteed?',
    a: 'No ethical SEO agency can guarantee specific rankings because search algorithms constantly change. Magdio follows white-hat SEO practices focused on long-term growth and sustainable results.'
  },
  {
    q: 'What is the difference between SEO, AEO, and GEO?',
    a: 'SEO improves visibility in search engines. AEO helps content appear in direct answers and AI Overviews. GEO helps businesses get discovered in AI platforms like ChatGPT, Gemini, and Perplexity. Magdio provides all three as part of a modern search strategy.'
  },
  {
    q: 'Do I need SEO if I already run Google Ads?',
    a: 'Yes. Google Ads stops generating traffic when you stop spending. SEO helps build long-term organic visibility that continues generating traffic and leads over time.'
  },
  {
    q: 'Do you provide local SEO services?',
    a: 'Yes. Magdio provides local SEO services for businesses targeting customers in Coimbatore, Chennai, Madurai, and other locations through Google Business Profile optimization and local search strategies.'
  },
  {
    q: 'Why choose Magdio as your SEO agency?',
    a: 'Magdio combines SEO, AEO, GEO, content strategy, technical SEO, and business growth expertise to help businesses improve visibility across both traditional and AI-powered search platforms.'
  },
  {
    q: 'Can SEO help generate leads?',
    a: 'Yes. Effective SEO attracts people who are actively searching for your products or services. Magdio focuses on SEO strategies that improve qualified traffic, inquiries, and lead generation rather than rankings alone.'
  }
];

export default function SeoServicesPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0">
      <SEO 
        title="SEO Company in Tamil Nadu | Search Engine Optimization | Magdio" 
        description="Improve Google rankings, increase organic traffic, and generate qualified leads with our advanced SEO, AEO, and GEO strategies." 
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
            Organic Growth & AI Discovery
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Search Engine Optimization <br className="hidden sm:inline" />
            <span className="gradient-text-gold">Company In Tamil Nadu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            If you are searching for a trusted SEO company in Tamil Nadu that can help your business improve Google rankings, increase organic traffic, and generate qualified leads, Magdio is here to help.
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
              Get Free SEO Audit
            </button>
            <a
              href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20SEO%20experts."
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
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Our search engine optimization services are built for businesses that want more than just rankings. We focus on helping brands attract relevant visitors, improve website authority, increase conversions, and strengthen their presence across Google Search and modern AI discovery platforms.
              </p>
            </div>
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Whether you are looking for the best SEO company in Tamil Nadu, an experienced SEO company in India, or a reliable SEO agency in Coimbatore, our team develops customized SEO, AEO, and GEO strategies aligned with your business goals and market opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. WHAT IS SEO? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10">
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
                <span className="gradient-text-purple">Search Engine Optimization?</span>
              </h2>
              
              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-lightblue flex items-center justify-center shrink-0 border border-brand-blue/30">
                  <FaSearch size={18} />
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  Search Engine Optimization, commonly known as SEO, is the process of improving a website's visibility in search engines like Google and Bing. The goal of SEO is to help businesses appear when potential customers search for products, services, or information related to their industry.
                </p>
              </div>

              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <FaGlobe size={18} />
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  A professional SEO company focuses on optimizing website content, technical performance, search intent alignment, user experience, and authority signals. Strong SEO not only increases website visibility but also helps businesses attract qualified leads and build long-term digital authority.
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-brand-yellow" /> Magdio's SEO Framework
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                At Magdio, our search engine optimization services combine technical SEO, content SEO, local SEO, AEO, and GEO strategies to ensure businesses remain visible across both traditional search engines and modern AI-driven search experiences.
              </p>
              <div className="h-px bg-white/10 mb-6" />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-white text-xl sm:text-2xl mb-1">Intent</h4>
                  <p className="text-white/40 text-xs sm:text-sm">Aligning with Buyers</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-brand-yellow text-xl sm:text-2xl mb-1">Authority</h4>
                  <p className="text-white/40 text-xs sm:text-sm">Building Digital Trust</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. SEO, AEO & GEO SERVICES ── */}
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
              ✦ Modern Search Visibility
            </div>
            <h2 className="section-title mb-4">
              SEO, AEO & GEO Services for <br className="hidden sm:inline" />
              <span className="gradient-text-gold">Modern Search Engines</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Search behavior is evolving rapidly. We future-proof your digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: 'The Shift', 
                desc: 'Customers no longer rely only on traditional search engines. Today, they also use AI-powered platforms such as ChatGPT, Gemini, Claude, Perplexity, and Google AI Overviews to discover businesses and find answers.',
                color: 'border-red-500/20 hover:border-red-500/40',
                badge: 'bg-red-500/10 text-red-400'
              },
              { 
                title: 'AEO (Answer Engine Opt.)', 
                desc: 'AEO helps businesses appear in direct answers, featured snippets, People Also Ask results, and AI-generated summaries. It ensures your brand is the definitive answer when questions are asked online.',
                color: 'border-brand-purple/20 hover:border-brand-purple/50',
                badge: 'bg-brand-purple/10 text-brand-lightblue'
              },
              { 
                title: 'GEO (Generative Engine Opt.)', 
                desc: 'GEO focuses on improving visibility within generative AI systems that recommend products, services, and businesses. We integrate SEO, AEO, and GEO into a unified strategy for maximum coverage.',
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

      {/* ── 4. OUR CORE SEO SERVICES ── */}
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
              Our Search Engine <span className="gradient-text-purple">Optimization Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Magdio provides complete SEO services for businesses of all sizes, designed to improve visibility, rankings, traffic, and conversions through technical expertise and content-driven strategies.
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

      {/* ── 5. WHY BUSINESSES NEED SEO IN 2026 ── */}
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
              Why Businesses Need <span className="gradient-text-gold">SEO Services in 2026</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto text-sm sm:text-base">
              If your website does not appear when people search for your products or services, potential customers are likely finding your competitors instead. Unlike short-term advertising, SEO continues delivering value long after optimization efforts begin.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
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

      {/* ── 6. WHY CHOOSE MAGDIO AS YOUR SEO COMPANY ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
                  ✦ Strategic Partner
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Magdio as <br className="hidden sm:inline" />
                  <span className="gradient-text-purple">Your SEO Company?</span>
                </h2>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-6">
                  Businesses looking for a trusted SEO company in India need more than generic optimization tactics. They need a strategic partner that understands search behavior, customer intent, competition, and business growth.
                </p>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base mb-8">
                  Magdio combines search engine optimization, answer engine optimization, generative engine optimization, content strategy, technical SEO, and conversion-focused thinking into a comprehensive SEO framework.
                </p>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <p className="text-brand-yellow font-bold text-sm">Successful SEO is not about chasing algorithms. It is about creating valuable digital assets that attract, engage, and convert customers consistently.</p>
                </div>
              </motion.div>
            </div>

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

      {/* ── 7. INDUSTRIES & LOCATIONS ── */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest">
                ✦ Industry Expertise
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                Industries <br />
                <span className="gradient-text-gold">We Serve</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Whether you need local SEO in Coimbatore, statewide SEO across Tamil Nadu, or national SEO campaigns across India, our strategies are customized based on industry competition, audience behavior, and business objectives.
              </p>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
                {['Ecommerce', 'SaaS', 'Healthcare', 'Education', 'Real Estate', 'Manufacturing', 'Restaurants', 'Personal Brands', 'Consultants', 'Local Services', 'Startups'].map((badge, idx) => (
                  <span key={idx} className="flex items-center gap-2 text-white/70 text-sm font-semibold select-none">
                    <FaCheckCircle className="text-brand-purple" size={12}/> {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-premium p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
                SEO Services Across Tamil Nadu & India
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                Magdio provides professional search engine optimization services for businesses across Tamil Nadu including Coimbatore, Chennai, Madurai, Tiruppur, Salem, Erode, Trichy, and other major cities.
              </p>
              <p className="text-brand-lightblue text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
                REMOTE-FIRST CAPABILITIES:
              </p>
              <ul className="space-y-3 mb-8">
                {['National campaigns across India', 'International brand discoverability', 'Efficient remote-first workflow', 'Strategic alignment & transparency'].map((bullet, i) => (
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

      {/* ── 8. GET STARTED CTA ── */}
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
            Get Started With SEO That <span className="gradient-text-gold">Drives Business Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg mb-10"
          >
            If you are looking for an SEO company in Tamil Nadu that focuses on rankings, traffic, leads, and long-term business growth, Magdio can help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary text-lg px-10 py-4 shadow-[0_0_40px_rgba(242,179,0,0.3)] hover:shadow-[0_0_60px_rgba(242,179,0,0.5)]"
            >
              Request a Free SEO Audit
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
            <p className="text-white/60">Everything you need to know about our SEO services.</p>
          </div>
          <FAQAccordion faqs={seoFaqs} />
        </div>
      </section>

      {/* ── 10. ENQUIRY SECTION ── */}
      <EnquirySection />
    </div>
  );
}

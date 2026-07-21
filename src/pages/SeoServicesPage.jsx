import { motion } from 'framer-motion';
import { 
  FaArrowRight, FaBrain, FaSearch, FaCogs, FaCheckCircle, 
  FaChartLine, FaMapMarkerAlt, 
  FaBullhorn, FaGlobe, FaLaptopCode,
  FaWhatsapp, FaRegLightbulb, FaStore, FaBuilding
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

const coreServicesList = [
  { name: 'Technical SEO', desc: 'Optimize website architecture, page speed, Core Web Vitals, mobile usability, and technical performance.', icon: FaCogs, border: 'hover:border-blue-500/50' },
  { name: 'On-Page SEO', desc: 'Optimize content structure, metadata, heading hierarchy, internal linking, and keyword targeting.', icon: FaLaptopCode, border: 'hover:border-indigo-500/50' },
  { name: 'Local SEO', desc: 'Improve search visibility in local results through Google Business Profile, location pages, and citations.', icon: FaMapMarkerAlt, border: 'hover:border-red-500/50' },
  { name: 'Content SEO', desc: 'Create useful, search-intent-driven content that builds topical authority and organic visibility.', icon: FaRegLightbulb, border: 'hover:border-yellow-500/50' },
  { name: 'Ecommerce SEO', desc: 'Optimize product and category pages to capture transactional customer search intents.', icon: FaStore, border: 'hover:border-emerald-500/50' },
  { name: 'AEO Optimization', desc: 'Help businesses appear in direct answers, featured snippets, and conversational search responses.', icon: FaBrain, border: 'hover:border-purple-500/50' },
  { name: 'GEO Optimization', desc: 'Optimize for recommendations and citations in generative AI systems like ChatGPT, Gemini, and Claude.', icon: FaGlobe, border: 'hover:border-pink-500/50' },
  { name: 'Authority Building', desc: 'Strengthen digital credibility, brand references, and strategic citation profiles across the web.', icon: FaChartLine, border: 'hover:border-brand-purple/50' },
];

const needSeoPoints = [
  { title: 'Improve Google rankings', desc: 'Position your business at the top of search results for keywords that matter.' },
  { title: 'Increase organic website traffic', desc: 'Attract highly qualified visitors actively looking for your products or services.' },
  { title: 'Generate qualified leads', desc: 'Convert search visitors into direct inquiries, sales calls, and customers.' },
  { title: 'Build brand credibility', desc: 'Establish trust, as users consistently trust organic rankings over paid placements.' },
  { title: 'Reduce dependency on paid advertising', desc: 'Acquire customers sustainably without having to pay for every single click.' },
  { title: 'Improve customer acquisition', desc: 'Create a predictable, organic pipeline of ready-to-buy prospective leads.' },
  { title: 'Increase long-term marketing ROI', desc: 'Establish compounding organic visibility that continues delivering long-term value.' },
];

const choosePoints = [
  { title: 'Long-term organic growth', desc: 'Compounding traffic strategies designed to build permanent digital equity.' },
  { title: 'High-intent keyword targeting', desc: 'Focusing on commercial search terms that bring buyers, not just browsers.' },
  { title: 'Search visibility improvement', desc: 'Systematic ranking growth across standard keywords and local parameters.' },
  { title: 'Lead generation focus', desc: 'Designing optimized landing pathways that convert organic views into inquiries.' },
  { title: 'Content authority positioning', desc: 'Establishing topical structures that establish you as the industry expert.' },
  { title: 'Local SEO performance', desc: 'Commanding local queries and map packs in Chennai, Coimbatore, and Madurai.' },
  { title: 'AI search visibility', desc: 'Preparing content structures for direct indexing in Google AI Overviews and ChatGPT.' },
  { title: 'Sustainable ranking improvements', desc: 'Following white-hat SEO methodologies that withstand major algorithmic updates.' }
];

const locationBadges = [
  { name: 'Chennai', desc: 'SEO Agency Corporate Operations' },
  { name: 'Coimbatore', desc: 'Studio Hub Integrations' },
  { name: 'Madurai', desc: 'Regional Visibility Campaigns' },
  { name: 'Tiruppur', desc: 'Industrial Search Rankings' },
  { name: 'Salem', desc: 'Regional Enterprise Optimization' },
  { name: 'Erode', desc: 'Local Search Accelerators' },
  { name: 'Trichy', desc: 'Local Visibility Campaigns' }
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
    a: 'Yes. Magdio provides local SEO services for businesses targeting customers in Chennai, Coimbatore, Madurai, and other locations through Google Business Profile optimization and local search strategies.'
  },
  {
    q: 'Why choose Magdio as your SEO agency?',
    a: 'Magdio combines SEO, AEO, GEO, content strategy, technical SEO, and business growth expertise to help businesses improve visibility across both traditional and AI-powered search platforms.'
  },
  {
    q: 'Can SEO help generate leads?',
    a: 'Yes. Effective SEO attracts people who are actively searching for your products or services. Magdio focuses on SEO strategies that improve qualified traffic, inquiries, and lead generation rather than rankings alone.'
  },
  {
    q: 'What does an SEO company do?',
    a: 'An SEO company helps businesses improve their visibility on Google and other search platforms through keyword optimization, content strategy, technical SEO, and search engine optimization services. Magdio helps businesses increase rankings, traffic, and qualified leads through SEO, AEO, and GEO strategies.'
  },
  {
    q: 'Why is SEO important for businesses?',
    a: 'SEO helps businesses attract customers who are actively searching for products or services online. Strong search engine optimization improves visibility, builds trust, generates leads, and creates long-term organic growth opportunities.'
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
    <div className="page-bg min-h-screen pt-0 pb-0 bg-[#03030b]">
      <SEO 
        title="Best SEO Company in Chennai | SEO Agency in Chennai | MAGDIO" 
        description="Boost your business visibility with the best SEO services in Chennai from Magdio. We use SEO, AEO, and GEO strategies to drive leads and online conversions." 
        canonicalUrl="https://www.magdio.com/services/seo-services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Search Engine Optimization Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "MAGDIO"
          },
          "areaServed": ["Chennai", "Coimbatore", "Madurai", "Tamil Nadu", "India"]
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
            <span className="gradient-text-gold">Company in Chennai</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-white/90 mb-6 max-w-4xl mx-auto font-display"
          >
            SEO Services That Help Businesses Rank Higher, Generate Leads & Grow Online
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            If you are searching for a trusted SEO company in Chennai that can help your business improve Google rankings, increase organic traffic, and generate qualified leads, Magdio is here to help. As a modern search engine optimization company serving businesses across Chennai, all over Tamil Nadu and throughout India, we create SEO strategies designed to improve online visibility and long-term business growth.
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
              <p className="text-white/60 text-sm leading-relaxed">
                Our search engine optimization services are built for businesses that want more than just rankings. We focus on helping brands attract relevant visitors, improve website authority, increase conversions, and strengthen their presence across Google Search, Google AI Overviews, ChatGPT, Gemini, Perplexity, and other AI-powered discovery platforms.
              </p>
            </div>
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm leading-relaxed">
                Whether you are looking for the best SEO company in chennai, an experienced SEO company in India, or a reliable SEO agency in chennai, our team develops customized SEO, AEO, and GEO strategies aligned with your business goals and market opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. WHAT IS SEO ── */}
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
                <span className="gradient-text-purple">Search Engine Optimization (SEO)?</span>
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
                  A professional search engine optimization company focuses on optimizing website content, technical performance, search intent alignment, user experience, and authority signals to improve rankings and organic traffic. Strong SEO not only increases website visibility but also helps businesses attract qualified leads and build long-term digital authority.
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
                  <h4 className="font-display font-black text-white text-xl mb-1">Intent</h4>
                  <p className="text-white/40 text-xs">Aligning with Buyers</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-brand-yellow text-xl mb-1">Authority</h4>
                  <p className="text-white/40 text-xs">Building Digital Trust</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY BUSINESSES NEED SEO ── */}
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
            <p className="section-subtitle max-w-3xl mx-auto text-sm sm:text-base text-white/60">
              Today, customers search online before making purchasing decisions. If your website does not appear when people search for your products or services, potential customers are likely finding your competitors instead.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-display font-bold text-white text-xl pl-2 border-l-4 border-brand-yellow">
                Businesses invest in SEO because it helps:
              </h3>
              <div className="grid sm:grid-cols-1 gap-3">
                {needSeoPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0 mt-1.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 border border-white/5 hover:border-brand-purple/20 transition-all duration-300"
            >
              <h3 className="font-display font-bold text-lg text-white mb-4">Sustainable Lead Generation</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                As a leading provider of SEO services in Chennai and Tamil Nadu, Magdio helps businesses create sustainable growth through strategic search engine optimization.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Unlike short-term advertising campaigns, SEO continues delivering value long after optimization efforts begin, making it one of the most cost-effective digital marketing investments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR SEO SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Complete SEO Solutions
            </div>
            <h2 className="section-title mb-4">
              Our Search Engine <span className="gradient-text-purple">Optimization Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Magdio provides complete search engine optimization services for businesses of all sizes, designed to improve visibility, rankings, traffic, and conversions through technical expertise and content-driven strategies.
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

      {/* ── 5. SEO, AEO & GEO FOR MODERN VISIBILITY ── */}
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
                ✦ Modern Search Visibility
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                SEO, AEO & GEO Services for <br />
                <span className="gradient-text-gold">Modern Search Visibility</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Search behavior is evolving rapidly. Customers no longer rely only on traditional search engines. Today, they also use AI-powered platforms such as ChatGPT, Gemini, Claude, Perplexity, and Google AI Overviews to discover businesses and find answers.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                This shift has created the need for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). AEO helps businesses appear in direct answers, featured snippets, People Also Ask results, and AI-generated summaries. GEO focuses on improving visibility within generative AI systems that recommend products, services, and businesses.
              </p>
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
                Unified Discoverability Strategy
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                At Magdio, we integrate SEO, AEO, and GEO into a unified strategy that helps businesses remain discoverable across search engines, answer engines, and AI-powered platforms. This modern approach creates broader visibility opportunities and future-proofs your digital presence.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Traditional SEO', 'Answer Engine (AEO)', 'Generative Engine (GEO)'].map((tag) => (
                  <span key={tag} className="px-3.5 py-1.5 rounded-full bg-white/5 text-white/70 text-xs sm:text-sm font-semibold select-none">
                    ✦ {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE MAGDIO ── */}
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
                  ✦ Strategic Partner
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Magdio as Your <span className="gradient-text-purple">SEO Company?</span>
                </h2>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-6">
                  Businesses looking for the best SEO company in Chennai, the best SEO company in Tamil Nadu, or a trusted SEO company in India need more than generic optimization tactics. They need a strategic partner that understands search behavior, customer intent, competition, and business growth.
                </p>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base mb-8">
                  Magdio combines search engine optimization, answer engine optimization, generative engine optimization, content strategy, technical SEO, and conversion-focused thinking into a comprehensive SEO framework.
                </p>
              </motion.div>
            </div>

            {/* Right Col: Grid of approaches */}
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

      {/* ── 7. INDUSTRIES WE SERVE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
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
            <p className="section-subtitle max-w-3xl mx-auto text-white/60">
              Whether you need local SEO in Chennai, statewide SEO across Tamil Nadu, or national SEO campaigns across India, our strategies are customized based on industry competition, audience behavior, and business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              'Ecommerce', 'SaaS', 'Healthcare', 'Education', 
              'Real Estate', 'Manufacturing', 'Restaurants', 
              'Personal Brands', 'Consultants', 'Local Service Businesses', 'Startups'
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

      {/* ── 8. GEOGRAPHIC COVERAGE ── */}
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
              SEO Services Across <span className="gradient-text-purple">Chennai & Tamil Nadu</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base text-white/60">
              Magdio provides professional search engine optimization services for businesses across Tamil Nadu, nationwide and internationally.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12 max-w-6xl mx-auto">
            {locationBadges.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="glass-card p-4 border border-white/5 hover:border-brand-yellow/30 transition-all duration-300 select-none group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 text-brand-yellow flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110">
                  <FaMapMarkerAlt size={14} />
                </div>
                <h4 className="font-display font-bold text-white text-xs sm:text-sm mb-1 group-hover:text-brand-yellow transition-colors">
                  {loc.name}
                </h4>
                <p className="text-white/30 text-[10px]">{loc.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 max-w-3xl mx-auto text-left">
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed text-center">
              Our remote-first workflow allows us to collaborate efficiently with businesses regardless of location while maintaining strategic alignment and performance transparency.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. CASE STUDY SECTION ── */}
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
              Case Study: Real Results <span className="gradient-text-purple">from Our SEO Campaigns</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              At MAGDIO, we believe successful SEO is measured by business impact—not just rankings. Our SEO strategies focus on increasing search visibility and helping businesses generate organic growth.
            </p>
          </motion.div>

          <div className="glass-card p-8 border border-white/5 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-3">
                  E-commerce & Home Living
                </span>
                <h3 className="font-display font-black text-2xl text-white">Results Achieved for Haber Living Through SEO</h3>
              </div>
              <a
                href="/portfolio/haber-living-seo-growth"
                className="text-brand-yellow hover:text-white inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors shrink-0 mt-2"
              >
                Read Case Study <FaArrowRight size={12} />
              </a>
            </div>
            <div className="h-px bg-white/5 my-4" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-display font-black text-2xl text-brand-yellow">503K+</h3>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mt-1">Organic Impressions</h4>
                <p className="text-white/40 text-xs mt-1">Generated through a strategic SEO campaign.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-display font-black text-2xl text-brand-yellow">Ranked #1</h3>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mt-1">Targeted Keywords</h4>
                <p className="text-white/40 text-xs mt-1">Improving visibility for high-intent search queries.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-display font-black text-2xl text-brand-yellow">Google Search</h3>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mt-1">Increased Visibility</h4>
                <p className="text-white/40 text-xs mt-1">Enhanced rankings through page optimization, technical updates, and content strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. GET STARTED CTA ── */}
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
            Get Started With SEO That <span className="gradient-text-gold">Drives Business Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base sm:text-lg mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            If you are looking for an SEO company in Chennai that focuses on rankings, traffic, leads, and long-term business growth, Magdio can help.
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
              Request a Free SEO Audit
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
            <p className="text-white/60">Everything you need to know about our SEO services.</p>
          </div>
          <FAQAccordion faqs={seoFaqs} />
        </div>
      </section>

      {/* ── 12. ENQUIRY SECTION ── */}
      <div id="enquiry">
        <EnquirySection />
      </div>
    </div>
  );
}

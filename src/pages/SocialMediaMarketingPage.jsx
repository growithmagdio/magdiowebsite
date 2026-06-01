import { motion } from 'framer-motion';
import { 
  FaRocket, FaArrowRight, FaBrain, FaSearch, FaCogs, FaCheckCircle, 
  FaTimesCircle, FaChartLine, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaBullhorn, FaGlobe, FaMobileAlt, FaLaptopCode, FaChartBar,
  FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaRegLightbulb,
  FaShareAlt, FaUsers, FaCamera, FaAd
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

// Dynamic data constants
const coreServicesList = [
  { name: 'Social Media Strategy', desc: 'Custom roadmaps including content planning, targeting, and objective setting.', icon: FaChartLine, border: 'hover:border-blue-500/50' },
  { name: 'Content Creation', desc: 'Reels, carousels, educational and promotional content tailored to your brand.', icon: FaCamera, border: 'hover:border-indigo-500/50' },
  { name: 'Social Management', desc: 'Consistent posting, profile optimization, and community engagement.', icon: FaUsers, border: 'hover:border-red-500/50' },
  { name: 'Social Media Advertising', desc: 'High-converting Meta, Instagram, LinkedIn, and YouTube ads.', icon: FaAd, border: 'hover:border-yellow-500/50' },
  { name: 'Instagram Marketing', desc: 'Audience growth, reels optimization, and creative visual campaigns.', icon: FaInstagram, border: 'hover:border-pink-500/50' },
  { name: 'Facebook Marketing', desc: 'Local community engagement, lead generation, and targeted advertising.', icon: FaFacebookF, border: 'hover:border-blue-600/50' },
  { name: 'LinkedIn Marketing', desc: 'B2B authority building, professional networking, and corporate leads.', icon: FaLinkedinIn, border: 'hover:border-blue-400/50' },
  { name: 'YouTube Marketing', desc: 'Long-form video strategies to improve visibility and audience growth.', icon: FaYoutube, border: 'hover:border-red-600/50' },
];

const problemCards = [
  { title: 'Inconsistent Posting', desc: 'Posting randomly without a strategy leads to low engagement and zero brand loyalty.' },
  { title: 'Low Audience Engagement', desc: 'Your content reaches people but fails to generate likes, comments, or shares.' },
  { title: 'No Lead Generation', desc: 'You have followers, but they are not converting into inquiries or paying customers.' },
  { title: 'Wasted Ad Spend', desc: 'Running boosted posts without proper targeting drains your budget for no return.' },
  { title: 'Poor Brand Perception', desc: 'Unprofessional visuals and disjointed messaging hurt your credibility online.' },
  { title: 'Losing to Competitors', desc: 'Your competitors are capturing market share simply by being more active and strategic.' },
];

const solutionCards = [
  { title: 'Increase Brand Awareness', desc: 'Consistently appear in your target audience’s feeds with high-quality content.' },
  { title: 'Build Customer Trust', desc: 'Establish credibility through professional storytelling and community engagement.' },
  { title: 'Generate Qualified Leads', desc: 'Use strategic calls-to-action and paid campaigns to drive inquiries and sales.' },
  { title: 'Improve Website Traffic', desc: 'Channel your social media followers directly to your website and landing pages.' },
  { title: 'Strengthen Online Reputation', desc: 'Maintain an active, positive presence that showcases your brand\'s value.' },
  { title: 'Maximize ROI', desc: 'Deploy optimized paid advertising to scale results predictably and profitably.' },
];

const choosePoints = [
  { title: 'Strategic Content Planning', desc: 'We do not just post; we create content systems designed to achieve business goals.' },
  { title: 'Platform-Specific Growth', desc: 'Tailored strategies that leverage the unique algorithms of Instagram, LinkedIn, etc.' },
  { title: 'Audience-Focused Creation', desc: 'We design reels and posts that resonate deeply with your ideal buyers.' },
  { title: 'Lead Generation Systems', desc: 'Turning social media attention into measurable pipelines and revenue.' },
  { title: 'Creative Execution', desc: 'Premium design and copywriting that makes your brand stand out from the noise.' },
  { title: 'Business-Focused Reporting', desc: 'We track leads and conversions, not just vanity metrics like likes and followers.' },
];

const smmFaqs = [
  {
    q: 'What is social media marketing?',
    a: 'Social media marketing is the process of promoting a business through platforms such as Instagram, Facebook, LinkedIn, and YouTube to increase visibility, engagement, leads, and sales. Magdio helps businesses grow through strategic social media marketing services and content-driven campaigns.'
  },
  {
    q: 'Why is social media marketing important?',
    a: 'Social media marketing helps businesses reach potential customers, build trust, improve brand awareness, and generate leads. A strong social media presence allows businesses to stay competitive in today\'s digital landscape.'
  },
  {
    q: 'Which social media platform is best for my business?',
    a: 'The best platform depends on your audience and goals. Instagram works well for consumer brands, LinkedIn for B2B companies, Facebook for local businesses, and YouTube for long-form content and authority building. Magdio helps businesses identify the right platforms through strategic planning.'
  },
  {
    q: 'How long does social media marketing take to show results?',
    a: 'Organic social media marketing typically requires consistent effort over several months, while paid advertising can generate results faster. Magdio focuses on building sustainable growth rather than short-term spikes.'
  },
  {
    q: 'Why choose Magdio as your Social Media Marketing Agency in Coimbatore?',
    a: 'Magdio combines social media marketing strategy, content creation, branding, audience growth, lead generation, and advertising into a complete growth system designed to help businesses build visibility, engagement, and long-term success.'
  }
];

export default function SocialMediaMarketingPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0">
      <SEO 
        title="Social Media Marketing Agency in Coimbatore | Magdio" 
        description="Build visibility, trust, and sales through strategic content, platform management, and performance-driven social media marketing campaigns." 
      />
      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-24 pb-32 md:pt-36 md:pb-44 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03030b]/85 via-[#06071a]/95 to-[#03030b] z-10" />
          <div
            className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #E1306C, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, #1A22B8, transparent 70%)' }}
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            Brand Growth & Engagement
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Social Media Marketing Agency <br className="hidden sm:inline" />
            <span className="gradient-text-purple">in Coimbatore</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            Helping businesses build visibility, trust, and sales through strategic content, platform management, and performance-driven social media marketing campaigns.
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
              Get a Free Social Strategy
            </button>
            <a
              href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20social%20media%20experts."
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
                As a modern social media marketing company, we help businesses move beyond random posting and build systems that support long-term business growth. We create meaningful connections with your audience through creative campaigns.
              </p>
            </div>
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Whether you are a startup, local business, ecommerce brand, SaaS company, or service-based business, our strategy focuses on attracting the right audience, increasing engagement, improving visibility, and generating business opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. WHAT IS SMM? ── */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest">
                ✦ Industry Definition
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                What Is <br className="hidden sm:inline" />
                <span className="gradient-text-purple">Social Media Marketing?</span>
              </h2>
              
              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/30">
                  <FaShareAlt size={18} />
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  Social media marketing is the process of using platforms such as Instagram, Facebook, LinkedIn, YouTube, and other digital channels to promote a business, engage with audiences, build brand awareness, and generate leads.
                </p>
              </div>

              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <FaUsers size={18} />
                </div>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  A successful strategy combines content creation, audience engagement, social media advertising, community building, and performance analysis to achieve measurable business outcomes.
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-pink-400" /> Systems over Trends
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                At Magdio, our services focus on creating valuable content, increasing audience engagement, strengthening brand positioning, and helping businesses convert attention into inquiries and sales. We develop sustainable social media systems rather than relying on short-term trends alone.
              </p>
              <div className="h-px bg-white/10 mb-6" />
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-white text-xl sm:text-2xl mb-1">Attention</h4>
                  <p className="text-white/40 text-xs sm:text-sm">Capture Target Eyes</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-pink-400 text-xl sm:text-2xl mb-1">Conversion</h4>
                  <p className="text-white/40 text-xs sm:text-sm">Turn Views to Leads</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR CORE SMM SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Capabilities Grid
            </div>
            <h2 className="section-title mb-4">
              Our Social Media <span className="gradient-text-purple">Marketing Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Magdio provides complete social media marketing services designed to help businesses grow their online presence and connect with their target audience effectively.
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
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-pink-400 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      <IconComp size={18} />
                    </div>
                    <h4 className="font-display font-bold text-white text-base sm:text-lg mb-2 leading-snug group-hover:text-pink-400 transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-brand-purple rounded-full mt-4" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. WHY SMM IS IMPORTANT IN 2026 ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ The Modern Mandate
            </div>
            <h2 className="section-title mb-4">
              Why Social Media Marketing Is <span className="gradient-text-gold">Important for Businesses</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto text-sm sm:text-base">
              Consumers increasingly discover brands, products, and services through social media. Businesses that fail to build a strong social media presence often lose visibility, trust, and customer attention to competitors.
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

      {/* ── 5. WHY CHOOSE MAGDIO AS YOUR SMM COMPANY ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-4">
                  ✦ Strategic Partner
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Magdio for <br className="hidden sm:inline" />
                  <span className="gradient-text-purple">Social Media Marketing?</span>
                </h2>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-6">
                  Many businesses post content consistently but fail to generate meaningful results because they lack a strategy. At Magdio, we focus on building growth-focused social media systems.
                </p>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base mb-8">
                  Our strategies combine branding, engagement, lead generation, content marketing, and advertising. Whether you need social media marketing in Coimbatore or support for a national brand, our approach focuses on measurable business outcomes rather than vanity metrics.
                </p>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <p className="text-brand-yellow font-bold text-sm">We orchestrate the entire social journey: from the first time a user sees your reel, to the moment they become a paying customer.</p>
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
                  className="glass-card p-6 border border-white/5 hover:border-pink-500/40 hover:shadow-[0_8px_30px_rgba(225,48,108,0.12)] transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-pink-500/20 text-pink-400 mb-4 border border-pink-500/30 group-hover:scale-110 transition-transform">
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

      {/* ── 6. INDUSTRIES & LOCATIONS ── */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest">
                ✦ Industry Expertise
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                Industries <br />
                <span className="gradient-text-gold">We Serve</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Every industry requires a different social media marketing strategy, and our team develops customized campaigns based on audience behavior and business goals.
              </p>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
                {['Ecommerce Brands', 'SaaS Companies', 'Healthcare', 'Educational Institutions', 'Real Estate', 'Manufacturing', 'Restaurants', 'Personal Brands', 'Consultants', 'Local Businesses', 'Startups'].map((badge, idx) => (
                  <span key={idx} className="flex items-center gap-2 text-white/70 text-sm font-semibold select-none">
                    <FaCheckCircle className="text-pink-400" size={12}/> {badge}
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
                Social Media Marketing Services in Coimbatore, Chennai & Tamil Nadu
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                Magdio provides social media marketing services for businesses in Coimbatore, Chennai, Madurai, and across Tamil Nadu. We also work remotely with businesses throughout India and international clients.
              </p>
              <p className="text-brand-lightblue text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
                OUR WORKFLOW:
              </p>
              <ul className="space-y-3 mb-8">
                {['Consistent communication & reporting', 'Data-driven content optimization', 'Remote-first collaboration model', 'Scalable growth execution'].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0 mt-1.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-purple/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Ready to Build a Brand <span className="gradient-text-purple">People Love?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
          >
            Whether you need social media marketing in Coimbatore or support for a national brand, Magdio is your trusted partner for organic and paid growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary text-lg px-10 py-4 shadow-[0_0_40px_rgba(225,48,108,0.3)] hover:shadow-[0_0_60px_rgba(225,48,108,0.5)]"
            >
              Get Your Social Growth Plan
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="gradient-text-purple">Questions</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our social media services.</p>
          </div>
          <FAQAccordion faqs={smmFaqs} />
        </div>
      </section>

      {/* ── 9. ENQUIRY SECTION ── */}
      <EnquirySection />
    </div>
  );
}

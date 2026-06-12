import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaChartLine, FaUsers, FaCamera, FaAd,
  FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaShareAlt
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

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
        title="Social Media Marketing Agency in Tamil Nadu | Magdio" 
        description="Social media marketing agency in Tamil Nadu helping businesses grow with content creation, social media management, influencer marketing & SMM services." 
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            Brand Growth & Engagement
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            Social Media Marketing Agency <br className="hidden sm:inline" />
            <span className="gradient-text-purple">in Coimbatore</span>
            <span className="block text-xl sm:text-2xl mt-6 font-bold text-white/90">for Brand Growth, Engagement & Lead Generation</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8"
          >
            <button onClick={scrollToEnquiry} className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5">
              Get a Free Social Strategy
            </button>
            <a href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20social%20media%20experts." target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-3 flex items-center justify-center gap-2">
              <FaWhatsapp size={18} /> Talk To Our Experts
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 1.5 INTRO SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-8 leading-tight">
            Social Media Marketing Services That Help Businesses Build Visibility, Trust & Sales
          </h2>
          <div className="space-y-6 text-white/70 text-base sm:text-lg leading-relaxed text-left glass-card p-8 border border-white/5 shadow-xl">
            <p>
              In today's digital world, customers spend a significant amount of time on social media platforms before making purchasing decisions. Businesses that consistently invest in social media marketing build stronger brand awareness, generate more engagement, and create more opportunities for lead generation and sales.
            </p>
            <p>
              Magdio is a Social Media Marketing Agency in Coimbatore helping businesses create meaningful connections with their audience through strategic content, platform management, creative campaigns, and performance-driven social media marketing services. As a modern social media marketing company, we help businesses move beyond random posting and build systems that support long-term business growth.
            </p>
            <p>
              Whether you are a startup, local business, ecommerce brand, SaaS company, personal brand, consultant, or service-based business, our social media marketing strategy focuses on attracting the right audience, increasing engagement, improving visibility, and generating business opportunities.
            </p>
            <p>
              If you are looking for social media marketing in Coimbatore, a trusted social media marketing company, or a social media marketing agency that understands both branding and lead generation, Magdio provides customized solutions designed around your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT IS SMM? ── */}
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
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Social media marketing is the process of using social media platforms such as Instagram, Facebook, LinkedIn, YouTube, and other digital channels to promote a business, engage with audiences, build brand awareness, and generate leads.
                </p>
              </div>

              <div className="glass-card p-6 border-white/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <FaUsers size={18} />
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Businesses use social media marketing services to connect with potential customers where they spend their time online. A successful social media marketing strategy combines content creation, audience engagement, social media advertising, community building, and performance analysis to achieve measurable business outcomes.
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
                At Magdio, our social media marketing services focus on creating valuable content, increasing audience engagement, strengthening brand positioning, and helping businesses convert attention into inquiries and sales. As a leading Social Media Marketing Company in Coimbatore, we help businesses develop sustainable social media systems rather than relying on short-term trends alone.
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

      {/* ── 3. WHY SMM IS IMPORTANT ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center mb-12">
            <h2 className="section-title mb-6">
              Why Social Media Marketing Is <br className="hidden sm:inline" />
              <span className="gradient-text-gold">Important for Modern Businesses</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Consumers increasingly discover brands, products, and services through social media. Businesses that fail to build a strong social media presence often lose visibility, trust, and customer attention to competitors.
            </p>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left mb-10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Social media marketing helps businesses:</h3>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  'Increase brand awareness', 'Build customer trust', 
                  'Improve audience engagement', 'Generate qualified leads', 
                  'Increase website traffic', 'Strengthen online reputation', 
                  'Improve customer retention', 'Support long-term business growth'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-lg">
                    <FaCheckCircle className="text-emerald-400 shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 border-l-4 border-pink-500 text-left">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                A well-planned social media marketing strategy allows businesses to stay visible throughout the customer journey, from discovery to purchase.<br/><br/>
                As a Social Media Marketing Agency in Coimbatore, Magdio helps businesses create social media systems that consistently attract attention, build credibility, and drive business results.
              </p>
            </div>
         </div>
      </section>

      {/* ── 4. OUR SMM SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Our Social Media <span className="gradient-text-purple">Marketing Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              Magdio provides complete social media marketing services designed to help businesses grow their online presence and connect with their target audience effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/30">
                <FaChartLine size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Media Strategy Development</h3>
              <p className="text-white/70 mb-4 leading-relaxed">Every successful campaign starts with a strong social media marketing strategy. We analyze your industry, audience, competitors, and business goals to create a customized roadmap for growth.</p>
              <div className="mb-4 bg-black/20 p-4 rounded-xl border border-white/5">
                <strong className="text-white block mb-2">Our strategy includes:</strong>
                <ul className="grid grid-cols-2 gap-2 text-white/60 text-sm">
                  <li>• Content planning</li>
                  <li>• Audience targeting</li>
                  <li>• Platform selection</li>
                  <li>• Brand positioning</li>
                  <li>• Campaign objectives</li>
                  <li>• Performance measurement</li>
                </ul>
              </div>
              <p className="text-white/70 text-sm">A strategic approach ensures every content piece contributes toward business growth.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6 border border-pink-500/30">
                <FaCamera size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Content Creation & Creative Design</h3>
              <p className="text-white/70 mb-4 leading-relaxed">Content is the foundation of social media marketing.</p>
              <div className="mb-4 bg-black/20 p-4 rounded-xl border border-white/5">
                <strong className="text-white block mb-2">Our team develops:</strong>
                <ul className="grid grid-cols-2 gap-2 text-white/60 text-sm">
                  <li>• Reels</li>
                  <li>• Carousel posts</li>
                  <li>• Educational content</li>
                  <li>• Promotional content</li>
                  <li>• Brand storytelling content</li>
                  <li>• Industry insights</li>
                  <li>• Trend-based content</li>
                </ul>
              </div>
              <p className="text-white/70 text-sm">As a social media marketing company, we create content that helps businesses increase reach, engagement, and audience retention while maintaining brand consistency.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/30">
                <FaUsers size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Media Management</h3>
              <p className="text-white/70 mb-4 leading-relaxed">Managing social media consistently requires planning, execution, monitoring, and optimization.</p>
              <div className="mb-4 bg-black/20 p-4 rounded-xl border border-white/5">
                <strong className="text-white block mb-2">Our social media management services include:</strong>
                <ul className="grid grid-cols-2 gap-2 text-white/60 text-sm">
                  <li>• Content scheduling</li>
                  <li>• Account management</li>
                  <li>• Community engagement</li>
                  <li>• Performance monitoring</li>
                  <li>• Audience interaction</li>
                  <li>• Profile optimization</li>
                </ul>
              </div>
              <p className="text-white/70 text-sm">This allows businesses to maintain a professional and active online presence across multiple platforms.</p>
            </div>

            <div className="glass-card p-8 border border-white/5 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6 border border-yellow-500/30">
                <FaAd size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Media Advertising</h3>
              <p className="text-white/70 mb-4 leading-relaxed">Organic growth and paid advertising work best together.</p>
              <div className="mb-4 bg-black/20 p-4 rounded-xl border border-white/5">
                <strong className="text-white block mb-2">We help businesses scale through:</strong>
                <ul className="grid grid-cols-2 gap-2 text-white/60 text-sm">
                  <li>• Meta Ads</li>
                  <li>• Instagram Ads</li>
                  <li>• Facebook Ads</li>
                  <li>• LinkedIn Ads</li>
                  <li>• YouTube Ads</li>
                </ul>
              </div>
              <p className="text-white/70 text-sm">Our advertising campaigns are designed to improve visibility, generate leads, increase conversions, and maximize return on investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PLATFORMS WE MANAGE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Platforms <span className="gradient-text-purple">We Manage</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base">
              As a Social Media Marketing Agency in Coimbatore, we help businesses grow across multiple platforms.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 border border-white/5 text-center hover:border-pink-500/50 transition-colors group">
              <div className="w-20 h-20 mx-auto bg-pink-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaInstagram className="text-pink-500 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instagram Marketing</h3>
              <p className="text-white/60 text-sm leading-relaxed">Instagram remains one of the most powerful platforms for brand awareness, engagement, and customer acquisition. Our Instagram marketing strategies focus on content creation, audience growth, reels optimization, and lead generation.</p>
            </div>
            <div className="glass-card p-8 border border-white/5 text-center hover:border-blue-600/50 transition-colors group">
              <div className="w-20 h-20 mx-auto bg-blue-600/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaFacebookF className="text-blue-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Facebook Marketing</h3>
              <p className="text-white/60 text-sm leading-relaxed">Facebook continues to be valuable for local businesses, community engagement, lead generation, and advertising campaigns.</p>
            </div>
            <div className="glass-card p-8 border border-white/5 text-center hover:border-blue-400/50 transition-colors group">
              <div className="w-20 h-20 mx-auto bg-blue-400/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaLinkedinIn className="text-blue-400 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">LinkedIn Marketing</h3>
              <p className="text-white/60 text-sm leading-relaxed">LinkedIn is ideal for B2B companies, consultants, SaaS businesses, and professional service providers looking to build authority and generate business opportunities.</p>
            </div>
            <div className="glass-card p-8 border border-white/5 text-center hover:border-red-600/50 transition-colors group">
              <div className="w-20 h-20 mx-auto bg-red-600/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaYoutube className="text-red-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">YouTube Marketing</h3>
              <p className="text-white/60 text-sm leading-relaxed">Video content continues to dominate digital consumption. Our YouTube marketing strategies help businesses improve visibility, audience growth, and long-form content engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE MAGDIO AS YOUR SMM COMPANY ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Why Choose Magdio as Your <br className="hidden sm:inline" />
                  <span className="gradient-text-purple">Social Media Marketing Company?</span>
               </h2>
               <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Many businesses post content consistently but fail to generate meaningful results because they lack a strategy.
               </p>
               <p className="text-white/70 text-lg leading-relaxed mb-8">
                  At Magdio, we focus on building growth-focused social media systems that combine branding, engagement, lead generation, content marketing, and advertising.
               </p>
               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 shadow-lg">
                  <h3 className="text-white text-lg font-bold mb-4">Businesses choose our social media marketing services because we provide:</h3>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4">
                     {[
                        'Strategic content planning', 'Platform-specific growth strategies', 
                        'Audience-focused content creation', 'Performance tracking',
                        'Lead generation systems', 'Creative execution',
                        'Business-focused reporting'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/80 text-base">
                           <FaCheckCircle className="text-pink-400 shrink-0" size={16}/> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <p className="text-white/70 text-lg leading-relaxed">
                  Whether you need social media marketing in Coimbatore or support for a national brand, our approach focuses on measurable business outcomes rather than vanity metrics.
               </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
               <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full" />
               <div className="glass-card-premium p-8 sm:p-10 relative border border-white/10 shadow-2xl rounded-3xl">
                  <h3 className="text-3xl font-bold text-white mb-4">Industries We Serve</h3>
                  <p className="text-white/70 mb-8 text-lg">Our social media marketing services support businesses across multiple industries. Including:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {[
                        'Ecommerce Brands', 'SaaS Companies', 'Startups', 
                        'Healthcare Businesses', 'Educational Institutions', 
                        'Restaurants', 'Real Estate Companies', 
                        'Manufacturing Businesses', 'Personal Brands',
                        'Coaches & Consultants', 'Local Businesses', 'Service-Based Companies'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80 text-base font-medium bg-black/20 p-3 rounded-xl border border-white/5">
                           <span className="w-2 h-2 bg-brand-yellow rounded-full shrink-0" /> {item}
                        </li>
                     ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/60 text-sm leading-relaxed">
                      Every industry requires a different social media marketing strategy, and our team develops customized campaigns based on audience behavior and business goals.
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-6">
              ✦ Service Areas
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-8 leading-tight">
               Social Media Marketing Services in <br className="hidden sm:inline" /> 
               <span className="gradient-text-gold">Coimbatore, Chennai & Tamil Nadu</span>
            </h2>
            <div className="glass-card p-8 sm:p-10 border border-white/5 shadow-xl text-left space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                 Magdio provides social media marketing services for businesses in Coimbatore, Chennai, Madurai, and across Tamil Nadu. We also work remotely with businesses throughout India and international clients.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                 Our remote-first workflow allows us to create, manage, optimize, and scale social media marketing campaigns regardless of location while maintaining consistent communication and reporting.
              </p>
              <p className="text-white/80 text-lg leading-relaxed font-semibold">
                 Whether you are searching for a Social Media Marketing Agency in Coimbatore, a Social Media Marketing Company in Tamil Nadu, or a team to manage your social media growth, Magdio can help.
              </p>
            </div>
         </div>
      </section>

      {/* ── 8. GET STARTED CTA ── */}
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

      {/* ── 9. FAQ SECTION ── */}
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

      {/* ── 10. ENQUIRY SECTION ── */}
      <EnquirySection />
    </div>
  );
}

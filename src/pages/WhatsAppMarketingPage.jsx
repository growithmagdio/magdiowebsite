import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaWhatsapp, FaRobot, FaBullhorn, FaLink, 
  FaDatabase, FaCheck, FaBuilding, FaGlobe
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

const waFaqs = [
  {
    q: 'What are WhatsApp Marketing Services?',
    a: 'WhatsApp marketing services help businesses communicate with customers through WhatsApp to generate leads, automate follow-ups, provide support, promote products, and improve customer engagement.'
  },
  {
    q: 'Is WhatsApp marketing effective for small businesses?',
    a: 'Yes. Small businesses can use WhatsApp to respond faster to enquiries, automate communication, nurture leads, and improve customer relationships without large advertising budgets.'
  },
  {
    q: 'What is the difference between WhatsApp Business and WhatsApp Business API?',
    a: 'WhatsApp Business is designed for small businesses, while WhatsApp Business API supports automation, CRM integration, multiple users, chatbots, and large-scale customer communication.'
  },
  {
    q: 'Can WhatsApp marketing generate leads?',
    a: 'Yes. Click-to-WhatsApp campaigns from Google Ads and Meta Ads allow businesses to convert interested users directly into conversations, helping improve lead generation and response rates.'
  },
  {
    q: 'Is bulk WhatsApp marketing safe?',
    a: 'Bulk messaging should always comply with WhatsApp Business policies. We focus on permission-based communication, audience segmentation, and approved messaging templates to ensure compliance.'
  },
  {
    q: 'Which industries benefit most from WhatsApp marketing?',
    a: 'Healthcare, education, ecommerce, real estate, manufacturing, professional services, restaurants, travel, and local businesses often see strong results due to their need for direct customer communication.'
  },
  {
    q: 'Which tools do you use for WhatsApp marketing?',
    a: 'We use WhatsApp Business API, Meta Business Suite, Google Analytics 4, Google Tag Manager, Meta Pixel, Conversion API, CRM platforms, Looker Studio, and automation tools to manage and optimize campaigns.'
  },
  {
    q: 'How do you measure WhatsApp marketing performance?',
    a: 'We track response time, qualified leads, conversion rate, cost per lead, customer acquisition cost, customer retention, ROAS, and customer lifetime value to evaluate campaign performance.'
  },
  {
    q: 'Can WhatsApp marketing be integrated with CRM software?',
    a: 'Yes. We integrate WhatsApp with HubSpot, Zoho CRM, Salesforce, and other CRM platforms to automate lead management, improve follow-ups, and streamline customer communication.'
  },
  {
    q: 'Why choose Magdio as your WhatsApp Marketing Agency?',
    a: 'Magdio combines strategy, automation, CRM integration, AI-powered workflows, analytics, and continuous optimization to help businesses generate qualified leads, improve customer engagement, and achieve measurable business growth through WhatsApp marketing.'
  }
];

export default function WhatsAppMarketingPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0 bg-[#03030b]">
      <SEO 
        title="Bulk WhatsApp Marketing Services in Chennai | MAGDIO" 
        description="Reach Magdio, a bulk WhatsApp marketing service provider delivering promotional messages, alerts, customer updates and business communication solutions." 
        canonicalUrl="https://www.magdio.com/services/whatsapp-marketing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "WhatsApp Marketing Services",
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
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #25D366, transparent 70%)' }} />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #1A22B8, transparent 70%)' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Conversational Ads & Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            WhatsApp Marketing Services <br className="hidden sm:inline" />
            <span className="gradient-text-green">in Chennai</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg sm:text-2xl font-bold text-white/90 mb-6 max-w-4xl mx-auto font-display font-black"
          >
            Turn Customer Conversations into Qualified Leads and Long-Term Business Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            Many businesses invest in digital marketing to generate enquiries, but generating leads is only half the challenge. Converting those enquiries into paying customers depends on how quickly and consistently businesses respond. In several campaigns we've worked on, we found that delayed follow-ups and manual communication were causing businesses to lose valuable opportunities—even when advertising campaigns were performing well.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8"
          >
            <button onClick={scrollToEnquiry} className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5" style={{ background: 'linear-gradient(45deg, #25D366, #128C7E)' }}>
              Build Your WhatsApp Flow
            </button>
            <a href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20WhatsApp%20experts." target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-3 flex items-center justify-center gap-2">
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
                At Magdio, we introduced WhatsApp marketing automation as part of the customer journey to help businesses respond instantly, automate follow-ups, qualify leads, and reduce manual effort.
              </p>
            </div>
            <div className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
              <p className="text-white/60 text-sm leading-relaxed">
                By integrating WhatsApp Business API, CRM systems, and automated workflows, we help businesses streamline communication, improve efficiency by up to 95%, accelerate marketing ROI by up to 10×, and increase customer retention.
              </p>
            </div>
          </motion.div>

          <p className="text-white/50 text-sm mt-8 text-left max-w-4xl mx-auto leading-relaxed border-l-4 border-green-500 pl-4">
            As a WhatsApp Marketing Company in Chennai, we don't treat WhatsApp as a bulk messaging platform. We use it as a business communication channel that connects marketing, sales, and customer support. Every workflow is designed around measurable outcomes such as qualified leads, appointment bookings, product enquiries, repeat purchases, and customer retention.
          </p>
        </div>
      </section>

      {/* ── 1.5 WHAT WE'VE ACHIEVED ── */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest">
                ✦ ROI Optimization
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
                What We've Achieved Through <br />
                <span className="gradient-text-green">WhatsApp Marketing Strategies</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Our experience implementing WhatsApp marketing solutions has shown that businesses achieve the best results when automation supports the entire customer journey—not just promotional messaging.
              </p>
              <div className="space-y-3 pt-2 text-white/70 text-xs sm:text-sm">
                {[
                  'Faster lead response times through automated welcome messages and enquiry routing.',
                  'Reduced manual workload by integrating WhatsApp with CRM systems.',
                  'Better visibility into campaign performance through conversion tracking.',
                  'Permission-based templates that maintain high message deliverability.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5" />
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Operational Milestones
              </h3>
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-white text-xl sm:text-2xl mb-1">Up to 95%</h4>
                  <p className="text-white/50 text-xs sm:text-sm">Operational efficiency by automating repetitive customer interactions and follow-ups.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-green-500 text-xl sm:text-2xl mb-1">Up to 10×</h4>
                  <p className="text-white/50 text-xs sm:text-sm">ROI acceleration by integrating WhatsApp with Meta Ads, Google Ads, and CRM workflows.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-display font-black text-white text-xl sm:text-2xl mb-1">Up to 88%</h4>
                  <p className="text-white/50 text-xs sm:text-sm">Improvement in customer retention through personalized engagement, reminders, and post-purchase communication.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT MAKES US DIFFERENT ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Strategic Difference
            </div>
            <h2 className="section-title mb-4">
              What Makes Our <span className="gradient-text-green">WhatsApp Marketing Different?</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-white/60">
              Many agencies focus only on message delivery. At Magdio, we focus on improving the entire customer communication process.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {[
              'Customer Journey Mapping', 'CRM Integration', 'Audience Segmentation', 'Automation Strategy',
              'Conversion Tracking', 'Campaign Optimization', 'WhatsApp Policy Compliance', 'Performance Reporting'
            ].map((diff, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-green-500/20 transition-all text-center">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mx-auto mb-2">
                  <FaCheck className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-display font-bold text-white text-xs sm:text-sm">{diff}</h4>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-xs sm:text-sm text-center max-w-3xl mx-auto leading-relaxed">
            Instead of measuring success by the number of messages sent, we evaluate how WhatsApp contributes to lead generation, customer engagement, operational efficiency, and revenue growth.
          </p>
        </div>
      </section>

      {/* ── 3. OUR WHATSAPP SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Our WhatsApp <span className="gradient-text-green">Marketing Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base text-white/60">
              We develop end-to-end WhatsApp marketing systems that help businesses attract prospects, automate communication, nurture leads, and retain customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="glass-card p-6 border border-white/5 hover:border-green-500/35 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 text-green-400 flex items-center justify-center mb-4">
                <FaWhatsapp size={20} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">WhatsApp Business API Integration</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Verified account setups, multi-user shared team inboxes, conversation analytics, and custom lead routing flows.</p>
            </div>

            {/* Service 2 */}
            <div className="glass-card p-6 border border-white/5 hover:border-green-500/35 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 text-green-400 flex items-center justify-center mb-4">
                <FaLink size={20} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Click-to-WhatsApp Advertising</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Facebook, Instagram, and Google Ads setups that direct target users straight into active WhatsApp chats.</p>
            </div>

            {/* Service 3 */}
            <div className="glass-card p-6 border border-white/5 hover:border-green-500/35 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 text-green-400 flex items-center justify-center mb-4">
                <FaBullhorn size={20} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">Bulk WhatsApp Campaigns</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Targeted bulk broadcasts (promotions, launch alerts, holiday offers) based on audience segmentations.</p>
            </div>

            {/* Service 4 */}
            <div className="glass-card p-6 border border-white/5 hover:border-green-500/35 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 text-green-400 flex items-center justify-center mb-4">
                <FaRobot size={20} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">WhatsApp Automation Workflows</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Welcome messages, automated lead qualification forms, appointment scheduling, and order shipping notifications.</p>
            </div>

            {/* Service 5 */}
            <div className="glass-card p-6 border border-white/5 hover:border-green-500/35 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-white/5 text-green-400 flex items-center justify-center mb-4">
                <FaDatabase size={20} />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">CRM Integration</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">Integrations with HubSpot, Zoho CRM, Salesforce, Freshsales, and Microsoft Dynamics to sync lead activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRIES WE HELP ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Verticals
            </div>
            <h2 className="section-title mb-4">
              Industries We Help with <span className="gradient-text-green">WhatsApp Marketing</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-white/60">
              Different templates, rules, and triggers tailored specifically for industry buyer journeys.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { name: 'Healthcare', desc: 'Appointment reminders, patient follow-ups, and health check alerts' },
              { name: 'Education', desc: 'Admission updates, course info, and direct student counseling' },
              { name: 'Ecommerce', desc: 'Abandoned cart updates, shipping trackers, and discount alerts' },
              { name: 'Real Estate', desc: 'Site visit scheduling, construction status updates, and lead nurturing' },
              { name: 'Manufacturing', desc: 'Dealer pricing broadcasts, inventory updates, and order checkouts' },
              { name: 'Professional Services', desc: 'Consultation bookings, custom onboarding, and reminder notifications' }
            ].map((ind, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-green-500/20 transition-all text-center flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 text-green-400 flex items-center justify-center mx-auto mb-2">
                    <FaBuilding size={14} />
                  </div>
                  <h4 className="font-display font-bold text-white text-xs sm:text-sm mb-1">{ind.name}</h4>
                  <p className="text-white/40 text-[10px] leading-normal">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TECHNOLOGY & TOOLS WE USE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Operations Stack
            </div>
            <h2 className="section-title mb-4">
              Technology & Tools <span className="gradient-text-gold">We Use</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We integrate industry-leading platforms to automate communication, improve experience, and measure performance.
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
                  <th className="py-4 px-4 text-green-400">Tool / Platform</th>
                  <th className="py-4 px-4 text-brand-yellow">Operational Purpose</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                {[
                  { name: 'WhatsApp Business API', purpose: 'Enterprise business messaging & API automation' },
                  { name: 'Meta Business Suite', purpose: 'Click-to-WhatsApp campaign & ad operations management' },
                  { name: 'Google Analytics 4 (GA4)', purpose: 'Full funnel conversion and telemetry tracking' },
                  { name: 'Google Tag Manager (GTM)', purpose: 'Trigger setup and custom event configurations' },
                  { name: 'Meta Pixel & Conversion API', purpose: 'Attributions tracking and audience optimizations' },
                  { name: 'HubSpot / Zoho CRM / Salesforce', purpose: 'Customer profile management and pipeline syncs' },
                  { name: 'Looker Studio', purpose: 'Interactive client dashboards and messaging reports' },
                  { name: 'Zapier / Make / Chatbots', purpose: 'Custom integrations and support automation' }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01]">
                    <td className="py-4 px-4 font-bold flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 shrink-0" size={12}/> {row.name}
                    </td>
                    <td className="py-4 px-4">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 6. GEOGRAPHIC SERVICE AREA ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
              ✦ Service Operations
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-8 leading-tight">
               WhatsApp Marketing Services in <span className="gradient-text-green">Chennai</span>
            </h2>
            <div className="glass-card p-8 sm:p-10 border border-white/5 shadow-xl text-left space-y-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                 Businesses across Chennai and Tamil Nadu are increasingly adopting WhatsApp as a primary customer communication channel. Whether your objective is to generate leads, automate customer support, improve sales follow-ups, or increase customer retention, a well-planned WhatsApp marketing strategy can significantly improve business efficiency.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-semibold">
                 As a WhatsApp Marketing Company in Chennai, Magdio works with startups, SMEs, enterprise businesses, and growing brands to design scalable WhatsApp marketing systems that integrate with their existing marketing and sales processes.
              </p>
            </div>
         </div>
      </section>

      {/* ── 7. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-green-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Ready to Build a Smarter <span className="gradient-text-green">WhatsApp Marketing Strategy?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base sm:text-lg mb-10 max-w-3xl mx-auto"
          >
            Let's transform everyday customer conversations into measurable business growth with data-driven WhatsApp Marketing Services in Chennai.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary text-base sm:text-lg px-10 py-4 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)]"
              style={{ background: 'linear-gradient(45deg, #25D366, #128C7E)' }}
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="gradient-text-purple">Questions</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our WhatsApp marketing services.</p>
          </div>
          <FAQAccordion faqs={waFaqs} />
        </div>
      </section>

      {/* ── 9. ENQUIRY SECTION ── */}
      <div id="enquiry">
        <EnquirySection />
      </div>
    </div>
  );
}

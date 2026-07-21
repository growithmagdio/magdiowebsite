import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaTimesCircle, FaLinkedinIn, FaWhatsapp, 
  FaUsers, FaChartLine, FaFilter, FaFileAlt, FaBullseye, FaRobot, 
  FaCogs
} from 'react-icons/fa';
import FAQAccordion from '../components/FAQAccordion';
import EnquirySection from '../components/home/EnquirySection';
import SEO from '../components/SEO';

const linkedinFaqs = [
  {
    q: 'What does a LinkedIn marketing agency do?',
    a: 'A LinkedIn marketing agency plans, manages, and optimizes LinkedIn advertising campaigns to help businesses generate qualified leads, build brand awareness, and improve B2B customer acquisition.'
  },
  {
    q: 'Is LinkedIn marketing suitable for small businesses?',
    a: 'Yes. LinkedIn marketing is highly effective for small businesses that target other businesses, professionals, or decision-makers, especially in industries such as SaaS, consulting, IT, manufacturing, and professional services.'
  },
  {
    q: 'How much should I budget for LinkedIn Ads?',
    a: 'Most businesses start with a monthly LinkedIn Ads budget of ₹30,000–₹75,000. For enterprise or highly competitive B2B campaigns, budgets of ₹1 lakh or more per month may be appropriate. The right budget depends on your audience, competition, and lead generation goals.'
  },
  {
    q: 'How long does it take to see results from LinkedIn marketing?',
    a: 'Campaigns can begin generating impressions and leads within a few days of launch. However, consistent optimization over several weeks typically delivers better lead quality and improved return on investment.'
  },
  {
    q: 'How do you measure LinkedIn campaign success?',
    a: 'We measure performance using business-focused metrics such as CTR, Cost Per Lead (CPL), Marketing Qualified Leads (MQLs), Sales Qualified Leads (SQLs), Conversion Rate (CVR), Return on Ad Spend (ROAS), and Pipeline Value.'
  },
  {
    q: 'Which industries benefit most from LinkedIn marketing?',
    a: 'LinkedIn is particularly effective for SaaS, ERP, IT services, manufacturing, healthcare, education, financial services, recruitment, consulting, and other B2B industries.'
  },
  {
    q: 'Can LinkedIn marketing integrate with our CRM?',
    a: 'Yes. LinkedIn campaigns can be integrated with CRM platforms such as HubSpot, Zoho CRM, Salesforce, and custom systems to automate lead management and improve sales follow-up.'
  },
  {
    q: 'Which LinkedIn ad format is best for lead generation?',
    a: 'LinkedIn Lead Gen Forms are one of the most effective formats for B2B lead generation because they allow users to submit their information without leaving the platform, resulting in higher-quality leads and improved conversion rates.'
  },
  {
    q: 'Do you only manage LinkedIn Ads?',
    a: 'No. We also help businesses integrate LinkedIn marketing with Google Ads, Meta Ads, SEO, content marketing, and marketing automation to create a unified digital growth strategy.'
  },
  {
    q: 'Why choose Magdio for LinkedIn marketing?',
    a: 'Magdio combines data-driven strategy, audience targeting, conversion tracking, CRM integration, creative optimization, and continuous performance analysis to help businesses generate qualified B2B leads and measurable growth through LinkedIn marketing.'
  }
];

export default function LinkedInAdsPage() {
  const scrollToEnquiry = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-bg min-h-screen pt-0 pb-0 bg-[#03030b]">
      <SEO 
        title="Linkedin B2B Marketing Agency in Chennai | MAGDIO" 
        description="Build stronger business connections with Magdio's LinkedIn marketing services in Chennai, delivering targeted campaigns, B2B leads and engagement growth." 
        canonicalUrl="https://www.magdio.com/services/linkedin-ads"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "LinkedIn Marketing Services",
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
          <div className="absolute -top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #0A66C2, transparent 70%)' }} />
          <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #1A22B8, transparent 70%)' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            B2B Lead Gen & Account-Based Marketing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            LinkedIn Marketing Agency <span className="gradient-text-blue">in Chennai</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg sm:text-2xl font-bold text-white/90 mb-6 max-w-4xl mx-auto font-display font-black"
          >
            Generate High-Quality B2B Leads with Strategic LinkedIn Marketing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-4xl mx-auto"
          >
            Finding business decision-makers is no longer the biggest challenge—starting meaningful conversations with them is. Many businesses invest in LinkedIn advertising expecting a steady flow of qualified leads, only to discover that high ad spend doesn't always translate into sales opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8"
          >
            <button onClick={scrollToEnquiry} className="btn-primary w-full sm:w-auto text-base sm:text-lg px-8 py-3.5" style={{ background: 'linear-gradient(45deg, #0A66C2, #004182)' }}>
              Launch Your B2B Strategy
            </button>
            <a href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27d%20like%20to%20talk%20to%20your%20LinkedIn%20marketing%20experts." target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-8 py-3 flex items-center justify-center gap-2">
              <FaWhatsapp size={18} /> Talk To Our Experts
            </a>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass-card p-6 border-white/5 shadow-[inset_0_0_15px_rgba(255,255,255,0.02)] text-left max-w-4xl mx-auto mt-12"
          >
            <h4 className="font-display font-black text-white text-sm uppercase tracking-widest text-brand-yellow mb-4">Key Campaign Takeaways:</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-white/70 text-xs sm:text-sm">
              {[
                'Reach business owners, CXOs, managers, and key decision-makers.',
                'Generate qualified B2B leads instead of low-intent traffic.',
                'Improve lead quality through audience segmentation and campaign optimization.',
                'Integrate LinkedIn campaigns with your CRM for faster sales follow-up.',
                'Measure campaign success using MQLs, SQLs, CPL, and ROAS metrics.'
              ].map((takeaway, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400 shrink-0" size={14} />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. ICP & EXPERIENCE ── */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
                ✦ B2B Audience Intelligence
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
                What Our LinkedIn <br />
                <span className="gradient-text-blue">Marketing Experience Shows</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                One insight we've consistently gained from managing B2B campaigns is that generating more clicks doesn't necessarily generate better business opportunities. In many campaigns, businesses initially targeted broad professional audiences and celebrated high click-through rates. However, after reviewing lead quality, we found that many enquiries lacked buying intent or decision-making authority.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Our approach focuses on attracting the right audience, not simply a larger audience. We align every campaign with your business objectives by identifying:
              </p>

              <div className="grid grid-cols-2 gap-2 text-white/70 text-xs sm:text-sm pt-2">
                {[
                  'Ideal Customer Profile (ICP)', 'Buying committee members', 
                  'Decision-makers', 'Industry-specific audience segments', 
                  'Company size filters', 'Job function parameters', 
                  'Seniority levels', 'Professional interests'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> B2B Methodology
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                Our LinkedIn marketing methodology combines:
              </p>
              <div className="space-y-3">
                {[
                  'Audience intelligence', 'Campaign strategy', 
                  'Conversion-focused creative', 'Landing page optimization', 
                  'CRM integration', 'Continuous performance optimization'
                ].map((meth, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-white/80 text-xs sm:text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow shrink-0" />
                    <span>{meth}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. IS LINKEDIN MARKETING RIGHT FOR YOU? ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Fit Assessment
            </div>
            <h2 className="section-title mb-4">
              Is LinkedIn Marketing the <span className="gradient-text-blue">Right Choice for Your Business?</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-white/60">
              Understanding whether LinkedIn aligns with your customer acquisition strategy is the first step toward maximizing your marketing investment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { title: 'Generate High-Quality B2B Leads', desc: 'Target professionals based on job title, industry, company size, seniority, skills, and interests.' },
              { title: 'Reach Decision-Makers Directly', desc: 'Connect with founders, CEOs, directors, HR leaders, CTOs, finance executives, and key procurement stakeholders.' },
              { title: 'Promote High-Value Services', desc: 'Ideal for ERP solutions, AI software, consulting, legal services, IT services, manufacturing, and enterprise products.' },
              { title: 'Build Brand Authority', desc: 'Establish thought leadership through educational content, research papers, case studies, and industry discussions.' },
              { title: 'Support Long Sales Cycles', desc: 'Nurture prospects throughout multi-month evaluation periods using remarketing and lead nurture content.' }
            ].map((card, i) => (
              <div key={i} className="glass-card p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <FaLinkedinIn size={18} />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{card.title}</h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 max-w-4xl mx-auto space-y-4">
            <h4 className="font-display font-black text-white text-sm uppercase tracking-widest text-brand-yellow">When LinkedIn May Not Be the Best First Choice:</h4>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Businesses selling low-cost consumer products may achieve stronger results through Meta Ads. Companies targeting active search queries may benefit from Google Ads. We evaluate your audience, sales cycle, and goals before recommending the exact platform mix.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. COMMON MISTAKES TABLE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Performance Optimization
            </div>
            <h2 className="section-title mb-4">
              Common LinkedIn Marketing Mistakes <span className="gradient-text-purple">That Reduce Performance</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-white/60">
              During campaign reviews, we frequently identify issues. Fixing these challenges delivers greater improvements than increasing ad spend.
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
                  <th className="py-4 px-4 text-red-400">Common Challenge</th>
                  <th className="py-4 px-4 text-brand-yellow">Business Impact</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm">
                {[
                  { challenge: 'Broad audience targeting', impact: 'Low-quality leads and higher advertising costs' },
                  { challenge: 'Optimizing for clicks instead of conversions', impact: 'Increased traffic but fewer qualified enquiries' },
                  { challenge: 'Weak value proposition', impact: 'Low engagement and poor lead quality' },
                  { challenge: 'Generic ad creatives', impact: 'Reduced click-through rates' },
                  { challenge: 'No Lead Gen Forms or landing page optimization', impact: 'Lower conversion rates' },
                  { challenge: 'Missing Insight Tag implementation', impact: 'Limited conversion tracking and inaccurate reporting' },
                  { challenge: 'No CRM integration', impact: 'Slow follow-up and missed opportunities' },
                  { challenge: 'Lack of remarketing strategy', impact: 'Lost prospects during longer buying journeys' }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01]">
                    <td className="py-4 px-4 font-bold flex items-center gap-2">
                      <FaTimesCircle className="text-red-500 shrink-0" size={12}/> {row.challenge}
                    </td>
                    <td className="py-4 px-4">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 5. OUR LINKEDIN MARKETING SERVICES ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Our LinkedIn <span className="gradient-text-blue">Marketing Services</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base text-white/60">
              Complete campaign management designed to help businesses connect with professionals throughout every stage of the buying journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <FaBullseye size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Lead Generation Campaigns</h3>
              <p className="text-white/40 text-xs leading-relaxed">Marketing Qualified Leads (MQLs), Sales Qualified Leads (SQLs), demo requests, and whitepaper downloads.</p>
            </div>

            {/* Service 2 */}
            <div className="glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <FaLinkedinIn size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Sponsored Content</h3>
              <p className="text-white/40 text-xs leading-relaxed">Thought leadership, industry education, case study promotions, and product launch content in the LinkedIn feed.</p>
            </div>

            {/* Service 3 */}
            <div className="glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <FaFilter size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">LinkedIn Lead Gen Forms</h3>
              <p className="text-white/40 text-xs leading-relaxed">Pre-filled profile form submissions with higher completion rates, CRM syncing, and minimal user friction.</p>
            </div>

            {/* Service 4 */}
            <div className="glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <FaRobot size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Conversation & Message Ads</h3>
              <p className="text-white/40 text-xs leading-relaxed">Interactive messaging directly in key decision-maker inboxes for demo requests, events, and consultations.</p>
            </div>

            {/* Service 5 */}
            <div className="glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <FaChartLine size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">LinkedIn Video Ads</h3>
              <p className="text-white/40 text-xs leading-relaxed">Demonstrate complex products, explain SaaS solutions, and share customer success stories with engaging video format.</p>
            </div>

            {/* Service 6 */}
            <div className="glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <FaFileAlt size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Document Ads</h3>
              <p className="text-white/40 text-xs leading-relaxed">Share industry reports, brochures, whitepapers, case studies, and business presentations directly in-feed.</p>
            </div>

            {/* Service 7 */}
            <div className="glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <FaUsers size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Account-Based Marketing (ABM)</h3>
              <p className="text-white/40 text-xs leading-relaxed">Laser-focused targeting of high-value target accounts, strategic enterprise accounts, and specific target company lists.</p>
            </div>

            {/* Service 8 */}
            <div className="glass-card p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <FaCogs size={18} />
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">Remarketing Campaigns</h3>
              <p className="text-white/40 text-xs leading-relaxed">Reconnect with website visitors, video viewers, lead form openers, and previous campaign engagers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Our LinkedIn <span className="gradient-text-blue">Marketing Process</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-sm sm:text-base text-white/60">
              Built around research, ICP development, creative positioning, testing, and continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Business Discovery', desc: 'Understanding goals, products, sales process, and customer journey.' },
              { step: '2', title: 'ICP Development', desc: 'Defining industry, seniority, job titles, and buying intent parameters.' },
              { step: '3', title: 'Campaign Strategy', desc: 'Budget allocation, offer positioning, and conversion tracking setup.' },
              { step: '4', title: 'Creative Development', desc: 'Developing ad copy, visual assets, lead magnets, and CTAs.' },
              { step: '5', title: 'Campaign Launch', desc: 'Configuring Campaign Manager, Insight Tag, and Lead Gen Forms.' },
              { step: '6', title: 'Continuous Optimization', desc: 'Audience refinement, A/B creative tests, and lead quality evaluation.' },
              { step: '7', title: 'Reporting & Scaling', desc: 'MQL, SQL, CPL, and ROAS reporting with strategic scaling.' }
            ].map((proc, idx) => (
              <div key={idx} className="glass-card p-4 border border-white/5 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 group">
                <div>
                  <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 text-xs font-bold mb-3 group-hover:scale-110 transition-transform">{proc.step}</span>
                  <h4 className="font-display font-bold text-white text-xs mb-1 group-hover:text-brand-yellow transition-colors leading-snug">{proc.title}</h4>
                  <p className="text-white/40 text-[10px] leading-normal">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LINKEDIN VS GOOGLE VS META TABLE ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Cross-Platform Matrix
            </div>
            <h2 className="section-title mb-4">
              LinkedIn Ads vs <span className="gradient-text-gold">Google Ads vs Meta Ads</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto text-white/60">
              Selecting the right platform depends on your business goals, target audience, and buying behavior.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto glass-card border border-white/5 rounded-2xl p-2 sm:p-6 max-w-4xl mx-auto"
          >
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-white font-display font-bold text-xs sm:text-sm uppercase">
                  <th className="py-4 px-3">Feature</th>
                  <th className="py-4 px-3 text-blue-400">LinkedIn Ads</th>
                  <th className="py-4 px-3 text-brand-yellow">Google Ads</th>
                  <th className="py-4 px-3 text-pink-400">Meta Ads</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-xs sm:text-sm">
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-3 font-bold">Best For</td>
                  <td className="py-3 px-3">B2B Lead Generation</td>
                  <td className="py-3 px-3">High Purchase Intent</td>
                  <td className="py-3 px-3">Brand Awareness & Leads</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-3 font-bold">Audience</td>
                  <td className="py-3 px-3">Professionals & Decision Makers</td>
                  <td className="py-3 px-3">Active Search Users</td>
                  <td className="py-3 px-3">Interest-Based Audiences</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-3 font-bold">Targeting</td>
                  <td className="py-3 px-3">Job Titles, Industry, Company Size</td>
                  <td className="py-3 px-3">Keywords & Search Intent</td>
                  <td className="py-3 px-3">Interests & Behaviour</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-3 font-bold">Sales Cycle</td>
                  <td className="py-3 px-3">Medium to Long</td>
                  <td className="py-3 px-3">Short to Medium</td>
                  <td className="py-3 px-3">Short</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="py-3 px-3 font-bold">Best Industries</td>
                  <td className="py-3 px-3">SaaS, ERP, Manufacturing, Consulting</td>
                  <td className="py-3 px-3">Local Services, Ecommerce, Healthcare</td>
                  <td className="py-3 px-3">D2C, Education, Real Estate</td>
                </tr>
                <tr className="hover:bg-white/[0.01]">
                  <td className="py-3 px-3 font-bold">Primary Goal</td>
                  <td className="py-3 px-3">Qualified Business Leads</td>
                  <td className="py-3 px-3">Sales & Enquiries</td>
                  <td className="py-3 px-3">Awareness, Leads & Sales</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 8. GEOGRAPHIC SERVICE AREA ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-8 leading-tight">
               LinkedIn Marketing Agency in <span className="gradient-text-blue">Chennai</span>
            </h2>
            <div className="glass-card p-8 sm:p-10 border border-white/5 shadow-xl text-left space-y-6">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                 Magdio provides LinkedIn marketing services for businesses across Chennai, Coimbatore, Madurai, and throughout Tamil Nadu. We also work remotely with businesses across India and international clients.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-semibold">
                 Whether you need LinkedIn Lead Generation campaigns, Sponsored Content, Document Ads, or Account-Based Marketing (ABM), our team provides customized solutions designed around business objectives and measurable outcomes.
              </p>
            </div>
         </div>
      </section>

      {/* ── 9. GET STARTED CTA ── */}
      <section className="py-20 lg:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-blue-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white mb-6"
          >
            Ready to Connect with <span className="gradient-text-blue">Key B2B Decision-Makers?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto"
          >
            Stop focusing on generic clicks. Build a predictable B2B lead generation engine with Magdio.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToEnquiry}
              className="btn-primary text-base sm:text-lg px-10 py-4 shadow-[0_0_40px_rgba(10,102,194,0.3)] hover:shadow-[0_0_60px_rgba(10,102,194,0.5)]"
              style={{ background: 'linear-gradient(45deg, #0A66C2, #004182)' }}
            >
              Get Your B2B Strategy
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 10. FAQ SECTION ── */}
      <section className="py-16 lg:py-24 relative bg-[#03030b] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="gradient-text-purple">Questions</span>
            </h2>
            <p className="text-white/60">Everything you need to know about our LinkedIn Ads & B2B marketing services.</p>
          </div>
          <FAQAccordion faqs={linkedinFaqs} />
        </div>
      </section>

      {/* ── 11. ENQUIRY SECTION ── */}
      <div id="enquiry">
        <EnquirySection />
      </div>
    </div>
  );
}

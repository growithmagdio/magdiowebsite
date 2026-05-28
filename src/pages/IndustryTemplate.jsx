import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industriesData } from '../data/industriesData';
import EnquirySection from '../components/home/EnquirySection';
import FAQSection from '../components/home/FAQSection';
import { FaCheckCircle, FaArrowRight, FaIndustry } from 'react-icons/fa';

export default function IndustryTemplate() {
  const { industryId } = useParams();
  const industry = industriesData.find(i => i.id === industryId);

  // If industry not found, redirect to home
  if (!industry) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page-bg min-h-screen pt-24 pb-0">
      {/* ── HERO SECTION ── */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03030b]/80 via-[#06071a]/90 to-[#03030b] z-10" />
          <img src={industry.heroImage} alt={industry.title} className="w-full h-full object-cover opacity-30 blur-sm mix-blend-overlay" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-6"
          >
            <FaIndustry /> {industry.name}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-6"
          >
            {industry.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-10"
          >
            {industry.subtitle}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            Consult Our Experts
          </motion.button>
        </div>
      </section>

      {/* ── OVERVIEW & SOLUTIONS ── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-black text-4xl text-white mb-6">Industry <span className="gradient-text-yellow">Overview</span></h2>
            <p className="text-white/60 leading-relaxed text-lg mb-8">{industry.overview}</p>
            
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              Our Solutions for {industry.name}
            </h3>
            <ul className="space-y-4">
              {industry.solutions.map((solution, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <FaCheckCircle className="text-brand-yellow" /> {solution}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="glass-card-premium p-10 border-brand-yellow/20 shadow-[0_0_40px_rgba(242,179,0,0.1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-8">Business Outcomes</h3>
            <div className="grid grid-cols-1 gap-4 mb-10">
              {industry.benefits.map((benefit, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-brand-yellow/50 transition-colors flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center font-bold text-brand-yellow">
                     {i + 1}
                   </div>
                  <h4 className="text-white font-bold">{benefit}</h4>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold text-brand-lightblue uppercase tracking-widest mb-4">Recommended Services</h4>
              <div className="flex flex-wrap gap-2">
                {industry.relatedServices.map(srv => (
                  <Link to="/services" key={srv} className="text-xs px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-white/80 hover:bg-brand-blue hover:text-white transition-colors">
                    {srv}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ & CONTACT ── */}
      <FAQSection />
      
      <div id="enquiry">
        <EnquirySection />
      </div>

    </div>
  );
}

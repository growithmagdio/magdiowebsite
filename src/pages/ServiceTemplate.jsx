import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import EnquirySection from '../components/home/EnquirySection';
import FAQSection from '../components/home/FAQSection';
import { FaCheckCircle, FaTools, FaChartLine } from 'react-icons/fa';

export default function ServiceTemplate() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  // If service not found, redirect to main services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="page-bg min-h-screen pt-24 pb-0">
      {/* ── HERO SECTION ── */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03030b]/80 via-[#06071a]/90 to-[#03030b] z-10" />
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-30 blur-sm mix-blend-overlay" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-wider mb-6"
          >
            {service.category}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-10"
          >
            {service.subtitle}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* ── OVERVIEW & FEATURES ── */}
      <section className="py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-display font-black text-4xl text-white mb-6">Service <span className="gradient-text-purple">Overview</span></h2>
            <p className="text-white/60 leading-relaxed text-lg mb-8">{service.overview}</p>
            
            <h3 className="font-display font-bold text-2xl text-white mb-6 flex items-center gap-2">
              <FaChartLine className="text-brand-yellow" /> Core Benefits
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <FaCheckCircle className="text-brand-purple" /> {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="glass-card-premium p-10">
            <h3 className="font-display font-bold text-2xl text-white mb-8">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-brand-purple/50 transition-colors">
                  <h4 className="text-brand-lightblue font-bold mb-2">{feature}</h4>
                  <div className="w-8 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS USED ── */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-display font-bold text-2xl text-white mb-10 flex items-center justify-center gap-3">
            <FaTools className="text-brand-yellow" /> Technologies & Tools We Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {service.tools.map((tool, i) => (
              <span key={i} className="px-6 py-3 rounded-full glass-card text-white/80 font-medium hover:text-brand-yellow hover:border-brand-yellow/50 transition-colors cursor-default">
                {tool}
              </span>
            ))}
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

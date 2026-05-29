import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function ServiceBenefits({ service }) {
  const benefits = service.benefits || [];

  if (benefits.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
      {/* Background spot */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 bg-brand-yellow" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text and value proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Strategic Value
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
              Expected <span className="gradient-text-gold">Benefits</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Our workflows are fully ROI-oriented, ensuring that all integrations and digital initiatives align with concrete commercial objectives.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-yellow to-yellow-500 rounded-full" />
          </motion.div>

          {/* Right: Interactive Benefits Cards List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="glass-card p-5 sm:p-6 flex items-start gap-4 cursor-default border border-white/5 hover:border-brand-yellow/30 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow mt-0.5">
                  <FaCheckCircle size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base sm:text-lg mb-1">
                    {benefit}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Designed to maximize market positioning, optimize overall funnel health, and compound growth metrics over time.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

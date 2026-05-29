import { motion } from 'framer-motion';
import { FaSearch, FaCogs, FaTools, FaCheckDouble, FaRocket } from 'react-icons/fa';

const defaultSteps = [
  { num: '01', title: 'Audit & Discovery', desc: 'Analyzing current telemetry, asset performance, and user pathways.', icon: FaSearch, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
  { num: '02', title: 'Tactical Blueprint', desc: 'Drafting custom strategy charts integrated with brand metrics.', icon: FaCogs, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
  { num: '03', title: 'Execution & Setup', desc: 'Deploying optimized landing tools, ads, copy, and AI scripts.', icon: FaTools, color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/30' },
  { num: '04', title: 'Telemetry Tuning', desc: 'Optimizing and adjusting triggers to maximize organic yields.', icon: FaCheckDouble, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' },
  { num: '05', title: 'Scale & Compound', desc: 'Expanding winning funnels to capture massive market shares.', icon: FaRocket, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' }
];

export default function ServiceProcess({ service }) {
  const steps = service.process || defaultSteps;

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Core Execution
          </div>
          <h2 className="section-title mb-4">
            Our Proven <span className="gradient-text-gold">Process</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A precise, five-stage framework engineered to establish clarity, maintain quality, and deliver high-impact results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-white/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-yellow origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const IconComponent = step.icon || FaSearch;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Number Background */}
                  <div className="absolute -top-4 -right-2 font-display font-black text-5xl text-white/[0.03] group-hover:text-white/[0.08] transition-colors z-0">
                    {step.num}
                  </div>

                  {/* Icon Node */}
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 border-[#03030b] z-10 mb-6 transition-transform duration-300 group-hover:scale-110 ${step.bg || 'bg-white/5 border-white/10'}`}>
                    <IconComponent size={28} className={step.color || 'text-white'} />
                  </div>

                  <h4 className="font-display font-bold text-white text-lg sm:text-xl mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

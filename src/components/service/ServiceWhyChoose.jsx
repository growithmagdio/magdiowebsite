import { motion } from 'framer-motion';
import { FaBrain, FaChartBar, FaCogs, FaMoneyBillWave } from 'react-icons/fa';

const advantages = [
  { title: 'AI-Native Integration', desc: 'We do not just overlay AI; we engineer fully automated AI architectures into your growth funnels.', icon: FaBrain },
  { title: 'Deep Data Telemetry', desc: 'Every campaign and path is fully wired, yielding transparent analytics that eliminate guesswork.', icon: FaChartBar },
  { title: 'Workflow Autopilot', desc: 'We establish seamless data integrations, saving your organization dozens of manual hours every week.', icon: FaCogs },
  { title: 'ROI Acceleration', desc: 'All initiatives are strictly tied to commercial KPIs, maximizing pipeline value and conversion rates.', icon: FaMoneyBillWave }
];

export default function ServiceWhyChoose({ service }) {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title & Key Stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
                ✦ Studio Advantage
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Why Choose <br />
                <span className="gradient-text-gold">MAGDIO?</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                We function as a specialized expansion of your in-house operations, blending deep technological engineering with high-impact modern marketing.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card-premium p-5 border-l-4 border-l-brand-yellow">
                  <h4 className="text-2xl sm:text-3xl font-display font-black text-white mb-1">10x</h4>
                  <p className="text-white/50 text-xs sm:text-sm">Average ROI Multiplier</p>
                </div>
                <div className="glass-card-premium p-5 border-l-4 border-l-brand-purple">
                  <h4 className="text-2xl sm:text-3xl font-display font-black text-white mb-1">98%</h4>
                  <p className="text-white/50 text-xs sm:text-sm">Client Retention Rate</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grid of Reasons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv, i) => {
              const IconComponent = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-6 border border-white/5 hover:border-brand-blue/30 hover:shadow-[0_8px_30px_rgba(26,34,184,0.1)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-blue/20 text-brand-lightblue mb-4 border border-brand-blue/30 group-hover:scale-110 transition-transform">
                    <IconComponent size={18} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">
                    {adv.title}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {adv.desc}
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

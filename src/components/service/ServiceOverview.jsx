import { motion } from 'framer-motion';

export default function ServiceOverview({ service }) {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Overview details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Core Profile
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6 leading-tight">
            Service <span className="gradient-text-purple">Overview</span>
          </h2>
          <p className="text-white/60 leading-relaxed text-base sm:text-lg mb-8">
            {service.overview || "We build tailored digital assets and configure them with high precision, securing the best strategies and tech implementations that guarantee growth and return on investment."}
          </p>
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner">
            <p className="text-white/40 text-xs sm:text-sm italic">
              "Technology and intelligence combined to yield predictable growth for visionary organizations."
            </p>
          </div>
        </motion.div>

        {/* Right: Sleek Interactive Graphic Mockup Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card-premium p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl" />
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-pulse" />
            Performance & Impact
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>Operational Efficiency</span>
                <span className="text-brand-yellow font-bold">95%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-yellow rounded-full" 
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>ROI Acceleration</span>
                <span className="text-brand-purple font-bold">10x Avg</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-purple-500 rounded-full" 
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>User Retention Increase</span>
                <span className="text-brand-lightblue font-bold">88%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '88%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-lightblue rounded-full" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

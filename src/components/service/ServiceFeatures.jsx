import { motion } from 'framer-motion';

export default function ServiceFeatures({ service }) {
  const features = service.features || [];

  if (features.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Scope of Work
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
            Key <span className="gradient-text-blue">Features</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            High-caliber technical capabilities integrated directly into your operations to drive scalable output.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 flex flex-col justify-between cursor-pointer border border-white/5 hover:border-brand-purple/40 hover:shadow-[0_8px_30px_rgba(138,43,226,0.15)] transition-all duration-300 group min-h-[160px]"
            >
              <div>
                <span className="text-xs font-bold text-brand-yellow font-display block mb-3 opacity-60">
                  FEATURE 0{i + 1}
                </span>
                <h4 className="font-display font-bold text-white text-lg sm:text-xl leading-snug group-hover:text-brand-yellow transition-colors duration-300">
                  {feature}
                </h4>
              </div>
              <div className="w-8 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mt-4 transition-all duration-300 group-hover:w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

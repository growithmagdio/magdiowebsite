import { motion } from 'framer-motion';
import { FaShoppingCart, FaBuilding, FaHeartbeat, FaLaptopCode, FaGlobe, FaCogs } from 'react-icons/fa';

const defaultIndustries = [
  { name: 'E-Commerce & Retail', icon: FaShoppingCart, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { name: 'Real Estate & Hospitality', icon: FaBuilding, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'Healthcare & Biotech', icon: FaHeartbeat, color: 'text-red-400', bg: 'bg-red-500/10' },
  { name: 'B2B SaaS & Tech Enterprises', icon: FaLaptopCode, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { name: 'Direct-to-Consumer Brands', icon: FaGlobe, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { name: 'Industrial & IoT Services', icon: FaCogs, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
];

export default function ServiceIndustries({ service }) {
  const industries = service.industries || defaultIndustries;

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/30 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
            ✦ Target Domains
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
            Industries <span className="gradient-text-purple">Served</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            We adapt our technology models across diverse market sectors to secure massive scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => {
            const IconComponent = ind.icon || FaLaptopCode;
            return (
              <motion.div
                key={ind.name || ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 flex flex-col items-center justify-center text-center cursor-pointer border border-white/5 hover:border-brand-purple/40 hover:shadow-[0_4px_25px_rgba(138,43,226,0.15)] transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${ind.bg || 'bg-white/5'} ${ind.color || 'text-white'}`}>
                  <IconComponent size={20} />
                </div>
                <h4 className="font-display font-bold text-white text-sm sm:text-base leading-tight group-hover:text-brand-yellow transition-colors duration-300">
                  {ind.name || ind}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

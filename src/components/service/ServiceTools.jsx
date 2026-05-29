import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

export default function ServiceTools({ service }) {
  const tools = service.tools || [];

  if (tools.length === 0) return null;

  return (
    <section className="py-16 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-transparent to-brand-purple/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-2xl text-white mb-10 flex items-center justify-center gap-3"
        >
          <FaTools className="text-brand-yellow animate-pulse" size={20} /> 
          Technologies & Tools We Master
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="px-6 py-3 rounded-full glass-card text-white/80 font-medium hover:text-brand-yellow hover:border-brand-yellow/50 hover:shadow-[0_0_15px_rgba(242,179,0,0.2)] transition-all duration-300 cursor-default border border-white/10 select-none text-sm md:text-base"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

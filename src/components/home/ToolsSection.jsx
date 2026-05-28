import { motion } from 'framer-motion';

// Placeholder tools since we don't have SVGs for all of them
const tools = [
  { name: 'Google Analytics', color: 'text-orange-500',  glow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]' },
  { name: 'Tag Manager',      color: 'text-blue-500',    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]' },
  { name: 'Search Console',   color: 'text-indigo-500',  glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]' },
  { name: 'Meta Ads',         color: 'text-blue-600',    glow: 'hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]' },
  { name: 'Google Ads',       color: 'text-red-500',     glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]' },
  { name: 'Shopify',          color: 'text-emerald-500', glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]' },
  { name: 'WordPress',        color: 'text-blue-400',    glow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.4)]' },
  { name: 'OpenAI',           color: 'text-white',       glow: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]' },
  { name: 'HubSpot',          color: 'text-orange-600',  glow: 'hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]' },
  { name: 'SEMrush',          color: 'text-orange-400',  glow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.4)]' },
  { name: 'Ahrefs',           color: 'text-blue-500',    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]' },
  { name: 'Firebase',         color: 'text-yellow-500',  glow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]' },
];

export default function ToolsSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-lightblue text-xs font-bold uppercase tracking-wider mb-4">
            Tech Stack
          </div>
          <h2 className="section-title mb-4">
            Tools & <span className="gradient-text-blue">Platforms</span> We Master
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            We leverage industry-leading software and platforms to build, track, and scale your digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.4 }}
              className={`glass-card p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 ${tool.glow} hover:-translate-y-2 border border-white/5 hover:border-white/20`}
            >
              <h4 className={`font-display font-black text-xl mb-2 ${tool.color}`}>{tool.name}</h4>
              <div className="w-12 h-1 mt-2 rounded-full bg-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

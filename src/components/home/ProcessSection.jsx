import { motion } from 'framer-motion';
import { FaSearch, FaLightbulb, FaCode, FaChartLine, FaRocket } from 'react-icons/fa';

const steps = [
  {
    num: '01',
    title: 'Research',
    desc: 'Deep dive into your market, competitors, and target audience to find the edge.',
    icon: FaSearch,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/30'
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Crafting a customized blueprint blending marketing tactics with AI automation.',
    icon: FaLightbulb,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/30'
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Building high-conversion assets, from web platforms to advertising creatives.',
    icon: FaCode,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/30'
  },
  {
    num: '04',
    title: 'Optimization',
    desc: 'Continuous A/B testing and performance tuning to maximize ROI.',
    icon: FaChartLine,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/30'
  },
  {
    num: '05',
    title: 'Growth',
    desc: 'Scaling the winning strategies to dominate your industry.',
    icon: FaRocket,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4">
            How We Work
          </div>
          <h2 className="section-title mb-4">
            Our Proven <span className="gradient-text-gold">Workflow</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A systematic approach designed to eliminate guesswork and deliver predictable, scalable results.
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
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-2 font-display font-black text-5xl text-white/5 group-hover:text-white/10 transition-colors z-0">
                  {step.num}
                </div>

                {/* Icon Node */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 border-[#03030b] z-10 mb-6 transition-transform duration-300 group-hover:scale-110 ${step.bg}`}>
                  <step.icon size={32} className={step.color} />
                </div>

                <h4 className="font-display font-bold text-white text-xl mb-3">{step.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

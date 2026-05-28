import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBullhorn, FaCode, FaRobot, FaPaintBrush, FaChartPie, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    category: 'Marketing',
    icon: FaBullhorn,
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns to boost your ROI and brand visibility.',
    path: '/services/digital-marketing',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20'
  },
  {
    category: 'Development',
    icon: FaCode,
    title: 'Web & App Development',
    desc: 'Scalable software, websites, and mobile apps built for the future.',
    path: '/services/web-development',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    category: 'AI Solutions',
    icon: FaRobot,
    title: 'AI Agent Development',
    desc: 'Custom AI agents and automation to save hours of operational work.',
    path: '/services/ai-agent-development',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20'
  },
  {
    category: 'Branding',
    icon: FaPaintBrush,
    title: 'Brand Identity',
    desc: 'Premium logo design and complete branding guidelines.',
    path: '/services/branding-services',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20'
  },
  {
    category: 'Analytics',
    icon: FaChartPie,
    title: 'Data & Tracking',
    desc: 'Advanced Google Analytics and Tag Manager setups.',
    path: '/services/google-analytics-setup',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-4">
            Our Expertise
          </div>
          <h2 className="section-title mb-4">
            Full-Stack <span className="gradient-text-gold">Digital Services</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Comprehensive solutions to scale your business, from initial strategy to final execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-premium p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${svc.bg}`}>
                <svc.icon size={24} className={svc.color} />
              </div>
              <span className="text-brand-yellow font-bold text-xs uppercase tracking-wider mb-2 block">
                {svc.category}
              </span>
              <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-brand-lightblue transition-colors">
                {svc.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                {svc.desc}
              </p>
              
              <Link to={svc.path} className="flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-brand-yellow transition-colors mt-auto">
                Discover More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 5 * 0.1 }}
            className="p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/5 transition-all"
            style={{ background: 'linear-gradient(135deg, rgba(242,179,0,0.1) 0%, transparent 100%)' }}
            onClick={() => window.location.href = '/services'}
          >
            <h3 className="font-display font-bold text-white text-2xl mb-4">
              Explore All 25+ <br/> Services
            </h3>
            <div className="w-12 h-12 rounded-full bg-brand-yellow text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(242,179,0,0.4)]">
              <FaArrowRight />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

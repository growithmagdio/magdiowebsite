import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaInstagram, FaSearch, FaEnvelope, FaCode, FaFunnelDollar,
  FaChartLine, FaPenNib, FaUsers, FaLightbulb, FaArrowRight
} from 'react-icons/fa';

const services = [
  {
    icon: FaInstagram,
    title: 'Social Media Marketing',
    desc: 'Build engaged communities and viral content strategies across all major platforms.',
    color: '#E1306C',
  },
  {
    icon: FaChartLine,
    title: 'Lead Generation',
    desc: 'Attract and convert high-quality leads using data-driven targeting methods.',
    color: '#F2B300',
  },
  {
    icon: FaUsers,
    title: 'Personal Branding',
    desc: 'Position yourself as the go-to authority in your niche with compelling narratives.',
    color: '#D9D7FF',
  },
  {
    icon: FaCode,
    title: 'Web Development',
    desc: 'Beautiful, high-performance websites engineered for conversions and growth.',
    color: '#BFD7FF',
  },
  {
    icon: FaEnvelope,
    title: 'Email Marketing',
    desc: 'Nurture leads and retain customers with personalized, automated email campaigns.',
    color: '#F2B300',
  },
  {
    icon: FaFunnelDollar,
    title: 'Sales Funnel Development',
    desc: 'Strategic funnels that guide prospects from awareness to loyal customers.',
    color: '#1A22B8',
  },
  {
    icon: FaSearch,
    title: 'SEO Services',
    desc: 'Dominate search rankings with technical SEO, content strategy, and link building.',
    color: '#4CAF50',
  },
  {
    icon: FaPenNib,
    title: 'Content Marketing',
    desc: 'Compelling content that educates, entertains, and drives meaningful engagement.',
    color: '#FF6B6B',
  },
  {
    icon: FaLightbulb,
    title: 'Growth Consultation',
    desc: 'Strategic advisory sessions to identify opportunities and accelerate your growth.',
    color: '#F2B300',
  },
];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ServicesPage() {
  return (
    <div className="page-bg min-h-screen pt-28 pb-20">
      {/* Blobs */}
      <div className="blob w-96 h-96 top-0 -right-40" style={{ background: '#1A22B8' }} />
      <div className="blob w-80 h-80 bottom-40 -left-20 animation-delay-4000" style={{ background: '#F2B300' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-yellow font-semibold tracking-widest text-sm mb-3 uppercase"
          >
            ✦ What We Do
          </motion.p>
          <h1 className="section-title mb-5">
            We Provide{' '}
            <span className="gradient-text">Expertise Solutions</span>
          </h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            We deliver powerful digital marketing and business growth solutions designed to help
            brands succeed in today's competitive online landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="service-card group relative overflow-hidden"
            >
              {/* Hover glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${service.color}15, transparent 60%)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${service.color}20`, border: `1px solid ${service.color}30` }}
              >
                <service.icon size={24} style={{ color: service.color }} />
              </div>

              <h3 className="font-display font-bold text-white text-xl mb-3 relative z-10 group-hover:text-brand-yellow transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed relative z-10">
                {service.desc}
              </p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-2 text-brand-yellow text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                Learn More <FaArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(26,34,184,0.3) 0%, rgba(242,179,0,0.15) 100%)',
            border: '1px solid rgba(26,34,184,0.3)',
            boxShadow: '0 0 60px rgba(26,34,184,0.2)',
          }}
        >
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4">
            Ready to <span className="gradient-text-gold">Scale Your Business?</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Let's craft a custom growth strategy designed specifically for your brand.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Free Consultation <FaArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

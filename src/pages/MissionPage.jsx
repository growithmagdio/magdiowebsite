import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCrosshairs, FaPalette, FaHandshake, FaPaintBrush, FaArrowRight, FaRocket
} from 'react-icons/fa';
import RocketHero from '../components/RocketHero';

const features = [
  {
    icon: FaCrosshairs,
    title: 'Precision Content Strategy',
    desc: 'Every piece of content is crafted with laser-focused intent — reaching the right audience at the right moment with the right message.',
  },
  {
    icon: FaPalette,
    title: 'Strategic Branding',
    desc: 'We build brands that resonate. From logo to tone of voice, every element is intentionally designed to leave a lasting impression.',
  },
  {
    icon: FaHandshake,
    title: 'Powerful Collaborations',
    desc: 'We forge strategic partnerships and influencer collaborations that amplify your reach and accelerate brand growth exponentially.',
  },
  {
    icon: FaPaintBrush,
    title: 'Modern Creative Designs',
    desc: 'Visually stunning designs that blend aesthetics with strategy — turning browsers into buyers and followers into fans.',
  },
];

const pillars = [
  { number: '01', title: 'Innovate', desc: "Constantly push the boundaries of what's possible in digital marketing." },
  { number: '02', title: 'Inspire', desc: 'Create content and campaigns that genuinely move people to action.' },
  { number: '03', title: 'Impact', desc: 'Deliver measurable results that matter to your bottom line.' },
  { number: '04', title: 'Integrity', desc: 'Build relationships built on transparency, trust, and long-term success.' },
];

export default function MissionPage() {
  return (
    <div className="page-bg min-h-screen pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Blobs */}
      <div className="blob w-96 h-96 top-10 -left-32" style={{ background: '#1A22B8' }} />
      <div className="blob w-72 h-72 bottom-20 -right-20 animation-delay-4000" style={{ background: '#F2B300' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-brand-yellow font-semibold tracking-widest text-sm mb-3 uppercase">✦ Our Purpose</p>
          <h1 className="section-title mb-5">
            Our <span className="gradient-text">Mission</span>
          </h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            At Magdio, our mission is to help businesses grow digitally through innovative marketing
            strategies, creative storytelling, and result-driven campaigns.
          </p>
        </motion.div>

        {/* ── Main Layout: Illustration + Features ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
          {/* Left: Interactive Rocket Hero Scene */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center overflow-visible"
          >
            <RocketHero />
          </motion.div>

          {/* Right: Features */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass-card p-6 flex items-start gap-5 group cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, rgba(26,34,184,0.5), rgba(242,179,0,0.2))' }}
                >
                  <feature.icon size={20} className="text-brand-yellow" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-brand-yellow transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 4 Pillars ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-black text-3xl md:text-4xl text-white">
            The <span className="gradient-text-gold">4 I's</span> of MAGDIO
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 text-center group cursor-default"
            >
              <p className="font-display font-black text-5xl gradient-text-gold mb-3 group-hover:scale-110 inline-block transition-transform">
                {p.number}
              </p>
              <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-brand-yellow transition-colors">
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/50 mb-6 max-w-lg mx-auto">
            Ready to align your brand with a partner who shares your vision for growth?
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Journey <FaArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

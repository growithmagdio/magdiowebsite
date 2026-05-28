import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRocket, FaChartLine, FaHeart,
  FaCheck, FaArrowRight, FaTrophy
} from 'react-icons/fa';

const metrics = [
  { value: '150+', label: 'Brands Grown',       icon: FaRocket },
  { value: '98%',  label: 'Client Satisfaction', icon: FaHeart },
  { value: '10x',  label: 'Average ROI',         icon: FaChartLine },
  { value: '5+',   label: 'Years Experience',    icon: FaTrophy },
];

const whyUs = [
  'AI-powered marketing strategies',
  'Transparent reporting & analytics',
  'Dedicated account manager',
  'Proven growth frameworks',
  '24/7 client support',
  'ROI-focused campaigns',
  'Creative-first approach',
  'Data-driven decisions',
];



export default function AboutPage() {
  return (
    <div className="page-bg min-h-screen pt-24 pb-16 md:pt-20 md:pb-20">
      {/* Blobs */}
      <div className="blob w-96 h-96 top-10 -right-32" style={{ background: '#1A22B8' }} />
      <div className="blob w-80 h-80 bottom-40 -left-20 animation-delay-4000" style={{ background: '#F2B300' }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* ═══ HERO HEADER — reference style ═══ */}
        <div className="relative mb-24 pt-10 overflow-hidden rounded-3xl">
          {/* Right-side gradient glow (pink-lavender-blue like reference) */}
          <div
            className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 80% 40%, rgba(217,215,255,0.18) 0%, rgba(191,215,255,0.12) 40%, rgba(26,34,184,0.08) 70%, transparent 100%)',
            }}
          />
          {/* Extra pink puff top-right */}
          <div
            className="absolute -top-10 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'rgba(242,179,0,0.07)' }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center px-2 md:px-6 py-10">
            {/* LEFT: Badge + Heading + Paragraphs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Pill badge — matches reference exactly */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'rgba(242,179,0,0.15)',
                  border: '1px solid rgba(242,179,0,0.4)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
                <span className="text-brand-yellow text-xs font-bold uppercase tracking-widest">
                  Who We Are in the World
                </span>
              </motion.div>

              {/* Giant heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="font-display font-black leading-[0.95] mb-8"
                style={{ fontSize: 'clamp(36px, 8vw, 110px)' }}
              >
                <span className="text-white block">Your</span>
                <span className="block" style={{
                  background: 'linear-gradient(135deg, #D9D7FF 0%, #BFD7FF 50%, #1A22B8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Digital</span>
                <span className="text-white block">Marketing</span>
                <span className="gradient-text-gold block">Experts</span>
              </motion.h1>

              {/* Paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4 max-w-lg"
              >
                <p className="text-white/60 leading-relaxed text-base">
                  We're passionate about helping businesses grow through innovative and
                  data-driven digital marketing strategies. With years of experience in
                  the industry, our team of certified experts delivers comprehensive solutions
                  tailored to meet your unique business needs.
                </p>
                <p className="text-white/50 leading-relaxed text-base">
                  We pride ourselves on staying ahead of the latest trends and technologies
                  to ensure our clients always have a competitive edge. From SEO and PPC to
                  social media marketing and content creation, our goal is to help you
                  achieve your business objectives through smart, effective marketing.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT: Floating metric cards (decorative) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:flex flex-col gap-4 items-end"
            >
              {[
                { val: '150+', label: 'Brands Grown',       color: '#1A22B8' },
                { val: '10x',  label: 'Average ROI',        color: '#F2B300' },
                { val: '98%',  label: 'Client Satisfaction',color: '#D9D7FF' },
                { val: '5+',   label: 'Years Experience',   color: '#BFD7FF' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
                  className="glass-card px-8 py-5 flex items-center gap-5 w-72"
                  style={{ boxShadow: `0 0 20px ${item.color}30` }}
                >
                  <div
                    className="w-2 h-10 rounded-full shrink-0"
                    style={{ background: item.color }}
                  />
                  <div>
                    <p className="font-display font-black text-3xl text-white">{item.val}</p>
                    <p className="text-white/40 text-xs mt-0.5">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Metrics Strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 text-center group cursor-default"
            >
              <m.icon size={28} className="text-brand-yellow mx-auto mb-4 group-hover:scale-125 transition-transform" />
              <p className="font-display font-black text-4xl gradient-text-gold mb-2">{m.value}</p>
              <p className="text-white/50 text-sm">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Vision Section ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-yellow font-semibold tracking-widest text-sm mb-3 uppercase">Our Vision</p>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6 leading-tight">
              To be the{' '}
              <span className="gradient-text">#1 AI-Powered</span>
              {' '}Growth Studio in South Asia
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              We envision a world where every business, regardless of size, has access to
              world-class digital marketing powered by artificial intelligence. Our studio
              exists to democratize growth — making enterprise-level strategies accessible
              to ambitious brands everywhere.
            </p>
            <p className="text-white/50 leading-relaxed">
              Through relentless innovation, creative mastery, and data-driven execution,
              we're building the future of digital marketing — one brand at a time.
            </p>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-yellow font-semibold tracking-widest text-sm mb-5 uppercase">Why Choose Us</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 glass-card p-3.5 group cursor-default hover:border-brand-yellow/30 transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(242,179,0,0.2)' }}>
                    <FaCheck size={10} className="text-brand-yellow" />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>



        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display font-black text-3xl text-white mb-4">
            Want to <span className="gradient-text">Work With Us?</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Let's build something incredible together.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch <FaArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

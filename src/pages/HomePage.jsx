import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight, FaArrowLeft, FaPhone, FaCalendarAlt,
  FaRocket, FaStar, FaLightbulb, FaFlask, FaChartLine,
  FaPuzzlePiece, FaBrain, FaClock, FaBolt
} from 'react-icons/fa';

// ── Client Logo Components ──
function CastrolLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-9 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
      <polygon points="10,48 15,12 120,12 115,48" fill="#00833e" />
      <polygon points="122,12 127,12 121,48 116,48" fill="#00833e" />
      <text x="32" y="40" fontFamily="'Impact', sans-serif" fontSize="26" fontWeight="bold" fontStyle="italic" fill="#e31b23" letterSpacing="0.5">
        Castrol
      </text>
      <polygon points="17,34 32,34 29,43 14,43" fill="#e31b23" />
    </svg>
  );
}

function NarasusLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-10 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
      <path d="M10,12 L190,12 L180,48 L20,48 Z" fill="#004693" />
      <path d="M15,16 L185,16 L177,44 L23,44 Z" fill="none" stroke="#ffffff" strokeWidth="2" />
      <text x="100" y="37" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="20" fontWeight="900" fill="#ffffff" letterSpacing="1">
        Narasu's
      </text>
    </svg>
  );
}

function AnandhaasLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-8 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
      <circle cx="25" cy="30" r="14" fill="#ffd000" />
      <circle cx="25" cy="22" r="8" fill="#ff9000" />
      <path d="M35,30 Q45,20 40,35 Q35,35 35,30 Z" fill="#00a000" />
      <text x="50" y="32" fontFamily="'Outfit', sans-serif" fontSize="19" fontWeight="900" fill="#009040" letterSpacing="-0.5">
        anandhaas
      </text>
      <rect x="50" y="38" width="130" height="12" fill="#e31b23" rx="2" />
      <text x="115" y="47" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="8" fontWeight="bold" fill="#ffffff" letterSpacing="0.8">
        SWEETS & SNACKS
      </text>
    </svg>
  );
}

function CoironLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-9 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
      <text x="100" y="38" textAnchor="middle" fontFamily="'Brush Script MT', 'Georgia', serif" fontSize="36" fontWeight="bold" fill="#7a2a1d">
        Coir-on
      </text>
      <path d="M30,45 Q100,52 170,45" fill="none" stroke="#7a2a1d" strokeWidth="2.5" />
    </svg>
  );
}

function CriPumpsLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-9 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
      <circle cx="26" cy="30" r="18" fill="none" stroke="#e31b23" strokeWidth="3" />
      <text x="26" y="36" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="14" fontWeight="bold" fill="#e31b23">
        C.R.I.
      </text>
      <text x="55" y="32" fontFamily="'Arial Black', sans-serif" fontSize="17" fontWeight="bold" fill="#111111">
        C.R.I. PUMPS
      </text>
      <text x="55" y="44" fontFamily="'Inter', sans-serif" fontSize="8" fill="#555555" letterSpacing="0.5">
        Pumping Trust. Worldwide.
      </text>
    </svg>
  );
}

function VanillaLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-10 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
      <text x="100" y="35" textAnchor="middle" fontFamily="'Georgia', serif" fontSize="18" fontWeight="bold" fill="#4a3b32" letterSpacing="1">
        Vanilla
      </text>
      <path d="M100,10 Q103,15 100,20 Q97,15 100,10 Z" fill="#bfa054" />
      <circle cx="100" cy="15" r="2" fill="#ffd000" />
      <text x="100" y="48" textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize="8" fill="#7a6b62" letterSpacing="2">
        GOODNESS
      </text>
    </svg>
  );
}

function ChettinadLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-10 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
      <g transform="translate(10, 10) scale(0.8)">
        <polygon points="20,10 35,18 20,26 5,18" fill="#008c95" />
        <polygon points="20,26 35,18 35,35 20,43" fill="#005d63" />
        <polygon points="20,26 5,18 5,35 20,43" fill="#8cb3b8" />
      </g>
      <text x="50" y="28" fontFamily="'Outfit', sans-serif" fontSize="16" fontWeight="bold" fill="#333333">
        Chettinad
      </text>
      <text x="50" y="42" fontFamily="'Inter', sans-serif" fontSize="11" fill="#666666" letterSpacing="0.5">
        Health City
      </text>
    </svg>
  );
}

function EurokidsLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-8 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
      <rect x="15" y="15" width="170" height="30" fill="#000000" rx="3" />
      <text x="100" y="37" textAnchor="middle" fontFamily="'Arial Black', sans-serif" fontSize="19" fontWeight="900" fill="#ffffff" letterSpacing="0.5">
        EuroKids
      </text>
    </svg>
  );
}

function PricolLogo() {
  return (
    <svg viewBox="0 0 200 60" className="h-9 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
      <g transform="translate(15, 12) scale(0.9)">
        <path d="M10,18 L20,8 L24,12 L14,22 Z" fill="#00a3e0" />
        <path d="M20,18 L30,8 L34,12 L24,22 Z" fill="#f8981d" />
        <path d="M15,25 L25,15 L29,19 L19,29 Z" fill="#e31b23" />
      </g>
      <text x="60" y="38" fontFamily="'Outfit', sans-serif" fontSize="23" fontWeight="bold" fill="#004a80" letterSpacing="-0.5">
        pricol
      </text>
    </svg>
  );
}

const clientLogos = [
  { name: 'Castrol', logo: <CastrolLogo /> },
  { name: "Narasu's", logo: <NarasusLogo /> },
  { name: 'Anandhaas', logo: <AnandhaasLogo /> },
  { name: 'Coir-on', logo: <CoironLogo /> },
  { name: 'C.R.I. Pumps', logo: <CriPumpsLogo /> },
  { name: 'Goodness Vanilla', logo: <VanillaLogo /> },
  { name: 'Chettinad Health City', logo: <ChettinadLogo /> },
  { name: 'EuroKids', logo: <EurokidsLogo /> },
  { name: 'Pricol', logo: <PricolLogo /> },
];

// ── Case Study Carousel Data ──
const caseStudies = [
  {
    id: 0,
    category: 'Sweet Domination',
    title: 'ANANDHAAS',
    description: 'From a local name to a national sensation, Anandhaas is now the go-to for traditional sweets and snacks.',
    image: '/case_study_anandhaas.webp'
  },
  {
    id: 1,
    category: 'Grow Diamond Brand',
    title: 'WONDR DIAMONDS',
    description: 'Eco-friendly lab-grown diamond brand leading the market with modern luxury designs.',
    image: '/case_study_wondr.webp'
  },
  {
    id: 2,
    category: 'Artisanal Gelato',
    title: 'GUSTOVI',
    description: 'Handcrafted Italian ice cream with authentic natural ingredients for premium taste buds.',
    image: '/case_study_gustovi.webp'
  }
];

// ── Service Benefits Data ──
const benefits = [
  {
    title: 'Accelerate Time-to-Value',
    desc: 'We speed up project delivery by optimizing processes and leveraging advanced AI engineering.',
    icon: FaBolt
  },
  {
    title: 'Save Operational Hours',
    desc: 'We save leadership teams hundreds of operational hours through custom automation systems.',
    icon: FaClock
  },
  {
    title: 'Bottom-Line Impact',
    desc: 'We unlock bottom-line revenue impact at record speeds via digital automation growth scaling.',
    icon: FaChartLine
  },
  {
    title: 'Integrated Solutions',
    desc: 'We bring together our own software capabilities, partner products, and AI-first engineering.',
    icon: FaPuzzlePiece
  },
  {
    title: 'Frictionless Transformation',
    desc: 'We help enterprises transform without friction or internal technology development gaps.',
    icon: FaRocket
  },
  {
    title: 'AI-First Company',
    desc: 'An AI-first studio delivering intelligent, scalable solutions designed to scale fast.',
    icon: FaBrain
  }
];

// ── Process Workflow Steps ──
const workflow = [
  {
    step: '01',
    title: 'Assess',
    desc: 'Analyze & strategize your transformation roadmap.',
    icon: FaLightbulb,
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
  },
  {
    step: '02',
    title: 'Validate',
    desc: 'Proof of concept with real-world target testing.',
    icon: FaFlask,
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30'
  },
  {
    step: '03',
    title: 'Deploy',
    desc: 'Scalable implementation & conversion optimization.',
    icon: FaRocket,
    badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
  },
  {
    step: '04',
    title: 'Evolve',
    desc: 'Continuous improvement, monitoring & support.',
    icon: FaChartLine,
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
  }
];

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="page-bg min-h-screen">
      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="blob w-96 h-96 top-20 -left-32" style={{ background: '#1A22B8' }} />
        <div className="blob w-80 h-80 top-40 right-0 animation-delay-2000" style={{ background: '#F2B300' }} />
        <div className="blob w-64 h-64 bottom-20 left-1/4 animation-delay-4000" style={{ background: '#D9D7FF' }} />

        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/40 mb-8"
            style={{ background: 'rgba(26,34,184,0.15)', backdropFilter: 'blur(10px)' }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-sm text-white/70 font-medium tracking-wide">🚀 The AI Growth Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Your Trusted Partner <br />
            in{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Digital Growth</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M0 8 Q150 0 300 8" stroke="#F2B300" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Boost your online presence and accelerate your business growth with innovative
            digital marketing strategies tailored for modern brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary flex items-center gap-2 text-base">
              Get Started <FaArrowRight size={14} />
            </Link>
            <Link to="/services" className="btn-secondary flex items-center gap-2 text-base">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───── 1. TRUSTED BY VISIONARIES (CLIENT LOGOS) ───── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-2">
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight uppercase tracking-tight">
              Trusted by <span className="gradient-text-gold">Visionaries,</span> <br />
              Admired by <span className="gradient-text">the Best</span>
            </h2>
          </div>
          {/* Right Logo Grid */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-3">
            {clientLogos.map((client) => (
              <motion.div
                key={client.name}
                whileHover={{ scale: 1.04, y: -2 }}
                className="bg-white aspect-video rounded-xl flex items-center justify-center p-4 border border-black/5 shadow-md group cursor-pointer transition-all duration-300"
              >
                {client.logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 2. ACCELERATE TIME-TO-VALUE (BENEFITS GRID) ───── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Designed for <span className="gradient-text">Impact & Performance</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              We leverage artificial intelligence and streamlined full-stack processes to deliver measurable value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 relative overflow-hidden group cursor-default"
              >
                {/* Visual light leak background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #1A22B8, transparent 70%)' }} />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-yellow/25 group-hover:border-brand-yellow/40"
                  style={{ background: 'rgba(242, 179, 0, 0.12)', border: '1px solid rgba(242, 179, 0, 0.25)' }}>
                  <benefit.icon size={20} className="text-brand-yellow" />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 3. HOW WE WORK (PROCESS TIMELINE) ───── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
              ✨ How We Work
            </div>
            <h2 className="section-title mb-4">
              Transform Ideas <span className="gradient-text-gold">Into Reality</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              From concept to deployment, we make innovation simple, predictable, and scalable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-8 relative overflow-hidden group cursor-default border border-white/5"
              >
                {/* Step badge */}
                <div className={`absolute top-6 right-6 px-3 py-1 rounded-full border text-xs font-bold ${step.badgeColor}`}>
                  {step.step}
                </div>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:border-brand-yellow/30 transition-all duration-300">
                  <step.icon size={20} className="text-white group-hover:text-brand-yellow transition-colors" />
                </div>
                <h3 className="font-display font-black text-white text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 4. RESULTS SPEAK LOUDER (3D CASE STUDY CAROUSEL) ───── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header Info */}
            <div className="lg:col-span-4">
              <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-tight uppercase mb-8">
                Results <br />
                Speak <br />
                <span className="gradient-text-gold">Louder</span>
              </h2>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-brand-yellow/30 hover:shadow-[0_0_20px_rgba(242,179,0,0.2)] bg-white/5 backdrop-blur-md transition-all duration-300 font-medium text-sm"
              >
                View Case Studies <FaArrowRight size={12} className="text-brand-yellow" />
              </Link>
            </div>

            {/* Right 3D Perspective Carousel Container */}
            <div className="lg:col-span-8 relative h-[480px] flex items-center justify-center overflow-visible">
              {/* Carousel controls */}
              <div className="absolute left-4 bottom-4 z-30 flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/10 hover:border-brand-yellow/40 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-105"
                >
                  <FaArrowLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/10 hover:border-brand-yellow/40 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-105"
                >
                  <FaArrowRight size={14} />
                </button>
              </div>

              {/* 3D Render Area */}
              <div className="relative w-full max-w-[420px] h-[400px] flex items-center justify-center" style={{ perspective: 1200 }}>
                <AnimatePresence mode="popLayout">
                  {caseStudies.map((study, idx) => {
                    // Determine index offset
                    const offset = (idx - carouselIndex + caseStudies.length) % caseStudies.length;

                    // Compute transform properties
                    let rotateY = 0;
                    let xOffset = 0;
                    let scale = 0.85;
                    let zIndex = 0;
                    let opacity = 0;
                    let pointerEvents = 'none';

                    if (offset === 0) {
                      // Active/Center card
                      rotateY = 0;
                      xOffset = 0;
                      scale = 1.0;
                      zIndex = 10;
                      opacity = 1;
                      pointerEvents = 'auto';
                    } else if (offset === 1) {
                      // Right Card
                      rotateY = -25;
                      xOffset = 180;
                      scale = 0.82;
                      zIndex = 5;
                      opacity = 0.5;
                    } else if (offset === caseStudies.length - 1) {
                      // Left Card
                      rotateY = 25;
                      xOffset = -180;
                      scale = 0.82;
                      zIndex = 5;
                      opacity = 0.5;
                    }

                    return (
                      <motion.div
                        key={study.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity,
                          scale,
                          x: xOffset,
                          rotateY,
                          zIndex,
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute w-full h-full rounded-2xl overflow-hidden glass-card shadow-2xl flex flex-col p-6 cursor-pointer"
                        style={{
                          transformStyle: 'preserve-3d',
                          pointerEvents,
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {/* Box Mockup Image */}
                        <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-6">
                          <img
                            src={study.image}
                            alt={study.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col flex-grow">
                          <span className="text-brand-yellow font-bold text-xs uppercase tracking-wider mb-2">
                            {study.category}
                          </span>
                          <h3 className="font-display font-black text-white text-2xl mb-3">
                            {study.title}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                            {study.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 5. TRANSFORM RETAIL & ECOMMERCE (FEATURE SECTION) ───── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Block Graphic */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden flex flex-col justify-end p-8 border border-white/10 group min-h-[380px]"
            style={{
              background: 'linear-gradient(to bottom, rgba(26,34,184,0.1), rgba(26,34,184,0.7))',
              boxShadow: '0 0 40px rgba(26,34,184,0.3)',
            }}
          >
            {/* Visual background image */}
            <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
              style={{
                backgroundImage: 'url("/retail_ecommerce.webp")',
                filter: 'brightness(0.6) saturate(1.2) contrast(1.1)',
                mixBlendMode: 'overlay',
              }} />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10">
              <h3 className="font-display font-black text-3xl md:text-4xl text-white mb-4 leading-tight">
                Transform Retail & <br />
                eCommerce with Magdio
              </h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Embrace the future of intelligent, customer-centric retail experiences with AI-driven, data-powered scaling solutions.
              </p>
            </div>
          </div>

          {/* Right Action Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-8 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-500/10 border border-red-500/20 mb-6">
                  <FaPhone size={14} className="text-red-400" />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">
                  Let's Discuss Retail Innovation
                </h4>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Discover how our solutions can optimize retail operations and elevate customer experiences.
                </p>
              </div>
              <Link to="/contact" className="text-brand-yellow font-bold text-xs uppercase tracking-wider flex items-center gap-2 group">
                Connect <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-8 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10 border border-blue-500/20 mb-6">
                  <FaCalendarAlt size={14} className="text-blue-400" />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">
                  Book a Free Consultation
                </h4>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Identify opportunities for growth, marketing automation, and revenue optimization.
                </p>
              </div>
              <Link to="/contact" className="text-brand-yellow font-bold text-xs uppercase tracking-wider flex items-center gap-2 group">
                Schedule <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-8 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-500/10 border border-orange-500/20 mb-6">
                  <FaRocket size={14} className="text-orange-400" />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">
                  Drive Sales & Customer Engagement
                </h4>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Partner with Magdio to create next-generation retail and marketing campaign solutions.
                </p>
              </div>
              <Link to="/contact" className="text-brand-yellow font-bold text-xs uppercase tracking-wider flex items-center gap-2 group">
                Partner Us <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-8 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20 mb-6">
                  <FaStar size={14} className="text-yellow-400" />
                </div>
                <h4 className="font-display font-bold text-white text-lg mb-2">
                  Smarter Shopping. Seamless Operations.
                </h4>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  With Magdio, the Future of Intelligent Digital Commerce scaling is already here.
                </p>
              </div>
              <Link to="/services" className="text-brand-yellow font-bold text-xs uppercase tracking-wider flex items-center gap-2 group">
                Learn More <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── PREMIUM CTA BANNER ───── */}
      <section className="py-24 px-6">
        <style>{`
          @keyframes marquee-left {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-left  { animation: marquee-left  10s linear infinite; }
          .marquee-right { animation: marquee-right 13s linear infinite; }
        `}</style>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0a0d3d 0%, #06071a 60%, #0d0b2a 100%)',
              border: '1px solid rgba(26,34,184,0.35)',
              boxShadow: '0 0 80px rgba(26,34,184,0.25), inset 0 0 60px rgba(242,179,0,0.04)',
            }}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col justify-center gap-2">
              <div className="flex whitespace-nowrap">
                <div className="marquee-left flex shrink-0">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={i}
                      className="font-display font-black select-none mx-6 uppercase tracking-tight"
                      style={{ fontSize: 'clamp(48px, 8vw, 110px)', color: 'rgba(255,255,255,0.045)', letterSpacing: '-0.02em' }}
                    >
                      ADDITIONAL PREMIUM FEATURES ✦
                    </span>
                  ))}
                </div>
                <div className="marquee-left flex shrink-0" aria-hidden>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={i}
                      className="font-display font-black select-none mx-6 uppercase tracking-tight"
                      style={{ fontSize: 'clamp(48px, 8vw, 110px)', color: 'rgba(255,255,255,0.045)', letterSpacing: '-0.02em' }}
                    >
                      ADDITIONAL PREMIUM FEATURES ✦
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex whitespace-nowrap">
                <div className="marquee-right flex shrink-0">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={i}
                      className="font-display font-black select-none mx-6 uppercase tracking-tight"
                      style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: 'rgba(242,179,0,0.035)', letterSpacing: '0.01em' }}
                    >
                      AI GROWTH STUDIO ✦ MAGDIO
                    </span>
                  ))}
                </div>
                <div className="marquee-right flex shrink-0" aria-hidden>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={i}
                      className="font-display font-black select-none mx-6 uppercase tracking-tight"
                      style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: 'rgba(242,179,0,0.035)', letterSpacing: '0.01em' }}
                    >
                      AI GROWTH STUDIO ✦ MAGDIO
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(138,43,226,0.35), transparent 70%)' }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center px-10 md:px-16 py-14 md:py-20">
              <div>
                <p className="text-brand-yellow font-semibold tracking-widest text-xs mb-4 uppercase">
                  🔥 Premium Features Included
                </p>
                <h2 className="font-display font-black text-3xl md:text-4xl xl:text-5xl text-white mb-5 leading-tight">
                  You don't need to pay more for{' '}
                  <span className="gradient-text-gold">additional premium features.</span>
                </h2>
                <p className="text-white/50 mb-8 leading-relaxed max-w-md">
                  Everything you need to grow your brand is included — AI strategy, creative design,
                  analytics, and dedicated support. No hidden fees. No surprises.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary text-base inline-flex items-center gap-2"
                >
                  Get Started <FaArrowRight size={14} />
                </Link>
              </div>

              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div
                    className="absolute -inset-6 rounded-full blur-2xl opacity-50 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(138,43,226,0.5), rgba(26,34,184,0.3), transparent 70%)' }}
                  />
                  <img
                    src="/wallet.webp"
                    alt="Premium wallet illustration"
                    loading="lazy"
                    className="relative z-10 w-64 md:w-80 drop-shadow-2xl"
                    style={{ filter: 'drop-shadow(0 0 30px rgba(138,43,226,0.4))' }}
                  />
                </motion.div>
              </div>
            </div>

            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-brand-yellow animate-pulse" />
            <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full animate-pulse animation-delay-2000"
              style={{ background: '#1A22B8' }} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

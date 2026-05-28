import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* ── Background Gradients & Blobs ── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />
      
      {/* ── Futuristic Grid ── */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        
        {/* Floating AI Glow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-purple/40 mb-8 bg-brand-purple/10 backdrop-blur-md shadow-[0_0_20px_rgba(138,43,226,0.3)]"
        >
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          <span className="text-sm text-white font-medium tracking-wide">MAGDIO — The AI Growth Studio</span>
        </motion.div>

        {/* Strong Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-black text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.1] mb-6 tracking-tight"
        >
          Your Trusted Partner <br />
          in <span className="gradient-text-purple relative inline-block">
               Digital Growth
               <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-full blur-sm" />
             </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed"
        >
          Accelerate your business with premium AI-powered solutions, cutting-edge web experiences, and data-driven marketing strategies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple shadow-[0_0_30px_rgba(26,34,184,0.4)] hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            Get Started <FaArrowRight size={14} />
          </Link>
          <Link to="/services" className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:border-brand-yellow/50 hover:bg-brand-yellow/10 transition-all duration-300">
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-brand-yellow rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </section>
  );
}

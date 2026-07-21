import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* ── Background Gradients & Blobs ── */}
      <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-brand-purple/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-brand-blue/20 rounded-full blur-[90px] sm:blur-[100px] pointer-events-none" />
      
      {/* ── Futuristic Grid ── */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        
        {/* Floating AI Glow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-purple/40 mb-8 bg-brand-purple/10 backdrop-blur-md shadow-[0_0_20px_rgba(138,43,226,0.3)] min-h-[36px]">
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          <span className="text-sm text-white font-medium tracking-wide">MAGDIO — The AI Growth Studio</span>
        </div>

        {/* Strong Heading (LCP Element) */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.1] mb-6 tracking-tight min-h-[1.1em]">
          Your Trusted Partner <br />
          in <span className="gradient-text-purple relative inline-block">
               Digital Growth
               <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-full blur-sm" />
             </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed min-h-[3em]">
          Accelerate your business with premium AI-powered solutions, cutting-edge web experiences, and data-driven marketing strategies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-0">
          <Link to="/contact" className="w-full sm:w-auto justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple shadow-[0_0_30px_rgba(26,34,184,0.4)] hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            Get Started <FaArrowRight size={14} />
          </Link>
          <Link to="/services" className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:border-brand-yellow/50 hover:bg-brand-yellow/10 transition-all duration-300">
            Explore Services
          </Link>
        </div>
      </div>

      {/* Ambient background accent */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-yellow rounded-full blur-[1px]" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-brand-purple rounded-full blur-[1px]" />
      </div>
    </section>
  );
}

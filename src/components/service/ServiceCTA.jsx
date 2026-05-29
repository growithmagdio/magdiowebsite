import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function ServiceCTA({ service }) {
  const onGetStartedClick = () => {
    const enquiry = document.getElementById('enquiry');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/10 border-t border-white/5">
      {/* Background space gradient nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card-premium p-8 sm:p-12 md:p-16 text-center border border-white/10 relative overflow-hidden"
        >
          {/* Subtle light streak */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-purple to-transparent" />

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Accelerate Your <span className="gradient-text">Growth</span> Today
          </h2>
          <p className="text-white/60 leading-relaxed text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Ready to integrate custom AI architectures, premium codebases, and high-impact campaigns? Let's design a customized roadmap tailored for your business.
          </p>

          <button
            onClick={onGetStartedClick}
            className="btn-primary inline-flex items-center gap-3 text-sm sm:text-base"
          >
            Launch Your Project <FaArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="page-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      <SEO 
        title="404 - Page Not Found | MAGDIO" 
        description="The page you are looking for does not exist or has been moved." 
        noindex={true}
      />

      {/* Premium Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] bg-brand-blue/15 rounded-full blur-[120px] animation-delay-2000" />
        <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-brand-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        {/* Large Gradient 404 Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-[9rem] sm:text-[13rem] leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-yellow drop-shadow-[0_10px_30px_rgba(26,34,184,0.3)] select-none"
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display font-bold text-2xl sm:text-4xl text-white mb-6"
        >
          Lost in Digital Space?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/60 text-base sm:text-lg mb-12 max-w-lg mx-auto leading-relaxed"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 text-base px-8 py-4 shadow-[0_0_30px_rgba(26,34,184,0.3)]"
          >
            <FaHome size={16} /> Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto btn-secondary flex items-center justify-center gap-2 text-base px-8 py-3.5"
          >
            <FaArrowLeft size={14} /> Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}

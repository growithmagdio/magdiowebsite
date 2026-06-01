import { motion } from 'framer-motion';

// Dynamically load image filenames from the public folder using Vite's glob import
const imageModules = import.meta.glob('/public/banner images/*.{png,jpg,jpeg,webp,svg}', { query: '?url', eager: true });
const clientImages = Object.keys(imageModules).map(path => path.split('/').pop());

export default function ClientsSection() {
  const imagesToDisplay = clientImages;

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[#020205]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          /* Slowed down slightly for smoother scrolling with many images */
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-[0_2px_10px_rgba(255,255,255,0.12)]">
          We are grateful to work with <span className="gradient-text-gold">incredible clients</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Dark Fade Gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#020205] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#020205] to-transparent z-10 pointer-events-none" />
        
        {imagesToDisplay.length > 0 ? (
          <div className="animate-marquee flex whitespace-nowrap items-center pt-4 pb-8">
            {/* Double array for seamless infinite effect */}
            {[...imagesToDisplay, ...imagesToDisplay].map((image, i) => (
              <div
                key={i}
                className="mx-3 md:mx-4 w-40 h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-64 lg:h-36 shrink-0 rounded-2xl bg-white/[0.93] backdrop-blur-sm border border-white/10 flex items-center justify-center p-2.5 md:p-4 overflow-hidden transition-all duration-300 cursor-pointer group hover:bg-white hover:border-brand-purple/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(138,43,226,0.25)]"
              >
                <img 
                  src={`/banner images/${image}`} 
                  alt={`Trusted Client ${i}`}
                  className="w-full h-full object-contain pointer-events-none transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center w-full text-white/40 font-medium">
            <p>No client images found.</p>
            <p className="text-sm mt-2">Please add images to <code className="bg-black/30 px-2 py-1 rounded">public/banner images/</code></p>
          </div>
        )}
      </div>
    </section>
  );
}

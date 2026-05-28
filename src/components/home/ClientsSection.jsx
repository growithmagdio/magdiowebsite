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
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-white/40 text-sm uppercase tracking-widest font-bold">Trusted by industry leaders worldwide</h2>
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
                className="mx-3 md:mx-4 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 shrink-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[inset_0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md border border-white/10 flex items-center justify-center p-2 overflow-hidden transition-all duration-300 cursor-pointer group hover:from-white/[0.12] hover:to-white/[0.05] hover:border-brand-yellow/40 hover:shadow-[0_0_30px_rgba(242,179,0,0.2),inset_0_0_20px_rgba(255,255,255,0.1)]"
              >
                <img 
                  src={`/banner images/${image}`} 
                  alt={`Trusted Client ${i}`}
                  className="w-full h-full object-contain opacity-90 grayscale-[0.4] brightness-110 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-125 group-hover:scale-110 pointer-events-none drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
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

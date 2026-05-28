import { motion } from 'framer-motion';

// Mocked brand logos
const brands = [
  "Microsoft", "Google", "Amazon", "Meta", "Netflix", "Adobe", "Shopify", "Stripe"
];

export default function ClientsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020205]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-white/40 text-sm uppercase tracking-widest font-bold">Trusted by industry leaders worldwide</h2>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020205] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020205] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex whitespace-nowrap">
          {/* Double array for infinite effect */}
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="mx-8 px-8 py-4 glass-card border border-white/5 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer min-w-[200px]"
            >
              <span className="font-display font-black text-2xl text-white">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

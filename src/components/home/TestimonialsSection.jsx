import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CMO, RetailTech',
    content: 'MAGDIO completely transformed our digital presence. Their AI-driven approach to our ad campaigns increased our ROI by 300% within the first quarter.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Founder, Elevate SaaS',
    content: 'The web app they built for us is nothing short of a masterpiece. Fast, beautiful, and the conversion rates are through the roof. Truly a premium agency.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Director of Marketing, Luxura',
    content: 'Their strategic approach to SEO and content marketing put us on the first page of Google for all our highly competitive keywords. Unbelievable results.',
    rating: 5,
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#03030b] to-[#06071a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-4">Client <span className="gradient-text-purple">Success Stories</span></h2>
          <p className="section-subtitle">Don't just take our word for it.</p>
        </motion.div>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="glass-card-premium p-10 md:p-14 relative border-brand-purple/20 shadow-[0_0_50px_rgba(138,43,226,0.1)]">
                <FaQuoteLeft className="absolute top-6 left-6 text-brand-purple/20 text-6xl" />
                
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <FaStar key={i} className="text-brand-yellow text-xl" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-white leading-relaxed mb-8 font-medium italic relative z-10">
                  "{testimonials[index].content}"
                </p>
                
                <div>
                  <h4 className="font-display font-bold text-white text-lg">{testimonials[index].name}</h4>
                  <p className="text-white/50 text-sm">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-brand-yellow' : 'w-2 bg-white/20'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

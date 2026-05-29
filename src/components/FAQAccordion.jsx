import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center text-white/40 py-8">
        No FAQs available.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="glass-card overflow-hidden border border-white/5 transition-all duration-300 hover:border-white/10"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            aria-expanded={openIndex === i}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
          >
            <span className={`font-display font-bold text-base md:text-lg transition-colors duration-300 ${openIndex === i ? 'text-brand-yellow' : 'text-white'}`}>
              {faq.q || faq.question}
            </span>
            <FaChevronDown
              className={`text-white/50 transition-transform duration-300 shrink-0 ml-4 ${openIndex === i ? 'rotate-180 text-brand-yellow' : ''}`}
              size={14}
            />
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-2 text-white/60 leading-relaxed text-sm md:text-base border-t border-white/5">
                  {faq.a || faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

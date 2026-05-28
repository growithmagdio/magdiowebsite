import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    q: 'What makes MAGDIO different from other digital agencies?',
    a: 'We are an AI Growth Studio. We don\'t just rely on traditional marketing; we integrate custom AI automation, advanced data tracking, and premium web development to build scalable growth engines for our clients.'
  },
  {
    q: 'How long does it take to see results?',
    a: 'While quick wins can be seen within the first 30 days, sustainable, exponential growth typically compounds between months 3 and 6 as our AI models gather data and optimize your campaigns.'
  },
  {
    q: 'Do you work with startups or only enterprise clients?',
    a: 'We work with visionary brands of all sizes. Whether you are an ambitious startup looking to disrupt the market or an enterprise seeking digital transformation, we have tailored solutions for you.'
  },
  {
    q: 'What is your pricing structure?',
    a: 'Our pricing is custom-tailored to your specific needs and goals. We focus on ROI, meaning our services are structured as an investment that pays for itself through increased revenue and efficiency.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Frequently Asked <span className="gradient-text-blue">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about working with us.</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden border border-white/5 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className={`font-display font-bold text-lg ${openIndex === i ? 'text-brand-yellow' : 'text-white'}`}>
                  {faq.q}
                </span>
                <FaChevronDown
                  className={`text-white/50 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-brand-yellow' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-2 text-white/60 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

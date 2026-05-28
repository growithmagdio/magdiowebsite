import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function Counter({ from, to, duration = 2 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

const stats = [
  { label: 'Projects Completed', value: 250, suffix: '+' },
  { label: 'Happy Clients', value: 120, suffix: '+' },
  { label: 'ROI Generated', value: 5, suffix: 'x' },
  { label: 'AI Automations Built', value: 50, suffix: '+' },
];

export default function StatsSection() {
  return (
    <section className="py-20 relative border-y border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <h3 className="font-display font-black text-4xl md:text-5xl text-white mb-2 tracking-tight flex items-center justify-center">
                <Counter from={0} to={stat.value} />
                <span className="text-brand-yellow ml-1">{stat.suffix}</span>
              </h3>
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

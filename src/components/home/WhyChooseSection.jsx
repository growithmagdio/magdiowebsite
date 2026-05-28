import { motion } from 'framer-motion';
import { FaBrain, FaChartBar, FaCogs, FaMoneyBillWave, FaRocket, FaHeadset } from 'react-icons/fa';

const reasons = [
  {
    title: 'AI-Powered Solutions',
    desc: 'Leveraging cutting-edge AI to automate tasks, optimize campaigns, and drive exponential growth.',
    icon: FaBrain,
  },
  {
    title: 'Data-Driven Marketing',
    desc: 'Every decision is backed by deep analytics, ensuring maximum impact and minimal waste.',
    icon: FaChartBar,
  },
  {
    title: 'Seamless Automation',
    desc: 'We build custom workflows that save you hundreds of operational hours every month.',
    icon: FaCogs,
  },
  {
    title: 'ROI Focused',
    desc: 'Our strategies are designed with one primary goal: increasing your bottom line.',
    icon: FaMoneyBillWave,
  },
  {
    title: 'Fast Delivery',
    desc: 'Agile methodologies ensure rapid deployment without compromising on premium quality.',
    icon: FaRocket,
  },
  {
    title: 'Dedicated Support',
    desc: 'Your growth is our priority. Get round-the-clock support from our expert team.',
    icon: FaHeadset,
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
                Why Choose <br />
                <span className="gradient-text-gold">MAGDIO?</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                We aren't just another agency. We are an AI Growth Studio that acts as an extension of your team, bringing technical prowess and marketing genius to the table.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="glass-card-premium p-6 border-l-4 border-l-brand-yellow">
                  <h4 className="text-3xl font-display font-black text-white mb-1">98%</h4>
                  <p className="text-white/50 text-sm">Client Retention Rate</p>
                </div>
                <div className="glass-card-premium p-6 border-l-4 border-l-brand-purple">
                  <h4 className="text-3xl font-display font-black text-white mb-1">5x</h4>
                  <p className="text-white/50 text-sm">Average ROI increase</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 group hover:-translate-y-1 hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-blue/20 text-brand-lightblue mb-4 border border-brand-blue/30 group-hover:scale-110 transition-transform">
                  <reason.icon size={18} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

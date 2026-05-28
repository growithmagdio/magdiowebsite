import { motion } from 'framer-motion';
import { 
  FaShoppingCart, FaBuilding, FaHeartbeat, FaGraduationCap, 
  FaBoxOpen, FaLaptopCode, FaIndustry, FaCut, FaRing, 
  FaUtensils, FaChartLine 
} from 'react-icons/fa';

const industries = [
  { name: 'Retail', icon: FaShoppingCart, delay: 0.1 },
  { name: 'Real Estate', icon: FaBuilding, delay: 0.2 },
  { name: 'Health Care', icon: FaHeartbeat, delay: 0.3 },
  { name: 'Education', icon: FaGraduationCap, delay: 0.4 },
  { name: 'FMCG', icon: FaBoxOpen, delay: 0.5 },
  { name: 'E-Commerce', icon: FaShoppingCart, delay: 0.6 },
  { name: 'IT & SaaS', icon: FaLaptopCode, delay: 0.7 },
  { name: 'Manufacturing', icon: FaIndustry, delay: 0.8 },
  { name: 'Beauty & Salon', icon: FaCut, delay: 0.9 },
  { name: 'Jewelry', icon: FaRing, delay: 1.0 },
  { name: 'Hospitality', icon: FaUtensils, delay: 1.1 },
  { name: 'Finance', icon: FaChartLine, delay: 1.2 },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4">
            Specialized Focus
          </div>
          <h2 className="section-title mb-4">
            Industries We <span className="gradient-text-purple">Transform</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Our AI-powered strategies are tailored to the unique challenges and opportunities of your specific industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.4 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-brand-purple/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 group-hover:border-brand-purple/50 group-hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all duration-300">
                <ind.icon className="text-white/60 group-hover:text-white text-xl transition-colors" />
              </div>
              <h4 className="text-white font-bold group-hover:text-brand-yellow transition-colors">{ind.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

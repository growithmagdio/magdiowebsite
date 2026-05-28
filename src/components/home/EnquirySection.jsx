import { motion } from 'framer-motion';

export default function EnquirySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-6">
            Ready to <span className="gradient-text-gold">Accelerate</span> <br/>
            Your Growth?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
            Let's discuss how our AI-powered solutions and digital strategies can elevate your brand and drive measurable results. 
          </p>
          <ul className="space-y-4 mb-8">
            {['Free 30-minute strategy session', 'Custom growth roadmap', 'No commitment required'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80">
                <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow text-xs">✓</div>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 glass-card-premium border-l-4 border-l-brand-yellow bg-white/5">
            <h4 className="font-display font-bold text-white text-xl mb-4">Direct Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contactus@magdio.com" className="flex items-center gap-3 text-white/70 hover:text-brand-yellow transition-colors">
                <span className="text-brand-yellow">✉</span> contactus@magdio.com
              </a>
              <a href="tel:+918838887303" className="flex items-center gap-3 text-white/70 hover:text-brand-yellow transition-colors">
                <span className="text-brand-yellow">☎</span> +91 88388 87303
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-premium p-8 md:p-10"
        >
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <input type="text" id="name" placeholder=" " className="peer input-field w-full" required />
                <label htmlFor="name" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-brand-yellow peer-valid:bg-[#06071a]">Full Name</label>
              </div>
              <div className="relative">
                <input type="email" id="email" placeholder=" " className="peer input-field w-full" required />
                <label htmlFor="email" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-brand-yellow peer-valid:bg-[#06071a]">Email Address</label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <input type="tel" id="phone" placeholder=" " className="peer input-field w-full" required />
                <label htmlFor="phone" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-brand-yellow peer-valid:bg-[#06071a]">Phone Number</label>
              </div>
              <div className="relative">
                <input type="text" id="company" placeholder=" " className="peer input-field w-full" />
                <label htmlFor="company" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-brand-yellow peer-valid:bg-[#06071a]">Company Name</label>
              </div>
            </div>

            <div className="relative">
              <select className="input-field w-full text-white/70 appearance-none cursor-pointer">
                <option value="" disabled selected>Service Interested In</option>
                <option value="marketing">Digital Marketing & SEO</option>
                <option value="development">Web / App Development</option>
                <option value="ai">AI Agent Development</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="relative">
              <textarea id="message" rows="4" placeholder=" " className="peer input-field w-full resize-none" required></textarea>
              <label htmlFor="message" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-brand-yellow peer-valid:bg-[#06071a]">Your Message</label>
            </div>

            <button type="submit" className="w-full btn-primary py-4 mt-2 text-lg shadow-[0_0_20px_rgba(26,34,184,0.4)]">
              Send Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

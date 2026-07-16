import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { FaCheck } from 'react-icons/fa';

const initialForm = { name: '', email: '', phone: '', company: '', service: '', message: '' };

export default function EnquirySection() {
  const [form, setForm]         = useState(initialForm);
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [errors, setErrors]     = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim())   e.phone   = 'Phone number is required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    
    // 1. Send email via FormSubmit API (non-blocking)
    try {
      fetch("https://formsubmit.co/ajax/contactus@magdio.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Free Audit/Enquiry Request from MAGDIO Website!",
            Name: form.name,
            Email: form.email,
            Phone: form.phone,
            Company: form.company || "Not provided",
            Service: form.service || "Not specified",
            Message: form.message
        })
      }).catch(err => console.error('FormSubmit Error:', err));
    } catch(err) {
      console.error("FormSubmit sync error:", err);
    }

    // 2. Save to Firebase as a backup (non-blocking)
    try {
      if (db) {
        addDoc(collection(db, 'contacts'), {
          ...form,
          createdAt: serverTimestamp(),
          source: 'enquiry',
        }).catch(err => console.error('Firebase Async Error:', err));
      }
    } catch(err) {
      console.error("Firebase Sync Error:", err);
    }
    
    // 3. Show Success & Trigger WhatsApp Forwarding
    setSuccess(true);
    
    // Generate WhatsApp Link
    const waText = `Hi Magdio Team!%0A%0A*New Enquiry/Audit Lead*%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ACompany: ${form.company || 'N/A'}%0AService: ${form.service || 'N/A'}%0AMessage: ${form.message}`;
    const waLink = `https://wa.me/918838887303?text=${waText}`;
    
    // Open WhatsApp in a new tab after a tiny delay
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 800);

    setForm(initialForm);
    setTimeout(() => setSuccess(false), 5000);
    setLoading(false);
  };

  return (
    <section id="enquiry" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
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
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  value={form.name}
                  onChange={handleChange}
                  className={`peer input-field w-full ${errors.name ? 'border-red-500' : ''}`}
                />
                <label htmlFor="name" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand-yellow peer-[:not(:placeholder-shown)]:bg-[#06071a]">Full Name *</label>
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  value={form.email}
                  onChange={handleChange}
                  className={`peer input-field w-full ${errors.email ? 'border-red-500' : ''}`}
                />
                <label htmlFor="email" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand-yellow peer-[:not(:placeholder-shown)]:bg-[#06071a]">Email Address *</label>
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder=" "
                  value={form.phone}
                  onChange={handleChange}
                  className={`peer input-field w-full ${errors.phone ? 'border-red-500' : ''}`}
                />
                <label htmlFor="phone" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand-yellow peer-[:not(:placeholder-shown)]:bg-[#06071a]">Phone Number *</label>
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder=" "
                  value={form.company}
                  onChange={handleChange}
                  className="peer input-field w-full"
                />
                <label htmlFor="company" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand-yellow peer-[:not(:placeholder-shown)]:bg-[#06071a]">Company Name</label>
              </div>
            </div>

            <div className="relative">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="input-field w-full text-white/70 appearance-none cursor-pointer bg-transparent"
              >
                <option value="" disabled className="bg-[#06071a] text-white/70">Service Interested In</option>
                <option value="marketing" className="bg-[#06071a] text-white">Digital Marketing & SEO</option>
                <option value="development" className="bg-[#06071a] text-white">Web / App Development</option>
                <option value="ai" className="bg-[#06071a] text-white">AI Agent Development</option>
                <option value="other" className="bg-[#06071a] text-white">Other</option>
              </select>
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder=" "
                value={form.message}
                onChange={handleChange}
                className={`peer input-field w-full resize-none ${errors.message ? 'border-red-500' : ''}`}
              />
              <label htmlFor="message" className="absolute left-4 top-3 text-white/40 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-yellow peer-focus:bg-[#06071a] px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand-yellow peer-[:not(:placeholder-shown)]:bg-[#06071a]">Your Message *</label>
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-4 mt-2 text-lg shadow-[0_0_20px_rgba(26,34,184,0.4)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Request'
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 50 }}
            className="fixed bottom-8 right-8 z-50 glass-card p-6 flex items-center gap-4 max-w-sm"
            style={{ boxShadow: '0 0 40px rgba(26,184,100,0.4)', borderColor: 'rgba(34,197,94,0.4)' }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(34,197,94,0.2)' }}>
              <FaCheck size={20} className="text-green-400" />
            </div>
            <div>
              <p className="text-white font-bold mb-0.5">Enquiry Sent! 🎉</p>
              <p className="text-white/50 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

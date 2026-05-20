import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import {
  FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaCheck, FaPaperPlane
} from 'react-icons/fa';

const initialForm = { name: '', email: '', phone: '', message: '' };

export default function ContactPage() {
  const [form, setForm]         = useState(initialForm);
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [errors, setErrors]     = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
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
    try {
      await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: serverTimestamp(),
        source: 'website',
      });
      setSuccess(true);
      setForm(initialForm);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="page-bg min-h-screen pt-28 pb-20">
      {/* Blobs */}
      <div className="blob w-96 h-96 top-10 -left-32" style={{ background: '#1A22B8' }} />
      <div className="blob w-72 h-72 bottom-20 -right-20 animation-delay-4000" style={{ background: '#F2B300' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-brand-yellow font-semibold tracking-widest text-sm mb-3 uppercase">✦ Let's Talk</p>
          <h1 className="section-title mb-5">
            Ready To Grow Your{' '}
            <span className="gradient-text">Business?</span>
          </h1>
          <p className="section-subtitle max-w-xl mx-auto">
            Get in touch with us today to discuss how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 mb-6">
              <h2 className="font-display font-bold text-white text-2xl mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: FaMapMarkerAlt, label: 'Location', value: 'Chennai, Tamil Nadu, India', color: '#F2B300' },
                  { icon: FaEnvelope,     label: 'Email',    value: 'contactus@magdio.com',        color: '#BFD7FF', href: 'mailto:contactus@magdio.com' },
                  { icon: FaPhone,        label: 'Phone',    value: '+91 88388 87303',             color: '#D9D7FF', href: 'tel:+918838887303' },
                ].map(({ icon: Icon, label, value, color, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
                      {href
                        ? <a href={href} className="text-white hover:text-brand-yellow transition-colors font-medium">{value}</a>
                        : <p className="text-white font-medium">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918838887303?text=Hi%20Magdio!%20I%27m%20interested%20in%20growing%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl w-full transition-all duration-400 group"
              style={{
                background: 'linear-gradient(135deg, rgba(37,211,102,0.2), rgba(37,211,102,0.05))',
                border: '1px solid rgba(37,211,102,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(37,211,102,0.3)';
                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)';
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                style={{ background: 'rgba(37,211,102,0.2)' }}>
                <FaWhatsapp size={28} className="text-green-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Chat on WhatsApp</p>
                <p className="text-white/50 text-sm mt-0.5">We typically reply within minutes</p>
              </div>
            </a>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 relative">
              <h2 className="font-display font-bold text-white text-2xl mb-8">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label className="text-white/50 text-sm mb-2 block font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-white/50 text-sm mb-2 block font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-white/50 text-sm mb-2 block font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="contact-phone"
                    placeholder="+91 XXXX XXXX"
                    value={form.phone}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-white/50 text-sm mb-2 block font-medium">Message *</label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your project and goals..."
                    value={form.message}
                    onChange={handleChange}
                    className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading
                    ? <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    : <><FaPaperPlane size={16} /> Send Message</>
                  }
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Success Popup ── */}
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
              <p className="text-white font-bold mb-0.5">Message Sent! 🎉</p>
              <p className="text-white/50 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

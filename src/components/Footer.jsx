import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MagdioLogo from './MagdioLogo';
import {
  FaInstagram, FaLinkedinIn, FaWhatsapp,
  FaMapMarkerAlt, FaEnvelope, FaPhone
} from 'react-icons/fa';

const footerLinks = [
  { name: 'Home',      path: '/' },
  { name: 'Services',  path: '/services' },
  { name: 'Mission',   path: '/mission' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About',     path: '/about' },
  { name: 'Contact',   path: '/contact' },
];

const socialLinks = [
  { icon: FaInstagram,  href: 'https://www.instagram.com/magdio.inc/',          label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/magdio/',   label: 'LinkedIn' },
  { icon: FaWhatsapp,   href: 'https://wa.me/918838887303',            label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-8">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #06071a 0%, #0a0d3d 50%, #06071a 100%)',
        }}
      />
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #1A22B8, #F2B300, transparent)' }}
      />

      {/* Blobs */}
      <div className="blob w-64 h-64 -bottom-10 -left-20"
        style={{ background: '#1A22B8', animationDelay: '0s' }} />
      <div className="blob w-48 h-48 -bottom-10 right-10"
        style={{ background: '#F2B300', animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-5 w-fit group">
              <MagdioLogo className="h-24 w-auto transition-opacity duration-300 group-hover:opacity-85" />
            </Link>
            <p className="text-white/50 leading-relaxed mb-6 max-w-sm text-sm">
              We help businesses grow digitally through innovative AI-powered marketing strategies,
              creative storytelling, and result-driven campaigns tailored for the modern era.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(26,34,184,0.2)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(26,34,184,0.5)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(26,34,184,0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(26,34,184,0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 rounded-full"
                style={{ background: 'linear-gradient(90deg, #1A22B8, #F2B300)' }} />
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 rounded-full"
                style={{ background: 'linear-gradient(90deg, #1A22B8, #F2B300)' }} />
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt size={14} className="text-brand-yellow mt-1 shrink-0" />
                <span className="text-white/50 text-sm">Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope size={14} className="text-brand-yellow mt-1 shrink-0" />
                <a href="mailto:contactus@magdio.com" className="text-white/50 hover:text-white text-sm transition-colors">
                  contactus@magdio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone size={14} className="text-brand-yellow mt-1 shrink-0" />
                <a href="tel:+918838887303" className="text-white/50 hover:text-white text-sm transition-colors">
                  +91 88388 87303
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} <span className="text-white/50 font-semibold">MAGDIO</span>. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-wide">
            Crafted with ❤️ in Chennai, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}

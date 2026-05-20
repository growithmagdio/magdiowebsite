import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaInstagram, FaLinkedinIn, FaWhatsapp,
  FaBars, FaTimes
} from 'react-icons/fa';
import MagdioLogo from './MagdioLogo';

const socialLinks = [
  { icon: FaInstagram,  label: 'Instagram', href: 'https://www.instagram.com/magdio.inc/' },
  { icon: FaLinkedinIn, label: 'LinkedIn',  href: 'https://www.linkedin.com/company/magdio/' },
  { icon: FaWhatsapp,   label: 'WhatsApp',  href: 'https://wa.me/918838887303' },
];

const navLinks = [
  { name: 'Home',      path: '/' },
  { name: 'Services',  path: '/services' },
  { name: 'Mission',   path: '/mission' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About',     path: '/about' },
  { name: 'Blog',      path: '/blog' },
  { name: 'Contact',   path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location                 = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 backdrop-blur-xl border-b border-white/10'
            : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'rgba(6, 7, 26, 0.85)'
            : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <MagdioLogo className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-85" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.05)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(26,34,184,0.4)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(26,34,184,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white"
            style={{ background: 'rgba(26,34,184,0.3)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 md:hidden"
            style={{
              background: 'rgba(6, 7, 26, 0.97)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-display font-bold py-3 border-b border-white/10 block transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-brand-yellow' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-10">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
                  style={{ background: 'rgba(26,34,184,0.25)' }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

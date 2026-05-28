import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MagdioLogo from './MagdioLogo';
import {
  FaInstagram, FaLinkedinIn, FaWhatsapp,
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight
} from 'react-icons/fa';

const companyLinks = [
  { name: 'About Us',    path: '/about' },
  { name: 'Our Mission', path: '/mission' },
  { name: 'Portfolio',   path: '/portfolio' },
  { name: 'Careers',     path: '/careers' },
];

const serviceLinks = [
  { name: 'SEO',                  path: '/services/seo-services' },
  { name: 'Digital Marketing',    path: '/services/digital-marketing' },
  { name: 'Shopify Development',  path: '/services/shopify-development' },
  { name: 'AI Agent Development', path: '/services/ai-agent-development' },
  { name: 'SaaS Development',     path: '/services/saas-application-development' },
  { name: 'Branding',             path: '/services/branding-services' },
  { name: 'Mobile App Dev',       path: '/services/mobile-app-development' },
];

const industryLinks = [
  { name: 'Retail',       path: '/portfolio' },
  { name: 'Real Estate',  path: '/portfolio' },
  { name: 'Health Care',  path: '/portfolio' },
  { name: 'E-Commerce',   path: '/portfolio' },
  { name: 'IT & SaaS',    path: '/portfolio' },
];

const resourceLinks = [
  { name: 'Blog',          path: '/blog' },
  { name: 'Case Studies',  path: '/portfolio' },
  { name: 'Privacy Policy',path: '/privacy-policy' },
  { name: 'Terms of Use',  path: '/terms' },
];

const socialLinks = [
  { icon: FaInstagram,  href: 'https://www.instagram.com/magdio.inc/',          label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/magdio/',   label: 'LinkedIn' },
  { icon: FaWhatsapp,   href: 'https://wa.me/918838887303',            label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-24 pb-8 border-t border-white/5">
      {/* Background & Glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #03030b 0%, #06071a 50%, #03030b 100%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #1A22B8, #8A2BE2, #F2B300, transparent)' }}
      />
      
      {/* Blobs */}
      <div className="blob w-96 h-96 top-0 -left-20 opacity-10"
        style={{ background: '#1A22B8', animationDelay: '0s' }} />
      <div className="blob w-80 h-80 bottom-0 right-0 opacity-10"
        style={{ background: '#8A2BE2', animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6">
        

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-6 w-fit group">
              <MagdioLogo className="h-10 md:h-12 w-auto transition-opacity duration-300 group-hover:opacity-85" />
            </Link>
            <p className="text-white/50 leading-relaxed mb-8 max-w-sm text-sm">
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
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:scale-110 bg-white/5 border border-white/10 hover:border-brand-purple/50 hover:bg-brand-purple/20 hover:shadow-[0_0_20px_rgba(138,43,226,0.3)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6 relative">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6 relative">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6 relative">
              Industries
            </h4>
            <ul className="flex flex-col gap-3">
              {industryLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6 relative">
              Resources
            </h4>
            <ul className="flex flex-col gap-3 mb-8">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-display font-bold text-white text-lg mb-4 relative">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <FaEnvelope size={12} className="text-brand-yellow mt-1.5 shrink-0" />
                <a href="mailto:contactus@magdio.com" className="text-white/50 hover:text-brand-yellow text-sm transition-colors">
                  contactus@magdio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone size={12} className="text-brand-yellow mt-1.5 shrink-0" />
                <a href="tel:+918838887303" className="text-white/50 hover:text-brand-yellow text-sm transition-colors">
                  +91 88388 87303
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-semibold tracking-wider">MAGDIO</span>. All rights reserved.
          </p>
          <p className="text-white/40 text-sm tracking-wide flex items-center gap-1">
            Engineered with <span className="text-red-500">❤️</span> by <span className="text-brand-yellow font-medium">Magdio AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

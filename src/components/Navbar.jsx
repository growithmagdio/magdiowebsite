import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaInstagram, FaLinkedinIn, FaWhatsapp,
  FaBars, FaTimes, FaChevronDown,
  FaBullhorn, FaCode, FaRobot, FaBuilding, FaArrowRight
} from 'react-icons/fa';
import MagdioLogo from './MagdioLogo';

const socialLinks = [
  { icon: FaInstagram,  label: 'Instagram', href: 'https://www.instagram.com/magdio.inc/' },
  { icon: FaLinkedinIn, label: 'LinkedIn',  href: 'https://www.linkedin.com/company/magdio/' },
  { icon: FaWhatsapp,   label: 'WhatsApp',  href: 'https://wa.me/918838887303' },
];

// Nested Mega Menu Data
const megaMenuData = {
  services: [
    {
      id: 'marketing',
      name: 'Marketing',
      icon: FaBullhorn,
      color: 'text-brand-yellow',
      hoverBorder: 'hover:border-brand-yellow',
      items: [
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'SEO Services', path: '/services/seo-services' },
        { name: 'Google Ads', path: '/services/google-ads' },
        { name: 'Meta/Facebook Ads', path: '/services/meta-ads' },
        { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
        { name: 'WhatsApp Marketing', path: '/services/whatsapp-marketing' },
        { name: 'YouTube Ads', path: '/services/youtube-ads' },
        { name: 'LinkedIn Ads', path: '/services/linkedin-ads' },
      ]
    },
    {
      id: 'development',
      name: 'Development',
      icon: FaCode,
      color: 'text-brand-blue',
      hoverBorder: 'hover:border-brand-blue',
      items: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Ecommerce Development', path: '/services/ecommerce-development' },
        { name: 'Shopify Development', path: '/services/shopify-development' },
        { name: 'SaaS Application', path: '/services/saas-application-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'WordPress Development', path: '/services/wordpress-development' },
      ]
    },
    {
      id: 'ai',
      name: 'AI Solutions',
      icon: FaRobot,
      color: 'text-brand-purple',
      hoverBorder: 'hover:border-brand-purple',
      items: [
        { name: 'AI Agent Development', path: '/services/ai-agent-development' },
        { name: 'Digital Transformation', path: '/services/digital-transformation' },
        { name: 'Marketing Automation', path: '/services/marketing-automation' },
        { name: 'AI Chatbot Solutions', path: '/services/ai-chatbot-solutions' },
      ]
    }
  ],
  industries: [
    { name: 'Retail & FMCG', path: '/industries/retail-fmcg' },
    { name: 'Real Estate', path: '/industries/real-estate' },
    { name: 'Health Care', path: '/industries/health-care' },
    { name: 'IT & SaaS', path: '/industries/it-saas' },
    { name: 'E-Commerce', path: '/industries/e-commerce' },
    { name: 'Education', path: '/industries/education' },
  ]
};

// Animation Variants
const dropdownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.35, 
      ease: 'easeOut'
    }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Desktop active states
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services', 'industries'
  const [activeServiceCategory, setActiveServiceCategory] = useState('marketing');
  
  // Mobile active states
  const [openMobileAccordion, setOpenMobileAccordion] = useState(null);

  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setOpenMobileAccordion(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ── Z-INDEX 9999 to prevent hero overlap ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled || activeDropdown
            ? 'py-3 border-b border-white/10'
            : 'py-5'
        }`}
        style={{
          background: scrolled || activeDropdown
            ? 'rgba(6, 7, 26, 0.85)'
            : 'transparent',
          backdropFilter: scrolled || activeDropdown ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between" ref={dropdownRef}>
          <Link to="/" className="flex items-center group translate-y-[2px]">
            <MagdioLogo className="h-10 md:h-12 w-auto transition-opacity duration-300 group-hover:opacity-85" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            
            {/* Services Dropdown Toggle */}
            <div className="relative group">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className={`nav-link flex items-center gap-1.5 ${location.pathname.includes('/services') || activeDropdown === 'services' ? 'active' : ''}`}
              >
                Services <FaChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Industries Dropdown Toggle */}
            <div className="relative group">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')}
                className={`nav-link flex items-center gap-1.5 ${activeDropdown === 'industries' ? 'active' : ''}`}
              >
                Industries <FaChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-3">
             <Link to="/contact" className="px-6 py-2 rounded-full font-semibold text-white text-sm bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-[0_0_20px_rgba(138,43,226,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
               Let's Talk
             </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* ───── MEGA MENUS ───── */}
        <AnimatePresence>
          {/* Services Nested Mega Menu */}
          {activeDropdown === 'services' && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 right-0 w-full rounded-none border-t border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 hidden md:block"
              style={{ background: 'rgba(10, 10, 25, 0.88)', backdropFilter: 'blur(24px)' }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 flex gap-12">
                
                {/* Column 1: Parent Categories */}
                <div className="w-1/4 flex flex-col gap-2 border-r border-white/5 pr-8">
                  {megaMenuData.services.map(category => {
                    const isActive = activeServiceCategory === category.id;
                    const Icon = category.icon;
                    return (
                      <button 
                        key={category.id}
                        onMouseEnter={() => setActiveServiceCategory(category.id)}
                        className={`w-full text-left flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${isActive ? 'bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)]' : 'border border-transparent hover:bg-white/5'}`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-white/10 ' + category.color : 'bg-white/5 text-white/50'}`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <h4 className={`font-display font-bold text-[15px] transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>{category.name}</h4>
                        </div>
                        <FaArrowRight className={`ml-auto text-[10px] transition-all duration-300 ${isActive ? 'opacity-100 text-white/50 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                      </button>
                    );
                  })}
                </div>

                {/* Column 2: Child Items */}
                <div className="w-2/4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeServiceCategory}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="grid grid-cols-2 gap-x-8 gap-y-3 pt-2"
                    >
                      {megaMenuData.services.find(c => c.id === activeServiceCategory)?.items.map(link => {
                        const parentCat = megaMenuData.services.find(c => c.id === activeServiceCategory);
                        return (
                         <Link 
                           to={link.path} 
                           key={link.name} 
                           className={`group relative pl-4 border-l-2 border-white/10 ${parentCat.hoverBorder} py-2.5 text-white/60 hover:text-white transition-all duration-300 text-[15px] flex items-center justify-between hover:bg-white/5 rounded-r-lg`}
                         >
                           <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                         </Link>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Column 3: CTA */}
                <div className="w-1/4 pl-8 border-l border-white/5 flex flex-col justify-center">
                    <div className="glass-card-premium p-6 text-center border border-white/10 hover:border-brand-yellow/30 transition-colors">
                      <h4 className="font-display font-bold text-white mb-2">Need Help Choosing?</h4>
                      <p className="text-white/50 text-xs mb-6 leading-relaxed">Let our AI and marketing experts build the perfect customized growth strategy for your business.</p>
                      <Link to="/contact" className="btn-primary w-full py-3.5 text-sm flex justify-center items-center gap-2">Let's Talk <FaArrowRight size={12}/></Link>
                    </div>
                </div>

              </div>

              {/* View All Services Bottom Bar */}
              <div className="border-t border-white/5 bg-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
                   <p className="text-white/60 text-sm">Ready to explore all our capabilities? We offer 25+ specialized services.</p>
                   <Link to="/services" className="group flex items-center gap-2 px-6 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold text-xs hover:bg-brand-yellow hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(242,179,0,0.4)]">
                     View All Services <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Industries Mega Menu */}
          {activeDropdown === 'industries' && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 right-0 w-full rounded-none border-t border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 hidden md:block"
              style={{ background: 'rgba(10, 10, 25, 0.88)', backdropFilter: 'blur(24px)' }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-16">
                <div className="flex items-center gap-2 mb-8 text-brand-lightblue border-b border-white/5 pb-3 w-fit">
                  <FaBuilding size={16} /> <h4 className="font-display font-bold uppercase tracking-widest text-sm">Industries We Serve</h4>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  {megaMenuData.industries.map(link => (
                    <motion.div variants={itemVariants} key={link.name}>
                      <Link to={link.path} className="group glass-card-premium p-6 border border-white/5 hover:border-brand-yellow/40 hover:bg-brand-yellow/5 hover:-translate-y-1 transition-all duration-300 block">
                        <h5 className="text-white font-bold text-base mb-2 group-hover:text-brand-yellow transition-colors">{link.name}</h5>
                        <p className="text-white/40 text-xs flex items-center gap-1 group-hover:text-white/70 transition-colors">
                          Explore solutions <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9998] flex flex-col pt-24 px-6 md:hidden overflow-y-auto"
            style={{
              background: 'rgba(6, 7, 26, 0.97)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col gap-2 pb-10">
              <Link to="/" className="text-2xl font-display font-bold py-4 border-b border-white/5 text-white">Home</Link>
              <Link to="/about" className="text-2xl font-display font-bold py-4 border-b border-white/5 text-white">About</Link>
              
              {/* Mobile Services Accordion */}
              <div className="border-b border-white/5">
                <button 
                  onClick={() => setOpenMobileAccordion(openMobileAccordion === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between text-2xl font-display font-bold py-4 text-white"
                >
                  Services
                  <FaChevronDown className={`text-base transition-transform duration-300 ${openMobileAccordion === 'services' ? 'rotate-180 text-brand-yellow' : 'text-white/30'}`} />
                </button>
                <AnimatePresence>
                  {openMobileAccordion === 'services' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-6 pb-6"
                    >
                      {megaMenuData.services.map(category => (
                        <div key={category.id}>
                           <h5 className={`text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2 ${category.color}`}>
                             <category.icon /> {category.name}
                           </h5>
                           <div className="flex flex-col gap-1 pl-6 border-l border-white/10 ml-2">
                             {category.items.map(l => (
                               <Link key={l.name} to={l.path} className="text-white/60 py-1.5 text-base hover:text-white transition-colors">{l.name}</Link>
                             ))}
                           </div>
                        </div>
                      ))}
                      <Link to="/services" className="mt-2 text-brand-yellow font-bold text-sm flex items-center gap-2 ml-2">View All Services <FaArrowRight size={10}/></Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries Accordion */}
              <div className="border-b border-white/5">
                <button 
                  onClick={() => setOpenMobileAccordion(openMobileAccordion === 'industries' ? null : 'industries')}
                  className="w-full flex items-center justify-between text-2xl font-display font-bold py-4 text-white"
                >
                  Industries
                  <FaChevronDown className={`text-base transition-transform duration-300 ${openMobileAccordion === 'industries' ? 'rotate-180 text-brand-yellow' : 'text-white/30'}`} />
                </button>
                <AnimatePresence>
                  {openMobileAccordion === 'industries' && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-1 pl-4 pb-6"
                    >
                       <div className="flex flex-col gap-1 border-l border-white/10 pl-4 mt-2">
                         {megaMenuData.industries.map(l => (
                           <Link key={l.name} to={l.path} className="text-white/60 py-2 text-base hover:text-white transition-colors">{l.name}</Link>
                         ))}
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/portfolio" className="text-2xl font-display font-bold py-4 border-b border-white/5 text-white">Portfolio</Link>
              <Link to="/contact" className="text-2xl font-display font-bold py-4 border-b border-white/5 text-white">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

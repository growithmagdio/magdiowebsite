import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  FaBullhorn, FaCode, FaBuilding, FaLightbulb, FaChartLine,
  FaArrowRight, FaCheckCircle
} from 'react-icons/fa';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { servicesData } from '../data/servicesData';

const categories = [
  { id: 'all', label: 'All Services', icon: null, path: '/services' },
  { id: 'marketing', label: 'Marketing', icon: FaBullhorn, path: '/services/marketing' },
  { id: 'development', label: 'Development', icon: FaCode, path: '/services/development' },
  { id: 'branding', label: 'Branding', icon: FaBuilding, path: '/services/branding' },
  { id: 'consulting', label: 'Consulting', icon: FaLightbulb, path: '/services/consulting' },
  { id: 'analytics', label: 'Analytics & Tracking', icon: FaChartLine, path: '/services/analytics' },
];

const categorySeoMap = {
  all: {
    title: "Our Services | Digital Marketing, Development & Growth | MAGDIO",
    description: "Explore our full suite of AI-powered digital marketing, custom software development, branding, consulting, and analytics services to scale your business.",
  },
  marketing: {
    title: "Marketing Services | SEO, Ads & Social Media Marketing | MAGDIO",
    description: "Drive targeted traffic and high-intent leads with our data-driven marketing services including SEO, GEO, Google Ads, Meta Ads, and LinkedIn campaigns.",
  },
  development: {
    title: "Development Services | Ecommerce, Web & SaaS App Engineering | MAGDIO",
    description: "Custom web development, Shopify, WordPress, SaaS platforms, and mobile apps engineered for speed, scalability, and seamless user experiences.",
  },
  branding: {
    title: "Branding Services | Identity, Strategy & Logo Design | MAGDIO",
    description: "Build a memorable brand identity with our comprehensive branding services, strategic positioning, guidelines, and graphic design.",
  },
  consulting: {
    title: "Business & Tech Consulting | Digital Transformation | MAGDIO",
    description: "Strategic executive consulting and digital transformation roadmaps to streamline operations, adopt cloud tech, and accelerate growth.",
  },
  analytics: {
    title: "Analytics & Conversion Tracking Setup | GA4 & GTM | MAGDIO",
    description: "Get crystal-clear data insights with our Google Analytics 4, Tag Manager, Search Console, and server-side conversion tracking setup.",
  },
};

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ServicesPage({ category: initialCategory }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active category based on URL pathname or prop
  const currentPath = location.pathname.toLowerCase();
  let activeTab = 'all';

  if (initialCategory) {
    activeTab = initialCategory.toLowerCase();
  } else if (currentPath.includes('/services/marketing')) {
    activeTab = 'marketing';
  } else if (currentPath.includes('/services/development')) {
    activeTab = 'development';
  } else if (currentPath.includes('/services/branding')) {
    activeTab = 'branding';
  } else if (currentPath.includes('/services/consulting')) {
    activeTab = 'consulting';
  } else if (currentPath.includes('/services/analytics')) {
    activeTab = 'analytics';
  }

  const handleCategorySelect = (cat) => {
    navigate(cat.path);
  };

  // Filter services from servicesData
  const filteredServices = activeTab === 'all'
    ? servicesData
    : servicesData.filter(s => s.category.toLowerCase() === activeTab);

  const seoData = categorySeoMap[activeTab] || categorySeoMap.all;

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    ...(activeTab !== 'all' ? [{ label: categories.find(c => c.id === activeTab)?.label || activeTab }] : [])
  ];

  return (
    <div className="page-bg min-h-screen pt-24 pb-16 md:pt-28 md:pb-20 bg-[#03030b]">
      <SEO 
        title={seoData.title}
        description={seoData.description}
      />

      {/* Ambient background glows */}
      <div className="blob w-96 h-96 top-0 -right-40" style={{ background: '#1A22B8' }} />
      <div className="blob w-80 h-80 bottom-40 -left-20 animation-delay-4000" style={{ background: '#8A2BE2' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb Header */}
        <div className="flex justify-center mb-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Page Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-yellow font-semibold tracking-widest text-xs uppercase mb-3"
          >
            ✦ What We Offer
          </motion.p>
          <h1 className="section-title mb-4">
            {activeTab === 'all' ? (
              <>We Provide <span className="gradient-text">Expert Solutions</span></>
            ) : (
              <><span className="gradient-text capitalize">{categories.find(c => c.id === activeTab)?.label}</span> Services</>
            )}
          </h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            We deliver powerful digital marketing, custom software engineering, and business growth solutions engineered for high ROI.
          </p>
        </motion.div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-14">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-purple text-white shadow-[0_0_25px_rgba(138,43,226,0.5)] border border-white/20 scale-105'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {Icon && <Icon size={14} className={isActive ? 'text-brand-yellow' : 'text-white/60'} />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {filteredServices.map((service) => {
              const servicePath = `/services/${service.id}`;
              return (
                <Link to={servicePath} key={service.id} className="block group h-full">
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="service-card relative overflow-hidden h-full flex flex-col p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-purple/50 transition-all duration-300 shadow-xl"
                  >
                    {/* Category Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-brand-purple/20 text-brand-lightblue border border-brand-purple/30">
                        {service.category}
                      </span>
                      <span className="text-white/40 text-xs group-hover:text-brand-yellow transition-colors flex items-center gap-1 font-semibold">
                        View Service <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                      {service.subtitle || service.overview}
                    </p>

                    {/* Features list bullet points */}
                    {service.features && service.features.length > 0 && (
                      <div className="pt-4 border-t border-white/10 mt-auto">
                        <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
                          {service.features.slice(0, 4).map((feat, idx) => (
                            <span key={idx} className="flex items-center gap-1.5 truncate">
                              <FaCheckCircle size={10} className="text-brand-yellow shrink-0" />
                              <span className="truncate">{feat}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Call To Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center border border-white/20 shadow-[0_0_50px_rgba(26,34,184,0.3)]"
          style={{
            background: 'linear-gradient(135deg, rgba(26,34,184,0.35) 0%, rgba(138,43,226,0.2) 100%)',
          }}
        >
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4">
            Need a Custom <span className="gradient-text-gold">Growth Engine?</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto text-sm md:text-base">
            Let's discuss your targets and engineer a tailored strategy specifically for your business goals.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-sm md:text-base px-8 py-3.5">
            Book Free Consultation <FaArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

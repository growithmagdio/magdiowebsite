import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const categories = ['All', 'Branding', 'Web Design', 'Marketing', 'SEO', 'Creative Campaigns'];

const projects = [
  {
    id: 1,
    title: 'NovaBrand Identity',
    category: 'Branding',
    tag: 'Brand Identity',
    color: '#1A22B8',
    size: 'large',
    image: '/p-branding.webp',
    desc: 'Complete brand overhaul with logo, color system, typography and visual guidelines.',
  },
  {
    id: 2,
    title: 'EcoShop E-Commerce',
    category: 'Web Design',
    tag: 'Web Design',
    color: '#F2B300',
    size: 'small',
    image: '/p-ecommerce.webp',
    desc: 'Conversion-optimized e-commerce platform with seamless UX.',
  },
  {
    id: 3,
    title: 'ViralReach Campaign',
    category: 'Marketing',
    tag: 'Social Media',
    color: '#D9D7FF',
    size: 'small',
    image: '/p-social.webp',
    desc: '10x engagement social campaign reaching 1M+ impressions.',
  },
  {
    id: 4,
    title: 'RankMaster SEO',
    category: 'SEO',
    tag: 'SEO',
    color: '#4CAF50',
    size: 'large',
    image: '/p-seo.webp',
    desc: 'Technical SEO audit and implementation resulting in 300% organic traffic growth.',
  },
  {
    id: 5,
    title: 'StoryTell Creative',
    category: 'Creative Campaigns',
    tag: 'Creative',
    color: '#FF6B6B',
    size: 'small',
    image: '/p-creative.webp',
    desc: 'Storytelling-driven brand campaign that went viral across platforms.',
  },
  {
    id: 6,
    title: 'TechFlow SaaS Web',
    category: 'Web Design',
    tag: 'Web Design',
    color: '#BFD7FF',
    size: 'small',
    image: '/p-saas.webp',
    desc: 'Modern SaaS landing page with interactive demos and lead capture.',
  },
  {
    id: 7,
    title: 'PulseMedia Growth',
    category: 'Marketing',
    tag: 'Growth Marketing',
    color: '#F2B300',
    size: 'large',
    image: '/p-growth.webp',
    desc: 'Full-funnel growth marketing strategy achieving 4x ROI in 90 days.',
  },
  {
    id: 8,
    title: 'ZenSpace Branding',
    category: 'Branding',
    tag: 'Branding',
    color: '#1A22B8',
    size: 'small',
    image: '/p-wellness.webp',
    desc: 'Minimalist wellness brand identity with premium design system.',
  },
];

// ── Marquee card data ──
const row1Cards = [
  { title: 'NovaBrand Identity',  cat: 'Branding',         img: '/mq-corporate.webp',  accent: '#F2B300', label: 'Brand Design' },
  { title: 'EcoShop E-Commerce',  cat: 'Web Design',       img: '/mq-ecommerce.webp',  accent: '#4ade80', label: 'Web Dev'      },
  { title: 'ViralReach Campaign', cat: 'Social Media',     img: '/mq-marketing.webp',  accent: '#f0abfc', label: 'Marketing'   },
  { title: 'RankMaster SEO',      cat: 'SEO Strategy',     img: '/mq-saas.webp',       accent: '#93c5fd', label: 'SEO'         },
  { title: 'StoryTell Creative',  cat: 'Content',          img: '/mq-creative.webp',   accent: '#fca5a5', label: 'Creative'    },
  { title: 'TechFlow SaaS',       cat: 'Web Design',       img: '/mq-saas.webp',       accent: '#F2B300', label: 'Web Dev'     },
  { title: 'PulseMedia Growth',   cat: 'Growth Marketing', img: '/mq-marketing.webp',  accent: '#a5b4fc', label: 'Growth'      },
  { title: 'ZenSpace Branding',   cat: 'Brand Identity',   img: '/mq-corporate.webp',  accent: '#6ee7b7', label: 'Branding'   },
];

const row2Cards = [
  { title: 'FoodBox Startup',     cat: 'Brand + Web',      img: '/mq-food.webp',       accent: '#fde68a', label: 'Startup'    },
  { title: 'LegalEdge Law Firm',  cat: 'Web Design',       img: '/mq-corporate.webp',  accent: '#c7d2fe', label: 'Corporate'  },
  { title: 'JewelCo Campaign',    cat: 'Social + SEO',     img: '/mq-creative.webp',   accent: '#e9d5ff', label: 'Campaign'   },
  { title: 'CraftLab Portfolio',  cat: 'Creative',         img: '/mq-creative.webp',   accent: '#bae6fd', label: 'Portfolio'  },
  { title: 'BurgerCo Branding',   cat: 'Food & Beverage',  img: '/mq-food.webp',       accent: '#fed7aa', label: 'Branding'   },
  { title: 'WomenStyle Fashion',  cat: 'E-commerce',       img: '/mq-ecommerce.webp',  accent: '#fbcfe8', label: 'Fashion'    },
  { title: 'FreelancerHub',       cat: 'SaaS Platform',    img: '/mq-saas.webp',       accent: '#F2B300', label: 'SaaS'       },
  { title: 'EduLearn Platform',   cat: 'EdTech',           img: '/mq-marketing.webp',  accent: '#86efac', label: 'EdTech'     },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId]       = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="page-bg min-h-screen pt-28 pb-20">
      {/* Marquee keyframes */}
      <style>{`
        @keyframes mq-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes mq-right { from { transform: translateX(-50%); } to { transform: translateX(0); }    }
        .mq-left  { animation: mq-left  18s linear infinite; }
        .mq-right { animation: mq-right 22s linear infinite; }
        .mq-left:hover, .mq-right:hover { animation-play-state: paused; }
      `}</style>

      {/* Blobs */}
      <div className="blob w-96 h-96 top-0 right-0" style={{ background: '#1A22B8' }} />
      <div className="blob w-80 h-80 bottom-20 left-0 animation-delay-4000" style={{ background: '#F2B300' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-brand-yellow font-semibold tracking-widest text-sm mb-3 uppercase">✦ Our Work</p>
          <h1 className="section-title mb-5">
            Projects That Define{' '}
            <span className="gradient-text">Innovation</span>
          </h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore our collection of creative digital projects, branding campaigns, and modern
            website experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border"
              style={
                activeFilter === cat
                  ? {
                      background: 'linear-gradient(135deg, #1A22B8, #4a54e8)',
                      color: '#fff',
                      border: '1px solid #1A22B8',
                      boxShadow: '0 0 20px rgba(26,34,184,0.5)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="break-inside-avoid glass-card overflow-hidden cursor-pointer group relative mb-6"
                whileHover={{ y: -4 }}
              >
                <div
                  className={`relative ${project.size === 'large' ? 'h-56' : 'h-44'} overflow-hidden`}
                >
                  {/* Cover image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-[0.88] saturate-[1.05] contrast-[1.05] group-hover:brightness-100 group-hover:saturate-100 group-hover:contrast-100"
                  />
                  {/* Subtle dark overlay always visible */}
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Hover overlay with icon */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: `${project.color}bb`, backdropFilter: 'blur(3px)' }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/40">
                      <FaExternalLinkAlt size={18} className="text-white" />
                    </div>
                  </motion.div>

                  {/* Tag badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: `${project.color}cc`, backdropFilter: 'blur(10px)' }}
                  >
                    {project.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-brand-yellow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ═══════════════════════════════════════════════════
           SCROLLING PORTFOLIO MARQUEE — full bleed strip
          ═══════════════════════════════════════════════════ */}
      <section className="w-full overflow-hidden py-16 mt-10 relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #06071a, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #06071a, transparent)' }} />

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-xs uppercase tracking-widest font-semibold mb-8"
        >
          ✦ Our Work in Motion
        </motion.p>

        {/* Row 1 — scrolls LEFT */}
        <div className="flex whitespace-nowrap mb-4">
          {[...row1Cards, ...row1Cards].map((card, i) => (
            <div
              key={i}
              className="mq-left inline-flex shrink-0 mx-3 rounded-2xl overflow-hidden cursor-default relative"
              style={{
                width: '260px', height: '170px',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                flexShrink: 0,
              }}
            >
              {/* Website screenshot background */}
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.8] contrast-[1.1] saturate-[0.85]"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 100%)' }} />
              {/* Content */}
              <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm"
                    style={{ background: 'rgba(0,0,0,0.4)', color: card.accent, border: `1px solid ${card.accent}50` }}
                  >{card.label}</span>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: card.accent }} />
                </div>
                <div>
                  <p className="font-display font-black text-white text-base leading-tight mb-0.5 drop-shadow">{card.title}</p>
                  <p style={{ color: card.accent }} className="text-xs font-medium">{card.cat}</p>
                </div>
              </div>
              {/* Accent bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: card.accent }} />
            </div>
          ))}
        </div>

        {/* Row 2 — scrolls RIGHT */}
        <div className="flex whitespace-nowrap">
          {[...row2Cards, ...row2Cards].map((card, i) => (
            <div
              key={i}
              className="mq-right inline-flex shrink-0 mx-3 rounded-2xl overflow-hidden cursor-default relative"
              style={{
                width: '240px', height: '160px',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                flexShrink: 0,
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.8] contrast-[1.1] saturate-[0.85]"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.3) 100%)' }} />
              <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm"
                    style={{ background: 'rgba(0,0,0,0.4)', color: card.accent, border: `1px solid ${card.accent}50` }}
                  >{card.label}</span>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: card.accent }} />
                </div>
                <div>
                  <p className="font-display font-black text-white text-sm leading-tight mb-0.5 drop-shadow">{card.title}</p>
                  <p style={{ color: card.accent }} className="text-xs font-medium">{card.cat}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: card.accent }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

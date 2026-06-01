import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PremiumBackground from './components/PremiumBackground';
import FloatingElements from './components/FloatingElements';
import PointerGlow from './components/PointerGlow';

// Lazy load pages for fast initial page loading times
const HomePage             = lazy(() => import('./pages/HomePage'));
const ServicesPage         = lazy(() => import('./pages/ServicesPage'));
const ServiceTemplate      = lazy(() => import('./pages/ServiceTemplate'));
const DigitalMarketingPage = lazy(() => import('./pages/DigitalMarketingPage'));
const IndustryTemplate     = lazy(() => import('./pages/IndustryTemplate'));
const MissionPage     = lazy(() => import('./pages/MissionPage'));
const PortfolioPage   = lazy(() => import('./pages/PortfolioPage'));
const AboutPage       = lazy(() => import('./pages/AboutPage'));
const BlogPage        = lazy(() => import('./pages/BlogPage'));
const AdminPage       = lazy(() => import('./pages/AdminPage'));
const ContactPage     = lazy(() => import('./pages/ContactPage'));
const SeoServicesPage      = lazy(() => import('./pages/SeoServicesPage'));
const SocialMediaMarketingPage = lazy(() => import('./pages/SocialMediaMarketingPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll resets view without scrolling animations
    });
  }, [pathname]);

  return null;
}

const pageTransition = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0 },
  exit:     { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: 'easeInOut' },
};

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-white/5" />
        <div className="absolute inset-0 rounded-full border-4 border-brand-purple border-t-transparent animate-spin" />
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="overflow-x-hidden w-full relative min-h-screen flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} {...pageTransition} className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/"                      element={<HomePage />} />
              <Route path="/services"              element={<ServicesPage />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/services/seo-services" element={<SeoServicesPage />} />
              <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
              <Route path="/services/:serviceId"   element={<ServiceTemplate />} />
              <Route path="/industries/:industryId" element={<IndustryTemplate />} />
              <Route path="/mission"               element={<MissionPage />} />
              <Route path="/portfolio"             element={<PortfolioPage />} />
              <Route path="/about"                 element={<AboutPage />} />
              <Route path="/blog"                  element={<BlogPage />} />
              <Route path="/admin"                 element={<AdminPage />} />
              <Route path="/contact"               element={<ContactPage />} />
              <Route path="*"                      element={<HomePage />} />
            </Routes>
          </Suspense>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="overflow-x-hidden w-full relative min-h-screen flex flex-col bg-[#03030b]">
        <PremiumBackground />
        <PointerGlow />
        <Navbar />
        <FloatingElements />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

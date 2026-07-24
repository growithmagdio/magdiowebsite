import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import useQueryStringGuard from './hooks/useQueryStringGuard';

// Lazy load non-critical visual background & widget overlays
const PremiumBackground = lazy(() => import('./components/PremiumBackground'));
const FloatingElements  = lazy(() => import('./components/FloatingElements'));
const PointerGlow       = lazy(() => import('./components/PointerGlow'));

// Lazy load secondary pages for fast initial page loading times
const ServicesPage         = lazy(() => import('./pages/ServicesPage'));
const ServiceTemplate      = lazy(() => import('./pages/ServiceTemplate'));
const DigitalMarketingPage = lazy(() => import('./pages/DigitalMarketingPage'));
const IndustryTemplate     = lazy(() => import('./pages/IndustryTemplate'));
const MissionPage     = lazy(() => import('./pages/MissionPage'));
const PortfolioPage   = lazy(() => import('./pages/PortfolioPage'));
const AboutPage       = lazy(() => import('./pages/AboutPage'));
const BlogPage        = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage  = lazy(() => import('./pages/BlogDetailPage'));
const AdminPage       = lazy(() => import('./pages/AdminPage'));
const ContactPage     = lazy(() => import('./pages/ContactPage'));
const SeoServicesPage      = lazy(() => import('./pages/SeoServicesPage'));
const GeoServicesPage      = lazy(() => import('./pages/GeoServicesPage'));
const SocialMediaMarketingPage = lazy(() => import('./pages/SocialMediaMarketingPage'));
const GoogleAdsPage = lazy(() => import('./pages/GoogleAdsPage'));
const PerformanceMarketingPage = lazy(() => import('./pages/PerformanceMarketingPage'));
const LinkedInAdsPage = lazy(() => import('./pages/LinkedInAdsPage'));
const YouTubeAdsPage = lazy(() => import('./pages/YouTubeAdsPage'));
const MetaAdsPage = lazy(() => import('./pages/MetaAdsPage'));
const WhatsAppMarketingPage = lazy(() => import('./pages/WhatsAppMarketingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Detailed Case Studies lazy loads
const HaberLivingCaseStudy = lazy(() => import('./pages/case-studies/HaberLivingCaseStudy'));
const AutomobileEcommerceCaseStudy = lazy(() => import('./pages/case-studies/AutomobileEcommerceCaseStudy'));
const DreamzilCaseStudy = lazy(() => import('./pages/case-studies/DreamzilCaseStudy'));
const OdooERPCaseStudy = lazy(() => import('./pages/case-studies/OdooERPCaseStudy'));
const BittyClicksCaseStudy = lazy(() => import('./pages/case-studies/BittyClicksCaseStudy'));
const BadieStudioCaseStudy = lazy(() => import('./pages/case-studies/BadieStudioCaseStudy'));
const NammaMarktCaseStudy = lazy(() => import('./pages/case-studies/NammaMarktCaseStudy'));
const SasvithaHomeFinanceCaseStudy = lazy(() => import('./pages/case-studies/SasvithaHomeFinanceCaseStudy'));


function ScrollToTop() {
  const { pathname } = useLocation();
  useQueryStringGuard();

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
  const isAdmin = location.pathname === '/admin';
  const activePageTransition = isAdmin
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 1, y: 0 },
        transition: { duration: 0 }
      }
    : pageTransition;

  return (
    <div className="overflow-x-hidden w-full relative min-h-screen flex flex-col">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={location.pathname} {...activePageTransition} className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/"                      element={<HomePage />} />
              <Route path="/services"              element={<ServicesPage />} />
              
              {/* Digital Marketing Services */}
              <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/digital-marketing-company-in-chennai-magdio" element={<DigitalMarketingPage />} />
              <Route path="/digital-marketing-company-chennai-magdio" element={<DigitalMarketingPage />} />
              <Route path="/digital-marketing-agency-in-chennai-magdio" element={<DigitalMarketingPage />} />
              <Route path="/digital-marketing-agency-chennai-magdio" element={<DigitalMarketingPage />} />
              <Route path="/digital-marketing-company-tamilnadu-magdio" element={<DigitalMarketingPage />} />
              <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
              
              {/* SEO Services */}
              <Route path="/services/seo-services" element={<SeoServicesPage />} />
              <Route path="/seo-company-in-chennai-magdio" element={<SeoServicesPage />} />
              <Route path="/seo-company-chennai-magdio" element={<SeoServicesPage />} />
              <Route path="/seo-agency-in-chennai-magdio" element={<SeoServicesPage />} />
              <Route path="/seo-agency-chennai-magdio" element={<SeoServicesPage />} />
              <Route path="/seo-services-chennai-magdio" element={<SeoServicesPage />} />
              <Route path="/seo-services-in-chennai-magdio" element={<SeoServicesPage />} />
              <Route path="/seo-services-tamilnadu-magdio" element={<SeoServicesPage />} />
              <Route path="/seo" element={<SeoServicesPage />} />
              
              {/* GEO Services */}
              <Route path="/services/geo-services" element={<GeoServicesPage />} />
              <Route path="/geo-services-agency-chennai-magdio" element={<GeoServicesPage />} />
              <Route path="/geo-services-agency-in-chennai-magdio" element={<GeoServicesPage />} />
              <Route path="/geo-service-agency-in-chennai-magdio" element={<GeoServicesPage />} />
              <Route path="/geo-services-company-in-chennai-magdio" element={<GeoServicesPage />} />
              <Route path="/geo-services-tamilnadu-magdio" element={<GeoServicesPage />} />
              <Route path="/geo" element={<GeoServicesPage />} />
              
              {/* Social Media Marketing Services */}
              <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
              <Route path="/social-media-marketing-agency-in-chennai-magdio" element={<SocialMediaMarketingPage />} />
              <Route path="/social-media-marketing-agency-chennai-magdio" element={<SocialMediaMarketingPage />} />
              <Route path="/social-media-marketing-company-in-chennai-magdio" element={<SocialMediaMarketingPage />} />
              <Route path="/social-media-marketing-tamilnadu-magdio" element={<SocialMediaMarketingPage />} />
              <Route path="/social-media" element={<SocialMediaMarketingPage />} />
              
              {/* Google Ads Services */}
              <Route path="/services/google-ads" element={<GoogleAdsPage />} />
              <Route path="/google-ads-agency-chennai-magdio" element={<GoogleAdsPage />} />
              <Route path="/google-ads-agency-in-chennai-magdio" element={<GoogleAdsPage />} />
              <Route path="/google-ads-company-in-chennai-magdio" element={<GoogleAdsPage />} />
              <Route path="/google-ads-company-chennai-magdio" element={<GoogleAdsPage />} />
              <Route path="/google-ads-tamilnadu-magdio" element={<GoogleAdsPage />} />
              <Route path="/google-ads" element={<GoogleAdsPage />} />
              
              {/* Performance Marketing Services */}
              <Route path="/services/performance-marketing" element={<PerformanceMarketingPage />} />
              <Route path="/best-performance-marketing-agency-in-chennai-magdio" element={<PerformanceMarketingPage />} />
              <Route path="/performance-marketing-agency-in-chennai-magdio" element={<PerformanceMarketingPage />} />
              <Route path="/performance-marketing-agency-chennai-magdio" element={<PerformanceMarketingPage />} />
              <Route path="/performance-marketing-company-in-chennai-magdio" element={<PerformanceMarketingPage />} />
              <Route path="/performance-marketing-tamilnadu-magdio" element={<PerformanceMarketingPage />} />
              <Route path="/performance-marketing" element={<PerformanceMarketingPage />} />
              
              {/* Meta Ads Services */}
              <Route path="/services/meta-ads" element={<MetaAdsPage />} />
              <Route path="/meta-ads-agency-in-chennai-magdio" element={<MetaAdsPage />} />
              <Route path="/meta-ads-agency-chennai-magdio" element={<MetaAdsPage />} />
              <Route path="/meta-ads-company-in-chennai-magdio" element={<MetaAdsPage />} />
              <Route path="/meta-ads-tamilnadu-magdio" element={<MetaAdsPage />} />
              <Route path="/meta-ads" element={<MetaAdsPage />} />

              {/* LinkedIn Ads Services */}
              <Route path="/services/linkedin-ads" element={<LinkedInAdsPage />} />
              <Route path="/linkedin-marketing-b2b-marketing-in-chennai-magdio" element={<LinkedInAdsPage />} />
              <Route path="/linkedin-marketing-agency-in-chennai-magdio" element={<LinkedInAdsPage />} />
              <Route path="/linkedin-ads-agency-in-chennai-magdio" element={<LinkedInAdsPage />} />
              <Route path="/linkedin-ads-agency-chennai-magdio" element={<LinkedInAdsPage />} />
              <Route path="/linkedin-ads-tamilnadu-magdio" element={<LinkedInAdsPage />} />
              <Route path="/linkedin-ads" element={<LinkedInAdsPage />} />
              
              {/* YouTube Ads Services */}
              <Route path="/services/youtube-ads" element={<YouTubeAdsPage />} />
              <Route path="/youtube-marketing-agency-chennai-magdio" element={<YouTubeAdsPage />} />
              <Route path="/youtube-marketing-agency-in-chennai-magdio" element={<YouTubeAdsPage />} />
              <Route path="/youtube-ads-agency-in-chennai-magdio" element={<YouTubeAdsPage />} />
              <Route path="/youtube-ads-agency-chennai-magdio" element={<YouTubeAdsPage />} />
              <Route path="/youtube-ads-tamilnadu-magdio" element={<YouTubeAdsPage />} />
              <Route path="/youtube-ads" element={<YouTubeAdsPage />} />
              
              {/* WhatsApp Marketing Services */}
              <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketingPage />} />
              <Route path="/whatsapp-marketing-services-in-chennai-magdio" element={<WhatsAppMarketingPage />} />
              <Route path="/whatsapp-marketing-agency-in-chennai-magdio" element={<WhatsAppMarketingPage />} />
              <Route path="/whatsapp-marketing-agency-chennai-magdio" element={<WhatsAppMarketingPage />} />
              <Route path="/whatsapp-marketing-chennai-magdio" element={<WhatsAppMarketingPage />} />
              <Route path="/whatsapp-marketing-tamilnadu-magdio" element={<WhatsAppMarketingPage />} />
              <Route path="/whatsapp-marketing" element={<WhatsAppMarketingPage />} />

              <Route path="/services/:serviceId"   element={<ServiceTemplate />} />
              <Route path="/industries/:industryId" element={<IndustryTemplate />} />
              <Route path="/mission"               element={<MissionPage />} />
              <Route path="/portfolio"             element={<PortfolioPage />} />
              
              {/* Case study routes */}
              <Route path="/portfolio/haber-living-seo-growth" element={<HaberLivingCaseStudy />} />
              <Route path="/portfolio/automobile-ecommerce-seo-growth" element={<AutomobileEcommerceCaseStudy />} />
              <Route path="/portfolio/dreamzil-meta-ads-growth" element={<DreamzilCaseStudy />} />
              <Route path="/portfolio/odoo-erp-lead-generation" element={<OdooERPCaseStudy />} />
              <Route path="/portfolio/bitty-clicks-seo-case-study" element={<BittyClicksCaseStudy />} />
              <Route path="/portfolio/badie-studio-seo-case-study" element={<BadieStudioCaseStudy />} />
              <Route path="/portfolio/namma-markt-seo-case-study" element={<NammaMarktCaseStudy />} />
              <Route path="/portfolio/sasvitha-home-finance-seo-case-study" element={<SasvithaHomeFinanceCaseStudy />} />
              
              <Route path="/about"                 element={<AboutPage />} />
              <Route path="/blog"                  element={<BlogPage />} />
              <Route path="/blog/:id"              element={<BlogDetailPage />} />
              <Route path="/admin"                 element={<AdminPage />} />
              <Route path="/contact"               element={<ContactPage />} />
              <Route path="*"                      element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [loadVisuals, setLoadVisuals] = useState(false);

  useEffect(() => {
    let timerId;
    let loaded = false;

    const triggerVisuals = () => {
      if (loaded) return;
      loaded = true;
      if (timerId) clearTimeout(timerId);
      ['touchstart', 'scroll', 'mousemove'].forEach(evt => {
        window.removeEventListener(evt, triggerVisuals);
      });
      setLoadVisuals(true);
    };

    ['touchstart', 'scroll', 'mousemove'].forEach(evt => {
      window.addEventListener(evt, triggerVisuals, { passive: true, once: true });
    });

    timerId = setTimeout(triggerVisuals, 3500);

    return () => {
      if (timerId) clearTimeout(timerId);
      ['touchstart', 'scroll', 'mousemove'].forEach(evt => {
        window.removeEventListener(evt, triggerVisuals);
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="overflow-x-hidden w-full relative min-h-screen flex flex-col bg-transparent">
        <Suspense fallback={null}>
          {loadVisuals && <PremiumBackground />}
          {loadVisuals && <PointerGlow />}
          {loadVisuals && <FloatingElements />}
        </Suspense>
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

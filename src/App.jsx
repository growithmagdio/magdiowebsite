import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PremiumBackground from './components/PremiumBackground';
import FloatingElements from './components/FloatingElements';
import PointerGlow from './components/PointerGlow';
import useQueryStringGuard from './hooks/useQueryStringGuard';

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
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} {...activePageTransition} className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/"                      element={<HomePage />} />
              <Route path="/services"              element={<ServicesPage />} />
              
              {/* Digital Marketing Services */}
              <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/digital-marketing-company-in-chennai-magdio" element={<Navigate to="/services/digital-marketing" replace />} />
              <Route path="/digital-marketing-company-tamilnadu-magdio" element={<Navigate to="/services/digital-marketing" replace />} />
              
              {/* SEO Services */}
              <Route path="/services/seo-services" element={<SeoServicesPage />} />
              <Route path="/seo-company-in-chennai-magdio" element={<Navigate to="/services/seo-services" replace />} />
              <Route path="/seo-services-tamilnadu-magdio" element={<Navigate to="/services/seo-services" replace />} />
              
              {/* GEO Services */}
              <Route path="/services/geo-services" element={<GeoServicesPage />} />
              <Route path="/geo-service-agency-in-chennai-magdio" element={<Navigate to="/services/geo-services" replace />} />
              <Route path="/geo-services-tamilnadu-magdio" element={<Navigate to="/services/geo-services" replace />} />
              
              {/* Social Media Marketing Services */}
              <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
              <Route path="/social-media-marketing-agency-in-chennai-magdio" element={<Navigate to="/services/social-media-marketing" replace />} />
              <Route path="/social-media-marketing-tamilnadu-magdio" element={<Navigate to="/services/social-media-marketing" replace />} />
              
              {/* Google Ads Services */}
              <Route path="/services/google-ads" element={<GoogleAdsPage />} />
              <Route path="/google-ads-agency-chennai-magdio" element={<Navigate to="/services/google-ads" replace />} />
              <Route path="/google-ads-tamilnadu-magdio" element={<Navigate to="/services/google-ads" replace />} />
              
              {/* Performance Marketing Services */}
              <Route path="/services/performance-marketing" element={<PerformanceMarketingPage />} />
              <Route path="/best-performance-marketing-agency-in-chennai-magdio" element={<Navigate to="/services/performance-marketing" replace />} />
              <Route path="/performance-marketing-tamilnadu-magdio" element={<Navigate to="/services/performance-marketing" replace />} />
              
              {/* LinkedIn Ads Services */}
              <Route path="/services/meta-ads" element={<MetaAdsPage />} />
              <Route path="/meta-ads-agency-in-chennai-magdio" element={<Navigate to="/services/meta-ads" replace />} />
              <Route path="/meta-ads-tamilnadu-magdio" element={<Navigate to="/services/meta-ads" replace />} />

              {/* LinkedIn Ads Services */}
              <Route path="/services/linkedin-ads" element={<LinkedInAdsPage />} />
              <Route path="/linkedin-marketing-b2b-marketing-in-chennai-magdio" element={<Navigate to="/services/linkedin-ads" replace />} />
              <Route path="/linkedin-ads-tamilnadu-magdio" element={<Navigate to="/services/linkedin-ads" replace />} />
              
              {/* YouTube Ads Services */}
              <Route path="/services/youtube-ads" element={<YouTubeAdsPage />} />
              <Route path="/youtube-marketing-agency-in-chennai-magdio" element={<Navigate to="/services/youtube-ads" replace />} />
              <Route path="/youtube-ads-tamilnadu-magdio" element={<Navigate to="/services/youtube-ads" replace />} />
              
              {/* WhatsApp Marketing Services */}
              <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketingPage />} />
              <Route path="/whatsapp-marketing-services-in-chennai-magdio" element={<Navigate to="/services/whatsapp-marketing" replace />} />
              <Route path="/whatsapp-marketing-tamilnadu-magdio" element={<Navigate to="/services/whatsapp-marketing" replace />} />

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
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="overflow-x-hidden w-full relative min-h-screen flex flex-col bg-transparent">
        <PremiumBackground />
        <PointerGlow />
        <Navbar />
        <FloatingElements />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

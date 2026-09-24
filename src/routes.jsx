import { Navigate } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceTemplate from './pages/ServiceTemplate';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import IndustryTemplate from './pages/IndustryTemplate';
import MissionPage from './pages/MissionPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';
import SeoServicesPage from './pages/SeoServicesPage';
import GeoServicesPage from './pages/GeoServicesPage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketingPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import PerformanceMarketingPage from './pages/PerformanceMarketingPage';
import LinkedInAdsPage from './pages/LinkedInAdsPage';
import YouTubeAdsPage from './pages/YouTubeAdsPage';
import MetaAdsPage from './pages/MetaAdsPage';
import WhatsAppMarketingPage from './pages/WhatsAppMarketingPage';
import NotFoundPage from './pages/NotFoundPage';

// Case Studies
import HaberLivingCaseStudy from './pages/case-studies/HaberLivingCaseStudy';
import AutomobileEcommerceCaseStudy from './pages/case-studies/AutomobileEcommerceCaseStudy';
import DreamzilCaseStudy from './pages/case-studies/DreamzilCaseStudy';
import OdooERPCaseStudy from './pages/case-studies/OdooERPCaseStudy';
import BittyClicksCaseStudy from './pages/case-studies/BittyClicksCaseStudy';
import BadieStudioCaseStudy from './pages/case-studies/BadieStudioCaseStudy';
import NammaMarktCaseStudy from './pages/case-studies/NammaMarktCaseStudy';
import SasvithaHomeFinanceCaseStudy from './pages/case-studies/SasvithaHomeFinanceCaseStudy';

import { servicesData } from './data/servicesData';
import { industriesData } from './data/industriesData';
import { fetchBlogs, fetchBlogById } from './utils/blogService';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },

      { path: 'services/digital-marketing', element: <Navigate to="/digital-marketing-company-in-chennai-magdio" replace /> },
      { path: 'digital-marketing', element: <Navigate to="/digital-marketing-company-in-chennai-magdio" replace /> },
      { path: 'digital-marketing-company-in-chennai-magdio', element: <DigitalMarketingPage /> },
      { path: 'digital-marketing-company-chennai-magdio', element: <DigitalMarketingPage /> },
      { path: 'digital-marketing-agency-in-chennai-magdio', element: <DigitalMarketingPage /> },
      { path: 'digital-marketing-agency-chennai-magdio', element: <DigitalMarketingPage /> },
      { path: 'digital-marketing-company-tamilnadu-magdio', element: <DigitalMarketingPage /> },

      { path: 'services/seo-services', element: <Navigate to="/seo-company-in-chennai-magdio" replace /> },
      { path: 'services/seo', element: <Navigate to="/seo-company-in-chennai-magdio" replace /> },
      { path: 'seo', element: <Navigate to="/seo-company-in-chennai-magdio" replace /> },
      { path: 'seo-company-in-chennai-magdio', element: <SeoServicesPage /> },
      { path: 'seo-company-chennai-magdio', element: <SeoServicesPage /> },
      { path: 'seo-agency-in-chennai-magdio', element: <SeoServicesPage /> },
      { path: 'seo-agency-chennai-magdio', element: <SeoServicesPage /> },
      { path: 'seo-services-chennai-magdio', element: <SeoServicesPage /> },
      { path: 'seo-services-in-chennai-magdio', element: <SeoServicesPage /> },
      { path: 'seo-services-tamilnadu-magdio', element: <SeoServicesPage /> },

      { path: 'services/geo-services', element: <Navigate to="/geo-services-agency-chennai-magdio" replace /> },
      { path: 'services/geo', element: <Navigate to="/geo-services-agency-chennai-magdio" replace /> },
      { path: 'geo', element: <Navigate to="/geo-services-agency-chennai-magdio" replace /> },
      { path: 'geo-services-agency-chennai-magdio', element: <GeoServicesPage /> },
      { path: 'geo-services-agency-in-chennai-magdio', element: <GeoServicesPage /> },
      { path: 'geo-service-agency-in-chennai-magdio', element: <GeoServicesPage /> },
      { path: 'geo-services-company-in-chennai-magdio', element: <GeoServicesPage /> },
      { path: 'geo-services-tamilnadu-magdio', element: <GeoServicesPage /> },

      { path: 'services/social-media-marketing', element: <Navigate to="/social-media-marketing-agency-in-chennai-magdio" replace /> },
      { path: 'services/social-media', element: <Navigate to="/social-media-marketing-agency-in-chennai-magdio" replace /> },
      { path: 'social-media', element: <Navigate to="/social-media-marketing-agency-in-chennai-magdio" replace /> },
      { path: 'social-media-marketing-agency-in-chennai-magdio', element: <SocialMediaMarketingPage /> },
      { path: 'social-media-marketing-agency-chennai-magdio', element: <SocialMediaMarketingPage /> },
      { path: 'social-media-marketing-company-in-chennai-magdio', element: <SocialMediaMarketingPage /> },
      { path: 'social-media-marketing-tamilnadu-magdio', element: <SocialMediaMarketingPage /> },

      { path: 'services/google-ads', element: <Navigate to="/google-ads-agency-chennai-magdio" replace /> },
      { path: 'google-ads', element: <Navigate to="/google-ads-agency-chennai-magdio" replace /> },
      { path: 'google-ads-agency-chennai-magdio', element: <GoogleAdsPage /> },
      { path: 'google-ads-agency-in-chennai-magdio', element: <GoogleAdsPage /> },
      { path: 'google-ads-company-in-chennai-magdio', element: <GoogleAdsPage /> },
      { path: 'google-ads-company-chennai-magdio', element: <GoogleAdsPage /> },
      { path: 'google-ads-tamilnadu-magdio', element: <GoogleAdsPage /> },

      { path: 'services/performance-marketing', element: <Navigate to="/best-performance-marketing-agency-in-chennai-magdio" replace /> },
      { path: 'performance-marketing', element: <Navigate to="/best-performance-marketing-agency-in-chennai-magdio" replace /> },
      { path: 'best-performance-marketing-agency-in-chennai-magdio', element: <PerformanceMarketingPage /> },
      { path: 'performance-marketing-agency-in-chennai-magdio', element: <PerformanceMarketingPage /> },
      { path: 'performance-marketing-agency-chennai-magdio', element: <PerformanceMarketingPage /> },
      { path: 'performance-marketing-company-in-chennai-magdio', element: <PerformanceMarketingPage /> },
      { path: 'performance-marketing-tamilnadu-magdio', element: <PerformanceMarketingPage /> },

      { path: 'services/meta-ads', element: <Navigate to="/meta-ads-agency-in-chennai-magdio" replace /> },
      { path: 'meta-ads', element: <Navigate to="/meta-ads-agency-in-chennai-magdio" replace /> },
      { path: 'meta-ads-agency-in-chennai-magdio', element: <MetaAdsPage /> },
      { path: 'meta-ads-agency-chennai-magdio', element: <MetaAdsPage /> },
      { path: 'meta-ads-company-in-chennai-magdio', element: <MetaAdsPage /> },
      { path: 'meta-ads-tamilnadu-magdio', element: <MetaAdsPage /> },

      { path: 'services/linkedin-ads', element: <Navigate to="/linkedin-marketing-b2b-marketing-in-chennai-magdio" replace /> },
      { path: 'linkedin-ads', element: <Navigate to="/linkedin-marketing-b2b-marketing-in-chennai-magdio" replace /> },
      { path: 'linkedin-marketing-b2b-marketing-in-chennai-magdio', element: <LinkedInAdsPage /> },
      { path: 'linkedin-marketing-agency-in-chennai-magdio', element: <LinkedInAdsPage /> },
      { path: 'linkedin-ads-agency-in-chennai-magdio', element: <LinkedInAdsPage /> },
      { path: 'linkedin-ads-agency-chennai-magdio', element: <LinkedInAdsPage /> },
      { path: 'linkedin-ads-tamilnadu-magdio', element: <LinkedInAdsPage /> },

      { path: 'services/youtube-ads', element: <Navigate to="/youtube-marketing-agency-chennai-magdio" replace /> },
      { path: 'youtube-ads', element: <Navigate to="/youtube-marketing-agency-chennai-magdio" replace /> },
      { path: 'youtube-marketing-agency-chennai-magdio', element: <YouTubeAdsPage /> },
      { path: 'youtube-marketing-agency-in-chennai-magdio', element: <YouTubeAdsPage /> },
      { path: 'youtube-ads-agency-in-chennai-magdio', element: <YouTubeAdsPage /> },
      { path: 'youtube-ads-agency-chennai-magdio', element: <YouTubeAdsPage /> },
      { path: 'youtube-ads-tamilnadu-magdio', element: <YouTubeAdsPage /> },

      { path: 'services/whatsapp-marketing', element: <Navigate to="/whatsapp-marketing-services-in-chennai-magdio" replace /> },
      { path: 'whatsapp-marketing-services-in-chennai-magdio', element: <WhatsAppMarketingPage /> },
      { path: 'whatsapp-marketing-agency-in-chennai-magdio', element: <WhatsAppMarketingPage /> },
      { path: 'whatsapp-marketing-agency-chennai-magdio', element: <WhatsAppMarketingPage /> },
      { path: 'whatsapp-marketing-chennai-magdio', element: <WhatsAppMarketingPage /> },
      { path: 'whatsapp-marketing-tamilnadu-magdio', element: <WhatsAppMarketingPage /> },

      { path: 'services/marketing', element: <ServicesPage category="Marketing" /> },
      { path: 'services/development', element: <ServicesPage category="Development" /> },
      { path: 'services/branding', element: <ServicesPage category="Branding" /> },
      { path: 'services/consulting', element: <ServicesPage category="Consulting" /> },
      { path: 'services/analytics', element: <ServicesPage category="Analytics" /> },

      { 
        path: 'services/:serviceId', 
        element: <ServiceTemplate />,
        getStaticPaths: () => servicesData.map(s => s.id)
      },
      { 
        path: 'industries/:industryId', 
        element: <IndustryTemplate />,
        getStaticPaths: () => industriesData.map(i => i.id)
      },
      { path: 'mission', element: <MissionPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },

      { path: 'portfolio/haber-living-seo-growth', element: <HaberLivingCaseStudy /> },
      { path: 'portfolio/automobile-ecommerce-seo-growth', element: <AutomobileEcommerceCaseStudy /> },
      { path: 'portfolio/dreamzil-meta-ads-growth', element: <DreamzilCaseStudy /> },
      { path: 'portfolio/odoo-erp-lead-generation', element: <OdooERPCaseStudy /> },
      { path: 'portfolio/bitty-clicks-seo-case-study', element: <BittyClicksCaseStudy /> },
      { path: 'portfolio/badie-studio-seo-case-study', element: <BadieStudioCaseStudy /> },
      { path: 'portfolio/namma-markt-seo-case-study', element: <NammaMarktCaseStudy /> },
      { path: 'portfolio/sasvitha-home-finance-seo-case-study', element: <SasvithaHomeFinanceCaseStudy /> },

      { path: 'about', element: <AboutPage /> },
      { 
        path: 'blog', 
        element: <BlogPage />,
        loader: async () => {
          const blogs = await fetchBlogs();
          return { blogs };
        }
      },
      { 
        path: 'blogs', 
        element: <BlogPage />,
        loader: async () => {
          const blogs = await fetchBlogs();
          return { blogs };
        }
      },
      { 
        path: 'blog/:id', 
        element: <BlogDetailPage />,
        getStaticPaths: async () => {
          const blogs = await fetchBlogs();
          return blogs.map(b => b.slug || b.id);
        },
        loader: async ({ params }) => {
          try {
            const blog = await fetchBlogById(params.id);
            return { blog };
          } catch (e) {
            return { blog: null };
          }
        }
      },
      { 
        path: 'blogs/:id', 
        element: <BlogDetailPage />,
        getStaticPaths: async () => {
          const blogs = await fetchBlogs();
          return blogs.map(b => b.slug || b.id);
        },
        loader: async ({ params }) => {
          try {
            const blog = await fetchBlogById(params.id);
            return { blog };
          } catch (e) {
            return { blog: null };
          }
        }
      },
      { path: 'admin', element: <AdminPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ]
  }
];

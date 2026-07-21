import { lazy, Suspense } from 'react';
import HeroSection from '../components/home/HeroSection';
import SEO from '../components/SEO';

const ServicesSection = lazy(() => import('../components/home/ServicesSection'));
const IndustriesSection = lazy(() => import('../components/home/IndustriesSection'));
const WhyChooseSection = lazy(() => import('../components/home/WhyChooseSection'));
const ClientsSection = lazy(() => import('../components/home/ClientsSection'));
const ToolsSection = lazy(() => import('../components/home/ToolsSection'));
const ProcessSection = lazy(() => import('../components/home/ProcessSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const StatsSection = lazy(() => import('../components/home/StatsSection'));
const EnquirySection = lazy(() => import('../components/home/EnquirySection'));
const FAQSection = lazy(() => import('../components/home/FAQSection'));
const CTABanner = lazy(() => import('../components/home/CTABanner'));

export default function HomePage() {
  return (
    <div className="page-bg min-h-screen bg-[#03030b]">
      <SEO 
        title="Best Digital Marketing Agency in Chennai | MAGDIO" 
        description="Magdio is the best digital marketing agency in Chennai helping brands grow online with result-driven strategies.Explore our services and grow with us today." 
        canonicalUrl="https://www.magdio.com/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          "name": "Magdio",
          "url": "https://www.magdio.com/",
          "logo": "https://www.magdio.com/logo.webp",
          "description": "Premium AI-driven digital marketing and technology agency in Tamil Nadu.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tamil Nadu",
            "addressCountry": "IN"
          }
        }}
      />
      <HeroSection />
      
      <Suspense fallback={null}>
        <ServicesSection />
        <IndustriesSection />
        <WhyChooseSection />
        <ClientsSection />
        <ToolsSection />
        <ProcessSection />
        <TestimonialsSection />
        <StatsSection />
        <EnquirySection />
        <FAQSection />
        <CTABanner />
      </Suspense>
    </div>
  );
}

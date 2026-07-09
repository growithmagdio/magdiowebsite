import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import IndustriesSection from '../components/home/IndustriesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import ClientsSection from '../components/home/ClientsSection';
import ToolsSection from '../components/home/ToolsSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';
import EnquirySection from '../components/home/EnquirySection';
import FAQSection from '../components/home/FAQSection';
import CTABanner from '../components/home/CTABanner';
import SEO from '../components/SEO';

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
    </div>
  );
}

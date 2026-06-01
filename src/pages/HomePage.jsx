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
        title="MAGDIO — The AI Growth Studio | Top Digital Marketing Agency" 
        description="Boost your online presence and accelerate business growth with innovative AI-powered digital marketing strategies tailored for modern brands." 
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

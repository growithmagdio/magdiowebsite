import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

// Import newly created modular components
import ServiceHero from '../components/service/ServiceHero';
import ServiceOverview from '../components/service/ServiceOverview';
import ServiceFeatures from '../components/service/ServiceFeatures';
import ServiceBenefits from '../components/service/ServiceBenefits';
import ServiceIndustries from '../components/service/ServiceIndustries';
import ServiceProcess from '../components/service/ServiceProcess';
import ServiceTools from '../components/service/ServiceTools';
import ServiceWhyChoose from '../components/service/ServiceWhyChoose';
import FAQAccordion from '../components/FAQAccordion';
import ServiceCTA from '../components/service/ServiceCTA';
import EnquirySection from '../components/home/EnquirySection';

// High-end default FAQs for service pages
const defaultServiceFaqs = [
  {
    q: 'How do you customize this service for our specific business?',
    a: 'We begin with a thorough audit of your current digital setup, operational pathways, and competitor landscape. From there, we design custom systems and growth engines tailored to your precise commercial objectives.'
  },
  {
    q: 'What is the onboarding process and timeframe?',
    a: 'Onboarding is highly streamlined. We set up shared workspaces and kick off within 3-5 business days. Initial core integrations and foundational assets are typically deployed and optimized within the first 2-3 weeks.'
  },
  {
    q: 'How do you measure and report on service performance?',
    a: 'We establish comprehensive server-side tracking and custom client analytics dashboards. You receive real-time access to key performance metrics, accompanied by bi-weekly strategic reports and recommendations.'
  },
  {
    q: 'Can we integrate these solutions with our existing database and CRM?',
    a: 'Absolutely. Our custom software engineering enables us to build robust API integrations, linking our marketing and automation flows directly with Salesforce, HubSpot, custom SQL databases, and internal platforms.'
  }
];

export default function ServiceTemplate() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  // If service is not found, redirect to the main services catalog page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get dynamic FAQs or fall back to verified premium defaults
  const faqs = service.faqs || defaultServiceFaqs;

  return (
    <div className="page-bg min-h-screen pt-0 pb-0">
      {/* 1. Hero Banner Component */}
      <ServiceHero service={service} />

      {/* 2. Service Overview Component */}
      <ServiceOverview service={service} />

      {/* 3. Key Features Component */}
      <ServiceFeatures service={service} />

      {/* 4. Core Benefits Component */}
      <ServiceBenefits service={service} />

      {/* 5. Industries Served Component */}
      <ServiceIndustries service={service} />

      {/* 6. Process / Workflow Component */}
      <ServiceProcess service={service} />

      {/* 7. Tools & Platforms Component */}
      <ServiceTools service={service} />

      {/* 8. Why Choose MAGDIO Component */}
      <ServiceWhyChoose service={service} />

      {/* 9. Reusable Accordion FAQ Component */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-[#03030b]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-lightblue text-xs font-bold uppercase tracking-widest mb-4">
              ✦ Support FAQ
            </div>
            <h2 className="section-title mb-4">
              Frequently Asked <span className="gradient-text-blue">Questions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about our {service.title}.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* 10. Service CTA Component */}
      <ServiceCTA service={service} />

      {/* 11. Enquiry Form Section */}
      <div id="enquiry" className="relative z-10 bg-black/40">
        <EnquirySection />
      </div>
    </div>
  );
}

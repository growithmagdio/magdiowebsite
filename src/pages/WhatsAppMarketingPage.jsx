import React from 'react';
import SEO from '../components/SEO';
import ServiceTemplate from './ServiceTemplate';

export default function WhatsAppMarketingPage() {
  return (
    <>
      <SEO 
        title="WhatsApp Marketing Agency in Tamil Nadu | Magdio" 
        description="WhatsApp marketing agency in Tamil Nadu offering bulk messaging, WhatsApp automation, lead generation and broadcast marketing services." 
        canonicalUrl="https://www.magdio.com/whatsapp-marketing-tamilnadu-magdio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "WhatsApp Marketing",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Magdio"
          },
          "areaServed": "Tamil Nadu"
        }}
      />
      <ServiceTemplate serviceId="whatsapp-marketing" />
    </>
  );
}

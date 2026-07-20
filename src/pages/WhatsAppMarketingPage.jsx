import React from 'react';
import SEO from '../components/SEO';
import ServiceTemplate from './ServiceTemplate';

export default function WhatsAppMarketingPage() {
  return (
    <>
      <SEO 
        title="Bulk WhatsApp Marketing Services in Chennai | MAGDIO" 
        description="Reach Magdio, a bulk WhatsApp marketing service provider delivering promotional messages, alerts, customer updates and business communication solutions." 
        canonicalUrl="https://www.magdio.com/services/whatsapp-marketing"
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

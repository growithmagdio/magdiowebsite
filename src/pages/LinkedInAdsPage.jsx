import React from 'react';
import SEO from '../components/SEO';
import ServiceTemplate from './ServiceTemplate';

export default function LinkedInAdsPage() {
  return (
    <>
      <SEO 
        title="Linkedin B2B Marketing Agency in Chennai | MAGDIO" 
        description="Build stronger business connections with Magdio's LinkedIn marketing services in Chennai, delivering targeted campaigns, B2B leads and engagement growth." 
        canonicalUrl="https://www.magdio.com/services/linkedin-ads"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "LinkedIn Ads",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Magdio"
          },
          "areaServed": "Tamil Nadu"
        }}
      />
      <ServiceTemplate serviceId="linkedin-ads" />
    </>
  );
}

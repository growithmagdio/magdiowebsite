import React from 'react';
import SEO from '../components/SEO';
import ServiceTemplate from './ServiceTemplate';

export default function LinkedInAdsPage() {
  return (
    <>
      <SEO 
        title="LinkedIn Ads Agency in Tamil Nadu | Magdio" 
        description="LinkedIn Ads agency in Tamil Nadu offering B2B lead generation, account-based marketing, and professional LinkedIn advertising services." 
        canonicalUrl="https://www.magdio.com/linkedin-ads-tamilnadu-magdio"
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

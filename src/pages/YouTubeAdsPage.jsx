import React from 'react';
import SEO from '../components/SEO';
import ServiceTemplate from './ServiceTemplate';

export default function YouTubeAdsPage() {
  return (
    <>
      <SEO 
        title="YouTube Ads Agency in Tamil Nadu | Magdio" 
        description="YouTube Ads agency in Tamil Nadu providing YouTube marketing, video ads, brand awareness and targeted YouTube advertising campaigns." 
        canonicalUrl="https://www.magdio.com/youtube-ads-tamilnadu-magdio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "YouTube Ads",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Magdio"
          },
          "areaServed": "Tamil Nadu"
        }}
      />
      <ServiceTemplate serviceId="youtube-ads" />
    </>
  );
}

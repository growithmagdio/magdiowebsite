import React from 'react';
import SEO from '../components/SEO';
import ServiceTemplate from './ServiceTemplate';

export default function YouTubeAdsPage() {
  return (
    <>
      <SEO 
        title="Best YouTube Advertising Agency in Chennai | MAGDIO" 
        description="Build stronger online engagement with Magdio, a YouTube marketing agency in Chennai delivering creative video campaigns for leads, visibility and online growth." 
        canonicalUrl="https://www.magdio.com/services/youtube-ads"
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

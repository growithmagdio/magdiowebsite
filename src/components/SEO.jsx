import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ 
  title = "MAGDIO — The AI Growth Studio", 
  description = "Boost your online presence and accelerate your business growth with innovative AI-powered digital marketing strategies tailored for modern brands.",
  name = "Magdio",
  type = "website",
  image = "/favicon.png",
  canonicalUrl,
  noindex = false,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  jsonLd
}) {
  const location = useLocation();
  const rawPath = location.pathname.endsWith('/') && location.pathname !== '/'
    ? location.pathname.slice(0, -1)
    : location.pathname;
  const cleanCanonical = !noindex
    ? (canonicalUrl || `https://www.magdio.com${rawPath}`)
    : null;

  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const finalOgImage = ogImage || image;

  const finalTwitterTitle = twitterTitle || finalOgTitle;
  const finalTwitterDescription = twitterDescription || finalOgDescription;
  const finalTwitterImage = twitterImage || finalOgImage;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {cleanCanonical && <link rel="canonical" href={cleanCanonical} />}

      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={finalOgImage} />
      {cleanCanonical && <meta property="og:url" content={cleanCanonical} />}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={finalTwitterImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

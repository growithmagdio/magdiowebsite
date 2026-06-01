import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "MAGDIO — The AI Growth Studio", 
  description = "Boost your online presence and accelerate your business growth with innovative AI-powered digital marketing strategies tailored for modern brands.",
  name = "Magdio",
  type = "website",
  image = "/favicon.png?v=2"
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

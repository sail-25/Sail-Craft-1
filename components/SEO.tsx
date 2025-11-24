import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article' | 'organization' | 'service';
  keywords?: string[];
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  keywords = [],
  image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
}) => {
  const siteUrl = "https://sailcraftsolutions.co.ke";
  const fullTitle = `${title} | SailCraft Solutions`;
  const currentUrl = canonical ? canonical : siteUrl;

  // GEO (Generative Engine Optimization) - Structured Data
  // This tells AI models explicitly who you are and what you do.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SailCraft Solutions",
    "url": siteUrl,
    "logo": "https://sailcraftsolutions.co.ke/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254 704 201 545",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/sailcraftsolutions",
      "https://www.instagram.com/sailcraftsolutions",
      "https://www.linkedin.com/company/sailcraftsolutions"
    ],
    "description": "Kenya's leading digital growth agency specializing in Enterprise AI, Software Development, and Strategic Marketing."
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SailCraft Solutions",
    "image": image,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+254 704 201 545",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nairobi",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  const schemaToRender = type === 'organization' ? organizationSchema : serviceSchema;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={["Digital Agency Kenya", "Best AI Solutions Nairobi", "Enterprise Web Development", "Growth Strategy", ...keywords].join(", ")} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="SailCraft Solutions" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data for AI & Google Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify(schemaToRender)}
      </script>
    </Helmet>
  );
};
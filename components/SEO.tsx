import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string; // Used for Canonical URL & Breadcrumbs
  type?: 'website' | 'article' | 'organization' | 'service';
  keywords?: string[];
  image?: string;
  schema?: object; // Allow passing custom schema
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  path = "", 
  type = 'website',
  keywords = [],
  image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  schema
}) => {
  const siteUrl = "https://sailcraftsolutions.co.ke";
  const fullTitle = `${title} | SailCraft Solutions`;
  
  // Ensure path starts with slash if it exists
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const currentUrl = `${siteUrl}${path ? cleanPath : ''}`;

  // 1. Organization Schema (The Foundation for GEO)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SailCraft Solutions",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/sailcraftsolutions",
      "https://www.instagram.com/sailcraftsolutions",
      "https://www.facebook.com/sailcraftsolutions"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254 704 201 545",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    }
  };

  // 2. Breadcrumb Schema (Helps Google show: Home > Services > Item)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      ...(path ? [{
        "@type": "ListItem",
        "position": 2,
        "name": title.replace(' | SailCraft Solutions', ''),
        "item": currentUrl
      }] : [])
    ]
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={["Digital Agency Kenya", "Software Development Nairobi", "AI Solutions Kenya", "Business Growth Strategy", ...keywords].join(", ")} />
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

      {/* JSON-LD Structured Data Injection */}
      <script type="application/ld+json">
        {JSON.stringify([organizationSchema, breadcrumbSchema, schema].filter(Boolean))}
      </script>
    </Helmet>
  );
};
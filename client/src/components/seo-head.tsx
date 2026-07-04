import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schema?: any;
}

const SEOHead = ({ 
  title = "Yuva Lab Jalandhar | Medical Lab Tests Near Me | 4 Hour Reports",
  description = "#1 Medical Lab in Jalandhar since 2007. Blood tests, health checkups, home collection. 500+ tests, 4-hour reports. Contact: yuvalab24@gmail.com",
  keywords = ["medical lab jalandhar", "blood test jalandhar", "health checkup near me", "pathology lab jalandhar", "diagnostic center jalandhar", "medical test jalandhar", "lab test near me", "home collection jalandhar", "4 hour reports", "yuvalab diagnostics", "best medical lab jalandhar", "blood test near me", "CBC test jalandhar", "thyroid test jalandhar", "liver function test", "kidney function test", "diabetes test jalandhar", "vitamin d test", "hormone test jalandhar", "genetic testing jalandhar", "health package jalandhar"],
  ogImage = "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
  ogType = "website",
  canonical,
  schema
}: SEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonical || window.location.href, true);
    updateMetaTag('og:site_name', 'Yuva Lab', true);
    updateMetaTag('og:locale', 'en_IN', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Additional SEO tags
    updateMetaTag('author', 'Yuva Lab - Jaltinder');
    updateMetaTag('language', 'en');
    updateMetaTag('geo.region', 'IN-PB');
    updateMetaTag('geo.placename', 'Jalandhar, Punjab, India');
    updateMetaTag('geo.position', '31.3260;75.5762');
    updateMetaTag('ICBM', '31.3260, 75.5762');
    
    // Enhanced Local SEO tags
    updateMetaTag('geo.country', 'IN');
    updateMetaTag('geo.region', 'IN-PB');
    updateMetaTag('distribution', 'local');
    updateMetaTag('coverage', 'Jalandhar, Punjab');
    updateMetaTag('target', 'all');
    updateMetaTag('audience', 'all');
    updateMetaTag('rating', 'general');
    updateMetaTag('revisit-after', '1 days');
    updateMetaTag('expires', 'never');
    
    // Business-specific meta tags
    updateMetaTag('business:contact_data:locality', 'Jalandhar');
    updateMetaTag('business:contact_data:region', 'Punjab');
    updateMetaTag('business:contact_data:postal_code', '144022');
    updateMetaTag('business:contact_data:country_name', 'India');
    updateMetaTag('business:contact_data:phone_number', '+91-9888772209');
    updateMetaTag('business:contact_data:email', 'yuvalab24@gmail.com');
    
    // Medical-specific tags
    updateMetaTag('medical:specialty', 'Pathology, Clinical Laboratory');
    updateMetaTag('medical:services', 'Blood Tests, Health Checkups, Diagnostic Services');
    updateMetaTag('medical:location', 'Jalandhar, Punjab');
    
    // Enhanced Open Graph tags
    updateMetaTag('og:locality', 'Jalandhar', true);
    updateMetaTag('og:region', 'Punjab', true);
    updateMetaTag('og:country-name', 'India', true);
    updateMetaTag('og:postal-code', '144022', true);
    updateMetaTag('og:phone_number', '+91-9888772209', true);
    updateMetaTag('og:email', 'yuvalab24@gmail.com', true);
    
    // Mobile app tags
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('apple-mobile-web-app-title', 'Yuva Lab');
    
    // Theme colors
    updateMetaTag('theme-color', '#2563eb');
    updateMetaTag('msapplication-TileColor', '#2563eb');
    updateMetaTag('msapplication-navbutton-color', '#2563eb');
    
    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }
    
    // JSON-LD Schema
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
    
  }, [title, description, keywords, ogImage, ogType, canonical, schema]);

  return null;
};

export default SEOHead;
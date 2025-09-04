import { useEffect } from 'react';

const LocalBusinessSchema = () => {
  useEffect(() => {
    // Create comprehensive local business schema for YuvaLab Diagnostics
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "MedicalClinic", "PathologyLab"],
      "name": "Yuva Lab",
      "alternateName": ["Yuva Lab", "YuvaLab", "LARC Jatinder"],
      "description": "Leading medical diagnostics center in Jalandhar providing comprehensive laboratory testing services, blood tests, health checkups with home collection and 4-hour reports since 2007.",
      "founder": {
        "@type": "Person",
        "name": "Jaltinder",
        "jobTitle": "Founder & Director"
      },
      "foundingDate": "2007",
      "url": "https://yuvalab.in",
      "logo": "https://yuvalab.in/newlogo.jpeg",
      "image": [
        "https://yuvalab.in/newlogo.jpeg",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630"
      ],
      "telephone": ["+91-9888772209", "+91-7009090378"],
      "email": "yuvalab24@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17, Kalgidhar Avenue, White Diamond Road, Behind Govt. Sen. Sec. School, Mithapur",
        "addressLocality": "Jalandhar",
        "addressRegion": "Punjab",
        "postalCode": "144022",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.3260,
        "longitude": 75.5762
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Jalandhar",
          "sameAs": "https://en.wikipedia.org/wiki/Jalandhar"
        },
        {
          "@type": "State",
          "name": "Punjab",
          "sameAs": "https://en.wikipedia.org/wiki/Punjab,_India"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 31.3260,
          "longitude": 75.5762
        },
        "geoRadius": "50000"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification", 
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking"],
      "medicalSpecialty": [
        "Pathology",
        "Clinical Laboratory Medicine",
        "Hematology",
        "Biochemistry",
        "Microbiology",
        "Immunology",
        "Molecular Diagnostics"
      ],
      "availableService": [
        {
          "@type": "MedicalTest",
          "name": "Blood Tests",
          "description": "Comprehensive blood testing including CBC, biochemistry panels, and specialized tests"
        },
        {
          "@type": "MedicalTest", 
          "name": "Health Checkup Packages",
          "description": "Complete health screening packages for preventive healthcare"
        },
        {
          "@type": "MedicalTest",
          "name": "Hormone Tests",
          "description": "Thyroid, diabetes, and reproductive hormone testing"
        },
        {
          "@type": "MedicalTest",
          "name": "Genetic Testing",
          "description": "Advanced genetic and molecular diagnostic testing"
        },
        {
          "@type": "MedicalTest",
          "name": "Home Collection",
          "description": "Free home sample collection service across Jalandhar"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Medical Testing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Blood Test Package",
              "description": "Comprehensive blood testing with 4-hour reporting"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "500",
              "priceCurrency": "INR"
            }
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajesh Kumar"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Excellent service with accurate reports delivered on time. Home collection was very convenient."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person", 
            "name": "Priya Sharma"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Best medical lab in Jalandhar. Quick results and professional staff. Highly recommended."
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "keywords": "medical lab jalandhar, blood test jalandhar, pathology lab, diagnostic center, health checkup, home collection, 4 hour reports, yuvalab diagnostics",
      "slogan": "Your Health, Our Priority - Accurate. Fast. Reliable.",
      "knowsAbout": [
        "Blood Testing",
        "Health Checkups", 
        "Pathology",
        "Clinical Diagnostics",
        "Hormone Testing",
        "Genetic Testing",
        "Home Sample Collection",
        "Emergency Testing"
      ],
      "parentOrganization": {
        "@type": "Organization",
        "name": "Yuva Lab",
        "sameAs": "https://yuvalab.in"
      },
      "sameAs": ["https://yuvalab.in"],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9888772209",
          "contactType": "customer service",
          "availableLanguage": ["Hindi", "Punjabi", "English"],
          "areaServed": "IN",
          "hoursAvailable": "Mo-Sa 07:00-20:00, Su 08:00-18:00"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-7009090378", 
          "contactType": "emergency",
          "availableLanguage": ["Hindi", "Punjabi", "English"],
          "areaServed": "IN"
        }
      ]
    };

    // Remove existing schema if present
    const existingSchema = document.querySelector('script[data-schema="local-business"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'local-business');
    script.textContent = JSON.stringify(businessSchema);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const schemaScript = document.querySelector('script[data-schema="local-business"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, []);

  return null;
};

export default LocalBusinessSchema;
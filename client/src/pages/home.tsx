import HeroSection from "@/components/hero-section";
import KeyHighlights from "@/components/quick-booking";
import SeasonalPromotion from "@/components/seasonal-promotion";
import ServicesGrid from "@/components/services-grid";
import PackagesShowcase from "@/components/packages-showcase";
import WhyChooseUs from "@/components/why-choose-us";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import ContactInfo from "@/components/contact-info";
import SEOHead from "@/components/seo-head";
import LocalBusinessSchema from "@/components/local-business-schema";

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://yuvalab.in/#website",
        url: "https://yuvalab.in",
        name: "Yuva Lab",
        description: "Jalandhar's trusted diagnostic laboratory since 2007 – 3000+ tests, NABL-quality, home collection, 4-hour reports.",
        publisher: { "@id": "https://yuvalab.in/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: "https://yuvalab.in/tests?search={search_term_string}" },
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": ["MedicalOrganization", "DiagnosticLab", "LocalBusiness"],
        "@id": "https://yuvalab.in/#organization",
        name: "Yuva Lab",
        alternateName: "YuvaLab Diagnostics",
        url: "https://yuvalab.in",
        logo: "https://yuvalab.in/newlogo.jpeg",
        image: "https://yuvalab.in/newlogo.jpeg",
        description: "Leading diagnostic laboratory in Jalandhar offering 3000+ blood tests, health packages, and home collection since 2007.",
        foundingDate: "2007",
        telephone: "+91-9888772209",
        email: "yuvalab24@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kalgidhar Avenue, White Diamond Road, Mithapur",
          addressLocality: "Jalandhar",
          addressRegion: "Punjab",
          postalCode: "144022",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 31.3260, longitude: 75.5762 },
        hasMap: "https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab",
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "20:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "14:00" },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "850", bestRating: "5" },
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Card",
        medicalSpecialty: "Pathology",
        sameAs: [
          "https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab",
        ],
        offers: [
          { "@type": "Offer", name: "Full Body Checkup – YL 1.0", price: "999", priceCurrency: "INR", url: "https://yuvalab.in/packages" },
          { "@type": "Offer", name: "Blood Test – CBC", price: "150", priceCurrency: "INR", url: "https://yuvalab.in/tests" },
          { "@type": "Offer", name: "Thyroid Test – TSH", price: "250", priceCurrency: "INR", url: "https://yuvalab.in/tests" },
        ],
        contactPoint: [
          { "@type": "ContactPoint", telephone: "+91-9888772209", contactType: "customer service", areaServed: "IN", availableLanguage: ["Hindi", "Punjabi", "English"] },
          { "@type": "ContactPoint", telephone: "+91-9888772209", contactType: "appointment", areaServed: "Jalandhar" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diagnostic Tests & Health Packages",
          itemListElement: [
            { "@type": "OfferCatalog", name: "Blood Tests", url: "https://yuvalab.in/tests" },
            { "@type": "OfferCatalog", name: "Health Checkup Packages", url: "https://yuvalab.in/packages" },
            { "@type": "OfferCatalog", name: "Home Collection", url: "https://yuvalab.in/home-blood-collection-jalandhar" },
          ],
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://yuvalab.in/#webpage",
        url: "https://yuvalab.in",
        name: "Blood Test in Jalandhar | Home Collection | 4-Hour Reports – Yuva Lab",
        isPartOf: { "@id": "https://yuvalab.in/#website" },
        about: { "@id": "https://yuvalab.in/#organization" },
        description: "Yuva Lab – Jalandhar's most trusted diagnostic lab since 2007. Book 3000+ blood tests, full body checkups, home collection. Reports in 4 hours. Call +91-9888772209.",
        inLanguage: "en-IN",
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".hero-intro"] },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Blood Test in Jalandhar | Home Collection | 4-Hour Reports – Yuva Lab"
        description="Yuva Lab – Jalandhar's most trusted diagnostic lab since 2007. 3000+ blood tests, full body checkups, home collection. Fast 4-hour reports. Call +91-9888772209."
        keywords={["blood test jalandhar", "medical lab jalandhar", "diagnostic centre jalandhar", "pathology lab jalandhar", "home blood collection jalandhar", "health checkup jalandhar", "full body checkup jalandhar", "thyroid test jalandhar", "best medical lab jalandhar", "yuvalab diagnostics", "lab test near me", "blood test near me"]}
        canonical="https://yuvalab.in/"
        schema={schema}
      />
      <LocalBusinessSchema />
      <div className="pt-20" data-testid="home-page">
        <HeroSection />
        <KeyHighlights />
        <SeasonalPromotion />
        <PackagesShowcase />
        <ServicesGrid />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
        <ContactInfo />
      </div>
    </>
  );
};

export default Home;

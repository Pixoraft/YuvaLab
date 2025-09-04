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
    "@type": "WebPage",
    "name": "Yuva Lab - #1 Medical Lab in Jalandhar | Home Collection",
    "description": "Leading medical diagnostics center in Jalandhar since 2007. 500+ tests, 4-hour reports, free home collection. Book blood tests, health checkups online.",
    "url": "https://yuvalab.in",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "Yuva Lab"
    }
  };

  return (
    <>
      <SEOHead
        title="Yuva Lab Jalandhar | #1 Medical Lab | Blood Test | Home Collection"
        description="#1 Medical Lab in Jalandhar since 2007 by Jaltinder. 500+ blood tests, health packages, 4-hour reports, free home collection. Contact: yuvalab24@gmail.com"
        keywords={["medical lab jalandhar", "blood test jalandhar", "pathology lab near me", "diagnostic center jalandhar", "health checkup jalandhar", "home collection lab", "best medical lab jalandhar", "yuvalab diagnostics", "lab test near me", "blood test near me", "medical test jalandhar", "health package jalandhar"]}
        canonical="https://yuvalab.in/"
        schema={schema}
      />
      <LocalBusinessSchema />
      <div className="pt-20" data-testid="home-page">
      <HeroSection />
      <KeyHighlights />
      <SeasonalPromotion />
      <ServicesGrid />
      <PackagesShowcase />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <ContactInfo />
      </div>
    </>
  );
};

export default Home;

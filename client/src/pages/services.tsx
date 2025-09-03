import ServicesGrid from "@/components/services-grid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";

const Services = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Yuva Lab Services",
    "description": "Comprehensive medical diagnostic services in Jalandhar including blood tests, health checkups, hormone tests, genetic testing with home collection.",
    "url": "https://yuvalab.com/services",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Yuva Lab"
    }
  };

  return (
    <>
      <SEOHead
        title="Medical Services Jalandhar | Blood Tests | Health Checkups | Yuva Lab"
        description="Complete medical diagnostic services in Jalandhar. Blood tests, health packages, hormone tests, genetic testing. Home collection available. Book: +91-9888772209"
        keywords={["medical services jalandhar", "blood test services", "health checkup services", "diagnostic services jalandhar", "pathology services", "lab services near me", "medical testing services", "hormone test services", "genetic testing jalandhar"]}
        canonical="https://yuvalab.com/services"
        schema={schema}
      />
      <div className="pt-20" data-testid="services-page">
      <div className="bg-medical-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="services-page-title">
            Our Medical Services
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto" data-testid="services-page-subtitle">
            Comprehensive diagnostic services with state-of-the-art technology and expert analysis
          </p>
        </div>
      </div>
      
      <ServicesGrid />
      
      <div className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="services-cta-title">
            Need a Custom Test Package?
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="services-cta-subtitle">
            Contact our experts to create a personalized testing package tailored to your specific health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              data-testid="contact-experts-button"
              onClick={() => {
                const phone = "919888772209";
                const message = "Hello! I need help creating a custom test package for my specific health needs. Can you assist me?";
                const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
            >
              Contact Our Experts
            </Button>
            <Link href="/packages">
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
                data-testid="view-packages-button"
              >
                View Health Packages
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;

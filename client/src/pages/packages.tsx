import PackagesShowcase from "@/components/packages-showcase";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SEOHead from "@/components/seo-head";

const Packages = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Health Packages - Yuva Lab",
    "description": "Comprehensive health checkup packages in Jalandhar with blood tests, health screenings, and diagnostic services at affordable prices.",
    "url": "https://yuvalab.com/packages",
    "brand": {
      "@type": "Brand",
      "name": "Yuva Lab"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "MedicalBusiness",
        "name": "Yuva Lab"
      }
    }
  };

  const packageFeatures = [
    "Free home sample collection",
    "Digital report delivery",
    "Expert consultation included",
    "24/7 customer support",
    "Flexible scheduling",
    "Advanced equipment used",
  ];

  return (
    <>
      <SEOHead
        title="Health Packages Jalandhar | Complete Health Checkup | Yuva Lab"
        description="Affordable health packages in Jalandhar. Complete health checkups, blood test packages, preventive health screenings. Home collection available. Book: +91-9888772209"
        keywords={["health packages jalandhar", "health checkup packages", "complete health checkup", "blood test packages", "preventive health screening", "annual health checkup", "medical packages jalandhar", "health screening packages"]}
        canonical="https://yuvalab.com/packages"
        schema={schema}
      />
      <div className="pt-20" data-testid="packages-page">
      <div className="bg-medical-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="packages-page-title">
            Health Packages
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto" data-testid="packages-page-subtitle">
            Comprehensive health checkup packages designed for your wellness journey
          </p>
        </div>
      </div>
      
      <PackagesShowcase />
      
      <div className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="package-benefits-title">
                Why Choose Our Health Packages?
              </h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="package-benefits-description">
                Our health packages are carefully designed by medical experts to provide comprehensive health insights at affordable prices.
              </p>
              <div className="space-y-4">
                {packageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`package-feature-${index}`}>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="custom-package-title">
                Need a Custom Package?
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="custom-package-description">
                Let our medical experts create a personalized health package based on your age, lifestyle, and health concerns.
              </p>
              <Button 
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="get-custom-package-button"
              >
                Get Custom Package
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Packages;

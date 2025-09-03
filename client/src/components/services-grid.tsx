import { TestTube, FileText, Activity, Dna, AlertTriangle, Zap } from "lucide-react";
import { Link } from "wouter";

const ServicesGrid = () => {
  const services = [
    {
      id: "blood-tests",
      icon: TestTube,
      title: "Blood Tests",
      description: "Complete blood analysis including CBC, blood sugar, cholesterol, and liver function tests.",
    },
    {
      id: "health-packages",
      icon: FileText,
      title: "Health Packages",
      description: "Comprehensive health checkup packages designed for different age groups and health needs.",
    },
    {
      id: "hormone-tests",
      icon: Activity,
      title: "Hormone Profile Panel",
      description: "Comprehensive hormone testing including Estrogen, Progesterone, FSH, Testosterone/DHEA, and Thyroid hormones for complete endocrine analysis.",
    },
    {
      id: "genetic-testing",
      icon: Dna,
      title: "Genetic Testing",
      description: "Advanced genetic analysis for hereditary conditions and personalized medicine.",
    },
    {
      id: "toxicology",
      icon: AlertTriangle,
      title: "Toxicology",
      description: "Drug screening, heavy metal testing, and environmental toxin analysis.",
    },
    {
      id: "specialized-diagnostics",
      icon: Zap,
      title: "Specialized Diagnostics",
      description: "Allergy testing, autoimmune markers, and specialized pathology services.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-muted/30" data-testid="services-grid-section">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="services-title">
            Our Medical Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            Comprehensive diagnostic services with state-of-the-art technology and expert analysis
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-card rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg hover-lift border border-border hover:border-primary/50 transition-all duration-300"
                data-testid={`service-card-${service.id}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2" data-testid={`service-title-${service.id}`}>
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed" data-testid={`service-description-${service.id}`}>
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="text-primary font-semibold hover:text-primary/80 transition-colors text-sm sm:text-base"
                  data-testid={`service-learn-more-${service.id}`}
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

import { Shield, Clock, Users, Home } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      id: "accurate-results",
      icon: Shield,
      title: "Accurate Results",
      description: "State-of-the-art equipment ensuring 99.9% accuracy in all test results",
    },
    {
      id: "quick-reports",
      icon: Clock,
      title: "Quick Reports",
      description: "Fast turnaround time with reports delivered within 4 hours",
    },
    {
      id: "expert-team",
      icon: Users,
      title: "Expert Team",
      description: "Qualified pathologists and technicians with years of experience",
    },
    {
      id: "home-collection",
      icon: Home,
      title: "Home Collection",
      description: "Convenient sample collection at your doorstep with trained professionals",
    },
  ];

  return (
    <section className="py-16 bg-muted/30" data-testid="why-choose-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="why-choose-title">
            Why Choose Yuva Lab?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="why-choose-subtitle">
            Trusted by thousands for accurate, reliable, and timely medical diagnostics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="text-center" data-testid={`feature-${feature.id}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2" data-testid={`feature-title-${feature.id}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`feature-description-${feature.id}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

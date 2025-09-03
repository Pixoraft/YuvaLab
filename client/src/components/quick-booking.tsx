import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Home, Shield } from "lucide-react";
import { Link } from "wouter";

const KeyHighlights = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "500+ Tests Available",
      description: "Complete range of medical diagnostics",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "4-Hour Reports",
      description: "Quick and accurate results",
      color: "text-blue-600"
    },
    {
      icon: Home,
      title: "Free Home Collection",
      description: "Convenient sample collection at your doorstep",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Trusted Since 2007",
      description: "18+ years of reliable healthcare service",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="bg-white py-12 -mt-8 relative z-10" data-testid="key-highlights-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="highlights-title">
            Why Choose Yuva Lab?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="highlights-subtitle">
            Experience healthcare excellence with our trusted diagnostic services in Jalandhar
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow" 
                data-testid={`highlight-card-${index}`}
              >
                <div className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${highlight.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2" data-testid={`highlight-title-${index}`}>
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`highlight-description-${index}`}>
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/tests">
            <Button 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              data-testid="explore-tests-button"
            >
              Explore All Tests
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;

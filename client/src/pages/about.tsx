import { Shield, Award, Users, Clock } from "lucide-react";
import SEOHead from "@/components/seo-head";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality & Accuracy",
      description: "We maintain the highest standards of quality with 99.9% accuracy in all our test results using state-of-the-art equipment.",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Our laboratory is accredited by leading medical organizations and follows international quality standards.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team consists of qualified pathologists, technicians, and healthcare professionals with years of experience.",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "We understand the importance of quick results and ensure reports are delivered within 4 hours.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Yuva Lab Jalandhar",
    "description": "Learn about Yuva Lab, founded by Jatinder in 2007. Leading medical lab in Jalandhar with 18+ years of trusted healthcare services.",
    "url": "https://yuvalab.in/about",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "Yuva Lab",
      "foundingDate": "2007",
      "founder": {
        "@type": "Person",
        "name": "Jatinder"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="About Yuva Lab Jalandhar | Founded by Jatinder 2007 | Medical Lab History"
        description="About Yuva Lab: Founded by Jatinder in 2007, serving Jalandhar for 18+ years. Trusted medical laboratory with 99.9% accuracy, expert team, 4-hour reports."
        keywords={["about yuvalab diagnostics", "medical lab history jalandhar", "jatinder founder", "trusted medical lab", "pathology lab jalandhar history", "diagnostic center about", "medical testing experience"]}
        canonical="https://yuvalab.in/about"
        schema={schema}
      />
      <div className="pt-20" data-testid="about-page">
      <div className="bg-medical-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="about-page-title">
            About Yuva Lab
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto" data-testid="about-page-subtitle">
            Your trusted partner in healthcare diagnostics since 2007
          </p>
        </div>
      </div>
      
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="about-story-title">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p data-testid="about-story-paragraph-1">
                  Founded in 2007 by Jatinder, Yuva Lab began with a simple vision: to provide accurate, reliable, and accessible medical diagnostics to the people of Jalandhar and surrounding areas. What started as a small laboratory has grown into one of the most trusted diagnostic centers in Punjab.
                </p>
                <p data-testid="about-story-paragraph-2">
                  Over the years, we have invested heavily in cutting-edge technology and skilled professionals to ensure that our patients receive the most accurate test results possible. Our commitment to quality and patient care has made us the preferred choice for thousands of families.
                </p>
                <p data-testid="about-story-paragraph-3">
                  Today, we offer over 500 different tests and health packages, from basic blood work to advanced genetic testing, all while maintaining our core values of accuracy, reliability, and compassionate care.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <img 
                src="https://i.postimg.cc/bv7LTGZx/Untitled-design.jpg" 
                alt="Modern medical laboratory equipment and facilities" 
                className="rounded-lg w-full h-auto"
                data-testid="about-lab-image"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="about-values-title">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-values-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center" data-testid={`about-value-${index}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2" data-testid={`about-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`about-value-description-${index}`}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;

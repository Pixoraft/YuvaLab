import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const contactDetails = [
    {
      id: "address",
      icon: MapPin,
      title: "Address",
      content: (
        <>
          17, Kalgidhar Avenue, White Diamond Road<br />
          Behind Govt. Sen. Sec. School, Mithapur<br />
          Jalandhar, Punjab-144022
        </>
      ),
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone",
      content: (
        <>
          +91-9888772209<br />
          +91-7009090378
        </>
      ),
    },
    {
      id: "email",
      icon: Mail,
      title: "Email",
      content: (
        <>
          yuvalab24@gmail.com
        </>
      ),
    },
    {
      id: "hours",
      icon: Clock,
      title: "Hours",
      content: (
        <>
          Monday - Saturday: 7:00 AM - 8:00 PM (Daytime)<br />
          Sunday: 8:00 AM - 6:00 PM (Daytime)<br />
          Home Collection: Available in Jalandhar<br />
          Reports: Delivered in 4 Hours
        </>
      ),
    },
  ];

  return (
    <section className="py-16 bg-background" data-testid="contact-info-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
            Visit Our Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
            Conveniently located in the heart of Jalandhar with modern facilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactDetails.map((detail) => {
              const IconComponent = detail.icon;
              return (
                <div key={detail.id} className="flex items-start space-x-4" data-testid={`contact-detail-${detail.id}`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-1" data-testid={`contact-title-${detail.id}`}>
                      {detail.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`contact-content-${detail.id}`}>
                      {detail.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Map Section */}
          <div className="bg-card rounded-xl p-6 shadow-lg border border-border" data-testid="map-section">
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern medical facility building location in Jalandhar" 
                className="rounded-lg w-full h-full object-cover"
                data-testid="facility-image"
              />
            </div>
            <div className="mt-4 text-center">
              <Button 
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                data-testid="get-directions-button"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

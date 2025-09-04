import ContactInfo from "@/components/contact-info";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/seo-head";

const Contact = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Yuva Lab Jalandhar",
    "description": "Contact Yuva Lab for medical tests, health checkups, and home collection services in Jalandhar. Call +91-9888772209 for appointments.",
    "url": "https://yuvalab.in/contact",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "Yuva Lab",
      "telephone": ["+91-9888772209", "+91-7009090378"],
      "email": "yuvalab24@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17, Kalgidhar Avenue, White Diamond Road, Behind Govt. Sen. Sec. School, Mithapur",
        "addressLocality": "Jalandhar",
        "addressRegion": "Punjab",
        "postalCode": "144022",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Yuva Lab Jalandhar | Medical Lab | Book Tests | +91-9888772209"
        description="Contact Yuva Lab for medical tests in Jalandhar. Home collection, 4-hour reports, health packages. Email yuvalab24@gmail.com or call +91-9888772209."
        keywords={["contact yuvalab diagnostics", "medical lab contact jalandhar", "book test jalandhar", "pathology lab contact", "diagnostic center jalandhar contact", "home collection booking", "medical test appointment", "lab test booking jalandhar"]}
        canonical="https://yuvalab.in/contact"
        schema={schema}
      />
      <div className="pt-20" data-testid="contact-page">
      <div className="bg-medical-blue text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-testid="contact-page-title">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto" data-testid="contact-page-subtitle">
            Get in touch with our team for any questions or to schedule your tests
          </p>
        </div>
      </div>
      
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="contact-form-title">
                Send us a Message
              </h2>
              <form className="space-y-6" data-testid="contact-form" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const firstName = formData.get('firstName');
                const lastName = formData.get('lastName');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const subject = formData.get('subject') || 'General Inquiry';
                const message = formData.get('message');
                
                const whatsappMessage = `🏥 *Contact Form Submission*

👤 *Name:* ${firstName} ${lastName}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
📋 *Subject:* ${subject}
💬 *Message:* ${message}

Please respond to this inquiry at your earliest convenience.`;
                
                const phoneNumber = "919888772209";
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(url, '_blank');
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-muted-foreground">
                      First Name
                    </Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      placeholder="John" 
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-muted-foreground">
                      Last Name
                    </Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      placeholder="Doe" 
                      required
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="john@example.com" 
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+91-9876543210" 
                    required
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                    Subject
                  </Label>
                  <select 
                    name="subject"
                    className="w-full p-3 border border-input rounded-lg bg-background"
                    data-testid="select-subject"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="test-booking">Test Booking</option>
                    <option value="report-inquiry">Report Inquiry</option>
                    <option value="package-info">Package Information</option>
                    <option value="home-collection">Home Collection</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    Message
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="How can we help you?" 
                    rows={4}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  data-testid="submit-contact-form"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  Send via WhatsApp
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="contact-info-title">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8" data-testid="contact-info-description">
                We're here to help! Contact us through any of the following methods, and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-emergency">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone Numbers</h3>
                    <p className="text-muted-foreground">+91-9888772209 | +91-7009090378</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-business-hours">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">Mon-Sat: 7AM-8PM (Daytime)<br/>Sunday: 8AM-6PM (Daytime)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-response-time">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                    <p className="text-muted-foreground">Reports delivered within 4 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactInfo />
      </div>
    </>
  );
};

export default Contact;

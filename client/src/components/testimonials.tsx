import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: "rajesh",
      name: "Rajesh Sharma",
      age: "Age 45, Jalandhar",
      rating: 5,
      text: "Excellent service! The home collection was very convenient and the reports were delivered on time. Highly recommend Yuva Lab for accurate results.",
    },
    {
      id: "priya",
      name: "Priya Kumari",
      age: "Age 32, Jalandhar",
      rating: 5,
      text: "Professional staff and quick service. Got my health package results the next day. The detailed report helped me understand my health better.",
    },
    {
      id: "amit",
      name: "Amit Singh",
      age: "Age 38, Jalandhar",
      rating: 5,
      text: "Best lab in Jalandhar! The staff is courteous and the facility is clean and modern. I trust them with all my family's health tests.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-muted/30" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="testimonials-title">
            What Our Patients Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            Real experiences from people who trust us with their health
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg hover-lift border border-border transition-all duration-300"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center mb-4" data-testid={`testimonial-rating-${testimonial.id}`}>
                <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
              </div>
              <blockquote className="text-sm sm:text-base text-muted-foreground mb-4 italic leading-relaxed" data-testid={`testimonial-text-${testimonial.id}`}>
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm sm:text-base">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground text-sm sm:text-base" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground" data-testid={`testimonial-age-${testimonial.id}`}>
                    {testimonial.age}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

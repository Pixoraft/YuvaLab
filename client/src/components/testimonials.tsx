import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    id: "rajesh",
    name: "Rajesh Sharma",
    location: "Jalandhar",
    rating: 5,
    text: "Excellent service! The home collection was very convenient and the reports were delivered on time. Highly recommend Yuva Lab for accurate results.",
    initials: "RS",
    color: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  },
  {
    id: "priya",
    name: "Priya Kumari",
    location: "Jalandhar",
    rating: 5,
    text: "Professional staff and quick service. Got my health package results the same day. The detailed report helped me understand my health better.",
    initials: "PK",
    color: "linear-gradient(135deg, #ec4899, #be185d)",
  },
  {
    id: "amit",
    name: "Amit Singh",
    location: "Jalandhar",
    rating: 5,
    text: "Best lab in Jalandhar! The staff is courteous and the facility is clean and modern. I trust them with all my family's health tests.",
    initials: "AS",
    color: "linear-gradient(135deg, #10b981, #059669)",
  },
];

const Testimonials = () => {
  const ref = useScrollReveal();

  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f8faff 0%, #ffffff 100%)" }}
      data-testid="testimonials-section"
      ref={ref}
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1565c0, transparent)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #42a5f5, transparent)", transform: "translate(-30%, 30%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Patient Reviews
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" data-testid="testimonials-title">
            What Our{" "}
            <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Patients Say
            </span>
          </h2>
          <p className="reveal delay-200 text-lg text-gray-500 max-w-2xl mx-auto" data-testid="testimonials-subtitle">
            Real experiences from people who trust us with their health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`reveal delay-${(i + 1) * 150} group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
              data-testid={`testimonial-${t.id}`}
            >
              {/* Quote icon */}
              <div
                className="absolute -top-4 left-6 w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: t.color }}
              >
                <Quote className="w-4 h-4 text-white fill-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2" data-testid={`testimonial-rating-${t.id}`}>
                {Array.from({ length: t.rating }, (_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <blockquote
                className="text-gray-600 text-sm leading-relaxed mb-6 italic"
                data-testid={`testimonial-text-${t.id}`}
              >
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm" data-testid={`testimonial-name-${t.id}`}>
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400" data-testid={`testimonial-age-${t.id}`}>
                    {t.location}
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: t.color }}
              />
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="reveal delay-400 mt-14 flex flex-wrap items-center justify-center gap-8 py-8 border-t border-gray-100">
          {[
            { value: "10,000+", label: "Happy Patients" },
            { value: "4.9 ★", label: "Average Rating" },
            { value: "18+", label: "Years of Trust" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black" style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {value}
              </div>
              <div className="text-sm text-gray-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

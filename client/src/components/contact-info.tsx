import { MapPin, Phone, Mail, Clock, Navigation, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactDetails = [
  {
    id: "address",
    icon: MapPin,
    title: "Our Address",
    lines: ["17, Kalgidhar Avenue, White Diamond Road", "Behind Govt. Sen. Sec. School, Mithapur", "Jalandhar, Punjab - 144022"],
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    bg: "#eff6ff",
    border: "#bfdbfe",
    link: "https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab",
    linkText: "View on Map",
  },
  {
    id: "phone",
    icon: Phone,
    title: "Call Us",
    lines: ["+91-9888772209", "+91-7009090378"],
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    link: "tel:+919888772209",
    linkText: "Call Now",
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Us",
    lines: ["yuvalab24@gmail.com"],
    gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    link: "mailto:yuvalab24@gmail.com",
    linkText: "Send Email",
  },
  {
    id: "hours",
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat: 7:00 AM – 8:00 PM", "Sunday: 8:00 AM – 6:00 PM", "Home Collection: Available", "Reports: Within 4 Hours"],
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    bg: "#fffbeb",
    border: "#fde68a",
    link: null,
    linkText: null,
  },
];

const ContactInfo = () => {
  const ref = useScrollReveal();

  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #f0f7ff 100%)" }}
      data-testid="contact-info-section"
      ref={ref}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1565c0, transparent)", transform: "translate(-40%, -40%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #42a5f5, transparent)", transform: "translate(40%, 40%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Navigation className="w-4 h-4" />
            Find Us
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" data-testid="contact-title">
            Visit{" "}
            <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Our Lab
            </span>
          </h2>
          <p className="reveal delay-200 text-lg text-gray-500 max-w-2xl mx-auto" data-testid="contact-subtitle">
            Conveniently located in the heart of Jalandhar — come visit us or book a home collection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Contact Cards */}
          <div className="space-y-4">
            {contactDetails.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.id}
                  className={`reveal delay-${(i + 1) * 100} group flex gap-5 rounded-2xl p-5 border hover:border-transparent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                  style={{ background: d.bg, borderColor: d.border }}
                  data-testid={`contact-detail-${d.id}`}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md"
                    style={{ background: d.gradient }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-1.5" data-testid={`contact-title-${d.id}`}>
                      {d.title}
                    </h3>
                    <div className="space-y-0.5" data-testid={`contact-content-${d.id}`}>
                      {d.lines.map((line, li) => (
                        <p key={li} className="text-sm text-gray-500 leading-relaxed">{line}</p>
                      ))}
                    </div>
                    {d.link && d.linkText && (
                      <a
                        href={d.link}
                        target={d.link.startsWith("http") ? "_blank" : undefined}
                        rel={d.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 mt-2.5 text-xs font-bold transition-all duration-200 hover:gap-2"
                        style={{ color: "#1565c0" }}
                      >
                        {d.linkText}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Map */}
          <div className="reveal-right" data-testid="map-section">
            {/* Glow halo */}
            <div
              className="absolute -inset-2 rounded-3xl blur-xl opacity-20 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #1565c0, #42a5f5)" }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-2xl">
              {/* Map header bar */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ background: "linear-gradient(135deg, #0d3b8e, #1565c0)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Yuva Lab</div>
                    <div className="text-blue-200 text-xs">Mithapur, Jalandhar</div>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 border border-white/20"
                  data-testid="get-directions-button"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Directions
                </a>
              </div>

              {/* Map iframe */}
              <div className="w-full" style={{ height: "380px" }}>
                <iframe
                  title="Yuva Lab Location"
                  src="https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="facility-map"
                />
              </div>

              {/* Bottom info strip */}
              <div className="px-5 py-3 bg-white border-t border-blue-50 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-500 font-medium">Open Today · Mon–Sat 7 AM – 8 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

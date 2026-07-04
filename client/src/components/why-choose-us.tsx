import { Clock, Users, Home, Microscope, Zap, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    id: "accurate-results",
    icon: Microscope,
    title: "99.9% Accurate Results",
    description: "State-of-the-art automated equipment and quality controls ensure reliable, precise test results every time.",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  },
  {
    id: "quick-reports",
    icon: Zap,
    title: "4-Hour Reports",
    description: "Fast turnaround time — most reports delivered within 4 hours so you can start treatment faster.",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    id: "expert-team",
    icon: Users,
    title: "Expert Team",
    description: "Qualified pathologists and trained technicians with years of hands-on diagnostic experience.",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    id: "home-collection",
    icon: Home,
    title: "Free Home Collection",
    description: "Convenient sample collection at your doorstep anywhere in Jalandhar — no travel required.",
    gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  },
  {
    id: "trusted-lab",
    icon: Clock,
    title: "Trusted Since 2007",
    description: "Over 18 years of trusted service, helping thousands of families in Jalandhar maintain their health.",
    gradient: "linear-gradient(135deg, #ec4899, #be185d)",
  },
  {
    id: "support",
    icon: Phone,
    title: "24/7 Support",
    description: "Our team is always available to answer your questions and help you understand your test results.",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
  },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #f0f7ff 100%)" }}
      data-testid="why-choose-us-section"
      ref={ref}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1565c0, transparent)", transform: "translate(-40%, -40%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #42a5f5, transparent)", transform: "translate(40%, 40%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Our Advantages
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" data-testid="why-choose-title">
            Why Patients Choose{" "}
            <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Yuva Lab
            </span>
          </h2>
          <p className="reveal delay-200 text-lg text-gray-500 max-w-2xl mx-auto" data-testid="why-choose-subtitle">
            Trusted by thousands for accurate, reliable, and timely medical diagnostics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className={`reveal delay-${(i % 4) * 100 + 100} group flex gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                data-testid={`feature-${f.id}`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md"
                  style={{ background: f.gradient }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5" data-testid={`feature-title-${f.id}`}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed" data-testid={`feature-description-${f.id}`}>
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

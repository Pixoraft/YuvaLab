import { TestTube, FileText, Activity, Dna, AlertTriangle, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    id: "blood-tests",
    icon: TestTube,
    title: "Blood Tests in Jalandhar",
    description:
      "We provide complete blood testing services including CBC, blood sugar, lipid profile, liver function, and kidney tests. Our lab ensures accurate reports within hours, making us one of the most trusted blood test labs in Jalandhar.",
    features: ["Same-day reports", "Home collection available", "Affordable pricing"],
    gradient: "linear-gradient(135deg, #ef4444, #dc2626)",
    bg: "#fff5f5",
    border: "#fecaca",
    link: "/tests",
    altText: "Blood test lab in Jalandhar",
  },
  {
    id: "health-packages",
    icon: FileText,
    title: "Health Checkup Packages",
    description:
      "Our customized health packages are designed for preventive care and early detection of diseases. Suitable for all age groups, these packages include multiple diagnostic tests at affordable prices in Jalandhar.",
    features: ["Family & senior packages", "Preventive health focus", "Best value bundles"],
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    bg: "#eff6ff",
    border: "#bfdbfe",
    link: "/packages",
    altText: "Health checkup packages in Jalandhar Punjab",
  },
  {
    id: "hormone-tests",
    icon: Activity,
    title: "Hormone Testing Lab",
    description:
      "We offer advanced hormone profile testing including thyroid (T3, T4, TSH), testosterone, estrogen, and fertility-related diagnostics with high accuracy for patients across Jalandhar and Punjab.",
    features: ["Thyroid & fertility panels", "Fast & accurate results", "Expert analysis"],
    gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    link: "/tests",
    altText: "Hormone testing lab Jalandhar",
  },
  {
    id: "genetic-testing",
    icon: Dna,
    title: "Genetic Testing Services",
    description:
      "Our genetic testing helps identify hereditary conditions and supports personalized treatment plans using modern diagnostic techniques. A trusted centre for genetic diagnostics in Punjab.",
    features: ["Hereditary condition screening", "Personalized medicine", "Confidential reports"],
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    link: "/tests",
    altText: "Genetic testing services Mithapur Jalandhar",
  },
  {
    id: "toxicology",
    icon: AlertTriangle,
    title: "Toxicology Testing",
    description:
      "We provide drug screening and toxin analysis services for medical and legal purposes with accurate reporting. Available for individuals and organizations across Jalandhar, Punjab.",
    features: ["Drug & substance screening", "Legal-grade reporting", "Heavy metal analysis"],
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    bg: "#fffbeb",
    border: "#fde68a",
    link: "/tests",
    altText: "Toxicology testing lab Jalandhar Punjab",
  },
  {
    id: "specialized-diagnostics",
    icon: Zap,
    title: "Specialized Diagnostics",
    description:
      "Advanced testing for allergies, autoimmune disorders, and rare medical conditions with expert analysis. Our specialized diagnostic services in Jalandhar serve patients from across Punjab.",
    features: ["Allergy & autoimmune panels", "Rare condition testing", "Expert pathologists"],
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    bg: "#ecfeff",
    border: "#a5f3fc",
    link: "/tests",
    altText: "Diagnostic services Mithapur Punjab",
  },
];

const ServicesGrid = () => {
  const ref = useScrollReveal();

  return (
    <section
      className="py-16 sm:py-20 bg-white relative overflow-hidden"
      data-testid="services-grid-section"
      ref={ref}
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1565c0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <TestTube className="w-4 h-4" />
            Diagnostic Services
          </div>
          <h2
            className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
            data-testid="services-title"
          >
            Comprehensive{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1565c0, #42a5f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Diagnostic Services
            </span>{" "}
            in Jalandhar
          </h2>
          <p
            className="reveal delay-200 text-lg text-gray-500 max-w-2xl mx-auto"
            data-testid="services-subtitle"
          >
            quality-assured diagnostic services with fast turnaround, expert
            analysis, and home collection across Jalandhar &amp; Punjab.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`reveal delay-${(i % 3) * 100 + 100} group relative rounded-2xl p-6 border hover:border-transparent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col`}
                style={{ background: s.bg, borderColor: s.border }}
                data-testid={`service-card-${s.id}`}
                itemScope
                itemType="https://schema.org/MedicalTest"
              >
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 pointer-events-none"
                  style={{ background: s.gradient }}
                />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ background: s.gradient }}
                  aria-label={s.altText}
                >
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

                <h3
                  className="text-lg font-bold text-gray-900 mb-2.5"
                  data-testid={`service-title-${s.id}`}
                  itemProp="name"
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed mb-4"
                  data-testid={`service-description-${s.id}`}
                  itemProp="description"
                >
                  {s.description}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#1565c0" }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    href={s.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all duration-200"
                    style={{ color: "#1565c0" }}
                    data-testid={`service-learn-more-${s.id}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

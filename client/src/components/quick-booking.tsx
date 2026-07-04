import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Home, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const highlights = [
  {
    icon: CheckCircle,
    title: "500+ Tests Available",
    description: "Complete range of medical diagnostics under one roof",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    light: "#d1fae5",
    number: "500+",
  },
  {
    icon: Clock,
    title: "4-Hour Reports",
    description: "Fast, accurate results — so you never have to wait",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    light: "#dbeafe",
    number: "4hr",
  },
  {
    icon: Home,
    title: "Home Collection",
    description: "Trained staff collects samples at your doorstep",
    gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    light: "#ede9fe",
    number: "Free",
  },
  {
    icon: Award,
    title: "Trusted Since 2007",
    description: "18+ years of reliable healthcare in Jalandhar",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    light: "#fef3c7",
    number: "18+",
  },
];

const KeyHighlights = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-white py-16 sm:py-20 relative z-10 overflow-hidden" data-testid="key-highlights-section" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Why Thousands Trust Us
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" data-testid="highlights-title">
            Why Choose <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Yuva Lab?</span>
          </h2>
          <p className="reveal delay-200 text-lg text-gray-500 max-w-2xl mx-auto" data-testid="highlights-subtitle">
            Experience healthcare excellence with our trusted diagnostic services in Jalandhar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className={`reveal delay-${(i + 1) * 100} group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent transition-all duration-400 hover:shadow-2xl hover:-translate-y-2 shimmer-card`}
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
                data-testid={`highlight-card-${i}`}
              >
                {/* Top number accent */}
                <div
                  className="absolute top-4 right-4 text-2xl font-black opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ color: "#1565c0" }}
                >
                  {h.number}
                </div>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ background: h.gradient }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-2" data-testid={`highlight-title-${i}`}>
                  {h.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4" data-testid={`highlight-description-${i}`}>
                  {h.description}
                </p>

                {/* Animated bottom border */}
                <div
                  className="h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
                  style={{ background: h.gradient }}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/tests">
            <Button
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #1565c0, #42a5f5)" }}
              data-testid="explore-tests-button"
            >
              Explore All Tests
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;

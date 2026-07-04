import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Users, FlaskConical, Target, Clock } from "lucide-react";

const stats = [
  { id: "patients", value: "10,000+", label: "Happy Patients", icon: Users, sub: "Across Jalandhar" },
  { id: "tests", value: "500+", label: "Tests Available", icon: FlaskConical, sub: "Comprehensive range" },
  { id: "accuracy", value: "99.9%", label: "Accuracy Rate", icon: Target, sub: "Precision assured" },
  { id: "delivery", value: "4hr", label: "Report Delivery", icon: Clock, sub: "Fast turnaround" },
];

const Statistics = () => {
  const ref = useScrollReveal();

  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d3b8e 0%, #1565c0 40%, #1e88e5 70%, #42a5f5 100%)" }}
      data-testid="statistics-section"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", transform: "translate(30%, 30%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Our Numbers Speak For Us
          </h2>
          <p className="reveal delay-100 text-blue-100 text-lg">
            Consistently delivering excellence across every test, every day
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`count-animate delay-${i * 100 + 100} group text-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 sm:p-8 hover:bg-white/15 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
                data-testid={`stat-${s.id}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className="text-4xl sm:text-5xl font-black text-white mb-1"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.2)" }}
                  data-testid={`stat-value-${s.id}`}
                >
                  {s.value}
                </div>
                <div className="text-blue-100 font-semibold text-sm sm:text-base mb-1" data-testid={`stat-label-${s.id}`}>
                  {s.label}
                </div>
                <div className="text-blue-200 text-xs">{s.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

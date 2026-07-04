import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Shield, Clock, ChevronLeft, ChevronRight, Phone, Home, FlaskConical, Star } from "lucide-react";
import { Link } from "wouter";
import labStorefrontImage from "@/assets/lab-storefront.png";
import homeSampleImage from "@/assets/home-sample.png";
import innerLabImage from "@/assets/inner-lab.png";
import fastReportImage from "@/assets/fast-report.png";

const slides = [
  {
    image: labStorefrontImage,
    alt: "Yuvalab Clinical Laboratory storefront in Jalandhar",
    title: ["Yuvalab", "Clinical Laboratory"],
    subtitle: "Trusted diagnostic centre with 4-hour reporting and home sample collection in Jalandhar.",
    badge1: { text: "15+ Years Experience", color: "#10b981" },
    badge2: { text: "4 Hour Reports", color: "#f59e0b" },
  },
  {
    image: homeSampleImage,
    alt: "Free home sample collection in Jalandhar",
    title: ["Free Home", "Sample Collection"],
    subtitle: "Our trained phlebotomists visit your home for safe, hygienic sample collection across Jalandhar.",
    badge1: { text: "Free Pickup", color: "#10b981" },
    badge2: { text: "Trained Staff", color: "#8b5cf6" },
  },
  {
    image: innerLabImage,
    alt: "Inside Yuvalab — modern diagnostic equipment",
    title: ["Modern Lab,", "Trusted Results"],
    subtitle: "Fully computerised lab equipped with auto analyzers, microscopes & expert technicians.",
    badge1: { text: "Auto Analyzers", color: "#f97316" },
    badge2: { text: "Expert Team", color: "#06b6d4" },
  },
  {
    image: fastReportImage,
    alt: "Fast and accurate diagnostic reports",
    title: ["Fast, Accurate", "Reports"],
    subtitle: "Get most reports the same day in just 4 hours — clear, accurate and easy to understand.",
    badge1: { text: "4 Hour Reports", color: "#ec4899" },
    badge2: { text: "99.9% Accuracy", color: "#10b981" },
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const SLIDE_DURATION = 5500;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const startProgress = () => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const pct = Math.min(((Date.now() - start) / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100 && progressRef.current) clearInterval(progressRef.current);
    }, 30);
  };

  useEffect(() => {
    startProgress();
    const timer = setTimeout(goNext, SLIDE_DURATION);
    return () => {
      clearTimeout(timer);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current]);

  const goNext = () => {
    setDirection("next");
    setCurrent((p) => (p + 1) % slides.length);
  };

  const goPrev = () => {
    setDirection("prev");
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  };

  const goTo = (idx: number) => {
    if (idx === current) return;
    setDirection(idx > current ? "next" : "prev");
    setCurrent(idx);
  };

  const slide = slides[current];

  return (
    <>
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(3deg); }
          66% { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes heroPulseRing {
          0% { transform: scale(0.85); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.2; }
          100% { transform: scale(0.85); opacity: 0.6; }
        }
        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes heroSlideFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroImgIn {
          from { opacity: 0; transform: scale(1.04); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes heroOrb {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          25% { transform: translateY(-30px) translateX(20px) scale(1.05); }
          50% { transform: translateY(-15px) translateX(-15px) scale(0.95); }
          75% { transform: translateY(-25px) translateX(10px) scale(1.02); }
        }
        @keyframes heroDNA {
          0% { transform: rotate(0deg) scale(1); opacity: 0.12; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.18; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.12; }
        }
        @keyframes shimmerBar {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heroBadgePop {
          0% { transform: scale(0.7); opacity: 0; }
          70% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes heroCountUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-float { animation: heroFloat 6s ease-in-out infinite; }
        .hero-float-delay { animation: heroFloat 8s ease-in-out infinite 2s; }
        .hero-orb { animation: heroOrb 10s ease-in-out infinite; }
        .hero-orb-delay { animation: heroOrb 13s ease-in-out infinite 3s; }
        .hero-dna { animation: heroDNA 20s linear infinite; }
        .hero-ring { animation: heroPulseRing 3s ease-in-out infinite; }
        .hero-ring-delay { animation: heroPulseRing 3s ease-in-out infinite 1.5s; }
      `}</style>

      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{ background: "linear-gradient(135deg, #0d3b8e 0%, #1565c0 30%, #1e88e5 60%, #42a5f5 85%, #64b5f6 100%)" }}
        data-testid="hero-section"
      >
        {/* Large animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="hero-orb absolute w-[520px] h-[520px] rounded-full"
            style={{ top: "-120px", left: "-100px", background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)" }}
          />
          <div
            className="hero-orb-delay absolute w-[400px] h-[400px] rounded-full"
            style={{ bottom: "-80px", right: "-80px", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)" }}
          />
          <div
            className="absolute w-[280px] h-[280px] rounded-full hero-orb"
            style={{ top: "40%", left: "38%", background: "radial-gradient(circle, rgba(100,181,246,0.15) 0%, transparent 70%)", animationDuration: "15s" }}
          />
        </div>

        {/* DNA-inspired large spinning ring */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="hero-dna absolute rounded-full border-[3px]"
            style={{
              width: "650px", height: "650px",
              top: "-200px", right: "-180px",
              borderColor: "rgba(255,255,255,0.08)",
              borderStyle: "dashed",
            }}
          />
          <div
            className="absolute rounded-full border-[2px]"
            style={{
              width: "400px", height: "400px",
              bottom: "-120px", left: "-100px",
              borderColor: "rgba(255,255,255,0.07)",
              borderStyle: "dashed",
              animation: "heroDNA 28s linear infinite reverse",
            }}
          />
        </div>

        {/* Floating geometric particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[
            { size: 10, top: "15%", left: "8%", delay: "0s", dur: "5s" },
            { size: 6, top: "70%", left: "5%", delay: "1.5s", dur: "7s" },
            { size: 14, top: "25%", left: "55%", delay: "0.8s", dur: "6s" },
            { size: 8, top: "55%", left: "75%", delay: "2s", dur: "8s" },
            { size: 5, top: "80%", left: "60%", delay: "0.5s", dur: "5.5s" },
            { size: 12, top: "10%", left: "80%", delay: "3s", dur: "7s" },
            { size: 7, top: "45%", left: "92%", delay: "1s", dur: "6.5s" },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: p.size, height: p.size,
                top: p.top, left: p.left,
                background: "rgba(255,255,255,0.25)",
                animation: `heroFloat ${p.dur} ease-in-out infinite ${p.delay}`,
              }}
            />
          ))}
          {/* Diamonds */}
          {[
            { size: 10, top: "30%", left: "20%", delay: "1.2s" },
            { size: 8, top: "65%", left: "85%", delay: "2.5s" },
            { size: 12, top: "88%", left: "35%", delay: "0.3s" },
          ].map((d, i) => (
            <div
              key={`d${i}`}
              className="absolute"
              style={{
                width: d.size, height: d.size,
                top: d.top, left: d.left,
                background: "rgba(255,255,255,0.2)",
                transform: "rotate(45deg)",
                animation: `heroFloat 7s ease-in-out infinite ${d.delay}`,
              }}
            />
          ))}
        </div>

        {/* Pulse rings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="hero-ring absolute rounded-full border-2 border-white/10" style={{ width: 200, height: 200, top: "20%", right: "15%" }} />
          <div className="hero-ring-delay absolute rounded-full border-2 border-white/8" style={{ width: 140, height: 140, bottom: "25%", left: "12%" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-14 lg:pb-18 w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">

            {/* LEFT: Content */}
            <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7">

              {/* Top pill — slides up on mount */}
              <div
                style={{
                  animation: mounted ? "heroSlideUp 0.6s ease forwards" : "none",
                  opacity: 0,
                }}
              >
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/15 border border-white/25 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-white font-medium shadow-lg">
                  <FlaskConical className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
                  <span>Authorized Collection Centre · Jalandhar</span>
                  <span className="flex items-center gap-1 ml-0.5 sm:ml-1 bg-white/20 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-300 fill-yellow-300" />
                    4.9
                  </span>
                </div>
              </div>

              {/* Headline */}
              <div
                style={{
                  animation: mounted ? "heroSlideUp 0.6s ease 0.15s forwards" : "none",
                  opacity: 0,
                }}
              >
                <h1
                  key={`title-${current}`}
                  className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight"
                  data-testid="hero-title"
                  style={{
                    animation: "heroSlideFade 0.45s ease forwards",
                  }}
                >
                  <span className="block text-white drop-shadow-lg">{slide.title[0]}</span>
                  <span
                    className="block mt-1"
                    style={{
                      background: "linear-gradient(90deg, #fff176, #ffe57f, #ffffff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 2px 8px rgba(255,235,59,0.3))",
                    }}
                  >
                    {slide.title[1]}
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div
                style={{
                  animation: mounted ? "heroSlideUp 0.6s ease 0.3s forwards" : "none",
                  opacity: 0,
                }}
              >
                <p
                  key={`sub-${current}`}
                  className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed max-w-md"
                  data-testid="hero-subtitle"
                  style={{
                    animation: "heroSlideFade 0.45s ease forwards",
                  }}
                >
                  {slide.subtitle}
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-row flex-wrap gap-2 sm:gap-3"
                style={{
                  animation: mounted ? "heroSlideUp 0.6s ease 0.45s forwards" : "none",
                  opacity: 0,
                }}
              >
                <Link href="/tests" className="flex-1 sm:flex-initial">
                  <Button
                    className="group w-full sm:w-auto px-4 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-bold rounded-xl border-0 transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #ffffff, #e3f2fd)",
                      color: "#1565c0",
                      boxShadow: "0 6px 28px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.8)",
                    }}
                    data-testid="book-test-button"
                  >
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover:animate-pulse" />
                    Book Test
                  </Button>
                </Link>
                <Link href="/contact" className="flex-1 sm:flex-initial">
                  <Button
                    className="group w-full sm:w-auto px-4 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-bold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      color: "white",
                      border: "2px solid rgba(255,255,255,0.4)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    }}
                    data-testid="contact-button"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover:animate-pulse" />
                    Call Us
                  </Button>
                </Link>
              </div>

              {/* Trust chips */}
              <div
                className="flex flex-wrap gap-2 sm:gap-3 pt-1"
                style={{
                  animation: mounted ? "heroSlideUp 0.6s ease 0.6s forwards" : "none",
                  opacity: 0,
                }}
              >
                {[
                  { icon: Shield, label: "Authorized Lab", bg: "rgba(16,185,129,0.2)", border: "rgba(16,185,129,0.4)", text: "#6ee7b7" },
                  { icon: Home, label: "Home Collection", bg: "rgba(251,191,36,0.15)", border: "rgba(251,191,36,0.4)", text: "#fde68a" },
                  { icon: Clock, label: "4hr Reports", bg: "rgba(139,92,246,0.2)", border: "rgba(139,92,246,0.4)", text: "#c4b5fd" },
                ].map(({ icon: Icon, label, bg, border, text }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm"
                    style={{ background: bg, border: `1px solid ${border}`, color: text }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Premium Slider */}
            <div
              className="relative mt-6 lg:mt-0 order-first lg:order-last"
              data-testid="hero-slider"
              style={{
                animation: mounted ? "heroFadeIn 0.8s ease 0.2s forwards" : "none",
                opacity: 0,
              }}
            >
              {/* Glow halo behind card */}
              <div
                className="absolute -inset-3 rounded-3xl blur-2xl opacity-40"
                style={{ background: "linear-gradient(135deg, #1565c0, #42a5f5, #ffffff30)" }}
              />

              <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/25">
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-blue-900">
                  <img
                    key={`img-${current}`}
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover absolute inset-0"
                    style={{
                      animation: `heroImgIn 0.5s ease forwards`,
                    }}
                    data-testid="hero-image"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b8e]/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1565c0]/10 to-transparent" />

                  {/* Floating Badges */}
                  <div
                    key={`b1-${current}`}
                    className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-white text-[10px] sm:text-xs font-bold shadow-xl backdrop-blur-sm flex items-center gap-1 sm:gap-1.5"
                    style={{
                      background: slide.badge1.color,
                      boxShadow: `0 4px 20px ${slide.badge1.color}60`,
                      animation: "heroSlideFade 0.5s ease 0.1s both",
                    }}
                  >
                    <Star className="w-3 h-3 fill-white" />
                    {slide.badge1.text}
                  </div>

                  <div
                    key={`b2-${current}`}
                    className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-white text-[10px] sm:text-xs font-bold shadow-xl backdrop-blur-sm flex items-center gap-1 sm:gap-1.5"
                    style={{
                      background: slide.badge2.color,
                      boxShadow: `0 4px 20px ${slide.badge2.color}60`,
                      animation: "heroSlideFade 0.5s ease 0.18s both",
                    }}
                  >
                    <Clock className="w-3 h-3" />
                    {slide.badge2.text}
                  </div>

                  {/* Nav arrows */}
                  <button
                    onClick={goPrev}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white border border-white/30 transition-all duration-200 hover:scale-110 hover:border-white/60 backdrop-blur-sm"
                    style={{ background: "rgba(13,59,142,0.5)" }}
                    data-testid="slider-prev"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white border border-white/30 transition-all duration-200 hover:scale-110 hover:border-white/60 backdrop-blur-sm"
                    style={{ background: "rgba(13,59,142,0.5)" }}
                    data-testid="slider-next"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Bottom control bar */}
                <div
                  className="px-5 py-4 flex items-center justify-between gap-4"
                  style={{ background: "linear-gradient(135deg, #0d3b8e, #1565c0)" }}
                >
                  {/* Dot indicators */}
                  <div className="flex items-center gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === current ? 24 : 8,
                          height: 8,
                          background: i === current ? "#fff" : "rgba(255,255,255,0.3)",
                        }}
                        data-testid={`slider-dot-${i}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Slide count */}
                  <span className="text-xs text-blue-200 font-mono tracking-wider">
                    {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>

                  {/* Progress bar */}
                  <div className="flex-1 max-w-[90px] h-1.5 bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${progress}%`,
                        background: "linear-gradient(90deg, #64b5f6, #ffffff)",
                        transition: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div
                className="hero-float absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-blue-100 hidden sm:flex items-center gap-3"
                style={{ zIndex: 10 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1565c0, #42a5f5)" }}>
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Reports Ready</div>
                  <div className="text-sm font-bold text-gray-800">in just 4 Hours</div>
                </div>
              </div>

              {/* Floating accent card 2 */}
              <div
                className="hero-float-delay absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-blue-100 hidden sm:flex items-center gap-2"
                style={{ zIndex: 10 }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}>
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Authorized Lab</div>
                  <div className="text-xs text-gray-500">99.9% Accuracy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-14 sm:mt-16 lg:mt-20"
            style={{
              animation: mounted ? "heroSlideUp 0.7s ease 0.75s forwards" : "none",
              opacity: 0,
            }}
          >
            {[
              { icon: Activity, value: "5000+", label: "Tests Completed", gradient: "linear-gradient(135deg, #1565c0, #29b6f6)", id: "stat-tests" },
              { icon: Shield, value: "99.9%", label: "Accuracy Rate", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", id: "stat-accuracy" },
              { icon: Clock, value: "4hr", label: "Fast Reports", gradient: "linear-gradient(135deg, #f59e0b, #f97316)", id: "stat-results" },
            ].map(({ icon: Icon, value, label, gradient, id }) => (
              <div
                key={id}
                className="group flex items-center gap-4 rounded-2xl p-5 border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
                style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)" }}
                data-testid={id}
              >
                <div
                  className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ background: gradient }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow">{value}</div>
                  <div className="text-xs sm:text-sm text-blue-100 mt-0.5 font-medium">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

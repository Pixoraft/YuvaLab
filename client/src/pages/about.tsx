import SEOHead from "@/components/seo-head";
import { Link } from "wouter";
import { useRef, useEffect, useState } from "react";
import {
  Shield, Award, Users, Clock, Phone, MessageCircle, CalendarCheck,
  MapPin, CheckCircle, ArrowRight, ChevronRight, Sparkles, Microscope,
  Package, BookOpen, Star, Zap, Home, FlaskConical, Heart, Target,
  TrendingUp, Building2, ThumbsUp,
} from "lucide-react";

const STATS = [
  { icon: Building2,  value: "2007",   label: "Founded",           color: "from-blue-500 to-blue-700" },
  { icon: TrendingUp, value: "18+",    label: "Years Experience",  color: "from-orange-400 to-orange-600" },
  { icon: FlaskConical,value:"3000+",  label: "Tests Available",   color: "from-green-500 to-emerald-600" },
  { icon: Home,       value: "Free",   label: "Home Collection",   color: "from-violet-500 to-purple-700" },
  { icon: Zap,        value: "4 Hrs",  label: "Report Delivery",   color: "from-yellow-400 to-amber-600" },
  { icon: ThumbsUp,   value: "99.9%",  label: "Accuracy",          color: "from-pink-500 to-rose-600" },
];

const values = [
  {
    icon: Shield,
    title: "Accurate Blood Testing in Jalandhar",
    desc: "We ensure 99.9% accuracy using advanced diagnostic equipment and automated analyzers. Every test is double-checked for precision.",
    color: "#1565c0",
  },
  {
    icon: Award,
    title: "Certified Diagnostic Laboratory",
    desc: "Yuva Lab follows international quality standards for quality, safety, and reporting protocols trusted by thousands of families.",
    color: "#7c3aed",
  },
  {
    icon: Users,
    title: "Experienced Medical Experts",
    desc: "Our team of trained pathologists, phlebotomists, and technicians brings decades of combined experience in diagnostic excellence.",
    color: "#059669",
  },
  {
    icon: Clock,
    title: "Fast Reports & Home Collection",
    desc: "Get digital reports within 4 hours with free home sample collection across Jalandhar, Mithapur and all Punjab areas.",
    color: "#d97706",
  },
];

const trustPoints = [
  "18+ years of diagnostic excellence in Jalandhar",
  "3000+ diagnostic tests available",
  "4-hour report delivery for routine tests",
  "Advanced lab technology & automated analyzers",
  "Trusted by thousands of families since 2007",
  "Free home sample collection across Jalandhar",
  "Quality protocols",
  "Experienced pathologists & trained technicians",
];

const faqs = [
  {
    q: "Which is the best diagnostic lab in Jalandhar?",
    a: "Yuva Lab in Mithapur, Jalandhar is trusted for accurate reports, fast 4-hour delivery, and free home collection since 2007. We offer 3000+ tests at affordable prices.",
  },
  {
    q: "Do you provide home sample collection in Jalandhar?",
    a: "Yes! Free home sample collection is available across all Jalandhar areas including Mithapur, Model Town, Urban Estate, Civil Lines, GTB Nagar and more.",
  },
  {
    q: "Who founded Yuva Lab Jalandhar?",
    a: "Yuva Lab was founded by Jatinder in 2007 with a mission to provide affordable, accurate diagnostic services to the people of Jalandhar and Punjab.",
  },
  {
    q: "What is Yuva Lab's accuracy rate?",
    a: "Yuva Lab maintains 99.9% accuracy using calibrated automated analyzers, standard quality controls, and trained medical professionals.",
  },
];

const areas = [
  "Mithapur", "Model Town", "Urban Estate", "Civil Lines",
  "GTB Nagar", "Guru Nanak Nagar", "Lajpat Nagar", "Jalandhar Cantt",
  "Basti Danishmandan", "Nai Basti", "Reru Kalan", "Burlton Park",
];

const About = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Yuva Lab – Trusted Diagnostic Lab in Jalandhar",
        description: "Yuva Lab is a leading diagnostic laboratory in Jalandhar, providing accurate and reliable medical testing services since 2007.",
        url: "https://yuvalab.in/about",
        mainEntity: {
          "@type": "MedicalBusiness",
          name: "Yuva Lab",
          foundingDate: "2007",
          founder: { "@type": "Person", name: "Jatinder" },
          telephone: "+91-9888772209",
          email: "yuvalab24@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kalgidhar Avenue, Mithapur",
            addressLocality: "Jalandhar",
            addressRegion: "Punjab",
            postalCode: "144022",
            addressCountry: "IN",
          },
        },
      },
      {
        "@type": "Organization",
        name: "Yuva Lab",
        url: "https://yuvalab.in",
        foundingDate: "2007",
        founder: { "@type": "Person", name: "Jatinder" },
        telephone: "+91-9888772209",
        email: "yuvalab24@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kalgidhar Avenue, Mithapur",
          addressLocality: "Jalandhar",
          addressRegion: "Punjab",
          postalCode: "144022",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9888772209",
          contactType: "Customer Service",
          areaServed: "IN",
          availableLanguage: ["Hindi", "Punjabi", "English"],
        },
        areaServed: ["Jalandhar", "Mithapur", "Punjab"],
        description: "Leading diagnostic lab in Jalandhar since 2007 offering 3000+ tests, home collection, 4-hour reports and Trusted quality.",
        knowsAbout: ["Medical Diagnostics", "Blood Testing", "Health Checkups", "Pathology", "Clinical Laboratory"],
      },
      {
        "@type": "MedicalBusiness",
        name: "Yuva Lab",
        telephone: "+91-9888772209",
        email: "yuvalab24@gmail.com",
        url: "https://yuvalab.in/about",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kalgidhar Avenue, Mithapur",
          addressLocality: "Jalandhar",
          addressRegion: "Punjab",
          postalCode: "144022",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "20:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "08:00", closes: "18:00" },
        ],
        areaServed: ["Jalandhar", "Mithapur", "Punjab"],
        medicalSpecialty: "Pathology",
        hasMap: "https://maps.google.com/?q=Yuva+Lab+Mithapur+Jalandhar",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="About Yuva Lab | Trusted Diagnostic Lab in Jalandhar Since 2007"
        description="Yuva Lab – Jalandhar's trusted diagnostic centre since 2007. NABL-quality blood tests, health packages, 4-hour reports & free home collection. Learn our story."
        keywords={[
          "about Yuva Lab Jalandhar",
          "best diagnostic lab Jalandhar",
          "diagnostic lab Jalandhar since 2007",
          "trusted medical lab Jalandhar",
          "blood testing Jalandhar",
          "pathology lab Jalandhar",
          "Jatinder founder Yuva Lab",
          "diagnostic centre Mithapur",
          "clinical laboratory Punjab",
          "medical testing Jalandhar",
        ]}
        canonical="https://yuvalab.in/about"
        schema={schema}
      />

      <div className="pt-20" data-testid="about-page">

        {/* ══════════════ HERO ══════════════ */}
        <div className="relative text-white overflow-hidden min-h-[560px] flex items-center"
          style={{ background: "linear-gradient(135deg, #0a2463 0%, #1565c0 55%, #1a237e 100%)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blob-1 absolute -top-24 -left-20 w-96 h-96 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #60a5fa, #3b82f6)" }} />
            <div className="blob-2 absolute top-1/4 right-0 w-80 h-80 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #a78bfa, #7c3aed)" }} />
            <div className="blob-3 absolute -bottom-10 left-1/3 w-64 h-64 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #34d399, #10b981)" }} />
            <div className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10 w-full">
            <div className="hero-text-in inline-flex items-center gap-2 bg-white/10 border border-white/25 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-7 backdrop-blur-sm">
              <div className="glow-ring w-2 h-2 rounded-full bg-green-400" />
              <MapPin className="w-4 h-4" />
              Mithapur, Jalandhar · Punjab · Since 2007
            </div>

            <h1 className="hero-text-in delay-100 text-4xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight" data-testid="about-page-title">
              About Yuva Lab
              <br />
              <span style={{ background: "linear-gradient(90deg, #93c5fd, #c4b5fd, #6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Trusted Diagnostic Lab in Jalandhar
              </span>
            </h1>

            <p className="hero-text-in delay-200 text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed" data-testid="about-page-subtitle">
              Providing accurate &amp; affordable medical testing since 2007.
              <br className="hidden sm:block" />
              3000+ Tests · Free Home Collection · 4-Hour Reports · Quality Quality
            </p>

            <div className="hero-text-in delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919888772209"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-base"
                data-testid="hero-call-btn">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call Now
              </a>
              <button onClick={() => window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20know%20about%20Yuva%20Lab%20services.", "_blank")}
                className="group inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-base"
                data-testid="hero-whatsapp-btn">
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                WhatsApp Now
              </button>
              <Link href="/tests">
                <button className="group inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-base"
                  data-testid="hero-book-btn">
                  <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Book a Test
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" fillOpacity="0.05" />
              <path d="M0 60 L0 45 Q360 20 720 45 Q1080 70 1440 45 L1440 60 Z" fill="white" fillOpacity="0.08" />
            </svg>
          </div>
        </div>

        {/* ══════════════ STATS BAR ══════════════ */}
        <div ref={statsRef} className="bg-white border-b border-gray-100 shadow-sm py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label}
                    className={`stat-pop flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br ${s.color} text-white text-center`}
                    style={{ animationDelay: statsVisible ? `${i * 0.1}s` : "none", opacity: statsVisible ? undefined : 0 }}>
                    <Icon className="w-5 h-5 opacity-90" />
                    <span className="text-xl font-black leading-none">{s.value}</span>
                    <span className="text-xs font-medium opacity-80 leading-tight">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══════════════ SEO INTRO ══════════════ */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4" />
              About Yuva Lab – Trusted Diagnostic Lab in Jalandhar
            </div>
            <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Jalandhar's Most{" "}
              <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Trusted Diagnostic Centre
              </span>
            </h2>
            <p className="reveal delay-200 text-lg text-gray-600 leading-relaxed mb-8">
              Yuva Lab is a leading <strong>diagnostic laboratory in Jalandhar</strong>, providing accurate and reliable medical testing services since 2007. With advanced technology, experienced professionals, and fast reporting, we are trusted by thousands of families for <strong>blood tests, health checkups</strong>, and specialized diagnostics across Mithapur and Punjab.
            </p>
            <div className="reveal delay-300 flex flex-wrap justify-center gap-3">
              <Link href="/services">
                <button className="group inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
                  Explore diagnostic services in Jalandhar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/packages">
                <button className="group inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
                  View health checkup packages
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════ OUR JOURNEY ══════════════ */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="reveal inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                  <Target className="w-4 h-4" />
                  Our Journey in Healthcare Diagnostics
                </div>
                <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight" data-testid="about-story-title">
                  Our Journey in{" "}
                  <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Healthcare Diagnostics
                  </span>
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p className="reveal delay-200 text-base" data-testid="about-story-paragraph-1">
                    <strong>Yuva Lab was founded in 2007 by Jatinder</strong> with a mission to deliver accurate and affordable <strong>diagnostic services in Jalandhar</strong>. Starting as a small laboratory in Mithapur, we have grown into a trusted name in Punjab, offering <strong>3000+ tests and health packages</strong> with modern technology and expert analysis.
                  </p>
                  <p className="reveal delay-300 text-base" data-testid="about-story-paragraph-2">
                    Over the years, we have invested in cutting-edge automated analyzers and skilled professionals to ensure the most accurate <strong>blood testing services across Punjab</strong>. Our commitment to quality and patient care has made us the preferred choice for thousands of families in Jalandhar.
                  </p>
                  <p className="reveal delay-400 text-base" data-testid="about-story-paragraph-3">
                    Today, Yuva Lab offers over 3000 different tests and health packages — from basic blood work to advanced specialized panels — all while maintaining our core values of accuracy, fast reporting, and compassionate care.
                  </p>
                </div>

                {/* Timeline */}
                <div className="reveal delay-400 mt-8 space-y-4">
                  {[
                    { year: "2007", event: "Founded by Jatinder in Mithapur, Jalandhar" },
                    { year: "2012", event: "Expanded to 500+ diagnostic tests" },
                    { year: "2018", event: "Launched free home collection service" },
                    { year: "2024", event: "Now offering 3000+ tests with 4-hour reports" },
                  ].map((item, i) => (
                    <div key={item.year} className="flex items-start gap-4">
                      <div className="shrink-0 w-16 h-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white text-xs font-black">{item.year}</div>
                      <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 flex-1">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{item.event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal delay-100">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100">
                  <img
                    src="https://i.postimg.cc/bv7LTGZx/Untitled-design.jpg"
                    alt="Yuva Lab diagnostic laboratory in Jalandhar – modern medical equipment"
                    className="w-full h-auto"
                    loading="lazy"
                    data-testid="about-lab-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-black text-gray-900 text-sm">Yuva Lab, Jalandhar</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3 text-blue-600" /> Kalgidhar Avenue, Mithapur 144022</div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════ WHY TRUSTED ══════════════ */}
        <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="reveal inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Heart className="w-4 h-4" />
                Why Yuva Lab is Trusted in Jalandhar
              </div>
              <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold mb-4">
                Why Yuva Lab is Trusted in Jalandhar
              </h2>
              <p className="reveal delay-200 text-blue-200 text-lg max-w-2xl mx-auto">
                For 18+ years, families across Jalandhar and Punjab have trusted us for accurate diagnostics, fast reports and exceptional care.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {trustPoints.map((point, i) => (
                <div key={point}
                  className="reveal flex items-start gap-3 bg-white/10 border border-white/15 rounded-2xl px-5 py-4 hover:bg-white/15 transition-colors"
                  style={{ animationDelay: `${i * 0.07}s` }}>
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="font-medium text-white text-sm leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════ VALUES ══════════════ */}
        <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="reveal inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" />
                Our Core Values
              </div>
              <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" data-testid="about-values-title">
                The Principles Behind Our{" "}
                <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Diagnostic Excellence
                </span>
              </h2>
              <p className="reveal delay-200 text-gray-500 text-lg max-w-2xl mx-auto" data-testid="about-values-subtitle">
                Everything we do at Yuva Lab is guided by accuracy, speed, trust and compassionate care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={v.title}
                    className="reveal group bg-white rounded-2xl border-2 border-gray-100 p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-blue-200"
                    style={{ animationDelay: `${i * 0.1}s` }}
                    data-testid={`about-value-${i}`}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                      style={{ background: `${v.color}18` }}>
                      <Icon className="w-7 h-7" style={{ color: v.color }} />
                    </div>
                    <h3 className="text-base font-extrabold text-gray-900 mb-3 leading-snug" data-testid={`about-value-title-${i}`}>
                      {v.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed" data-testid={`about-value-description-${i}`}>
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══════════════ SERVING AREAS ══════════════ */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="reveal inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                  <MapPin className="w-4 h-4" />
                  Serving Jalandhar &amp; Nearby Areas
                </div>
                <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                  Serving Jalandhar &amp;{" "}
                  <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Nearby Areas
                  </span>
                </h2>
                <p className="reveal delay-200 text-gray-600 leading-relaxed mb-7 text-base">
                  We proudly serve Mithapur, Jalandhar, and nearby areas with reliable <strong>diagnostic services in Jalandhar</strong>, including free home sample collection and fast report delivery across all Punjab localities.
                </p>
                <div className="reveal delay-300 flex flex-wrap gap-2 mb-8">
                  {areas.map(area => (
                    <span key={area}
                      className="inline-flex items-center gap-1 bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1.5 rounded-xl text-sm font-semibold">
                      <MapPin className="w-3 h-3" />
                      {area}
                    </span>
                  ))}
                </div>
                <div className="reveal delay-400 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all hover:scale-105 text-sm"
                      data-testid="areas-contact-btn">
                      <CalendarCheck className="w-4 h-4" />
                      Book Home Collection
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <a href="tel:+919888772209"
                    className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-6 py-3.5 rounded-2xl transition-all text-sm">
                    <Phone className="w-4 h-4" />
                    +91-9888772209
                  </a>
                </div>
              </div>

              {/* Google Maps */}
              <div className="reveal delay-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100">
                <iframe
                  src="https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Yuva Lab location – Kalgidhar Avenue, Mithapur, Jalandhar"
                  aria-label="Google Maps showing Yuva Lab location in Jalandhar"
                  data-testid="about-google-maps"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════ INTERNAL LINKS ══════════════ */}
        <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-y border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-7">
              <h2 className="reveal text-xl font-extrabold text-gray-900">Explore More at Yuva Lab Jalandhar</h2>
            </div>
            <div className="reveal delay-100 flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <button className="group inline-flex items-center gap-2 bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-bold px-5 py-3 rounded-2xl shadow-sm transition-all hover:scale-105 text-sm">
                  <Sparkles className="w-4 h-4" />
                  Explore diagnostic services in Jalandhar
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/tests">
                <button className="group inline-flex items-center gap-2 bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-bold px-5 py-3 rounded-2xl shadow-sm transition-all hover:scale-105 text-sm">
                  <Microscope className="w-4 h-4" />
                  Book blood tests in Jalandhar
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/packages">
                <button className="group inline-flex items-center gap-2 bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-bold px-5 py-3 rounded-2xl shadow-sm transition-all hover:scale-105 text-sm">
                  <Package className="w-4 h-4" />
                  View health packages
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/blog">
                <button className="group inline-flex items-center gap-2 bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-bold px-5 py-3 rounded-2xl shadow-sm transition-all hover:scale-105 text-sm">
                  <BookOpen className="w-4 h-4" />
                  Read health blog
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════ FAQ ══════════════ */}
        <div className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="reveal inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <Sparkles className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                About Yuva Lab — FAQs
              </h2>
              <p className="reveal delay-200 text-gray-500 text-lg">
                Everything you need to know about Yuva Lab, Jalandhar's trusted diagnostic centre.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q}
                  className="reveal border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${i * 0.08}s` }}>
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-white transition-all duration-300"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    data-testid={`faq-about-${i}`}>
                    <span className="font-semibold text-gray-900 text-base">{f.q}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? "bg-blue-600 rotate-180" : "bg-gray-100"}`}>
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${openFaq === i ? "text-white rotate-90" : "text-gray-500"}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-white border-t border-blue-100 text-gray-600 text-sm leading-relaxed">
                      {f.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════ FINAL CTA ══════════════ */}
        <div className="relative py-24 text-white overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a2463 0%, #1565c0 55%, #7c3aed 100%)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blob-1 absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #818cf8, #6366f1)" }} />
            <div className="blob-2 absolute bottom-0 -left-16 w-64 h-64 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #34d399, #10b981)" }} />
            <div className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-blue-100 px-5 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <CalendarCheck className="w-4 h-4" />
              Book Your Diagnostic Test Today
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-5 leading-tight">
              Book Your Diagnostic Test Today
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Looking for a trusted <strong className="text-white">diagnostic lab in Jalandhar</strong>? Yuva Lab provides fast, accurate, and affordable testing services with free home collection since 2007.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/tests">
                <button className="group inline-flex items-center justify-center gap-3 bg-white text-blue-700 font-black px-10 py-5 rounded-2xl text-lg shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                  data-testid="final-book-btn">
                  <Microscope className="w-6 h-6 group-hover:rotate-6 transition-transform" />
                  Book Now
                </button>
              </Link>
              <a href="tel:+919888772209"
                className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/60 text-white font-black px-10 py-5 rounded-2xl text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                data-testid="final-call-btn">
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                Call Now
              </a>
              <button onClick={() => window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test%20at%20Yuva%20Lab%20Jalandhar.", "_blank")}
                className="group inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black px-10 py-5 rounded-2xl text-lg shadow-2xl transition-all duration-300 hover:scale-105"
                data-testid="final-whatsapp-btn">
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                WhatsApp Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;

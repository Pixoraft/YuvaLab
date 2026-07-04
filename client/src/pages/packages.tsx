import PackagesShowcase from "@/components/packages-showcase";
import SEOHead from "@/components/seo-head";
import { Link } from "wouter";
import { useRef, useEffect, useState } from "react";
import {
  Phone, MessageCircle, CalendarCheck, MapPin, CheckCircle,
  FlaskConical, Clock, Home, Shield, Award, Star, Zap, Sparkles,
  ArrowRight, ChevronDown, ChevronUp, Package, Users, Microscope,
} from "lucide-react";

const STATS = [
  { icon: FlaskConical, value: "20–60+", label: "Tests Per Package",  color: "from-blue-500 to-blue-700" },
  { icon: Zap,          value: "4 Hrs",  label: "Fast Reports",       color: "from-orange-400 to-orange-600" },
  { icon: Home,         value: "Free",   label: "Home Collection",     color: "from-green-500 to-emerald-600" },
  { icon: Shield,       value: "High",   label: "Standard Quality",    color: "from-violet-500 to-purple-700" },
  { icon: Star,         value: "2007",   label: "Trusted Since",       color: "from-yellow-400 to-amber-600" },
  { icon: Award,        value: "61%",    label: "Avg. Discount",       color: "from-pink-500 to-rose-600" },
];

const whyChoose = [
  { icon: FlaskConical, label: "20–60+ tests in one package" },
  { icon: Clock,        label: "Same-day & 4-hour reports" },
  { icon: Home,         label: "Free home sample collection" },
  { icon: Shield,       label: "Quality-assured testing" },
  { icon: Star,         label: "Trusted diagnostic lab since 2007" },
  { icon: Award,        label: "Affordable pricing, maximum savings" },
  { icon: Microscope,   label: "Expert lab technicians" },
  { icon: Users,        label: "Packages for men, women & families" },
];

const faqs = [
  {
    q: "Which is the best health checkup package in Jalandhar?",
    a: "Yuva Lab offers the most comprehensive and affordable health checkup packages in Jalandhar. Our Full Body Advance MAP99 (Male & Female) and YL Packages are most popular, covering 20–60+ diagnostic tests at highly discounted prices.",
  },
  {
    q: "Do health packages include home collection in Jalandhar?",
    a: "Yes! All Yuva Lab health packages include free home sample collection across Jalandhar and Mithapur. Simply book via WhatsApp or call +91-9888772209.",
  },
  {
    q: "How fast are health package reports delivered?",
    a: "Most packages deliver reports within 4 hours (same day). Specialized packages like full body checkups may take 24 hours.",
  },
  {
    q: "Are your health packages suitable for all age groups?",
    a: "Yes, we have packages designed for all age groups including basic packages (YL 1.0 starting ₹1000), advanced packages (₹5500), and fever panels (from ₹299).",
  },
  {
    q: "What is the difference between male and female full body packages?",
    a: "The Full Body Advance MAP99 Female includes CA 125 (ovarian cancer marker), while the Male package includes PSA Total (prostate cancer marker). Both include 20+ comprehensive tests.",
  },
  {
    q: "How do I book a health package in Jalandhar?",
    a: "You can book by calling +91-9888772209, WhatsApp, or clicking 'Book Now' on any package. Home collection will be arranged at your convenience.",
  },
];

const FAQItem = ({ q, a, i }: { q: string; a: string; i: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      style={{ animationDelay: `${i * 0.08}s` }}>
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-white transition-all duration-300"
        onClick={() => setOpen(!open)}
        data-testid={`faq-pkg-${i}`}
      >
        <span className="font-semibold text-gray-900 text-base">{q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-blue-600 rotate-180" : "bg-gray-100"}`}>
          <ChevronDown className={`w-4 h-4 transition-colors ${open ? "text-white" : "text-gray-500"}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-white border-t border-blue-100 text-gray-600 text-sm leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  const [statsVisible, setStatsVisible] = useState(false);
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
        "@type": "MedicalBusiness",
        name: "Yuva Lab",
        url: "https://yuvalab.in/packages",
        telephone: "+91-9888772209",
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
      },
      {
        "@type": "ItemList",
        name: "Health Checkup Packages at Yuva Lab Jalandhar",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Monsoon Fever Panel – Jalandhar", url: "https://yuvalab.in/packages" },
          { "@type": "ListItem", position: 2, name: "Fever Panel Advanced – Jalandhar", url: "https://yuvalab.in/packages" },
          { "@type": "ListItem", position: 3, name: "YL Health Packages – Jalandhar", url: "https://yuvalab.in/packages" },
          { "@type": "ListItem", position: 4, name: "Full Body Advance Female – Jalandhar", url: "https://yuvalab.in/packages" },
          { "@type": "ListItem", position: 5, name: "Full Body Advance Male – Jalandhar", url: "https://yuvalab.in/packages" },
        ],
      },
      {
        "@type": "Product",
        name: "Full Body Advance Health Checkup Package Jalandhar",
        description: "Comprehensive full body health checkup package with 20+ tests including thyroid, liver, kidney, vitamins and cancer markers. Available for men and women in Jalandhar.",
        brand: { "@type": "Brand", name: "Yuva Lab" },
        category: "Health Checkup Package",
        offers: {
          "@type": "Offer",
          price: "5500",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          seller: { "@type": "MedicalBusiness", name: "Yuva Lab" },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
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
        title="Health Checkup Packages in Jalandhar | Full Body Test from ₹999 – Yuva Lab"
        description="Book full body health checkup packages in Jalandhar from ₹999. 20–60+ tests including thyroid, diabetes, liver, kidney & cancer markers. Free home collection."
        keywords={[
          "health checkup packages Jalandhar",
          "full body checkup Jalandhar",
          "health packages near Mithapur",
          "preventive health checkup Punjab",
          "full body test Jalandhar",
          "affordable health packages Jalandhar",
          "blood test packages Jalandhar",
          "fever panel Jalandhar",
          "YL health package",
          "MAP99 full body checkup",
        ]}
        canonical="https://yuvalab.in/packages"
        schema={schema}
      />

      <div className="pt-20" data-testid="packages-page">

        {/* ══════════════ HERO ══════════════ */}
        <div className="relative text-white overflow-hidden min-h-[560px] flex items-center"
          style={{ background: "linear-gradient(135deg, #0a2463 0%, #1565c0 50%, #1a237e 100%)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blob-1 absolute -top-24 -left-20 w-96 h-96 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #60a5fa, #3b82f6)" }} />
            <div className="blob-2 absolute top-1/4 right-0 w-80 h-80 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #a78bfa, #7c3aed)" }} />
            <div className="blob-3 absolute -bottom-10 left-1/3 w-64 h-64 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #34d399, #10b981)" }} />
            <div className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10 w-full">
            <div className="hero-text-in inline-flex items-center gap-2 bg-white/10 border border-white/25 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-7 backdrop-blur-sm">
              <div className="glow-ring w-2 h-2 rounded-full bg-green-400" />
              <MapPin className="w-4 h-4" />
              Mithapur, Jalandhar · Punjab · Since 2007
            </div>

            <h1 className="hero-text-in delay-100 text-4xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight" data-testid="packages-page-title">
              Health Checkup Packages
              <br />
              <span style={{ background: "linear-gradient(90deg, #93c5fd, #c4b5fd, #6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                in Jalandhar
              </span>
            </h1>

            <p className="hero-text-in delay-200 text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed" data-testid="packages-page-subtitle">
              Affordable full body health checkups with 20–60+ tests.
              <br className="hidden sm:block" />
              Free home collection · Fast reports 
            </p>

            <div className="hero-text-in delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919888772209" data-testid="hero-call-btn"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-base">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call Now
              </a>
              <button onClick={() => window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20health%20package%20at%20Yuva%20Lab%20Jalandhar.", "_blank")}
                className="group inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-base"
                data-testid="hero-whatsapp-btn">
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                WhatsApp Now
              </button>
              <button onClick={() => { document.getElementById("packages-grid")?.scrollIntoView({ behavior: "smooth" }); }}
                className="group inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-base"
                data-testid="hero-view-btn">
                <Package className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Packages
              </button>
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
              Health Checkup Packages in Jalandhar
            </div>
            <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Comprehensive{" "}
              <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Preventive Health
              </span>{" "}
              Packages
            </h2>
            <p className="reveal delay-200 text-lg text-gray-600 leading-relaxed mb-8">
              Yuva Lab offers comprehensive <strong>health checkup packages in Jalandhar</strong> designed for preventive care and early disease detection. From <strong>full body checkups</strong> to specialised packages for men and women, our diagnostic services ensure accurate results, <strong>home sample collection near Mithapur</strong>, and fast reporting across Punjab.
            </p>
            <div className="reveal delay-300 flex flex-wrap justify-center gap-3">
              <Link href="/tests">
                <button className="group inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
                  View all diagnostic tests in Jalandhar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button className="group inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
                  Explore blood test services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="group inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
                  Book diagnostic test
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════ PACKAGES GRID ══════════════ */}
        <div id="packages-grid">
          <PackagesShowcase />
        </div>

        {/* ══════════════ WHY CHOOSE ══════════════ */}
        <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="reveal inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold mb-4">
                Why Choose Yuva Lab Health Packages?
              </h2>
              <p className="reveal delay-200 text-blue-200 text-lg max-w-2xl mx-auto">
                Jalandhar's most trusted diagnostic centre for preventive health checkups since 2007.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyChoose.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.label}
                    className="reveal flex items-start gap-4 bg-white/10 border border-white/15 rounded-2xl px-5 py-5 hover:bg-white/15 transition-colors"
                    style={{ animationDelay: `${i * 0.07}s` }}>
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white leading-snug text-sm">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══════════════ FAQ ══════════════ */}
        <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="reveal inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <Sparkles className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Got Questions?
              </h2>
              <p className="reveal delay-200 text-gray-500 text-lg">
                Everything you need to know about health packages at Yuva Lab, Jalandhar.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} i={i} />)}
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
              Book Your Health Package Today
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-5 leading-tight">
              Preventive Health Checkup
              <br />
              <span style={{ background: "linear-gradient(90deg, #93c5fd, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                in Jalandhar
              </span>
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Free home collection across Jalandhar &amp; Mithapur, Punjab.
              Reports in 4 hours. Trusted quality. Starting at just ₹299.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button onClick={() => window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20health%20package%20at%20Yuva%20Lab%2C%20Jalandhar.", "_blank")}
                className="group inline-flex items-center justify-center gap-3 bg-white text-blue-700 font-black px-10 py-5 rounded-2xl text-lg shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                data-testid="final-book-btn">
                <CalendarCheck className="w-6 h-6 group-hover:rotate-6 transition-transform" />
                Book Now
              </button>
              <a href="tel:+919888772209"
                className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/60 text-white font-black px-10 py-5 rounded-2xl text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                data-testid="final-call-btn">
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                Call Now
              </a>
              <button onClick={() => window.open("https://wa.me/919888772209?text=Hello%20Yuva%20Lab!%20I%20want%20to%20know%20about%20health%20packages.", "_blank")}
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

export default Packages;

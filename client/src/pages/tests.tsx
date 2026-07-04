import { useState, useMemo, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search, FileText, Clock, Home, Star, ChevronDown, Phone, MessageCircle,
  CalendarCheck, MapPin, FlaskConical, ArrowRight, ChevronUp, Filter, X,
  Sparkles, Zap, Shield, Award, Droplets, HeartPulse, Activity, Thermometer,
  Microscope, ClipboardList, Pill, Droplet, TestTube, Layers, Dna, Waves, Syringe,
  type LucideIcon,
} from "lucide-react";
import SEOHead from "@/components/seo-head";
import { testsData, getPopularTests } from "@/data/tests-data";
import { Link } from "wouter";
import { makeSlug } from "@/lib/slug";

const CATEGORY_META: Record<string, { icon: LucideIcon; color: string; grad: string }> = {
  "Blood Tests":         { icon: Droplets,      color: "#ef4444", grad: "from-red-500 to-rose-600" },
  "Cardiac Tests":       { icon: HeartPulse,    color: "#f43f5e", grad: "from-pink-500 to-rose-500" },
  "Diabetes":            { icon: Activity,      color: "#f59e0b", grad: "from-amber-500 to-orange-500" },
  "Fever Panel":         { icon: Thermometer,   color: "#f97316", grad: "from-orange-500 to-red-500" },
  "General Tests":       { icon: Microscope,    color: "#3b82f6", grad: "from-blue-500 to-blue-600" },
  "Hormone Tests":       { icon: FlaskConical,  color: "#8b5cf6", grad: "from-violet-500 to-purple-600" },
  "Investigation Tests": { icon: ClipboardList, color: "#6366f1", grad: "from-indigo-500 to-violet-500" },
  "Iron Studies":        { icon: Pill,          color: "#14b8a6", grad: "from-teal-500 to-cyan-500" },
  "Kidney Tests":        { icon: Droplet,       color: "#06b6d4", grad: "from-cyan-500 to-blue-500" },
  "Lipid Profile":       { icon: TestTube,      color: "#10b981", grad: "from-emerald-500 to-green-500" },
  "Liver Tests":         { icon: Layers,        color: "#84cc16", grad: "from-lime-500 to-green-500" },
  "Specialized Tests":   { icon: Dna,           color: "#ec4899", grad: "from-pink-500 to-fuchsia-600" },
  "Thyroid Tests":       { icon: Waves,         color: "#a855f7", grad: "from-purple-500 to-violet-600" },
  "Vitamin Tests":       { icon: Syringe,       color: "#22c55e", grad: "from-green-500 to-emerald-500" },
};

const STATS = [
  { icon: FlaskConical, value: "3000+", label: "Diagnostic Tests", color: "from-blue-500 to-blue-700" },
  { icon: Zap,          value: "4 Hrs",  label: "Fast Reports",    color: "from-orange-400 to-orange-600" },
  { icon: Home,         value: "100%",   label: "Home Collection", color: "from-green-500 to-emerald-600" },
  { icon: Shield,       value: "High",   label: "Standard Quality",color: "from-violet-500 to-purple-700" },
  { icon: Star,         value: "2007",   label: "Trusted Since",   color: "from-yellow-400 to-amber-600" },
  { icon: Award,        value: "500+",   label: "Happy Patients",  color: "from-pink-500 to-rose-600" },
];

const faqs = [
  { q: "How many diagnostic tests does Yuva Lab offer in Jalandhar?", a: "Yuva Lab offers 3000+ diagnostic tests including blood tests, liver function, kidney, thyroid, hormone panels, genetic testing, and more." },
  { q: "Do you provide home sample collection in Jalandhar?", a: "Yes! We offer home sample collection across Jalandhar and Mithapur. Book via WhatsApp or call +91-9888772209." },
  { q: "How fast are diagnostic reports delivered?", a: "Most blood and routine tests are delivered within 4 hours. Some specialised tests may take 1–2 days." },
  { q: "Which blood tests are most popular at Yuva Lab?", a: "CBC, thyroid profile, liver function (LFT), kidney function (KFT), blood sugar, lipid profile, and vitamin D tests are our most booked." },
  { q: "What is the cost of a blood test in Jalandhar?", a: "Test prices start from ₹150 and vary by test type. We offer affordable diagnostic services with Trusted quality." },
];

const FAQItem = ({ q, a, i }: { q: string; a: string; i: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="reveal border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      style={{ animationDelay: `${i * 0.08}s` }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-white transition-all duration-300"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 text-base">{q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-blue-600 rotate-180" : "bg-gray-100"}`}>
          <ChevronDown className={`w-4 h-4 transition-colors ${open ? "text-white" : "text-gray-500"}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-white border-t border-blue-100 text-gray-600 text-sm leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
};

const Tests = () => {
  const [searchTerm, setSearchTerm]         = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showPopularOnly, setShowPopularOnly]   = useState(true);
  const [visibleTests, setVisibleTests]         = useState(20);
  const [statsVisible, setStatsVisible]         = useState(false);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const allTests     = testsData;
  const popularTests = getPopularTests();
  const categories   = useMemo(() => ["All", ...Array.from(new Set(allTests.map((t) => t.category))).sort()], [allTests]);
  const baseList     = showPopularOnly ? popularTests : allTests;

  const filteredTests = useMemo(() => {
    let list = baseList;
    if (selectedCategory !== "All") list = list.filter((t) => t.category === selectedCategory);
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter((t) => t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q) || t.code.toLowerCase().includes(q));
    }
    return list;
  }, [searchTerm, baseList, selectedCategory]);

  const displayedTests = filteredTests.slice(0, visibleTests);
  const hasMore        = filteredTests.length > visibleTests;

  useMemo(() => { setVisibleTests(20); }, [searchTerm, showPopularOnly, selectedCategory]);

  const handleBookTest = (name: string, price: number) => {
    const msg = `Hello! I would like to book ${name} (₹${price}) at Yuva Lab, Jalandhar. Please confirm availability and home collection.`;
    window.open(`https://wa.me/919888772209?text=${encodeURIComponent(msg)}`, "_blank");
    (window as any).gtag?.("event", "book_test_click", { event_category: "CTA", event_label: name });
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        name: "Yuva Lab",
        url: "https://yuvalab.in/tests",
        telephone: "+91-9888772209",
        address: { "@type": "PostalAddress", streetAddress: "Kalgidhar Avenue, Mithapur", addressLocality: "Jalandhar", addressRegion: "Punjab", postalCode: "144022", addressCountry: "IN" },
        areaServed: ["Jalandhar", "Mithapur", "Punjab"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yuvalab.in" },
          { "@type": "ListItem", position: 2, name: "Tests", item: "https://yuvalab.in/tests" },
        ],
      },
      {
        "@type": "ItemList",
        name: "Diagnostic Tests at Yuva Lab Jalandhar",
        numberOfItems: allTests.length,
        itemListElement: popularTests.slice(0, 20).map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.name,
          url: `https://yuvalab.in/test/${makeSlug(t.name)}-in-jalandhar`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Blood Tests in Jalandhar | 3000+ Tests | Prices & Home Collection – Yuva Lab"
        description="Book any of 3000+ blood tests in Jalandhar at Yuva Lab – CBC, LFT, KFT, thyroid, diabetes, vitamins & more. Affordable prices, free home collection, 4-hour reports."
        keywords={["blood test Jalandhar", "diagnostic tests Jalandhar", "pathology lab Mithapur", "CBC test Jalandhar", "thyroid test Jalandhar", "liver function test Jalandhar", "home collection blood test Jalandhar", "3000 tests lab Jalandhar"]}
        canonical="https://yuvalab.in/tests"
        schema={schema}
      />

      <div className="pt-20" data-testid="tests-page">

        {/* ═══════════════════ HERO ═══════════════════ */}
        <div className="relative text-white overflow-hidden min-h-[580px] flex items-center"
          style={{ background: "linear-gradient(135deg, #0a2463 0%, #1565c0 50%, #0d47a1 100%)" }}>

          {/* Animated blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blob-1 absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #60a5fa, #3b82f6)" }} />
            <div className="blob-2 absolute top-1/4 right-0 w-80 h-80 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #818cf8, #6366f1)" }} />
            <div className="blob-3 absolute bottom-0 left-1/3 w-64 h-64 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #34d399, #10b981)" }} />
            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10 w-full">
            {/* Badge */}
            <div className="hero-text-in inline-flex items-center gap-2 bg-white/10 border border-white/25 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-7 backdrop-blur-sm">
              <div className="glow-ring w-2 h-2 rounded-full bg-green-400" />
              <MapPin className="w-4 h-4" />
              Mithapur, Jalandhar · Punjab · Since 2007
            </div>

            {/* H1 */}
            <h1 className="hero-text-in delay-100 text-4xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight" data-testid="tests-page-title">
              All Blood Tests in
              <br />
              <span className="relative inline-block">
                <span style={{ background: "linear-gradient(90deg, #93c5fd, #c4b5fd, #6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Jalandhar
                </span>
              </span>
            </h1>

            <p className="hero-text-in delay-200 text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed" data-testid="tests-page-subtitle">
              3000+ diagnostic tests — blood, thyroid, liver, kidney, hormone &amp; more.
              <br className="hidden sm:block" />
              Home collection · Reports in 4 hours 
            </p>

            {/* CTA Buttons */}
            <div className="hero-text-in delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919888772209" data-testid="hero-call-btn"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-base">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call Now
              </a>
              <button onClick={() => { window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20blood%20test%20at%20Yuva%20Lab.", "_blank"); }} data-testid="hero-whatsapp-btn"
                className="group inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-base">
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                WhatsApp Now
              </button>
              <button onClick={() => { window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test%20at%20Yuva%20Lab%20Jalandhar.", "_blank"); }} data-testid="hero-book-btn"
                className="group inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-base">
                <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Now
              </button>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" fillOpacity="0.05" />
              <path d="M0 60 L0 45 Q360 20 720 45 Q1080 70 1440 45 L1440 60 Z" fill="white" fillOpacity="0.08" />
            </svg>
          </div>
        </div>

        {/* ═══════════════════ STATS BAR ═══════════════════ */}
        <div ref={statsRef} className="bg-white border-b border-gray-100 shadow-sm py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label}
                    className={`stat-pop flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br ${s.color} text-white text-center`}
                    style={{ animationDelay: statsVisible ? `${i * 0.1}s` : "none", opacity: statsVisible ? undefined : 0 }}
                    data-testid={`stat-${s.label.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5 opacity-90" />
                    <span className="text-xl font-black leading-none">{s.value}</span>
                    <span className="text-xs font-medium opacity-80 leading-tight text-center">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══════════════════ SEO INTRO ═══════════════════ */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4" />
              Diagnostic Tests in Jalandhar
            </div>
            <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Trusted{" "}
              <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Blood Test Lab
              </span>{" "}
              in Jalandhar
            </h2>
            <p className="reveal delay-200 text-lg text-gray-600 leading-relaxed mb-8">
              Yuva Lab is Jalandhar's most trusted <strong>blood test lab</strong>, offering 3000+ diagnostic tests at our{" "}
              <strong>pathology lab near Mithapur</strong>. From routine CBC blood tests to advanced thyroid, hormone, genetic, and specialised tests — we provide accurate results with quality-assured processes and home collection across Jalandhar and Punjab.
            </p>
            <div className="reveal delay-300 flex flex-wrap justify-center gap-3">
              {[
                { href: "/services", label: "View diagnostic services in Jalandhar" },
                { href: "/packages", label: "Check health packages" },
                { href: "/contact", label: "Book diagnostic test" },
              ].map((l) => (
                <Link key={l.href} href={l.href}>
                  <button className="group inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
                    {l.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════ STICKY SEARCH + FILTER ═══════════════════ */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">

            {/* Search row */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <div className="relative flex-1 max-w-2xl search-focus-ring">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center pointer-events-none z-10">
                  <Search className="w-4 h-4 text-white" />
                </div>
                <Input
                  type="text"
                  placeholder="Search CBC, thyroid, liver, kidney, vitamin D..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-16 pr-10 py-3 text-base border-2 border-gray-200 focus:border-blue-500 rounded-2xl bg-gray-50 focus:bg-white transition-all duration-300 shadow-inner"
                  data-testid="search-tests-input"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors"
                    data-testid="clear-search">
                    <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                )}
              </div>
              <div className="hidden sm:flex gap-2">
                <button onClick={() => setShowPopularOnly(true)}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-2xl text-sm font-bold border-2 transition-all duration-300 ${
                    showPopularOnly
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                      : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
                  data-testid="toggle-popular">
                  <Star className="w-4 h-4" />
                  Popular ({popularTests.length})
                </button>
                <button onClick={() => setShowPopularOnly(false)}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-2xl text-sm font-bold border-2 transition-all duration-300 ${
                    !showPopularOnly
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                      : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                  }`}
                  data-testid="toggle-all-tests">
                  <FlaskConical className="w-4 h-4" />
                  All ({allTests.length})
                </button>
              </div>
            </div>

            {/* Category pills */}
            <div className="hidden sm:flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((cat) => {
                const meta = CATEGORY_META[cat];
                const active = selectedCategory === cat;
                const activeBg = meta
                  ? `linear-gradient(135deg, ${meta.color}, ${meta.color}dd)`
                  : "linear-gradient(135deg, #1565c0, #1e88e5)";
                const activeBorder = meta ? meta.color : "#1565c0";
                return (
                  <button key={cat} onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border-2 transition-all duration-200 ${
                      active
                        ? "text-white border-transparent shadow-md scale-105"
                        : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-700 hover:scale-105"
                    }`}
                    style={active ? { background: activeBg, borderColor: activeBorder } : {}}
                    data-testid={`category-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {cat !== "All" && meta && <meta.icon className="w-3.5 h-3.5 shrink-0" />}
                    {cat === "All" && <Filter className="w-3.5 h-3.5" />}
                    {cat}
                  </button>
                );
              })}
            </div>

            {(searchTerm || selectedCategory !== "All") && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-500">
                  <strong className="text-gray-900 font-bold">{filteredTests.length}</strong> tests found
                  {searchTerm && <> · "<span className="text-blue-600 font-semibold">{searchTerm}</span>"</>}
                  {selectedCategory !== "All" && <> · <span className="text-blue-600 font-semibold">{selectedCategory}</span></>}
                </span>
                <button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                  className="inline-flex items-center gap-1 text-red-500 hover:text-red-700 font-semibold hover:underline transition-colors"
                  data-testid="clear-all-filters">
                  <X className="w-3.5 h-3.5" />
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ═══════════════════ TESTS LIST ═══════════════════ */}
        <div className="py-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {filteredTests.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-10 h-10 text-blue-300" />
                </div>
                <p className="text-gray-500 text-xl font-semibold mb-2">No tests found</p>
                <p className="text-gray-400 text-sm mb-6">Try a different keyword or category</p>
                <button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                  data-testid="no-results-clear">
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                {/* Desktop table header */}
                <div className="hidden lg:grid lg:grid-cols-[2.5fr_1.1fr_0.9fr_0.9fr_1fr_1.2fr] gap-4 px-6 py-3.5 mb-2 rounded-2xl font-bold text-xs uppercase tracking-widest text-white"
                  style={{ background: "linear-gradient(135deg, #0d47a1, #1565c0, #1e88e5)" }}>
                  <div className="flex items-center gap-2"><FlaskConical className="w-3.5 h-3.5" /> Test Name</div>
                  <div>Category</div>
                  <div className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> Sample</div>
                  <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Report</div>
                  <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> Price</div>
                  <div>Action</div>
                </div>

                {/* Test cards */}
                <div className="space-y-2.5">
                  {displayedTests.map((test, i) => {
                    const slug  = `${makeSlug(test.name)}-in-jalandhar`;
                    const meta  = CATEGORY_META[test.category];
                    const delay = Math.min(i % 10, 7) * 0.05;
                    return (
                      <div key={test.id}
                        className="relative test-card-premium card-enter bg-white rounded-2xl border border-gray-100 shadow-sm lg:grid lg:grid-cols-[2.5fr_1.1fr_0.9fr_0.9fr_1fr_1.2fr] gap-4 px-5 py-4 group"
                        style={{ animationDelay: `${delay}s` }}
                        data-testid={`test-row-${test.id}`}
                      >
                        {/* Colored left accent */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                          style={{ background: meta?.color ?? "#3b82f6" }} />

                        {/* Name */}
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="hidden lg:flex shrink-0 w-9 h-9 rounded-xl items-center justify-center"
                            style={{ background: `${meta?.color ?? "#3b82f6"}18` }}>
                            {meta ? <meta.icon className="w-5 h-5" style={{ color: meta.color }} /> : <FlaskConical className="w-5 h-5 text-blue-500" />}
                          </div>
                          <div className="min-w-0 flex-1">
                            <Link href={`/test/${slug}`}
                              className="font-bold text-gray-900 hover:text-blue-700 transition-colors text-sm lg:text-base leading-snug block truncate"
                              data-testid={`test-name-${test.id}`}>
                              {test.name}
                            </Link>
                            {/* Mobile badges */}
                            <div className="lg:hidden flex flex-wrap gap-1.5 mt-2">
                              <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg text-white"
                                style={{ background: meta?.color ?? "#3b82f6" }}>
                                {meta ? <meta.icon className="w-3 h-3" /> : <FlaskConical className="w-3 h-3" />}
                                {test.category}
                              </span>
                              <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600">
                                <FileText className="w-3 h-3" /> {test.sampleType}
                              </span>
                              <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700">
                                <Clock className="w-3 h-3" /> {test.reportTime}
                              </span>
                              {test.homeCollection && (
                                <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-green-50 text-green-700">
                                  <Home className="w-3 h-3" /> Home
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Category */}
                        <div className="hidden lg:flex items-center">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl text-white"
                            style={{ background: meta ? `linear-gradient(135deg, ${meta.color}, ${meta.color}cc)` : "#3b82f6" }}>
                            {meta ? <meta.icon className="w-3.5 h-3.5 shrink-0" /> : <FlaskConical className="w-3.5 h-3.5" />}
                            {test.category}
                          </span>
                        </div>

                        {/* Sample */}
                        <div className="hidden lg:flex items-center text-sm text-gray-500 gap-1.5">
                          <FileText className="w-4 h-4 text-gray-300 shrink-0" />
                          {test.sampleType}
                        </div>

                        {/* Report */}
                        <div className="hidden lg:flex items-center text-sm gap-1.5">
                          <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                          <span className="text-gray-700 font-medium">{test.reportTime}</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2 mt-3 lg:mt-0">
                          <span className="text-lg font-black text-blue-700">₹{test.price}</span>
                          {test.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">₹{test.originalPrice}</span>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 mt-3 lg:mt-0">
                          <button
                            type="button"
                            onClick={() => handleBookTest(test.name, test.price)}
                            className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer select-none"
                            data-testid={`book-test-${test.id}`}>
                            <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
                            Book
                          </button>
                          <Link href={`/test/${slug}`}>
                            <span
                              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-colors"
                              data-testid={`test-details-${test.id}`}
                              title="View test details">
                              <ArrowRight className="w-4 h-4 text-gray-500" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Load More */}
                {hasMore && (
                  <div className="mt-10 text-center">
                    <button onClick={() => setVisibleTests((v) => v + 20)}
                      className="group inline-flex items-center gap-3 bg-white border-2 border-blue-200 hover:border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-xl hover:shadow-blue-100"
                      data-testid="load-more-tests">
                      <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
                      Load More Tests
                      <span className="bg-blue-100 group-hover:bg-white/20 text-blue-700 group-hover:text-white text-xs font-bold px-2.5 py-1 rounded-lg transition-colors">
                        {filteredTests.length - visibleTests} left
                      </span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* ═══════════════════ INTERNAL LINKS ═══════════════════ */}
        <div className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-5">Explore More at Yuva Lab</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/services", label: "View more blood tests in Jalandhar" },
                { href: "/packages",  label: "Check health packages" },
                { href: "/contact",   label: "Book diagnostic test" },
              ].map((l) => (
                <Link key={l.href} href={l.href}>
                  <button className="group inline-flex items-center gap-2 border-2 border-blue-100 hover:border-blue-500 text-gray-600 hover:text-blue-600 font-semibold px-5 py-3 rounded-xl transition-all duration-300 text-sm hover:bg-blue-50">
                    {l.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════ FAQ ═══════════════════ */}
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
                Everything you need to know about diagnostic tests at Yuva Lab, Jalandhar.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} i={i} />)}
            </div>
          </div>
        </div>

        {/* ═══════════════════ FINAL CTA ═══════════════════ */}
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
              Book Your Test Today in Jalandhar
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-5 leading-tight">
              Fast · Reliable · Affordable
              <br />
              <span style={{ background: "linear-gradient(90deg, #93c5fd, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Diagnostic Services
              </span>
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Home collection available across Jalandhar &amp; Mithapur, Punjab.
              Reports in 4 hours. Trusted diagnostic quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button onClick={() => { window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20blood%20test%20at%20Yuva%20Lab%2C%20Jalandhar.", "_blank"); }}
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
              <button onClick={() => window.open("https://wa.me/919888772209?text=Hello%20Yuva%20Lab!", "_blank")}
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

export default Tests;

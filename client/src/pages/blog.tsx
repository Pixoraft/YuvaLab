import { Calendar, User, ChevronRight, BookOpen, Clock, MapPin, ArrowRight, Phone, MessageCircle, CalendarCheck, Sparkles, Tag, Filter, Zap, Home, Award, Shield, Star } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { blogPosts, getCategories, getPostsByCategory, categoryMeta } from "@/data/blog-posts";
import SEOHead from "@/components/seo-head";

const STATS = [
  { icon: BookOpen, value: "9+",    label: "Health Guides",      color: "from-blue-500 to-blue-700" },
  { icon: Zap,       value: "4 Hrs", label: "Fast Reports",      color: "from-orange-400 to-orange-600" },
  { icon: Home,      value: "Free",  label: "Home Collection",   color: "from-green-500 to-emerald-600" },
  { icon: Shield,    value: "High",  label: "Quality Standard",  color: "from-violet-500 to-purple-700" },
  { icon: Star,      value: "2007",  label: "Trusted Since",     color: "from-yellow-400 to-amber-600" },
  { icon: Award,     value: "3000+", label: "Tests Available",   color: "from-pink-500 to-rose-600" },
];

const CATEGORY_SECTIONS = [
  { heading: "Lab Test Guides in Jalandhar", cats: ["Lab Tests", "Cardiac Health", "Endocrinology"] },
  { heading: "Health Checkup & Packages Insights", cats: ["Health Packages"] },
  { heading: "Disease & Preventive Care Tips", cats: ["Diabetes Care"] },
  { heading: "Local Services & Home Collection", cats: ["Services", "Local Services", "Local SEO"] },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const categories = getCategories();
  const displayedPosts = getPostsByCategory(selectedCategory);
  const featuredPosts = (
    displayedPosts.find(p => p.featured)
      ? [displayedPosts.find(p => p.featured)!]
      : displayedPosts.slice(0, 1)
  );
  const featuredId = featuredPosts[0]?.id;
  const gridPosts = displayedPosts.filter(p => p.id !== featuredId);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Yuva Lab Health Blog – Jalandhar",
        description: "Expert health insights on blood tests, thyroid, diabetes and preventive care in Jalandhar by Yuva Lab.",
        url: "https://yuvalab.in/blog",
        publisher: {
          "@type": "Organization",
          name: "Yuva Lab",
          logo: { "@type": "ImageObject", url: "https://yuvalab.in/logo.png" },
        },
      },
      {
        "@type": "MedicalBusiness",
        name: "Yuva Lab",
        telephone: "+91-9888772209",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kalgidhar Avenue, Mithapur",
          addressLocality: "Jalandhar",
          addressRegion: "Punjab",
          postalCode: "144022",
          addressCountry: "IN",
        },
        areaServed: ["Jalandhar", "Mithapur", "Punjab"],
      },
      {
        "@type": "ItemList",
        name: "Health Blog Posts – Yuva Lab Jalandhar",
        itemListElement: blogPosts.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.title,
          url: `https://yuvalab.in/blog/${p.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Where can I get a blood test in Jalandhar?", acceptedAnswer: { "@type": "Answer", text: "Yuva Lab in Mithapur, Jalandhar provides fast and accurate blood testing with home collection and 4-hour reports." } },
          { "@type": "Question", name: "Does Yuva Lab provide home sample collection in Jalandhar?", acceptedAnswer: { "@type": "Answer", text: "Yes, free home sample collection is available across all areas of Jalandhar including Mithapur, Model Town, Urban Estate and more." } },
          { "@type": "Question", name: "What is the price of health packages in Jalandhar?", acceptedAnswer: { "@type": "Answer", text: "Health packages at Yuva Lab start from ₹1,000 (YL 1.0) to ₹5,500 (Full Body MAP99). All packages include free home collection." } },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Health Blog in Jalandhar | Blood Tests, Thyroid, Diabetes Tips – Yuva Lab"
        description="Read expert health blogs on blood tests, thyroid, diabetes, and full body checkups in Jalandhar. Get prices, guides & latest medical insights from Yuva Lab."
        keywords={[
          "health blog Jalandhar",
          "blood test guide Jalandhar",
          "thyroid test price Jalandhar",
          "diabetes test Jalandhar",
          "CBC test normal range",
          "full body checkup guide",
          "lab test near me Jalandhar",
          "medical insights Punjab",
          "diagnostic lab blog",
          "preventive health tips Jalandhar",
        ]}
        canonical="https://yuvalab.in/blog"
        schema={schema}
      />

      <div className="pt-20" data-testid="blog-page">

        {/* ══════════════ HERO ══════════════ */}
        <div className="relative text-white overflow-hidden min-h-[520px] flex items-center"
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

            <h1 className="hero-text-in delay-100 text-4xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight" data-testid="blog-page-title">
              Health Blog &amp; Medical
              <br />
              <span style={{ background: "linear-gradient(90deg, #93c5fd, #c4b5fd, #6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Insights in Jalandhar
              </span>
            </h1>

            <p className="hero-text-in delay-200 text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed" data-testid="blog-page-subtitle">
              Expert guides on blood tests, thyroid, diabetes &amp; preventive care.
              <br className="hidden sm:block" />
              Prices · Normal Ranges · Home Collection · Fast Reports
            </p>

            <div className="hero-text-in delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919888772209"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-base"
                data-testid="hero-call-btn">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call Now
              </a>
              <button onClick={() => window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test%20at%20Yuva%20Lab%20Jalandhar.", "_blank")}
                className="group inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-base"
                data-testid="hero-whatsapp-btn">
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                WhatsApp Now
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
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4" />
              Health Blog &amp; Medical Insights in Jalandhar
            </div>
            <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Expert Medical Guides &amp;{" "}
              <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Local Health Insights
              </span>
            </h2>
            <p className="reveal delay-200 text-lg text-gray-600 leading-relaxed mb-6">
              Yuva Lab's health blog provides expert insights on <strong>blood tests</strong>, thyroid, diabetes, heart health, and preventive care in Jalandhar. Stay updated with accurate medical information, testing guides with <strong>prices and normal ranges</strong>, and tips to maintain your health with trusted diagnostics near Mithapur, Punjab.
            </p>
            <div className="reveal delay-300 flex flex-wrap justify-center gap-3">
              <Link href="/tests">
                <button className="group inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
                  Explore all diagnostic tests in Jalandhar
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

        {/* ══════════════ FEATURED POST ══════════════ */}
        {featuredPosts.length > 0 && (
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="relative rounded-3xl overflow-hidden border-2 border-blue-100 shadow-2xl bg-gradient-to-br from-blue-50 to-white" data-testid={`featured-post-${post.id}`}>
                  <div className="absolute top-5 left-5 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
                      <Star className="w-3.5 h-3.5" />
                      Featured Article
                    </span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto min-h-[280px]">
                      <img
                        src={post.image}
                        alt={`${post.title} – Yuva Lab Jalandhar`}
                        className="w-full h-full object-cover"
                        loading="eager"
                        data-testid={`featured-post-image-${post.id}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:to-black/10" />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-gray-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1 text-gray-400 text-xs">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4 leading-tight" data-testid={`featured-post-title-${post.id}`}>
                        {post.title}
                      </h2>
                      <p className="text-gray-500 mb-6 leading-relaxed" data-testid={`featured-post-excerpt-${post.id}`}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                          {post.author.split(" ")[1]?.[0] ?? post.author[0]}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                          <div className="text-xs text-gray-400">Yuva Lab Medical Team</div>
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          data-testid={`featured-post-read-more-${post.id}`}>
                          Read Full Guide
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════ CATEGORY FILTER PILLS ══════════════ */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide" data-testid="blog-categories">
              <Filter className="w-4 h-4 text-gray-400 shrink-0" />
              {categories.map((cat) => {
                const meta = categoryMeta[cat];
                const active = selectedCategory === cat;
                return (
                  <button key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border-2 transition-all duration-300 ${
                      active
                        ? "text-white shadow-lg scale-105"
                        : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                    }`}
                    style={active ? { background: meta?.color ?? "#1565c0", borderColor: meta?.color ?? "#1565c0" } : {}}
                    data-testid={`category-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}>
                    {cat !== "All" && meta?.icon && <meta.icon className="w-3.5 h-3.5" />}
                    {cat === "All" && <Filter className="w-3.5 h-3.5" />}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══════════════ CATEGORY SECTION HEADINGS ══════════════ */}
        {selectedCategory === "All" && (
          <div className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CATEGORY_SECTIONS.map((sec, i) => (
                  <div key={sec.heading}
                    className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
                    style={{ animationDelay: `${i * 0.1}s` }}>
                    <h2 className="text-base font-extrabold text-gray-900 mb-2 leading-tight">{sec.heading}</h2>
                    <div className="flex flex-wrap gap-1.5">
                      {sec.cats.map(cat => {
                        const meta = categoryMeta[cat];
                        return (
                          <button key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                            style={{ background: meta?.color ?? "#1565c0" }}>
                            {meta?.icon && <meta.icon className="w-3.5 h-3.5" />} {cat}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ══════════════ BLOG CARDS GRID ══════════════ */}
        <div className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedCategory !== "All" && categoryMeta[selectedCategory] && (
              <div className="reveal mb-10 p-6 rounded-2xl text-white"
                style={{ background: `linear-gradient(135deg, ${categoryMeta[selectedCategory].color}, ${categoryMeta[selectedCategory].color}cc)` }}>
                <div className="flex items-center gap-3 mb-2">
                  {(() => { const Icon = categoryMeta[selectedCategory].icon; return <Icon className="w-8 h-8" />; })()}
                  <h2 className="text-2xl font-extrabold">{selectedCategory}</h2>
                </div>
                <p className="text-white/90 leading-relaxed">{categoryMeta[selectedCategory].desc}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {(gridPosts).map((post, idx) => {
                const meta = categoryMeta[post.category];
                return (
                  <div key={post.id}
                    className="card-enter group relative flex flex-col rounded-2xl border-2 border-gray-100 overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:border-blue-200"
                    style={{ animationDelay: `${idx * 0.07}s` }}
                    data-testid={`blog-post-${post.id}`}>
                    {/* Top colour accent */}
                    <div className="h-1.5 w-full" style={{ background: meta?.color ?? "#1565c0" }} />

                    {/* Category badge */}
                    <div className="absolute top-5 left-3 z-10">
                      <span className="inline-flex items-center gap-1 text-white text-xs font-bold px-2.5 py-1 rounded-xl shadow-md"
                        style={{ background: meta?.color ?? "#1565c0" }}>
                        {meta?.icon && <meta.icon className="w-3.5 h-3.5" />} {post.category}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={post.image}
                        alt={`${post.title} – Yuva Lab Jalandhar`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        data-testid={`blog-post-image-${post.id}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Body */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> Jalandhar
                        </span>
                      </div>

                      <h3 className="font-extrabold text-gray-900 text-base leading-snug mb-3 group-hover:text-blue-700 transition-colors line-clamp-2"
                        data-testid={`blog-post-title-${post.id}`}>
                        {post.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1"
                        data-testid={`blog-post-excerpt-${post.id}`}>
                        {post.excerpt}
                      </p>

                      {/* Author row */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                            style={{ background: meta?.color ?? "#1565c0" }}>
                            {post.author.split(" ")[1]?.[0] ?? post.author[0]}
                          </div>
                          <span className="text-xs text-gray-500 font-medium">{post.author}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <button className="group/btn inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                            data-testid={`blog-post-read-more-${post.id}`}>
                            Read More
                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {(gridPosts).length === 0 && (
              <div className="text-center py-20 text-gray-400">
                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-xl font-semibold">No articles in this category yet</p>
              </div>
            )}
          </div>
        </div>

        {/* ══════════════ TRUST BAR ══════════════ */}
        <div className="py-12 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="reveal text-2xl sm:text-3xl font-extrabold mb-2">
                  Trusted Diagnostic Lab in Jalandhar Since 2007
                </h2>
                <div className="reveal delay-100 flex flex-wrap gap-5 text-blue-100 text-sm mt-3">
                  {[
                    "✔ Trusted since 2007",
                    "✔ 4-hour reports",
                    "✔ Free home collection",
                    "✔ Quality-assured testing",
                    "✔ 3000+ tests available",
                  ].map(t => <span key={t} className="font-medium">{t}</span>)}
                </div>
              </div>
              <div className="reveal flex flex-col sm:flex-row gap-4 shrink-0">
                <button onClick={() => window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test%20at%20Yuva%20Lab.", "_blank")}
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-7 py-4 rounded-2xl shadow-xl hover:bg-blue-50 transition-all hover:scale-105"
                  data-testid="trust-book-btn">
                  <CalendarCheck className="w-5 h-5" />
                  Book Test Now
                </button>
                <a href="tel:+919888772209"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-bold px-7 py-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
                  data-testid="trust-call-btn">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════ FAQ ══════════════ */}
        <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="reveal inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h2 className="reveal delay-100 text-3xl font-extrabold text-gray-900">Health Testing FAQs</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Where can I get a blood test in Jalandhar?", a: "Yuva Lab in Mithapur, Jalandhar provides fast and accurate blood testing with free home collection and 4-hour reports. Call +91-9888772209 to book." },
                { q: "Does Yuva Lab provide home sample collection in Jalandhar?", a: "Yes! Free home sample collection is available across all areas of Jalandhar including Mithapur, Model Town, Urban Estate, Civil Lines and more." },
                { q: "What are the prices for diagnostic tests in Jalandhar?", a: "Basic tests start from ₹150 (FBS). CBC is ₹200–₹350. Full body health packages start from ₹1,000 at Yuva Lab Jalandhar." },
                { q: "How long does it take to get test results at Yuva Lab?", a: "Most routine tests are ready within 4 hours. Full body packages take 24 hours. Reports are delivered digitally to WhatsApp or email." },
              ].map((f, i) => (
                <details key={f.q}
                  className="reveal group border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden"
                  style={{ animationDelay: `${i * 0.08}s` }}>
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:bg-blue-50 transition-colors"
                    data-testid={`faq-blog-${i}`}>
                    {f.q}
                    <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed border-t border-blue-100 bg-gradient-to-r from-blue-50 to-white">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════ FINAL CTA ══════════════ */}
        <div className="relative py-20 text-white overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a2463 0%, #1565c0 55%, #7c3aed 100%)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blob-1 absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #818cf8, #6366f1)" }} />
            <div className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Ready to Book a{" "}
              <span style={{ background: "linear-gradient(90deg, #93c5fd, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Diagnostic Test in Jalandhar?
              </span>
            </h2>
            <p className="text-blue-100 text-lg mb-10">
              Free home collection · 4-hour reports · Prices from ₹150 · Trusted quality
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/tests">
                <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-black px-8 py-4 rounded-2xl shadow-2xl hover:bg-blue-50 transition-all hover:scale-105 text-base"
                  data-testid="final-tests-btn">
                  <BookOpen className="w-5 h-5" />
                  View all Diagnostic Tests
                </button>
              </Link>
              <button onClick={() => window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test%20at%20Yuva%20Lab.", "_blank")}
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-8 py-4 rounded-2xl shadow-2xl transition-all hover:scale-105 text-base"
                data-testid="final-whatsapp-btn">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </button>
              <a href="tel:+919888772209"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-black px-8 py-4 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 text-base"
                data-testid="final-call-btn">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Blog;

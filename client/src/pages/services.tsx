import ServicesGrid from "@/components/services-grid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";
import {
  CheckCircle,
  Phone,
  MessageCircle,
  CalendarCheck,
  Star,
  MapPin,
  Clock,
  Shield,
  Award,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  Package,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const whyChoose = [
  { icon: Shield, label: "Proven Testing Procedures" },
  { icon: Clock, label: "Reports Within 4 Hours" },
  { icon: Award, label: "Experienced Lab Technicians" },
  { icon: MapPin, label: "Home Sample Collection Available" },
  { icon: Star, label: "Trusted Diagnostic Centre Since 2007" },
  { icon: CheckCircle, label: "500+ Diagnostic Tests Available" },
];

const faqs = [
  {
    q: "Which is the best diagnostic lab in Jalandhar?",
    a: "Yuva Lab is one of the most trusted diagnostic labs in Jalandhar, operating since 2007. We follow quality-assured processes and deliver accurate reports within 4 hours.",
  },
  {
    q: "Do you provide home sample collection in Jalandhar?",
    a: "Yes, we offer home sample collection across Jalandhar including Mithapur and surrounding areas. Book a home visit by calling +91-9888772209 or via WhatsApp.",
  },
  {
    q: "How fast are reports delivered at Yuva Lab?",
    a: "Most diagnostic reports are delivered within 4 hours. Some specialized tests like genetic testing may take longer — our team will inform you at the time of booking.",
  },
  {
    q: "What types of blood tests do you offer?",
    a: "We offer a complete range of blood tests including CBC, blood sugar, lipid profile, liver function tests (LFT), kidney function tests (KFT), thyroid profile, vitamin levels, and more.",
  },
  {
    q: "Are health packages available for families?",
    a: "Yes, we have customized health checkup packages for individuals, couples, seniors, and families. These packages cover multiple diagnostic tests at affordable prices.",
  },
  {
    q: "Do you offer hormone testing in Jalandhar?",
    a: "Yes, Yuva Lab offers advanced hormone profile testing including thyroid (T3, T4, TSH), testosterone, estrogen, progesterone, FSH, LH, and fertility-related diagnostics.",
  },
];

const reviews = [
  {
    name: "Rajinder Kaur",
    location: "Mithapur, Jalandhar",
    rating: 5,
    text: "Best lab in Jalandhar! Got my reports within 3 hours. Staff is very professional and the home collection service is excellent.",
  },
  {
    name: "Amit Sharma",
    location: "Jalandhar Cantt",
    rating: 5,
    text: "Highly recommend Yuva Lab. Affordable prices, accurate results, and very friendly team. Been using their services for 5 years.",
  },
  {
    name: "Priya Malhotra",
    location: "Model Town, Jalandhar",
    rating: 5,
    text: "Excellent diagnostic services! Hormone testing done with full accuracy. Results matched perfectly with what my doctor expected.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-200 rounded-2xl overflow-hidden"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-blue-50 transition-colors"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-semibold text-gray-900 text-base" itemProp="name">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-600 shrink-0" />
        )}
      </button>
      {open && (
        <div
          className="px-6 py-4 bg-blue-50 border-t border-blue-100 text-gray-600 text-sm leading-relaxed"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <span itemProp="text">{a}</span>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        name: "Yuva Lab",
        description:
          "Leading diagnostic lab in Jalandhar offering blood tests, health packages, hormone testing, genetic testing, and home collection services since 2007.",
        url: "https://yuvalab.in/services",
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
        geo: {
          "@type": "GeoCoordinates",
          latitude: "31.3260",
          longitude: "75.5762",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        areaServed: ["Jalandhar", "Mithapur", "Punjab"],
        priceRange: "₹",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diagnostic Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTest",
                name: "Blood Tests in Jalandhar",
                description:
                  "Complete blood testing including CBC, blood sugar, lipid profile, liver and kidney function tests.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTest",
                name: "Health Checkup Packages",
                description:
                  "Preventive health packages for all age groups covering multiple diagnostic tests.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTest",
                name: "Hormone Profile Testing",
                description:
                  "Advanced hormone testing including thyroid, testosterone, estrogen, and fertility diagnostics.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTest",
                name: "Genetic Testing",
                description:
                  "Genetic analysis for hereditary conditions and personalized medicine.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTest",
                name: "Toxicology Testing",
                description:
                  "Drug screening and toxin analysis for medical and legal purposes.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalTest",
                name: "Specialized Diagnostics",
                description:
                  "Advanced testing for allergies, autoimmune disorders, and rare medical conditions.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Diagnostic Lab Services in Jalandhar | Blood Tests, Home Collection – Yuva Lab"
        description="Explore all diagnostic services at Yuva Lab Jalandhar – blood tests, thyroid, diabetes, hormones, genetic testing, home collection & health packages. Reports in 4 hours."
        keywords={[
          "diagnostic lab Jalandhar",
          "blood test Jalandhar",
          "pathology lab Mithapur",
          "health checkup Punjab",
          "blood test lab near Mithapur",
          "home collection blood test Jalandhar",
          "thyroid test Jalandhar",
          "affordable blood test lab Jalandhar",
          "same day blood test report Jalandhar",
          "best lab for hormone testing Punjab",
          "genetic testing Jalandhar",
          "diagnostic services Jalandhar",
        ]}
        canonical="https://yuvalab.in/services"
        schema={schema}
      />

      <div className="pt-20" data-testid="services-page">

        {/* ── HERO ── */}
        <div
          className="relative text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Mithapur, Jalandhar · Punjab · Since 2007
            </div>
            <h1
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight"
              data-testid="services-page-title"
            >
              Best Diagnostic Lab in Jalandhar
              <br />
              <span className="text-blue-200">Blood Tests · Health Packages</span>
            </h1>
            <p
              className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-10"
              data-testid="services-page-subtitle"
            >
              Yuva Lab is a trusted diagnostic centre in Jalandhar offering blood
              tests, hormone profiles, genetic testing &amp; home collection.
              Accurate reports in 4 hours. Book now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919888772209"
                data-testid="hero-call-button"
                onClick={() =>
                  typeof window !== "undefined" &&
                  (window as any).gtag?.("event", "call_click", {
                    event_category: "CTA",
                    event_label: "Hero Call Button",
                  })
                }
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <button
                data-testid="hero-whatsapp-button"
                onClick={() => {
                  const msg =
                    "Hello! I'd like to book a diagnostic test at Yuva Lab, Jalandhar.";
                  window.open(
                    `https://wa.me/919888772209?text=${encodeURIComponent(msg)}`,
                    "_blank"
                  );
                  (window as any).gtag?.("event", "whatsapp_click", {
                    event_category: "CTA",
                    event_label: "Hero WhatsApp Button",
                  });
                }}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg shadow-xl transition-colors text-base"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </button>
              <button
                data-testid="hero-book-button"
                onClick={() => {
                  const msg =
                    "Hi! I want to book a test at Yuva Lab, Jalandhar. Please help me.";
                  window.open(
                    `https://wa.me/919888772209?text=${encodeURIComponent(msg)}`,
                    "_blank"
                  );
                  (window as any).gtag?.("event", "book_click", {
                    event_category: "CTA",
                    event_label: "Hero Book Button",
                  });
                }}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg shadow-xl transition-colors text-base"
              >
                <CalendarCheck className="w-5 h-5" />
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* ── TRUST BAR ── */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
              {[
                "✔ Quality Assured",
                "✔ 4-Hour Reports",
                "✔ Home Collection",
                "✔ 500+ Tests",
                "✔ Since 2007",
                "✔ Affordable Pricing",
              ].map((t) => (
                <span key={t} className="text-sm font-semibold text-blue-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── INTRO PARAGRAPH (SEO) ── */}
        <div className="bg-gray-50 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Diagnostic Services in{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #1565c0, #42a5f5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Jalandhar
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Yuva Lab is a leading <strong>diagnostic lab in Jalandhar</strong>{" "}
              offering accurate and fast medical testing services. From routine{" "}
              <strong>blood tests</strong> to advanced genetic and hormone
              analysis, we ensure reliable reports with modern technology and
              expert supervision. Our quality-assured processes guarantee precision
              and timely delivery — making us the most trusted{" "}
              <strong>pathology lab near Mithapur</strong>, Punjab.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/tests" data-testid="link-view-all-tests">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold">
                  View All Blood Tests in Jalandhar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/packages" data-testid="link-check-packages">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold">
                  Check Health Packages
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact" data-testid="link-book-test">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold">
                  Book Diagnostic Test
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <ServicesGrid />

        {/* ── WHY CHOOSE ── */}
        <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Award className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Why Choose Yuva Lab?
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Jalandhar's most trusted diagnostic centre — delivering precision,
                speed, and care for over 17 years.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-white/10 border border-white/15 rounded-2xl px-6 py-5 hover:bg-white/15 transition-colors"
                    data-testid={`why-choose-${item.label.slice(0, 15).replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white leading-snug">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── REVIEWS ── */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-100 text-yellow-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                Patient Reviews
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Trusted by Thousands in Jalandhar
              </h2>
              <p className="text-gray-500 text-lg">
                Real feedback from our patients across Jalandhar, Mithapur &amp; Punjab.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  data-testid={`review-card-${i}`}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p
                    className="text-gray-600 text-sm leading-relaxed mb-4 italic"
                    itemProp="reviewBody"
                  >
                    "{r.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-bold">
                      {r.name[0]}
                    </div>
                    <div>
                      <p
                        className="font-semibold text-gray-900 text-sm"
                        itemProp="author"
                      >
                        {r.name}
                      </p>
                      <p className="text-gray-400 text-xs">{r.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── GOOGLE MAPS ── */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <MapPin className="w-4 h-4" />
                Find Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Visit Yuva Lab in Jalandhar
              </h2>
              <p className="text-gray-500 text-lg">
                Kalgidhar Avenue, Mithapur, Jalandhar, Punjab – 144022
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 lg:h-96">
                <iframe
                  src="https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yuva Lab location – Mithapur, Jalandhar, Punjab"
                  data-testid="google-maps-embed"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600 text-sm">
                      Kalgidhar Avenue, Mithapur
                      <br />
                      Jalandhar, Punjab – 144022
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Phone</p>
                    <a
                      href="tel:+919888772209"
                      className="text-green-600 font-semibold hover:underline"
                      data-testid="map-section-phone"
                    >
                      +91-9888772209
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Timings</p>
                    <p className="text-gray-600 text-sm">
                      Mon–Sat: 7:00 AM – 8:00 PM
                      <br />
                      Sunday: 8:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="tel:+919888772209" data-testid="map-call-cta">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/919888772209?text=Hi%20Yuva%20Lab!%20I%20want%20to%20book%20a%20test.",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-lg transition-colors"
                    data-testid="map-whatsapp-cta"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <FlaskConical className="w-4 h-4" />
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-lg">
                Everything you need to know about our diagnostic services in Jalandhar.
              </p>
            </div>
            <div
              className="space-y-3"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {faqs.map((f) => (
                <FAQItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div
          className="py-20 text-white"
          style={{
            background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 60%, #e53935 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Package className="w-4 h-4" />
              Book Your Test Today
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Book Your Test Today in Jalandhar
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Fast, reliable, and affordable diagnostic services near you. Home
              collection available across Jalandhar and Mithapur, Punjab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                data-testid="final-book-button"
                onClick={() => {
                  window.open(
                    "https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test%20at%20Yuva%20Lab%20Jalandhar.",
                    "_blank"
                  );
                  (window as any).gtag?.("event", "book_click", {
                    event_category: "CTA",
                    event_label: "Final Book Button",
                  });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:bg-blue-50 transition-colors"
              >
                <CalendarCheck className="w-5 h-5" />
                Book Now
              </button>
              <a
                href="tel:+919888772209"
                data-testid="final-call-button"
                onClick={() =>
                  (window as any).gtag?.("event", "call_click", {
                    event_category: "CTA",
                    event_label: "Final Call Button",
                  })
                }
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button
                data-testid="final-whatsapp-button"
                onClick={() => {
                  window.open(
                    "https://wa.me/919888772209?text=Hello%20Yuva%20Lab!%20I%20need%20help%20with%20a%20diagnostic%20test.",
                    "_blank"
                  );
                  (window as any).gtag?.("event", "whatsapp_click", {
                    event_category: "CTA",
                    event_label: "Final WhatsApp Button",
                  });
                }}
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

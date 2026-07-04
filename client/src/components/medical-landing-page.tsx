import { Link } from "wouter";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import {
  Phone, MessageCircle, MapPin, Clock, CheckCircle, ChevronDown, ChevronUp,
  Star, Home, ArrowRight, Shield, Award, FlaskConical, FileText
} from "lucide-react";
import { useState } from "react";
import { type LucideIcon } from "lucide-react";

export interface FAQ { q: string; a: string; }
export interface LandingPageConfig {
  slug: string;
  title: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  h1Sub: string;
  heroBadge: string;
  intro: string;
  heroColor: string;
  highlights: { icon: LucideIcon; title: string; desc: string }[];
  mainContent: { heading: string; body: string }[];
  services: { name: string; price: string; href: string }[];
  faqs: FAQ[];
  areas: string[];
  schemaExtra?: object;
}

const TESTIMONIALS = [
  { name: "Anita Sharma", location: "Mithapur, Jalandhar", stars: 5, text: "Excellent service! Reports came in under 4 hours and the staff was very professional. Highly recommend Yuva Lab." },
  { name: "Rajesh Kumar", location: "Nakodar Road, Jalandhar", stars: 5, text: "Home collection was smooth and on time. The lab reports were accurate and doctor-verified. Great experience." },
  { name: "Priya Bhatia", location: "Model Town, Jalandhar", stars: 5, text: "Very affordable packages compared to other labs in Jalandhar. Quality is top-notch. Will use again." },
];

function FAQItem({ q, a }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-blue-50/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function MedicalLandingPage({ config }: { config: LandingPageConfig }) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalOrganization", "DiagnosticLab", "LocalBusiness"],
        "@id": "https://yuvalab.in/#organization",
        name: "Yuva Lab",
        alternateName: "YuvaLab Diagnostics",
        url: "https://yuvalab.in",
        logo: "https://yuvalab.in/newlogo.jpeg",
        image: "https://yuvalab.in/newlogo.jpeg",
        description: config.metaDescription,
        foundingDate: "2007",
        telephone: "+91-9888772209",
        email: "yuvalab24@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kalgidhar Avenue, White Diamond Road, Mithapur",
          addressLocality: "Jalandhar",
          addressRegion: "Punjab",
          postalCode: "144022",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 31.3260, longitude: 75.5762 },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "20:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "14:00" },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "850", bestRating: "5" },
        sameAs: ["https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab"],
        hasMap: "https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Card",
        medicalSpecialty: "Pathology",
        ...config.schemaExtra,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yuvalab.in/" },
          { "@type": "ListItem", position: 2, name: config.h1, item: `https://yuvalab.in${config.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: config.faqs.map(f => ({
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
        title={config.title}
        description={config.metaDescription}
        canonical={config.canonical}
        schema={baseSchema}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-20 pb-16" style={{ background: `linear-gradient(135deg, ${config.heroColor}f0, #1e40afee)` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 animate-[blobFloat_7s_ease-in-out_infinite]" style={{ background: "rgba(255,255,255,0.15)" }} />
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full opacity-20 animate-[blobFloat_9s_ease-in-out_infinite_reverse]" style={{ background: "rgba(255,255,255,0.1)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5" /> {config.heroBadge}
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-5 leading-tight">{config.h1}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">{config.h1Sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919888772209">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3 rounded-2xl shadow-xl text-base gap-2">
                <Phone className="w-4 h-4" /> Call Now – +91-9888772209
              </Button>
            </a>
            <a href="https://wa.me/919888772209" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3 rounded-2xl shadow-xl text-base gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST HIGHLIGHTS ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {config.highlights.map((h, i) => (
              <div key={i} className="flex flex-col items-center text-center p-5 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-3">
                  <h.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-extrabold text-gray-900 text-sm mb-1">{h.title}</p>
                <p className="text-gray-500 text-xs leading-snug">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600 font-medium">Home</Link></li>
            <li><span className="mx-1">/</span></li>
            <li className="text-blue-700 font-semibold truncate">{config.h1}</li>
          </ol>
        </div>
      </nav>

      {/* ── INTRO ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed">{config.intro}</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-4 pb-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {config.mainContent.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">{section.heading}</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">{section.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTS / PRICE TABLE ── */}
      {config.services.length > 0 && (
        <section className="py-14 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">Tests & Pricing at Yuva Lab</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.services.map((s, i) => (
                <Link key={i} href={s.href}>
                  <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <FlaskConical className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="font-semibold text-gray-800 text-sm group-hover:text-blue-700">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-700 font-extrabold text-sm">{s.price}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/tests">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-2xl shadow-lg gap-2">
                  <FlaskConical className="w-4 h-4" /> View All 3000+ Tests
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">What Patients Say About Yuva Lab</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.stars)].map((_, si) => <Star key={si} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS COVERED ── */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 text-center">Areas We Serve in Jalandhar</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {config.areas.map((a, i) => (
              <span key={i} className="inline-flex items-center gap-1 bg-white border border-blue-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <MapPin className="w-3 h-3 text-blue-500" /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6 text-center">Find Yuva Lab in Jalandhar</h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100">
            <div className="bg-blue-600 px-5 py-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">Yuva Lab – Kalgidhar Avenue, Mithapur, Jalandhar, Punjab</span>
            </div>
            <div style={{ height: 320 }}>
              <iframe
                title="Yuva Lab Location – Mithapur Jalandhar"
                src="https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%" style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="px-5 py-3 bg-white border-t border-blue-50 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-500 font-medium">Open Today · Mon–Sat 7 AM – 8 PM · Sun 8 AM – 2 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {config.faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-extrabold text-gray-900 mb-5">Explore More at Yuva Lab Jalandhar</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/tests", label: "All Tests" },
              { href: "/packages", label: "Health Packages" },
              { href: "/services", label: "Our Services" },
              { href: "/blog", label: "Health Blog" },
              { href: "/contact", label: "Book Now" },
              { href: "/about", label: "About Us" },
            ].map(l => (
              <Link key={l.href} href={l.href}>
                <button className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white font-bold px-4 py-2 rounded-xl text-sm transition-all">
                  {l.label} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14" style={{ background: `linear-gradient(135deg, ${config.heroColor}ee, #1e40af)` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-white/70 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-white mb-3">Book Your Test Today</h2>
          <p className="text-blue-100 text-lg mb-8">Accurate results · Fast reports · Home collection available across Jalandhar</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919888772209">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-3 rounded-2xl shadow-xl text-base gap-2">
                <Phone className="w-4 h-4" /> +91-9888772209
              </Button>
            </a>
            <a href="https://wa.me/919888772209" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-2xl shadow-xl text-base gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── MEDICAL DISCLAIMER ── */}
      <section className="bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-yellow-800 text-center">
            <strong>Medical Disclaimer:</strong> The information on this page is for general awareness only and does not constitute medical advice. Always consult a qualified healthcare professional for diagnosis and treatment. Yuva Lab is a NABL-quality diagnostic laboratory in Jalandhar.
          </p>
        </div>
      </section>
    </>
  );
}

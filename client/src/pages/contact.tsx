import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/seo-head";
import { Link } from "wouter";
import {
  Phone, MessageCircle, MapPin, Clock, Mail, CheckCircle,
  CalendarCheck, ArrowRight, ChevronRight, Sparkles, Zap,
  Home, Shield, Award, Star, Building2, Navigation,
  FlaskConical, Microscope, Package, BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "How can I book a blood test in Jalandhar?",
    a: "You can book a blood test at Yuva Lab instantly by calling +91-9888772209 or sending a WhatsApp message. You can also fill the contact form above and we'll call you back.",
  },
  {
    q: "Do you provide home sample collection in Jalandhar?",
    a: "Yes! Yuva Lab provides free home sample collection across all Jalandhar areas including Mithapur, Model Town, Civil Lines, GTB Nagar, Urban Estate, and more.",
  },
  {
    q: "What are Yuva Lab's working hours?",
    a: "We are open Monday to Saturday 7AM–8PM and Sunday 8AM–6PM. Home collection is available during all working hours.",
  },
  {
    q: "How quickly are diagnostic reports delivered?",
    a: "Most routine blood tests are delivered within 4 hours. Specialized tests may take 1–2 days. All reports are sent digitally.",
  },
];

const trustPoints = [
  { icon: Zap,         text: "4-hour report delivery" },
  { icon: Home,        text: "Free home collection" },
  { icon: Building2,   text: "Trusted since 2007" },
  { icon: Shield,      text: "Quality-assured testing" },
  { icon: Star,        text: "99.9% accuracy" },
  { icon: FlaskConical,text: "3000+ tests available" },
];

const gtag = (event: string, label: string) => {
  (window as any).gtag?.("event", event, { event_category: "CTA", event_label: label });
  (window as any).dataLayer?.push({ event, event_category: "CTA", event_label: label });
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, subject, message } = formData;
    const text = `🏥 *New Booking Request – Yuva Lab*\n\n👤 *Name:* ${firstName} ${lastName}\n📞 *Phone:* ${phone}\n📧 *Email:* ${email}\n📋 *Subject:* ${subject || "Test Booking"}\n💬 *Message:* ${message}\n\nPlease confirm availability and home collection.`;
    window.open(`https://wa.me/919888772209?text=${encodeURIComponent(text)}`, "_blank");
    gtag("form_submit", "Contact Form");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: "Contact Yuva Lab – Book Your Test in Jalandhar",
        description: "Contact Yuva Lab in Jalandhar for blood tests, health packages, and home sample collection.",
        url: "https://yuvalab.in/contact",
        mainEntity: {
          "@type": "MedicalBusiness",
          name: "Yuva Lab",
          telephone: "+91-9888772209",
          email: "yuvalab24@gmail.com",
          url: "https://yuvalab.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "17, Kalgidhar Avenue, White Diamond Road, Mithapur",
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
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9888772209",
            contactType: "Customer Service",
            availableLanguage: ["Hindi", "Punjabi", "English"],
            areaServed: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: "31.3260", longitude: "75.5762" },
          hasMap: "https://maps.google.com/?q=Yuva+Lab+Mithapur+Jalandhar",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Yuva Lab",
        telephone: "+91-9888772209",
        email: "yuvalab24@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "17, Kalgidhar Avenue, White Diamond Road, Mithapur",
          addressLocality: "Jalandhar",
          addressRegion: "Punjab",
          postalCode: "144022",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: "31.3260", longitude: "75.5762" },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "07:00", closes: "20:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "08:00", closes: "18:00" },
        ],
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
        title="Book Blood Test in Jalandhar | Contact Yuva Lab | Call +91-9888772209"
        description="Book a blood test or health checkup at Yuva Lab Jalandhar. Call or WhatsApp +91-9888772209 for home collection. Get fast 4-hour reports. Mithapur, Jalandhar."
        keywords={[
          "contact Yuva Lab Jalandhar",
          "book blood test Jalandhar",
          "diagnostic lab contact Jalandhar",
          "home collection booking Jalandhar",
          "blood test appointment Jalandhar",
          "pathology lab Mithapur contact",
          "call Yuva Lab",
          "WhatsApp blood test Jalandhar",
        ]}
        canonical="https://yuvalab.in/contact"
        schema={schema}
      />

      <div className="pt-20" data-testid="contact-page">

        {/* ══════════════ HERO ══════════════ */}
        <div className="relative text-white overflow-hidden min-h-[520px] flex items-center"
          style={{ background: "linear-gradient(135deg, #0a2463 0%, #1565c0 55%, #0d47a1 100%)" }}>
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10 w-full">
            <div className="hero-text-in inline-flex items-center gap-2 bg-white/10 border border-white/25 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-7 backdrop-blur-sm">
              <div className="glow-ring w-2 h-2 rounded-full bg-green-400" />
              <MapPin className="w-4 h-4" />
              Mithapur, Jalandhar · Punjab · Since 2007
            </div>

            <h1 className="hero-text-in delay-100 text-4xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight" data-testid="contact-page-title">
              Contact Yuva Lab
              <br />
              <span style={{ background: "linear-gradient(90deg, #93c5fd, #c4b5fd, #6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Book Your Test in Jalandhar
              </span>
            </h1>

            <p className="hero-text-in delay-200 text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed" data-testid="contact-page-subtitle">
              Looking for a reliable diagnostic lab in Jalandhar? Book blood tests, health packages, or home sample collection instantly.
            </p>

            <div className="hero-text-in delay-300 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919888772209"
                onClick={() => gtag("call_click", "Hero Call")}
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-base"
                data-testid="hero-call-btn">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call Now
              </a>
              <button
                onClick={() => { gtag("whatsapp_click", "Hero WhatsApp"); window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test%20at%20Yuva%20Lab%20Jalandhar.", "_blank"); }}
                className="group inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-base"
                data-testid="hero-whatsapp-btn">
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                WhatsApp Now
              </button>
              <a href="https://maps.google.com/?q=Yuva+Lab+Kalgidhar+Avenue+Mithapur+Jalandhar" target="_blank" rel="noopener noreferrer"
                onClick={() => gtag("directions_click", "Hero Directions")}
                className="group inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 text-base"
                data-testid="hero-directions-btn">
                <Navigation className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" fillOpacity="0.05" />
              <path d="M0 60 L0 45 Q360 20 720 45 Q1080 70 1440 45 L1440 60 Z" fill="white" fillOpacity="0.08" />
            </svg>
          </div>
        </div>

        {/* ══════════════ TRUST BAR ══════════════ */}
        <div className="bg-white border-b border-gray-100 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {trustPoints.map((tp) => {
                const Icon = tp.icon;
                return (
                  <div key={tp.text} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    {tp.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══════════════ FORM + CONTACT INFO ══════════════ */}
        <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="reveal inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Get in Touch
              </div>
              <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                Book Your Diagnostic Test{" "}
                <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Instantly
                </span>
              </h2>
              <p className="reveal delay-200 text-gray-500 text-lg max-w-xl mx-auto">
                Fill the form below and we'll arrange your home collection within minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

              {/* ── FORM ── */}
              <div className="reveal lg:col-span-3 bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
                {/* Form top bar */}
                <div className="px-8 py-5 text-white" style={{ background: "linear-gradient(135deg, #0d47a1, #1565c0)" }}>
                  <h2 className="text-lg font-extrabold" data-testid="contact-form-title">Book Your Test Now</h2>
                  <p className="text-blue-200 text-sm mt-0.5">We respond within minutes · Home collection available</p>
                </div>

                {/* Trust chips */}
                <div className="flex flex-wrap gap-2 px-8 pt-5">
                  {[
                    { icon: Zap,    label: "4-hour reports" },
                    { icon: Home,   label: "Free home collection" },
                    { icon: Shield, label: "Trusted since 2007" },
                  ].map(tp => {
                    const Icon = tp.icon;
                    return (
                      <div key={tp.label} className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        <Icon className="w-3.5 h-3.5" />
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {tp.label}
                      </div>
                    );
                  })}
                </div>

                {submitted ? (
                  <div className="px-8 py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                    <p className="text-gray-500">WhatsApp opened with your booking details. We'll confirm shortly.</p>
                  </div>
                ) : (
                  <form className="px-8 py-6 space-y-4" data-testid="contact-form" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 mb-1 block">First Name *</Label>
                        <Input id="firstName" name="firstName" placeholder="Raj" required
                          value={formData.firstName} onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))}
                          className="rounded-xl border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white transition-all"
                          data-testid="input-first-name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700 mb-1 block">Last Name *</Label>
                        <Input id="lastName" name="lastName" placeholder="Sharma" required
                          value={formData.lastName} onChange={e => setFormData(p => ({ ...p, lastName: e.target.value }))}
                          className="rounded-xl border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white transition-all"
                          data-testid="input-last-name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-1 block">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91-9876543210" required
                        value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="rounded-xl border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white transition-all"
                        data-testid="input-phone" />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1 block">Email (Optional)</Label>
                      <Input id="email" name="email" type="email" placeholder="raj@example.com"
                        value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="rounded-xl border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white transition-all"
                        data-testid="input-email" />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-semibold text-gray-700 mb-1 block">I want to… *</Label>
                      <select name="subject" id="subject" required
                        value={formData.subject} onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-xl bg-gray-50 focus:bg-white text-sm transition-all outline-none"
                        data-testid="select-subject">
                        <option value="">Select…</option>
                        <option value="Book a Blood Test">Book a Blood Test</option>
                        <option value="Book Home Collection">Book Home Collection</option>
                        <option value="Enquire About Health Package">Enquire About Health Package</option>
                        <option value="Get Report Status">Get Report Status</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-1 block">Additional Details</Label>
                      <Textarea id="message" name="message" rows={3}
                        placeholder="Which test do you need? Any specific timing for home collection?"
                        value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                        className="rounded-xl border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white transition-all resize-none"
                        data-testid="textarea-message" />
                    </div>

                    <button type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-black py-4 rounded-2xl transition-colors text-base cursor-pointer"
                      data-testid="submit-contact-form">
                      <MessageCircle className="w-5 h-5" />
                      Book Your Test Now
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      Submits via WhatsApp · We'll confirm your booking in minutes
                    </p>
                  </form>
                )}
              </div>

              {/* ── CONTACT INFO ── */}
              <div className="reveal delay-100 lg:col-span-2 space-y-5">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-2" data-testid="contact-info-title">
                    Diagnostic Lab Contact Details in Jalandhar
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Yuva Lab is located in Mithapur, Jalandhar, offering easy access for patients across the city. Call, WhatsApp, or visit for quick diagnostic services.
                  </p>
                </div>

                {/* Info cards */}
                {[
                  {
                    icon: Phone, color: "#1565c0", bg: "#e3f2fd",
                    title: "Call Us",
                    lines: ["+91-9888772209", "+91-7009090378"],
                    action: { href: "tel:+919888772209", label: "Call Now", onClick: () => gtag("call_click", "Info Card") },
                  },
                  {
                    icon: MessageCircle, color: "#16a34a", bg: "#dcfce7",
                    title: "WhatsApp",
                    lines: ["Chat for instant booking", "Available all working hours"],
                    action: { href: "https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test.", label: "WhatsApp Now", onClick: () => gtag("whatsapp_click", "Info Card") },
                  },
                  {
                    icon: Mail, color: "#7c3aed", bg: "#ede9fe",
                    title: "Email",
                    lines: ["yuvalab24@gmail.com"],
                    action: { href: "mailto:yuvalab24@gmail.com", label: "Send Email", onClick: () => {} },
                  },
                  {
                    icon: MapPin, color: "#d97706", bg: "#fef3c7",
                    title: "Address",
                    lines: ["17, Kalgidhar Avenue,", "White Diamond Road, Mithapur,", "Jalandhar – 144022, Punjab"],
                    action: { href: "https://maps.google.com/?q=Yuva+Lab+Kalgidhar+Avenue+Mithapur+Jalandhar", label: "Get Directions", onClick: () => gtag("directions_click", "Info Card") },
                  },
                  {
                    icon: Clock, color: "#0891b2", bg: "#e0f2fe",
                    title: "Working Hours",
                    lines: ["Mon–Sat: 7AM – 8PM", "Sunday: 8AM – 6PM"],
                    action: null,
                  },
                ].map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow"
                      data-testid={`contact-card-${card.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: card.bg }}>
                          <Icon className="w-5 h-5" style={{ color: card.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-gray-900 text-sm mb-1">{card.title}</div>
                          {card.lines.map(l => <div key={l} className="text-gray-500 text-xs leading-relaxed">{l}</div>)}
                          {card.action && (
                            <a href={card.action.href}
                              target={card.action.href.startsWith("http") ? "_blank" : undefined}
                              rel={card.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              onClick={card.action.onClick}
                              className="inline-flex items-center gap-1 text-xs font-bold mt-2 hover:underline transition-colors"
                              style={{ color: card.color }}>
                              {card.action.label}
                              <ChevronRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════ VISIT OUR LAB + MAP ══════════════ */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="reveal inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                  <MapPin className="w-4 h-4" />
                  Visit Our Diagnostic Lab in Jalandhar
                </div>
                <h2 className="reveal delay-100 text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Visit Our Diagnostic Lab{" "}
                  <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    in Jalandhar
                  </span>
                </h2>
                <p className="reveal delay-200 text-gray-600 leading-relaxed mb-7">
                  We are conveniently located in <strong>Mithapur, Jalandhar</strong>, providing fast and reliable diagnostic services including blood tests and health checkups. Visit us or book a free home collection — your choice.
                </p>

                {/* Address block */}
                <div className="reveal delay-300 bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-extrabold text-gray-900 text-sm mb-1">Yuva Lab – Jalandhar</div>
                      <div className="text-gray-600 text-sm leading-relaxed">
                        17, Kalgidhar Avenue, White Diamond Road,<br />
                        Behind Govt. Sen. Sec. School, Mithapur,<br />
                        Jalandhar – 144022, Punjab, India
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <a href="https://maps.google.com/?q=Yuva+Lab+Kalgidhar+Avenue+Mithapur+Jalandhar" target="_blank" rel="noopener noreferrer"
                          onClick={() => gtag("directions_click", "Map Section")}
                          className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                          data-testid="get-directions-btn">
                          <Navigation className="w-3.5 h-3.5" />
                          Get Directions
                        </a>
                        <a href="tel:+919888772209"
                          onClick={() => gtag("call_click", "Map Section")}
                          className="inline-flex items-center gap-1.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                          data-testid="map-section-call-btn">
                          <Phone className="w-3.5 h-3.5" />
                          +91-9888772209
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Internal links */}
                <div className="reveal delay-400 space-y-2">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Explore Our Services</div>
                  {[
                    { href: "/tests",    icon: Microscope, label: "Book blood tests in Jalandhar" },
                    { href: "/packages", icon: Package,     label: "View health checkup packages" },
                    { href: "/services", icon: Sparkles,    label: "All diagnostic services" },
                    { href: "/blog",     icon: BookOpen,    label: "Health tips & guides" },
                  ].map(l => {
                    const Icon = l.icon;
                    return (
                      <Link key={l.href} href={l.href}>
                        <div className="group flex items-center gap-2.5 text-sm font-semibold text-blue-600 hover:text-blue-800 py-1 cursor-pointer">
                          <Icon className="w-4 h-4 shrink-0" />
                          {l.label}
                          <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Google Map */}
              <div className="reveal delay-100 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100">
                <iframe
                  src="https://maps.google.com/maps?q=Kalgidhar+Avenue+White+Diamond+Road+Mithapur+Jalandhar+Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Yuva Lab location – Kalgidhar Avenue, Mithapur, Jalandhar"
                  aria-label="Google Map showing Yuva Lab location in Jalandhar"
                  data-testid="contact-google-map"
                />
                <div className="bg-white px-5 py-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-gray-900 text-sm">Yuva Lab</div>
                    <div className="text-gray-400 text-xs">Kalgidhar Avenue, Mithapur, Jalandhar</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════ TRUST SECTION ══════════════ */}
        <div className="py-14 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Why Patients Trust Yuva Lab
            </div>
            <h2 className="reveal delay-100 text-2xl sm:text-3xl font-extrabold mb-10">
              Trusted Diagnostic Lab in Jalandhar Since 2007
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Building2,    text: "Trusted diagnostic lab since 2007" },
                { icon: CheckCircle,  text: "99.9% accurate diagnostic reports" },
                { icon: Zap,          text: "Fast 4-hour report delivery" },
                { icon: Home,         text: "Free home sample collection" },
                { icon: FlaskConical, text: "3000+ diagnostic tests available" },
                { icon: Shield,       text: "Quality protocols" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.text}
                    className="reveal flex items-center gap-3 bg-white/10 border border-white/15 rounded-2xl px-5 py-4 hover:bg-white/15 transition-colors text-left"
                    style={{ animationDelay: `${i * 0.07}s` }}>
                    <Icon className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="font-semibold text-sm text-white">{item.text}</span>
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
                Contact &amp; Booking FAQs
              </h2>
              <p className="reveal delay-200 text-gray-500 text-lg">
                Quick answers to help you book your test at Yuva Lab, Jalandhar.
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
                    data-testid={`faq-contact-${i}`}>
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
        <div className="relative py-20 text-white overflow-hidden"
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
              Ready to Book Your Test?
            </h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Call, WhatsApp or fill the form — we'll arrange your home collection and deliver reports in 4 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919888772209"
                onClick={() => gtag("call_click", "Final CTA")}
                className="group inline-flex items-center justify-center gap-3 bg-white text-blue-700 font-black px-10 py-5 rounded-2xl text-lg shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                data-testid="final-call-btn">
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                Call Now
              </a>
              <button
                onClick={() => { gtag("whatsapp_click", "Final CTA"); window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test%20at%20Yuva%20Lab.", "_blank"); }}
                className="group inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black px-10 py-5 rounded-2xl text-lg shadow-2xl transition-all duration-300 hover:scale-105"
                data-testid="final-whatsapp-btn">
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                WhatsApp Now
              </button>
              <a href="https://maps.google.com/?q=Yuva+Lab+Kalgidhar+Avenue+Mithapur+Jalandhar" target="_blank" rel="noopener noreferrer"
                onClick={() => gtag("directions_click", "Final CTA")}
                className="group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-black px-10 py-5 rounded-2xl text-lg shadow-2xl transition-all duration-300 hover:scale-105"
                data-testid="final-directions-btn">
                <Navigation className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════ STICKY MOBILE FOOTER ══════════════ */}
        <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex gap-3">
          <a href="tel:+919888772209"
            onClick={() => gtag("call_click", "Sticky Mobile")}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-2xl text-sm transition-colors"
            data-testid="sticky-call-btn">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button
            onClick={() => { gtag("whatsapp_click", "Sticky Mobile"); window.open("https://wa.me/919888772209?text=Hi!%20I%20want%20to%20book%20a%20test%20at%20Yuva%20Lab.", "_blank"); }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-2xl text-sm transition-colors"
            data-testid="sticky-whatsapp-btn">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
          <a href="https://maps.google.com/?q=Yuva+Lab+Kalgidhar+Avenue+Mithapur+Jalandhar" target="_blank" rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-2xl text-sm transition-colors"
            data-testid="sticky-directions-btn">
            <Navigation className="w-4 h-4" />
            Directions
          </a>
        </div>

      </div>
    </>
  );
};

export default Contact;

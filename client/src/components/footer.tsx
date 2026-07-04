import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Health Packages", path: "/packages" },
    { name: "Book a Test", path: "/tests" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const landingPages = [
    { name: "Blood Test in Jalandhar", path: "/blood-test-jalandhar" },
    { name: "Home Blood Collection", path: "/home-blood-collection-jalandhar" },
    { name: "Full Body Checkup", path: "/full-body-checkup-jalandhar" },
    { name: "Thyroid Test in Jalandhar", path: "/thyroid-test-jalandhar" },
    { name: "Cancer Screening", path: "/cancer-screening-jalandhar" },
    { name: "Blood Test Price", path: "/blood-test-price-jalandhar" },
    { name: "Health Checkup Packages", path: "/health-checkup-packages-jalandhar" },
    { name: "Pathology Lab Jalandhar", path: "/pathology-lab-jalandhar" },
    { name: "Diagnostic Centre Jalandhar", path: "/diagnostic-centre-jalandhar" },
    { name: "Preventive Health Checkup", path: "/preventive-health-checkup-jalandhar" },
  ];

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(160deg, #0a1628 0%, #0d2347 40%, #0f2d5e 100%)" }}
      data-testid="footer"
    >
      {/* Top brand-color accent bar */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5, #1565c0)" }} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background glow orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1565c0, transparent)", transform: "translate(-40%, -40%)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #42a5f5, transparent)", transform: "translate(40%, 40%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src="/newlogo.jpeg"
                alt="Yuva Lab Logo"
                className="w-11 h-11 object-cover rounded-lg border-2 border-white/20 group-hover:border-blue-400/50 transition-colors"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-extrabold" data-testid="footer-logo">Yuva Lab</span>
                <span className="text-[10px] text-blue-300/80 font-medium tracking-widest uppercase">Clinical Laboratory</span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed mb-6" data-testid="footer-description">
              Trusted diagnostic centre in Jalandhar since 2007 — delivering accurate, fast results with care and precision.
            </p>

            {/* Contact quick-access */}
            <div className="space-y-2.5">
              <a href="tel:+919888772209" className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors group">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #1565c0, #42a5f5)" }}>
                  <Phone className="w-3.5 h-3.5 text-white" />
                </span>
                +91-9888772209
              </a>
              <a href="mailto:yuvalab24@gmail.com" className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-white transition-colors group">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)" }}>
                  <Mail className="w-3.5 h-3.5 text-white" />
                </span>
                yuvalab24@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-300">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}>
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="leading-snug">Kalgidhar Avenue, Mithapur<br />Jalandhar, Punjab</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-5" data-testid="footer-quick-links-title">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                    data-testid={`footer-link-${l.name.toLowerCase().replace(" ", "-")}`}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-200" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Pages */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-5" data-testid="footer-services-title">
              Popular Services
            </h3>
            <ul className="space-y-2.5">
              {landingPages.map((l) => (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-200" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-5" data-testid="footer-contact-title">
              Working Hours
            </h3>
            <div className="space-y-3" data-testid="footer-contact-info">
              {[
                { icon: Clock, label: "Mon – Sat", value: "7:00 AM – 8:00 PM" },
                { icon: Clock, label: "Sunday", value: "8:00 AM – 6:00 PM" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400">{label}</div>
                    <div className="text-sm text-white font-medium">{value}</div>
                  </div>
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-300 px-3 py-2 rounded-xl text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Home Collection Available
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 text-blue-300 px-3 py-2 rounded-xl text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                Reports in 4 Hours
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left" data-testid="footer-copyright">
              &copy; 2026 Yuva Lab. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-privacy">Privacy Policy</Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-terms">Terms of Service</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors" data-testid="footer-contact">Contact Us</Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              Designed & built by{" "}
              <a
                href="https://www.google.com/search?q=Pixocraft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                data-testid="footer-pixocraft-link"
              >
                Pixocraft
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

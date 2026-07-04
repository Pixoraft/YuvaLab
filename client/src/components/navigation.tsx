import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Tests", path: "/tests" },
    { name: "Packages", path: "/packages" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav
      className="fixed w-full top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(16px)",
        boxShadow: scrolled ? "0 2px 24px rgba(21,101,192,0.10)" : "none",
        borderBottom: scrolled ? "1px solid rgba(21,101,192,0.08)" : "1px solid rgba(21,101,192,0.05)",
      }}
      data-testid="navigation"
    >
      {/* Top accent line - only visible when not scrolled */}
      <div
        className="h-0.5 w-full transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, #1565c0, #42a5f5, #1565c0)",
          opacity: scrolled ? 0 : 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" data-testid="logo-link">
            <div className="relative">
              <img
                src="/newlogo.jpeg"
                alt="Yuva Lab Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 object-cover rounded-lg border-2 transition-all duration-300 group-hover:border-blue-400/50"
                style={{ borderColor: "rgba(21,101,192,0.2)" }}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors">
                Yuva Lab
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: "#1565c0" }}>
                Clinical Laboratory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50/70"
                }`}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#1565c0" }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919888772209"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-blue-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">+91-9888772209</span>
            </a>
            <Link href="/tests">
              <Button
                className="px-5 py-2 rounded-xl font-bold text-white border-0 text-sm hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #1565c0, #42a5f5)" }}
                data-testid="book-now-button"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile: Phone Icon + Menu */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href="tel:+919888772209"
              aria-label="Call Yuva Lab"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white shadow-md hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg, #1565c0, #42a5f5)" }}
              data-testid="mobile-phone-call"
            >
              <Phone className="h-4 w-4" />
            </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="mobile-menu-trigger">
                <Menu className="h-5 w-5 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0" data-testid="mobile-menu">
              {/* Mobile menu header */}
              <div className="p-5 border-b border-gray-100" style={{ background: "linear-gradient(135deg, #f0f7ff, #ffffff)" }}>
                <div className="flex items-center gap-3">
                  <img
                    src="/newlogo.jpeg"
                    alt="Yuva Lab Logo"
                    className="w-10 h-10 object-cover rounded-lg border-2"
                    style={{ borderColor: "rgba(21,101,192,0.2)" }}
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="font-extrabold text-gray-900">Yuva Lab</span>
                    <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "#1565c0" }}>
                      Clinical Laboratory
                    </span>
                  </div>
                </div>
              </div>

              {/* Nav items */}
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                  >
                    {isActive(item.path) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    )}
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-4 pt-0 border-t border-gray-100 mt-2">
                <Link href="/tests" onClick={() => setIsOpen(false)}>
                  <Button
                    className="w-full py-3 rounded-xl font-bold text-white border-0 hover:scale-[1.02] transition-transform shadow-md"
                    style={{ background: "linear-gradient(135deg, #1565c0, #42a5f5)" }}
                    data-testid="mobile-book-now-button"
                  >
                    Book Test Now
                  </Button>
                </Link>
                <a
                  href="tel:+919888772209"
                  className="flex items-center justify-center gap-2 mt-3 py-2.5 rounded-xl text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91-9888772209
                </a>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

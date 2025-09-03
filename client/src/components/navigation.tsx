import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur border-b border-border" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3" data-testid="logo-link">
            <img 
              src="/newlogo.jpeg" 
              alt="Yuva Lab Logo" 
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-cover rounded-full border-2 border-primary/20"
            />
            <span className="text-base sm:text-lg md:text-xl font-bold text-foreground">Yuva Lab</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`font-medium transition-colors text-sm xl:text-base ${
                  isActive(item.path) 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link href="/tests">
              <Button 
                className="bg-primary text-primary-foreground px-4 xl:px-6 py-2 rounded-xl font-medium hover:bg-primary/90 transition-colors text-sm xl:text-base"
                data-testid="book-now-button"
              >
                Book Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden p-1.5" data-testid="mobile-menu-trigger">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 sm:w-72" data-testid="mobile-menu">
              <div className="flex flex-col space-y-1 mt-4">
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <img 
                      src="/newlogo.jpeg" 
                      alt="Yuva Lab Logo" 
                      className="w-6 h-6 object-cover rounded-full border-2 border-primary/20"
                    />
                    <span className="text-lg font-bold text-foreground">Yuva Lab</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Medical Diagnostics</p>
                </div>
                
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path}
                    className={`font-medium py-2.5 px-3 rounded-lg transition-colors text-sm ${
                      isActive(item.path) 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 mt-4 border-t border-border">
                  <Link href="/tests">
                    <Button 
                      className="w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-colors text-sm h-10"
                      data-testid="mobile-book-now-button"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Test Now
                    </Button>
                  </Link>
                  
                  <div className="mt-3 text-center">
                    <p className="text-xs text-muted-foreground">Call us</p>
                    <a href="tel:+919888772209" className="text-primary font-semibold text-sm">
                      +91-9888772209
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

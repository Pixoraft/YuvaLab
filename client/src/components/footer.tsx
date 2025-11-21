import { Link } from "wouter";

const Footer = () => {
  // No social media links needed

  return (
    <footer className="bg-foreground text-white py-8 sm:py-10 lg:py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/newlogo.jpeg" 
                alt="Yuva Lab Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-white/20"
              />
              <span className="text-lg sm:text-xl font-bold" data-testid="footer-logo">Yuva Lab</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed" data-testid="footer-description">
              Trusted medical diagnostics in Jalandhar with advanced technology and accurate results for better healthcare decisions.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-300">
                Email: <a href="mailto:yuvalab24@gmail.com" className="text-blue-400 hover:text-blue-300">yuvalab24@gmail.com</a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" data-testid="footer-quick-links-title">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-services">Services</Link></li>
              <li><Link href="/packages" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-packages">Health Packages</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-contact">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-blog">Blog</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" data-testid="footer-services-title">Services</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-service-blood-tests">Blood Tests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-service-health-packages">Health Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-service-hormone-tests">Hormone Tests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-service-genetic-testing">Genetic Testing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-service-home-collection">Home Collection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-service-emergency">Emergency Testing</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" data-testid="footer-contact-title">Contact Info</h3>
            <div className="space-y-1 sm:space-y-2 text-gray-300" data-testid="footer-contact-info">
              <p>17, Kalgidhar Avenue, White Diamond Road</p>
              <p>Behind Govt. Sen. Sec. School, Mithapur</p>
              <p>Jalandhar, Punjab-144022</p>
              <p>Phone: +91-9888772209</p>
              <p>Phone: +91-7009090378</p>
              <p>Email: yuvalab24@gmail.com</p>
              <p>Hours: Mon-Sat 7AM-8PM (Daytime)</p>
              <p>Sunday: 8AM-6PM (Daytime)</p>
              <p>Home Collection: Available in Jalandhar</p>
              <p>Reports: Delivered in 4 Hours</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left" data-testid="footer-copyright">
              &copy; 2025 Yuva Lab. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 mt-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-privacy">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-terms">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-cookies">Cookie Policy</a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
               By{" "}
              <a 
                href="https://www.google.com/search?q=Pixocraft" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
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

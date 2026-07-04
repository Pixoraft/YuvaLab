import { Button } from "@/components/ui/button";
import { Sparkles, CloudRain, Snowflake, Sun, Flower } from "lucide-react";
import { getCurrentSeasonalConfig } from "@/config/seasonal-config";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SeasonalPromotion = () => {
  const ref = useScrollReveal();
  const config = getCurrentSeasonalConfig();
  
  // Get the appropriate icon based on season
  const getSeasonIcon = () => {
    switch (config.season.toLowerCase()) {
      case 'winter': return Snowflake;
      case 'summer': return Sun;
      case 'spring': return Flower;
      case 'monsoon':
      default: return CloudRain;
    }
  };
  
  const SeasonIcon = getSeasonIcon();
  
  // Get color classes based on offer colors
  const getOfferColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
      purple: 'text-purple-600',
      yellow: 'text-yellow-600',
      red: 'text-red-600',
      pink: 'text-pink-600'
    };
    return colors[color as keyof typeof colors] || 'text-blue-600';
  };
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden" data-testid="seasonal-promotion-section" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1565c0, transparent)", transform: "translate(30%, -30%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="relative">
            <div className="reveal flex items-center gap-2 mb-4">
              <SeasonIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm bg-blue-50 border border-blue-100 px-3 py-1 rounded-full" data-testid="season-tag">
                {config.season} Special
              </span>
            </div>
            
            <h2 className="reveal delay-100 text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight" data-testid="seasonal-title">
              {config.title}
            </h2>
            
            <p className="reveal delay-200 text-xl text-blue-600 mb-5 font-medium" data-testid="seasonal-subtitle">
              {config.subtitle}
            </p>
            
            <p className="reveal delay-300 text-lg text-gray-600 mb-8 leading-relaxed" data-testid="seasonal-message">
              {config.message}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                data-testid="book-seasonal-test-button"
                onClick={() => {
                  const phone = "919888772209";
                  const message = `Hello! I'm interested in your ${config.season} health package special. Please share more details about the monsoon package offers.`;
                  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book Your Health Check
              </Button>
              
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                  data-testid="query-seasonal-button"
                >
                  Have Questions? Ask Us
                </Button>
              </Link>
            </div>
            
            {/* Floating Promotional Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-lg p-4 text-center shadow-lg" data-testid="seasonal-offer-1">
                <div className={`text-2xl font-bold mb-1 ${getOfferColor(config.offers.primary.color)}`}>
                  {config.offers.primary.text}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{config.offers.primary.value}</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-lg p-4 text-center shadow-lg" data-testid="seasonal-offer-2">
                <div className={`text-2xl font-bold mb-1 ${getOfferColor(config.offers.secondary.color)}`}>
                  {config.offers.secondary.text}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{config.offers.secondary.value}</div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="reveal-right relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={config.image}
                alt={config.imageAlt}
                className="w-full h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                data-testid="seasonal-image"
              />
              
              {/* Overlay with seasonal elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              
              {/* Floating seasonal badge */}
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-full px-4 py-2 shadow-lg" data-testid="seasonal-badge">
                <div className="flex items-center gap-2">
                  <SeasonIcon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">{config.season} 2026</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300 dark:bg-blue-700 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalPromotion;
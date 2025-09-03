import { Button } from "@/components/ui/button";
import { Sparkles, Activity, Shield, Clock } from "lucide-react";
import { Link } from "wouter";
import familyHeroImage from "@/assets/family-hero.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 min-h-screen flex items-center" data-testid="hero-section">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-300/30 rotate-45 animate-float delay-300"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-indigo-300/30 rounded-full animate-float delay-700"></div>
        <div className="absolute top-60 left-1/3 w-5 h-5 bg-blue-200/30 rotate-12 animate-float delay-1000"></div>
        <div className="absolute bottom-48 right-1/4 w-4 h-4 bg-cyan-200/30 rounded-full animate-float delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content Section with 3D effects */}
          <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight" data-testid="hero-title">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  YuvaLab
                </span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-100 font-medium">
                  -Jatinder
                </span>
              </h1>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl rotate-12 opacity-20 animate-pulse"></div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed backdrop-blur-sm bg-white/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10" data-testid="hero-subtitle">
              <Sparkles className="inline-block w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-300" />
              Authorized Collection Centre with 4-hour reporting and home sample collection in Jalandhar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/tests">
                <Button 
                  className="group bg-gradient-to-r from-white to-blue-50 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-white/20 w-full sm:w-auto"
                  data-testid="book-test-button"
                >
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse" />
                  Book Test Now
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  className="group bg-transparent border-2 sm:border-3 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm w-full sm:w-auto"
                  data-testid="view-services-button"
                >
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse" />
                  View Services
                </Button>
              </Link>
            </div>
          </div>
          
          {/* 3D Image Section */}
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative transform hover:scale-105 transition-transform duration-700">
              {/* Main image container with 3D effect */}
              <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
                <img 
                  src={familyHeroImage} 
                  alt="Happy family enjoying quality healthcare - trusted medical services" 
                  className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto transform hover:rotate-1 transition-transform duration-500"
                  data-testid="hero-image"
                />
                
                {/* Floating badges with 3D effect */}
                <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-2xl font-bold text-xs sm:text-sm shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  15+ Years Experience
                </div>
                
                <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-2xl font-bold text-xs sm:text-sm shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  4 Hour Reports
                </div>
              </div>
              
              {/* 3D decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl opacity-30 animate-pulse transform rotate-45"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl opacity-20 animate-pulse delay-700 transform -rotate-12"></div>
            </div>
          </div>
        </div>
        
        {/* Modern 3D Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-24">
          <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center text-white border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl" data-testid="stat-tests">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Activity className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">5000+</div>
            <div className="text-blue-100 font-medium text-sm sm:text-base">Tests Completed</div>
          </div>
          
          <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center text-white border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl" data-testid="stat-accuracy">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">99.9%</div>
            <div className="text-blue-100 font-medium text-sm sm:text-base">Accuracy Rate</div>
          </div>
          
          <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center text-white border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl" data-testid="stat-results">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">4hr</div>
            <div className="text-blue-100 font-medium text-sm sm:text-base">Fast Reports</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

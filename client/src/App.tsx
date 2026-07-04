import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import WhatsAppFloat from "@/components/whatsapp-float";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Tests from "@/pages/tests";
import Packages from "@/pages/packages";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";
import TestDetail from "@/pages/test-detail";
import NotFound from "@/pages/not-found";
import BloodTestJalandhar from "@/pages/landing/blood-test-jalandhar";
import HomeBloodCollectionJalandhar from "@/pages/landing/home-blood-collection-jalandhar";
import FullBodyCheckupJalandhar from "@/pages/landing/full-body-checkup-jalandhar";
import PreventiveHealthCheckupJalandhar from "@/pages/landing/preventive-health-checkup-jalandhar";
import ThyroidTestJalandhar from "@/pages/landing/thyroid-test-jalandhar";
import DiagnosticCentreJalandhar from "@/pages/landing/diagnostic-centre-jalandhar";
import CancerScreeningJalandhar from "@/pages/landing/cancer-screening-jalandhar";
import BloodTestPriceJalandhar from "@/pages/landing/blood-test-price-jalandhar";
import PathologyLabJalandhar from "@/pages/landing/pathology-lab-jalandhar";
import HealthCheckupPackagesJalandhar from "@/pages/landing/health-checkup-packages-jalandhar";
import useScrollToTop from "@/hooks/use-scroll-to-top";
import { useEffect } from "react";

function useRevealObserver() {
  const [location] = useLocation();

  useEffect(() => {
    const SEL = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade";

    const revealEl = (el: HTMLElement) => el.classList.add("revealed");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealEl(entry.target as HTMLElement);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px" }
    );

    const attach = () => {
      document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
        if (el.classList.contains("revealed")) return;
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          revealEl(el);
        } else {
          obs.observe(el);
        }
      });
    };

    attach();
    const t1 = setTimeout(attach, 100);
    const t2 = setTimeout(attach, 500);

    return () => {
      obs.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location]);
}

function Router() {
  useScrollToTop();
  useRevealObserver();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/tests" component={Tests} />
        <Route path="/packages" component={Packages} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/test/:slug" component={TestDetail} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-conditions" component={TermsConditions} />
        <Route path="/blood-test-jalandhar" component={BloodTestJalandhar} />
        <Route path="/home-blood-collection-jalandhar" component={HomeBloodCollectionJalandhar} />
        <Route path="/full-body-checkup-jalandhar" component={FullBodyCheckupJalandhar} />
        <Route path="/preventive-health-checkup-jalandhar" component={PreventiveHealthCheckupJalandhar} />
        <Route path="/thyroid-test-jalandhar" component={ThyroidTestJalandhar} />
        <Route path="/diagnostic-centre-jalandhar" component={DiagnosticCentreJalandhar} />
        <Route path="/cancer-screening-jalandhar" component={CancerScreeningJalandhar} />
        <Route path="/blood-test-price-jalandhar" component={BloodTestPriceJalandhar} />
        <Route path="/pathology-lab-jalandhar" component={PathologyLabJalandhar} />
        <Route path="/health-checkup-packages-jalandhar" component={HealthCheckupPackagesJalandhar} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

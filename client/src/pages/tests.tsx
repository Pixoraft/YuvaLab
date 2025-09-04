import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, FileText, Clock, Home, Star, ChevronDown } from "lucide-react";
import SEOHead from "@/components/seo-head";
import { testsData, getPopularTests } from "@/data/tests-data";

import { TestData } from "@/data/tests-data";

const Tests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopularOnly, setShowPopularOnly] = useState(true);
  const [visibleTests, setVisibleTests] = useState(15);
  const [showLoadMore, setShowLoadMore] = useState(true);

  // Use static test data
  const allTests = testsData;
  const popularTests = getPopularTests();
  const isLoading = false;
  const error = null;

  const handleBookTest = (testName: string, testPrice: number) => {
    const phone = "919888772209";
    const message = `Hello! I would like to book ${testName} (₹${testPrice}) at Yuva Lab. Please confirm availability and home collection.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleContactExpert = () => {
    const phone = "919888772209";
    const message = "Hello! I need help choosing the right medical tests for my health concerns. Can you please guide me?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const categories = Array.from(new Set(allTests.map(test => test.category)));

  const filteredTests = useMemo(() => {
    if (!allTests.length) return [];
    
    let testsToFilter = showPopularOnly ? popularTests : allTests;
    
    if (!searchTerm) return testsToFilter;
    
    return testsToFilter.filter(test =>
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      test.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allTests, popularTests, showPopularOnly]);

  const displayedTests = useMemo(() => {
    return filteredTests.slice(0, visibleTests);
  }, [filteredTests, visibleTests]);

  const hasMoreTests = filteredTests.length > visibleTests;

  const handleLoadMore = () => {
    const newVisible = visibleTests + 15;
    setVisibleTests(newVisible);
    if (newVisible >= filteredTests.length) {
      setShowLoadMore(false);
    }
  };

  // Reset visible tests when search changes
  useMemo(() => {
    setVisibleTests(15);
    setShowLoadMore(true);
  }, [searchTerm, showPopularOnly]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Medical Tests - YuvaLab Diagnostics",
    "description": "500+ medical tests available in Jalandhar including blood tests, hormone tests, health screenings with 4-hour reports and home collection.",
    "url": "https://yuvalab.in/tests",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "YuvaLab Diagnostics",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jalandhar",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      }
    },
    "serviceType": "Medical Laboratory Services",
    "areaServed": "Jalandhar, Punjab"
  };

  return (
    <>
      <SEOHead
        title="Medical Tests Jalandhar | Blood Tests | Lab Tests Near Me | YuvaLab Diagnostics"
        description="500+ medical tests in Jalandhar. Blood tests, CBC, thyroid, diabetes, liver function tests. 4-hour reports, home collection. Book online: +91-9888772209"
        keywords={["medical tests jalandhar", "blood tests jalandhar", "lab tests near me", "pathology tests", "diagnostic tests jalandhar", "CBC test jalandhar", "thyroid test", "diabetes test", "liver function test", "kidney function test", "hormone tests", "vitamin tests", "health tests jalandhar"]}
        canonical="https://yuvalab.in/tests"
        schema={schema}
      />
      <div className="pt-14 sm:pt-16 md:pt-20" data-testid="tests-page">
      <div className="bg-medical-blue text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-testid="tests-page-title">
            Medical Tests
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto" data-testid="tests-page-subtitle">
            Comprehensive diagnostic tests with fast reporting and home collection
          </p>
        </div>
      </div>
      
      {/* Search Section */}
      <div className="py-4 sm:py-6 lg:py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="relative max-w-full sm:max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                type="text"
                placeholder="Search tests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-base sm:text-lg border-2 border-muted focus:border-primary"
                data-testid="search-tests"
              />
            </div>
            
            {/* Popular Tests Toggle */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <Button
                variant={showPopularOnly ? "default" : "outline"}
                onClick={() => setShowPopularOnly(true)}
                className="flex items-center gap-2 w-full sm:w-auto text-sm sm:text-base px-3 sm:px-4 py-2"
                data-testid="show-popular-tests"
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                Popular ({popularTests.length})
              </Button>
              <Button
                variant={!showPopularOnly ? "default" : "outline"}
                onClick={() => setShowPopularOnly(false)}
                className="w-full sm:w-auto text-sm sm:text-base px-3 sm:px-4 py-2"
                data-testid="show-all-tests"
              >
                All Tests ({allTests.length})
              </Button>
            </div>
            
            {searchTerm && (
              <div className="text-center text-muted-foreground">
                Found {filteredTests.length} tests matching "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tests Table */}
      <div className="py-6 sm:py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Loading State */}
          {isLoading && (
            <div className="space-y-4">
              <div className="hidden md:grid md:grid-cols-7 gap-4 p-4 bg-muted/30 rounded-lg font-semibold text-sm">
                <div>Test Name</div>
                <div>Category</div>
                <div>Code</div>
                <div>Sample</div>
                <div>Report Time</div>
                <div>Price</div>
                <div>Action</div>
              </div>
              {[...Array(10)].map((_, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4 border rounded-lg">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-20 hidden md:block" />
                  <Skeleton className="h-6 w-16 hidden md:block" />
                  <Skeleton className="h-6 w-16 hidden md:block" />
                  <Skeleton className="h-6 w-20 hidden md:block" />
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-8 w-24" />
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <div className="text-red-600 text-lg mb-4">
                Failed to load tests data. Please try again.
              </div>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                Reload Page
              </Button>
            </div>
          )}

          {/* Tests Data Container */}
          {!isLoading && !error && (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              {/* Table Header */}
              <div className="hidden md:grid md:grid-cols-7 gap-4 p-4 bg-muted/30 border-b font-semibold text-sm">
                <div>Test Name</div>
                <div>Category</div>
                <div>Code</div>
                <div>Sample</div>
                <div>Report Time</div>
                <div>Price</div>
                <div>Action</div>
              </div>

              {/* Scrollable Test Container with Fixed Height */}
              <ScrollArea className="h-[500px] sm:h-[600px] w-full">
                <div className="grid gap-2 p-2 sm:p-4">
                  {/* Test Rows */}
                  {displayedTests.map((test) => (
                  <div
                    key={test.id}
                    className="grid grid-cols-1 md:grid-cols-7 gap-3 sm:gap-4 p-3 sm:p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
                    data-testid={`test-row-${test.id}`}
                  >
                    <div className="md:col-span-1">
                      <div className="font-semibold text-card-foreground mb-1 text-sm sm:text-base" data-testid={`test-name-${test.id}`}>
                        {test.name}
                      </div>
                      <div className="md:hidden flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline" className="text-xs px-1.5 py-0.5">{test.category}</Badge>
                        <Badge variant="outline" className="text-xs px-1.5 py-0.5 font-mono">{test.code}</Badge>
                      </div>
                    </div>
                    
                    <div className="hidden md:block">
                      <Badge variant="outline" className="text-xs">{test.category}</Badge>
                    </div>
                    
                    <div className="hidden md:block">
                      <Badge variant="outline" className="text-xs font-mono">{test.code}</Badge>
                    </div>
                    
                    <div className="hidden md:flex items-center">
                      <FileText className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{test.sampleType}</span>
                    </div>
                    
                    <div className="hidden md:flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-primary" />
                      <span className="text-sm">{test.reportTime}</span>
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-base sm:text-lg font-bold text-primary">₹{test.price}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground line-through">₹{test.originalPrice}</span>
                      </div>
                      <div className="md:hidden flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          <span className="truncate">{test.sampleType}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          <span>{test.reportTime}</span>
                        </div>
                        {test.homeCollection && (
                          <div className="flex items-center">
                            <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            Home
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
                        data-testid={`book-test-${test.id}`}
                        onClick={() => handleBookTest(test.name, test.price)}
                      >
                        Book Test
                      </Button>
                      {test.homeCollection && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs justify-center py-0.5">
                          <Home className="w-3 h-3 mr-1" />
                          Home Collection
                        </Badge>
                      )}
                    </div>
                  </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Load More Button */}
              {hasMoreTests && showLoadMore && (
                <div className="p-4 border-t bg-muted/10 text-center">
                  <Button
                    onClick={handleLoadMore}
                    variant="outline"
                    className="px-8 py-2 hover:bg-primary hover:text-white transition-colors"
                    data-testid="load-more-tests"
                  >
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Load More Tests ({filteredTests.length - visibleTests} remaining)
                  </Button>
                </div>
              )}

              {filteredTests.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-muted-foreground text-lg">
                    No tests found matching your search criteria.
                  </div>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSearchTerm("")}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-8 sm:py-12 lg:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">Need Help Choosing Tests?</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8">
            Our medical experts can help you select the right tests based on your health concerns and symptoms.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center">
            <Button 
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-primary/90 text-sm sm:text-base"
              data-testid="contact-expert-button"
              onClick={handleContactExpert}
            >
              Contact Our Experts
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-primary hover:text-white text-sm sm:text-base"
              data-testid="whatsapp-consultation"
              onClick={handleContactExpert}
            >
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Tests;
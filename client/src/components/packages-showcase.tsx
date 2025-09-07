import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const PackagesShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeverPanelModalOpen, setIsFeverPanelModalOpen] = useState(false);
  const [isFullBodyModalOpen, setIsFullBodyModalOpen] = useState(false);
  
  const handleBookPackage = (
    packageTitle: string,
    packageCode: string,
    packagePrice: number,
  ) => {
    const phone = "919888772209";
    const message = `Hello! I would like to book ${packageTitle} (${packageCode}) - ₹${packagePrice} at YuvaLab. Please confirm availability and home collection.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  
  const ylPackageDetails = [
    {
      name: "YL 1.0",
      discountedPrice: 1000,
      originalPrice: 1800,
      tests: [
        "Glucose",
        "Lipid Profile",
        "Liver Profile",
        "Kidney Basic Profile",
        "Electrolytes",
        "Calcium",
        "T3 T4 TSH",
        "Complete Urine Examination",
        "Complete Blood Picture"
      ]
    },
    {
      name: "YL 2.0",
      discountedPrice: 1200,
      originalPrice: 2600,
      tests: [
        "Glucose",
        "Lipid Profile",
        "Liver Profile",
        "Kidney Basic Profile",
        "Electrolytes",
        "Calcium",
        "T3 T4 TSH",
        "Complete Urine Examination",
        "Complete Blood Picture",
        "HBA1C",
        "ESR",
        "Iron Profile"
      ]
    },
    {
      name: "YL 3.0",
      discountedPrice: 2200,
      originalPrice: 3500,
      tests: [
        "Glucose",
        "Lipid Profile",
        "Liver Profile",
        "Kidney Basic Profile",
        "Electrolytes",
        "Calcium",
        "T3 T4 TSH",
        "Complete Urine Examination",
        "Complete Blood Picture",
        "HBA1C",
        "ESR",
        "Iron Profile",
        "Vitamin D",
        "Vitamin B12",
        "RA Factor",
        "Testo Total"
      ]
    },
    {
      name: "YL 4.0",
      discountedPrice: 2500,
      originalPrice: 4000,
      tests: [
        "Glucose",
        "Lipid Profile",
        "Liver Profile",
        "Kidney Basic Profile",
        "Electrolytes",
        "Calcium",
        "T3 T4 TSH",
        "Complete Urine Examination",
        "Complete Blood Picture",
        "HBA1C",
        "ESR",
        "Iron Profile",
        "Vitamin D",
        "Vitamin B12",
        "RA Factor",
        "Testo Total",
        "CA 15.3/PSA Total"
      ]
    },
    {
      name: "YL 5.0",
      discountedPrice: 2600,
      originalPrice: 4599,
      tests: [
        "Glucose",
        "Lipid Profile",
        "Liver Profile",
        "Kidney Basic Profile",
        "Electrolytes",
        "Calcium",
        "T3 T4 TSH",
        "Complete Urine Examination",
        "Complete Blood Picture",
        "HBA1C",
        "ESR",
        "Iron Profile",
        "Lipase",
        "Amylase"
      ]
    }
  ];
  
  const feverPanelDetails = [
    {
      name: "Fever Panel 1",
      discountedPrice: 299,
      originalPrice: 399,
      tests: [
        "CBC (Complete Blood Count)",
        "Widal Test",
        "Urine Examination"
      ]
    },
    {
      name: "Fever Panel 2",
      discountedPrice: 499,
      originalPrice: 700,
      tests: [
        "CBC (Complete Blood Count)",
        "Widal Test",
        "MP (Malaria Parasite Test)",
        "Urine Examination"
      ]
    },
    {
      name: "Fever Panel 3 (Dengue/Fever Panel)",
      discountedPrice: 1499,
      originalPrice: 2499,
      tests: [
        "CBC (Complete Blood Count)",
        "LFT (Liver Function Test)",
        "Widal Test",
        "MP (Malaria Parasite Test)",
        "Dengue",
        "CRP (C-Reactive Protein)",
        "Urine Examination"
      ]
    },
    {
      name: "All Fever Panel (Fever Panel 4)",
      discountedPrice: null,
      originalPrice: null,
      tests: [
        "CBC (Complete Blood Count)",
        "ESR (Erythrocyte Sedimentation Rate)",
        "Contact for pricing"
      ]
    }
  ];

  const packages = [
    {
      id: "mfpa",
      title: "Monsoon Fever Panel",
      code: "MFPA",
      description:
        "Comprehensive fever panel with fast 4-hour reporting and home collection",
      tests: 32,
      originalPrice: 1050,
      currentPrice: 600,
      discount: 24,
      popular: false,
      features: [
        "CBC",
        "Widal",
        "MP",
        "Typhoid",
        "Urine Examination",
      ],
      reportTime: "4 Hours",
    },
    {
      id: "fepad",
      title: "Fever Panel Advanced",
      code: "FEPAD",
      description:
        "Advanced fever analysis with comprehensive liver profile included",
      tests: 36,
      originalPrice: 2200,
      currentPrice: 1499,
      discount: 32,
      popular: true,
      features: [
        "CBC",
        "Widal",
        "MP",
        "LT_T",
        "CPP",
        "Dengue",
        "MSG",
        "IgG",
        "IgM",
      ],
      reportTime: "Same Day",
    },
    {
      id: "yl",
      title: "YL Packages",
      code: "YL",
      description:
        "Complete health checkup packages with multiple test options",
      tests: "63-69",
      originalPrice: 4599,
      currentPrice: 1000,
      discount: 78,
      popular: false,
      features: [
        "5 Package Options",
        "T3 T4 TSH",
        "Liver & Kidney Profile",
        "Lipid Profile",
        "Complete Blood Picture",
      ],
      reportTime: "24 Hours",
      subPackages: [
        { name: "YL 1.0", tests: 9, price: 1000, originalPrice: 1800 },
        { name: "YL 2.0", tests: 12, price: 1200, originalPrice: 2600 },
        { name: "YL 3.0", tests: 16, price: 2200, originalPrice: 3500 },
        { name: "YL 4.0", tests: 17, price: 2500, originalPrice: 4000 },
        { name: "YL 5.0", tests: 13, price: 2600, originalPrice: 4599 },
      ],
    },
    {
      id: "fbaf",
      title: "Full Body Advance MAP99* FEMALE",
      code: "MAP99",
      description:
        "Comprehensive full body health checkup specially designed for women",
      tests: 20,
      originalPrice: 14000,
      currentPrice: 5500,
      discount: 61,
      popular: true,
      features: [
        "Glucose Fasting & PP",
        "CA 125 Ovarian Cancer Marker",
        "Vitamin B12 & D Total",
        "Iron Profile",
        "Thyroid Profile",
      ],
      reportTime: "Same Day",
      fullTestList: [
        "Glucose - Postprandial",
        "Albumin/Creatinine Ratio",
        "Post Prandial Urine Glucose",
        "IRON PROFILE",
        "Vitamin - B12 & 25-Hydroxy Vitamin D Total (D2 & D3)",
        "Zin, CK, Testo, APO-A1, APO-B",
        "Glucose - Fasting",
        "CA 125 Ovarian Cancer marker",
        "Kidney Basic screen - Profiles",
        "Fasting Urine Glucose",
        "Cal, Phos, Amy, Lip, LDH, hsCRP, Ferr",
        "Homocysteine",
        "Liver Function Profile",
        "Thyroid Profile-I",
        "Lipid Profile",
        "Complete Urine Analysis (CUE)",
        "Complete Blood Count (CBC)",
        "Glycosylated Hemoglobin (GHb/HBA1c)"
      ]
    },
  ];

  return (
    <section
      className="py-8 sm:py-12 lg:py-16 bg-background"
      data-testid="packages-showcase-section"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4"
            data-testid="packages-title"
          >
            Complete Health Packages
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="packages-subtitle"
          >
            Comprehensive health checkup packages tailored for your specific
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-card rounded-xl shadow-lg hover:shadow-xl border relative h-full flex flex-col transform hover:scale-105 transition-all duration-300 ${
                pkg.popular
                  ? "border-2 border-primary bg-gradient-to-br from-blue-50 to-white"
                  : "border-border"
              }`}
              data-testid={`package-card-${pkg.id}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="absolute top-2 right-2 z-10">
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold shadow-md px-2 py-1"
                >
                  {pkg.discount}% OFF
                </Badge>
              </div>
              {pkg.reportTime && (
                <div className="absolute top-2 left-2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold shadow-md px-2 py-1">
                    {pkg.reportTime}
                  </Badge>
                </div>
              )}

              {/* Card Content - Flex grow to push button to bottom */}
              <div
                className={`p-4 sm:p-5 lg:p-6 flex-1 flex flex-col ${pkg.popular ? "pt-8 sm:pt-10" : "pt-6 sm:pt-8"}`}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <h3
                      className="text-lg sm:text-xl font-bold text-card-foreground leading-tight"
                      data-testid={`package-title-${pkg.id}`}
                    >
                      {pkg.title}
                    </h3>
                    {pkg.code && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-semibold">
                        {pkg.code}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-muted-foreground mb-3 text-sm sm:text-base leading-relaxed"
                    data-testid={`package-description-${pkg.id}`}
                  >
                    {pkg.description}
                  </p>
                  <div
                    className="text-sm sm:text-base text-primary font-semibold mb-4"
                    data-testid={`package-tests-${pkg.id}`}
                  >
                    {pkg.tests} Tests Included
                  </div>

                  {/* Package Features */}
                  {pkg.features && pkg.id === "mfpa" && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-semibold text-primary">
                          Test Options:
                        </h4>
                        <Button
                          onClick={() => setIsFeverPanelModalOpen(true)}
                          variant="outline"
                          size="sm"
                          className="text-xs px-2 py-1 h-6"
                        >
                          More Details
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Package Features for Full Body Advance */}
                  {pkg.features && pkg.id === "fbaf" && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-semibold text-primary">
                          Key Tests:
                        </h4>
                        <Button
                          onClick={() => setIsFullBodyModalOpen(true)}
                          variant="outline"
                          size="sm"
                          className="text-xs px-2 py-1 h-6"
                        >
                          View All Tests
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Package Features for other packages */}
                  {pkg.features && pkg.id !== "mfpa" && pkg.id !== "fbaf" && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sub-packages for YL Packages */}
                  {pkg.subPackages && pkg.id === "yl" && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-muted/30 to-muted/50 rounded-lg border border-muted">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-semibold text-primary">
                          Package Options:
                        </h4>
                        <Button
                          onClick={() => setIsModalOpen(true)}
                          variant="outline"
                          size="sm"
                          className="text-xs px-2 py-1 h-6"
                        >
                          More Details
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {pkg.subPackages[0].name} (Starting from ₹{Math.min(...pkg.subPackages.map(p => p.price)).toLocaleString()})
                      </div>
                    </div>
                  )}
                  {/* Sub-packages for other packages */}
                  {pkg.subPackages && pkg.id !== "yl" && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-muted/30 to-muted/50 rounded-lg border border-muted">
                      <h4 className="text-sm font-semibold mb-2 text-primary">
                        Package Options:
                      </h4>
                      {pkg.subPackages.map((subPkg, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center text-sm mb-1"
                        >
                          <span className="text-muted-foreground">
                            {subPkg.name} ({subPkg.tests} tests)
                          </span>
                          <span className="font-bold text-primary">
                            ₹{subPkg.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Section - Flex grow to push button down */}
                <div className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center space-x-2 mb-4">
                    {pkg.subPackages ? (
                      <>
                        <span
                          className="text-2xl font-bold text-primary"
                          data-testid={`package-price-${pkg.id}`}
                        >
                          From ₹
                          {Math.min(
                            ...pkg.subPackages.map((p) => p.price),
                          ).toLocaleString()}
                        </span>
                        <span
                          className="text-lg text-muted-foreground line-through"
                          data-testid={`package-original-price-${pkg.id}`}
                        >
                          ₹{pkg.subPackages[0].originalPrice.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <>
                        <span
                          className="text-2xl font-bold text-primary"
                          data-testid={`package-price-${pkg.id}`}
                        >
                          ₹{pkg.currentPrice.toLocaleString()}
                        </span>
                        <span
                          className="text-lg text-muted-foreground line-through"
                          data-testid={`package-original-price-${pkg.id}`}
                        >
                          ₹{pkg.originalPrice.toLocaleString()}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Button at bottom of card */}
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 sm:py-4 rounded-lg font-bold hover:from-primary/90 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    data-testid={`package-book-button-${pkg.id}`}
                    onClick={() =>
                      handleBookPackage(
                        pkg.title,
                        pkg.code || "Package",
                        pkg.subPackages
                          ? Math.min(...pkg.subPackages.map((p) => p.price))
                          : pkg.currentPrice,
                      )
                    }
                  >
                    Book {pkg.code || "Package"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* YL Packages Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary mb-2">YL Packages - Complete Details</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Choose from our comprehensive health checkup packages
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 mt-4">
            {ylPackageDetails.map((pkg, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50/50 to-white">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{pkg.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xl font-bold text-green-600">₹{pkg.discountedPrice.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {Math.round((1 - pkg.discountedPrice/pkg.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      handleBookPackage(pkg.name, "YL", pkg.discountedPrice);
                      setIsModalOpen(false);
                    }}
                    className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-700"
                    size="sm"
                  >
                    Book Now
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {pkg.tests.map((test, testIndex) => (
                    <div key={testIndex} className="flex items-center gap-2 text-sm p-2 bg-white/60 rounded border">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{test}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Fever Panel Details Modal */}
      <Dialog open={isFeverPanelModalOpen} onOpenChange={setIsFeverPanelModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary mb-2">Fever Panel Options - Complete Details</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Choose from our comprehensive fever panel packages
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 mt-4">
            {feverPanelDetails.map((pkg, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-red-50/50 to-white">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{pkg.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {pkg.discountedPrice && pkg.originalPrice ? (
                        <>
                          <span className="text-xl font-bold text-green-600">₹{pkg.discountedPrice.toLocaleString()}</span>
                          <span className="text-sm text-muted-foreground line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            {Math.round((1 - pkg.discountedPrice/pkg.originalPrice) * 100)}% OFF
                          </Badge>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-blue-600">Contact for Pricing</span>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      if (pkg.discountedPrice) {
                        handleBookPackage(pkg.name, "FEVER", pkg.discountedPrice);
                      } else {
                        handleBookPackage(pkg.name, "FEVER", 0);
                      }
                      setIsFeverPanelModalOpen(false);
                    }}
                    className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-700"
                    size="sm"
                  >
                    Book Now
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {pkg.tests.map((test, testIndex) => (
                    <div key={testIndex} className="flex items-center gap-2 text-sm p-2 bg-white/60 rounded border">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{test}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Full Body Advance Details Modal */}
      <Dialog open={isFullBodyModalOpen} onOpenChange={setIsFullBodyModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary mb-2">Full Body Advance MAP99* FEMALE - Complete Test List</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Comprehensive health checkup specially designed for women
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="border rounded-lg p-6 bg-gradient-to-r from-pink-50/50 to-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">Full Body Advance MAP99* FEMALE</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-bold text-green-600">₹5,500</span>
                    <span className="text-lg text-muted-foreground line-through">₹14,000</span>
                    <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                      61% OFF
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    20+ Comprehensive Tests | Same Day Reports
                  </div>
                </div>
                <Button
                  onClick={() => {
                    handleBookPackage("Full Body Advance MAP99* FEMALE", "MAP99", 5500);
                    setIsFullBodyModalOpen(false);
                  }}
                  className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-700"
                  size="lg"
                >
                  Book Now
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packages.find(pkg => pkg.id === "fbaf")?.fullTestList?.map((test, testIndex) => (
                  <div key={testIndex} className="flex items-center gap-3 text-sm p-3 bg-white/80 rounded-lg border border-pink-200/50">
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{test}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Package Highlights:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Specially designed comprehensive health checkup for women</li>
                  <li>• Includes CA 125 Ovarian Cancer marker screening</li>
                  <li>• Complete vitamin profile (B12 & Vitamin D)</li>
                  <li>• Advanced cardiac and metabolic markers</li>
                  <li>• Same day reporting with expert consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PackagesShowcase;

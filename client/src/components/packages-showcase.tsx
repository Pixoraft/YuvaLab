import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PackagesShowcase = () => {
  const handleBookPackage = (
    packageTitle: string,
    packageCode: string,
    packagePrice: number,
  ) => {
    const phone = "919888772209";
    const message = `Hello! I would like to book ${packageTitle} (${packageCode}) - ₹${packagePrice} at YuvaLab - LARC Jatinder. Please confirm availability and home collection.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const packages = [
    {
      id: "mfpa",
      title: "Monsoon Fever Panel Advanced",
      code: "MFPA",
      description:
        "Comprehensive fever panel with fast 4-hour reporting and home collection",
      tests: 32,
      originalPrice: 3999,
      currentPrice: 2899,
      discount: 28,
      popular: false,
      features: [
        "4hr Reports",
        "Dengue NS1 Antigen",
        "Malarial Antigen",
        "CBC (24 parameters)",
        "Home Collection",
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
      originalPrice: 4999,
      currentPrice: 3599,
      discount: 28,
      popular: true,
      features: [
        "Dengue (IgG, IgM)",
        "Typhoid Test",
        "Liver Profile",
        "C-reactive Protein",
        "Home Collection",
      ],
      reportTime: "Same Day",
    },
    {
      id: "fateh",
      title: "GD Fateh Packages",
      code: "YL FATEH",
      description:
        "Complete health checkup packages with multiple test options",
      tests: "63-69",
      originalPrice: 2999,
      currentPrice: 1500,
      discount: 50,
      popular: false,
      features: [
        "3 Package Options",
        "Thyroid Profile",
        "Liver & Kidney Profile",
        "Lipid Profile",
        "Iron Studies",
      ],
      reportTime: "24 Hours",
      subPackages: [
        { name: "YL Fateh 1.1", tests: 63, price: 1000, originalPrice: 1800 },
        { name: "YL Fateh 1.2", tests: 67, price: 1500, originalPrice: 2200 },
        { name: "YL Fateh 1.3", tests: 69, price: 2000, originalPrice: 2999 },
      ],
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
                  {pkg.features && (
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

                  {/* Sub-packages for Fateh */}
                  {pkg.subPackages && (
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
    </section>
  );
};

export default PackagesShowcase;

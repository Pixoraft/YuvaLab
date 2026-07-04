import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Package, FlaskConical, Clock, CheckCircle, Tag, Flame, Sparkles } from "lucide-react";
import { allergyPanelGroups, allergyPanelTotal } from "@/data/allergy-panel";

const PackagesShowcase = () => {
  const ref = useScrollReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeverPanelModalOpen, setIsFeverPanelModalOpen] = useState(false);
  const [isFullBodyModalOpen, setIsFullBodyModalOpen] = useState(false);
  const [isFullBodyMaleModalOpen, setIsFullBodyMaleModalOpen] = useState(false);
  const [isAllergyModalOpen, setIsAllergyModalOpen] = useState(false);
  
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
        "Vitamin B12"
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
      discountedPrice: 2900,
      originalPrice: 4350,
      tests: [
        "CBC (Complete Blood Count)",
        "ESR (Erythrocyte Sedimentation Rate)",
        "Widal (Test for Typhoid Fever)",
        "MP (Malaria Parasite Test)",
        "Typhidot (Test for Typhoid Fever)",
        "Dengue NS-1 (Test for Dengue Virus)",
        "Dengue IgM/IgG (Tests for Dengue Antibodies IgM and IgG)",
        "Chikungunya (Test for Chikungunya Virus)",
        "LFT (Liver Function Test)",
        "RFT (Renal Function Test)",
        "Urine (Urine Routine Examination)",
        "CRP (C-Reactive Protein Test)"
      ]
    }
  ];

  const packages = [
    {
      id: "allergy280",
      title: "Allergy Panel Comprehensive",
      code: "ALG280",
      description:
        "Complete 280-allergen IgE panel — food, pollens, dust, mites, animals, drugs and more",
      tests: allergyPanelTotal,
      originalPrice: 12000,
      currentPrice: 6500,
      discount: 46,
      popular: true,
      features: [
        "Total IgE (Serum)",
        "Food Veg & Non-Veg Allergens",
        "Pollens & Inhalants",
        "Drugs Panel (EIA)",
        "Dust, Mites & Dander",
      ],
      reportTime: "5-7 Days",
    },
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
    {
      id: "fbam",
      title: "Full Body Advance MAP99* MALE",
      code: "MAP99",
      description:
        "Comprehensive full body health checkup specially designed for men",
      tests: 20,
      originalPrice: 14000,
      currentPrice: 5500,
      discount: 61,
      popular: true,
      features: [
        "Glucose Fasting & PP",
        "PSA Total (Prostate Cancer Marker)",
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
        "Prostate Specific Antigen, PSA Total",
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
      className="py-14 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f8faff 0%, #ffffff 50%, #f0f7ff 100%)" }}
      data-testid="packages-showcase-section"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #1565c0 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <Package className="w-4 h-4" />
            Best Value Packages in Jalandhar
          </div>
          <h2
            className="reveal delay-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4"
            data-testid="packages-title"
          >
            Complete{" "}
            <span style={{ background: "linear-gradient(90deg, #1565c0, #42a5f5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Health Packages
            </span>
          </h2>
          <p
            className="reveal delay-200 text-base sm:text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto"
            data-testid="packages-subtitle"
          >
            Comprehensive <strong>health checkup packages in Jalandhar</strong> with free home collection, fast reports &amp; affordable pricing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`card-enter group relative h-full flex flex-col rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${pkg.popular ? "" : "overflow-hidden"} ${
                pkg.popular
                  ? "border-blue-400 shadow-xl bg-gradient-to-br from-blue-50 via-white to-indigo-50"
                  : "border-gray-100 shadow-md bg-white hover:border-blue-200"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              data-testid={`package-card-${pkg.id}`}
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full rounded-t-2xl ${pkg.popular ? "bg-gradient-to-r from-blue-500 to-violet-500" : "bg-gradient-to-r from-blue-400 to-blue-600"}`} />

              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-1 rounded-full text-xs font-black shadow-lg tracking-wide z-20 whitespace-nowrap">
                  <Flame className="w-3.5 h-3.5" />
                  MOST POPULAR
                </div>
              )}
              <div className={`absolute right-3 z-10 ${pkg.popular ? "top-7" : "top-5"}`}>
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-black shadow-md px-2.5 py-1 rounded-xl"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {pkg.discount}% OFF
                </Badge>
              </div>
              {pkg.reportTime && (
                <div className={`absolute left-3 z-10 ${pkg.popular ? "top-7" : "top-5"}`}>
                  <Badge className={`text-white text-xs font-bold shadow-md px-2.5 py-1 rounded-xl ${pkg.popular ? "bg-gradient-to-r from-violet-500 to-blue-600" : "bg-gradient-to-r from-blue-500 to-blue-700"}`}>
                    <Clock className="w-3 h-3 mr-1" />
                    {pkg.reportTime}
                  </Badge>
                </div>
              )}

              {/* Card Content - Flex grow to push button to bottom */}
              <div
                className={`p-5 sm:p-6 flex-1 flex flex-col ${pkg.popular ? "pt-14 sm:pt-16" : "pt-8 sm:pt-9"}`}
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3
                      className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight"
                      data-testid={`package-title-${pkg.id}`}
                    >
                      {pkg.title}
                    </h3>
                    {pkg.code && (
                      <span className="shrink-0 text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-lg font-bold tracking-wide">
                        {pkg.code}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-gray-500 mb-4 text-sm leading-relaxed"
                    data-testid={`package-description-${pkg.id}`}
                  >
                    {pkg.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 text-sm bg-blue-50 text-blue-700 font-bold px-3 py-1.5 rounded-xl mb-4"
                    data-testid={`package-tests-${pkg.id}`}
                  >
                    <FlaskConical className="w-4 h-4" />
                    {pkg.tests} Tests Included
                  </div>

                  {/* Package Features */}
                  {pkg.features && (pkg.id === "mfpa" || pkg.id === "fbaf" || pkg.id === "fbam" || pkg.id === "allergy280") && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2.5">
                        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                          {pkg.id === "mfpa" ? "Test Options:" : "Key Tests:"}
                        </h4>
                        <button
                          onClick={() => {
                            if (pkg.id === "mfpa") setIsFeverPanelModalOpen(true);
                            else if (pkg.id === "fbaf") setIsFullBodyModalOpen(true);
                            else if (pkg.id === "fbam") setIsFullBodyMaleModalOpen(true);
                            else if (pkg.id === "allergy280") setIsAllergyModalOpen(true);
                          }}
                          className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1"
                          data-testid={`more-details-${pkg.id}`}
                        >
                          View all tests →
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <span key={index}
                            className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg font-medium border border-blue-100">
                            <CheckCircle className="w-3 h-3 shrink-0" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Package Features for other packages */}
                  {pkg.features && pkg.id !== "mfpa" && pkg.id !== "fbaf" && pkg.id !== "fbam" && pkg.id !== "allergy280" && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.features.slice(0, 3).map((feature, index) => (
                          <span key={index}
                            className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg font-medium border border-blue-100">
                            <CheckCircle className="w-3 h-3 shrink-0" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sub-packages for YL Packages */}
                  {pkg.subPackages && pkg.id === "yl" && (
                    <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                          Package Options:
                        </h4>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="text-xs text-blue-600 font-semibold hover:underline"
                          data-testid="yl-more-details"
                        >
                          View all →
                        </button>
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {pkg.subPackages[0].name} — Starting from{" "}
                        <span className="text-blue-700 font-bold">₹{Math.min(...pkg.subPackages.map(p => p.price)).toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                  {/* Sub-packages for other packages */}
                  {pkg.subPackages && pkg.id !== "yl" && (
                    <div className="mb-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                        Package Options:
                      </h4>
                      {pkg.subPackages.map((subPkg, index) => (
                        <div key={index} className="flex justify-between items-center text-sm mb-1.5">
                          <span className="text-gray-600">{subPkg.name} ({subPkg.tests} tests)</span>
                          <span className="font-black text-blue-700">₹{subPkg.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Section */}
                <div className="flex-1 flex flex-col justify-end">
                  <div className="flex items-end gap-3 mb-5 pt-4 border-t border-gray-100">
                    {pkg.subPackages ? (
                      <>
                        <span className="text-3xl font-black text-blue-700 leading-none"
                          data-testid={`package-price-${pkg.id}`}>
                          From ₹{Math.min(...pkg.subPackages.map((p) => p.price)).toLocaleString()}
                        </span>
                        <span className="text-base text-gray-400 line-through pb-0.5"
                          data-testid={`package-original-price-${pkg.id}`}>
                          ₹{pkg.subPackages[0].originalPrice.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-3xl font-black text-blue-700 leading-none"
                          data-testid={`package-price-${pkg.id}`}>
                          ₹{pkg.currentPrice.toLocaleString()}
                        </span>
                        <span className="text-base text-gray-400 line-through pb-0.5"
                          data-testid={`package-original-price-${pkg.id}`}>
                          ₹{pkg.originalPrice.toLocaleString()}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Book button */}
                  <button
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-base shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                      pkg.popular
                        ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-blue-200"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-blue-100"
                    }`}
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
                    <Package className="w-4 h-4" />
                    Book via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════ YL PACKAGES SECTION ══════════════ */}
        <div className="mt-20 sm:mt-24" id="yl-packages">
          <div className="text-center mb-12">
            <div className="reveal inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <Package className="w-4 h-4" />
              YL Health Packages
            </div>
            <h2
              className="reveal delay-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4"
              data-testid="yl-packages-title"
            >
              YL{" "}
              <span style={{ background: "linear-gradient(90deg, #4f46e5, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Packages
              </span>
            </h2>
            <p className="reveal delay-200 text-base sm:text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto">
              Choose from our complete YL health checkup options, designed for every need and budget
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {ylPackageDetails.map((ylPkg, idx) => {
              const discount = Math.round((1 - ylPkg.discountedPrice / ylPkg.originalPrice) * 100);
              const isPopular = ylPkg.name === "YL 3.0";
              return (
                <div
                  key={ylPkg.name}
                  className={`card-enter group relative h-full flex flex-col rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${isPopular ? "" : "overflow-hidden"} ${
                    isPopular
                      ? "border-indigo-400 shadow-xl bg-gradient-to-br from-indigo-50 via-white to-blue-50"
                      : "border-gray-100 shadow-md bg-white hover:border-indigo-200"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  data-testid={`yl-package-card-${ylPkg.name.replace(/[\s.]/g, "-")}`}
                >
                  <div className={`h-1.5 w-full rounded-t-2xl ${isPopular ? "bg-gradient-to-r from-indigo-500 to-blue-500" : "bg-gradient-to-r from-indigo-400 to-indigo-600"}`} />

                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-black shadow-lg tracking-wide z-20 whitespace-nowrap">
                      <Flame className="w-3.5 h-3.5" />
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`absolute right-3 z-10 ${isPopular ? "top-7" : "top-5"}`}>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-black shadow-md px-2.5 py-1 rounded-xl"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {discount}% OFF
                    </Badge>
                  </div>
                  <div className={`absolute left-3 z-10 ${isPopular ? "top-7" : "top-5"}`}>
                    <Badge className={`text-white text-xs font-bold shadow-md px-2.5 py-1 rounded-xl ${isPopular ? "bg-gradient-to-r from-indigo-500 to-blue-600" : "bg-gradient-to-r from-blue-500 to-blue-700"}`}>
                      <Clock className="w-3 h-3 mr-1" />
                      24 Hours
                    </Badge>
                  </div>

                  <div className={`p-5 sm:p-6 flex-1 flex flex-col ${isPopular ? "pt-14 sm:pt-16" : "pt-8 sm:pt-9"}`}>
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h3
                          className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight"
                          data-testid={`yl-package-title-${ylPkg.name.replace(/[\s.]/g, "-")}`}
                        >
                          {ylPkg.name}
                        </h3>
                        <span className="shrink-0 text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-lg font-bold tracking-wide">
                          YL
                        </span>
                      </div>
                      <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                        {ylPkg.tests.length} essential tests covering thyroid, liver, kidney, lipid &amp; more
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-sm bg-indigo-50 text-indigo-700 font-bold px-3 py-1.5 rounded-xl mb-4">
                        <FlaskConical className="w-4 h-4" />
                        {ylPkg.tests.length} Tests Included
                      </div>

                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2.5">
                          Key Tests:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {ylPkg.tests.slice(0, 4).map((feature, i) => (
                            <span key={i}
                              className="inline-flex items-center gap-1 text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-lg font-medium border border-indigo-100">
                              <CheckCircle className="w-3 h-3 shrink-0" />
                              {feature}
                            </span>
                          ))}
                          {ylPkg.tests.length > 4 && (
                            <button
                              type="button"
                              onClick={() => setIsModalOpen(true)}
                              className="inline-flex items-center gap-1 text-xs text-indigo-700 font-bold px-2.5 py-1 rounded-lg border border-indigo-300 bg-white hover:bg-indigo-50 hover:border-indigo-500 transition-colors"
                              data-testid={`yl-view-all-${ylPkg.name.replace(/[\s.]/g, "-")}`}
                            >
                              View all {ylPkg.tests.length} tests
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-end">
                      <div className="flex items-end gap-3 mb-5 pt-4 border-t border-gray-100">
                        <span className="text-3xl font-black text-indigo-700 leading-none"
                          data-testid={`yl-package-price-${ylPkg.name.replace(/[\s.]/g, "-")}`}>
                          ₹{ylPkg.discountedPrice.toLocaleString()}
                        </span>
                        <span className="text-base text-gray-400 line-through pb-0.5">
                          ₹{ylPkg.originalPrice.toLocaleString()}
                        </span>
                      </div>

                      <button
                        type="button"
                        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-base shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                          isPopular
                            ? "bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-indigo-200"
                            : "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-indigo-100"
                        }`}
                        data-testid={`yl-package-book-${ylPkg.name.replace(/[\s.]/g, "-")}`}
                        onClick={() => handleBookPackage(ylPkg.name, "YL", ylPkg.discountedPrice)}
                      >
                        <Package className="w-4 h-4" />
                        Book via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
      
      {/* Full Body Advance Male Details Modal */}
      <Dialog open={isFullBodyMaleModalOpen} onOpenChange={setIsFullBodyMaleModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary mb-2">Full Body Advance MAP99* MALE - Complete Test List</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Comprehensive health checkup specially designed for men
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="border rounded-lg p-6 bg-gradient-to-r from-blue-50/50 to-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">Full Body Advance MAP99* MALE</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-bold text-green-600">₹5,500</span>
                    <span className="text-lg text-muted-foreground line-through">₹14,000</span>
                    <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                      61% OFF
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    18+ Comprehensive Tests | Same Day Reports
                  </div>
                </div>
                <Button
                  onClick={() => {
                    handleBookPackage("Full Body Advance MAP99* MALE", "MAP99", 5500);
                    setIsFullBodyMaleModalOpen(false);
                  }}
                  className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-700"
                  size="lg"
                >
                  Book Now
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packages.find(pkg => pkg.id === "fbam")?.fullTestList?.map((test, testIndex) => (
                  <div key={testIndex} className="flex items-center gap-3 text-sm p-3 bg-white/80 rounded-lg border border-blue-200/50">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{test}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Package Highlights:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Specially designed comprehensive health checkup for men</li>
                  <li>• Includes PSA Total (Prostate Cancer) marker screening</li>
                  <li>• Complete vitamin profile (B12 & Vitamin D)</li>
                  <li>• Advanced cardiac and metabolic markers</li>
                  <li>• Same day reporting with expert consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Allergy Panel Comprehensive Modal */}
      <Dialog open={isAllergyModalOpen} onOpenChange={setIsAllergyModalOpen}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-violet-500" />
              Allergy Panel Comprehensive — {allergyPanelTotal}+ Allergens
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Complete IgE-based allergen profile covering food, pollens, dust, mites, animal dander, drugs and environmental triggers.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <div className="border rounded-lg p-5 sm:p-6 bg-gradient-to-r from-violet-50/50 to-white mb-5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">Allergy Panel Comprehensive</h3>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="text-2xl font-bold text-green-600">₹6,500</span>
                    <span className="text-lg text-muted-foreground line-through">₹12,000</span>
                    <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">46% OFF</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {allergyPanelTotal}+ Allergens | Includes Total IgE | Reports in 5–7 days
                  </div>
                </div>
                <Button
                  onClick={() => {
                    handleBookPackage("Allergy Panel Comprehensive", "ALG280", 6500);
                    setIsAllergyModalOpen(false);
                  }}
                  className="bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary/90 hover:to-blue-700"
                  size="lg"
                >
                  Book Now
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {allergyPanelGroups.map((group) => (
                <div key={group.name} data-testid={`allergy-group-${group.name}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-bold text-gray-800">{group.name}</h4>
                    <span className="text-xs font-semibold text-violet-700 bg-violet-100 px-2.5 py-1 rounded-full">
                      {group.items.length} items
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {group.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm p-2 bg-white rounded-md border border-gray-100 hover:border-violet-200 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Good to know:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Single blood sample (serum) — no fasting required</li>
                <li>• Quantitative IgE measurement using CLIA / Enzyme Immunoblot</li>
                <li>• Helps identify allergic asthma, rhinitis, urticaria & food triggers</li>
                <li>• Clinical history sheet recommended for accurate interpretation</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PackagesShowcase;

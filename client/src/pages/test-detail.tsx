import { useMemo } from "react";
import { useParams, Link } from "wouter";
import { testsData } from "@/data/tests-data";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  CalendarCheck,
  Clock,
  FileText,
  Home,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Star,
  FlaskConical,
  BookOpen,
  Shield,
} from "lucide-react";
import { makeSlug } from "@/lib/slug";

function getTestBySlug(slug: string) {
  return testsData.find(
    (t) => makeSlug(t.name) === slug.replace(/-in-jalandhar$/, "")
  );
}

/* ─── Category → meta description template ─── */
function buildMetaDesc(test: ReturnType<typeof getTestBySlug>) {
  if (!test) return "";
  const p = `₹${test.price}`;
  const r = test.reportTime;
  const n = test.name;
  const c = test.category;

  if (c === "Thyroid Tests")
    return `Book ${n} thyroid test in Jalandhar at Yuva Lab – just ${p}. Accurate TSH, T3, T4 results in ${r}. Free home blood collection across Jalandhar. Trusted since 2007. Call +91-9888772209.`;
  if (c === "Liver Tests")
    return `${n} liver test in Jalandhar at Yuva Lab – ${p}. NABL-quality LFT results in ${r}. Free home sample collection. Detect liver disease early. Book now: +91-9888772209.`;
  if (c === "Kidney Tests")
    return `Get ${n} kidney test in Jalandhar at Yuva Lab – ${p}. Accurate KFT results in ${r}. Free home collection. Detect kidney disease early. Call Yuva Lab: +91-9888772209.`;
  if (c === "Diabetes")
    return `Book ${n} diabetes test in Jalandhar at Yuva Lab – ${p}. Fast results in ${r}. Monitor your blood sugar accurately. Free home collection. Call +91-9888772209 now.`;
  if (c === "Hormone Tests")
    return `${n} hormone test in Jalandhar at Yuva Lab – ${p}. Expert hormonal testing with results in ${r}. Free home blood collection. Trusted lab since 2007. Call +91-9888772209.`;
  if (c === "Vitamin Tests")
    return `Book ${n} vitamin test in Jalandhar at Yuva Lab – ${p}. Detect vitamin deficiencies in ${r}. Free home collection. Accurate nutritional testing. Call +91-9888772209.`;
  if (c === "Cardiac Tests")
    return `${n} cardiac test in Jalandhar at Yuva Lab – ${p}. Assess your heart health accurately. Results in ${r}. Free home blood collection. Call Yuva Lab: +91-9888772209.`;
  if (c === "Lipid Profile")
    return `Book ${n} lipid test in Jalandhar at Yuva Lab – ${p}. Check cholesterol and cardiac risk. Results in ${r}. Free home collection. Call +91-9888772209.`;
  if (c === "Iron Studies")
    return `${n} iron test in Jalandhar at Yuva Lab – ${p}. Detect anaemia and iron deficiency. Results in ${r}. Free home sample collection. Call +91-9888772209.`;
  if (c === "Fever Panel")
    return `Book ${n} fever test in Jalandhar at Yuva Lab – ${p}. Rapid diagnosis for dengue, malaria, typhoid & more. Results in ${r}. Home collection available. Call +91-9888772209.`;
  if (c === "Specialized Tests")
    return `${n} specialised diagnostic test at Yuva Lab Jalandhar – ${p}. Advanced testing with results in ${r}. Free home sample collection. Expert pathologists. Call +91-9888772209.`;
  /* Blood Tests, General Tests, Investigation Tests, rest */
  return `Book ${n} in Jalandhar at Yuva Lab – ${p}. ${test.sampleType} sample. Accurate results in ${r}. Free home collection across Jalandhar. Trusted diagnostic lab since 2007. Call +91-9888772209.`;
}

/* ─── Category → title variant ─── */
function buildTitle(test: ReturnType<typeof getTestBySlug>) {
  if (!test) return "";
  const { name, price, category } = test;
  if (category === "Thyroid Tests")
    return `${name} in Jalandhar | Thyroid Test Price ₹${price} | Yuva Lab`;
  if (category === "Liver Tests")
    return `${name} in Jalandhar | Liver Test ₹${price} | Yuva Lab`;
  if (category === "Kidney Tests")
    return `${name} in Jalandhar | Kidney Test ₹${price} | Yuva Lab`;
  if (category === "Diabetes")
    return `${name} in Jalandhar | Diabetes Test ₹${price} | Yuva Lab`;
  if (category === "Hormone Tests")
    return `${name} in Jalandhar | Hormone Test ₹${price} | Yuva Lab`;
  if (category === "Vitamin Tests")
    return `${name} in Jalandhar | Vitamin Test ₹${price} | Yuva Lab`;
  if (category === "Cardiac Tests")
    return `${name} in Jalandhar | Cardiac Test ₹${price} | Yuva Lab`;
  if (category === "Lipid Profile")
    return `${name} in Jalandhar | Cholesterol Test ₹${price} | Yuva Lab`;
  return `${name} in Jalandhar | Price ₹${price} | Yuva Lab`;
}

/* ─── Category → relevant landing page ─── */
const CATEGORY_LANDING: Record<string, { label: string; path: string }> = {
  "Thyroid Tests":     { label: "Thyroid Test in Jalandhar", path: "/thyroid-test-jalandhar" },
  "Liver Tests":       { label: "Diagnostic Centre Jalandhar", path: "/diagnostic-centre-jalandhar" },
  "Kidney Tests":      { label: "Diagnostic Centre Jalandhar", path: "/diagnostic-centre-jalandhar" },
  "Diabetes":          { label: "Full Body Checkup in Jalandhar", path: "/full-body-checkup-jalandhar" },
  "Hormone Tests":     { label: "Preventive Health Checkup", path: "/preventive-health-checkup-jalandhar" },
  "Vitamin Tests":     { label: "Full Body Checkup in Jalandhar", path: "/full-body-checkup-jalandhar" },
  "Cardiac Tests":     { label: "Preventive Health Checkup", path: "/preventive-health-checkup-jalandhar" },
  "Lipid Profile":     { label: "Preventive Health Checkup", path: "/preventive-health-checkup-jalandhar" },
  "Specialized Tests": { label: "Pathology Lab Jalandhar", path: "/pathology-lab-jalandhar" },
  "Blood Tests":       { label: "Blood Test in Jalandhar", path: "/blood-test-jalandhar" },
  "General Tests":     { label: "Blood Test in Jalandhar", path: "/blood-test-jalandhar" },
  "Iron Studies":      { label: "Blood Test in Jalandhar", path: "/blood-test-jalandhar" },
  "Fever Panel":       { label: "Diagnostic Centre Jalandhar", path: "/diagnostic-centre-jalandhar" },
};

/* ─── Category → blog post ─── */
const CATEGORY_BLOG: Record<string, { label: string; slug: string }> = {
  "Thyroid Tests":  { label: "Thyroid Test Guide", slug: "thyroid-test-jalandhar" },
  "Diabetes":       { label: "HbA1c & Diabetes Guide", slug: "hba1c-diabetes-guide" },
  "Lipid Profile":  { label: "Full Body Checkup Guide", slug: "full-body-checkup-jalandhar" },
  "Cardiac Tests":  { label: "Full Body Checkup Guide", slug: "full-body-checkup-jalandhar" },
  "Blood Tests":    { label: "Blood Test Guide", slug: "blood-test-jalandhar" },
  "General Tests":  { label: "Blood Test Guide", slug: "blood-test-jalandhar" },
  "Vitamin Tests":  { label: "Vitamin D Deficiency Guide", slug: "vitamin-d-deficiency-symptoms" },
  "Hormone Tests":  { label: "Home Collection Guide", slug: "home-sample-collection-guide" },
};

/* ─── Why this test is done ─── */
const USE_CASES: Record<string, string[]> = {
  "Blood Tests": [
    "Routine annual health check and preventive screening",
    "Monitoring chronic conditions like anaemia or infections",
    "Pre-surgery or pre-treatment blood work",
    "Diagnosing unexplained symptoms like fatigue or weakness",
  ],
  "Thyroid Tests": [
    "Detecting hypothyroidism (underactive thyroid) or hyperthyroidism (overactive thyroid)",
    "Monitoring thyroid hormone levels during medication",
    "Checking thyroid function during pregnancy",
    "Investigating unexplained weight changes, fatigue, or hair loss",
  ],
  "Liver Tests": [
    "Detecting liver damage, fatty liver, or hepatitis",
    "Monitoring alcohol-related liver conditions",
    "Pre-medication liver health assessment",
    "Investigating jaundice, abdominal pain, or elevated liver enzymes",
  ],
  "Kidney Tests": [
    "Evaluating kidney function and detecting early kidney disease",
    "Monitoring progression of chronic kidney disease (CKD)",
    "Detecting diabetes-related kidney damage (diabetic nephropathy)",
    "Investigating urinary symptoms or electrolyte imbalances",
  ],
  "Hormone Tests": [
    "Evaluating hormonal imbalances causing irregular periods, fatigue, or weight gain",
    "Fertility assessment and reproductive health evaluation",
    "Monitoring hormone replacement therapy",
    "Detecting PCOS, endocrine disorders, or adrenal conditions",
  ],
  "Cardiac Tests": [
    "Assessing overall cardiovascular health and cardiac risk",
    "Post-heart attack monitoring of cardiac enzymes",
    "Pre-surgery cardiac screening and clearance",
    "Investigating chest pain, palpitations, or shortness of breath",
  ],
  "Diabetes": [
    "Diagnosing diabetes mellitus or pre-diabetes",
    "Long-term blood sugar monitoring with HbA1c",
    "Gestational diabetes screening during pregnancy",
    "Monitoring effectiveness of diabetes medications",
  ],
  "Vitamin Tests": [
    "Detecting vitamin D, B12, or folate deficiencies",
    "Investigating fatigue, bone pain, or neurological symptoms",
    "Monitoring vitamin supplementation effectiveness",
    "General nutritional health assessment",
  ],
  "Lipid Profile": [
    "Assessing cardiovascular risk through cholesterol levels",
    "Monitoring dietary and medication effects on cholesterol",
    "Detecting high triglycerides or low HDL",
    "Annual cardiac risk screening for adults above 30",
  ],
  "Fever Panel": [
    "Rapid diagnosis of dengue fever, malaria, or typhoid",
    "Identifying the cause of unexplained or persistent fever",
    "Monitoring treatment response in fever cases",
    "Distinguishing viral from bacterial infection",
  ],
  "Iron Studies": [
    "Diagnosing iron-deficiency anaemia",
    "Investigating persistent fatigue, pallor, or weakness",
    "Monitoring iron supplementation therapy",
    "Evaluating iron overload conditions (haemochromatosis)",
  ],
};

const DEFAULT_USE_CASES = [
  "Routine health monitoring as directed by your doctor",
  "Diagnosis or confirmation of a specific condition",
  "Pre-treatment or post-treatment health evaluation",
  "Specialist-recommended investigation or screening",
];

/* ─── Normal ranges by category ─── */
const NORMAL_RANGES: Record<string, string> = {
  "Blood Tests":    "CBC reference ranges: RBC 4.5–5.5 million/µL, WBC 4,500–11,000/µL, Haemoglobin 13–17 g/dL (men) / 12–15 g/dL (women), Platelets 1.5–4.0 lakh/µL. Ranges may vary by age and sex.",
  "Thyroid Tests":  "TSH: 0.4–4.0 mIU/L | Free T3: 2.3–4.2 pg/mL | Free T4: 0.8–1.8 ng/dL. Pregnant women have different ranges. Always interpret with clinical context.",
  "Liver Tests":    "ALT (SGPT): 7–56 U/L | AST (SGOT): 10–40 U/L | Total Bilirubin: 0.1–1.2 mg/dL | ALP: 44–147 U/L | Albumin: 3.5–5.0 g/dL.",
  "Kidney Tests":   "Creatinine: 0.7–1.3 mg/dL (men) / 0.6–1.1 mg/dL (women) | BUN: 7–20 mg/dL | Uric Acid: 3.5–7.2 mg/dL | eGFR: >60 mL/min is normal.",
  "Diabetes":       "Fasting Blood Sugar: 70–100 mg/dL (normal) | Post-meal: <140 mg/dL (normal) | HbA1c: <5.7% (normal), 5.7–6.4% (prediabetes), ≥6.5% (diabetes).",
  "Hormone Tests":  "Ranges vary significantly by hormone, sex, and age. FSH, LH, testosterone, oestradiol, progesterone, and prolactin all have cycle-dependent and age-dependent reference ranges.",
  "Lipid Profile":  "Total Cholesterol: <200 mg/dL | LDL: <100 mg/dL (optimal) | HDL: >60 mg/dL (protective) | Triglycerides: <150 mg/dL. Ranges may differ based on cardiac risk factors.",
  "Vitamin Tests":  "Vitamin D: 30–100 ng/mL (sufficient) | Vitamin B12: 200–900 pg/mL | Folate: 2.7–17 ng/mL. Deficiency thresholds vary by clinical guideline.",
  "Cardiac Tests":  "Troponin: <0.04 ng/mL | CK-MB: <25 U/L | BNP: <100 pg/mL. Any elevation in cardiac markers requires immediate medical evaluation.",
  "Iron Studies":   "Serum Iron: 60–170 µg/dL | TIBC: 240–450 µg/dL | Ferritin: 12–300 ng/mL (men) / 12–150 ng/mL (women) | Transferrin Saturation: 20–50%.",
  "Fever Panel":    "Dengue NS1: Negative | Widal: <1:80 titre (negative) | Malaria Rapid Test: Negative. Any positive result requires immediate doctor consultation.",
};

const DEFAULT_RANGE =
  "Normal reference ranges vary by age, sex, laboratory method, and clinical context. The reference range printed on your Yuva Lab report is specific to our methodology. Always have your results interpreted by a qualified doctor.";

export default function TestDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";

  const test = useMemo(() => getTestBySlug(slug), [slug]);

  /* Related tests: same category, different test, up to 6 */
  const relatedTests = useMemo(() => {
    if (!test) return [];
    return testsData
      .filter((t) => t.category === test.category && t.id !== test.id)
      .slice(0, 6);
  }, [test]);

  if (!test) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Test Not Found</h1>
          <p className="text-gray-500 mb-6">We couldn't find this test. Please browse all tests.</p>
          <Link href="/tests">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Browse All Tests
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const testSlug = `${makeSlug(test.name)}-in-jalandhar`;
  const useCases    = USE_CASES[test.category]    ?? DEFAULT_USE_CASES;
  const normalRange = NORMAL_RANGES[test.category] ?? DEFAULT_RANGE;
  const landingLink = CATEGORY_LANDING[test.category];
  const blogLink    = CATEGORY_BLOG[test.category];

  const metaDesc = buildMetaDesc(test);
  const pageTitle = buildTitle(test);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalTest",
        name: test.name,
        description: metaDesc,
        bodyLocation: test.sampleType,
        usesDevice: { "@type": "MedicalDevice", name: "Automated Clinical Analyser" },
        provider: {
          "@type": ["MedicalBusiness", "DiagnosticLab"],
          "@id": "https://yuvalab.in/#organization",
          name: "Yuva Lab",
          telephone: "+91-9888772209",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kalgidhar Avenue, White Diamond Road, Mithapur",
            addressLocality: "Jalandhar",
            addressRegion: "Punjab",
            postalCode: "144022",
            addressCountry: "IN",
          },
        },
        relevantSpecialty: { "@type": "MedicalSpecialty", name: test.category },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home",  item: "https://yuvalab.in" },
          { "@type": "ListItem", position: 2, name: "Tests", item: "https://yuvalab.in/tests" },
          { "@type": "ListItem", position: 3, name: test.category, item: `https://yuvalab.in/tests?category=${encodeURIComponent(test.category)}` },
          { "@type": "ListItem", position: 4, name: test.name, item: `https://yuvalab.in/test/${testSlug}` },
        ],
      },
      {
        "@type": "Offer",
        name: `${test.name} – Yuva Lab Jalandhar`,
        price: test.price,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        seller: { "@id": "https://yuvalab.in/#organization" },
        validFrom: "2026-01-01",
        description: `${test.name} diagnostic test at Yuva Lab, Jalandhar. Includes home collection and digital report.`,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What is the price of ${test.name} in Jalandhar?`,
            acceptedAnswer: { "@type": "Answer", text: `The price of ${test.name} at Yuva Lab Jalandhar is ₹${test.price}. This includes home sample collection and digital report delivery. Call +91-9888772209 for current pricing.` },
          },
          {
            "@type": "Question",
            name: `How long does ${test.name} report take?`,
            acceptedAnswer: { "@type": "Answer", text: `${test.name} report at Yuva Lab Jalandhar is ready in ${test.reportTime}. You will receive the report digitally via WhatsApp or email.` },
          },
          {
            "@type": "Question",
            name: `Is home collection available for ${test.name} in Jalandhar?`,
            acceptedAnswer: { "@type": "Answer", text: `Yes, ${test.homeCollection ? "free home blood collection is available" : "home collection may be available"} for ${test.name} across Jalandhar. Call Yuva Lab at +91-9888772209 to confirm and book.` },
          },
          {
            "@type": "Question",
            name: `Where can I get ${test.name} in Jalandhar?`,
            acceptedAnswer: { "@type": "Answer", text: `${test.name} is available at Yuva Lab, Kalgidhar Avenue, White Diamond Road, Mithapur, Jalandhar, Punjab. We also offer free home blood collection across Jalandhar.` },
          },
        ],
      },
    ],
  };

  const handleBook = () => {
    const msg = `Hello! I would like to book ${test.name} (₹${test.price}) at Yuva Lab, Jalandhar. Please confirm availability.`;
    window.open(`https://wa.me/919888772209?text=${encodeURIComponent(msg)}`, "_blank");
    (window as any).gtag?.("event", "book_test_click", { event_category: "CTA", event_label: test.name });
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDesc}
        keywords={[
          `${test.name} Jalandhar`,
          `${test.name} price Jalandhar`,
          `${test.name} test near me`,
          `${test.category} Jalandhar`,
          `${test.category.toLowerCase()} lab Jalandhar`,
          "blood test lab Mithapur",
          "diagnostic lab Jalandhar",
          "home collection blood test Jalandhar",
          "Yuva Lab Jalandhar",
        ]}
        canonical={`https://yuvalab.in/test/${testSlug}`}
        schema={schema}
      />

      <div className="pt-20" data-testid="test-detail-page">

        {/* ── Breadcrumb ── */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/tests" className="hover:text-blue-600 transition-colors">Tests</Link>
              <span>/</span>
              <span className="text-blue-600 font-medium">{test.category}</span>
              <span>/</span>
              <span className="text-gray-900 font-medium truncate max-w-[200px]">{test.name}</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <div
          className="relative text-white overflow-hidden py-16"
          style={{ background: "linear-gradient(135deg, #0d47a1 0%, #1565c0 55%, #1976d2 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge className="bg-white/20 text-white border-white/30 text-xs">{test.category}</Badge>
              {test.homeCollection && (
                <Badge className="bg-green-500/30 text-green-100 border-green-400/30 text-xs">
                  <Home className="w-3 h-3 mr-1" /> Home Collection Available
                </Badge>
              )}
              {test.isPopular && (
                <Badge className="bg-orange-500/40 text-orange-100 border-orange-400/30 text-xs">
                  <Star className="w-3 h-3 mr-1 fill-orange-200 text-orange-200" /> Popular Test
                </Badge>
              )}
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight" data-testid="test-detail-title">
              {test.name} in Jalandhar
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mb-8 leading-relaxed">
              Book <strong>{test.name}</strong> at Yuva Lab — Jalandhar's trusted{" "}
              <strong>diagnostic lab in Mithapur</strong> since 2007. Accurate results, fast reports, and free home collection.
            </p>

            {/* Price / Report / Sample strip */}
            <div className="flex flex-wrap items-center gap-5 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 backdrop-blur-sm w-fit">
              <div>
                <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-0.5">Price</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-white">₹{test.price}</span>
                  {test.originalPrice && (
                    <span className="text-blue-300 line-through text-lg mb-0.5">₹{test.originalPrice}</span>
                  )}
                </div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-0.5">Report Time</p>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-200" />
                  <span className="text-white font-bold">{test.reportTime}</span>
                </div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest mb-0.5">Sample</p>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-200" />
                  <span className="text-white font-bold">{test.sampleType}</span>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={handleBook}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-xl"
                data-testid="detail-book-btn"
              >
                <CalendarCheck className="w-5 h-5" /> Book This Test
              </button>
              <a
                href="tel:+919888772209"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-xl"
                data-testid="detail-call-btn"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <button
                onClick={() => window.open(`https://wa.me/919888772209?text=${encodeURIComponent(`Hi! I want to book ${test.name} at Yuva Lab, Jalandhar.`)}`, "_blank")}
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-xl"
                data-testid="detail-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* ── Left / main ── */}
              <div className="lg:col-span-2 space-y-8">

                {/* About */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                    About {test.name} in Jalandhar
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>{test.name}</strong> is a diagnostic test in the <strong>{test.category}</strong> category, available at Yuva Lab — Jalandhar's trusted{" "}
                    <strong>pathology laboratory</strong> at Kalgidhar Avenue, Mithapur, Punjab. This test requires a{" "}
                    <strong>{test.sampleType.toLowerCase()} sample</strong> and delivers accurate, pathologist-verified results within <strong>{test.reportTime}</strong>.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Yuva Lab has been serving patients in Jalandhar and across Punjab since 2007. Our automated clinical analysers and NABL-quality quality controls ensure that every <strong>{test.name}</strong> result is precise and clinically reliable. Our trained phlebotomists offer{" "}
                    <strong>free home blood collection</strong> across Jalandhar — so you can get tested without leaving your home.
                  </p>
                </div>

                {/* Why this test */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
                    Why is {test.name} Done?
                  </h2>
                  <ul className="space-y-3">
                    {useCases.map((uc) => (
                      <li key={uc} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-snug">{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Normal Range */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                    Normal Reference Ranges
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{normalRange}</p>
                  <p className="text-gray-500 text-sm mt-3 italic">
                    * Reference ranges are guidelines. The range on your Yuva Lab report is specific to our methodology. Always consult your doctor in Jalandhar for personalised interpretation.
                  </p>
                </div>

                {/* FAQs */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-5">
                    {[
                      {
                        q: `What is the price of ${test.name} in Jalandhar?`,
                        a: `The price of ${test.name} at Yuva Lab Jalandhar is ₹${test.price}. This is an all-inclusive price with free home sample collection and digital report delivery. Call +91-9888772209 to confirm current pricing.`,
                      },
                      {
                        q: `How long does the ${test.name} report take?`,
                        a: `${test.name} report at Yuva Lab Jalandhar is ready within ${test.reportTime}. You will receive your verified report digitally via WhatsApp or email.`,
                      },
                      {
                        q: `Is home collection available for ${test.name} in Jalandhar?`,
                        a: `${test.homeCollection ? `Yes, free home blood collection is available for ${test.name} across all areas of Jalandhar. Our trained phlebotomist will come to your home at a convenient time.` : `Contact Yuva Lab at +91-9888772209 to confirm home collection availability for ${test.name} in Jalandhar.`}`,
                      },
                      {
                        q: `Do I need to fast before ${test.name}?`,
                        a: `Fasting requirements depend on the specific test. Our team will advise you on preparation when you call to book ${test.name}. For most blood sugar and lipid tests, 8–12 hours fasting is required.`,
                      },
                    ].map((faq) => (
                      <div key={faq.q} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                        <p className="font-bold text-gray-900 mb-2 text-sm">{faq.q}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Related Tests ── */}
                {relatedTests.length > 0 && (
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <h2 className="text-xl font-extrabold text-gray-900 mb-5 flex items-center gap-2">
                      <FlaskConical className="w-5 h-5 text-blue-600" />
                      Related {test.category} Tests in Jalandhar
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {relatedTests.map((rt) => (
                        <Link key={rt.id} href={`/test/${makeSlug(rt.name)}-in-jalandhar`}>
                          <div className="flex items-center justify-between p-3.5 bg-blue-50 hover:bg-blue-100 border border-blue-100 hover:border-blue-300 rounded-xl transition-all cursor-pointer group">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <FlaskConical className="w-4 h-4 text-blue-500 shrink-0" />
                              <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 truncate">{rt.name}</span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0 ml-2">
                              <span className="text-blue-700 font-bold text-xs">₹{rt.price}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link href={`/tests`}>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1">
                          View all {test.category} <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* ── Internal Backlinks ── */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8">
                  <h2 className="text-lg font-extrabold text-gray-900 mb-5 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Related Resources at Yuva Lab Jalandhar
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {/* Always show */}
                    <Link href="/blood-test-jalandhar">
                      <button className="inline-flex items-center gap-1.5 bg-white border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all">
                        Blood Test in Jalandhar <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                    <Link href="/home-blood-collection-jalandhar">
                      <button className="inline-flex items-center gap-1.5 bg-white border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all">
                        Free Home Collection <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                    <Link href="/packages">
                      <button className="inline-flex items-center gap-1.5 bg-white border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all">
                        Health Packages from ₹999 <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                    {/* Category-specific landing page */}
                    {landingLink && (
                      <Link href={landingLink.path}>
                        <button className="inline-flex items-center gap-1.5 bg-white border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all">
                          {landingLink.label} <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </Link>
                    )}
                    {/* Category-specific blog */}
                    {blogLink && (
                      <Link href={`/blog/${blogLink.slug}`}>
                        <button className="inline-flex items-center gap-1.5 bg-white border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all">
                          {blogLink.label} <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </Link>
                    )}
                    <Link href="/blood-test-price-jalandhar">
                      <button className="inline-flex items-center gap-1.5 bg-white border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all">
                        Test Price List 2026 <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                    <Link href="/contact">
                      <button className="inline-flex items-center gap-1.5 bg-blue-600 border border-blue-600 text-white hover:bg-blue-700 font-semibold px-4 py-2 rounded-xl text-sm transition-all">
                        Book Now <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </div>

              </div>

              {/* ── Sidebar ── */}
              <div className="space-y-5">

                {/* Quick Info card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-extrabold text-gray-900 mb-4 text-lg">Test Details</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Test Name",       value: test.name },
                      { label: "Category",        value: test.category },
                      { label: "Sample Type",     value: test.sampleType },
                      { label: "Report Time",     value: test.reportTime },
                      { label: "Price",           value: `₹${test.price}` },
                      { label: "Home Collection", value: test.homeCollection ? "✓ Available" : "Call to confirm" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-start gap-2 py-2 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500 text-sm">{item.label}</span>
                        <span className="text-gray-900 font-semibold text-sm text-right max-w-[60%]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleBook}
                    className="w-full mt-5 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded-xl transition-colors"
                    data-testid="sidebar-book-btn"
                  >
                    <CalendarCheck className="w-4 h-4" /> Book This Test
                  </button>
                </div>

                {/* Lab info */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm">Yuva Lab, Jalandhar</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                    <span className="text-yellow-200 text-xs ml-1">4.9 · 850+ reviews</span>
                  </div>
                  <div className="space-y-2 text-sm text-blue-100 mb-5 mt-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                      Kalgidhar Avenue, Mithapur, Jalandhar
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                      Mon–Sat: 7 AM–8 PM · Sun: 8 AM–2 PM
                    </div>
                  </div>
                  <a
                    href="tel:+919888772209"
                    className="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm mb-3"
                    data-testid="sidebar-call-btn"
                  >
                    <Phone className="w-4 h-4" /> +91-9888772209
                  </a>
                  <button
                    onClick={() => window.open("https://wa.me/919888772209", "_blank")}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </button>
                </div>

                {/* Trust signals */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">Why Choose Yuva Lab?</h3>
                  <div className="space-y-2.5">
                    {[
                      "NABL-quality accuracy on every test",
                      "Free home collection across Jalandhar",
                      "Digital reports via WhatsApp in 4 hrs",
                      "Qualified pathologists verify all reports",
                      "Trusted by 10,000+ patients since 2007",
                      "Affordable prices, no hidden charges",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2">
                        <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-xs leading-snug">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package upsell */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-5">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">💡 Better Value</p>
                  <p className="font-extrabold text-gray-900 text-sm mb-2">Full Body Checkup from ₹999</p>
                  <p className="text-gray-600 text-xs mb-3 leading-snug">Get 20+ tests including this category in one affordable package with home collection.</p>
                  <Link href="/packages">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
                      View Health Packages
                    </button>
                  </Link>
                </div>

                {/* Back to tests */}
                <Link href="/tests">
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                    data-testid="back-to-tests-btn"
                  >
                    <ArrowLeft className="w-4 h-4" /> Browse All Tests in Jalandhar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

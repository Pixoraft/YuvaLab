import MedicalLandingPage, { type LandingPageConfig } from "@/components/medical-landing-page";
import { Clock, Home, Award, Shield } from "lucide-react";

const config: LandingPageConfig = {
  slug: "/diagnostic-centre-jalandhar",
  title: "Best Diagnostic Centre in Jalandhar | 3000+ Tests – Yuva Lab",
  metaDescription: "Yuva Lab is Jalandhar's trusted diagnostic centre since 2007. 3000+ tests, NABL-quality, 4-hour reports, free home collection. Blood tests, health packages & more.",
  canonical: "https://yuvalab.in/diagnostic-centre-jalandhar",
  h1: "Best Diagnostic Centre in Jalandhar",
  h1Sub: "Yuva Lab – Trusted Since 2007 · 3000+ Tests · NABL-Quality · Mithapur, Jalandhar",
  heroBadge: "Kalgidhar Avenue, Mithapur, Jalandhar – Punjab",
  heroColor: "#1565c0",
  intro: "Yuva Lab is Jalandhar's most comprehensive and trusted diagnostic centre, operating since 2007 from Kalgidhar Avenue, Mithapur. We offer 3,000+ diagnostic tests including blood tests, urine analysis, stool tests, culture and sensitivity, hormone tests, genetic testing, cancer markers, and much more. Our state-of-the-art lab is equipped with modern automated analyzers operated by qualified pathologists, ensuring the highest accuracy in every report. We serve thousands of patients monthly from all areas of Jalandhar, Punjab.",
  highlights: [
    { icon: Award, title: "NABL-Quality", desc: "Strict quality controls on every test" },
    { icon: Clock, title: "17+ Years", desc: "Trusted diagnostic service since 2007" },
    { icon: Home, title: "Free Home Collection", desc: "Sample pickup across Jalandhar" },
    { icon: Shield, title: "3000+ Tests", desc: "Comprehensive diagnostic menu" },
  ],
  mainContent: [
    {
      heading: "Why Yuva Lab is the Best Diagnostic Centre in Jalandhar",
      body: `Choosing the right diagnostic centre is critical for accurate health decisions. Here is why Yuva Lab stands out among all diagnostic centres in Jalandhar:

Experience Since 2007: With 17+ years of experience, Yuva Lab has tested thousands of patients across Jalandhar and Punjab. Our reputation is built on accuracy and trust.

Modern Equipment: We use advanced automated analyzers for haematology, biochemistry, immunology, and microbiology. This minimises human error and ensures consistent, reproducible results.

Qualified Pathologists: All reports are verified by qualified pathologists with extensive experience in clinical diagnostics.

Comprehensive Test Menu: From simple CBC to complex genetic and molecular tests — our 3,000+ test menu covers every medical specialty.

Fastest Turnaround: Most routine reports in 4 hours. Emergency reports can be prioritised. Digital delivery via WhatsApp or email.

Affordable Pricing: Despite the highest quality, our pricing is competitive — often 50–70% less than hospital labs for the same tests.

Home Collection: Free home blood collection service available across all Jalandhar localities.

Patient Focus: We believe in transparent communication, clear reports, and patient education.`,
    },
    {
      heading: "Diagnostic Services at Yuva Lab Jalandhar",
      body: `Yuva Lab offers a comprehensive range of diagnostic services:

Clinical Biochemistry: Liver function tests (LFT), kidney function tests (KFT), blood sugar (FBS, PPBS, HbA1c), lipid profile, cardiac enzymes, electrolytes, proteins, enzymes, vitamins, and minerals.

Haematology: Complete blood count (CBC), ESR, peripheral blood smear, haemoglobin variants (HbS, HbF), coagulation tests (PT, aPTT, INR), and more.

Immunology and Serology: Thyroid tests, hormone panels, tumour markers, infectious disease serology (HIV, HBsAg, HCV), autoimmune markers, allergy testing.

Microbiology: Culture and sensitivity tests (urine, blood, sputum, wound), stool examinations, AFB testing.

Urine Analysis: Routine urine examination, urine microscopy, 24-hour urine tests, urine culture.

Histopathology and Cytology: Biopsy reports, PAP smear, FNAC (Fine Needle Aspiration Cytology).

Genetic Testing: Chromosomal analysis, genetic carrier screening, pharmacogenomics.

Speciality Testing: Allergy panels, heavy metal testing, toxicology, nutritional assessments.`,
    },
    {
      heading: "Location and Accessibility",
      body: `Yuva Lab is conveniently located at:

Kalgidhar Avenue, White Diamond Road, Mithapur
Jalandhar, Punjab – 144022

Our lab is easily accessible from all parts of Jalandhar:
• 5 minutes from Model Town and Civil Lines
• 8 minutes from Nakodar Road and Basti Sheikh
• 10 minutes from Bus Stand and Railway Station area
• 12 minutes from GT Road and Urban Estate

Ample parking is available near the lab. For patients who cannot visit, our free home collection service covers the entire Jalandhar district.

Timings:
• Monday to Saturday: 7:00 AM – 8:00 PM
• Sunday: 8:00 AM – 2:00 PM
• Emergency/Urgent tests: Available on call`,
    },
    {
      heading: "Our Quality Standards",
      body: `Yuva Lab follows rigorous quality control protocols that meet NABL (National Accreditation Board for Testing and Calibration Laboratories) standards:

Equipment Calibration: All instruments are calibrated daily using standard reference materials. Equipment maintenance is performed on a scheduled basis by qualified engineers.

Reagent Quality: We use only branded, quality-assured reagents from reputed manufacturers. Each reagent batch is validated before use.

Internal Quality Control (IQC): Control samples are run with every batch of patient samples to ensure results fall within acceptable ranges.

External Quality Assessment (EQA): We participate in external quality assessment programs to benchmark our performance against national standards.

Pathologist Review: All abnormal and critical results are reviewed by our qualified pathologists before reporting.

Result Validation: Our laboratory information system (LIS) applies automatic validation rules to flag suspicious results for manual review.

These quality measures ensure that every report from Yuva Lab can be trusted for clinical decision-making.`,
    },
    {
      heading: "Specialist Tests Available at Yuva Lab",
      body: `Beyond routine tests, Yuva Lab offers several specialist diagnostic services:

Allergy Testing: IgE allergy panels for food allergens (milk, wheat, nuts, eggs, etc.) and environmental allergens (pollen, dust, mould, pet dander).

Genetic Testing: Carrier screening for hereditary conditions, prenatal genetic panels, pharmacogenomics for drug response.

Cancer Markers (Tumour Markers): PSA, AFP, CEA, CA-125, CA 19-9, CA 15-3, HCG, LDH, and more. Used for cancer screening and monitoring.

Hormonal Testing: FSH, LH, Prolactin, Testosterone, Oestradiol, Progesterone, DHEA-S, Cortisol — used for fertility assessment, hormonal imbalances, and endocrine disorders.

Cardiac Risk Assessment: Troponin, BNP, homocysteine, hs-CRP, lipoprotein(a) — beyond basic lipid profile.

Bone Health: Calcium, phosphorus, magnesium, ALP, Vitamin D, PTH — comprehensive bone health panel.

Nutritional Assessment: Zinc, copper, selenium, ferritin, folate, Vitamin B12, complete iron studies.`,
    },
  ],
  services: [
    { name: "Complete Blood Count (CBC)", price: "From ₹150", href: "/test/complete-blood-count-cbc-in-jalandhar" },
    { name: "Full Body Checkup Package", price: "From ₹999", href: "/packages" },
    { name: "Liver Function Test (LFT)", price: "From ₹500", href: "/test/liver-function-test-lft-in-jalandhar" },
    { name: "Thyroid Profile (TSH + T3 + T4)", price: "From ₹700", href: "/test/thyroid-stimulating-hormone-tsh-in-jalandhar" },
    { name: "Lipid Profile", price: "From ₹500", href: "/test/lipid-profile-in-jalandhar" },
    { name: "HbA1c (Diabetes)", price: "From ₹350", href: "/test/hba1c-glycated-haemoglobin-in-jalandhar" },
    { name: "Vitamin D Test", price: "From ₹700", href: "/test/vitamin-d-25-hydroxy-in-jalandhar" },
    { name: "Hormone Panel (FSH, LH, Prolactin)", price: "From ₹900", href: "/tests" },
  ],
  faqs: [
    { q: "Which is the best diagnostic centre in Jalandhar?", a: "Yuva Lab is widely regarded as one of the best diagnostic centres in Jalandhar, having served patients since 2007. We offer 3000+ tests, NABL-quality standards, 4-hour report delivery, and free home collection." },
    { q: "Where is Yuva Lab located in Jalandhar?", a: "Yuva Lab is located at Kalgidhar Avenue, White Diamond Road, Mithapur, Jalandhar, Punjab – 144022. We are open Mon–Sat 7 AM – 8 PM and Sunday 8 AM – 2 PM." },
    { q: "Does Yuva Lab offer home collection in Jalandhar?", a: "Yes, we offer free home blood sample collection across all areas of Jalandhar. Call +91-9888772209 to book a home collection slot." },
    { q: "How accurate are Yuva Lab's diagnostic tests?", a: "Yuva Lab follows NABL-quality standards with daily instrument calibration, internal quality controls, and external quality assessment. All reports are verified by qualified pathologists before delivery." },
    { q: "What is the turnaround time for reports at Yuva Lab?", a: "Most routine test reports are ready within 4 hours. Some specialized tests may take 24–48 hours. All reports are delivered digitally via WhatsApp or email." },
    { q: "Does Yuva Lab accept corporate or bulk test requests?", a: "Yes, Yuva Lab supports corporate health programs, employee health check drives, and bulk testing. Contact us at yuvalab24@gmail.com or call +91-9888772209 for corporate packages." },
    { q: "What types of diagnostic tests does Yuva Lab offer?", a: "Yuva Lab offers blood tests, urine analysis, stool examination, microbiology (culture), hormone tests, genetic testing, tumour markers, allergy testing, histopathology, and many more — over 3,000 tests in total." },
  ],
  areas: ["Mithapur", "Model Town", "Civil Lines", "Nakodar Road", "Ladowali Road", "Basti Sheikh", "PAP Colony", "Urban Estate", "Guru Nanak Pura", "Sadar Bazar", "Lajpat Nagar", "GT Road", "Preet Nagar", "New Jalandhar City", "Burlton Park", "Maqsudan", "Adarsh Nagar", "Cantt Area"],
};

export default function DiagnosticCentreJalandhar() {
  return <MedicalLandingPage config={config} />;
}

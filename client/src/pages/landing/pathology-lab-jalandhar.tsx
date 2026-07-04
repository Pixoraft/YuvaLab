import MedicalLandingPage, { type LandingPageConfig } from "@/components/medical-landing-page";
import { Clock, Home, Award, Shield } from "lucide-react";

const config: LandingPageConfig = {
  slug: "/pathology-lab-jalandhar",
  title: "Best Pathology Lab in Jalandhar | NABL Quality – Yuva Lab",
  metaDescription: "Yuva Lab is Jalandhar's top pathology lab since 2007. 3000+ tests, qualified pathologists, NABL-quality results, 4-hour reports, free home collection. Call +91-9888772209.",
  canonical: "https://yuvalab.in/pathology-lab-jalandhar",
  h1: "Best Pathology Lab in Jalandhar",
  h1Sub: "Yuva Lab – NABL-Quality Pathology Since 2007 · 3000+ Tests · Mithapur, Jalandhar",
  heroBadge: "Qualified Pathologists · Automated Systems · Trusted Results",
  heroColor: "#7c3aed",
  intro: "Yuva Lab is Jalandhar's leading pathology laboratory, trusted by thousands of patients, doctors, and hospitals since 2007. Our fully equipped pathology lab in Mithapur, Jalandhar processes 3,000+ types of tests in clinical biochemistry, haematology, immunology, microbiology, histopathology, and cytology. Every test is performed on calibrated automated instruments, and every report is verified by qualified pathologists — ensuring you receive accurate, reliable results that your doctor can trust for clinical decisions.",
  highlights: [
    { icon: Award, title: "Qualified Pathologists", desc: "Expert review of every report" },
    { icon: Shield, title: "NABL-Quality", desc: "Strict lab quality protocols" },
    { icon: Clock, title: "17+ Years", desc: "Pathology excellence since 2007" },
    { icon: Home, title: "Home Collection", desc: "Free across Jalandhar" },
  ],
  mainContent: [
    {
      heading: "What is a Pathology Lab and What Does It Do?",
      body: `Pathology is the branch of medicine that studies the causes and effects of disease by examining tissues, blood, urine, and other body fluids. A pathology laboratory is where these specimens are analysed to support medical diagnosis, treatment, and monitoring.

At Yuva Lab, our pathology laboratory provides:

Clinical Pathology: Analysis of blood, urine, stool, and other bodily fluids to detect diseases, infections, and abnormalities.

Haematology: Study of blood cells — including red blood cells, white blood cells, and platelets — to diagnose anaemia, infections, clotting disorders, and blood cancers.

Biochemistry: Analysis of blood chemistry including glucose, kidney markers, liver markers, electrolytes, hormones, and vitamins.

Immunology/Serology: Detection of antibodies and antigens to diagnose autoimmune diseases, infections (HIV, hepatitis, dengue), and hormonal conditions.

Microbiology: Culture and sensitivity tests to identify bacteria, fungi, or other pathogens causing infection, and to determine which antibiotics will work.

Histopathology: Microscopic examination of tissue samples (biopsies) to diagnose cancer, inflammatory conditions, and other tissue diseases.

Cytology: Study of cells from fluid samples (PAP smear, FNAC) to detect cancer or precancerous changes.`,
    },
    {
      heading: "Laboratory Equipment at Yuva Lab",
      body: `Yuva Lab is equipped with modern automated laboratory equipment:

Haematology Analyser: Fully automated cell counter for complete blood count (CBC), providing accurate 18–25 parameter analysis including cell morphology flags.

Biochemistry Analyser: Automated random access analyser for simultaneous processing of liver, kidney, lipid, and metabolic panels with high throughput.

Immunoassay Analyser: Chemiluminescent immunoassay (CLIA) system for highly sensitive hormone, thyroid, tumour marker, and infection serology tests.

Urine Analyser: Automated reflectance photometry for urine chemistry and digital microscopy for microscopic analysis.

Blood Culture System: Automated blood culture monitoring for detecting bloodstream infections.

Electrolyte Analyser: Ion-selective electrode (ISE) technology for accurate sodium, potassium, and chloride measurement.

Coagulation Analyser: Automated coagulometer for PT, aPTT, INR, and fibrinogen testing.

PCR System: Polymerase chain reaction technology for molecular diagnosis (COVID, hepatitis, genetic conditions).

Regular calibration, maintenance, and quality control runs ensure these instruments perform at peak accuracy consistently.`,
    },
    {
      heading: "Pathology Tests Available at Yuva Lab Jalandhar",
      body: `Haematology Tests: CBC, ESR, peripheral blood smear, reticulocyte count, bone marrow examination, haemoglobin electrophoresis, coagulation studies (PT, aPTT, INR, fibrinogen, D-dimer).

Biochemistry Tests: Blood sugar, HbA1c, lipid profile, liver function, kidney function, cardiac enzymes, thyroid panel, bone markers, protein studies, enzyme assays, vitamins, minerals.

Urine Tests: Routine urine examination (RUE), urine microscopy, 24-hour urine protein/creatinine, urine culture and sensitivity, urine pregnancy test.

Stool Tests: Routine stool examination, occult blood test, stool culture, H. pylori antigen.

Microbiology: Blood culture, urine culture, throat swab, sputum culture, wound swab, pus culture, CSF culture, sensitivity testing, AFB smear and culture.

Serology: HIV, HBsAg, HCV, VDRL, dengue, malaria, typhoid (Widal, ELISA), COVID-19, CMV, EBV, Toxoplasma, ANA, Anti-dsDNA, RF, Anti-CCP.

Histopathology and Cytology: Biopsy processing and reporting, PAP smear, FNAC, pleural fluid, ascitic fluid, CSF cytology.`,
    },
    {
      heading: "Our Pathology Quality Standards",
      body: `Yuva Lab follows a rigorous quality management system:

Pre-Analytical Quality: Proper patient preparation instructions, correct sample collection techniques, appropriate tubes and containers, timely sample transport, sample acceptance/rejection criteria.

Analytical Quality: Daily internal quality controls run before patient samples. Instrument calibration with traceable reference materials. Reagent lot verification. Linearity and precision checks.

Post-Analytical Quality: Pathologist review of critical and abnormal values. Automatic critical value alerts. Double-check of high-impact results. Clear, clinical-format reports with reference ranges.

Participation in External Quality Assurance (EQA) programs allows us to compare our performance against national and international standards and continuously improve.

Turnaround Time (TAT) Monitoring: We monitor report turnaround times to ensure every patient receives their results within the committed time.`,
    },
    {
      heading: "How Yuva Lab Supports Doctors and Hospitals in Jalandhar",
      body: `Beyond direct patient testing, Yuva Lab provides critical support to the healthcare ecosystem in Jalandhar:

Doctor Partnerships: We work with hundreds of doctors and specialists in Jalandhar who send their patients to us for reliable test results.

Hospital Support: We provide outsourced laboratory services to nursing homes and small hospitals that do not have their own labs.

Referral Network: Complex tests requiring specialised equipment are referred to our network of high-end reference labs with quality assurance.

Electronic Report Access: Doctors can access patient reports digitally for faster clinical decision-making.

CME Support: We provide continuing medical education (CME) support to help local doctors stay updated on laboratory test interpretation.

If you are a doctor or healthcare facility in Jalandhar looking for a reliable pathology partner, contact us at yuvalab24@gmail.com or +91-9888772209.`,
    },
  ],
  services: [
    { name: "Complete Blood Count (CBC)", price: "₹150", href: "/test/complete-blood-count-cbc-in-jalandhar" },
    { name: "Liver Function Test (LFT)", price: "₹500", href: "/test/liver-function-test-lft-in-jalandhar" },
    { name: "Kidney Function Test (KFT)", price: "₹450", href: "/test/kidney-function-test-kft-in-jalandhar" },
    { name: "Thyroid Profile", price: "₹700", href: "/thyroid-test-jalandhar" },
    { name: "Urine Culture & Sensitivity", price: "₹500", href: "/tests" },
    { name: "Histopathology (Biopsy)", price: "From ₹1,200", href: "/tests" },
    { name: "PAP Smear", price: "From ₹800", href: "/tests" },
    { name: "Full Body Checkup Package", price: "From ₹999", href: "/packages" },
  ],
  faqs: [
    { q: "Which is the best pathology lab in Jalandhar?", a: "Yuva Lab is widely regarded as one of the best pathology labs in Jalandhar, with 17+ years of experience, qualified pathologists, modern equipment, NABL-quality protocols, and a 4.9-star patient rating." },
    { q: "Where is Yuva Lab's pathology laboratory located?", a: "Yuva Lab is located at Kalgidhar Avenue, White Diamond Road, Mithapur, Jalandhar, Punjab – 144022. We are open Mon–Sat 7 AM – 8 PM and Sunday 8 AM – 2 PM." },
    { q: "Does Yuva Lab have NABL accreditation?", a: "Yuva Lab follows NABL-quality standards and protocols. Our laboratory processes maintain the quality benchmarks required for accurate, reliable diagnostic testing." },
    { q: "Can I get histopathology and biopsy testing at Yuva Lab?", a: "Yes, Yuva Lab offers histopathology (biopsy processing and reporting), cytology (PAP smear, FNAC), and fluid cytology. These reports are prepared by qualified pathologists." },
    { q: "How do I refer patients to Yuva Lab as a doctor?", a: "Doctors can refer patients directly to Yuva Lab. We provide timely, accurate reports and can arrange home collection for your patients. Contact us at yuvalab24@gmail.com or +91-9888772209 to set up a referral arrangement." },
    { q: "Does Yuva Lab offer microbiology and culture tests?", a: "Yes, we offer a full range of microbiology tests including blood culture, urine culture, throat swab, wound swab culture, sputum culture, and antibiotic sensitivity testing." },
    { q: "How accurate are the test results at Yuva Lab?", a: "Yuva Lab maintains NABL-quality accuracy through daily internal quality controls, regular equipment calibration, pathologist review of all reports, and participation in external quality assurance programs." },
  ],
  areas: ["Mithapur", "Model Town", "Civil Lines", "Nakodar Road", "Ladowali Road", "Basti Sheikh", "PAP Colony", "Urban Estate", "Guru Nanak Pura", "Sadar Bazar", "Lajpat Nagar", "GT Road", "Preet Nagar", "New Jalandhar City", "Maqsudan", "Burlton Park", "Adarsh Nagar"],
};

export default function PathologyLabJalandhar() {
  return <MedicalLandingPage config={config} />;
}

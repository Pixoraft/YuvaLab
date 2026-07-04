import MedicalLandingPage, { type LandingPageConfig } from "@/components/medical-landing-page";
import { Clock, Home, Award, Shield } from "lucide-react";

const config: LandingPageConfig = {
  slug: "/preventive-health-checkup-jalandhar",
  title: "Preventive Health Checkup in Jalandhar | Packages – Yuva Lab",
  metaDescription: "Book preventive health checkup packages in Jalandhar at Yuva Lab. Annual checkups starting ₹999. Detect diseases early. Home collection available. Call +91-9888772209.",
  canonical: "https://yuvalab.in/preventive-health-checkup-jalandhar",
  h1: "Preventive Health Checkup in Jalandhar",
  h1Sub: "Detect Silent Diseases Before Symptoms Appear · Packages from ₹999 · Free Home Collection",
  heroBadge: "Annual Health Screening at Yuva Lab Jalandhar",
  heroColor: "#7c3aed",
  intro: "Preventive health checkups are the foundation of long-term wellness. A large proportion of serious conditions — including diabetes, thyroid disorders, high blood pressure, high cholesterol, kidney disease, and certain cancers — can be detected years before they cause symptoms through simple blood tests. At Yuva Lab, Jalandhar, we offer comprehensive preventive health checkup packages starting from ₹999, designed to give you a complete picture of your health and catch potential problems early.",
  highlights: [
    { icon: Shield, title: "Early Detection", desc: "Catch diseases before symptoms appear" },
    { icon: Award, title: "From ₹999", desc: "Affordable annual health screening" },
    { icon: Home, title: "Home Collection", desc: "Free sample pickup across Jalandhar" },
    { icon: Clock, title: "Digital Reports", desc: "Reports in 4 hours via WhatsApp" },
  ],
  mainContent: [
    {
      heading: "Why Preventive Health Checkups Matter",
      body: `The Indian Council of Medical Research (ICMR) estimates that more than 60% of disease burden in India is due to non-communicable diseases — most of which are preventable or manageable if detected early.

Key facts about preventive health in India:

• Over 77 million Indians have diabetes (many undiagnosed)
• 1 in 8 Indians above 30 has a thyroid disorder
• High cholesterol affects over 25% of adults and often has no symptoms
• Anaemia affects over 50% of Indian women
• Vitamin D deficiency is present in 70–90% of Indians
• Kidney disease affects 10% of the population, often with no early symptoms

A preventive health checkup costs a fraction of what treatment costs later. More importantly, early intervention dramatically improves outcomes for almost every condition.`,
    },
    {
      heading: "What is Included in a Preventive Health Checkup at Yuva Lab?",
      body: `Yuva Lab's preventive health checkup packages are structured to screen for the most common conditions in the Indian population:

Metabolic Health: Blood sugar (FBS, PPBS), HbA1c, insulin resistance markers — for diabetes prevention and management.

Cardiovascular Health: Lipid profile (cholesterol, HDL, LDL, VLDL, triglycerides), cardiac risk markers — for heart disease prevention.

Liver Health: Liver function tests (SGOT, SGPT, ALP, bilirubin, albumin, GGT) — for fatty liver, hepatitis detection.

Kidney Health: Kidney function tests (creatinine, BUN, uric acid, eGFR) — for early kidney disease detection.

Thyroid Health: TSH and full thyroid panel — for hypothyroidism and hyperthyroidism.

Blood Disorders: Complete blood count (CBC) — for anaemia, infections, blood disorders.

Nutritional Assessment: Vitamin D, Vitamin B12, iron studies — for deficiencies that affect energy, immunity, and bone health.

Cancer Screening: PSA (men), CA-125 (women), CEA, AFP — early screening markers.

Inflammation: ESR and CRP — markers of chronic inflammation linked to many diseases.`,
    },
    {
      heading: "Who Should Get a Preventive Health Checkup?",
      body: `Everyone benefits from preventive health screening, but the following groups should prioritise it:

Adults above 30: Metabolic risk increases significantly after 30. Annual screenings help catch early changes in blood sugar, cholesterol, and organ function.

Adults above 40: Comprehensive screening including thyroid, cardiac risk, liver, kidney, bone health, and cancer markers.

Diabetic patients: Regular monitoring of HbA1c, kidney function, lipid profile, and liver function is essential.

Patients with hypertension: Regular kidney function, electrolyte, and cardiac risk assessment.

Obese individuals: Metabolic panel, thyroid, liver, and vitamin screening.

Smokers: Lung function, cardiac risk, and cancer marker screening.

Women of reproductive age: Iron studies (anaemia), thyroid, vitamin D, and hormonal panel.

Pregnant women: Comprehensive screening including blood group, RBC antibody, iron, thyroid, blood sugar, and infection markers.

Family history of disease: If you have family history of diabetes, heart disease, kidney disease, cancer, or thyroid disorders, start screening earlier and more frequently.`,
    },
    {
      heading: "How Often Should You Get a Preventive Checkup?",
      body: `Recommended frequency based on age and health status:

• 18–29 years: Every 2–3 years (or annually if risk factors exist)
• 30–39 years: Every 1–2 years
• 40–49 years: Annually
• 50+ years: Every 6 months
• Chronic disease patients (diabetes, hypertension, thyroid): Every 3–6 months as guided by your doctor

For corporate employees, Yuva Lab offers company-wide annual health check programs. Contact us for corporate pricing.`,
    },
    {
      heading: "Preventive Checkup Package Prices at Yuva Lab Jalandhar",
      body: `Our preventive health checkup packages are among the most affordable in Jalandhar:

YL Basic (20+ tests): ₹999
Includes: CBC, blood sugar, thyroid (TSH), lipid profile, LFT, KFT, urine analysis

YL Standard (30+ tests): ₹1,499
Adds: HbA1c, Vitamin D, Vitamin B12, ESR, CRP, uric acid

YL Advanced (40+ tests): ₹1,999
Adds: Iron studies, calcium, hormonal panel, inflammation markers

YL Comprehensive (60+ tests): ₹2,999
Adds: Cancer markers (PSA/CA-125), full hormone panel, electrolytes, advanced cardiac markers

Corporate packages and senior citizen discounts are available. Call +91-9888772209 for details.`,
    },
  ],
  services: [
    { name: "YL Basic Checkup (20+ tests)", price: "₹999", href: "/packages" },
    { name: "YL Standard Checkup (30+ tests)", price: "₹1,499", href: "/packages" },
    { name: "YL Advanced Checkup (40+ tests)", price: "₹1,999", href: "/packages" },
    { name: "YL Comprehensive (60+ tests)", price: "₹2,999", href: "/packages" },
    { name: "Diabetes Screening (HbA1c + FBS)", price: "From ₹555", href: "/test/hba1c-glycated-haemoglobin-edta-blood-in-jalandhar" },
    { name: "Cardiac Risk Panel", price: "From ₹800", href: "/test/lipid-profile-in-jalandhar" },
    { name: "Thyroid Full Panel", price: "From ₹700", href: "/thyroid-test-jalandhar" },
    { name: "Vitamin Deficiency Panel", price: "From ₹1,200", href: "/tests" },
  ],
  faqs: [
    { q: "What is a preventive health checkup?", a: "A preventive health checkup is a comprehensive set of blood tests and health screenings done to detect diseases early — before symptoms appear. It includes blood counts, blood sugar, thyroid, cholesterol, liver, kidney, vitamins, and more." },
    { q: "How much does a preventive health checkup cost in Jalandhar?", a: "Preventive health checkup packages at Yuva Lab start from ₹999 for 20+ tests. Comprehensive packages with 60+ tests cost ₹2,999. Home collection is free." },
    { q: "What diseases can a preventive checkup detect?", a: "A preventive checkup can detect diabetes, thyroid disorders, high cholesterol, anaemia, vitamin deficiencies, kidney disease, liver disease, and provide cancer screening markers — all before symptoms appear." },
    { q: "At what age should I start preventive health checkups?", a: "Start annual preventive checkups from age 30. If you have risk factors like family history of diabetes, hypertension, or obesity, start from age 25 or earlier." },
    { q: "Is preventive checkup covered by health insurance?", a: "Many health insurance policies in India cover annual preventive health checkups. Check your policy details. Yuva Lab provides proper receipts and reports for insurance claims." },
    { q: "Do I need a doctor's referral for a preventive checkup?", a: "No, you do not need a prescription or referral for a preventive health checkup. You can directly book a package at Yuva Lab by calling +91-9888772209." },
    { q: "Is home collection available for preventive checkups?", a: "Yes, free home blood collection is available for all preventive checkup packages across Jalandhar." },
  ],
  areas: ["Mithapur", "Model Town", "Civil Lines", "Nakodar Road", "Ladowali Road", "Basti Sheikh", "PAP Colony", "Urban Estate", "Guru Nanak Pura", "Sadar Bazar", "Lajpat Nagar", "GT Road", "Preet Nagar", "New Jalandhar City", "Maqsudan", "Burlton Park"],
};

export default function PreventiveHealthCheckupJalandhar() {
  return <MedicalLandingPage config={config} />;
}

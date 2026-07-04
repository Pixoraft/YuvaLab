import MedicalLandingPage, { type LandingPageConfig } from "@/components/medical-landing-page";
import { Clock, Home, Award, Shield } from "lucide-react";

const config: LandingPageConfig = {
  slug: "/full-body-checkup-jalandhar",
  title: "Full Body Checkup in Jalandhar | Affordable Packages – Yuva Lab",
  metaDescription: "Get a complete full body checkup in Jalandhar starting ₹999. 20–60+ tests including blood, thyroid, liver, kidney, vitamins & cancer markers. Home collection. Call Yuva Lab.",
  canonical: "https://yuvalab.in/full-body-checkup-jalandhar",
  h1: "Full Body Checkup in Jalandhar",
  h1Sub: "Comprehensive Health Packages Starting ₹999 · 20–60+ Tests · Home Collection Available",
  heroBadge: "Most Popular Health Service at Yuva Lab Jalandhar",
  heroColor: "#059669",
  intro: "A full body checkup is the single most important step you can take for your health. At Yuva Lab, Jalandhar, we offer comprehensive full body health checkup packages starting from ₹999, covering 20 to 60+ tests including complete blood count, liver function, kidney function, thyroid panel, blood sugar, lipid profile, vitamins, cancer markers, and much more. Our packages are designed for men, women, senior citizens, and children — all with free home sample collection and fast 4-hour reports.",
  highlights: [
    { icon: Award, title: "20–60+ Tests", desc: "Comprehensive panels for complete health picture" },
    { icon: Shield, title: "Starts at ₹999", desc: "Affordable packages for all budgets" },
    { icon: Home, title: "Home Collection", desc: "Free sample pickup across Jalandhar" },
    { icon: Clock, title: "4-Hour Reports", desc: "Fast, digital report delivery" },
  ],
  mainContent: [
    {
      heading: "Why Get a Full Body Checkup in Jalandhar?",
      body: `Many serious health conditions including diabetes, thyroid disorders, high cholesterol, anaemia, vitamin deficiencies, kidney disease, and liver disease develop without any obvious symptoms for years. By the time symptoms appear, the condition may already be at an advanced stage.

A full body checkup helps:

• Detect silent diseases before they cause symptoms
• Establish your health baseline for future comparison
• Catch lifestyle-related risk factors (high cholesterol, blood sugar, blood pressure)
• Identify vitamin and mineral deficiencies
• Screen for early signs of serious conditions
• Provide peace of mind with a complete health picture

The World Health Organization recommends annual health checkups for adults above 30, and more frequent checks for those with chronic conditions or family history of disease.`,
    },
    {
      heading: "What is Included in a Full Body Checkup at Yuva Lab?",
      body: `Yuva Lab's full body checkup packages are designed to give you the most comprehensive health picture. Here is what different packages include:

YL Basic Package (20+ tests):
• CBC (Complete Blood Count)
• Blood Sugar (FBS & PPBS)
• Liver Function Test (LFT) – 7 parameters
• Kidney Function Test (KFT) – 6 parameters
• Lipid Profile – 5 parameters
• Thyroid (TSH)
• Urine Routine Examination

YL Advanced Package (40+ tests):
Everything in Basic, plus:
• HbA1c (Diabetes management)
• Vitamin D and B12
• Iron Studies (Serum Iron, TIBC, Ferritin)
• ESR and CRP (Inflammation markers)
• Uric Acid
• Calcium and Phosphorus
• Liver enzymes (SGOT, SGPT, ALP, GGT)

YL Comprehensive Package (60+ tests):
Everything in Advanced, plus:
• Tumour Markers (PSA for men / CA-125 for women)
• Hormone Panel (Testosterone / Oestrogen, FSH, LH)
• Thyroid Full Panel (TSH, Free T3, Free T4)
• Electrolytes (Sodium, Potassium, Chloride)
• Complete urine analysis with microscopy`,
    },
    {
      heading: "Full Body Checkup for Different Age Groups",
      body: `Yuva Lab offers tailored full body checkup packages for every age group:

For Young Adults (18–35 years): Focus on metabolic health, vitamin levels, and lifestyle risk factors. Recommended annually.

For Middle-Aged Adults (35–50 years): Comprehensive metabolic panel, thyroid, cardiac risk, diabetes, and cancer screening markers. Recommended every 6–12 months.

For Senior Citizens (50+ years): Extensive panel including bone health (calcium, Vitamin D), cardiac markers, kidney and liver function, full thyroid panel, and cancer screens. Recommended every 6 months.

For Women: Includes hormonal panel, iron studies (anaemia is common in women), bone health, and thyroid.

For Men: Includes PSA (prostate-specific antigen), testosterone, cardiac risk, and metabolic panel.

For Children: Age-appropriate nutritional panels including iron, vitamins, blood sugar, and CBC.`,
    },
    {
      heading: "How to Prepare for a Full Body Checkup",
      body: `Getting the most accurate results from your full body checkup requires some preparation:

Fasting: Fast for 10–12 hours before your checkup. Drink only plain water during this time. This is essential for blood sugar, lipid profile, and liver function tests.

Avoid Alcohol: Do not consume alcohol for at least 24 hours before your checkup.

Avoid Heavy Exercise: Avoid intense physical exercise for 24 hours before blood collection, as it can temporarily elevate certain markers.

Medication: Continue your regular medications unless your doctor advises otherwise. Inform our team about all medications, including supplements.

Morning is Best: Schedule your checkup for the early morning after an overnight fast. This also aligns with natural hormonal rhythms for certain tests like cortisol and testosterone.

Hydration: Drink 2–3 glasses of water before your collection time. This helps with blood draw.

Bring Previous Reports: If available, bring previous health reports for comparison.`,
    },
    {
      heading: "Full Body Checkup Cost in Jalandhar",
      body: `Yuva Lab offers some of the most affordable full body checkup packages in Jalandhar:

• YL 1.0 (Basic – 20+ tests): ₹999
• YL 2.0 (Standard – 30+ tests): ₹1,499
• YL 3.0 (Advanced – 40+ tests): ₹1,999
• YL Premium (Comprehensive – 60+ tests): ₹2,999

These prices include home collection, report delivery, and pathologist verification. Compare this to private hospitals in Jalandhar where similar panels can cost ₹5,000–₹15,000.

For senior citizens and families, we offer special group discounts. Call us for the latest pricing and offers.`,
    },
  ],
  services: [
    { name: "YL 1.0 Basic Package (20+ tests)", price: "₹999", href: "/packages" },
    { name: "YL 2.0 Standard Package (30+ tests)", price: "₹1,499", href: "/packages" },
    { name: "YL 3.0 Advanced Package (40+ tests)", price: "₹1,999", href: "/packages" },
    { name: "YL Premium Package (60+ tests)", price: "₹2,999", href: "/packages" },
    { name: "Thyroid Profile (TSH, T3, T4)", price: "From ₹400", href: "/test/thyroid-profile-3-reflex-in-jalandhar" },
    { name: "Liver Function Test (LFT)", price: "From ₹450", href: "/test/lft-liver-function-test-3-super-maxi-in-jalandhar" },
    { name: "Kidney Function Test (KFT)", price: "From ₹450", href: "/tests" },
    { name: "CBC + ESR", price: "From ₹370", href: "/test/cbc-haemogram-edta-blood-in-jalandhar" },
  ],
  faqs: [
    { q: "What is included in a full body checkup in Jalandhar at Yuva Lab?", a: "Yuva Lab's full body checkup packages include CBC, blood sugar, liver function, kidney function, lipid profile, thyroid, and urine analysis in the basic package. Advanced packages also include HbA1c, Vitamin D, B12, iron studies, hormone tests, and cancer markers." },
    { q: "How much does a full body checkup cost in Jalandhar?", a: "Full body checkup packages at Yuva Lab start from ₹999 for 20+ tests. Advanced packages with 60+ tests cost ₹2,999. These are among the most affordable checkup packages in Jalandhar." },
    { q: "Is home collection available for full body checkups?", a: "Yes, free home sample collection is available for all full body checkup packages across Jalandhar. Our phlebotomist visits your home at a convenient time." },
    { q: "How long does it take to get full body checkup reports?", a: "Most routine reports are ready within 4–6 hours. Comprehensive packages with specialized tests may take up to 24 hours. All reports are sent digitally via WhatsApp or email." },
    { q: "How often should I get a full body checkup?", a: "Adults under 35 should get an annual checkup. Those between 35–50 should do it every 6 months. People above 50, or those with chronic conditions, should check every 3–6 months as advised by their doctor." },
    { q: "Do I need a doctor's prescription for a full body checkup?", a: "No, you do not need a prescription. You can directly book a full body checkup package at Yuva Lab. However, consult your doctor to interpret results and for follow-up action." },
    { q: "What should I eat before a full body checkup?", a: "Fast for 10–12 hours before your full body checkup. Drink only plain water. Avoid alcohol for 24 hours. You may take your regular medications unless advised otherwise." },
  ],
  areas: ["Mithapur", "Model Town", "Civil Lines", "Nakodar Road", "Ladowali Road", "Basti Sheikh", "PAP Colony", "Urban Estate", "Guru Nanak Pura", "Sadar Bazar", "Lajpat Nagar", "Preet Nagar", "New Jalandhar City", "GT Road", "Maqsudan", "Burlton Park", "Adarsh Nagar", "Cantt Area"],
};

export default function FullBodyCheckupJalandhar() {
  return <MedicalLandingPage config={config} />;
}

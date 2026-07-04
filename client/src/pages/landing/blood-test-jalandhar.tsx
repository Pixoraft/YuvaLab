import MedicalLandingPage, { type LandingPageConfig } from "@/components/medical-landing-page";
import { Clock, Home, Award, Shield } from "lucide-react";

const config: LandingPageConfig = {
  slug: "/blood-test-jalandhar",
  title: "Blood Test in Jalandhar | Home Collection | 4-Hour Reports – Yuva Lab",
  metaDescription: "Book accurate blood tests in Jalandhar at Yuva Lab. CBC, LFT, KFT, thyroid, sugar & 3000+ tests. Free home collection. Reports in 4 hours. Call +91-9888772209.",
  canonical: "https://yuvalab.in/blood-test-jalandhar",
  h1: "Blood Test in Jalandhar",
  h1Sub: "3000+ Accurate Blood Tests · Free Home Collection · 4-Hour Reports · Trusted Since 2007",
  heroBadge: "Mithapur, Jalandhar · Punjab · Since 2007",
  heroColor: "#1565c0",
  intro: "Yuva Lab is Jalandhar's most trusted diagnostic laboratory for blood tests. Located in Kalgidhar Avenue, Mithapur, we offer over 3,000 blood tests including CBC, liver function tests, kidney function tests, thyroid panels, diabetes tests, vitamin panels, hormone tests, and more. With NABL-quality processes, experienced pathologists, and free home sample collection across Jalandhar, we make blood testing accessible, accurate, and affordable for every family.",
  highlights: [
    { icon: Clock, title: "4-Hour Reports", desc: "Most results delivered within 4 hours" },
    { icon: Home, title: "Free Home Collection", desc: "Phlebotomist at your door across Jalandhar" },
    { icon: Award, title: "NABL-Quality", desc: "Strict quality checks on every sample" },
    { icon: Shield, title: "Since 2007", desc: "17+ years of trusted diagnostics" },
  ],
  mainContent: [
    {
      heading: "Why Choose Yuva Lab for Blood Tests in Jalandhar?",
      body: `Yuva Lab has been serving patients in Jalandhar and surrounding areas of Punjab since 2007. Our laboratory is equipped with modern automated analyzers that ensure precise results every time.

Here is why thousands of patients trust us for their blood tests:

• Accuracy: Our automated equipment and experienced pathologists ensure every report is accurate and reliable.
• Speed: Most routine blood test reports are ready within 4 hours. Urgent reports can be processed faster.
• Affordability: We offer competitive prices without compromising on quality. Our packages bundle multiple tests at reduced cost.
• Home Collection: Our trained phlebotomists visit your home at a convenient time. No travel, no queue.
• Wide Test Menu: We offer 3,000+ tests covering every medical specialty.
• Digital Reports: Receive your reports via WhatsApp or email for easy sharing with your doctor.
• Doctor Consultation: Our reports include reference ranges and are prepared by qualified pathologists.`,
    },
    {
      heading: "Common Blood Tests Available at Yuva Lab Jalandhar",
      body: `Complete Blood Count (CBC): The most common blood test that measures red blood cells, white blood cells, haemoglobin, haematocrit, and platelets. Used for diagnosing anaemia, infections, and blood disorders.

Blood Sugar Tests (FBS, PPBS, Random Blood Sugar): Essential for diabetes diagnosis and monitoring. We also offer HbA1c for long-term blood sugar assessment.

Liver Function Test (LFT): Assesses liver health by measuring SGOT, SGPT, ALP, albumin, bilirubin, and GGT. Essential for monitoring liver conditions.

Kidney Function Test (KFT / RFT): Evaluates kidney health through creatinine, BUN, uric acid, and eGFR. Critical for patients with diabetes, hypertension, or kidney conditions.

Thyroid Function Test (TFT): Measures TSH, T3, and T4 to assess thyroid gland function. Used for detecting hypothyroidism, hyperthyroidism, and thyroid disorders.

Lipid Profile: Measures cholesterol, HDL, LDL, VLDL, and triglycerides. Essential for assessing cardiovascular risk.

Vitamin Tests: Vitamin D, Vitamin B12, Folate — critical for energy, immunity, and bone health.

HbA1c: The gold standard for diabetes management, showing average blood sugar over the past 3 months.

ESR and CRP: Inflammation markers used for detecting infections, arthritis, and autoimmune conditions.`,
    },
    {
      heading: "How to Book a Blood Test in Jalandhar at Yuva Lab",
      body: `Booking a blood test at Yuva Lab is quick and simple:

Step 1 – Call or WhatsApp: Contact us at +91-9888772209. Our team is available from 7 AM to 8 PM, Monday to Saturday.

Step 2 – Choose Home Collection or Walk-In: Either visit our lab at Kalgidhar Avenue, Mithapur, Jalandhar, or request a home collection visit.

Step 3 – Sample Collection: Our trained phlebotomist will collect your blood sample using sterile, single-use equipment.

Step 4 – Processing: Your sample is processed in our advanced lab under strict quality controls.

Step 5 – Receive Reports: Get your verified report via WhatsApp, email, or pick it up in person.

Most blood tests require fasting for 8–12 hours (especially blood sugar and lipid tests). Our team will advise you during booking.`,
    },
    {
      heading: "Blood Test Prices in Jalandhar",
      body: `Yuva Lab offers some of the most competitive blood test prices in Jalandhar without compromising on accuracy. Here are indicative prices:

• CBC (Complete Blood Count): Starting ₹260
• Blood Sugar (FBS/PPBS): Starting ₹55
• HbA1c: Starting ₹500
• Thyroid Profile (TSH): Starting ₹200
• Liver Function Test (LFT): Starting ₹450
• Kidney Function Test (KFT): Starting ₹450
• Lipid Profile: Starting ₹480
• Vitamin D: Starting ₹1,200
• Vitamin B12: Starting ₹1,200

Our health packages bundle multiple tests at significant discounts. Contact us for exact pricing or to get a custom quote for your specific tests.`,
    },
    {
      heading: "Blood Test Preparation Guide",
      body: `Proper preparation ensures accurate results. Here are general guidelines:

Fasting Tests: For blood sugar (FBS), lipid profile, liver function tests, and kidney function tests, fast for 8–12 hours before the test. You may drink plain water.

Non-Fasting Tests: CBC, thyroid tests, vitamin tests, and most hormone tests do not require fasting.

Medication: Inform your phlebotomist about any medications you are taking. Some medications may affect test results.

Hydration: Stay well hydrated unless instructed otherwise. This makes blood collection easier.

Timing: Thyroid tests (TSH) are best done in the morning. Cortisol tests must be done before 8 AM.

Avoid Alcohol: Do not consume alcohol 24–48 hours before liver function tests.

Our team will provide specific preparation instructions when you book your test.`,
    },
    {
      heading: "Yuva Lab – Serving Jalandhar Since 2007",
      body: `Founded in 2007, Yuva Lab has grown to become one of Jalandhar's most trusted diagnostic laboratories. Our laboratory is located in Kalgidhar Avenue, Mithapur — a central location easily accessible from all parts of Jalandhar including Model Town, Nakodar Road, Ladowali Road, Civil Lines, Basti Sheikh, and surrounding areas.

We serve thousands of patients monthly and maintain a 4.9-star rating on Google, backed by 850+ patient reviews. Our phlebotomists are trained and certified, our equipment is regularly calibrated, and our reports are verified by qualified pathologists.

Yuva Lab also supports corporate health programs, bulk testing, and tie-ups with hospitals and clinics across Jalandhar and Punjab.`,
    },
  ],
  services: [
    { name: "Complete Blood Count (CBC)", price: "From ₹260", href: "/test/cbc-haemogram-edta-blood-in-jalandhar" },
    { name: "Liver Function Test (LFT)", price: "From ₹450", href: "/test/lft-liver-function-test-3-super-maxi-in-jalandhar" },
    { name: "Kidney Function Test (KFT)", price: "From ₹450", href: "/tests" },
    { name: "Thyroid (TSH)", price: "From ₹200", href: "/test/tsh-thyroid-stimulating-hormone-ultrasensitive-serum-in-jalandhar" },
    { name: "Blood Sugar (FBS / HbA1c)", price: "From ₹55", href: "/test/glucose-fasting-fluoride-plasma-in-jalandhar" },
    { name: "Lipid Profile", price: "From ₹480", href: "/test/lipid-profile-3-screening-non-fasting-serum-in-jalandhar" },
    { name: "Vitamin D Test", price: "From ₹1,200", href: "/test/vitamin-d-total-25-hydroxy-oh-serum-in-jalandhar" },
    { name: "Vitamin B12 Test", price: "From ₹1,200", href: "/test/vitamin-b12-cyanocobalamin-serum-in-jalandhar" },
  ],
  faqs: [
    { q: "Where can I get a blood test in Jalandhar?", a: "Yuva Lab is located at Kalgidhar Avenue, White Diamond Road, Mithapur, Jalandhar. We also offer free home blood collection across all areas of Jalandhar. Call +91-9888772209 to book." },
    { q: "How much does a blood test cost in Jalandhar?", a: "Blood test prices at Yuva Lab start from ₹55 for basic tests like blood sugar. The CBC costs ₹260, thyroid (TSH) ₹200, liver function test ₹450, lipid profile from ₹480. Our health packages offer multiple tests at discounted rates starting ₹999." },
    { q: "Does Yuva Lab offer home blood collection in Jalandhar?", a: "Yes! We offer free home blood collection across Jalandhar including Mithapur, Model Town, Nakodar Road, Civil Lines, Basti Sheikh, Sadar Bazar, and many more areas. Our phlebotomists come to your home at your convenient time." },
    { q: "How long does it take to get blood test reports?", a: "Most routine blood test reports are ready within 4 hours. Some specialized tests may take 24–48 hours. You will receive your reports via WhatsApp or email." },
    { q: "Do I need to fast before a blood test?", a: "It depends on the test. Blood sugar tests (FBS), lipid profile, and liver function tests require 8–12 hours fasting. CBC, thyroid, vitamin tests, and most hormone tests do not require fasting. Our team will advise you when you book." },
    { q: "Is Yuva Lab open on Sundays?", a: "Yes, Yuva Lab is open on Sundays from 8 AM to 2 PM. We are open Monday to Saturday from 7 AM to 8 PM." },
    { q: "Can I get digital blood test reports?", a: "Yes, Yuva Lab sends all reports digitally via WhatsApp or email. You can share them directly with your doctor." },
    { q: "What makes Yuva Lab the best blood test lab in Jalandhar?", a: "Yuva Lab has been trusted since 2007, offers 3000+ tests, maintains NABL-quality standards, provides 4-hour reports, offers free home collection, and has a 4.9-star rating from 850+ patients." },
  ],
  areas: ["Mithapur", "Model Town", "Nakodar Road", "Civil Lines", "Ladowali Road", "Basti Sheikh", "Sadar Bazar", "Cantt Area", "Urban Estate", "PAP Colony", "Guru Nanak Pura", "New Jalandhar City", "Lajpat Nagar", "Maqsudan", "Preet Nagar", "GT Road", "Burlton Park", "Adarsh Nagar"],
};

export default function BloodTestJalandhar() {
  return <MedicalLandingPage config={config} />;
}

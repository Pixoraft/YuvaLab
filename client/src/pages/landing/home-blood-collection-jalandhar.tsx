import MedicalLandingPage, { type LandingPageConfig } from "@/components/medical-landing-page";
import { Clock, Home, Award, Shield } from "lucide-react";

const config: LandingPageConfig = {
  slug: "/home-blood-collection-jalandhar",
  title: "Home Blood Collection in Jalandhar | Free Sample Pickup – Yuva Lab",
  metaDescription: "Free home blood sample collection in Jalandhar by Yuva Lab. Trained phlebotomists, sterile equipment, digital reports in 4 hours. Book now: +91-9888772209.",
  canonical: "https://yuvalab.in/home-blood-collection-jalandhar",
  h1: "Home Blood Collection in Jalandhar",
  h1Sub: "Free Sample Pickup at Your Doorstep · Sterile Equipment · Reports in 4 Hours",
  heroBadge: "Available Across All Areas of Jalandhar",
  heroColor: "#0891b2",
  intro: "Yuva Lab offers free home blood collection across all areas of Jalandhar, Punjab. Our trained and certified phlebotomists come to your home at a time that suits you, collect your blood sample using sterile single-use equipment, and deliver your reports digitally within 4 hours. No travel, no queues, no inconvenience — just accurate blood test results from the comfort of your home.",
  highlights: [
    { icon: Home, title: "Free Home Visit", desc: "No extra charge for home collection" },
    { icon: Clock, title: "On-Time Arrival", desc: "Phlebotomists arrive at your booked slot" },
    { icon: Award, title: "Certified Staff", desc: "Trained & experienced phlebotomists" },
    { icon: Shield, title: "Sterile Equipment", desc: "Single-use, sealed collection kits" },
  ],
  mainContent: [
    {
      heading: "How Home Blood Collection Works at Yuva Lab",
      body: `Yuva Lab's home blood collection service makes diagnostics convenient for patients across Jalandhar. Here is how the process works:

Step 1 – Book Your Slot: Call or WhatsApp us at +91-9888772209. Choose your preferred date and time window (morning slots 7–11 AM are most popular).

Step 2 – Phlebotomist Visit: Our certified phlebotomist arrives at your home within the booked slot. They carry a sealed, sterile collection kit with all required equipment.

Step 3 – Safe Sample Collection: Blood is drawn using a sterile needle and proper technique. The procedure is quick (usually 2–3 minutes) and minimally discomforting.

Step 4 – Sample Transport: The sample is labelled and transported to our lab in temperature-controlled conditions to maintain sample integrity.

Step 5 – Report Delivery: Once processed, your verified report is sent via WhatsApp or email. Most routine tests are ready within 4 hours.`,
    },
    {
      heading: "Why Home Blood Collection is Safe and Reliable",
      body: `Many patients worry about the reliability of home blood collection compared to visiting a lab. Here is why Yuva Lab's home collection service is completely safe and reliable:

Trained Phlebotomists: Our staff are professionally trained in venepuncture and follow strict aseptic protocols. They are regularly evaluated for technique and patient handling.

Sterile Equipment: Every collection uses brand-new, factory-sealed needles and tubes. Nothing is reused between patients.

Cold-Chain Transport: Samples requiring specific temperature conditions are transported in temperature-controlled containers to preserve sample quality.

Same Lab Processing: Your sample is processed in the same lab as walk-in patients, using the same equipment and quality controls.

Verified Reports: All reports are verified by our qualified pathologists before being sent to patients.

The National Accreditation Board for Testing and Calibration Laboratories (NABL) quality standards are applied to all samples, including those collected at home.`,
    },
    {
      heading: "Who Benefits Most from Home Blood Collection?",
      body: `Home blood collection at Yuva Lab is especially beneficial for:

Elderly Patients: Senior citizens who may have difficulty travelling benefit greatly from having their blood collected at home safely and comfortably.

Bedridden or Post-Surgery Patients: Patients recovering from surgery, injuries, or illness who cannot visit a lab.

Pregnant Women: Expecting mothers who need regular blood monitoring can avoid crowded waiting rooms.

Children: Young children are often more comfortable in a familiar home environment, reducing anxiety during blood collection.

Busy Professionals: Working individuals who find it difficult to take time off for lab visits during working hours.

Patients with Chronic Conditions: Diabetic patients, hypertension patients, and others needing regular testing benefit from the convenience of home collection.

Corporate Employees: Companies can book bulk home collection for employee health check drives.`,
    },
    {
      heading: "Areas Covered for Home Blood Collection in Jalandhar",
      body: `Yuva Lab covers all major residential areas, colonies, and sectors of Jalandhar for home blood collection. Whether you live in Mithapur, Model Town, Civil Lines, Nakodar Road, Ladowali Road, Basti Sheikh, PAP Colony, Urban Estate, or any other locality — our phlebotomist will come to you.

We also serve nearby towns including Phagwara, Kapurthala, Nakodar, and parts of Hoshiarpur upon request (additional travel charges may apply). Call us to confirm availability in your area.`,
    },
    {
      heading: "Tests Available for Home Collection",
      body: `Almost all blood tests available at our lab can be done via home collection, including:

• Complete Blood Count (CBC)
• Liver Function Test (LFT)
• Kidney Function Test (KFT / RFT)
• Thyroid Panel (TSH, T3, T4)
• Blood Sugar (FBS, PPBS, Random)
• HbA1c (Diabetes monitoring)
• Lipid Profile (Cholesterol panel)
• Vitamin D and B12
• Iron Studies (Serum Iron, TIBC, Ferritin)
• Hormone Tests (Testosterone, Oestrogen, Prolactin, FSH, LH)
• Tumour Markers (PSA, AFP, CA-125)
• Infectious Disease Tests (Dengue, Malaria, Typhoid)
• COVID-related tests

Some specialized tests (like culture and sensitivity, bone marrow biopsy, or certain genetic tests) may need to be done at the lab. Our team will advise you during booking.`,
    },
  ],
  services: [
    { name: "Complete Blood Count (CBC)", price: "From ₹260", href: "/test/cbc-haemogram-edta-blood-in-jalandhar" },
    { name: "Thyroid (TSH)", price: "From ₹200", href: "/test/tsh-thyroid-stimulating-hormone-ultrasensitive-serum-in-jalandhar" },
    { name: "Liver Function Test (LFT)", price: "From ₹450", href: "/test/lft-liver-function-test-3-super-maxi-in-jalandhar" },
    { name: "Kidney Function Test (KFT)", price: "From ₹450", href: "/tests" },
    { name: "HbA1c (Diabetes)", price: "From ₹500", href: "/test/hba1c-glycated-haemoglobin-edta-blood-in-jalandhar" },
    { name: "Vitamin D Test", price: "From ₹1,200", href: "/test/vitamin-d-total-25-hydroxy-oh-serum-in-jalandhar" },
    { name: "Lipid Profile", price: "From ₹480", href: "/test/lipid-profile-3-screening-non-fasting-serum-in-jalandhar" },
    { name: "Full Body Checkup Package", price: "From ₹1,299", href: "/packages" },
  ],
  faqs: [
    { q: "Is home blood collection free at Yuva Lab?", a: "Yes, Yuva Lab offers free home blood sample collection with no additional charges for most areas of Jalandhar. The cost of your blood test is the same whether you visit the lab or opt for home collection." },
    { q: "How do I book a home blood collection in Jalandhar?", a: "Call or WhatsApp +91-9888772209 to book. Provide your address, preferred time slot, and the tests you need. Our phlebotomist will arrive at your booked time." },
    { q: "How early can the phlebotomist come for home collection?", a: "Our earliest home collection slots are available from 7 AM. Most fasting blood tests are best collected in the morning. Book the previous evening to confirm a morning slot." },
    { q: "Are home-collected blood samples as accurate as lab-collected ones?", a: "Yes, absolutely. Our phlebotomists follow the same collection protocols as at the lab. Samples are transported under controlled conditions and processed on the same equipment." },
    { q: "How long will it take to get reports after home collection?", a: "Most routine reports are ready within 4 hours of sample collection. You will receive your report via WhatsApp or email. Specialized tests may take 24–48 hours." },
    { q: "Can elderly or bedridden patients use home collection?", a: "Absolutely. Home collection is ideal for elderly patients, bedridden patients, pregnant women, and anyone who cannot travel to the lab. Our phlebotomists are trained to handle all patient types with care." },
    { q: "Do I need to prepare anything for home blood collection?", a: "It depends on your test. For fasting tests (blood sugar, lipid profile, LFT), fast for 8–12 hours. For other tests, no special preparation is needed. Our team will advise you during booking." },
  ],
  areas: ["Mithapur", "Model Town", "Civil Lines", "Nakodar Road", "Ladowali Road", "Basti Sheikh", "PAP Colony", "Urban Estate", "Guru Nanak Pura", "Sadar Bazar", "Cantt Area", "Preet Nagar", "Lajpat Nagar", "New Jalandhar City", "Burlton Park", "Adarsh Nagar", "Maqsudan", "GT Road"],
};

export default function HomeBloodCollectionJalandhar() {
  return <MedicalLandingPage config={config} />;
}

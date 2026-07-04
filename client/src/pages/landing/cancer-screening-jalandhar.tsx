import MedicalLandingPage, { type LandingPageConfig } from "@/components/medical-landing-page";
import { Clock, Home, Award, Shield } from "lucide-react";

const config: LandingPageConfig = {
  slug: "/cancer-screening-jalandhar",
  title: "Cancer Screening in Jalandhar | Tumour Markers – Yuva Lab",
  metaDescription: "Book cancer screening tests in Jalandhar at Yuva Lab. PSA, CA-125, CEA, AFP, CA 19-9 & more tumour markers. Early detection saves lives. Home collection available.",
  canonical: "https://yuvalab.in/cancer-screening-jalandhar",
  h1: "Cancer Screening in Jalandhar",
  h1Sub: "Tumour Markers & Early Detection Tests · Accurate Results · Free Home Collection",
  heroBadge: "Early Detection Saves Lives – Yuva Lab Jalandhar",
  heroColor: "#dc2626",
  intro: "Early detection is the single most powerful tool against cancer. Cancer screening tests at Yuva Lab, Jalandhar help identify elevated cancer markers before symptoms develop, giving patients the best chance of successful treatment. We offer a comprehensive range of tumour marker tests including PSA (prostate), CA-125 (ovarian), CEA (colorectal), AFP (liver), CA 19-9 (pancreatic), CA 15-3 (breast), and many others — with free home collection and fast report delivery. Please note: tumour markers are screening aids and must always be interpreted by an oncologist.",
  highlights: [
    { icon: Shield, title: "Early Detection", desc: "Tumour markers for multiple cancer types" },
    { icon: Award, title: "Expert Pathology", desc: "Pathologist-verified results" },
    { icon: Home, title: "Home Collection", desc: "Free sample pickup across Jalandhar" },
    { icon: Clock, title: "Fast Reports", desc: "Digital delivery within 24 hours" },
  ],
  mainContent: [
    {
      heading: "Cancer Screening Tests Available at Yuva Lab",
      body: `Yuva Lab offers a comprehensive panel of cancer screening and tumour marker tests:

PSA (Prostate-Specific Antigen): Screening test for prostate cancer. Recommended for men above 50, or earlier if family history exists. Elevated PSA may indicate prostate cancer, benign prostatic hyperplasia, or prostatitis.

CA-125 (Cancer Antigen 125): Primary marker for ovarian cancer. Also elevated in endometrial cancer and some benign conditions. Recommended for women with family history of ovarian or BRCA-related cancers.

CEA (Carcinoembryonic Antigen): Marker associated with colorectal cancer. Also elevated in breast, lung, pancreatic, and stomach cancers. Used for monitoring treatment response.

AFP (Alpha-Fetoprotein): Primary marker for hepatocellular carcinoma (liver cancer) and germ cell tumours. Important for patients with chronic hepatitis B or C, or liver cirrhosis.

CA 19-9: Marker for pancreatic and biliary tract cancers. Also used for monitoring gastrointestinal cancers.

CA 15-3 and CA 27-29: Markers used for monitoring breast cancer treatment and recurrence.

HCG (Human Chorionic Gonadotropin): Marker for testicular cancer (germ cell tumours) and trophoblastic diseases.

LDH (Lactate Dehydrogenase): Elevated in lymphoma, leukaemia, and other malignancies. Also used as a general marker of tissue damage.

Beta-2 Microglobulin: Marker for multiple myeloma, lymphoma, and leukaemia.

Calcitonin: Marker for medullary thyroid carcinoma.`,
    },
    {
      heading: "Understanding Cancer Screening vs. Diagnostic Tests",
      body: `It is important to understand the difference between cancer screening and cancer diagnosis:

Cancer Screening Tests (like tumour markers): These are blood tests that measure specific proteins or substances produced by cancer cells or in response to cancer. They are used to identify individuals at higher risk who need further investigation. A positive tumour marker does not confirm cancer — it indicates the need for further testing.

Diagnostic Tests: After an abnormal screening result, your doctor will order imaging tests (CT scan, MRI, PET scan, ultrasound), biopsy, or other tests to confirm or rule out cancer.

Important limitations of tumour markers:
• Some cancers do not produce elevated markers even at advanced stages (false negatives)
• Tumour markers can be elevated due to non-cancerous conditions (false positives)
• No single tumour marker can diagnose all cancers
• Results must always be interpreted by an oncologist in the context of clinical symptoms, imaging, and history

Use tumour markers as part of a comprehensive health screening strategy, not as a standalone cancer diagnostic tool.`,
    },
    {
      heading: "Who Should Consider Cancer Screening Tests?",
      body: `Cancer screening tests are recommended for:

High-Risk Individuals: Those with a strong family history of cancer (especially breast, ovarian, colorectal, prostate, or lung cancer) should start screening earlier.

Age-Based Screening:
• Men above 50: PSA for prostate cancer
• Women above 40: CA-125 for ovarian cancer, alongside mammography
• Adults above 45: CEA for colorectal cancer screening
• Patients with chronic liver disease (hepatitis B, C, cirrhosis): AFP for liver cancer
• Smokers: CEA and lung-specific markers

Preventive Health Checkup Addition: Adding tumour markers to your annual full body checkup provides a more comprehensive health picture.

Monitoring Known Cancer: Patients diagnosed with cancer use tumour markers to monitor treatment response and detect recurrence.

Post-Treatment Monitoring: Regular tumour marker testing after cancer treatment helps detect recurrence early.`,
    },
    {
      heading: "Genetic Cancer Risk Testing",
      body: `In addition to tumour markers, Yuva Lab offers genetic testing for inherited cancer risk:

BRCA1/BRCA2 Gene Testing: Mutations in BRCA genes significantly increase the risk of breast and ovarian cancer. Testing is recommended for women with a strong family history.

Lynch Syndrome Panel: Genetic mutations associated with colorectal, endometrial, and ovarian cancer risk.

Pharmacogenomics: Testing how your genetic makeup affects your response to cancer medications (important for tailoring chemotherapy).

These tests are done from a blood or saliva sample and typically take 3–7 days for results. Genetic counselling is recommended before and after testing.`,
    },
    {
      heading: "Cancer Screening Panel Prices at Yuva Lab",
      body: `Cancer screening test prices at Yuva Lab Jalandhar:

• PSA (Prostate-Specific Antigen): From ₹750
• CA-125 (Ovarian cancer marker): Call for pricing
• CEA (Colorectal cancer marker): Call for pricing
• AFP (Liver cancer marker): From ₹750
• CA 19-9 (Pancreatic cancer marker): From ₹1,300
• CA 15-3 (Breast cancer marker): From ₹1,390
• HCG (Testicular cancer marker): Call for pricing
• LDH: From ₹345
• Comprehensive Cancer Screening Panel (Multiple markers): Call +91-9888772209

Home collection is free for all cancer screening tests across Jalandhar. Call +91-9888772209 for current pricing and package options.`,
    },
  ],
  services: [
    { name: "PSA (Prostate Cancer Marker)", price: "From ₹750", href: "/test/total-psa-prostate-specific-antigen-serum-in-jalandhar" },
    { name: "CA-125 (Ovarian Cancer Marker)", price: "Call for price", href: "/contact" },
    { name: "CEA (Colorectal Cancer Marker)", price: "Call for price", href: "/contact" },
    { name: "AFP (Liver Cancer Marker)", price: "From ₹750", href: "/test/afp-alpha-feto-protein-serum-in-jalandhar" },
    { name: "CA 19-9 (Pancreatic Marker)", price: "From ₹1,300", href: "/test/ca-19-9-serum-in-jalandhar" },
    { name: "CA 15-3 (Breast Cancer Marker)", price: "From ₹1,390", href: "/test/ca-15-3-serum-in-jalandhar" },
    { name: "LDH (Lymphoma Marker)", price: "From ₹345", href: "/test/ldh-lactate-dehydrogenase-serum-in-jalandhar" },
    { name: "Cancer Screening Panel (Multiple Markers)", price: "Call for price", href: "/contact" },
  ],
  faqs: [
    { q: "What cancer tests are available in Jalandhar at Yuva Lab?", a: "Yuva Lab offers PSA (prostate), CA-125 (ovarian), CEA (colorectal), AFP (liver), CA 19-9 (pancreatic), CA 15-3 (breast), HCG (testicular), LDH (lymphoma), and many more cancer screening markers in Jalandhar." },
    { q: "Can a blood test detect cancer?", a: "Blood tests for tumour markers can indicate an elevated risk of certain cancers but cannot definitively diagnose cancer. A positive result means further investigation (imaging, biopsy) is needed. Tumour markers must always be interpreted by an oncologist." },
    { q: "What is the price of a cancer screening test in Jalandhar?", a: "Individual cancer markers at Yuva Lab: PSA ₹750, AFP ₹750, CA 19-9 ₹1,300, CA 15-3 ₹1,390, LDH ₹345. Call +91-9888772209 for current pricing on CEA, CA-125, and comprehensive panels." },
    { q: "Is home collection available for cancer screening tests?", a: "Yes, free home blood collection is available for all cancer screening tests across Jalandhar." },
    { q: "How long does it take to get cancer screening test results?", a: "Most tumour marker results are ready within 24 hours. You will receive your report digitally via WhatsApp or email." },
    { q: "At what age should men get a PSA test?", a: "Men above 50 should get an annual PSA test. Men with a family history of prostate cancer should start at 40–45. African men and those with BRCA2 mutations should also discuss earlier screening with their doctor." },
    { q: "What if my tumour marker result is elevated?", a: "An elevated tumour marker does not confirm cancer. Many non-cancerous conditions can cause elevation. Consult an oncologist who will evaluate your result alongside symptoms, physical examination, and possibly imaging or biopsy." },
  ],
  areas: ["Mithapur", "Model Town", "Civil Lines", "Nakodar Road", "Ladowali Road", "Basti Sheikh", "PAP Colony", "Urban Estate", "Guru Nanak Pura", "Sadar Bazar", "Lajpat Nagar", "GT Road", "Preet Nagar", "New Jalandhar City", "Maqsudan"],
};

export default function CancerScreeningJalandhar() {
  return <MedicalLandingPage config={config} />;
}

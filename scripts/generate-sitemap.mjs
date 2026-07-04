import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function makeSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const testsFile = fs.readFileSync(
  path.join(root, "client/src/data/tests-data.ts"),
  "utf8"
);
const blogFile = fs.readFileSync(
  path.join(root, "client/src/data/blog-posts.ts"),
  "utf8"
);

const testNames = [];
const seen = new Set();
const nameRegex = /"name":\s*"((?:[^"\\]|\\.)*)"/g;
let m;
while ((m = nameRegex.exec(testsFile)) !== null) {
  const name = m[1].replace(/\\"/g, '"');
  const slug = `${makeSlug(name)}-in-jalandhar`;
  if (!seen.has(slug)) {
    seen.add(slug);
    testNames.push({ name, slug });
  }
}

const blogSlugs = [];
const blogSeen = new Set();
const slugRegex = /slug:\s*"([^"]+)"/g;
while ((m = slugRegex.exec(blogFile)) !== null) {
  if (!blogSeen.has(m[1])) {
    blogSeen.add(m[1]);
    blogSlugs.push(m[1]);
  }
}

const today = "2026-07-02";
const BASE = "https://yuvalab.in";

const corePages = [
  { loc: "/", priority: "1.0", changefreq: "daily" },
  { loc: "/services", priority: "0.9", changefreq: "weekly" },
  { loc: "/tests", priority: "0.9", changefreq: "daily" },
  { loc: "/packages", priority: "0.9", changefreq: "weekly" },
  { loc: "/about", priority: "0.7", changefreq: "monthly" },
  { loc: "/contact", priority: "0.8", changefreq: "monthly" },
  { loc: "/blog", priority: "0.7", changefreq: "weekly" },
  { loc: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { loc: "/terms-conditions", priority: "0.3", changefreq: "yearly" },
  // SEO Landing Pages
  { loc: "/blood-test-jalandhar", priority: "0.95", changefreq: "weekly" },
  { loc: "/home-blood-collection-jalandhar", priority: "0.95", changefreq: "weekly" },
  { loc: "/full-body-checkup-jalandhar", priority: "0.95", changefreq: "weekly" },
  { loc: "/preventive-health-checkup-jalandhar", priority: "0.9", changefreq: "weekly" },
  { loc: "/thyroid-test-jalandhar", priority: "0.95", changefreq: "weekly" },
  { loc: "/diagnostic-centre-jalandhar", priority: "0.9", changefreq: "weekly" },
  { loc: "/cancer-screening-jalandhar", priority: "0.9", changefreq: "weekly" },
  { loc: "/blood-test-price-jalandhar", priority: "0.9", changefreq: "weekly" },
  { loc: "/pathology-lab-jalandhar", priority: "0.9", changefreq: "weekly" },
  { loc: "/health-checkup-packages-jalandhar", priority: "0.95", changefreq: "weekly" },
];

function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(loc, lastmod, changefreq, priority, image) {
  let xml = `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>`;
  if (image) {
    xml += `\n    <image:image>\n      <image:loc>${escapeXml(image.loc)}</image:loc>\n      <image:caption>${escapeXml(image.caption)}</image:caption>\n    </image:image>`;
  }
  xml += `\n  </url>\n`;
  return xml;
}

function buildSitemap(urls) {
  let body = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  body += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
  for (const u of urls) body += u;
  body += `</urlset>\n`;
  return body;
}

const mainUrls = [];
for (const p of corePages) {
  const image =
    p.loc === "/"
      ? {
          loc: `${BASE}/newlogo.jpeg`,
          caption: "YuvaLab Diagnostics - Best Medical Lab in Jalandhar",
        }
      : null;
  mainUrls.push(urlEntry(`${BASE}${p.loc}`, today, p.changefreq, p.priority, image));
}
for (const slug of blogSlugs) {
  mainUrls.push(urlEntry(`${BASE}/blog/${slug}`, today, "monthly", "0.6"));
}

const testUrls = testNames.map(({ slug }) =>
  urlEntry(`${BASE}/test/${slug}`, today, "weekly", "0.7")
);

const CHUNK = 5000;
const testChunks = [];
for (let i = 0; i < testUrls.length; i += CHUNK) {
  testChunks.push(testUrls.slice(i, i + CHUNK));
}

const outDir = path.join(root, "client/public");

fs.writeFileSync(path.join(outDir, "sitemap-main.xml"), buildSitemap(mainUrls));
testChunks.forEach((chunk, i) => {
  fs.writeFileSync(
    path.join(outDir, `sitemap-tests-${i + 1}.xml`),
    buildSitemap(chunk)
  );
});

let index = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
index += `  <sitemap><loc>${BASE}/sitemap-main.xml</loc><lastmod>${today}</lastmod></sitemap>\n`;
testChunks.forEach((_, i) => {
  index += `  <sitemap><loc>${BASE}/sitemap-tests-${i + 1}.xml</loc><lastmod>${today}</lastmod></sitemap>\n`;
});
index += `</sitemapindex>\n`;
fs.writeFileSync(path.join(outDir, "sitemap.xml"), index);

console.log(
  `Sitemap generated: ${corePages.length} core + ${blogSlugs.length} blog + ${testUrls.length} test URLs across ${testChunks.length} test sitemaps.`
);

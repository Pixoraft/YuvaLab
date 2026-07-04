import { useRoute } from "wouter";
import { Calendar, User, Clock, ArrowLeft, Tag, Share2, ChevronRight, Phone, MessageCircle, CalendarCheck, BookOpen, Package, Microscope, MapPin, Sparkles } from "lucide-react";
import { getBlogPostBySlug, getRelatedPosts, categoryMeta } from "@/data/blog-posts";
import SEOHead from "@/components/seo-head";
import { Link } from "wouter";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const [post, setPost] = useState(getBlogPostBySlug(slug || ""));
  const [relatedPosts, setRelatedPosts] = useState(post ? getRelatedPosts(post.id) : []);

  useEffect(() => {
    if (slug) {
      const foundPost = getBlogPostBySlug(slug);
      setPost(foundPost);
      if (foundPost) setRelatedPosts(getRelatedPosts(foundPost.id));
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const catMeta = categoryMeta[post.category];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        image: post.image,
        author: { "@type": "Person", name: post.author },
        publisher: {
          "@type": "Organization",
          name: "Yuva Lab",
          logo: { "@type": "ImageObject", url: "https://yuvalab.in/logo.png" },
        },
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://yuvalab.in/blog/${post.slug}` },
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        wordCount: post.content.split(" ").length,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yuvalab.in/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://yuvalab.in/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://yuvalab.in/blog/${post.slug}` },
        ],
      },
      {
        "@type": "MedicalBusiness",
        name: "Yuva Lab",
        telephone: "+91-9888772209",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kalgidhar Avenue, Mithapur",
          addressLocality: "Jalandhar",
          addressRegion: "Punjab",
          postalCode: "144022",
          addressCountry: "IN",
        },
        areaServed: ["Jalandhar", "Mithapur", "Punjab"],
      },
    ],
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, text: post.excerpt, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const parseContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (!line.trim()) return null;
      if (line.startsWith("# "))  return <h1 key={i} className="text-3xl font-black text-gray-900 mt-10 mb-5 leading-tight">{line.slice(2)}</h1>;
      if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-extrabold text-gray-900 mt-8 mb-4 leading-tight border-l-4 border-blue-500 pl-4">{line.slice(3)}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.slice(4)}</h3>;
      if (line.startsWith("- "))  return <li key={i} className="text-gray-600 mb-2 ml-4 flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />{line.slice(2)}</li>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-bold text-gray-900 mb-3">{line.slice(2, -2)}</p>;
      if (line.startsWith("|")) {
        const cells = line.split("|").filter(c => c.trim());
        const isHeader = content.split("\n")[i + 1]?.startsWith("|---");
        const isSep = line.includes("---");
        if (isSep) return null;
        return (
          <tr key={i} className={isHeader ? "bg-blue-600 text-white" : "border-b border-gray-100 hover:bg-blue-50 transition-colors"}>
            {cells.map((cell, j) => isHeader
              ? <th key={j} className="px-4 py-3 text-left text-sm font-bold">{cell.trim()}</th>
              : <td key={j} className="px-4 py-3 text-sm text-gray-700">{cell.trim()}</td>
            )}
          </tr>
        );
      }
      return <p key={i} className="text-gray-600 mb-4 leading-relaxed text-base">{line}</p>;
    }).filter(Boolean);
  };

  const hasTable = post.content.includes("|");

  return (
    <>
      <SEOHead
        title={`${post.title} | Yuva Lab Health Blog Jalandhar`}
        description={post.metaDescription}
        keywords={post.keywords}
        ogImage={post.image}
        ogType="article"
        canonical={`https://yuvalab.in/blog/${post.slug}`}
        schema={schema}
      />

      <div className="pt-20 min-h-screen bg-white">

        {/* ══════════════ BREADCRUMB + BACK ══════════════ */}
        <div className="bg-gradient-to-r from-blue-50 to-white border-b border-gray-100 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 flex-wrap">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500" aria-label="Breadcrumb">
              <Link href="/"><span className="hover:text-blue-600 cursor-pointer transition-colors">Home</span></Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/blog"><span className="hover:text-blue-600 cursor-pointer transition-colors">Blog</span></Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-blue-700 font-semibold truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
            </nav>
            <Link href="/blog">
              <button className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>
            </Link>
          </div>
        </div>

        {/* ══════════════ ARTICLE ══════════════ */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <header className="mb-10">
            {/* Category + Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ background: catMeta?.color ?? "#1565c0" }}>
                {catMeta?.icon && <catMeta.icon className="w-3.5 h-3.5" />} {post.category}
              </span>
              {post.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg text-xs font-medium">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg text-xs font-semibold">
                <MapPin className="w-3 h-3" />
                Jalandhar, Punjab
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-gray-400 text-sm mb-8 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: catMeta?.color ?? "#1565c0" }}>
                  {post.author.split(" ")[1]?.[0] ?? post.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-gray-700 text-xs">{post.author}</div>
                  <div className="text-xs text-gray-400">Yuva Lab Medical Team</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <button onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors font-semibold text-sm ml-auto">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Hero image */}
            <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden mb-10 shadow-xl">
              <img
                src={post.image}
                alt={`${post.title} – Yuva Lab Jalandhar`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </header>

          {/* ══ Internal linking box ══ */}
          <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">Quick Links – Yuva Lab Jalandhar</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/tests">
                <button className="group inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-blue-200 text-blue-700 px-3 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                  <Microscope className="w-3.5 h-3.5" />
                  Explore all diagnostic tests in Jalandhar
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/packages">
                <button className="group inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-blue-200 text-blue-700 px-3 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                  <Package className="w-3.5 h-3.5" />
                  View full body checkup packages
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button className="group inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-blue-200 text-blue-700 px-3 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                  <BookOpen className="w-3.5 h-3.5" />
                  View all blood test services
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* ══ Article content ══ */}
          <div className={`prose-content ${hasTable ? "has-table" : ""}`}>
            {hasTable ? (
              <div>
                {post.content.split("\n").reduce((acc: JSX.Element[], line, i, arr) => {
                  if (line.startsWith("|")) {
                    const existingTable = acc.length > 0 && acc[acc.length - 1].type === "div" && acc[acc.length - 1].props["data-table"];
                    if (!existingTable) {
                      const tableRows: string[] = [];
                      let j = i;
                      while (j < arr.length && arr[j].startsWith("|")) {
                        tableRows.push(arr[j]);
                        j++;
                      }
                      const headerRow = tableRows[0].split("|").filter(c => c.trim());
                      const bodyRows = tableRows.slice(2);
                      acc.push(
                        <div key={`table-${i}`} data-table="true" className="overflow-x-auto my-6 rounded-xl shadow-sm border border-gray-200">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                {headerRow.map((h, k) => <th key={k} className="px-4 py-3 text-left text-sm font-bold">{h.trim()}</th>)}
                              </tr>
                            </thead>
                            <tbody>
                              {bodyRows.map((row, r) => {
                                const cells = row.split("|").filter(c => c.trim());
                                return (
                                  <tr key={r} className={r % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                                    {cells.map((cell, c) => <td key={c} className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">{cell.trim()}</td>)}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    return acc;
                  }
                  const rendered = parseContent(line);
                  if (rendered[0]) acc.push(rendered[0] as JSX.Element);
                  return acc;
                }, [])}
              </div>
            ) : (
              <div>{parseContent(post.content)}</div>
            )}
          </div>

          {/* ══ Book CTA inline ══ */}
          <div className="mt-14 p-7 rounded-2xl text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1565c0, #7c3aed)" }}>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <h3 className="text-xl font-black mb-2 relative z-10">
              Book {post.category === "Lab Tests" || post.category.includes("Diabetes") || post.category.includes("Cardiac") || post.category.includes("Endocrinology") ? "This" : "a"} Test in Jalandhar at Yuva Lab
            </h3>
            <p className="text-blue-100 mb-6 text-sm relative z-10">
              Free home collection · 4-hour reports · Trusted quality · Affordable prices across Jalandhar &amp; Mithapur, Punjab.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 relative z-10">
              <Link href="/tests">
                <button className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-3 rounded-xl shadow hover:bg-blue-50 transition-all hover:scale-105 text-sm"
                  data-testid="inline-book-test-btn">
                  <Microscope className="w-4 h-4" />
                  Explore diagnostic tests in Jalandhar
                </button>
              </Link>
              <button onClick={() => window.open("https://wa.me/919888772209?text=Hi!%20I%20read%20your%20blog%20and%20want%20to%20book%20a%20test%20at%20Yuva%20Lab%20Jalandhar.", "_blank")}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-3 rounded-xl shadow transition-all hover:scale-105 text-sm"
                data-testid="inline-whatsapp-btn">
                <MessageCircle className="w-4 h-4" />
                WhatsApp to Book
              </button>
              <a href="tel:+919888772209"
                className="inline-flex items-center gap-2 border border-white/60 text-white font-bold px-5 py-3 rounded-xl hover:bg-white/10 transition-all text-sm"
                data-testid="inline-call-btn">
                <Phone className="w-4 h-4" />
                Call +91-9888772209
              </a>
            </div>
          </div>

          {/* ══ Tags ══ */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span key={i} className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* ══════════════ RELATED POSTS ══════════════ */}
        {relatedPosts.length > 0 && (
          <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                  <Sparkles className="w-4 h-4" />
                  Related Articles
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">More Health Guides from Yuva Lab</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => {
                  const rMeta = categoryMeta[rp.category];
                  return (
                    <Link key={rp.id} href={`/blog/${rp.slug}`}>
                      <div className="group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:border-blue-200">
                        <div className="h-1.5 w-full" style={{ background: rMeta?.color ?? "#1565c0" }} />
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={rp.image}
                            alt={`${rp.title} – Yuva Lab Jalandhar`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="text-white text-xs font-bold px-2.5 py-1 rounded-xl"
                              style={{ background: rMeta?.color ?? "#1565c0" }}>
                              {rMeta?.icon && <rMeta.icon className="w-3 h-3" />} {rp.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-base font-extrabold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors leading-snug">
                            {rp.title}
                          </h3>
                          <p className="text-gray-500 text-xs mb-3 line-clamp-2 leading-relaxed">{rp.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {rp.readTime}</span>
                            <span className="text-blue-600 font-semibold flex items-center gap-1">Read Guide <ChevronRight className="w-3.5 h-3.5" /></span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Internal links row */}
              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-center">
                <p className="font-bold mb-4 text-lg">Explore More at Yuva Lab Jalandhar</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/tests">
                    <button className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-all">
                      <Microscope className="w-4 h-4" />
                      Book diagnostic test in Jalandhar
                    </button>
                  </Link>
                  <Link href="/packages">
                    <button className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/20 transition-all">
                      <Package className="w-4 h-4" />
                      Full body checkup packages
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/20 transition-all">
                      <CalendarCheck className="w-4 h-4" />
                      Contact Yuva Lab
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogPost;

import { useRoute } from "wouter";
import { Calendar, User, Clock, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blog-posts";
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
      if (foundPost) {
        setRelatedPosts(getRelatedPosts(foundPost.id));
      }
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/blog">
            <Button className="bg-primary text-primary-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Generate schema markup for the blog post
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yuva Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yuvalab.com/logo.png"
      }
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yuvalab.com/blog/${post.slug}`
    },
    "keywords": post.keywords.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.split(' ').length
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Yuva Lab Health Blog`}
        description={post.metaDescription}
        keywords={post.keywords}
        ogImage={post.image}
        ogType="article"
        canonical={`https://yuvalab.com/blog/${post.slug}`}
        schema={schema}
      />
      
      <div className="pt-20 min-h-screen bg-background">
        {/* Back Navigation */}
        <div className="bg-muted/30 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-8">
            {/* Category and Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              {post.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs flex items-center">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleShare}
                className="text-primary hover:text-primary/80 p-0"
              >
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.substring(2)}
                  </h1>
                );
              }
              
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-foreground mt-6 mb-3">
                    {paragraph.substring(3)}
                  </h2>
                );
              }
              
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-foreground mt-4 mb-2">
                    {paragraph.substring(4)}
                  </h3>
                );
              }
              
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold text-foreground mb-2">
                    {paragraph.substring(2, paragraph.length - 2)}
                  </p>
                );
              }
              
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-muted-foreground mb-1 ml-4">
                    {paragraph.substring(2)}
                  </li>
                );
              }
              
              return (
                <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Need Medical Testing in Jalandhar?
            </h3>
            <p className="text-muted-foreground mb-4">
              Get fast, accurate results with our 4-hour reporting and home collection service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/tests">
                <Button className="bg-primary text-primary-foreground">
                  Book Test Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">
                  Contact Us: +91-9888772209
                </Button>
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-muted/30 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-card rounded-xl shadow-lg overflow-hidden hover-lift cursor-pointer">
                      <div className="relative h-48">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary/90 text-white px-2 py-1 rounded text-xs font-semibold">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{relatedPost.author.split(' ')[1]}</span>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogPost;
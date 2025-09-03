import { Calendar, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { blogPosts, getCategories, getPostsByCategory, getFeaturedPosts } from "@/data/blog-posts";
import SEOHead from "@/components/seo-head";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = getCategories();
  const featuredPosts = getFeaturedPosts();
  const displayedPosts = getPostsByCategory(selectedCategory);

  // Generate schema markup for the blog page
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Yuva Lab Health Blog",
    "description": "Expert health insights, medical tips, and diagnostic information from Yuva Lab's medical professionals in Jalandhar.",
    "url": "https://yuvalab.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Yuva Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yuvalab.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://yuvalab.com/blog"
    }
  };

  return (
    <>
      <SEOHead
        title="Health Blog | Expert Medical Insights - Yuva Lab Jalandhar"
        description="Expert health insights, medical tips, and diagnostic information from Yuva Lab's medical professionals in Jalandhar. Learn about blood tests, health checkups, and more."
        keywords={["health blog", "medical tips", "blood test information", "health checkup", "Jalandhar medical blog", "diagnostic insights"]}
        canonical="https://yuvalab.com/blog"
        schema={schema}
      />
      
      <div className="pt-14 sm:pt-16 md:pt-20" data-testid="blog-page">
        <div className="bg-medical-blue text-white py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" data-testid="blog-page-title">
              Health Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto" data-testid="blog-page-subtitle">
              Expert insights, health tips, and the latest in medical diagnostics
            </p>
          </div>
        </div>
      
        {/* Featured Post */}
        {featuredPosts.map((post) => (
        <div key={post.id} className="py-8 sm:py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden" data-testid={`featured-post-${post.id}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-48 sm:h-64 lg:h-auto">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-testid={`featured-post-image-${post.id}`}
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{post.category}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4" data-testid={`featured-post-title-${post.id}`}>
                    {post.title}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6" data-testid={`featured-post-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                      data-testid={`featured-post-read-more-${post.id}`}
                    >
                      Read More <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Categories Filter */}
      <div className="py-4 sm:py-6 lg:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center" data-testid="blog-categories">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2"
                onClick={() => setSelectedCategory(category)}
                data-testid={`category-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="py-8 sm:py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {displayedPosts.filter(post => !post.featured).map((post) => (
              <div 
                key={post.id}
                className="bg-card rounded-xl shadow-lg overflow-hidden hover-lift"
                data-testid={`blog-post-${post.id}`}
              >
                <div className="relative h-40 sm:h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-testid={`blog-post-image-${post.id}`}
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-primary/90 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{post.author.split(' ')[1]}</span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 line-clamp-2" data-testid={`blog-post-title-${post.id}`}>
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-3" data-testid={`blog-post-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary/80 p-0 h-auto font-semibold text-sm"
                      data-testid={`blog-post-read-more-${post.id}`}
                    >
                      Read More <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Newsletter Signup */}
      <div className="py-8 sm:py-12 lg:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4" data-testid="newsletter-title">
            Stay Updated with Health Tips
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8" data-testid="newsletter-description">
            Subscribe to our newsletter for the latest health insights, tips, and updates from our medical experts.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 max-w-sm sm:max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
              data-testid="newsletter-email-input"
            />
            <Button 
              className="bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
              data-testid="newsletter-subscribe-button"
            >
              Subscribe
            </Button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbProps {
  items?: Array<{ label: string; href?: string | null }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const [location] = useLocation();

  // Auto-generate breadcrumbs based on current route if no items provided
  const generateBreadcrumbs = () => {
    if (items) return items;

    const pathSegments = location.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', href: '/' }];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);
      label = label.replace(/-/g, ' ');
      
      // Don't add href for the last item (current page)
      const href = index === pathSegments.length - 1 ? null : currentPath;
      
      breadcrumbs.push({ label, href });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Add breadcrumb schema
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://yuvalab.com${item.href || location}`
      }))
    };

    // Remove existing breadcrumb schema
    const existingSchema = document.querySelector('script[data-schema="breadcrumb"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new breadcrumb schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'breadcrumb');
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.querySelector('script[data-schema="breadcrumb"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [location, breadcrumbs]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <div className="flex items-center">
        {breadcrumbs.map((item, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors flex items-center">
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium flex items-center">
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
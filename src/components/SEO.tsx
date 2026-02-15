import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noindex?: boolean;
}

const SEO = ({ 
  title = 'Ayyan SignAge | Premium Printing & Advertising Solutions in Saudi Arabia',
  description = 'Leading printing and advertising company in Saudi Arabia. Professional signage, wall cladding, banner designs, NFC cards, gift boxes, brochures, visiting cards, uniforms, company profiles, menu cards & advertising services. Quality solutions for your business.',
  keywords = 'signage Saudi Arabia, digital signage, wall cladding, banner printing, NFC cards, gift boxes, brochure design, visiting cards, business cards, uniform printing, company profile design, menu cards, advertising services, printing services Saudi Arabia, branding solutions, corporate branding, custom signage, digital printing, offset printing, large format printing, Ayyan Signage',
  image = 'https://ayyansignage-digital.com/og-image.jpg',
  type = 'website',
  author = 'Ayyan Signage Digital',
  publishedTime,
  modifiedTime,
  section,
  noindex = false
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://ayyansignage-digital.com${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
    
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Robots meta tag
    const robotsContent = noindex 
      ? 'noindex, nofollow' 
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    updateMetaTag('robots', robotsContent);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:alt', `${title} - Ayyan Signage Digital`, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Ayyan Signage Digital', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Article specific tags
    if (type === 'article' && publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
      if (section) {
        updateMetaTag('article:section', section, true);
      }
      if (author) {
        updateMetaTag('article:author', author, true);
      }
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', `${title} - Ayyan Signage Digital`);
    updateMetaTag('twitter:url', currentUrl);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Add structured data for breadcrumbs if not on homepage
    if (location.pathname !== '/') {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ayyansignage-digital.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": title.split('|')[0].trim(),
            "item": currentUrl
          }
        ]
      };

      let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    }
  }, [title, description, keywords, image, type, currentUrl, author, publishedTime, modifiedTime, section, noindex, location.pathname]);

  return null;
};

export default SEO;

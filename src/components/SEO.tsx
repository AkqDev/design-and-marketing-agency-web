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
  title = 'Website, Printing & Digital Marketing Services Jeddah | Ayyan Signage',
  description = 'Ayyan Signage provides website design, company profile design, menu card design, poster & post design, digital marketing, HR forms printing, NFC cards, banners, and corporate branding services in Jeddah, Saudi Arabia. خدمات تصميم المواقع، تصميم ملفات الشركات، تصميم قوائم الطعام، تصميم البوستات، التسويق الرقمي، طباعة استمارات الموارد البشرية، بطاقات NFC، البانرات، والعلامة التجارية للشركات في جدة.',
  keywords = 'website design Jeddah, web development Saudi Arabia, digital marketing Jeddah, social media marketing Saudi Arabia, SEO services Jeddah, company profile design Jeddah, menu card design Saudi Arabia, brochure design Jeddah, business card printing Saudi Arabia, visiting card printing Jeddah, banner printing Saudi Arabia, poster design Jeddah, flyer design Saudi Arabia, custom gift boxes printing Jeddah, uniform printing Jeddah, HR forms printing Saudi Arabia, NFC cards printing Jeddah, corporate branding Jeddah, advertising services Saudi Arabia, large format printing Jeddah, wall cladding printing Saudi Arabia, custom signage Jeddah, digital signage Saudi Arabia, تصميم مواقع جدة, تطوير مواقع السعودية, التسويق الرقمي جدة, تصميم موقع متجاوب جدة, تصميم ملف الشركة جدة, تصميم قائمة الطعام السعودية, تصميم بروشورات جدة, طباعة بطاقات العمل السعودية, طباعة بطاقات الزيارة جدة, طباعة لافتات السعودية, تصميم ملصقات جدة, تصميم منشورات السعودية, طباعة صناديق هدايا مخصصة جدة, طباعة زي موحد جدة, طباعة استمارات الموارد البشرية السعودية, طباعة بطاقات NFC جدة, العلامة التجارية للشركات جدة, خدمات الإعلان السعودية, الطباعة كبيرة الحجم جدة, تكسية الجدران السعودية, لافتات مخصصة جدة, لوحات رقمية السعودية',
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
    updateMetaTag('og:locale:alternate', 'ar_SA', true);

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

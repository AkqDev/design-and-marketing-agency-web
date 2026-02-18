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
  title = 'Top Printing & Advertising Services in Jeddah & Riyadh | Ayyan Signage',
  description = '#1 Printing & Advertising Company in Jeddah & Riyadh. Affordable branding agency offering signage printing, custom printing solutions, digital marketing, social media services, paid ads, NFC cards, banners, wall cladding & corporate branding. خدمات الطباعة والإعلان في جدة والرياض - تصميم مواقع، تسويق رقمي، طباعة لافتات، بطاقات NFC، علامة تجارية للشركات.',
  keywords = 'top printing and advertising services in jeddah, affordable branding agency in jeddah, branding agency in jeddah, best social media marketing agency in jeddah, signage printing solutions, custom printing solutions, paid ads and social media services in jeddah, printing services jeddah, signage company jeddah, printing company jeddah, digital printing jeddah, large format printing jeddah, best printing shop jeddah, cheap printing jeddah, online printing jeddah, advertising company jeddah, branding company jeddah, sign board jeddah, led signage jeddah, 3d signboard jeddah, acrylic signage jeddah, shop signboard jeddah, outdoor signage jeddah, indoor signage jeddah, flex printing jeddah, vinyl printing jeddah, sticker printing jeddah, car sticker printing jeddah, banner printing jeddah, roll up banner jeddah, visiting card printing jeddah, business card printing jeddah, nfc business card jeddah, brochure printing jeddah, flyer printing jeddah, catalog printing jeddah, customized gifts jeddah, corporate gifts printing jeddah, custom t shirt printing jeddah, uniform printing jeddah, graphic designer jeddah, logo design jeddah, branding design jeddah, company profile design jeddah, menu design jeddah, social media post design jeddah, website design jeddah, website development jeddah, ecommerce website jeddah, seo services jeddah, local seo jeddah, google ranking service jeddah, digital marketing agency jeddah, social media marketing jeddah, google ads service jeddah, meta ads service jeddah, tiktok ads service jeddah, snapchat ads service jeddah, best printing company in jeddah, cheap banner printing in jeddah, same day printing jeddah, urgent printing service jeddah, logo and branding service jeddah, restaurant menu printing jeddah, real estate signage jeddah, shop branding jeddah, office branding jeddah, car branding jeddah, vehicle sticker jeddah, printing services riyadh, advertising services riyadh, مطابع جدة, طباعة جدة, مطابع رقمية جدة, لوحات محلات جدة, لوحات اعلانية جدة, طباعة بنر جدة, طباعة استكرات جدة, طباعة كروت شخصية جدة, تصميم شعار جدة, تصميم بروفايل شركة جدة, تصميم منيو مطعم جدة, تصميم مواقع الكترونية جدة, تسويق الكتروني جدة, ادارة حسابات سوشيال ميديا جدة, اعلانات جوجل جدة, اعلانات انستقرام جدة, مطابع الرياض, خدمات الإعلان الرياض',
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

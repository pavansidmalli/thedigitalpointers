import React, { useEffect } from 'react';
import { defaultSEO, seoRoutes } from '../data/seoConfig';

interface SEOHeadProps {
  pathname: string;
  customTitle?: string;
  customDescription?: string;
  articleData?: {
    headline: string;
    description: string;
    datePublished: string;
    authorName: string;
    category: string;
  };
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  pathname,
  customTitle,
  customDescription,
  articleData
}) => {
  useEffect(() => {
    // Normalize path
    let normalized = pathname;
    if (!normalized.endsWith('/') && !normalized.includes('.')) {
      normalized = `${normalized}/`;
    }

    const routeConfig = seoRoutes[normalized] || defaultSEO;
    const title = customTitle || routeConfig.title;
    const description = customDescription || routeConfig.description;
    const canonical = `https://digitalpointer.agency${normalized === '/' ? '' : normalized}`;

    // Update Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attribute}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper to update link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Standard SEO Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow');
    setLinkTag('canonical', canonical);

    // Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:site_name', 'Digital Pointer');
    setMetaTag('property', 'og:type', articleData ? 'article' : 'website');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // Dynamic JSON-LD structured data injection
    const existingScript = document.getElementById('seo-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'seo-json-ld';
    jsonLdScript.type = 'application/ld+json';

    let schema: object;

    if (articleData) {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': articleData.headline,
        'description': articleData.description,
        'datePublished': articleData.datePublished,
        'author': {
          '@type': 'Organization',
          'name': articleData.authorName
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Digital Pointer',
          'url': 'https://digitalpointer.agency'
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': canonical
        }
      };
    } else {
      schema = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://digitalpointer.agency/#organization',
            'name': 'Digital Pointer',
            'url': 'https://digitalpointer.agency',
            'logo': 'https://digitalpointer.agency/assets/logo.svg',
            'description': 'Digital Pointer is a modern digital marketing agency helping businesses grow online through high-performing website design, strategic SEO, social media marketing, and data-driven advertising.',
            'areaServed': ['IN', 'US', 'GB', 'AE', 'AU', 'CA']
          },
          {
            '@type': 'WebSite',
            '@id': 'https://digitalpointer.agency/#website',
            'url': 'https://digitalpointer.agency',
            'name': 'Digital Pointer',
            'publisher': {
              '@id': 'https://digitalpointer.agency/#organization'
            }
          }
        ]
      };
    }

    jsonLdScript.text = JSON.stringify(schema);
    document.head.appendChild(jsonLdScript);

    return () => {
      const script = document.getElementById('seo-json-ld');
      if (script) script.remove();
    };
  }, [pathname, customTitle, customDescription, articleData]);

  return null;
};

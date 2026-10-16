import React, { useEffect } from 'react';
import { defaultSEO, seoRoutes } from '../data/seoConfig';

interface SEOHeadProps {
  pathname: string;
  customTitle?: string;
  customDescription?: string;
  customMainKeyword?: string;
  customKeywords?: string[];
  serviceData?: {
    title: string;
    description: string;
    category: string;
    slug: string;
    image?: string;
    imageAlt?: string;
    faqs?: { question: string; answer: string }[];
    deliverables?: { title: string; description: string }[];
    benefitsAndOutcomes?: { metric: string; description: string }[];
  };
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
  customMainKeyword,
  customKeywords,
  serviceData,
  articleData
}) => {
  useEffect(() => {
    // Normalize path with trailing slash for clean canonical URL consistency
    let normalized = pathname;
    if (!normalized.endsWith('/') && !normalized.includes('.')) {
      normalized = `${normalized}/`;
    }

    const routeConfig = seoRoutes[normalized] || defaultSEO;
    const title = customTitle || routeConfig.title;
    const description = customDescription || routeConfig.description;
    const mainKeyword = customMainKeyword || routeConfig.mainKeyword;
    const keywords = customKeywords && customKeywords.length > 0 ? customKeywords : routeConfig.keywords;

    // Resolve canonical using runtime origin if in browser, otherwise official domain
    const origin = typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://digitalpointer.agency';
    const canonical = `${origin}${normalized === '/' ? '/' : normalized}`;
    const socialImage = serviceData?.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80';

    // 1. Update Document Title
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
        link.setAttribute(rel, rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Standard Search Engine & AI Platform Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords.join(', '));
    setMetaTag('name', 'focus-keyword', mainKeyword);
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'author', 'The Digital Pointers');
    setMetaTag('name', 'geo.region', 'IN-TG');
    setMetaTag('name', 'geo.placename', 'Hyderabad');
    setLinkTag('canonical', canonical);

    // 3. Open Graph Social Sharing Cards
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:site_name', 'The Digital Pointers');
    setMetaTag('property', 'og:locale', 'en_IN');
    setMetaTag('property', 'og:type', articleData ? 'article' : 'website');
    setMetaTag('property', 'og:image', socialImage);
    setMetaTag('property', 'og:image:alt', `${title} - The Digital Pointers`);

    // 4. Twitter / X Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', socialImage);

    // 5. Build Dynamic Schema.org JSON-LD Structured Data
    const existingScript = document.getElementById('seo-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const jsonLdScript = document.createElement('script');
    jsonLdScript.id = 'seo-json-ld';
    jsonLdScript.type = 'application/ld+json';

    // Construct Breadcrumb Elements for Google Rich Snippets
    const pathParts = normalized.split('/').filter(Boolean);
    const breadcrumbList = {
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': `${origin}/`
        },
        ...pathParts.map((part, index) => {
          const itemUrl = `${origin}/${pathParts.slice(0, index + 1).join('/')}/`;
          let formattedName = part
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
          if (serviceData && index === pathParts.length - 1) {
            formattedName = serviceData.title;
          }
          return {
            '@type': 'ListItem',
            'position': index + 2,
            'name': formattedName,
            'item': itemUrl
          };
        })
      ]
    };

    const organizationSchema = {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      'name': 'The Digital Pointers',
      'url': origin,
      'telephone': '+91 9705866749',
      'email': 'hello@digitalpointer.agency',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'addressCountry': 'IN'
      },
      'logo': `${origin}/assets/logo.svg`,
      'description': 'The Digital Pointers is a results-driven digital marketing agency in Hyderabad providing search engine optimization (SEO), custom web development, paid search, social media marketing, and full-funnel performance marketing.',
      'areaServed': ['IN', 'US', 'GB', 'AE', 'AU', 'CA'],
      'sameAs': [
        'https://wa.me/919705866749',
        'https://www.linkedin.com/company/thedigitalpointers'
      ]
    };

    const websiteSchema = {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      'url': origin,
      'name': 'The Digital Pointers',
      'description': 'Premium Digital Marketing Agency in Hyderabad, India',
      'publisher': {
        '@id': `${origin}/#organization`
      }
    };

    let schemaGraph: any[] = [breadcrumbList, organizationSchema, websiteSchema];

    if (serviceData) {
      // 1. Service Schema
      schemaGraph.push({
        '@type': ['Service', 'ProfessionalService'],
        '@id': `${canonical}#service`,
        'name': serviceData.title,
        'serviceType': serviceData.category,
        'description': description,
        'provider': {
          '@id': `${origin}/#organization`
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Hyderabad' },
          { '@type': 'State', 'name': 'Telangana' },
          { '@type': 'Country', 'name': 'India' },
          { '@type': 'Country', 'name': 'United States' },
          { '@type': 'Country', 'name': 'United Kingdom' }
        ],
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'INR',
          'description': `Custom strategic engagement and proposal for ${serviceData.title}`
        },
        ...(serviceData.image ? { 'image': serviceData.image } : {}),
        ...(serviceData.deliverables && serviceData.deliverables.length > 0 ? {
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': `${serviceData.title} Deliverables`,
            'itemListElement': serviceData.deliverables.map((del) => ({
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': del.title,
                'description': del.description
              }
            }))
          }
        } : {})
      });

      // 2. FAQPage Schema for AI Platforms & Google Rich Snippets
      if (serviceData.faqs && serviceData.faqs.length > 0) {
        schemaGraph.push({
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          'mainEntity': serviceData.faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        });
      }

      // 3. WebPage Schema for Service Page
      schemaGraph.push({
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        'url': canonical,
        'name': title,
        'description': description,
        'keywords': keywords.join(', '),
        'isPartOf': {
          '@id': `${origin}/#website`
        },
        'about': {
          '@type': 'Thing',
          'name': mainKeyword
        }
      });
    } else if (articleData) {
      schemaGraph.push({
        '@type': 'Article',
        '@id': `${canonical}#article`,
        'headline': articleData.headline,
        'description': articleData.description,
        'datePublished': articleData.datePublished,
        'keywords': keywords.join(', '),
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': canonical
        },
        'author': {
          '@type': 'Organization',
          'name': articleData.authorName,
          'url': origin
        },
        'publisher': {
          '@id': `${origin}/#organization`
        }
      });
    } else {
      schemaGraph.push({
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        'url': canonical,
        'name': title,
        'description': description,
        'keywords': keywords.join(', '),
        'isPartOf': {
          '@id': `${origin}/#website`
        },
        'about': {
          '@type': 'Thing',
          'name': mainKeyword
        }
      });
    }

    jsonLdScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph
    });
    document.head.appendChild(jsonLdScript);

    return () => {
      const script = document.getElementById('seo-json-ld');
      if (script) script.remove();
    };
  }, [pathname, customTitle, customDescription, customMainKeyword, customKeywords, serviceData, articleData]);

  return null;
};

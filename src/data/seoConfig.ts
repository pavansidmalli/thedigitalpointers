export interface RouteSEO {
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article';
  keywords: string[];
}

export const defaultSEO: RouteSEO = {
  title: 'Digital Pointer — Premium Digital Marketing Agency',
  description: 'Digital Pointer helps businesses grow online through strategic SEO, high-performing websites, social media marketing, and data-driven advertising.',
  canonical: 'https://digitalpointer.agency/',
  ogType: 'website',
  keywords: [
    'digital marketing agency',
    'digital marketing services',
    'website design and development',
    'seo services',
    'local seo services',
    'google business profile management',
    'social media marketing services',
    'google ads management',
    'meta ads management',
    'ppc advertising services'
  ]
};

export const seoRoutes: Record<string, RouteSEO> = {
  '/': {
    title: 'Digital Pointer — Turn Digital Attention Into Real Business Growth',
    description: 'Digital Pointer helps businesses grow online through strategic SEO, high-performing websites, social media marketing, and data-driven advertising.',
    canonical: 'https://digitalpointer.agency/',
    ogType: 'website',
    keywords: [
      'digital marketing agency',
      'growth marketing',
      'seo services',
      'website design agency',
      'google ads agency',
      'social media agency'
    ]
  },
  '/about/': {
    title: 'About Us — Digital Pointer Agency Philosophy & Approach',
    description: 'Learn about Digital Pointer: our strategic approach to digital marketing, commitment to transparent data, and focus on generating meaningful client revenue.',
    canonical: 'https://digitalpointer.agency/about/',
    ogType: 'website',
    keywords: ['about digital pointer', 'digital marketing team', 'agency philosophy', 'performance marketing agency']
  },
  '/services/': {
    title: 'Digital Marketing Services — Digital Pointer',
    description: 'Explore our integrated digital marketing services: Website Design, SEO, Local SEO, Google Business Profile, Social Media, PPC, Google Ads, and Meta Ads.',
    canonical: 'https://digitalpointer.agency/services/',
    ogType: 'website',
    keywords: ['digital marketing services', 'agency capabilities', 'seo and web design', 'performance advertising']
  },
  '/services/website-design-development/': {
    title: 'Website Design & Development Services — Digital Pointer',
    description: 'High-performing, responsive websites built with clean code, sub-second load times, and conversion-focused architecture.',
    canonical: 'https://digitalpointer.agency/services/website-design-development/',
    ogType: 'website',
    keywords: ['website design and development', 'responsive web design', 'custom website agency', 'conversion rate optimization']
  },
  '/services/seo/': {
    title: 'Search Engine Optimization (SEO) Services — Digital Pointer',
    description: 'Sustainable organic search strategies targeting high-intent commercial keywords, technical crawl health, and authoritative content.',
    canonical: 'https://digitalpointer.agency/services/seo/',
    ogType: 'website',
    keywords: ['seo services', 'search engine optimization', 'technical seo agency', 'organic traffic growth']
  },
  '/services/local-seo/': {
    title: 'Local SEO Services — Digital Pointer',
    description: 'Attract nearby customers searching for local services in your city through location-specific landing pages and directory citation standardization.',
    canonical: 'https://digitalpointer.agency/services/local-seo/',
    ogType: 'website',
    keywords: ['local seo services', 'google maps ranking', 'local business search', 'nearby customer acquisition']
  },
  '/services/google-business-profile/': {
    title: 'Google Business Profile Management — Digital Pointer',
    description: 'Complete optimization and ongoing management of your Google Business Profile to drive calls, direction requests, and local enquiries.',
    canonical: 'https://digitalpointer.agency/services/google-business-profile/',
    ogType: 'website',
    keywords: ['google business profile management', 'google my business optimization', 'local map pack', 'google reviews management']
  },
  '/services/social-media-marketing/': {
    title: 'Social Media Marketing Services — Digital Pointer',
    description: 'Editorial content planning, visual carousel design, and community engagement strategies across LinkedIn, Instagram, and key networks.',
    canonical: 'https://digitalpointer.agency/services/social-media-marketing/',
    ogType: 'website',
    keywords: ['social media marketing services', 'b2b linkedin marketing', 'instagram marketing', 'content creation agency']
  },
  '/services/ppc-advertising/': {
    title: 'Pay-Per-Click (PPC) Advertising Services — Digital Pointer',
    description: 'Multi-channel paid media campaigns engineered for measurable return on ad spend with rigorous conversion tracking and negative keyword hygiene.',
    canonical: 'https://digitalpointer.agency/services/ppc-advertising/',
    ogType: 'website',
    keywords: ['ppc advertising services', 'pay per click agency', 'paid media management', 'conversion tracking']
  },
  '/services/google-ads/': {
    title: 'Google Ads Management Services — Digital Pointer',
    description: 'Capture active buyers at the exact moment of search with laser-focused Google Search, Performance Max, and Remarketing campaigns.',
    canonical: 'https://digitalpointer.agency/services/google-ads/',
    ogType: 'website',
    keywords: ['google ads management', 'google search ads', 'google adwords agency', 'high intent ppc']
  },
  '/services/meta-ads/': {
    title: 'Meta Ads Management (Facebook & Instagram) — Digital Pointer',
    description: 'Scale customer acquisition with scroll-stopping creatives, systematic A/B testing, and Meta Conversions API (CAPI) server tracking.',
    canonical: 'https://digitalpointer.agency/services/meta-ads/',
    ogType: 'website',
    keywords: ['meta ads management', 'facebook ads agency', 'instagram advertising', 'meta conversions api']
  },
  '/faqs/': {
    title: 'Frequently Asked Questions (FAQs) — Digital Pointer',
    description: 'Clear, honest answers to common questions about digital marketing, website development, SEO, Google Business Profile, and paid advertising.',
    canonical: 'https://digitalpointer.agency/faqs/',
    ogType: 'website',
    keywords: ['digital marketing faqs', 'seo questions', 'website design pricing', 'google ads questions']
  },
  '/blog/': {
    title: 'Insights & Strategic Articles — Digital Pointer Blog',
    description: 'Practical guides and deep-dive strategic articles on SEO, web performance, conversion optimization, and paid advertising.',
    canonical: 'https://digitalpointer.agency/blog/',
    ogType: 'website',
    keywords: ['digital marketing blog', 'seo guides', 'conversion rate optimization articles', 'ppc strategies']
  },
  '/contact/': {
    title: 'Contact Us — Schedule a Free Consultation | Digital Pointer',
    description: 'Get in touch with Digital Pointer. Discuss your business goals, request a website audit, or schedule a free digital strategy consultation.',
    canonical: 'https://digitalpointer.agency/contact/',
    ogType: 'website',
    keywords: ['contact digital pointer', 'book marketing consultation', 'digital agency inquiry', 'free website audit']
  }
};

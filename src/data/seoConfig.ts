export interface RouteSEO {
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article';
  mainKeyword: string;
  keywords: string[];
}

export const defaultSEO: RouteSEO = {
  title: 'The Digital Pointers — Digital Marketing Agency Hyderabad',
  description: 'Top-rated digital marketing agency in Hyderabad. We build high-ROI SEO, website development, Google Ads, Meta ads, and performance marketing systems.',
  canonical: 'https://digitalpointer.agency/',
  ogType: 'website',
  mainKeyword: 'digital marketing agency hyderabad',
  keywords: [
    'digital marketing agency hyderabad',
    'digital marketing services',
    'website design and development',
    'seo services',
    'local seo services',
    'google business profile management',
    'social media marketing services',
    'google ads management',
    'meta ads management',
    'ppc advertising services',
    'performance marketing agency'
  ]
};

export const seoRoutes: Record<string, RouteSEO> = {
  '/': {
    title: 'The Digital Pointers — Digital Marketing Agency Hyderabad',
    description: 'Top-rated digital marketing agency in Hyderabad. We build high-ROI SEO, website development, Google Ads, Meta ads, and performance marketing systems.',
    canonical: 'https://digitalpointer.agency/',
    ogType: 'website',
    mainKeyword: 'digital marketing agency hyderabad',
    keywords: [
      'digital marketing agency hyderabad',
      'digital marketing company hyderabad',
      'seo services hyderabad',
      'google ads agency hyderabad',
      'performance marketing agency',
      'website development company'
    ]
  },
  '/about/': {
    title: 'About Us — Digital Marketing Company Hyderabad | The Digital Pointers',
    description: 'Learn about The Digital Pointers: our engineering approach to digital marketing, transparent reporting, and focus on generating client revenue in Hyderabad.',
    canonical: 'https://digitalpointer.agency/about/',
    ogType: 'website',
    mainKeyword: 'digital marketing company hyderabad',
    keywords: [
      'digital marketing company hyderabad',
      'about the digital pointers',
      'digital agency philosophy',
      'marketing strategy team',
      'hyderabad marketing consultancy'
    ]
  },
  '/services/': {
    title: 'Digital Marketing Services in Hyderabad | The Digital Pointers',
    description: 'Explore 9 integrated digital marketing services from The Digital Pointers in Hyderabad: SEO, web development, local maps, Google Ads, Meta Ads, and performance marketing.',
    canonical: 'https://digitalpointer.agency/services/',
    ogType: 'website',
    mainKeyword: 'digital marketing services hyderabad',
    keywords: [
      'digital marketing services hyderabad',
      'digital marketing agency hyderabad',
      'seo and web design company',
      'google ads agency hyderabad',
      'full service digital agency hyderabad',
      'performance marketing agency',
      'online marketing company india'
    ]
  },
  '/case-studies/': {
    title: 'Case Studies & Results — The Digital Pointers Marketing Agency',
    description: 'Explore documented before-and-after marketing campaign results, client case studies, ROAS improvements, and traffic growth delivered by The Digital Pointers.',
    canonical: 'https://digitalpointer.agency/case-studies/',
    ogType: 'website',
    mainKeyword: 'digital marketing case studies',
    keywords: [
      'digital marketing case studies',
      'marketing campaign results',
      'before and after marketing results',
      'seo case studies',
      'ppc client results'
    ]
  },
  '/portfolio/': {
    title: 'Case Studies & Results — The Digital Pointers Marketing Agency',
    description: 'Explore documented before-and-after marketing campaign results, client case studies, ROAS improvements, and traffic growth delivered by The Digital Pointers.',
    canonical: 'https://digitalpointer.agency/case-studies/',
    ogType: 'website',
    mainKeyword: 'digital marketing case studies',
    keywords: [
      'digital marketing case studies',
      'marketing campaign results',
      'before and after marketing results',
      'seo case studies',
      'ppc client results'
    ]
  },
  '/services/website-design-development/': {
    title: 'Website Design & Development Hyderabad | The Digital Pointers',
    description: 'Custom, responsive website design & development in Hyderabad. Engineered with clean code, sub-second load speeds, mobile responsiveness, and CRO to drive client enquiries.',
    canonical: 'https://digitalpointer.agency/services/website-design-development/',
    ogType: 'website',
    mainKeyword: 'website design and development services hyderabad',
    keywords: [
      'website design and development services hyderabad',
      'custom web design company hyderabad',
      'responsive website development',
      'b2b website design agency',
      'conversion rate optimization hyderabad',
      'fast loading websites india',
      'corporate website development',
      'core web vitals optimization'
    ]
  },
  '/services/seo/': {
    title: 'SEO Services & Search Engine Optimization Hyderabad | The Digital Pointers',
    description: 'Rank #1 on Google with data-driven SEO services in Hyderabad. Technical site audits, commercial keyword research, authoritative backlinks, and organic growth.',
    canonical: 'https://digitalpointer.agency/services/seo/',
    ogType: 'website',
    mainKeyword: 'seo services hyderabad',
    keywords: [
      'seo services hyderabad',
      'search engine optimization company hyderabad',
      'technical seo agency hyderabad',
      'organic search rankings google',
      'local and international seo',
      'b2b seo consultants',
      'google search visibility',
      'keyword ranking strategy'
    ]
  },
  '/services/local-seo/': {
    title: 'Local SEO Services & Google Maps Ranking Hyderabad | The Digital Pointers',
    description: 'Dominate local search and Google Maps 3-pack in Hyderabad. Proven geo-targeted citations, local landing pages, review acceleration, and near-me visibility.',
    canonical: 'https://digitalpointer.agency/services/local-seo/',
    ogType: 'website',
    mainKeyword: 'local seo services hyderabad',
    keywords: [
      'local seo services hyderabad',
      'google maps ranking service',
      'local 3 pack optimization',
      'near me search optimization hyderabad',
      'hyderabad local business marketing',
      'local directory citations',
      'geo targeted seo services',
      'local customer acquisition'
    ]
  },
  '/services/google-business-profile/': {
    title: 'Google Business Profile Management Hyderabad | The Digital Pointers',
    description: 'Complete optimization of your Google Business Profile (GMB) in Hyderabad. Boost map calls, direction requests, photo updates, and verified 5-star customer reviews.',
    canonical: 'https://digitalpointer.agency/services/google-business-profile/',
    ogType: 'website',
    mainKeyword: 'google business profile management hyderabad',
    keywords: [
      'google business profile management hyderabad',
      'gmb optimization services hyderabad',
      'google my business agency hyderabad',
      'google map profile ranking',
      'local citation audit',
      'google review management',
      'google maps listing optimization',
      'local footfall marketing'
    ]
  },
  '/services/social-media-marketing/': {
    title: 'Social Media Marketing Agency Hyderabad | The Digital Pointers',
    description: 'Build brand authority and client trust across LinkedIn, Instagram, and Meta. High-impact visual carousels, B2B thought leadership, and organic community growth.',
    canonical: 'https://digitalpointer.agency/services/social-media-marketing/',
    ogType: 'website',
    mainKeyword: 'social media marketing services hyderabad',
    keywords: [
      'social media marketing services hyderabad',
      'social media management company',
      'b2b linkedin marketing agency',
      'instagram marketing hyderabad',
      'creative content marketing agency',
      'brand storytelling agency',
      'social media advertising strategy'
    ]
  },
  '/services/ppc-advertising/': {
    title: 'PPC Advertising Services & Pay-Per-Click Agency | The Digital Pointers',
    description: 'Maximize ad ROI with data-driven PPC advertising in Hyderabad. Rigorous negative keyword hygiene, conversion tracking, multi-channel ad spend, and low CAC.',
    canonical: 'https://digitalpointer.agency/services/ppc-advertising/',
    ogType: 'website',
    mainKeyword: 'ppc advertising services hyderabad',
    keywords: [
      'ppc advertising services hyderabad',
      'pay per click management company',
      'roas optimization agency',
      'paid media advertising hyderabad',
      'conversion tracking setup',
      'b2b ppc management',
      'cost per lead reduction'
    ]
  },
  '/services/google-ads/': {
    title: 'Google Ads Management Agency Hyderabad | The Digital Pointers',
    description: 'Capture high-intent buyers with certified Google Ads management in Hyderabad. Laser-focused Search, Performance Max, Display, and Call-Only conversion campaigns.',
    canonical: 'https://digitalpointer.agency/services/google-ads/',
    ogType: 'website',
    mainKeyword: 'google ads agency hyderabad',
    keywords: [
      'google ads agency hyderabad',
      'google adwords management company hyderabad',
      'certified google ads partner',
      'performance max campaigns hyderabad',
      'high intent search ads',
      'ppc lead generation agency',
      'google remarketing ads'
    ]
  },
  '/services/meta-ads/': {
    title: 'Meta Ads Agency (Facebook & Instagram) Hyderabad | The Digital Pointers',
    description: 'Scale revenue with high-converting Meta Ads in Hyderabad. Direct-response creative testing, custom audience funnels, and server-side Conversions API (CAPI).',
    canonical: 'https://digitalpointer.agency/services/meta-ads/',
    ogType: 'website',
    mainKeyword: 'meta ads agency hyderabad',
    keywords: [
      'meta ads agency hyderabad',
      'facebook advertising company hyderabad',
      'instagram ads agency hyderabad',
      'meta conversions api setup',
      'social lead generation campaigns',
      'direct response ads',
      'paid social scaling agency'
    ]
  },
  '/services/performance-marketing/': {
    title: 'Performance Marketing Agency Hyderabad | The Digital Pointers',
    description: 'Full-funnel performance marketing in Hyderabad engineered for verified ROAS. Multi-channel attribution, first-party tracking, landing page CRO, and low CAC.',
    canonical: 'https://digitalpointer.agency/services/performance-marketing/',
    ogType: 'website',
    mainKeyword: 'performance marketing agency hyderabad',
    keywords: [
      'performance marketing agency hyderabad',
      'full funnel marketing company',
      'omnichannel customer acquisition',
      'cac optimization hyderabad',
      'conversion rate optimization agency',
      'growth marketing consultancy hyderabad',
      'ecommerce performance marketing'
    ]
  },
  '/faqs/': {
    title: 'Digital Marketing FAQs & Answers — The Digital Pointers',
    description: 'Clear, honest answers to common questions about digital marketing costs, SEO timelines, Google Ads budgets, and agency deliverables.',
    canonical: 'https://digitalpointer.agency/faqs/',
    ogType: 'website',
    mainKeyword: 'digital marketing faqs',
    keywords: [
      'digital marketing faqs',
      'seo questions',
      'digital agency pricing',
      'google ads budget faqs',
      'marketing questions and answers'
    ]
  },
  '/blog/': {
    title: 'Digital Marketing Blog & Strategy Insights — The Digital Pointers',
    description: 'Practical guides and deep-dive strategic articles on SEO, web performance, conversion optimization, and paid advertising from senior practitioners.',
    canonical: 'https://digitalpointer.agency/blog/',
    ogType: 'website',
    mainKeyword: 'digital marketing blog',
    keywords: [
      'digital marketing blog',
      'seo strategy articles',
      'paid advertising guides',
      'cro guides',
      'online marketing insights'
    ]
  },
  '/contact/': {
    title: 'Contact Us — Schedule a Free Consultation | The Digital Pointers',
    description: 'Get in touch with The Digital Pointers in Hyderabad. Call +91 9705866749, chat on WhatsApp, or request a free digital marketing and website audit.',
    canonical: 'https://digitalpointer.agency/contact/',
    ogType: 'website',
    mainKeyword: 'contact digital marketing agency',
    keywords: [
      'contact digital marketing agency',
      'book marketing consultation',
      'digital marketing hyderabad contact',
      'free website audit',
      'hire marketing agency'
    ]
  }
};

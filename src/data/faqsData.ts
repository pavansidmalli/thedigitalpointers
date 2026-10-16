import { FAQItem } from '../types';

export const faqsData: FAQItem[] = [
  // General Digital Marketing
  {
    id: 'gen-1',
    category: 'General Digital Marketing',
    question: 'What makes The Digital Pointers different from typical digital marketing agencies?',
    answer: 'We focus on clear strategy before execution, transparent data reporting, and measurable commercial enquiries rather than vanity metrics. We do not lock clients into deceptive contracts, fabricate results, or rely on slow generic templates. Every campaign and website is built with clean architecture and intentional business objectives.'
  },
  {
    id: 'gen-2',
    category: 'General Digital Marketing',
    question: 'Do you work with both Indian businesses and international clients?',
    answer: 'Yes. We work extensively with businesses across India as well as international clients in North America, Europe, Australia, and the Middle East. Our communication workflows accommodate varied time zones and international billing requirements.'
  },
  {
    id: 'gen-3',
    category: 'General Digital Marketing',
    question: 'How do you determine which marketing channels our business should prioritize?',
    answer: 'During our initial discovery phase, we evaluate your business model, customer lifetime value, competitor footprint, and sales cycle. For businesses needing immediate high-intent leads, we often recommend Google Ads paired with a conversion-optimized website. For long-term brand equity and sustainable organic traffic, we build local or technical SEO and thought-leadership content.'
  },

  // Website Design
  {
    id: 'web-1',
    category: 'Website Design & Development',
    question: 'Why should we choose a custom-engineered website over a generic template or site builder?',
    answer: 'Generic templates often come with bloatware, dozens of unused scripts, security vulnerabilities, and sluggish mobile speeds that directly harm Google rankings and user conversion rates. Our custom websites load in under 1.5 seconds, follow clean semantic HTML standards, and are designed specifically around your target conversion paths.'
  },
  {
    id: 'web-2',
    category: 'Website Design & Development',
    question: 'Will our website be fully responsive across mobile devices?',
    answer: 'Yes. Every project is built mobile-first. We rigorously test layouts, typography legibility, touch targets, and form submission flows across modern smartphones, tablets, laptops, and ultra-wide displays.'
  },
  {
    id: 'web-3',
    category: 'Website Design & Development',
    question: 'Will our internal team be able to update text, images, and blog posts?',
    answer: 'Absolutely. We configure clean, easy-to-use content management capabilities and provide step-by-step walkthroughs so your team can publish blog articles, modify service offerings, and update contact details independently.'
  },

  // SEO
  {
    id: 'seo-1',
    category: 'Search Engine Optimization',
    question: 'Can any agency guarantee #1 ranking on Google?',
    answer: 'No legitimate agency can guarantee #1 rankings. Google explicitly states in its Webmaster Guidelines: "No one can guarantee a #1 ranking on Google." We follow white-hat, guidelines-compliant search strategies focusing on technical crawl health, high-quality content depth, search intent alignment, and authoritative schema.'
  },
  {
    id: 'seo-2',
    category: 'Search Engine Optimization',
    question: 'How long does it typically take to see measurable results from SEO?',
    answer: 'SEO is a compounding organic asset. While technical crawl fixes and on-page metadata improvements can be recognized by Google within weeks, substantial competitive keyword shifts and sustainable inbound traffic growth typically manifest between 3 to 6 months of disciplined execution.'
  },
  {
    id: 'seo-3',
    category: 'Search Engine Optimization',
    question: 'What is the difference between On-Page SEO and Technical SEO?',
    answer: 'On-Page SEO focuses on content relevance—including headings (H1, H2), keyword integration, meta titles, image alt tags, and internal links. Technical SEO focuses on how search engine bots crawl and index your site—including page speed, XML sitemaps, robots.txt directives, canonical tags, and structured JSON-LD schema.'
  },

  // Local SEO & GBP
  {
    id: 'local-1',
    category: 'Local SEO & Google Business Profile',
    question: 'What is the role of a Google Business Profile in attracting local customers?',
    answer: 'Your Google Business Profile powers the "Local 3-Pack" map results displayed at the top of Google search results for geographic queries. An optimized profile with complete categories, accurate hours, high-quality photos, itemized services, and authentic customer reviews directly drives phone calls, direction requests, and website visits.'
  },
  {
    id: 'local-2',
    category: 'Local SEO & Google Business Profile',
    question: 'Can we rank for locations where we do not have a physical office?',
    answer: 'We strictly adhere to Google’s guidelines. Google requires businesses to have a genuine, staffed physical presence or be a verified service-area business to maintain local listings. Deceptive virtual addresses often lead to abrupt listing suspensions. We build legitimate geographic service pages to capture regional intent without risking your brand’s reputation.'
  },
  {
    id: 'local-3',
    category: 'Local SEO & Google Business Profile',
    question: 'How do you handle negative reviews on Google Business Profile?',
    answer: 'If a review violates Google’s official policies (e.g., hate speech, conflict of interest, spam), we assist in filing a formal removal request. For genuine customer dissatisfaction, we formulate a polite, constructive public response that demonstrates accountability and customer care, which reassuringly reflects on your business to other viewers.'
  },

  // Social Media Marketing
  {
    id: 'smm-1',
    category: 'Social Media Marketing',
    question: 'Which social platforms are most effective for our business?',
    answer: 'We recommend focusing on platforms where your buyers congregate with professional or commercial intent. For B2B firms, consulting agencies, and technology practices, LinkedIn provides unmatched organic reach and executive access. For consumer brands, real estate, aesthetics, and lifestyle, Instagram and short-form video deliver stronger visual engagement.'
  },
  {
    id: 'smm-2',
    category: 'Social Media Marketing',
    question: 'Do you create original graphics and captions, or use generic templates?',
    answer: 'We create original, custom editorial designs and bespoke copywriting for every client. We establish distinct visual templates, typography hierarchies, and tone of voice guidelines that reflect your brand identity.'
  },

  // Google Ads & PPC
  {
    id: 'ppc-1',
    category: 'Google Ads & PPC Advertising',
    question: 'Who owns our advertising accounts and historical data?',
    answer: 'You own your advertising accounts completely. We configure campaigns directly inside your own Google Ads or Meta Business accounts. You maintain full administrative ownership, and ad spend is charged directly to your own card. If you ever pause work with us, you retain all campaign structures, negative keyword lists, and tracking data.'
  },
  {
    id: 'ppc-2',
    category: 'Google Ads & PPC Advertising',
    question: 'How do you prevent wasted ad spend on Google Ads?',
    answer: 'We enforce tight keyword match types (phrase and exact), build extensive universal negative keyword lists (blocking words like free, cheap, salary, job), implement dynamic call tracking, and continuously prune irrelevant search terms weekly.'
  },

  // Meta Ads
  {
    id: 'meta-1',
    category: 'Meta Ads (Facebook & Instagram)',
    question: 'How do you combat creative fatigue on Facebook and Instagram?',
    answer: 'Ad fatigue happens when target audiences see the same visual creative repeatedly, leading to rising Cost-Per-Acquisition. We manage an active creative pipeline—introducing fresh visual hooks, carousel variations, direct-response copy angles, and video shorts on a bi-weekly cycle.'
  },
  {
    id: 'meta-2',
    category: 'Meta Ads (Facebook & Instagram)',
    question: 'What is Meta Conversions API (CAPI) and why is it necessary?',
    answer: 'Browser privacy policies and ad blockers often block traditional client-side cookies (Meta Pixel). Meta Conversions API transmits event data directly from your server to Meta, recovering lost conversion attribution and improving algorithmic audience targeting accuracy.'
  },

  // Pricing, Timelines & Reporting
  {
    id: 'rep-1',
    category: 'Pricing, Timelines & Reporting',
    question: 'How often do we receive performance reports?',
    answer: 'We provide clear, jargon-free monthly performance reports detailing verified commercial outcomes: qualified form enquiries, phone calls, cost per acquisition, organic keyword movements, and top-performing pages. For active paid campaigns, we also conduct bi-weekly check-in updates.'
  },
  {
    id: 'rep-2',
    category: 'Pricing, Timelines & Reporting',
    question: 'Are there long-term lock-in contracts?',
    answer: 'Our retainer agreements operate on flexible 3-month or 6-month cycles with clear milestone deliverables. We believe in earning your partnership through measurable results and transparent collaboration, not restrictive contract terms.'
  }
];

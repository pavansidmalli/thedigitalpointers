import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    slug: 'website-design-development',
    title: 'Website Design & Development',
    shortDescription: 'High-performing, responsive websites engineered with clean code, fast load times, and conversion-focused architectures.',
    tagline: 'Engineered for Performance & Enquiries',
    category: 'Development',
    heroHeadline: 'High-Performing Websites Engineered to Convert Visitors Into Clients',
    heroSubheadline: 'We build fast, responsive, and search-optimized websites that represent your brand with editorial elegance and drive qualified enquiries.',
    problemsSolved: [
      {
        problem: 'Slow Page Load Times',
        impact: 'High bounce rates and lost conversions on mobile devices.',
        solution: 'Modern lightweight codebases built with sub-second Core Web Vitals and zero render-blocking clutter.'
      },
      {
        problem: 'Poor Mobile Experience',
        impact: 'Over 65% of Indian and international traffic leaves when navigation or forms break on smartphones.',
        solution: 'Mobile-first responsive engineering with touch-friendly navigation, adaptive layouts, and seamless form entry.'
      },
      {
        problem: 'Weak Conversion Architecture',
        impact: 'Traffic lands on the site but fails to contact or request a quote.',
        solution: 'Strategic UX hierarchy with clear callouts, trust signals, friction-free forms, and clear communication paths.'
      },
      {
        problem: 'Technical SEO Neglect',
        impact: 'Search engines struggle to index pages due to broken semantics or heavy frameworks.',
        solution: 'Clean semantic HTML5, schema markup, pre-rendered metadata, and optimized crawl paths baked in from day one.'
      }
    ],
    deliverables: [
      {
        title: 'Custom Responsive Architecture',
        description: 'Bespoke UI layouts designed for desktop, tablet, and mobile screens without bloated templates.',
        details: ['Custom component library', 'Full responsive layout testing', 'Retina asset optimization']
      },
      {
        title: 'Technical SEO & Performance Foundation',
        description: 'Engineered from scratch to achieve high Core Web Vitals scores and clean crawlability.',
        details: ['Semantic HTML5 markup', 'JSON-LD schema structured data', 'XML sitemap & robots.txt setup']
      },
      {
        title: 'High-Conversion Funnels & Forms',
        description: 'Lead generation forms with server validation, spam protection, and CRM/Email integrations.',
        details: ['Multi-step & single-page enquiry forms', 'Direct WhatsApp integration', 'Lead tracking events']
      },
      {
        title: 'CMS & Content Independence',
        description: 'Intuitive content management setup so your internal team can publish blogs and update copy easily.',
        details: ['Custom content fields', 'Clean media management', 'Staff documentation & training']
      }
    ],
    benefitsAndOutcomes: [
      { metric: '< 1.5s', description: 'Average mobile page load time across key user journeys' },
      { metric: '100%', description: 'Responsive compatibility across modern browsers and screen sizes' },
      { metric: 'Zero', description: 'Reliance on fragile third-party page builder plugins' },
      { metric: 'Clean', description: 'Structured schema and semantic markup for immediate search crawling' }
    ],
    processSteps: [
      { step: '01', title: 'Discovery & Wireframing', description: 'We analyze your target audience, competitors, and conversion pathways to craft layout blueprints.' },
      { step: '02', title: 'Design & Visual System', description: 'We develop custom editorial UI designs with your color palette, typography hierarchy, and brand voice.' },
      { step: '03', title: 'Clean-Code Development', description: 'We build the site with modern frontend tooling, optimizing for speed, accessibility, and clean APIs.' },
      { step: '04', title: 'Testing & Launch', description: 'Rigorous cross-device QA, form delivery checks, SEO indexing verification, and seamless domain cutover.' }
    ],
    suitableFor: [
      'B2B professional service providers requiring a credible digital presence',
      'Local businesses and multi-location practices needing fast mobile lead capture',
      'High-growth startups launching flagship products or agency services',
      'Established businesses redesigning outdated, slow-loading legacy websites'
    ],
    relatedServices: ['seo', 'google-business-profile', 'ppc-advertising'],
    caseStudy: {
      title: 'B2B Consultancy Website Transformation',
      industry: 'Professional Services',
      timeline: '6 Weeks',
      challenge: 'The client had a slow WordPress site taking 6.8 seconds to load on mobile with high drop-offs on their enquiry page.',
      strategy: 'Engineered a modern, responsive static web experience with streamlined copy, clean service pathways, and a friction-free consultation booking flow.',
      outcome: 'Reduced page load time to 1.1s, decreased bounce rate by 42%, and doubled qualified weekly consultation enquiries.'
    },
    faqs: [
      {
        question: 'How long does a custom website project typically take?',
        answer: 'Most custom agency website projects take between 3 to 6 weeks depending on page count, bespoke visual requirements, and content readiness.'
      },
      {
        question: 'Will our team be able to update content and publish blog articles?',
        answer: 'Yes. We deliver intuitive content management workflows and clear documentation so you can add blog posts, update team information, and modify service details without touching code.'
      },
      {
        question: 'Do you design mobile-friendly websites?',
        answer: 'Mobile experience is our baseline priority. Every page is specifically tested and adapted for handheld touch interactions, legible typography, and quick data entry.'
      },
      {
        question: 'Is technical SEO included in website development?',
        answer: 'Yes. Every website we build includes semantic HTML tags, clean URL structures, canonical links, OpenGraph social sharing meta, and JSON-LD schema markup.'
      }
    ]
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    shortDescription: 'Organic search strategies based on technical health, keyword search intent, on-page architecture, and quality content.',
    tagline: 'Sustainable Search Visibility & Organic Enquiries',
    category: 'Search',
    heroHeadline: 'Attract High-Intent Organic Traffic That Converts Into Real Business',
    heroSubheadline: 'We optimize your website architecture, content depth, and technical signals to earn sustainable, qualified search rankings on Google.',
    problemsSolved: [
      {
        problem: 'Invisible for Commercial Searches',
        impact: 'Competitors capture prospects who are actively searching for your services.',
        solution: 'In-depth search intent mapping and strategic optimization of commercial landing pages.'
      },
      {
        problem: 'Technical Crawling & Indexing Bottlenecks',
        impact: 'Search engines ignore or misinterpret your high-value pages.',
        solution: 'Thorough technical audits resolving canonical loops, duplicate parameters, sitemap errors, and crawl budget waste.'
      },
      {
        problem: 'Low Content Depth & Keyword Cannibalization',
        impact: 'Pages compete against each other and fail to rank for priority terms.',
        solution: 'Clear content architecture, topic clusters, and rigorous internal linking structures.'
      },
      {
        problem: 'Fluctuating Algorithm Performance',
        impact: 'Shallow tactics get penalized during Google core algorithm updates.',
        solution: 'White-hat, helpful-content methodologies focused on genuine subject matter expertise and user utility.'
      }
    ],
    deliverables: [
      {
        title: 'Comprehensive SEO Audit & Strategy',
        description: 'Complete analysis of technical crawl health, backlink profile, competitor positions, and high-value search intent.',
        details: ['Technical site crawl report', 'Commercial intent keyword matrix', 'Competitor gap blueprint']
      },
      {
        title: 'On-Page Content & Architecture Optimization',
        description: 'Refining meta titles, header hierarchies, internal links, and structured body content across priority URLs.',
        details: ['Title and meta description optimization', 'Header structure (H1, H2, H3) refinement', 'Internal anchor text mapping']
      },
      {
        title: 'Technical SEO Infrastructure',
        description: 'Resolving indexation blockers, XML sitemaps, robots.txt, canonicalization, and schema markup.',
        details: ['Structured data schema generation', 'Crawl error remediation', 'Core Web Vitals guidance']
      },
      {
        title: 'Transparent Monthly Performance Reporting',
        description: 'Honest tracking of keyword movements, organic impressions, clicks, and actual conversion actions.',
        details: ['Google Search Console insights', 'Conversion goal tracking', 'Actionable next-month recommendations']
      }
    ],
    benefitsAndOutcomes: [
      { metric: '100%', description: 'Compliance with Google Webmaster and Search Essentials guidelines' },
      { metric: 'Zero', description: 'Gimmicks, private blog networks, or risky black-hat manipulation' },
      { metric: 'Targeted', description: 'Focus on high-intent commercial terms rather than irrelevant vanity volume' },
      { metric: 'Long-Term', description: 'Compounding organic traffic asset that reduces ongoing ad spend dependency' }
    ],
    processSteps: [
      { step: '01', title: 'Audit & Benchmark', description: 'We audit technical health, benchmark current keyword positions, and review competitor search footprints.' },
      { step: '02', title: 'Keyword Intent Mapping', description: 'We group keywords by user intent: informational for blog content and commercial for service pages.' },
      { step: '03', title: 'On-Page & Technical Execution', description: 'We implement structural updates, rewrite meta data, refine content, and deploy JSON-LD schemas.' },
      { step: '04', title: 'Monitoring & Continuous Refinement', description: 'We analyze Google Search Console metrics, identify newly ranking terms, and optimize internal links.' }
    ],
    suitableFor: [
      'B2B companies seeking high-value inbound enquiries without perpetual ad expenditure',
      'E-commerce brands needing organic category and product search traffic',
      'Professional firms wanting authority for regional or international service searches',
      'Businesses recovering from previous algorithmic dips or poor migration practices'
    ],
    relatedServices: ['local-seo', 'website-design-development', 'google-business-profile'],
    caseStudy: {
      title: 'Commercial Equipment Supplier Organic Growth',
      industry: 'Manufacturing & Distribution',
      timeline: '6 Months',
      challenge: 'The company was ranking only for branded queries and losing non-branded product searches to regional resellers.',
      strategy: 'Rebuilt category architecture, eliminated thin duplicate pages, established comprehensive product specification schemas, and published problem-solving guides.',
      outcome: '185% increase in non-branded organic search impressions and an 87% increase in verified RFQ (Request for Quote) form submissions.'
    },
    faqs: [
      {
        question: 'Do you guarantee #1 rankings on Google?',
        answer: 'No ethical SEO agency can guarantee #1 rankings on Google. Google’s algorithms evaluate hundreds of factors dynamically. We focus on verifiable best practices, search intent alignment, technical health, and authentic content depth to earn top positions.'
      },
      {
        question: 'How long does it take to see results from SEO?',
        answer: 'Organic SEO is a compounding investment. While technical fixes can improve indexing within weeks, meaningful commercial keyword movements and traffic growth typically materialize within 3 to 6 months of steady execution.'
      },
      {
        question: 'How do you choose keywords to target?',
        answer: 'We evaluate commercial intent, current ranking difficulty, monthly search volume, and relevance to your business services. We prioritize terms that indicate a prospect is ready to hire or purchase.'
      },
      {
        question: 'Will our existing website need changes?',
        answer: 'Most often yes. On-page SEO typically requires improving headings, expanding or structuring text content, adding internal links, updating meta tags, and correcting technical crawl errors.'
      }
    ]
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    shortDescription: 'Targeted visibility for location-specific searches, Google Maps ranking signals, local citations, and nearby customer acquisition.',
    tagline: 'Win Nearby Customers Searching in Your City',
    category: 'Search',
    heroHeadline: 'Capture High-Intent Nearby Customers Searching for Your Local Services',
    heroSubheadline: 'We optimize your local search signals so your business stands out when customers nearby search for solutions in your city or region.',
    problemsSolved: [
      {
        problem: 'Lost Nearby Footfall and Calls',
        impact: 'Customers right around your business discover competing providers in Google Local Pack results.',
        solution: 'Strategic local landing page optimization and localized keyword intent mapping.'
      },
      {
        problem: 'Inconsistent NAP (Name, Address, Phone) Data',
        impact: 'Conflicting business details across directories diminish Google’s confidence in your location.',
        solution: 'Rigorous cleanup and syndication of accurate business citations across verified local directories.'
      },
      {
        problem: 'Weak City-Specific Content',
        impact: 'Website ranks only broadly and fails to trigger location-modifier searches like "in Bangalore" or "near me".',
        solution: 'Legitimate location-specific landing pages with authentic service descriptions and localized schema.'
      },
      {
        problem: 'Unmanaged Customer Reviews',
        impact: 'Low review volume or unanswered negative feedback repels prospective clients.',
        solution: 'Systematic customer review acquisition guidance and professional response templates.'
      }
    ],
    deliverables: [
      {
        title: 'Local Keyword & Geo-Intent Research',
        description: 'Identifying the exact queries nearby buyers use, including "near me" and specific neighborhood phrases.',
        details: ['Geo-targeted keyword inventory', 'Local competitor ranking gap analysis', 'Search radius mapping']
      },
      {
        title: 'Localized Landing Page Architecture',
        description: 'Creating and optimizing dedicated landing pages for genuine operating locations.',
        details: ['Geo-targeted meta tags and headings', 'Embedded map and directions context', 'Localized LocalBusiness schema']
      },
      {
        title: 'Citation Audit & Directory Cleanup',
        description: 'Standardizing your business name, address, phone number, and hours across prominent Indian and global directories.',
        details: ['NAP consistency audit', 'Duplicate listing removal', 'Top-tier business directory submissions']
      },
      {
        title: 'Reputation & Review Growth Strategy',
        description: 'Actionable workflows to help your team collect authentic customer reviews compliant with platform policies.',
        details: ['Direct review link shortcuts', 'Customer outreach guidance', 'Professional review response frameworks']
      }
    ],
    benefitsAndOutcomes: [
      { metric: 'Localized', description: 'Targeting customers with immediate purchase intent within your operating service radius' },
      { metric: 'Accurate', description: 'Uniform business information across all prominent digital touchpoints' },
      { metric: 'Verified', description: 'Zero fake location spam or deceptive door-way pages' },
      { metric: 'Direct Enquiries', description: 'Measurable phone calls, direction requests, and localized form submissions' }
    ],
    processSteps: [
      { step: '01', title: 'Local Search Audit', description: 'We review existing local directory listings, map visibility, and check NAP data across the web.' },
      { step: '02', title: 'Listing & Citation Standardization', description: 'We correct conflicting telephone numbers, addresses, and business names across authoritative local directories.' },
      { step: '03', title: 'On-Page Local Optimization', description: 'We optimize location pages with verified operating details, service descriptions, and LocalBusiness schema.' },
      { step: '04', title: 'Review System & Local Tracking', description: 'We monitor local keyword positions and provide structured frameworks to capture verified client feedback.' }
    ],
    suitableFor: [
      'Multi-branch healthcare clinics, diagnostic centers, and dental practices',
      'Local legal practices, chartered accountants, and consultancy firms',
      'Real estate consultancies and property service companies',
      'Regional home improvement, architectural, and educational training institutes'
    ],
    relatedServices: ['google-business-profile', 'seo', 'google-ads'],
    caseStudy: {
      title: 'Multi-Location Healthcare Practice Local SEO',
      industry: 'Healthcare Services',
      timeline: '4 Months',
      challenge: 'A clinic network with 3 locations had mismatched address records and was absent from the top 3 map results for priority specialty searches.',
      strategy: 'Cleaned up 40+ directory citations, established structured local clinic landing pages, and implemented an ethical patient review collection workflow.',
      outcome: 'Achieved top 3 map placement for 14 specialty search terms and increased inbound appointment phone calls by 74%.'
    },
    faqs: [
      {
        question: 'What is the difference between general SEO and Local SEO?',
        answer: 'General SEO focuses on broad national or global organic rankings for informational and commercial terms. Local SEO specifically targets proximity-based queries (such as "digital marketing agency in Bangalore" or "pediatrician near me"), focusing on map listings, localized landing pages, and regional citations.'
      },
      {
        question: 'Do we need a physical office in every city we want to rank for?',
        answer: 'Under Google’s guidelines, you must have a genuine, staffed physical presence or be a verified service-area business to maintain legitimate local listings. We do not create fake addresses or virtual office spam, as Google frequently suspends deceptive listings.'
      },
      {
        question: 'How do citations impact local search rankings?',
        answer: 'Citations (mentions of your business name, address, and phone number on directories) help search engines corroborate that your business genuinely exists at the stated address. Consistent citations reinforce geographic trust.'
      },
      {
        question: 'Can you remove bad reviews from Google?',
        answer: 'No agency can delete genuine customer reviews. However, reviews that violate Google’s prohibited content policies (e.g. hate speech, spam, off-topic) can be formally flagged for removal. For legitimate critical reviews, we provide professional response strategies.'
      }
    ]
  },
  {
    slug: 'google-business-profile',
    title: 'Google Business Profile Management',
    shortDescription: 'Profile optimization, category alignment, services listing, updates, review management, and performance analytics.',
    tagline: 'Maximize Your Business Presence on Google Search & Maps',
    category: 'Search',
    heroHeadline: 'Turn Google Search & Maps Searches Into Direct Phone Calls and Bookings',
    heroSubheadline: 'We optimize and actively manage your Google Business Profile to keep information accurate, highlight your services, and attract local clients.',
    problemsSolved: [
      {
        problem: 'Incomplete or Misconfigured Profiles',
        impact: 'Missing categories, incorrect hours, and lack of detailed service descriptions hurt discovery.',
        solution: 'Thorough profile optimization selecting precise primary/secondary categories and itemized service menus.'
      },
      {
        problem: 'Stale Profiles With No Regular Updates',
        impact: 'Google and prospective clients favor active businesses with current photos and announcements.',
        solution: 'Scheduled Google updates highlighting new offerings, business milestones, and educational insights.'
      },
      {
        problem: 'Risk of Profile Suspension',
        impact: 'Minor guideline infractions can cause Google to suspend your listing, halting phone enquiries instantly.',
        solution: 'Strict adherence to Google Business Profile policies regarding naming, address transparency, and service areas.'
      },
      {
        problem: 'Underutilized Analytics & Insights',
        impact: 'Businesses lack visibility into whether customers called, asked for directions, or visited the website.',
        solution: 'Monthly breakdown of search queries, direct interactions, call volumes, and direction requests.'
      }
    ],
    deliverables: [
      {
        title: 'Full Profile Audit & Category Alignment',
        description: 'Complete review of business title, primary category, secondary categories, hours, and attributes.',
        details: ['Category alignment analysis', 'Attribute configuration', 'Guidelines compliance verification']
      },
      {
        title: 'Itemized Service & Product Catalog Setup',
        description: 'Crafting detailed service descriptions and pricing options directly inside your Google listing.',
        details: ['Detailed service descriptions', 'Categorized service offerings', 'Direct enquiry pathways']
      },
      {
        title: 'Regular Google Updates & Photo Publishing',
        description: 'Publishing weekly high-quality business posts, visual assets, and seasonal notices.',
        details: ['Weekly informational updates', 'High-resolution photo uploads', 'Event and offer announcements']
      },
      {
        title: 'Review Response & Interaction Monitoring',
        description: 'Prompt, professional responses to all customer reviews and management of user-submitted questions.',
        details: ['Timely review responses', 'Q&A section monitoring and population', 'Guideline violation reporting']
      }
    ],
    benefitsAndOutcomes: [
      { metric: 'Verified', description: 'Strict compliance with Google Business Profile representation guidelines' },
      { metric: 'Active', description: 'Weekly updates and fresh visual assets maintaining high engagement' },
      { metric: 'Clear', description: 'Transparent service catalogs answering customer queries before they call' },
      { metric: 'Direct Enquiries', description: 'Optimized pathways for phone calls, website clicks, and direction requests' }
    ],
    processSteps: [
      { step: '01', title: 'Profile Health Check', description: 'We inspect existing categories, verify ownership rights, and identify compliance vulnerabilities.' },
      { step: '02', title: 'Optimization & Cataloging', description: 'We write clear service descriptions, set up accurate operating hours, and configure custom booking links.' },
      { step: '03', title: 'Content & Visual Cadence', description: 'We establish a weekly publishing schedule for Google updates and clean visual photography.' },
      { step: '04', title: 'Monthly Insights & Review Care', description: 'We deliver comprehensive monthly interaction reports and craft professional review responses.' }
    ],
    suitableFor: [
      'Clinics, hospitals, and specialized wellness centers',
      'Financial consulting firms, CA offices, and corporate legal chambers',
      'Boutique real estate brokers and architecture studios',
      'Training academies, private schools, and professional skill centers'
    ],
    relatedServices: ['local-seo', 'website-design-development', 'google-ads'],
    caseStudy: {
      title: 'Architectural Studio Google Profile Optimization',
      industry: 'Architecture & Interior Design',
      timeline: '3 Months',
      challenge: 'The firm had an unmanaged listing with outdated phone details, zero photos of completed projects, and zero customer reviews.',
      strategy: 'Verified and optimized category structure, added 24 professional project photos with descriptive captions, itemized residential and commercial design services, and initiated regular project showcase updates.',
      outcome: '210% increase in profile views on Google Maps and 18 high-value direct consultation enquiries via phone and website within 90 days.'
    },
    faqs: [
      {
        question: 'Can you guarantee that our profile will appear in the top 3 map pack?',
        answer: 'No. Google’s local pack rankings are calculated using relevance, distance, and prominence. We maximize every controllable signal—from complete categorization to review velocity—while strictly observing Google’s guidelines.'
      },
      {
        question: 'Can we add keywords to our business name to rank higher?',
        answer: 'No. Adding unnecessary keywords to your business name violates Google Business Profile guidelines and is one of the leading causes of sudden profile suspensions. Your profile name must reflect your real-world business name.'
      },
      {
        question: 'What happens if our profile gets suspended by Google?',
        answer: 'If you experience a suspension due to previous configuration errors, we guide you through the official Google reinstatement appeal process, assembling verified business registration proofs, signage photos, and utility documents.'
      },
      {
        question: 'How often should a business post updates on Google Business Profile?',
        answer: 'We recommend posting at least once a week. Regular updates keep your profile active, showcase new work, and signal to prospective clients that your business is operating and responsive.'
      }
    ]
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Strategic social content, brand storytelling, visual design, short-form video strategies, and community engagement.',
    tagline: 'Build Authority & Engage Your Audience Across Key Channels',
    category: 'Social',
    heroHeadline: 'Build Meaningful Brand Presence and Engage Your Audience Where They Spend Time',
    heroSubheadline: 'We craft editorial content strategies, designed visual carousels, and engaging video concepts that establish your authority and generate organic enquiries.',
    problemsSolved: [
      {
        problem: 'Inconsistent Posting & Lack of Direction',
        impact: 'Brands post randomly without a cohesive message, yielding minimal engagement and zero enquiries.',
        solution: 'Structured monthly editorial calendars balancing educational value, proof of work, and conversion CTAs.'
      },
      {
        problem: 'Generic, Template-Heavy Visuals',
        impact: 'Audiences scroll past low-effort graphics that look like every other competitor in the feed.',
        solution: 'Custom editorial design, bespoke typography layouts, and platform-native creative direction.'
      },
      {
        problem: 'Vanity Metrics Without Business Inquiries',
        impact: 'Likes and impressions fail to translate into clients or inbound sales leads.',
        solution: 'Positioning your team as thought leaders with actionable insights that compel prospects to reach out.'
      },
      {
        problem: 'Unanswered Comments and Inquiries',
        impact: 'Prospective clients who comment or message lose interest when ignored.',
        solution: 'Active community engagement protocols ensuring direct messages and comments receive timely guidance.'
      }
    ],
    deliverables: [
      {
        title: 'Channel Strategy & Brand Tone Guidelines',
        description: 'Defining your target demographic, key content pillars, tone of voice, and platform priorities (LinkedIn, Instagram, etc.).',
        details: ['Platform selection roadmap', 'Core content pillars definition', 'Visual style guides']
      },
      {
        title: 'Monthly Editorial Content Calendar',
        description: 'Planned 30-day schedules with captions, hashtags, graphic direction, and scheduled release times.',
        details: ['Pre-approved topic schedules', 'Copywriting crafted for engagement', 'Call-to-action integration']
      },
      {
        title: 'High-Impact Visual & Carousel Design',
        description: 'Custom-designed graphics, slide decks, infographics, and reel/short-form storyboards.',
        details: ['Multi-slide educational carousels', 'Short-form video concepts & scripts', 'Brand-aligned typography & palette']
      },
      {
        title: 'Community Interaction & Monthly Analytics',
        description: 'Tracking profile reach, follower quality, inbound direct messages, and top-performing themes.',
        details: ['Audience demographic reporting', 'Top content post-mortems', 'Next-month strategic adaptations']
      }
    ],
    benefitsAndOutcomes: [
      { metric: 'Cohesive', description: 'Unified visual aesthetics and messaging across LinkedIn, Instagram, and key networks' },
      { metric: 'Consistent', description: 'Guaranteed publishing rhythm eliminating dry spells and last-minute scrambles' },
      { metric: 'Original', description: 'Zero low-effort generic stock graphics; all assets custom tailored' },
      { metric: 'Authority', description: 'Positions your leadership as trusted domain specialists' }
    ],
    processSteps: [
      { step: '01', title: 'Audit & Persona Mapping', description: 'We evaluate your current channels, audience demographics, and top competitors.' },
      { step: '02', title: 'Content Pillars & Visual Direction', description: 'We define the core subjects your brand will speak on and design custom graphic templates.' },
      { step: '03', title: 'Creation & Approval', description: 'Each month’s copy and visuals are created in advance for your review and approval.' },
      { step: '04', title: 'Publishing & Engagement Review', description: 'We schedule posts at optimal viewing times, monitor responses, and analyze audience behavior.' }
    ],
    suitableFor: [
      'B2B tech and consulting companies seeking high-value LinkedIn authority',
      'Consumer and lifestyle brands building an aspirational presence on Instagram',
      'Real estate developers showcasing project progress and design aesthetic',
      'Educational academies wanting to share student success stories and subject tips'
    ],
    relatedServices: ['meta-ads', 'website-design-development', 'ppc-advertising'],
    caseStudy: {
      title: 'B2B Consultancy LinkedIn Authority Building',
      industry: 'Management Consulting',
      timeline: '5 Months',
      challenge: 'The executive team had dormant social accounts with no outbound thought leadership, missing corporate RFPs.',
      strategy: 'Developed a bi-weekly cadence of carousel breakdowns explaining supply-chain problem solving, combined with partner commentary on industry shifts.',
      outcome: 'Expanded qualified network by 3,400+ decision makers and generated 22 inbound corporate discovery call requests.'
    },
    faqs: [
      {
        question: 'Which social media channels should our business focus on?',
        answer: 'We focus where your buyers actually spend time. For B2B and professional services, LinkedIn is typically the highest-value channel. For consumer brands, real estate, aesthetics, and lifestyle, Instagram and YouTube Shorts deliver stronger visual engagement.'
      },
      {
        question: 'Do you require our team to record videos or take photos?',
        answer: 'Original photos of your team, projects, and behind-the-scenes moments always perform best. We provide detailed shot lists, scripting, and editing support. When filming is impractical, we design typography-led editorial carousels and motion graphics.'
      },
      {
        question: 'Can social media marketing directly generate sales leads?',
        answer: 'Yes, when structured strategically. By providing actionable answers to real customer challenges and directing interested viewers to dedicated landing pages or consultation forms, social becomes an active lead pipeline.'
      },
      {
        question: 'How far in advance do we approve content?',
        answer: 'We deliver content calendars and completed creatives 7 to 10 days before the start of each month, giving your team plenty of time to review, suggest edits, and approve before anything goes live.'
      }
    ]
  },
  {
    slug: 'ppc-advertising',
    title: 'Pay-Per-Click Advertising',
    shortDescription: 'Comprehensive paid search, display, and social media campaign architectures engineered for maximum return on ad spend (ROAS).',
    tagline: 'Strategic Paid Media Engineered for Measurable ROI',
    category: 'Advertising',
    heroHeadline: 'Turn Advertising Spend Into Scalable, Predictable Revenue',
    heroSubheadline: 'We plan, build, and optimize multi-channel PPC campaigns with rigorous conversion tracking, negative keyword hygiene, and high-converting landing pages.',
    problemsSolved: [
      {
        problem: 'Wasted Budget on Low-Intent Clicks',
        impact: 'Spending money on broad clicks from users seeking free tutorials, jobs, or unrelated services.',
        solution: 'Strict match type controls, continuous negative keyword expansion, and high-intent audience filtering.'
      },
      {
        problem: 'Broken or Missing Conversion Tracking',
        impact: 'Inability to know which campaigns, ads, or keywords generated genuine customer enquiries.',
        solution: 'Server-side and client-side conversion tracking setup linking form fills and phone calls directly to ad spend.'
      },
      {
        problem: 'Landing Page Disconnect',
        impact: 'Sending paid traffic to a generic homepage where users bounce within seconds.',
        solution: 'Dedicated high-converting landing pages matching the exact promise and messaging of each ad.'
      },
      {
        problem: 'Unmonitored Automated Bidding Spikes',
        impact: 'Ad platforms spending daily budgets on automated tests that do not produce sales.',
        solution: 'Hands-on bid management balancing smart bidding algorithms with human oversight and budget caps.'
      }
    ],
    deliverables: [
      {
        title: 'Full-Funnel Campaign Architecture',
        description: 'Structured campaigns separating prospecting from retargeting, branded queries, and commercial keywords.',
        details: ['Campaign hierarchy and segmentation', 'Budget allocation modeling', 'Audience persona targeting']
      },
      {
        title: 'End-to-End Conversion Tracking Setup',
        description: 'Implementation of Google Tag Manager, Google Analytics 4, and conversion events across all forms.',
        details: ['Google Tag Manager container setup', 'Form submission & phone call event tracking', 'ROAS and Cost-Per-Acquisition reporting']
      },
      {
        title: 'Ad Copywriting & Creative Variations',
        description: 'Compelling headlines, benefits-oriented descriptions, and multiple ad variants for split testing.',
        details: ['Responsive search ad asset creation', 'Display banner & social creative directions', 'Callout and sitelink extensions']
      },
      {
        title: 'Continuous Bid, Keyword & Negative Management',
        description: 'Daily and weekly bid optimizations, search query analysis, and budget rebalancing.',
        details: ['Search terms review for negative keyword addition', 'Device and geographic bid adjustments', 'Weekly performance summaries']
      }
    ],
    benefitsAndOutcomes: [
      { metric: 'Transparent', description: 'Ad spend is billed directly to your own advertising accounts with zero markups' },
      { metric: 'Tracked', description: 'Every lead, phone call, and enquiry mapped back to the originating ad' },
      { metric: 'Controlled', description: 'Strict budget ceilings preventing unexpected platform overspending' },
      { metric: 'Iterative', description: 'Systematic A/B testing of messaging to decrease Cost-Per-Acquisition over time' }
    ],
    processSteps: [
      { step: '01', title: 'Goal & Economics Review', description: 'We calculate your customer lifetime value, target Cost-Per-Acquisition, and set realistic return targets.' },
      { step: '02', title: 'Tracking & Infrastructure', description: 'Before spending a rupee or dollar, we configure bulletproof conversion tracking across your website.' },
      { step: '03', title: 'Campaign Build & Launch', description: 'We write tightly themed ad groups, establish negative keyword lists, and launch with controlled bids.' },
      { step: '04', title: 'Daily Optimization & Scaling', description: 'We trim non-performing queries, promote winning creative assets, and scale high-performing ad sets.' }
    ],
    suitableFor: [
      'Companies requiring immediate inbound enquiries while long-term SEO builds',
      'Service providers launching high-ticket offerings in competitive metropolitan markets',
      'E-commerce brands seeking direct return on ad spend across catalog sales',
      'Local businesses needing steady, predictable phone calls and consultation bookings'
    ],
    relatedServices: ['google-ads', 'meta-ads', 'website-design-development'],
    caseStudy: {
      title: 'Commercial Cleaning Services Lead Campaign',
      industry: 'B2B Facilities Management',
      timeline: '90 Days',
      challenge: 'The client was spending ₹90,000/month on Google Ads with an agency that had conversion tracking misconfigured and broad match keywords draining budget.',
      strategy: 'Restructured into single-intent ad groups, added 280+ negative keywords, built a dedicated single-page quote calculator, and enabled call tracking.',
      outcome: 'Reduced Cost-Per-Lead by 54% and increased qualified contract enquiry volume from 11 to 38 monthly contracts.'
    },
    faqs: [
      {
        question: 'Who pays the advertising platform costs (Google/Meta)?',
        answer: 'You pay Google and Meta directly via your own corporate credit card or billing profile. We charge a transparent agency management fee. You retain 100% ownership and access to your ad accounts and historical data at all times.'
      },
      {
        question: 'What is a reasonable starting monthly ad budget?',
        answer: 'Budget depends heavily on your industry and competition. For local service campaigns, a starting budget of ₹30,000 to ₹75,000 (or $1,000 to $2,500 for international markets) per month is usually sufficient to generate statistically meaningful click and conversion data.'
      },
      {
        question: 'How quickly can PPC campaigns start generating leads?',
        answer: 'Unlike SEO, PPC campaigns can start generating traffic within hours of approval. Once conversion tracking and landing pages are live, initial enquiries typically begin arriving during the first week.'
      },
      {
        question: 'Why do we need a separate landing page instead of our home page?',
        answer: 'Homepages have many navigation links and competing choices, causing paid visitors to get distracted and leave. Dedicated landing pages align tightly with the ad message and feature a single clear conversion action, yielding significantly higher lead conversion rates.'
      }
    ]
  },
  {
    slug: 'google-ads',
    title: 'Google Ads Management',
    shortDescription: 'High-intent Search, Performance Max, Display, and Remarketing campaigns built to capture active commercial searches.',
    tagline: 'Capture Active Buyers at the Exact Moment They Search',
    category: 'Advertising',
    heroHeadline: 'Connect With High-Intent Customers at the Exact Moment They Need Your Services',
    heroSubheadline: 'We architect and optimize targeted Google Ads campaigns with laser-focused search themes, negative keyword precision, and conversion-optimized landing pages.',
    problemsSolved: [
      {
        problem: 'Paying for Broad, Irrelevant Searches',
        impact: 'Google’s broad match algorithm matching your budget to unrelated questions and student research.',
        solution: 'Phrase and exact match discipline paired with aggressive negative keyword lists.'
      },
      {
        problem: 'Low Quality Scores Driving Up Click Costs',
        impact: 'Poor ad relevance and slow landing pages cause Google to charge higher Cost-Per-Click (CPC).',
        solution: 'Tightly themed ad groups (STAGs) ensuring direct keyword-to-ad-to-landing-page copy symmetry.'
      },
      {
        problem: 'Performance Max "Black Box" Waste',
        impact: 'PMax spending valuable budget on spam apps and junk display websites without generating real leads.',
        solution: 'Proper placement exclusions, customer match signals, and brand negative lists.'
      },
      {
        problem: 'Untracked Phone Calls & Form Dropoffs',
        impact: 'Losing visibility into which search terms drove actual calls or form enquiries.',
        solution: 'Dynamic number insertion (call tracking) and verified Google Ads conversion actions.'
      }
    ],
    deliverables: [
      {
        title: 'High-Intent Search Campaign Setup',
        description: 'Tightly structured search ad groups targeting customers actively looking to hire or purchase.',
        details: ['Exact & phrase match keyword groupings', 'Commercial intent keyword selection', 'Location and scheduling targeting']
      },
      {
        title: 'Negative Keyword Shielding',
        description: 'Extensive negative keyword lists blocking free, cheap, job seeker, DIY, and competitor confusion terms.',
        details: ['Universal negative list deployment', 'Weekly search term mining', 'Irrelevant location exclusions']
      },
      {
        title: 'Compelling Responsive Search Ads (RSAs)',
        description: 'Writing multiple headline and description variations with pinning and dynamic customizers.',
        details: ['Unique value propositions in headlines', 'Clear callout and structured snippet assets', 'Lead form and sitelink extensions']
      },
      {
        title: 'Conversion Tracking & Bid Optimization',
        description: 'Integration with Google Analytics 4, phone call tracking, and value-based bidding rules.',
        details: ['Primary vs secondary conversion actions', 'Target CPA & Target ROAS bidding calibration', 'Device and audience adjustments']
      }
    ],
    benefitsAndOutcomes: [
      { metric: 'Intent-Driven', description: 'Advertising directly to people actively seeking your specific service right now' },
      { metric: 'Account Ownership', description: 'You maintain 100% administrative control of your Google Ads account' },
      { metric: 'Clean Data', description: 'Zero vanity click metrics; all evaluations based on cost per qualified lead' },
      { metric: 'Audited Weekly', description: 'Continuous human oversight to ensure Google algorithms stay within parameters' }
    ],
    processSteps: [
      { step: '01', title: 'Search Term & Competitor Audit', description: 'We research what your prospective customers type into Google and what competitors are paying per click.' },
      { step: '02', title: 'Ad Group Architecture', description: 'We construct tightly organized ad groups so that every search query sees a perfectly matched headline.' },
      { step: '03', title: 'Tracking Verification & Launch', description: 'We test tracking forms, phone call numbers, and launch campaigns with conservative bidding.' },
      { step: '04', title: 'Search Term Cleansing & Scaling', description: 'Every week we inspect actual search terms, prune unwanted clicks, and allocate budget to top performers.' }
    ],
    suitableFor: [
      'High-ticket service businesses where a single client delivers strong margin',
      'Local emergency and urgent service providers (clinics, repairs, specialized consultants)',
      'B2B software, industrial manufacturing, and wholesale distribution companies',
      'Educational academies recruiting for upcoming semester batches'
    ],
    relatedServices: ['ppc-advertising', 'meta-ads', 'website-design-development'],
    caseStudy: {
      title: 'Corporate Legal Advisory Google Ads Campaign',
      industry: 'Legal & Corporate Advisory',
      timeline: '4 Months',
      challenge: 'Firm was getting clicks from individuals seeking free legal aid and student interns rather than corporate clients.',
      strategy: 'Built exact-intent campaign targeting corporate compliance and contract drafting queries, filtered out 350+ negative keywords, and introduced verified phone-call tracking.',
      outcome: 'Cut wasted click spend by 61% and secured 14 high-value corporate retainers over 120 days.'
    },
    faqs: [
      {
        question: 'What is Quality Score and why does it matter?',
        answer: 'Quality Score is Google’s rating (from 1 to 10) of the quality and relevance of your keywords and PPC ads. A higher Quality Score lowers your Cost-Per-Click (CPC) and earns you better ad positions without paying more than competitors.'
      },
      {
        question: 'Should we bid on our own company brand name?',
        answer: 'In many cases yes, especially if competitors are bidding on your brand name to steal your traffic. Branded search ads are inexpensive, protect your top position, and allow you to control sitelinks and specific promotion announcements.'
      },
      {
        question: 'How do you handle negative keywords?',
        answer: 'We deploy an extensive universal negative keyword list prior to launch (blocking words like "free", "jobs", "salary", "pdf", "course", "meaning"). During active management, we audit the Search Terms report weekly to block new irrelevant terms.'
      },
      {
        question: 'Can you track phone calls generated by Google Ads?',
        answer: 'Yes. We configure Google call assets and dynamic call forwarding numbers on your website so that when a visitor clicks an ad and calls your business, the call is recorded as a conversion tied to the exact keyword that generated it.'
      }
    ]
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads Management',
    shortDescription: 'Targeted Facebook & Instagram advertising campaigns focused on audience segmentation, creative testing, and lead generation.',
    tagline: 'High-Converting Facebook & Instagram Ad Campaigns',
    category: 'Advertising',
    heroHeadline: 'Scale Customer Acquisition on Facebook and Instagram With High-Performing Creatives',
    heroSubheadline: 'We design scroll-stopping visual creatives and data-driven audience campaigns that generate qualified enquiries and sales for your business.',
    problemsSolved: [
      {
        problem: 'Creative Fatigue & Rising Acquisition Costs',
        impact: 'Ad performance decays rapidly when audiences see the exact same ad repeatedly.',
        solution: 'Systematic creative testing pipeline introducing new hooks, visual formats, and angles weekly.'
      },
      {
        problem: 'Targeting Too Broad or Too Narrow',
        impact: 'Ad spend wasted on low-probability viewers or suffocated by tiny audiences.',
        solution: 'Strategic mix of broad targeting with strong creative filters, custom lookalikes, and warm retargeting.'
      },
      {
        problem: 'Unqualified Lead Form Submissions',
        impact: 'Instant forms gathering accidental clicks, bad phone numbers, and unresponsive leads.',
        solution: 'High-intent lead forms with conditional custom questions and landing page verification.'
      },
      {
        problem: 'Tracking Gaps Post-iOS Privacy Changes',
        impact: 'Pixel failing to capture true conversions due to browser tracking restrictions.',
        solution: 'Meta Conversions API (CAPI) server-side integration delivering verified event matching.'
      }
    ],
    deliverables: [
      {
        title: 'Audience & Offer Strategy',
        description: 'Defining compelling customer hooks, lead magnets, and targeted audience personas.',
        details: ['Demographic and behavioral targeting', 'Custom audiences from CRM data', 'Lookalike audience architecture']
      },
      {
        title: 'Ad Creative Design & Copywriting',
        description: 'Producing static editorial cards, video hooks, carousel showcases, and story formats.',
        details: ['High-contrast mobile feed creatives', 'Direct-response copywriting angles', 'Story and reel vertical formats']
      },
      {
        title: 'Server-Side Meta Conversions API (CAPI)',
        description: 'Configuring Meta Pixel alongside server-side tracking to recover lost conversion events.',
        details: ['Conversions API (CAPI) setup', 'Standard and custom event tracking', 'Domain verification and aggregated event measurement']
      },
      {
        title: 'High-Intent Lead Funnel Setup',
        description: 'Custom lead forms with validation questions or dedicated high-converting landing pages.',
        details: ['Higher-intent review step configuration', 'Instant CRM/Email lead notifications', 'Direct WhatsApp message integrations']
      }
    ],
    benefitsAndOutcomes: [
      { metric: 'Visual Impact', description: 'Editorial-grade creatives designed to stop scrolling in crowded feeds' },
      { metric: 'Verified Data', description: 'Meta Conversions API (CAPI) delivering resilient tracking data' },
      { metric: 'Lead Quality', description: 'Filtered questions ensuring leads have genuine budget and interest' },
      { metric: 'Direct WhatsApp', description: 'Seamless options to connect interested prospects straight to your sales team' }
    ],
    processSteps: [
      { step: '01', title: 'Offer & Hook Development', description: 'We identify what makes your service distinct and write 3-4 varied messaging hooks.' },
      { step: '02', title: 'Creative Production', description: 'We design custom feed images, carousels, and video storyboards aligned with your brand.' },
      { step: '03', title: 'Pixel & CAPI Verification', description: 'We verify event tracking, configure custom questions on lead forms, and set campaign budget limits.' },
      { step: '04', title: 'Iterative Creative Testing', description: 'We cycle winning formats, disable fatigued ads, and scale audiences with proven Cost-Per-Lead.' }
    ],
    suitableFor: [
      'Real estate developers showcasing residential projects and floor plans',
      'High-value education, certification, and training institutes',
      'Healthcare and aesthetic clinics offering consultation bookings',
      'B2C brands, boutique ecommerce, and high-engagement consumer services'
    ],
    relatedServices: ['social-media-marketing', 'ppc-advertising', 'website-design-development'],
    caseStudy: {
      title: 'Premium Real Estate Project Lead Generation',
      industry: 'Real Estate & Property',
      timeline: '60 Days',
      challenge: 'Client was generating cheap leads through generic Facebook forms, but 80% of contacts never answered phone calls or lacked the required budget.',
      strategy: 'Redesigned campaign using verified high-intent forms with 3 qualification questions (budget range, timeline, preferred configuration) and direct WhatsApp handover.',
      outcome: 'Reduced disqualified lead volume by 72% while delivering 94 qualified site-visit appointments for sales executives.'
    },
    faqs: [
      {
        question: 'Should we use Meta Instant Forms or an external landing page?',
        answer: 'Both have distinct advantages. Meta Instant Forms offer low friction and fast mobile submission, which works well when paired with high-intent qualification questions. External landing pages provide deeper space for brand storytelling, case studies, and higher qualification. We often test both simultaneously.'
      },
      {
        question: 'How does the Meta Conversions API (CAPI) help our campaigns?',
        answer: 'Modern browser privacy features often block traditional browser cookies (Pixel). Meta Conversions API sends event data directly from your server to Meta, recovering lost conversion attribution and helping Meta’s AI find higher-quality buyers.'
      },
      {
        question: 'How often do ad creatives need to be updated?',
        answer: 'Depending on your audience size and daily spend, ad fatigue typically begins to occur every 2 to 4 weeks. We continuously monitor frequency and Cost-Per-Lead metrics, introducing fresh creative variations before performance declines.'
      },
      {
        question: 'Can we connect Meta Ads directly to WhatsApp?',
        answer: 'Yes. Click-to-WhatsApp ads allow interested users to start a direct WhatsApp conversation with your sales team with a single tap, which is extremely effective for high-touch Indian and international customer relationships.'
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return servicesData.find((s) => s.slug === slug);
};

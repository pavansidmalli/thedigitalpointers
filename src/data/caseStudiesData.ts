import { CaseStudyItem } from '../types';

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'cs-b2b-engineering',
    title: 'Precision Engineering OEM: 3.4x Qualified RFQs via Technical SEO & Web Overhaul',
    clientType: 'Industrial Equipment & CNC Machinery Manufacturer',
    industry: 'Engineering & Manufacturing',
    category: 'Web & Conversion',
    services: ['Website Design & Development', 'Search Engine Optimization', 'Google Ads'],
    summary: 'Rebuilt a slow, obsolete corporate catalog into an ultra-fast headless web platform with structured technical schema and high-intent Google Search campaigns for commercial buyers.',
    timeline: '5 Months Execution',
    location: 'Hyderabad & Global Exports',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'High-precision manufacturing facility and industrial engineering equipment',
    before: {
      state: 'Slow 5.4s mobile load time, unindexed PDF product specs, zero Page 1 rankings for core machinery models, and only 2 to 3 sporadic email inquiries per month.',
      metrics: [
        { label: 'Page Load Time', value: '5.4s (Failed Core Web Vitals)' },
        { label: 'Top 10 Keywords', value: '3 Informational terms only' },
        { label: 'Monthly RFQ Inquiries', value: '2 - 3 per month' },
        { label: 'Mobile Bounce Rate', value: '74.2%' }
      ],
      painPoints: [
        'Prospective corporate buyers bounced before technical datasheets loaded',
        'Competitors dominated all commercial searches for CNC milling machinery',
        'Sales team spent hours following up on consumer inquiries seeking retail equipment'
      ]
    },
    after: {
      state: 'Sub-second lightweight architecture, 42 commercial keywords ranked in Google Top 3, and a structured qualification form delivering high-ticket quotation requests directly to sales engineers.',
      metrics: [
        { label: 'Page Load Time', value: '0.9s (100% Score)' },
        { label: 'Top 10 Keywords', value: '42 Commercial search terms' },
        { label: 'Monthly RFQ Inquiries', value: '28+ Verified corporate RFQs' },
        { label: 'Mobile Bounce Rate', value: '28.6% (-61% drop)' }
      ],
      wins: [
        'Closed 4 high-value enterprise export contracts within the first 90 days of launch',
        'Technical product pages indexed by Google within 48 hours via automated XML sitemap feeds',
        'Direct integration with CRM eliminating lead leakage and manual data entry'
      ]
    },
    keyMetricComparison: [
      { metric: 'Core Web Vitals Speed', before: '5.4s', after: '0.9s', improvement: '83% Faster' },
      { metric: 'Organic Search Impressions', before: '4,200 / mo', after: '38,600 / mo', improvement: '+819%' },
      { metric: 'Commercial Lead Volume', before: '3 / mo', after: '28 / mo', improvement: '9.3x Pipeline' },
      { metric: 'Inquiry Qualification Rate', before: '18%', after: '84%', improvement: '+366%' }
    ],
    strategyHighlights: [
      'Bespoke React + TypeScript architecture with zero bloated page builder dependencies',
      'JSON-LD schema markup for industrial specifications, CAD downloads, and manufacturer certifications',
      'Exact-match Google Search campaigns targeting high-intent procurement search queries'
    ],
    testimonial: {
      quote: 'The Digital Pointers understood that in B2B manufacturing, traffic is useless without commercial intent. Our new platform consistently brings verified factory owners and procurement heads directly to our quotation desk.',
      author: 'Director of Business Development',
      role: 'Heavy Machinery Corporation'
    },
    results: [
      { label: 'Core Speed', value: '0.9s on 4G' },
      { label: 'Search Traffic', value: '+819% Organic' },
      { label: 'Enterprise RFQs', value: '3.4x Pipeline' }
    ],
    isSample: true
  },
  {
    id: 'cs-healthcare-local',
    title: 'Multi-Branch Orthopedic & Spine Network: +74% Inbound Appointments via Local SEO',
    clientType: 'Specialty Orthopedic & Surgical Clinic Chain (3 Locations)',
    industry: 'Healthcare & Wellness',
    category: 'Local Growth',
    services: ['Local SEO', 'Google Business Profile Management'],
    summary: 'Resolved conflicting NAP citation records across 40+ local directories, restructured Google Business Profiles, and implemented a compliant patient review capture workflow.',
    timeline: '4 Months Execution',
    location: 'Hyderabad, India (Banjara Hills, HITEC City, Secunderabad)',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern sterile surgical consultation clinic with medical team',
    before: {
      state: 'Mismatched telephone numbers and addresses across clinic branches, absent from the Google 3-Pack for specialty searches, and only 14 direct phone calls per month across all 3 locations.',
      metrics: [
        { label: 'Google 3-Pack Rank', value: 'Unranked / Position 12+' },
        { label: 'Direct Phone Calls', value: '14 calls / month' },
        { label: 'Direction Requests', value: '32 per month' },
        { label: 'Verified Reviews', value: '8 total (4.1 avg)' }
      ],
      painPoints: [
        'Patients frequently showed up at an old relocated branch due to stale directory records',
        'Nearby residents searching "orthopedic surgeon near me" were guided to competing hospital chains',
        'No systematic procedure existed to capture reviews from satisfied postoperative patients'
      ]
    },
    after: {
      state: '#1 to #3 rankings in the Google Maps Local Pack across all 3 clinic service zones, generating 140+ monthly consultation calls and steady physical branch footfall.',
      metrics: [
        { label: 'Google 3-Pack Rank', value: '#1 for 16 Priority Terms' },
        { label: 'Direct Phone Calls', value: '148 calls / month (+957%)' },
        { label: 'Direction Requests', value: '194 per month (+506%)' },
        { label: 'Verified Reviews', value: '114 genuine reviews (4.9 avg)' }
      ],
      wins: [
        'Synchronized 42 healthcare directories (Justdial, Practo, Google Maps, Apple Maps) with 100% NAP consistency',
        'Established dedicated individual location landing pages with doctor bios and schema markup',
        'Automated ethical post-consultation SMS review requests generating 20+ authentic ratings monthly'
      ]
    },
    keyMetricComparison: [
      { metric: 'Google Maps 3-Pack Rank', before: 'Position 12+', after: 'Position #1', improvement: 'Dominant #1' },
      { metric: 'Inbound Patient Calls', before: '14 / mo', after: '148 / mo', improvement: '+957%' },
      { metric: 'Direction Requests', before: '32 / mo', after: '194 / mo', improvement: '+506%' },
      { metric: 'Average Google Rating', before: '4.1 Stars', after: '4.9 Stars', improvement: '+0.8 Stars' }
    ],
    strategyHighlights: [
      'Comprehensive NAP audit and bulk duplicate suppression across regional healthcare indexes',
      'Location-specific landing pages with geo-coordinates, parking details, and Doctor schedule schema',
      'Proactive Google Business Profile post updates showcasing patient recovery stories and clinical amenities'
    ],
    testimonial: {
      quote: 'Our phones now ring daily with patients who specifically found our clinic in Google Maps. The footfall to our new HITEC City facility doubled within 60 days of partnering with The Digital Pointers.',
      author: 'Chief Operating Officer',
      role: 'Regional Orthopedic Healthcare Network'
    },
    results: [
      { label: 'Map Rankings', value: '#1 in Local Pack' },
      { label: 'Phone Calls', value: '+957% Direct Calls' },
      { label: 'Footfall Directions', value: '+506% Growth' }
    ],
    isSample: true
  },
  {
    id: 'cs-luxury-real-estate',
    title: 'Luxury Residential Towers: -71% Cost-Per-Qualified-Lead via High-Intent Paid Funnels',
    clientType: 'Premium Real Estate Developer',
    industry: 'Real Estate & Property',
    category: 'Paid Ads & Performance',
    services: ['Performance Marketing', 'Meta Ads', 'Google Ads', 'PPC Advertising'],
    summary: 'Replaced generic Facebook lead forms with an interactive 3-step qualifying buyer survey and immediate WhatsApp CRM handover, drastically increasing site-visit booking rates.',
    timeline: '60 Days Campaign Sprint',
    location: 'Hyderabad, India (Financial District)',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Luxury high-rise residential apartment towers at dusk with architectural lighting',
    before: {
      state: 'Client spent ₹2,80,000/month on generic social ads resulting in 190 raw leads at ₹1,470 CPL, but sales executives reported 78% invalid phone numbers, students, or under-budget prospects.',
      metrics: [
        { label: 'Cost Per Lead (CPL)', value: '₹1,470 / submission' },
        { label: 'Lead Qualification Rate', value: '18% qualified' },
        { label: 'Cost Per Verified Visit', value: '₹14,730 per visit' },
        { label: 'Response Latency', value: '24 - 48 Hours' }
      ],
      painPoints: [
        'Sales team demoralized by calling numbers where callers claimed they never submitted the form',
        'Ad spend was burning on auto-fill Facebook forms without budget qualification',
        'No conversion tracking was configured for post-site-visit sales contract milestones'
      ]
    },
    after: {
      state: 'A high-converting dedicated mobile landing page with budget and timeline filters, combined with Meta Conversions API (CAPI) and instantaneous 1-tap WhatsApp agent routing.',
      metrics: [
        { label: 'Cost Per Lead (CPL)', value: '₹420 / submission (-71%)' },
        { label: 'Lead Qualification Rate', value: '76% qualified (+322%)' },
        { label: 'Cost Per Verified Visit', value: '₹3,250 per visit (-78%)' },
        { label: 'Response Latency', value: '< 3 Minutes via WhatsApp' }
      ],
      wins: [
        'Generated 86 confirmed physical walkthrough appointments during the 60-day launch window',
        'Meta algorithmic targeting recalibrated toward high-net-worth individuals based on CRM conversion signals',
        'Sales reps connected with interested buyers while they were still active on their mobile screens'
      ]
    },
    keyMetricComparison: [
      { metric: 'Cost Per Lead (CPL)', before: '₹1,470', after: '₹420', improvement: '-71% Lower' },
      { metric: 'Lead Qualification Rate', before: '18%', after: '76%', improvement: '4.2x Better' },
      { metric: 'Verified Site Visits', before: '19 visits / 60d', after: '86 visits / 60d', improvement: '+352%' },
      { metric: 'Effective Cost Per Visit', before: '₹14,730', after: '₹3,250', improvement: '-78% Cheaper' }
    ],
    strategyHighlights: [
      'Eliminated friction-heavy standard forms in favor of an interactive apartment configuration selector',
      'Direct WhatsApp Business API hook delivering pre-filled buyer preferences to the sales desk instantly',
      'Meta Conversions API (CAPI) sending verified site-visit signals back to Meta to optimize bidding'
    ],
    testimonial: {
      quote: 'Before The Digital Pointers, our sales team spent all day calling fake numbers. The new funnel delivers genuine buyers who know our starting price and actively show up for site walkthroughs.',
      author: 'Head of Sales & Marketing',
      role: 'Luxury Residential Development Group'
    },
    results: [
      { label: 'Cost Per Lead', value: '₹420 (-71% CAC)' },
      { label: 'Qualified Visits', value: '86 Bookings' },
      { label: 'Lead Response', value: '< 3 Mins WhatsApp' }
    ],
    isSample: true
  },
  {
    id: 'cs-corporate-advisory',
    title: 'Cross-Border Corporate Tax & M&A Advisory: 19 High-Value Retainers via B2B Content',
    clientType: 'Corporate Advisory, Mergers & Acquisitions Firm',
    industry: 'Professional & Financial Services',
    category: 'SEO & Organic',
    services: ['Search Engine Optimization', 'Social Media Marketing', 'Website Design & Development'],
    summary: 'Turned a dormant, static web footprint into an authoritative B2B knowledge hub with technical regulatory analyses, clean executive carousels, and gated strategy guides.',
    timeline: '6 Months Program',
    location: 'Hyderabad & Mumbai',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern glass corporate financial skyscraper and commercial business district',
    before: {
      state: 'Zero organic visibility for corporate restructuring queries, static 5-page outdated website, no social presence, and completely dependent on informal partner referrals.',
      metrics: [
        { label: 'Organic Monthly Visits', value: '310 sessions' },
        { label: 'Inbound Retainer Leads', value: '0 per quarter' },
        { label: 'LinkedIn Followers', value: '240 (dormant)' },
        { label: 'Commercial Contract RFQs', value: '100% Word of Mouth' }
      ],
      painPoints: [
        'Venture-backed startups and CFOs could not verify the firm’s subject matter depth online',
        'Competing tier-1 advisory firms dominated organic search for cross-border tax compliance',
        'Firm partners lacked the time or design resources to publish polished insights'
      ]
    },
    after: {
      state: 'High-ranking authority guides for 24 corporate tax and FDI compliance keywords, active LinkedIn cadence reaching 4,200+ verified decision-makers, and 19 signed annual client retainers.',
      metrics: [
        { label: 'Organic Monthly Visits', value: '8,420 sessions (+2,616%)' },
        { label: 'Inbound Retainer Leads', value: '19 signed retainers' },
        { label: 'LinkedIn Network Reach', value: '4,200+ C-suite leaders' },
        { label: 'Average Retainer Value', value: '₹8,50,000 / year' }
      ],
      wins: [
        'Secured retainers from 3 international tech subsidiaries establishing operations in India',
        'Ranked #1 on Google for "cross-border entity restructuring advisory" and related commercial queries',
        'Over 640 CFOs and corporate counsel downloaded the firm’s statutory compliance audit checklist'
      ]
    },
    keyMetricComparison: [
      { metric: 'Organic Search Traffic', before: '310 / mo', after: '8,420 / mo', improvement: '+2,616%' },
      { metric: 'Signed Annual Retainers', before: '0 / quarter', after: '19 signed', improvement: 'New Channel' },
      { metric: 'Decision Maker Reach', before: '240', after: '4,200+', improvement: '+1,650%' },
      { metric: 'Pipeline Contract Value', before: '₹0 (Inbound)', after: '₹1.61 Cr', improvement: 'Transformative' }
    ],
    strategyHighlights: [
      'Authored 14 deeply researched regulatory whitepapers targeting high-intent corporate financial queries',
      'Designed bespoke LinkedIn visual carousels distilling statutory amendments for executive readers',
      'Architected downloadable gated PDF guides paired with friction-free corporate email validation'
    ],
    testimonial: {
      quote: 'The Digital Pointers established our firm as the premier voice in cross-border tax advisory. The inbound retainers generated through our website and LinkedIn have fundamentally diversified our revenue model.',
      author: 'Senior Managing Partner',
      role: 'Cross-Border Advisory & Tax Practice'
    },
    results: [
      { label: 'Retainer Deals', value: '19 Signed Contracts' },
      { label: 'Organic Visits', value: '+2,616% Traffic' },
      { label: 'Inbound Pipeline', value: '₹1.61 Cr Value' }
    ],
    isSample: true
  },
  {
    id: 'cs-d2c-performance',
    title: 'D2C Premium Apparel Brand: 4.8x Blended ROAS & -38% Customer Acquisition Cost',
    clientType: 'Direct-to-Consumer Lifestyle & Apparel Brand',
    industry: 'Consumer Goods & E-Commerce',
    category: 'Paid Ads & Performance',
    services: ['Performance Marketing', 'Meta Ads', 'PPC Advertising', 'Website Design & Development'],
    summary: 'Scaled monthly e-commerce revenue from ₹12 Lakh to ₹54 Lakh with omnichannel prospecting, creative sprint iterations, and cart abandonment conversion rate optimization.',
    timeline: '90 Days Scaling Phase',
    location: 'Hyderabad, India (National Delivery)',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'High-end retail apparel showcase and e-commerce product display',
    before: {
      state: 'Ad accounts stuck at 1.4x ROAS, burning ₹4,00,000/month with single ad creative fatigue, high 78% checkout drop-off, and no first-party attribution tracking.',
      metrics: [
        { label: 'Blended ROAS', value: '1.4x (Unprofitable)' },
        { label: 'Customer Acquisition Cost', value: '₹890 per order' },
        { label: 'Checkout Conversion Rate', value: '1.6%' },
        { label: 'Creative Lifespan', value: '7 - 10 Days before decay' }
      ],
      painPoints: [
        'Increasing daily budgets directly caused ROAS to plummet due to narrow audience overlap',
        'Mobile checkout page had 4 friction steps causing 78% drop-off at final payment',
        'IOS privacy updates caused Meta to under-report 35% of genuine purchase transactions'
      ]
    },
    after: {
      state: 'A scalable omnichannel acquisition engine powered by weekly creative testing sprints, 1-click mobile checkout, and server-side Conversions API achieving 4.8x verified ROAS.',
      metrics: [
        { label: 'Blended ROAS', value: '4.8x Net ROAS' },
        { label: 'Customer Acquisition Cost', value: '₹550 per order (-38%)' },
        { label: 'Checkout Conversion Rate', value: '4.2% (+162% increase)' },
        { label: 'Monthly Online Revenue', value: '₹54,00,000+ (4.5x scale)' }
      ],
      wins: [
        'Tested 48 visual creative angles, scaling the top 5 winning hooks across Instagram & Google PMax',
        'Implemented 1-step accelerated mobile payment, recovering over ₹14 Lakh in abandoned carts',
        'Maintained consistent 4.5x+ ROAS even as monthly ad spend scaled from ₹4L to ₹11.2L'
      ]
    },
    keyMetricComparison: [
      { metric: 'Blended Return on Ad Spend', before: '1.4x ROAS', after: '4.8x ROAS', improvement: '+242% Net' },
      { metric: 'Cost Per Acquisition (CPA)', before: '₹890', after: '₹550', improvement: '-38% Cheaper' },
      { metric: 'Store Checkout Conversion', before: '1.6%', after: '4.2%', improvement: '+162%' },
      { metric: 'Monthly Revenue', before: '₹12 Lakh', after: '₹54 Lakh', improvement: '4.5x Revenue' }
    ],
    strategyHighlights: [
      'Weekly creative design testing pipeline producing native UGC and comparison videos',
      'Meta Conversions API (CAPI) with full event deduplication and customer data parameter matching',
      'Google Performance Max asset groups targeting high-intent shopping search intent'
    ],
    testimonial: {
      quote: 'We had been burned by three different performance marketing agencies before The Digital Pointers. Their rigor around unit economics, creative testing, and checkout optimization completely transformed our business from struggling break-even to highly profitable scale.',
      author: 'Founder & CEO',
      role: 'Direct-to-Consumer Apparel Brand'
    },
    results: [
      { label: 'Blended ROAS', value: '4.8x Return' },
      { label: 'CAC Reduction', value: '-38% Lower' },
      { label: 'Monthly Revenue', value: '4.5x Scale' }
    ],
    isSample: true
  },
  {
    id: 'cs-dental-network',
    title: 'Dental & Cosmetic Clinic Network: 92 New Patient Bookings/Mo at 5.4x ROI',
    clientType: 'Multi-Location Dental & Aesthetics Practice',
    industry: 'Healthcare & Aesthetics',
    category: 'Local Growth',
    services: ['Google Ads', 'Local SEO', 'PPC Advertising'],
    summary: 'Eliminated wasted spend on broad student queries, implemented negative keyword protection, and deployed high-converting emergency and cosmetic dental landing pages.',
    timeline: '90 Days Program',
    location: 'Hyderabad, India (Madhapur & Jubilee Hills)',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern dental clinic treatment room with high-tech dentistry equipment',
    before: {
      state: 'Client spent ₹95,000/month on broad match Google Ads, with 68% of clicks coming from job seekers, dental students, or free government clinic inquiries.',
      metrics: [
        { label: 'Average Cost Per Click', value: '₹310 / click' },
        { label: 'Monthly Patient Inquiries', value: '18 inquiries' },
        { label: 'Cost Per Booked Patient', value: '₹5,270 per patient' },
        { label: 'Campaign Return on Investment', value: '0.9x (Negative ROI)' }
      ],
      painPoints: [
        'Broad match keywords triggered on queries like "how to clean teeth at home" and "dental assistant jobs"',
        'Landing page was generic and did not mention clinic location or specific doctor credentials',
        'No call tracking was implemented; clinic reception could not identify where callers came from'
      ]
    },
    after: {
      state: 'Precision phrase and exact match campaigns for high-ticket procedures (implants, invisible aligners, veneers), supported by dynamic call tracking and dedicated treatment pages.',
      metrics: [
        { label: 'Average Cost Per Click', value: '₹118 / click (-62%)' },
        { label: 'Monthly Patient Inquiries', value: '142 inquiries' },
        { label: 'Booked New Patients', value: '92 confirmed bookings' },
        { label: 'Campaign Return on Investment', value: '5.4x Verified ROI' }
      ],
      wins: [
        'Added 480+ negative keywords, blocking wasted spend on job searches and informational research',
        'Implemented call tracking phone numbers recording caller source and campaign attribution',
        'Average patient treatment value averaged ₹28,000 across aligner and implant cases'
      ]
    },
    keyMetricComparison: [
      { metric: 'Cost Per Click (CPC)', before: '₹310', after: '₹118', improvement: '-62% Cheaper' },
      { metric: 'New Patient Bookings', before: '18 / mo', after: '92 / mo', improvement: '+411%' },
      { metric: 'Cost Per Booked Patient', before: '₹5,270', after: '₹1,032', improvement: '-80% Lower' },
      { metric: 'Campaign ROI', before: '0.9x', after: '5.4x ROI', improvement: '6x Return' }
    ],
    strategyHighlights: [
      'Split campaigns into distinct emergency dental vs high-ticket cosmetic procedures',
      'Location-radius bid adjustments targeting affluent 5 km radius around clinic branches',
      'Dynamic call tracking forwarding directly to front-desk staff with call recording for quality'
    ],
    testimonial: {
      quote: 'The Digital Pointers eliminated all the junk clicks we used to pay for. Now our calendar is booked weeks in advance with high-value implant and aligner patients who specifically chose our clinic.',
      author: 'Clinical Director & Lead Implantologist',
      role: 'Dental & Aesthetics Center'
    },
    results: [
      { label: 'New Patients', value: '92 / Month' },
      { label: 'Cost Per Patient', value: '-80% Lower' },
      { label: 'Campaign ROI', value: '5.4x Verified' }
    ],
    isSample: true
  }
];

export const getCaseStudyById = (id: string): CaseStudyItem | undefined => {
  return caseStudiesData.find((cs) => cs.id === id);
};

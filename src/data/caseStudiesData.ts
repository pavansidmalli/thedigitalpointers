import { CaseStudyItem } from '../types';

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'cs-1',
    title: 'High-Converting B2B Engineering Web & Search Architecture',
    clientType: 'Industrial Machinery Manufacturer',
    industry: 'Engineering & Manufacturing',
    services: ['Website Design & Development', 'Search Engine Optimization', 'Google Ads'],
    summary: 'A complete redesign replacing a legacy slow website with a high-performance web platform, technical product specifications schema, and high-intent Google Search campaigns for commercial equipment inquiries.',
    results: [
      { label: 'Page Load Speed', value: '1.2s on 4G' },
      { label: 'Organic Search Growth', value: '+142% Impressions' },
      { label: 'Qualified RFQ Forms', value: '3.4x Monthly Inquiries' }
    ],
    isSample: true
  },
  {
    id: 'cs-2',
    title: 'Multi-Location Specialty Healthcare Local Visibility',
    clientType: 'Specialty Orthopedic & Physiotherapy Group',
    industry: 'Healthcare & Wellness',
    services: ['Local SEO', 'Google Business Profile Management'],
    summary: 'Resolution of conflicting NAP directory listings across 3 regional branches, complete Google Business Profile category restructuring, authentic patient review capture workflow, and localized clinic landing pages.',
    results: [
      { label: 'Local 3-Pack Placements', value: '16 Target Keywords' },
      { label: 'Direct Phone Calls', value: '+68% via Google Maps' },
      { label: 'Direction Requests', value: '+54% Branch Footfall' }
    ],
    isSample: true
  },
  {
    id: 'cs-3',
    title: 'High-Intent Paid Acquisition Funnel for Real Estate',
    clientType: 'Boutique Residential Developer',
    industry: 'Real Estate & Property',
    services: ['Meta Ads', 'Google Ads', 'PPC Advertising'],
    summary: 'Architected high-intent lead generation funnels with 3-step qualifying criteria and instant WhatsApp sales team handover, eliminating low-quality unqualified submissions.',
    results: [
      { label: 'Cost Per Qualified Lead', value: '-48% Reduction' },
      { label: 'Verified Site Visits', value: '86 Bookings / 60 Days' },
      { label: 'Lead Response Time', value: '< 5 Minutes via WhatsApp' }
    ],
    isSample: true
  },
  {
    id: 'cs-4',
    title: 'Executive Thought Leadership & Organic Authority',
    clientType: 'Corporate Advisory & Tax Consultancy',
    industry: 'Professional Services',
    services: ['Social Media Marketing', 'Website Design & Development'],
    summary: 'Transformed an inactive corporate presence into a dynamic LinkedIn thought-leadership hub featuring educational carousels, executive commentary on regulatory shifts, and clean downloadable guides.',
    results: [
      { label: 'Qualified Network Reach', value: '+4,200 Decision Makers' },
      { label: 'Inbound Inquiries', value: '19 Corporate Retainers' },
      { label: 'Engagement Rate', value: '4.8% on LinkedIn' }
    ],
    isSample: true
  }
];

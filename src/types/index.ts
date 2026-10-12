export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  category: 'Development' | 'Search' | 'Advertising' | 'Social';
  heroHeadline: string;
  heroSubheadline: string;
  problemsSolved: {
    problem: string;
    impact: string;
    solution: string;
  }[];
  deliverables: {
    title: string;
    description: string;
    details: string[];
  }[];
  benefitsAndOutcomes: {
    metric: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  suitableFor: string[];
  relatedServices: string[];
  caseStudy: {
    title: string;
    industry: string;
    timeline: string;
    challenge: string;
    strategy: string;
    outcome: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  excerpt: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaways?: string[];
    }[];
    conclusion: string;
  };
  tags: string[];
  isCustom?: boolean;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyOrWebsite?: string;
  service: string;
  monthlyBudget?: string;
  projectDetails: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Closed';
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientType: string;
  industry: string;
  services: string[];
  summary: string;
  results: {
    label: string;
    value: string;
  }[];
  isSample: boolean;
}

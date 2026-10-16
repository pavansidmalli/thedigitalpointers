import React from 'react';
import { ArrowRight, Compass, CheckCircle2, Shield, Eye, BarChart2, Zap, Building2, Stethoscope, GraduationCap, ShoppingBag, Briefcase, Store } from 'lucide-react';
import { MarketingDashboardVisual } from '../components/MarketingDashboardVisual';
import { ServiceCard } from '../components/ServiceCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { servicesData } from '../data/servicesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { faqsData } from '../data/faqsData';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const topFaqs = faqsData.slice(0, 5);

  const industries = [
    { name: 'Education & Training', desc: 'Enrollment acquisition for academies, universities, and specialized training programs.', icon: GraduationCap },
    { name: 'Real Estate & Property', desc: 'High-intent buyer funnels for premium residential developers and real estate brokers.', icon: Building2 },
    { name: 'Healthcare & Wellness', desc: 'Local search discovery and booking pipelines for specialized medical clinics.', icon: Stethoscope },
    { name: 'E-commerce & Retail', desc: 'ROAS-driven catalog advertising and technical SEO for direct-to-consumer brands.', icon: ShoppingBag },
    { name: 'Professional Services', desc: 'Inbound RFQ lead funnels for legal chambers, consulting practices, and corporate advisors.', icon: Briefcase },
    { name: 'Local Businesses', desc: 'Google Map Pack dominance and proximity footfall for regional service centers.', icon: Store },
  ];

  const whyChooseUs = [
    {
      title: 'Strategy Before Execution',
      desc: 'We map commercial search intent, customer economics, and market gaps before running a single ad or writing code.',
      icon: Compass
    },
    {
      title: 'Transparent Communication',
      desc: 'No black-box jargon or hidden markups. You own 100% of your advertising accounts and data at all times.',
      icon: Eye
    },
    {
      title: 'Customized Growth Plans',
      desc: 'No cookie-cutter templates. We design custom marketing roadmaps tailored directly to your sales cycle.',
      icon: Zap
    },
    {
      title: 'Performance-Focused Campaigns',
      desc: 'We optimize for verified commercial enquiries, contract quote requests, and phone calls—not vanity impressions.',
      icon: BarChart2
    },
    {
      title: 'Data-Driven Decisions',
      desc: 'Rigorous conversion tracking and server-side APIs ensure every rupee or dollar spent is accountable.',
      icon: Shield
    },
    {
      title: 'Continuous Optimization',
      desc: 'Weekly search query pruning, creative testing cycles, and technical audits to compound your ROI over time.',
      icon: CheckCircle2
    }
  ];

  const approachSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'Understand your business economics, target audience profile, competitive landscape, and primary commercial goals.'
    },
    {
      step: '02',
      title: 'Strategize',
      desc: 'Build a tailored digital marketing roadmap aligning SEO, paid media channels, and conversion architecture.'
    },
    {
      step: '03',
      title: 'Execute',
      desc: 'Implement campaigns, websites, technical SEO improvements, and high-converting editorial content strategies.'
    },
    {
      step: '04',
      title: 'Optimize',
      desc: 'Measure verified enquiries, refine conversion funnels, and continuously eliminate budget waste.'
    }
  ];

  const sampleTestimonials = [
    {
      quote: 'The Digital Pointers restructured our entire digital presence. Our previous agency gave us vanity traffic reports, but The Digital Pointers focused strictly on qualified inbound consultation requests.',
      author: 'Managing Partner',
      role: 'Corporate Legal & Financial Advisory',
      location: 'Hyderabad, India'
    },
    {
      quote: 'Their attention to technical SEO and Google Maps accuracy made an immediate impact on our multi-branch clinics. Phone calls from nearby patients increased within the first 60 days.',
      author: 'Operations Director',
      role: 'Specialty Healthcare Network',
      location: 'Mumbai, India'
    },
    {
      quote: 'The website they built loads instantly on mobile and our Google Ads Cost-Per-Acquisition dropped dramatically. Clean execution with zero fluff or unrealistic promises.',
      author: 'Founder & CEO',
      role: 'B2B Industrial Machinery Distributor',
      location: 'Dubai & International'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* SECTION 1: HERO */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Trust label */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase">
              <span>STRATEGY</span>
              <span aria-hidden="true">·</span>
              <span>CREATIVITY</span>
              <span aria-hidden="true">·</span>
              <span>PERFORMANCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-[1.08] text-balance">
              Turn Digital Attention Into Real Business Growth.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#707070] dark:text-[#A1A1AA] leading-relaxed max-w-xl">
              The Digital Pointers helps businesses grow online through strategic SEO, high-performing websites, social media marketing, and data-driven advertising.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('/contact/')}
                className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all duration-150 shadow-sm hover:shadow active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/services/')}
                className="px-6 py-3.5 rounded-lg text-sm font-semibold text-[#111111] dark:text-white bg-[#F7F7F5] dark:bg-[#1A1A1E] hover:bg-[#E8E8E8] dark:hover:bg-[#25252B] transition-colors flex items-center justify-center border border-[#E8E8E8] dark:border-[#2C2C32]"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Bottom Proof Strip */}
            <div className="pt-6 border-t border-[#E8E8E8] dark:border-[#222226] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xs text-[#707070] dark:text-[#A1A1AA] font-mono">Approach</div>
                <div className="text-sm font-bold text-[#111111] dark:text-white mt-0.5">Strategy First</div>
              </div>
              <div>
                <div className="text-xs text-[#707070] dark:text-[#A1A1AA] font-mono">Ad Accounts</div>
                <div className="text-sm font-bold text-[#111111] dark:text-white mt-0.5">100% Client-Owned</div>
              </div>
              <div>
                <div className="text-xs text-[#707070] dark:text-[#A1A1AA] font-mono">Standards</div>
                <div className="text-sm font-bold text-[#111111] dark:text-white mt-0.5">Google Guideline Compliant</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-density interactive marketing analytics mockup */}
          <div className="lg:col-span-6 w-full">
            <MarketingDashboardVisual />
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase mb-2">
            Integrated Services
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Everything You Need to Grow Online.
          </h2>
          <p className="text-base text-[#707070] dark:text-[#A1A1AA] mt-3 leading-relaxed">
            A connected set of digital marketing services designed to improve your visibility, attract the right audience, and generate meaningful enquiries.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              onSelect={onNavigate}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE DIGITAL POINTER */}
      <section className="bg-[#F7F7F5] dark:bg-[#0F0F12] py-20 border-y border-[#E8E8E8] dark:border-[#222226]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase mb-2">
              Agency Principles
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight">
              Digital Marketing With a Clear Direction.
            </h2>
            <p className="text-base text-[#707070] dark:text-[#A1A1AA] mt-3 leading-relaxed">
              We remove the guesswork, bloated retainers, and vague vanity metrics that plague digital agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#141417] rounded-xl border border-[#E8E8E8] dark:border-[#26262B] p-7 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F7F7F5] dark:bg-[#1E1E23] border border-[#E8E8E8] dark:border-[#2C2C32] flex items-center justify-center text-[#111111] dark:text-white">
                      <Icon className="w-5 h-5 text-[#F06432]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#111111] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR APPROACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase mb-2">
            Execution Framework
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            A Proven 4-Step Working Methodology.
          </h2>
          <p className="text-base text-[#707070] dark:text-[#A1A1AA] mt-3 leading-relaxed">
            Our disciplined roadmap ensures your marketing initiatives stay aligned with measurable commercial returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white dark:bg-[#141417] rounded-xl border border-[#E8E8E8] dark:border-[#26262B] p-7 space-y-4 relative"
            >
              <div className="text-3xl font-extrabold font-mono text-[#F06432]">
                {step.step}
              </div>
              <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FEATURED WORK / PORTFOLIO WITH BEFORE & AFTER RESULTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CaseStudiesSection onNavigate={onNavigate} />
      </section>

      {/* SECTION 6: INDUSTRIES WE SERVE */}
      <section className="bg-[#F7F7F5] dark:bg-[#0F0F12] py-20 border-y border-[#E8E8E8] dark:border-[#222226]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase mb-2">
              Domain Expertise
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight">
              Industries We Serve.
            </h2>
            <p className="text-base text-[#707070] dark:text-[#A1A1AA] mt-3 leading-relaxed">
              We understand the commercial nuances, customer lifecycles, and compliance requirements across key industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white dark:bg-[#141417] rounded-xl border border-[#E8E8E8] dark:border-[#26262B] space-y-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F7F7F5] dark:bg-[#1E1E23] flex items-center justify-center text-[#F06432]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#111111] dark:text-white">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase mb-2">
            Client Perspectives
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Trusted by Growing Businesses.
          </h2>
          <p className="text-base text-[#707070] dark:text-[#A1A1AA] mt-3 leading-relaxed">
            Authentic experiences from founders and leaders who rely on our strategic direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTestimonials.map((t, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] flex flex-col justify-between space-y-6"
            >
              <p className="text-sm text-[#111111] dark:text-[#E4E4E7] leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="pt-4 border-t border-[#E8E8E8] dark:border-[#26262B]">
                <div className="font-heading font-bold text-sm text-[#111111] dark:text-white">
                  {t.author}
                </div>
                <div className="text-xs text-[#707070] dark:text-[#A1A1AA] mt-0.5">
                  {t.role}
                </div>
                <div className="text-[11px] font-mono text-[#F06432] mt-1">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase mb-2">
            Clear Answers
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-[#707070] dark:text-[#A1A1AA] mt-2">
            Transparent answers regarding our methods, contracts, and expectations.
          </p>
        </div>

        <FAQAccordion items={topFaqs} defaultOpenIndex={0} />

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('/faqs/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] dark:text-white hover:text-[#F06432] dark:hover:text-[#F06432] transition-colors"
          >
            <span>View All Agency FAQs</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F06432]" />
          </button>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] dark:bg-[#16161A] text-white rounded-3xl p-10 sm:p-16 text-center space-y-6 relative overflow-hidden border dark:border-[#26262B]">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase">
              Start The Conversation
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Move Your Business Forward?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Let’s create a digital strategy that aligns with your goals. No generic sales pitches—just practical recommendations.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact/')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/contact/')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-neutral-800 dark:bg-[#25252B] hover:bg-neutral-700 dark:hover:bg-[#32323A] transition-colors border border-neutral-700 dark:border-[#383842]"
            >
              <span>Contact Our Team</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

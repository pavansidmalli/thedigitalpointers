import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServiceCard } from '../components/ServiceCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Layers, Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Development', 'Search', 'Advertising', 'Social'];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === selectedCategory);

  const serviceCombinations = [
    {
      title: 'The Local Footfall Engine',
      goal: 'Dominate neighborhood searches & drive physical branch bookings',
      mix: ['Local SEO', 'Google Business Profile Management', 'Website Design & Development'],
      summary: 'Ideal for healthcare clinics, dental networks, real estate consultancies, and retail showrooms needing high-intent calls and map directions.'
    },
    {
      title: 'The B2B Inbound Pipeline',
      goal: 'Attract qualified enterprise RFQs & contract consultations',
      mix: ['Search Engine Optimization', 'Website Design & Development', 'Google Ads Management'],
      summary: 'Engineered for technology providers, manufacturers, legal practices, and corporate advisors who need sustainable commercial discovery.'
    },
    {
      title: 'The Rapid Scale Funnel',
      goal: 'Immediate lead generation with verifiable Cost-Per-Acquisition',
      mix: ['Google Ads Management', 'Meta Ads Management', 'PPC Advertising'],
      summary: 'Designed for consumer services, training academies, and real estate developers looking to scale weekly lead volume under strict budget caps.'
    }
  ];

  const hiringAgencyFaqs = [
    {
      id: 'hiring-1',
      category: 'Agency Selection',
      question: 'Should our business hire a full-service agency or separate niche freelancers?',
      answer: 'Separate freelancers often pull in conflicting directions—your web designer builds heavy pages that hurt your SEO, while your paid ads specialist points traffic to pages without conversion tracking. An integrated agency ensures that your web engineering, search architecture, and paid campaigns operate as a synchronized growth engine.'
    },
    {
      id: 'hiring-2',
      category: 'Agency Selection',
      question: 'How do you measure whether a marketing campaign is successful?',
      answer: 'We measure success through verified commercial outcomes: qualified form enquiries, direct phone calls, site visit appointments, and target Cost-Per-Acquisition (CPA). We reject vanity metrics like impressions and clicks if they fail to produce business revenue.'
    },
    {
      id: 'hiring-3',
      category: 'Agency Selection',
      question: 'Can we start with a single service and expand as results validate the investment?',
      answer: 'Yes. Many clients begin with a website redesign or focused Google Ads campaign. Once performance benchmarks are reached, we layer in long-term organic SEO or social authority content.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-20 pb-20">
      <Breadcrumbs crumbs={[{ label: 'Services' }]} onNavigate={onNavigate} />

      {/* Hero */}
      <section className="space-y-6 max-w-4xl">
        <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase">
          Capabilities Directory
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-[1.1] text-balance">
          Strategic Digital Services Engineered for Commercial Impact.
        </h1>
        <p className="text-lg sm:text-xl text-[#707070] dark:text-[#A1A1AA] leading-relaxed max-w-3xl">
          We provide eight interconnected services designed to solve visibility bottlenecks, lower customer acquisition costs, and build durable digital assets for your brand.
        </p>
      </section>

      {/* Category Filter Controls */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E8E8E8] dark:border-[#222226] pb-4">
          <span className="text-xs font-mono text-[#707070] dark:text-[#A1A1AA] mr-2">Discipline:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                  : 'bg-[#F7F7F5] dark:bg-[#1A1A1E] text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              onSelect={onNavigate}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Strategic Combinations for Business Goals */}
      <section className="bg-[#F7F7F5] dark:bg-[#0F0F12] p-8 sm:p-12 rounded-3xl border border-[#E8E8E8] dark:border-[#222226] space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider mb-2">
            Integrated Frameworks
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#111111] dark:text-white">
            Recommended Growth Combinations.
          </h2>
          <p className="text-sm text-[#707070] dark:text-[#A1A1AA] mt-2">
            Services deliver compound value when deployed together. Here is how we configure multi-channel architectures for specific business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCombinations.map((combo, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#141417] p-7 rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#F06432] font-semibold">
                  0{idx + 1} · Blueprint
                </span>
                <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white">
                  {combo.title}
                </h3>
                <p className="text-xs font-mono text-[#707070] dark:text-[#A1A1AA]">
                  {combo.goal}
                </p>
                <div className="space-y-1.5 pt-2 border-t border-[#E8E8E8] dark:border-[#26262B]">
                  {combo.mix.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#111111] dark:text-[#E4E4E7]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#707070] dark:text-[#A1A1AA] pt-2 leading-relaxed">
                  {combo.summary}
                </p>
              </div>

              <button
                onClick={() => onNavigate('/contact/')}
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-[#111111] dark:text-white bg-[#F7F7F5] dark:bg-[#1A1A1E] hover:bg-[#E8E8E8] dark:hover:bg-[#25252B] transition-colors flex items-center justify-center gap-1.5 mt-4 border border-transparent dark:border-[#2C2C32]"
              >
                <span>Request Blueprint Proposal</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F06432]" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Agency Hiring FAQs */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider mb-2">
            Hiring Guidance
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#111111] dark:text-white">
            Common Questions About Engaging an Agency.
          </h2>
        </div>

        <FAQAccordion items={hiringAgencyFaqs} defaultOpenIndex={0} />
      </section>

      {/* Final Consultation CTA */}
      <section className="bg-[#111111] dark:bg-[#16161A] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 border dark:border-[#26262B]">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
          Unsure Which Services Align With Your Goals?
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
          Schedule a discovery consultation with our strategy leads. We will review your website, analyze your competitors, and recommend the exact channels worth prioritizing.
        </p>
        <button
          onClick={() => onNavigate('/contact/')}
          className="px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all inline-flex items-center gap-2"
        >
          <span>Schedule Free Strategy Review</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};

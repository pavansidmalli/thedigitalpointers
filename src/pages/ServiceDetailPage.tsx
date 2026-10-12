import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { ContactForm } from '../components/ContactForm';
import { getServiceBySlug, servicesData } from '../data/servicesData';
import { ArrowRight, CheckCircle2, AlertCircle, ArrowLeft, Layers, ShieldCheck, Zap } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenPrivacy?: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenPrivacy
}) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="font-heading text-3xl font-bold text-[#111111] dark:text-white">Service Not Found</h1>
        <p className="text-[#707070] dark:text-[#A1A1AA]">The requested service discipline could not be located.</p>
        <button
          onClick={() => onNavigate('/services/')}
          className="px-6 py-2.5 rounded-lg bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-sm font-semibold"
        >
          Return to Services Overview
        </button>
      </div>
    );
  }

  // Get related service objects
  const relatedServices = servicesData.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-20 pb-20">
      {/* Breadcrumbs */}
      <Breadcrumbs
        crumbs={[
          { label: 'Services', path: '/services/' },
          { label: service.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* 1. Hero Section */}
      <section className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase">
          <span>{service.category}</span>
          <span aria-hidden="true">·</span>
          <span>{service.tagline}</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-[1.08] text-balance">
          {service.heroHeadline}
        </h1>

        <p className="text-lg sm:text-xl text-[#707070] dark:text-[#A1A1AA] leading-relaxed max-w-3xl">
          {service.heroSubheadline}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href="#enquiry-form"
            className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all inline-flex items-center gap-2 shadow-sm"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => onNavigate('/services/')}
            className="px-6 py-3.5 rounded-lg text-sm font-semibold text-[#111111] dark:text-white bg-[#F7F7F5] dark:bg-[#1A1A1E] hover:bg-[#E8E8E8] dark:hover:bg-[#25252B] transition-colors border border-[#E8E8E8] dark:border-[#2C2C32]"
          >
            <span>Browse All 8 Services</span>
          </button>
        </div>
      </section>

      {/* 2. Business Problems We Solve */}
      <section className="space-y-8 pt-8 border-t border-[#E8E8E8] dark:border-[#222226]">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider mb-2">
            Challenges Solved
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#111111] dark:text-white">
            Common Obstacles Holding Back Your Growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.problemsSolved.map((prob, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-red-600 dark:text-red-400 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>The Problem: {prob.problem}</span>
              </div>
              <p className="text-xs text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                <span className="font-semibold text-[#111111] dark:text-white">Commercial Impact:</span> {prob.impact}
              </p>
              <div className="pt-2 border-t border-[#E8E8E8] dark:border-[#26262B] text-xs text-[#111111] dark:text-white leading-relaxed">
                <span className="font-semibold text-[#F06432]">Our Solution:</span> {prob.solution}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Detailed Service Deliverables */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider mb-2">
            Scope & Deliverables
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#111111] dark:text-white">
            What We Deliver in This Engagement.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.deliverables.map((del, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-lg text-[#111111] dark:text-white">
                  {del.title}
                </h3>
                <span className="text-xs font-mono text-[#F06432] font-semibold">
                  0{idx + 1}
                </span>
              </div>
              <p className="text-sm text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                {del.description}
              </p>
              <ul className="space-y-1.5 pt-3 border-t border-[#E8E8E8] dark:border-[#26262B] text-xs text-[#111111] dark:text-[#E4E4E7]">
                {del.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Benefits & Expected Outcomes */}
      <section className="bg-[#111111] dark:bg-[#16161A] text-white p-8 sm:p-12 rounded-3xl space-y-8 border dark:border-[#26262B]">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider mb-2">
            Standards & Benchmarks
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white">
            Performance Benchmarks You Can Rely On.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {service.benefitsAndOutcomes.map((b, i) => (
            <div key={i} className="space-y-2 p-4 rounded-xl bg-neutral-900 dark:bg-[#1E1E24] border border-neutral-800 dark:border-[#2C2C34]">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F06432]">
                {b.metric}
              </div>
              <div className="text-xs text-neutral-300 leading-snug">
                {b.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Working Process */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider mb-2">
            Execution Blueprint
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#111111] dark:text-white">
            Our 4-Step Delivery Process.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-3"
            >
              <div className="text-2xl font-mono font-bold text-[#F06432]">
                {step.step}
              </div>
              <h3 className="font-heading font-bold text-base text-[#111111] dark:text-white">
                {step.title}
              </h3>
              <p className="text-xs text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Suitable Business Types & Representative Case Study */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 p-8 rounded-2xl bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-4">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider">
            Who This Is For
          </div>
          <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white">
            Ideal Business Profiles
          </h3>
          <ul className="space-y-2.5 text-xs text-[#111111] dark:text-[#E4E4E7] pt-2">
            {service.suitableFor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-[#707070] dark:text-[#A1A1AA] uppercase tracking-wider">
              Sample Case Study Architecture
            </span>
            <span className="text-[11px] font-mono text-[#F06432]">
              {service.caseStudy.timeline}
            </span>
          </div>

          <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white">
            {service.caseStudy.title}
          </h3>

          <div className="space-y-2 text-xs text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
            <p>
              <strong className="text-[#111111] dark:text-white">The Challenge:</strong> {service.caseStudy.challenge}
            </p>
            <p>
              <strong className="text-[#111111] dark:text-white">Our Strategy:</strong> {service.caseStudy.strategy}
            </p>
            <p className="p-3 bg-[#F7F7F5] dark:bg-[#19191D] rounded-lg border border-[#E8E8E8] dark:border-[#26262B] text-[#111111] dark:text-white font-medium">
              <strong className="text-[#F06432]">Commercial Result:</strong> {service.caseStudy.outcome}
            </p>
          </div>
        </div>
      </section>

      {/* 7. Service Specific FAQs */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider mb-2">
            Service FAQ
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#111111] dark:text-white">
            Questions About {service.title}.
          </h2>
        </div>

        <FAQAccordion
          items={service.faqs.map((f, i) => ({
            id: `faq-${service.slug}-${i}`,
            category: service.title,
            question: f.question,
            answer: f.answer
          }))}
          defaultOpenIndex={0}
        />
      </section>

      {/* 8. Related Services */}
      {relatedServices.length > 0 && (
        <section className="space-y-6 pt-8 border-t border-[#E8E8E8] dark:border-[#222226]">
          <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white">
            Complementary Growth Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigate(`/services/${rel.slug}/`)}
                className="p-6 rounded-xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] hover:border-[#111111] dark:hover:border-[#F06432] transition-colors cursor-pointer group"
              >
                <span className="text-xs font-mono text-[#F06432]">{rel.category}</span>
                <h4 className="font-heading font-bold text-base text-[#111111] dark:text-white group-hover:text-[#F06432] transition-colors mt-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#707070] dark:text-[#A1A1AA] mt-2 line-clamp-2">
                  {rel.shortDescription}
                </p>
                <div className="pt-4 mt-4 border-t border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between text-xs font-semibold text-[#111111] dark:text-white">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F06432]" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. Dedicated Lead Form for this Service */}
      <section id="enquiry-form" className="scroll-mt-24 space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#111111] dark:text-white">
            Ready to Implement {service.title}?
          </h2>
          <p className="text-sm text-[#707070] dark:text-[#A1A1AA] mt-1">
            Fill in your project details below to receive a customized scope, timeline, and pricing proposal.
          </p>
        </div>

        <ContactForm initialService={service.title} onOpenPrivacy={onOpenPrivacy} />
      </section>
    </div>
  );
};

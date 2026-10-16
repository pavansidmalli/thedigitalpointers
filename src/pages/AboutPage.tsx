import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArrowRight, Compass, Target, Shield, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Clarity Over Complexity',
      desc: 'Digital marketing does not need impenetrable jargon. We communicate what we are doing, why we are doing it, and what the commercial outcome means.',
      icon: Compass
    },
    {
      title: 'Performance Accountability',
      desc: 'We orient our campaigns toward verified enquiries, phone bookings, and revenue-producing metrics rather than superficial vanity impressions.',
      icon: Target
    },
    {
      title: 'Complete Ownership',
      desc: 'You maintain direct administrative access to all your advertising accounts, websites, tracking scripts, and historical campaign data.',
      icon: Shield
    },
    {
      title: 'Ethical Guidelines Compliance',
      desc: 'We follow Google, Meta, and platform guidelines strictly. No black-hat hacks, spammy link schemes, or misleading claims that jeopardize your domain.',
      icon: HeartHandshake
    }
  ];

  const teamRoles = [
    {
      role: 'Strategy & Performance Direction',
      focus: 'Multi-channel marketing economics, client growth roadmaps, and budget allocation modeling.'
    },
    {
      role: 'Organic Search & Technical SEO',
      focus: 'Search intent indexing, structured schema architecture, crawl efficiency, and local pack ranking.'
    },
    {
      role: 'Frontend Engineering & CRO',
      focus: 'High-performing responsive web development, sub-second load times, and conversion funnel UX.'
    },
    {
      role: 'Paid Media & Creative Direction',
      focus: 'High-converting ad copywriting, multi-variant testing, and server-side conversion tracking.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-20 pb-20">
      <Breadcrumbs crumbs={[{ label: 'About Us' }]} onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="space-y-6 max-w-4xl">
        <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase">
          About The Digital Pointers
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-[1.1] text-balance">
          We Help Businesses Find Their Direction in Digital.
        </h1>
        <p className="text-lg sm:text-xl text-[#707070] dark:text-[#A1A1AA] leading-relaxed max-w-3xl">
          The Digital Pointers was founded to solve a common dilemma: businesses spend substantial capital on digital agencies but receive little strategic clarity and fewer verified commercial enquiries. We bridge that gap with rigorous strategy, clean engineering, and honest communication.
        </p>
      </section>

      {/* Our Story & Approach */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-[#E8E8E8] dark:border-[#222226]">
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono font-semibold text-[#707070] dark:text-[#A1A1AA] uppercase tracking-wider">
            Our Story & Origin
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-white">
            A Clear Pointer in an Overcrowded Market.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
          <p>
            The digital marketing landscape has become increasingly noisy. Too many businesses are sold one-size-fits-all retainer packages, fragile website templates, and automated ad campaigns that burn daily budgets without delivering tangible enquiries.
          </p>
          <p>
            We named our agency <strong className="text-[#111111] dark:text-white font-semibold">The Digital Pointers</strong> because our central objective is clear: pointing our clients toward what genuinely moves the needle. Whether that means re-architecting your website for speed, dominating the Google Local Pack in your city, or restructuring paid ads to reduce your cost per lead, every action is guided by purpose.
          </p>
          <p>
            We operate without pretense. We do not invent inflated claims, fabricate client case studies, or lock clients into opaque long-term contracts. We partner with businesses across India and around the globe who value craft, precision, and reliable execution.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F06432]">
            Our Mission
          </div>
          <h3 className="font-heading text-2xl font-bold text-[#111111] dark:text-white">
            To Build Sustainable Digital Assets That Attract High-Intent Buyers.
          </h3>
          <p className="text-sm text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
            Our mission is to empower growth-oriented businesses with websites and campaigns that perform reliably, turning digital interest into genuine sales conversations and compounding long-term value.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F06432]">
            Our Vision
          </div>
          <h3 className="font-heading text-2xl font-bold text-[#111111] dark:text-white">
            To Set The Benchmark for Integrity & Performance in Modern Digital Marketing.
          </h3>
          <p className="text-sm text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
            Our vision is to be the trusted strategic partner for Indian enterprises and international businesses who want transparent, data-driven marketing without empty agency promises.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-10">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider mb-2">
            Guiding Philosophy
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#111111] dark:text-white">
            The Values That Govern Every Client Engagement.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 rounded-xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#F7F7F5] dark:bg-[#1E1E23] flex items-center justify-center text-[#F06432]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-base font-bold text-[#111111] dark:text-white">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team / Discipline Overview */}
      <section className="space-y-8 pt-8 border-t border-[#E8E8E8] dark:border-[#222226]">
        <div className="max-w-2xl">
          <div className="text-xs font-mono font-semibold text-[#707070] dark:text-[#A1A1AA] uppercase tracking-wider mb-2">
            Our Collective Disciplines
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#111111] dark:text-white">
            Multi-Disciplinary Specialists, Single Point of Contact.
          </h2>
          <p className="text-sm text-[#707070] dark:text-[#A1A1AA] mt-2">
            Rather than bloated administrative hierarchies, you collaborate directly with domain practitioners who execute your work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1E1E24] border border-[#E8E8E8] dark:border-[#2C2C32] flex items-center justify-center font-mono font-bold text-xs text-[#F06432]">
                DP · {idx + 1}
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#111111] dark:text-white">
                  {role.role}
                </h3>
                <p className="text-xs text-[#707070] dark:text-[#A1A1AA] mt-2 leading-relaxed">
                  {role.focus}
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#707070] dark:text-[#A1A1AA] pt-2 border-t border-[#E8E8E8] dark:border-[#26262B]">
                Practitioner Focus
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#111111] dark:bg-[#16161A] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 border dark:border-[#26262B]">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
          Let’s Discuss Your Business Direction.
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
          Share your current marketing challenges with our senior strategists. We will provide honest, actionable feedback without sales pressure.
        </p>
        <button
          onClick={() => onNavigate('/contact/')}
          className="px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all inline-flex items-center gap-2"
        >
          <span>Book a Free Strategy Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};

import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (path: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16 pb-20">
      <Breadcrumbs crumbs={[{ label: 'Case Studies & Results' }]} onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Proven Client Results</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-[1.08] text-balance">
          Marketing Case Studies with Documented Before & After Impact.
        </h1>
        <p className="text-lg sm:text-xl text-[#707070] dark:text-[#A1A1AA] leading-relaxed max-w-3xl">
          We reject vanity impressions. Discover how The Digital Pointers transforms commercial discovery, lowers customer acquisition costs, and scales verified revenue for B2B enterprises, healthcare clinics, and D2C brands.
        </p>

        {/* Aggregate Track Record Strip */}
        <div className="pt-6 border-t border-[#E8E8E8] dark:border-[#222226] grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3.5 bg-[#F7F7F5] dark:bg-[#151518] rounded-xl border border-[#E8E8E8] dark:border-[#24242A]">
            <div className="text-[11px] font-mono text-[#707070] dark:text-[#A1A1AA]">Average Pipeline</div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#111111] dark:text-white mt-1">
              3.4x Growth
            </div>
          </div>
          <div className="p-3.5 bg-[#F7F7F5] dark:bg-[#151518] rounded-xl border border-[#E8E8E8] dark:border-[#24242A]">
            <div className="text-[11px] font-mono text-[#707070] dark:text-[#A1A1AA]">CAC Reduction</div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
              -48% Average
            </div>
          </div>
          <div className="p-3.5 bg-[#F7F7F5] dark:bg-[#151518] rounded-xl border border-[#E8E8E8] dark:border-[#24242A]">
            <div className="text-[11px] font-mono text-[#707070] dark:text-[#A1A1AA]">Map 3-Pack Rank</div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#F06432] mt-1">
              #1 Positions
            </div>
          </div>
          <div className="p-3.5 bg-[#F7F7F5] dark:bg-[#151518] rounded-xl border border-[#E8E8E8] dark:border-[#24242A]">
            <div className="text-[11px] font-mono text-[#707070] dark:text-[#A1A1AA]">Account Ownership</div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#111111] dark:text-white mt-1">
              100% Client
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Case Studies Component */}
      <section>
        <CaseStudiesSection onNavigate={onNavigate} isStandalonePage={true} />
      </section>

      {/* Bottom Conversion CTA Strip */}
      <section className="bg-gradient-to-br from-[#111111] to-[#1C1C22] text-white p-8 sm:p-12 rounded-3xl border border-neutral-800 space-y-6">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-mono font-semibold text-[#F06432] uppercase tracking-wider">
            Ready For Your Own Turnaround?
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Let's Engineer a Tailored Growth Blueprint for Your Brand.
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Schedule a free consultation with our senior growth strategists in Hyderabad. We will audit your current website, search rankings, and ad spend to reveal untapped revenue levers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('/contact/')}
            className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all shadow-md flex items-center gap-2"
          >
            <span>Book a Free Strategy Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/919705866749?text=Hello%20The%20Digital%20Pointers%2C%20I%20reviewed%20your%20case%20studies%20and%20would%20like%20to%20discuss%20our%20campaign."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md flex items-center gap-2"
          >
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};

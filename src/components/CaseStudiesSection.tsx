import React, { useState } from 'react';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudyItem } from '../types';
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Sparkles,
  ArrowUpRight,
  SplitSquareVertical,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onNavigate: (path: string) => void;
  isStandalonePage?: boolean;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onNavigate,
  isStandalonePage = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [activeTabPerCard, setActiveTabPerCard] = useState<Record<string, 'compare' | 'before' | 'after'>>({});

  const categories = [
    'All',
    'SEO & Organic',
    'Paid Ads & Performance',
    'Web & Conversion',
    'Local Growth'
  ];

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((cs) => cs.category === selectedCategory);

  const toggleTab = (cardId: string, tab: 'compare' | 'before' | 'after') => {
    setActiveTabPerCard((prev) => ({
      ...prev,
      [cardId]: tab
    }));
  };

  const getActiveTab = (cardId: string) => {
    return activeTabPerCard[cardId] || 'compare';
  };

  return (
    <div className="space-y-12">
      {/* Section Header */}
      {!isStandalonePage && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E8E8] dark:border-[#222226] pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Impact & Case Studies</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] dark:text-white tracking-tight">
              Before & After Campaign Results.
            </h2>
            <p className="text-base text-[#707070] dark:text-[#A1A1AA] mt-3 leading-relaxed">
              Real data from live client transformations across SEO, performance advertising, local map pack rankings, and responsive web development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => onNavigate('/case-studies/')}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2.5 rounded-lg border border-[#E8E8E8] dark:border-[#28282E] bg-white dark:bg-[#141417] text-[#111111] dark:text-white hover:border-[#F06432] transition-colors"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F06432]" />
            </button>
          </div>
        </div>
      )}

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-[#707070] dark:text-[#A1A1AA] mr-2">
          Filter by Outcome:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                : 'bg-[#F7F7F5] dark:bg-[#1A1A1E] text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredCaseStudies.map((study) => {
          const currentTab = getActiveTab(study.id);
          const isExpanded = expandedCardId === study.id;

          return (
            <article
              key={study.id}
              className="group bg-white dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] p-6 sm:p-7 flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-6">
                {/* Visual Image Header */}
                {study.image && (
                  <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-[#E8E8E8] dark:border-[#28282E] bg-[#111111]">
                    <img
                      src={study.image}
                      alt={study.imageAlt || study.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#F06432] text-white shadow-xs">
                        {study.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-black/75 text-neutral-200 backdrop-blur-xs border border-white/10 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#F06432]" />
                        <span>{study.timeline}</span>
                      </span>
                    </div>

                    {/* Bottom Metadata on Image */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[11px] font-mono text-neutral-300 flex items-center gap-1 mb-0.5">
                        <MapPin className="w-3 h-3 text-[#F06432]" />
                        <span>{study.location}</span>
                      </div>
                      <div className="text-xs font-semibold text-white truncate">
                        {study.clientType}
                      </div>
                    </div>
                  </div>
                )}

                {/* Title & Core Summary */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#707070] dark:text-[#A1A1AA] mb-2">
                    <span>{study.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#F06432] font-semibold">{study.timeline}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-sm text-[#707070] dark:text-[#A1A1AA] mt-2.5 leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                {/* Interactive Before vs After Switcher */}
                <div className="p-1 bg-[#F7F7F5] dark:bg-[#1A1A1E] rounded-xl flex items-center border border-[#E8E8E8] dark:border-[#28282E]">
                  <button
                    onClick={() => toggleTab(study.id, 'compare')}
                    className={`flex-1 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                      currentTab === 'compare'
                        ? 'bg-white dark:bg-[#26262D] text-[#111111] dark:text-white shadow-xs'
                        : 'text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
                    }`}
                  >
                    Side-by-Side Impact
                  </button>
                  <button
                    onClick={() => toggleTab(study.id, 'before')}
                    className={`flex-1 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                      currentTab === 'before'
                        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                        : 'text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
                    }`}
                  >
                    Before Campaign
                  </button>
                  <button
                    onClick={() => toggleTab(study.id, 'after')}
                    className={`flex-1 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                      currentTab === 'after'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        : 'text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
                    }`}
                  >
                    After Campaign
                  </button>
                </div>

                {/* Content View Based on Active Tab */}
                {currentTab === 'compare' && (
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#707070] dark:text-[#A1A1AA] flex items-center justify-between">
                      <span>Key Metric Delta</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified Improvements</span>
                    </div>

                    <div className="divide-y divide-[#E8E8E8] dark:divide-[#28282E] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] overflow-hidden bg-[#F7F7F5]/50 dark:bg-[#19191D]/50">
                      {study.keyMetricComparison.map((comp, idx) => (
                        <div key={idx} className="p-3 text-xs flex items-center justify-between gap-3">
                          <div className="font-medium text-[#111111] dark:text-white">
                            {comp.metric}
                          </div>
                          <div className="flex items-center gap-3 shrink-0 font-mono">
                            <span className="text-[#707070] dark:text-[#A1A1AA] line-through text-[11px]">
                              {comp.before}
                            </span>
                            <span className="text-neutral-400">➔</span>
                            <span className="font-bold text-[#111111] dark:text-white">
                              {comp.after}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              {comp.improvement}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentTab === 'before' && (
                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4" />
                      <span>Before Optimization: Baseline Struggles</span>
                    </div>
                    <p className="text-xs text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                      {study.before.state}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {study.before.metrics.map((m, idx) => (
                        <div key={idx} className="p-2 bg-white dark:bg-[#1C1C22] rounded-lg border border-rose-500/20">
                          <div className="text-[10px] font-mono text-[#707070] dark:text-[#A1A1AA]">{m.label}</div>
                          <div className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1 pt-2 border-t border-rose-500/15">
                      <div className="text-[10px] font-mono text-[#707070] dark:text-[#A1A1AA] uppercase">Core Pain Points:</div>
                      {study.before.painPoints.map((pain, pIdx) => (
                        <div key={pIdx} className="text-xs text-[#707070] dark:text-[#A1A1AA] flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{pain}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentTab === 'after' && (
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>After Campaign: Scaled Performance</span>
                    </div>
                    <p className="text-xs text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                      {study.after.state}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {study.after.metrics.map((m, idx) => (
                        <div key={idx} className="p-2 bg-white dark:bg-[#1C1C22] rounded-lg border border-emerald-500/20">
                          <div className="text-[10px] font-mono text-[#707070] dark:text-[#A1A1AA]">{m.label}</div>
                          <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1 pt-2 border-t border-emerald-500/15">
                      <div className="text-[10px] font-mono text-[#707070] dark:text-[#A1A1AA] uppercase">Verified Outcomes:</div>
                      {study.after.wins.map((win, wIdx) => (
                        <div key={wIdx} className="text-xs text-[#111111] dark:text-white flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{win}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Strategy Highlights & Client Testimonial (Collapsible) */}
                {isExpanded && (
                  <div className="space-y-4 pt-4 border-t border-[#E8E8E8] dark:border-[#28282E] text-xs">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-[#F06432] font-semibold mb-1.5">
                        Execution Blueprint
                      </div>
                      <div className="space-y-1.5 text-[#707070] dark:text-[#A1A1AA]">
                        {study.strategyHighlights.map((strat, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2">
                            <span className="text-[#F06432] font-bold">▪</span>
                            <span>{strat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {study.testimonial && (
                      <div className="p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-[#1E1E24] border border-[#E8E8E8] dark:border-[#28282E]">
                        <p className="italic text-[#111111] dark:text-neutral-200">
                          "{study.testimonial.quote}"
                        </p>
                        <div className="mt-2 text-[11px] font-mono text-[#707070] dark:text-[#A1A1AA]">
                          — <span className="font-semibold text-[#111111] dark:text-white">{study.testimonial.author}</span>, {study.testimonial.role}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Service Tag Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {study.services.map((srv, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#F7F7F5] dark:bg-[#1E1E24] text-[#707070] dark:text-[#A1A1AA] border border-[#E8E8E8] dark:border-[#2C2C32]"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 mt-5 border-t border-[#E8E8E8] dark:border-[#28282E] flex items-center justify-between text-xs">
                <button
                  onClick={() => setExpandedCardId(isExpanded ? null : study.id)}
                  className="inline-flex items-center gap-1 font-mono text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white transition-colors"
                >
                  <span>{isExpanded ? 'Less Details' : 'Full Strategy Details'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => onNavigate('/contact/')}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#F06432] hover:text-[#d95526] transition-colors"
                >
                  <span>Inquire Similar Results</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { TrendingUp, Target, Search, BarChart3, ArrowUpRight, CheckCircle2, Globe2, Shield } from 'lucide-react';

export const MarketingDashboardVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'seo' | 'ads' | 'cro'>('seo');

  return (
    <div className="w-full bg-white dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all">
      {/* Header Bar of the Mockup */}
      <div className="bg-[#F7F7F5] dark:bg-[#18181C] px-3.5 sm:px-5 py-3 border-b border-[#E8E8E8] dark:border-[#26262B] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#E8E8E8] dark:bg-[#2C2C32]" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#E8E8E8] dark:bg-[#2C2C32]" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#E8E8E8] dark:bg-[#2C2C32]" />
          <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs font-medium text-[#707070] dark:text-[#A1A1AA] font-mono truncate max-w-[140px] sm:max-w-none">
            digitalpointer.analytics
          </span>
        </div>

        {/* Tab Switcher - Responsive touch buttons */}
        <div className="flex items-center gap-0.5 sm:gap-1 bg-white dark:bg-[#1E1E24] p-0.5 sm:p-1 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32]">
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-colors min-h-[30px] flex items-center justify-center ${
              activeTab === 'seo'
                ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                : 'text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            Organic SEO
          </button>
          <button
            onClick={() => setActiveTab('ads')}
            className={`px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-colors min-h-[30px] flex items-center justify-center ${
              activeTab === 'ads'
                ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                : 'text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            Paid Ads
          </button>
          <button
            onClick={() => setActiveTab('cro')}
            className={`px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-md transition-colors min-h-[30px] flex items-center justify-center ${
              activeTab === 'cro'
                ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xs'
                : 'text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            Leads
          </button>
        </div>
      </div>

      {/* Main Mockup Body */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Metric Summary Strips */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="p-2.5 sm:p-3.5 bg-[#F7F7F5] dark:bg-[#1A1A1E] rounded-xl border border-[#E8E8E8] dark:border-[#26262B] min-w-0">
            <div className="text-[9px] sm:text-[11px] font-medium text-[#707070] dark:text-[#A1A1AA] uppercase tracking-wider truncate">
              {activeTab === 'seo' ? 'Organic' : activeTab === 'ads' ? 'Impressions' : 'Enquiries'}
            </div>
            <div className="text-sm sm:text-xl font-bold font-mono text-[#111111] dark:text-white mt-0.5 sm:mt-1 tabular-nums truncate">
              {activeTab === 'seo' ? '18,420' : activeTab === 'ads' ? '142.8K' : '348 Leads'}
            </div>
            <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 sm:mt-1 truncate">
              <TrendingUp className="w-2.5 sm:w-3 h-2.5 sm:h-3 shrink-0" />
              <span>+34% MoM</span>
            </div>
          </div>

          <div className="p-2.5 sm:p-3.5 bg-[#F7F7F5] dark:bg-[#1A1A1E] rounded-xl border border-[#E8E8E8] dark:border-[#26262B] min-w-0">
            <div className="text-[9px] sm:text-[11px] font-medium text-[#707070] dark:text-[#A1A1AA] uppercase tracking-wider truncate">
              {activeTab === 'seo' ? 'Visibility' : activeTab === 'ads' ? 'ROAS' : 'Conversion'}
            </div>
            <div className="text-sm sm:text-xl font-bold font-mono text-[#111111] dark:text-white mt-0.5 sm:mt-1 tabular-nums truncate">
              {activeTab === 'seo' ? 'Top 3' : activeTab === 'ads' ? '4.82x' : '5.18%'}
            </div>
            <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold text-[#F06432] mt-0.5 sm:mt-1 truncate">
              <span>High Intent</span>
            </div>
          </div>

          <div className="p-2.5 sm:p-3.5 bg-[#F7F7F5] dark:bg-[#1A1A1E] rounded-xl border border-[#E8E8E8] dark:border-[#26262B] min-w-0">
            <div className="text-[9px] sm:text-[11px] font-medium text-[#707070] dark:text-[#A1A1AA] uppercase tracking-wider truncate">
              {activeTab === 'seo' ? 'Queries' : activeTab === 'ads' ? 'Cost/Lead' : 'Pipeline'}
            </div>
            <div className="text-sm sm:text-xl font-bold font-mono text-[#111111] dark:text-white mt-0.5 sm:mt-1 tabular-nums truncate">
              {activeTab === 'seo' ? '1,420' : activeTab === 'ads' ? '₹480' : '₹1.84M'}
            </div>
            <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 mt-0.5 sm:mt-1 truncate">
              <span>Verified</span>
            </div>
          </div>
        </div>

        {/* Vector SVG Trend Chart */}
        <div className="p-3 sm:p-4 bg-white dark:bg-[#18181C] rounded-xl border border-[#E8E8E8] dark:border-[#26262B]">
          <div className="flex items-center justify-between mb-2 sm:mb-3 text-xs">
            <span className="font-semibold text-[#111111] dark:text-white flex items-center gap-1.5 text-[11px] sm:text-xs truncate">
              <BarChart3 className="w-3.5 h-3.5 text-[#F06432] shrink-0" />
              <span className="truncate">
                {activeTab === 'seo'
                  ? 'Organic Search Trajectory'
                  : activeTab === 'ads'
                  ? 'Return on Ad Spend (ROAS)'
                  : 'Inbound Lead Velocity'}
              </span>
            </span>
            <span className="text-[#707070] dark:text-[#A1A1AA] font-mono text-[10px] sm:text-[11px] shrink-0">6 Mo</span>
          </div>

          <div className="h-24 sm:h-32 w-full relative flex items-end">
            {/* SVG Trend Line */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradientCurveDark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F06432" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#F06432" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Background fill */}
              <path
                d={
                  activeTab === 'seo'
                    ? 'M 0 85 Q 70 80, 140 60 T 260 40 T 400 12 L 400 100 L 0 100 Z'
                    : activeTab === 'ads'
                    ? 'M 0 90 Q 90 75, 180 50 T 300 32 T 400 10 L 400 100 L 0 100 Z'
                    : 'M 0 80 Q 80 70, 160 52 T 280 30 T 400 8 L 400 100 L 0 100 Z'
                }
                fill="url(#gradientCurveDark)"
              />
              {/* Stroke line */}
              <path
                d={
                  activeTab === 'seo'
                    ? 'M 0 85 Q 70 80, 140 60 T 260 40 T 400 12'
                    : activeTab === 'ads'
                    ? 'M 0 90 Q 90 75, 180 50 T 300 32 T 400 10'
                    : 'M 0 80 Q 80 70, 160 52 T 280 30 T 400 8'
                }
                fill="none"
                stroke="#F06432"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Target Data Nodes */}
              <circle cx="140" cy={activeTab === 'seo' ? 60 : activeTab === 'ads' ? 50 : 52} r="3.5" className="fill-[#111111] dark:fill-white" />
              <circle cx="260" cy={activeTab === 'seo' ? 40 : activeTab === 'ads' ? 32 : 30} r="3.5" className="fill-[#111111] dark:fill-white" />
              <circle cx="400" cy={activeTab === 'seo' ? 12 : activeTab === 'ads' ? 10 : 8} r="4.5" fill="#F06432" />
            </svg>
          </div>

          <div className="flex justify-between text-[10px] sm:text-[11px] font-mono text-[#707070] dark:text-[#A1A1AA] pt-2 border-t border-[#E8E8E8] dark:border-[#26262B] mt-2">
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span className="text-[#111111] dark:text-white font-semibold">Oct</span>
          </div>
        </div>

        {/* Tab Specific Breakdown Item List */}
        <div className="space-y-2">
          <div className="text-[11px] sm:text-xs font-semibold text-[#707070] dark:text-[#A1A1AA] uppercase tracking-wider flex items-center justify-between">
            <span className="truncate">
              {activeTab === 'seo'
                ? 'Ranking Queries'
                : activeTab === 'ads'
                ? 'Campaign Efficiency'
                : 'Verified Enquiries'}
            </span>
            <span className="text-[#F06432] text-[10px] sm:text-[11px] font-medium shrink-0">Live Sync</span>
          </div>

          {activeTab === 'seo' && (
            <div className="space-y-2 text-xs">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#1A1A1E] border border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <Search className="w-3.5 h-3.5 text-[#F06432] shrink-0" />
                  <span className="font-medium text-[#111111] dark:text-[#F4F4F6] text-[11px] sm:text-xs truncate">"b2b software development india"</span>
                </div>
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs shrink-0">Rank #1</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#1A1A1E] border border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <Search className="w-3.5 h-3.5 text-[#F06432] shrink-0" />
                  <span className="font-medium text-[#111111] dark:text-[#F4F4F6] text-[11px] sm:text-xs truncate">"commercial clinic near me"</span>
                </div>
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs shrink-0">Map #1</span>
              </div>
            </div>
          )}

          {activeTab === 'ads' && (
            <div className="space-y-2 text-xs">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#1A1A1E] border border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <Target className="w-3.5 h-3.5 text-[#F06432] shrink-0" />
                  <span className="font-medium text-[#111111] dark:text-[#F4F4F6] text-[11px] sm:text-xs truncate">Google Search: RFQ Funnel</span>
                </div>
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs shrink-0">5.2x ROAS</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#1A1A1E] border border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <Globe2 className="w-3.5 h-3.5 text-[#F06432] shrink-0" />
                  <span className="font-medium text-[#111111] dark:text-[#F4F4F6] text-[11px] sm:text-xs truncate">Meta Ads: WhatsApp Funnel</span>
                </div>
                <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs shrink-0">4.4x ROAS</span>
              </div>
            </div>
          )}

          {activeTab === 'cro' && (
            <div className="space-y-2 text-xs">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#1A1A1E] border border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-medium text-[#111111] dark:text-[#F4F4F6] text-[11px] sm:text-xs truncate">Website Redesign Quote</span>
                </div>
                <span className="font-mono text-[#707070] dark:text-[#A1A1AA] text-[10px] sm:text-xs shrink-0">14m ago</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#1A1A1E] border border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-medium text-[#111111] dark:text-[#F4F4F6] text-[11px] sm:text-xs truncate">Local Map Pack Audit</span>
                </div>
                <span className="font-mono text-[#707070] dark:text-[#A1A1AA] text-[10px] sm:text-xs shrink-0">42m ago</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

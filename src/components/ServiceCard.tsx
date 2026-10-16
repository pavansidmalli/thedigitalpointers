import React from 'react';
import { ArrowRight, Code, Search, MapPin, Store, Share2, MousePointerClick, Target, Layers, TrendingUp } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (path: string) => void;
  index: number;
}

// Tailored vector graphic composition per service with high-contrast light and dark styling
const renderServiceVisual = (slug: string) => {
  switch (slug) {
    case 'website-design-development':
      return (
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8] dark:border-[#28282E]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E8E8E8] dark:bg-[#33333A]" />
              <span className="w-2 h-2 rounded-full bg-[#E8E8E8] dark:bg-[#33333A]" />
              <span className="w-2 h-2 rounded-full bg-[#E8E8E8] dark:bg-[#33333A]" />
            </div>
            <span className="text-[10px] font-mono text-[#707070] dark:text-[#A1A1AA]">FCP: 0.8s · 100% Score</span>
          </div>
          <div className="space-y-2 py-2">
            <div className="h-3 w-3/4 bg-[#111111]/10 dark:bg-white/10 rounded" />
            <div className="h-2 w-1/2 bg-[#F06432]/30 rounded" />
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="h-10 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36] p-1.5 flex flex-col justify-between">
                <div className="h-1.5 w-6 bg-[#111111]/20 dark:bg-white/20 rounded" />
                <div className="h-1.5 w-4 bg-[#F06432] rounded" />
              </div>
              <div className="h-10 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36] p-1.5 flex flex-col justify-between">
                <div className="h-1.5 w-6 bg-[#111111]/20 dark:bg-white/20 rounded" />
                <div className="h-1.5 w-5 bg-emerald-500 rounded" />
              </div>
              <div className="h-10 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36] p-1.5 flex flex-col justify-between">
                <div className="h-1.5 w-6 bg-[#111111]/20 dark:bg-white/20 rounded" />
                <div className="h-1.5 w-3 bg-[#111111]/30 dark:bg-white/30 rounded" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8] dark:border-[#28282E] text-[10px] text-[#707070] dark:text-[#A1A1AA]">
            <span>Responsive DOM</span>
            <Code className="w-3.5 h-3.5 text-[#F06432]" />
          </div>
        </div>
      );

    case 'seo':
      return (
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8] dark:border-[#28282E]">
            <span className="text-[10px] font-mono font-medium text-[#111111] dark:text-white">Search Console Health</span>
            <Search className="w-3.5 h-3.5 text-[#F06432]" />
          </div>
          <div className="space-y-2 py-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#707070] dark:text-[#A1A1AA] font-mono text-[11px]">Organic Visibility</span>
              <span className="font-mono font-bold text-[#111111] dark:text-white">+184% YoY</span>
            </div>
            {/* Organic search mini curve */}
            <svg className="w-full h-12" viewBox="0 0 200 40">
              <path
                d="M 0 35 Q 50 30, 100 20 T 200 5"
                fill="none"
                stroke="#F06432"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 0 35 Q 50 30, 100 20 T 200 5 L 200 40 L 0 40 Z"
                fill="#F06432"
                fillOpacity="0.12"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8] dark:border-[#28282E] text-[10px] text-[#707070] dark:text-[#A1A1AA]">
            <span>Intent Mapping & Schema</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">100% Crawlable</span>
          </div>
        </div>
      );

    case 'local-seo':
      return (
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8] dark:border-[#28282E]">
            <span className="text-[10px] font-mono font-medium text-[#111111] dark:text-white">Geo-Search Radius</span>
            <MapPin className="w-3.5 h-3.5 text-[#F06432]" />
          </div>
          <div className="flex items-center justify-center py-2 relative">
            <div className="w-20 h-20 rounded-full border border-dashed border-[#F06432]/40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-[#F06432]/60 bg-[#F06432]/10 dark:bg-[#F06432]/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#F06432]" />
              </div>
            </div>
            <div className="absolute top-2 right-4 text-[10px] font-mono text-[#707070] dark:text-[#A1A1AA] bg-white dark:bg-[#222228] px-1.5 py-0.5 rounded border border-[#E8E8E8] dark:border-[#2E2E36]">
              5 km Radius
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8] dark:border-[#28282E] text-[10px] text-[#707070] dark:text-[#A1A1AA]">
            <span>Local Citations & NAP</span>
            <span className="font-mono text-[#111111] dark:text-white font-semibold">Verified Sync</span>
          </div>
        </div>
      );

    case 'google-business-profile':
      return (
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8] dark:border-[#28282E]">
            <span className="text-[10px] font-mono font-medium text-[#111111] dark:text-white">Google Maps 3-Pack</span>
            <Store className="w-3.5 h-3.5 text-[#F06432]" />
          </div>
          <div className="space-y-1.5 py-1">
            <div className="p-2 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36] flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-[#111111] dark:text-white truncate max-w-[130px]">The Digital Pointers</span>
              </div>
              <span className="text-[11px] font-mono text-[#F06432] font-semibold">#1 in Map Pack</span>
            </div>
            <div className="flex items-center justify-between text-[11px] px-1 text-[#707070] dark:text-[#A1A1AA]">
              <span>Direct Phone Calls</span>
              <span className="font-mono font-semibold text-[#111111] dark:text-white">+78%</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8] dark:border-[#28282E] text-[10px] text-[#707070] dark:text-[#A1A1AA]">
            <span>Active Reviews & Posts</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Policy Compliant</span>
          </div>
        </div>
      );

    case 'social-media-marketing':
      return (
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8] dark:border-[#28282E]">
            <span className="text-[10px] font-mono font-medium text-[#111111] dark:text-white">Editorial Content Cadence</span>
            <Share2 className="w-3.5 h-3.5 text-[#F06432]" />
          </div>
          <div className="space-y-2 py-1">
            <div className="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
              <div className="bg-white dark:bg-[#222228] p-1 rounded border border-[#E8E8E8] dark:border-[#2E2E36] text-[#111111] dark:text-white">Mon<br/><span className="text-[#F06432] font-bold">Post</span></div>
              <div className="bg-white dark:bg-[#222228] p-1 rounded border border-[#E8E8E8] dark:border-[#2E2E36] text-[#111111] dark:text-white">Wed<br/><span className="text-[#111111] dark:text-white font-bold">Carousel</span></div>
              <div className="bg-white dark:bg-[#222228] p-1 rounded border border-[#E8E8E8] dark:border-[#2E2E36] text-[#111111] dark:text-white">Fri<br/><span className="text-[#F06432] font-bold">Reel</span></div>
              <div className="bg-white dark:bg-[#222228] p-1 rounded border border-[#E8E8E8] dark:border-[#2E2E36] text-[#707070] dark:text-[#A1A1AA]">Sun<br/><span>Review</span></div>
            </div>
            <div className="text-[11px] text-[#707070] dark:text-[#A1A1AA] flex items-center justify-between">
              <span>Authority Network Growth</span>
              <span className="font-mono text-[#111111] dark:text-white font-semibold">+4.8% Engagement</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8] dark:border-[#28282E] text-[10px] text-[#707070] dark:text-[#A1A1AA]">
            <span>LinkedIn & Instagram</span>
            <span className="font-mono text-[#111111] dark:text-white font-semibold">Bespoke Design</span>
          </div>
        </div>
      );

    case 'ppc-advertising':
      return (
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8] dark:border-[#28282E]">
            <span className="text-[10px] font-mono font-medium text-[#111111] dark:text-white">Paid Media Economics</span>
            <MousePointerClick className="w-3.5 h-3.5 text-[#F06432]" />
          </div>
          <div className="space-y-1.5 py-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#707070] dark:text-[#A1A1AA]">Validated ROAS</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">4.6x Average</span>
            </div>
            <div className="h-2 w-full bg-[#E8E8E8] dark:bg-[#28282E] rounded-full overflow-hidden">
              <div className="h-full bg-[#F06432] w-[75%]" />
            </div>
            <div className="flex justify-between text-[10px] text-[#707070] dark:text-[#A1A1AA] font-mono">
              <span>Budget Cap Protected</span>
              <span>Negative Match Hygiene</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8] dark:border-[#28282E] text-[10px] text-[#707070] dark:text-[#A1A1AA]">
            <span>Cross-Channel Attribution</span>
            <span className="font-mono text-[#111111] dark:text-white font-semibold">100% Client Owned</span>
          </div>
        </div>
      );

    case 'google-ads':
      return (
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8] dark:border-[#28282E]">
            <span className="text-[10px] font-mono font-medium text-[#111111] dark:text-white">Google Search Ads</span>
            <Target className="w-3.5 h-3.5 text-[#F06432]" />
          </div>
          <div className="space-y-1.5 py-1">
            <div className="p-2 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36] text-left">
              <div className="text-[10px] font-mono text-[#707070] dark:text-[#A1A1AA] flex items-center justify-between">
                <span>Ad · Exact Match</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Quality Score: 9/10</span>
              </div>
              <div className="text-xs font-semibold text-[#111111] dark:text-white truncate mt-0.5">
                Corporate Advisory Services | Free Audit
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8] dark:border-[#28282E] text-[10px] text-[#707070] dark:text-[#A1A1AA]">
            <span>Call Tracking Enabled</span>
            <span className="font-mono text-[#111111] dark:text-white font-semibold">Zero Spam Clicks</span>
          </div>
        </div>
      );

    case 'performance-marketing':
      return (
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8] dark:border-[#28282E]">
            <span className="text-[10px] font-mono font-medium text-[#111111] dark:text-white">Blended Unit Economics</span>
            <TrendingUp className="w-3.5 h-3.5 text-[#F06432]" />
          </div>
          <div className="space-y-1.5 py-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#707070] dark:text-[#A1A1AA] font-mono text-[11px]">Blended CAC</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">-32% Down</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center font-mono text-[9px] pt-1">
              <div className="p-1.5 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36]">
                <div className="text-[#707070] dark:text-[#A1A1AA]">Top Funnel</div>
                <div className="font-bold text-[#111111] dark:text-white mt-0.5">₹1.80 CPC</div>
              </div>
              <div className="p-1.5 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36]">
                <div className="text-[#707070] dark:text-[#A1A1AA]">CRO Conv</div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">8.4% Rate</div>
              </div>
              <div className="p-1.5 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36]">
                <div className="text-[#707070] dark:text-[#A1A1AA]">Blended ROAS</div>
                <div className="font-bold text-[#F06432] mt-0.5">5.2x Net</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8] dark:border-[#28282E] text-[10px] text-[#707070] dark:text-[#A1A1AA]">
            <span>Multi-Touch Attribution</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">1st-Party Verified</span>
          </div>
        </div>
      );

    case 'meta-ads':
    default:
      return (
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8E8E8] dark:border-[#28282E]">
            <span className="text-[10px] font-mono font-medium text-[#111111] dark:text-white">Meta Conversions API</span>
            <Layers className="w-3.5 h-3.5 text-[#F06432]" />
          </div>
          <div className="space-y-1.5 py-1">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36]">
                <div className="text-[10px] text-[#707070] dark:text-[#A1A1AA]">Creative Angle A</div>
                <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">Winner · ₹280</div>
              </div>
              <div className="p-2 bg-white dark:bg-[#222228] rounded border border-[#E8E8E8] dark:border-[#2E2E36]">
                <div className="text-[10px] text-[#707070] dark:text-[#A1A1AA]">Creative Angle B</div>
                <div className="font-mono text-[#707070] dark:text-[#A1A1AA] mt-0.5">Tested · ₹410</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-[#E8E8E8] dark:border-[#28282E] text-[10px] text-[#707070] dark:text-[#A1A1AA]">
            <span>Server-Side CAPI</span>
            <span className="font-mono text-[#111111] dark:text-white font-semibold">Direct WhatsApp</span>
          </div>
        </div>
      );
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, index }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`Explore ${service.title}`}
      onClick={() => onSelect(`/services/${service.slug}/`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(`/services/${service.slug}/`);
        }
      }}
      className="group relative bg-white dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] p-5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:border-[#F06432]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F06432] transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Tailored Visual Container with Service Imagery */}
        <div className="mb-5 overflow-hidden rounded-xl border border-[#E8E8E8] dark:border-[#28282E] relative bg-[#F7F7F5] dark:bg-[#19191D] h-44">
          {service.image && !imageError ? (
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={service.image}
                alt={service.imageAlt || service.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-black/70 text-white backdrop-blur-xs border border-white/15 shadow-xs">
                  {service.category}
                </span>
              </div>
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-mono font-medium drop-shadow-sm">
                <span className="truncate pr-2">{service.tagline}</span>
              </div>
            </div>
          ) : (
            renderServiceVisual(service.slug)
          )}
        </div>

        {/* Clean Unboxed Metadata */}
        <div className="flex items-center gap-2 text-xs text-[#707070] dark:text-[#A1A1AA] mb-2 font-mono">
          <span>{service.category}</span>
          <span aria-hidden="true">·</span>
          <span>{service.tagline}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-[#111111] dark:text-white group-hover:text-[#F06432] transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#707070] dark:text-[#A1A1AA] mt-2.5 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-6 mt-6 border-t border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between text-xs font-semibold text-[#111111] dark:text-white group-hover:text-[#F06432] transition-colors">
        <span>Explore Service</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

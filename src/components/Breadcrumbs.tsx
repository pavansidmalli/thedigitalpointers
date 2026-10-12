import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbCrumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  crumbs: BreadcrumbCrumb[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-[#707070] dark:text-[#A1A1AA]">
        <li className="flex items-center">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-[#111111] dark:hover:text-white transition-colors focus:outline-none focus-visible:underline"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>

        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-[#E8E8E8] dark:text-[#33333A]" aria-hidden="true" />
              {isLast || !crumb.path ? (
                <span className="font-semibold text-[#111111] dark:text-white" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(crumb.path!)}
                  className="hover:text-[#111111] dark:hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  {crumb.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

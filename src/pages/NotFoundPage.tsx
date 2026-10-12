import React from 'react';
import { Compass, ArrowRight, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-center mx-auto text-[#F06432]">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-semibold text-[#F06432] uppercase">
          404 Error · Page Not Found
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#111111] dark:text-white">
          We Couldn't Find That Direction.
        </h1>
        <p className="text-sm sm:text-base text-[#707070] dark:text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
          The page or URL you requested does not exist or may have been relocated. Let’s get you back on track.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('/')}
          className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#111111] dark:bg-[#1E1E24] hover:bg-neutral-800 dark:hover:bg-[#2A2A32] border border-transparent dark:border-[#2E2E36] transition-colors flex items-center gap-2"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </button>

        <button
          onClick={() => onNavigate('/services/')}
          className="px-6 py-2.5 rounded-lg text-xs font-semibold text-[#111111] dark:text-white bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] hover:bg-[#E8E8E8] dark:hover:bg-[#202026] transition-colors flex items-center gap-2"
        >
          <span>Explore Services</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F06432]" />
        </button>
      </div>
    </div>
  );
};

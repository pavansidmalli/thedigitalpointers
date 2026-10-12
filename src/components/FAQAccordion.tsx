import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex >= 0 ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="divide-y divide-[#E8E8E8] dark:divide-[#26262B] border-y border-[#E8E8E8] dark:border-[#26262B]">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headingId = `faq-heading-${item.id || index}`;
        const panelId = `faq-panel-${item.id || index}`;

        return (
          <div key={item.id || index} className="py-5 transition-colors">
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className="w-full text-left flex items-start justify-between gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F06432] rounded-md p-1"
              >
                <span className="font-heading font-semibold text-base sm:text-lg text-[#111111] dark:text-white group-hover:text-[#F06432] transition-colors leading-snug">
                  {item.question}
                </span>
                <span className="shrink-0 p-1 rounded-full text-[#707070] dark:text-[#A1A1AA] group-hover:text-[#F06432] transition-colors mt-0.5">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#F06432]' : ''
                    }`}
                  />
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="pt-3 pb-2 text-sm sm:text-base text-[#707070] dark:text-[#A1A1AA] leading-relaxed animate-in fade-in-50 duration-150 pl-1"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

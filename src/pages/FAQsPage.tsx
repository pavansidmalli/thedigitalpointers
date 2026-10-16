import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQAccordion } from '../components/FAQAccordion';
import { faqsData } from '../data/faqsData';
import { Search, ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';

interface FAQsPageProps {
  onNavigate: (path: string) => void;
}

export const FAQsPage: React.FC<FAQsPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'General Digital Marketing',
    'Website Design & Development',
    'Search Engine Optimization',
    'Local SEO & Google Business Profile',
    'Social Media Marketing',
    'Google Ads & PPC Advertising',
    'Meta Ads (Facebook & Instagram)',
    'Pricing, Timelines & Reporting'
  ];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16 pb-20">
      <Breadcrumbs crumbs={[{ label: 'FAQs' }]} onNavigate={onNavigate} />

      {/* Hero */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase">
          Frequently Asked Questions
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-tight">
          Clear, Honest Answers to Important Marketing Questions.
        </h1>
        <p className="text-base sm:text-lg text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
          We believe in complete transparency about timelines, deliverables, Google guidelines, and commercial realities.
        </p>

        {/* Search Input */}
        <div className="relative max-w-xl mx-auto pt-2">
          <Search className="w-4 h-4 text-[#707070] dark:text-[#A1A1AA] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions by topic (e.g. SEO, contract, Google Ads, timeline)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#F06432] focus:border-[#F06432] shadow-xs"
          />
        </div>
      </section>

      {/* Category Pills / Tab Filter (interactive controls) */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
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

        {/* Accordions */}
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-[#F7F7F5] dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] space-y-3">
            <HelpCircle className="w-8 h-8 text-[#707070] dark:text-[#A1A1AA] mx-auto" />
            <h3 className="font-heading font-bold text-lg text-[#111111] dark:text-white">
              No matching questions found
            </h3>
            <p className="text-xs text-[#707070] dark:text-[#A1A1AA]">
              Try searching a different term or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-semibold text-[#111111] dark:text-white bg-white dark:bg-[#1A1A1E] rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="bg-white dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] p-6 sm:p-10 shadow-xs">
            <FAQAccordion items={filteredFaqs} defaultOpenIndex={0} />
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-[#F7F7F5] dark:bg-[#141417] rounded-3xl p-8 sm:p-12 border border-[#E8E8E8] dark:border-[#26262B] text-center space-y-6">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-white">
          Have a Question Not Answered Here?
        </h2>
        <p className="text-sm text-[#707070] dark:text-[#A1A1AA] max-w-lg mx-auto leading-relaxed">
          Our strategy consultants are available to walk through any specific questions regarding your industry, current website, or advertising objectives.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/contact/')}
            className="px-7 py-3 rounded-lg text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-colors flex items-center gap-2"
          >
            <span>Ask Our Strategy Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/919705866749?text=Hello%20The%20Digital%20Pointers%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg text-sm font-semibold text-[#111111] dark:text-white bg-white dark:bg-[#1A1A1E] border border-[#E8E8E8] dark:border-[#2C2C32] hover:bg-[#E8E8E8] dark:hover:bg-[#25252B] transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};

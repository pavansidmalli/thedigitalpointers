import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BlogCard } from '../components/BlogCard';
import { BlogPost } from '../types';
import { Search, BookOpen, ArrowRight } from 'lucide-react';

interface BlogPageProps {
  articles: BlogPost[];
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ articles, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Local SEO', 'Strategy & Paid Media', 'Web Design & CRO'];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesQuery =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featuredArticle = filteredArticles[0];
  const gridArticles = filteredArticles.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16 pb-20">
      <Breadcrumbs crumbs={[{ label: 'Blog' }]} onNavigate={onNavigate} />

      {/* Hero & Top Bar */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E8E8] dark:border-[#222226] pb-10">
        <div className="max-w-2xl space-y-4">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase">
            Agency Journal & Intelligence
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-tight">
            Strategic Perspectives on Search, Performance & Design.
          </h1>
          <p className="text-base text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
            In-depth guides, technical breakdowns, and commercial strategies written by our practicing agency team.
          </p>
        </div>

        {/* Verified Publications Badge */}
        <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-[#707070] dark:text-[#A1A1AA] bg-[#F7F7F5] dark:bg-[#1A1A1E] px-3.5 py-2.5 rounded-lg border border-[#E8E8E8] dark:border-[#28282E]">
          <BookOpen className="w-4 h-4 text-[#F06432]" />
          <span>{articles.length} Verified Field Guides</span>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111]'
                  : 'bg-[#F7F7F5] dark:bg-[#1A1A1E] text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-[#707070] dark:text-[#A1A1AA] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#F06432] focus:border-[#F06432]"
          />
        </div>
      </section>

      {/* Content Area */}
      {filteredArticles.length === 0 ? (
        <div className="py-20 text-center bg-[#F7F7F5] dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] space-y-3">
          <BookOpen className="w-8 h-8 text-[#707070] dark:text-[#A1A1AA] mx-auto" />
          <h3 className="font-heading font-bold text-lg text-[#111111] dark:text-white">No articles found</h3>
          <p className="text-xs text-[#707070] dark:text-[#A1A1AA]">No publications matched your current filter criteria.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Featured Article */}
          {featuredArticle && (
            <div>
              <div className="text-xs font-mono font-semibold text-[#707070] dark:text-[#A1A1AA] uppercase tracking-wider mb-4">
                Featured Insight
              </div>
              <BlogCard post={featuredArticle} onSelect={onNavigate} featured={true} />
            </div>
          )}

          {/* Grid of Remaining Articles */}
          {gridArticles.length > 0 && (
            <div className="space-y-6">
              <div className="text-xs font-mono font-semibold text-[#707070] dark:text-[#A1A1AA] uppercase tracking-wider">
                Recent Publications
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridArticles.map((post) => (
                  <BlogCard key={post.slug} post={post} onSelect={onNavigate} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Strategy Brief Callout */}
      <section className="bg-[#F7F7F5] dark:bg-[#141417] rounded-3xl p-8 sm:p-12 border border-[#E8E8E8] dark:border-[#26262B] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-heading text-2xl font-bold text-[#111111] dark:text-white">
            Need Custom Strategic Guidance for Your Company?
          </h3>
          <p className="text-sm text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
            Read our articles or speak directly with the practitioners who wrote them. We offer actionable 30-minute discovery calls.
          </p>
        </div>

        <button
          onClick={() => onNavigate('/contact/')}
          className="px-6 py-3 rounded-lg text-xs font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-colors whitespace-nowrap flex items-center gap-2"
        >
          <span>Schedule Strategy Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};

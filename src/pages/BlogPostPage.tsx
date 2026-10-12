import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BlogPost } from '../types';
import { ArrowLeft, ArrowRight, Share2, Check, Clock, Calendar, User, BookOpen } from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  allPosts: BlogPost[];
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, allPosts, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12 pb-20">
      <Breadcrumbs
        crumbs={[
          { label: 'Blog', path: '/blog/' },
          { label: post.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Article Header */}
      <header className="space-y-6 border-b border-[#E8E8E8] dark:border-[#222226] pb-10">
        {/* Zero-Pill Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#707070] dark:text-[#A1A1AA]">
          <span className="text-[#F06432] font-semibold">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-[1.15] text-balance">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author & Share Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8] dark:border-[#222226] text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#111111] dark:bg-[#1E1E24] text-white flex items-center justify-center font-bold text-xs border border-transparent dark:border-[#2C2C34]">
              DP
            </div>
            <div>
              <div className="font-bold text-[#111111] dark:text-white">{post.author.name}</div>
              <div className="text-[#707070] dark:text-[#A1A1AA] text-[11px]">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-lg border border-[#E8E8E8] dark:border-[#2C2C32] bg-white dark:bg-[#1A1A1E] hover:bg-[#F7F7F5] dark:hover:bg-[#25252B] transition-colors text-xs font-medium text-[#111111] dark:text-white flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">URL Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#707070] dark:text-[#A1A1AA]" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Prose Content */}
      <div className="space-y-10 text-base sm:text-lg text-[#111111]/90 dark:text-[#E4E4E7] leading-relaxed font-body">
        {/* Introduction */}
        <p className="text-lg leading-relaxed font-normal text-[#111111] dark:text-[#E4E4E7]">
          {post.content.introduction}
        </p>

        {/* Structured Sections */}
        {post.content.sections.map((section, idx) => (
          <section key={idx} className="space-y-4 pt-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111] dark:text-white tracking-tight">
              {section.heading}
            </h2>

            {section.body.map((p, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                {p}
              </p>
            ))}

            {section.keyTakeaways && section.keyTakeaways.length > 0 && (
              <div className="p-6 my-6 rounded-xl bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F06432]">
                  Key Takeaway
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#111111] dark:text-white">
                  {section.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-[#F06432] font-bold">›</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}

        {/* Conclusion */}
        <div className="pt-6 border-t border-[#E8E8E8] dark:border-[#222226] space-y-3">
          <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white">
            Strategic Conclusion
          </h3>
          <p className="text-sm sm:text-base text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
            {post.content.conclusion}
          </p>
        </div>

        {/* Internal Service Links Box */}
        <div className="p-6 rounded-2xl bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-sm text-[#111111] dark:text-white">
              Explore Relevant Capabilities
            </h4>
            <p className="text-xs text-[#707070] dark:text-[#A1A1AA]">
              Discover how Digital Pointer executes these principles for clients.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/services/')}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-[#111111] dark:text-white bg-white dark:bg-[#1E1E24] border border-[#E8E8E8] dark:border-[#2E2E36] hover:bg-[#E8E8E8] dark:hover:bg-[#25252B] transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F06432]" />
          </button>
        </div>
      </div>

      {/* Author Bio Box */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#111111] dark:bg-[#1E1E24] text-white flex items-center justify-center font-bold text-sm shrink-0 border border-transparent dark:border-[#2E2E36]">
          DP
        </div>
        <div className="space-y-1">
          <div className="font-heading font-bold text-base text-[#111111] dark:text-white">{post.author.name}</div>
          <div className="text-xs text-[#F06432] font-mono">{post.author.role}</div>
          <p className="text-xs text-[#707070] dark:text-[#A1A1AA] pt-1 leading-relaxed">
            Published by Digital Pointer's senior practice directors specializing in data-driven organic search, conversion architecture, and measurable paid campaigns.
          </p>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="space-y-6 pt-8 border-t border-[#E8E8E8] dark:border-[#222226]">
          <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white">
            Related Strategic Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigate(`/blog/${rel.slug}/`)}
                className="p-6 rounded-xl bg-[#F7F7F5] dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] hover:border-[#111111] dark:hover:border-[#F06432] transition-colors cursor-pointer group"
              >
                <span className="text-xs font-mono text-[#F06432]">{rel.category}</span>
                <h4 className="font-heading font-bold text-base text-[#111111] dark:text-white group-hover:text-[#F06432] transition-colors mt-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#707070] dark:text-[#A1A1AA] mt-2 line-clamp-2">
                  {rel.excerpt}
                </p>
                <div className="pt-4 mt-4 border-t border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between text-xs font-semibold text-[#111111] dark:text-white">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F06432]" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Final Article CTA */}
      <section className="bg-[#111111] dark:bg-[#16161A] text-white rounded-3xl p-10 text-center space-y-4 border dark:border-[#26262B]">
        <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
          Apply These Strategies to Your Business.
        </h3>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto">
          Schedule a consultation with our strategy leads to evaluate your current search presence and paid acquisition economics.
        </p>
        <button
          onClick={() => onNavigate('/contact/')}
          className="px-6 py-3 rounded-lg text-xs font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all inline-flex items-center gap-2"
        >
          <span>Book a Free Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </article>
  );
};

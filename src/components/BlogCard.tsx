import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onSelect: (path: string) => void;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect, featured }) => {
  return (
    <article
      role="link"
      tabIndex={0}
      aria-label={`Read article: ${post.title}`}
      onClick={() => onSelect(`/blog/${post.slug}/`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(`/blog/${post.slug}/`);
        }
      }}
      className={`group bg-white dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] hover:border-[#111111]/30 dark:hover:border-[#F06432]/60 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F06432] transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden ${
        featured ? 'p-8 lg:p-10 bg-[#F7F7F5] dark:bg-[#18181C]' : 'p-6'
      }`}
    >
      <div>
        {/* Editorial Visual Graphic Top */}
        <div className="h-44 w-full bg-[#F7F7F5] dark:bg-[#19191D] rounded-xl border border-[#E8E8E8] dark:border-[#28282E] p-5 mb-5 flex flex-col justify-between overflow-hidden relative group-hover:border-[#F06432]/30 transition-colors">
          <div className="flex items-center justify-between text-xs text-[#707070] dark:text-[#A1A1AA]">
            <span className="font-mono">{post.category}</span>
            <BookOpen className="w-4 h-4 text-[#F06432]" />
          </div>

          <div className="space-y-1.5">
            <div className="h-2 w-12 bg-[#F06432] rounded" />
            <div className="h-3 w-3/4 bg-[#111111]/20 dark:bg-white/20 rounded" />
            <div className="h-2 w-1/2 bg-[#111111]/10 dark:bg-white/10 rounded" />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-[#707070] dark:text-[#A1A1AA] pt-2 border-t border-[#E8E8E8] dark:border-[#28282E]">
            <span>Digital Pointer Editorial</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Zero-Pill Unboxed Metadata */}
        <div className="flex items-center gap-2 text-xs text-[#707070] dark:text-[#A1A1AA] mb-3 font-mono">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3
          className={`font-heading font-bold text-[#111111] dark:text-white group-hover:text-[#F06432] transition-colors leading-tight ${
            featured ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#707070] dark:text-[#A1A1AA] mt-3 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Author and Action Footer */}
      <div className="pt-6 mt-6 border-t border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between text-xs">
        <div className="flex flex-col">
          <span className="font-semibold text-[#111111] dark:text-white">{post.author.name}</span>
          <span className="text-[#707070] dark:text-[#A1A1AA] text-[11px]">{post.author.role}</span>
        </div>

        <div className="font-semibold text-[#111111] dark:text-white group-hover:text-[#F06432] flex items-center gap-1 transition-colors">
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

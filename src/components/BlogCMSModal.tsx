import React, { useState } from 'react';
import { X, Plus, Check, Loader2, Sparkles, FileText } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCMSModalProps {
  isOpen: boolean;
  onClose: () => void;
  onArticleAdded: (newPost: BlogPost) => void;
}

export const BlogCMSModal: React.FC<BlogCMSModalProps> = ({ isOpen, onClose, onArticleAdded }) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Search Strategy');
  const [excerpt, setExcerpt] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  const [authorName, setAuthorName] = useState('The Digital Pointers Team');
  const [authorRole, setAuthorRole] = useState('Senior Strategy Consultant');
  const [sectionHeading, setSectionHeading] = useState('');
  const [sectionBody, setSectionBody] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [tags, setTags] = useState('SEO, Growth, Strategy');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug || slug === title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!title.trim() || !slug.trim() || !excerpt.trim()) {
      setError('Title, slug, and summary excerpt are required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const savedToken = localStorage.getItem('dp_owner_admin_token');
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (savedToken) {
        headers['Authorization'] = `Bearer ${savedToken}`;
      }

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          title,
          slug,
          category,
          excerpt,
          readTime,
          authorName,
          authorRole,
          introduction: excerpt,
          sectionHeading: sectionHeading || 'Strategic Execution Framework',
          sectionBody: [sectionBody || excerpt],
          conclusion: conclusion || 'Get in touch with The Digital Pointers to implement this roadmap.',
          tags
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to publish article.');
      }

      onArticleAdded(data.article);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1200);
    } catch (err: any) {
      setError(err.message || 'Error communicating with CMS API.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#141417] rounded-2xl max-w-2xl w-full border border-[#E8E8E8] dark:border-[#26262B] shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between bg-[#F7F7F5] dark:bg-[#18181C]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#F06432]" />
            <div>
              <h3 className="font-heading font-bold text-base text-[#111111] dark:text-white">
                The Digital Pointers Custom Blog CMS
              </h3>
              <p className="text-xs text-[#707070] dark:text-[#A1A1AA]">
                Publish a new editorial article directly to the live blog archive
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white hover:bg-[#E8E8E8] dark:hover:bg-[#222228] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-400 text-xs rounded-lg flex items-center gap-2 font-semibold">
              <Check className="w-4 h-4" />
              Article published successfully to /blog/{slug}/!
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider mb-1">
              Article Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 5 Modern On-Page Signals Every B2B Site Must Audit"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] rounded-lg focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider mb-1">
                URL Slug (/blog/slug/)
              </label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-3 py-2 text-xs font-mono bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] rounded-lg focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] rounded-lg focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
              >
                <option value="Search Strategy">Search Strategy</option>
                <option value="Local SEO">Local SEO</option>
                <option value="Web Design & CRO">Web Design & CRO</option>
                <option value="Paid Advertising">Paid Advertising</option>
                <option value="Social Media">Social Media</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider mb-1">
              Summary / Excerpt (Meta Description)
            </label>
            <textarea
              rows={2}
              required
              placeholder="Short 1-2 sentence overview for social cards and search engines..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] rounded-lg focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider mb-1">
              Main Section Heading
            </label>
            <input
              type="text"
              placeholder="e.g. Why Technical Health Trumps Shallow Keyword Stuffing"
              value={sectionHeading}
              onChange={(e) => setSectionHeading(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] rounded-lg focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider mb-1">
              Article Body Content
            </label>
            <textarea
              rows={5}
              placeholder="Write the full insights for this article..."
              value={sectionBody}
              onChange={(e) => setSectionBody(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] rounded-lg focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider mb-1">
                Author Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] rounded-lg focus:border-[#F06432] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#111111] dark:text-white uppercase tracking-wider mb-1">
                Estimated Reading Time
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] rounded-lg focus:border-[#F06432] focus:outline-none"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-colors flex items-center gap-1.5 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Publishing...</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Publish to Blog</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

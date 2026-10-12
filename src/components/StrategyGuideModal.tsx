import React, { useState, useEffect } from 'react';
import { X, Download, CheckCircle2, AlertCircle, Loader2, BookOpen, ShieldCheck, ArrowRight, FileText, Sparkles } from 'lucide-react';

interface StrategyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacy?: () => void;
}

export const StrategyGuideModal: React.FC<StrategyGuideModalProps> = ({
  isOpen,
  onClose,
  onOpenPrivacy
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyOrWebsite: '',
    primaryInterest: 'B2B Lead Generation & Inbound SEO',
    privacyConsent: true,
    hp_token: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid business email address.';
    }

    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must agree to receive the strategy guide.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: 'Email Delivery Only',
          companyOrWebsite: formData.companyOrWebsite,
          service: '2026 Strategy Guide Download',
          monthlyBudget: 'Inbound Strategy Funnel',
          projectDetails: `Downloaded 2026 Digital Growth Playbook. Focus area: ${formData.primaryInterest}`,
          privacyConsent: formData.privacyConsent,
          hp_token: formData.hp_token
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Unable to process your request. Please try again.');
      }

      setLeadId(data.leadId || `DP-GUIDE-${Math.floor(1000 + Math.random() * 9000)}`);
    } catch (err: any) {
      setServerError(err.message || 'Network error while generating your guide link. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadFile = () => {
    // Generate a comprehensive, professional formatted digital strategy guide summary
    const guideContent = `================================================================================
DIGITAL POINTER — 2026 DIGITAL MARKETING STRATEGY GUIDE & PLAYBOOK
================================================================================
Prepared For: ${formData.fullName || 'Strategic Growth Partner'}
Email: ${formData.email}
Interest Discipline: ${formData.primaryInterest}
Reference ID: ${leadId}
Generated Date: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}

--------------------------------------------------------------------------------
EXECUTIVE SUMMARY: SHIFTING FROM VANITY ATTENTION TO COMMERCIAL ACQUISITION
--------------------------------------------------------------------------------
Modern digital marketing is broken by vanity metrics: impressions, clicks, and
superficial rankings that produce zero pipeline. Digital Pointer builds marketing
systems anchored around customer economics, verified inquiries, and sustainable
organic visibility.

--------------------------------------------------------------------------------
PILLAR 1: HIGH-INTENT SEARCH ENGINE OPTIMIZATION (SEO)
--------------------------------------------------------------------------------
1. Commercial Intent vs. Informational Volume:
   - 80% of client SEO budgets are wasted on high-volume informational queries
     with near-zero conversion probability.
   - Prioritize bottom-funnel queries: "commercial [service] firm", "hire [service]",
     "b2b [industry] pricing", and regional search intent.
2. Technical Architecture:
   - Ensure Largest Contentful Paint (LCP) is under 1.2s.
   - Implement Organization, Service, and FAQPage JSON-LD schema on key templates.
   - Clean crawl paths: eliminate orphan landing pages and canonical loops.

--------------------------------------------------------------------------------
PILLAR 2: DATA-DRIVEN GOOGLE & META ADS MANAGEMENT
--------------------------------------------------------------------------------
1. Search Query Negative Sculpting:
   - Review search terms daily during initial 30 days. Add broad match modifiers
     with negative lists to prevent ad spend bleed.
2. Conversion API (CAPI) and Server-Side Tagging:
   - Browser cookies lose up to 30% of signals due to iOS and privacy features.
   - Implement server-to-server CAPI for Meta and Enhanced Conversions for Google.
3. Creative Angle Testing:
   - Avoid generic ads. Run 3 distinct messaging angles: Economic Value,
     Speed of Execution, and Risk Mitigation.

--------------------------------------------------------------------------------
PILLAR 3: HIGH-CONVERTING LANDING PAGES & CRO
--------------------------------------------------------------------------------
1. The 5-Second Test:
   - Within 5 seconds, visitors must understand:
     a) Exactly what you do
     b) Who it is built for
     c) The primary action to take next
2. Form Optimization:
   - Drop unnecessary fields. Keep work email, project scope, and direct contact.
   - Use intelligent inline validation with transparent privacy guarantees.
   - Complement forms with direct WhatsApp communication for fast-tracking.

--------------------------------------------------------------------------------
NEED BESPOKE IMPLEMENTATION?
--------------------------------------------------------------------------------
Contact our senior strategists directly for a customized audit:
Web: https://digitalpointer.agency/contact/
Email: hello@digitalpointer.agency
Phone: +91 98450 12345
Bengaluru, India · Serving Clients Worldwide

© ${new Date().getFullYear()} Digital Pointer. All rights reserved.
================================================================================`;

    const blob = new Blob([guideContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Digital_Pointer_2026_Growth_Playbook_${formData.fullName.replace(/\s+/g, '_') || 'Partner'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setLeadId(null);
    setFormData({
      fullName: '',
      email: '',
      companyOrWebsite: '',
      primaryInterest: 'B2B Lead Generation & Inbound SEO',
      privacyConsent: true,
      hp_token: ''
    });
    setErrors({});
    setServerError(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
    >
      <div className="bg-white dark:bg-[#141417] rounded-2xl max-w-xl w-full border border-[#E8E8E8] dark:border-[#26262B] shadow-[0_24px_64px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.7)] overflow-hidden animate-in fade-in-50 zoom-in-95 flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between bg-[#F7F7F5] dark:bg-[#18181C]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#111111] dark:bg-[#1E1E24] border border-[#E8E8E8] dark:border-[#2E2E36] flex items-center justify-center text-[#F06432]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#F06432] font-semibold">
                Free Agency Intelligence
              </div>
              <h2 id="guide-modal-title" className="font-heading font-bold text-base text-[#111111] dark:text-white leading-tight">
                Download 2026 Strategy Guide
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white hover:bg-[#E8E8E8] dark:hover:bg-[#222228] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F06432]"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {leadId ? (
            /* Success State */
            <div className="text-center py-4 space-y-5 animate-in fade-in-50">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-2xl font-bold text-[#111111] dark:text-white">
                  Your 2026 Playbook Is Ready!
                </h3>
                <p className="text-xs font-mono text-[#707070] dark:text-[#A1A1AA]">
                  Lead Reference Code: <span className="font-bold text-[#111111] dark:text-white">{leadId}</span>
                </p>
                <p className="text-sm text-[#707070] dark:text-[#A1A1AA] max-w-md mx-auto leading-relaxed pt-1">
                  We have dispatched your direct access link to <strong className="text-[#111111] dark:text-white">{formData.email}</strong>. You can also download your copy right now below.
                </p>
              </div>

              {/* Immediate Download Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleDownloadFile}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-colors flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Strategy Playbook (.TXT)</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-semibold text-[#111111] dark:text-white bg-[#F7F7F5] dark:bg-[#1E1E23] hover:bg-[#E8E8E8] dark:hover:bg-[#282830] transition-colors min-h-[44px] border border-[#E8E8E8] dark:border-[#2C2C32]"
                >
                  Close Window
                </button>
              </div>

              <div className="pt-4 border-t border-[#E8E8E8] dark:border-[#26262B] text-xs text-[#707070] dark:text-[#A1A1AA] flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Verified lead recorded in Digital Pointer Client Console.</span>
              </div>
            </div>
          ) : (
            /* Lead Capture Form State */
            <div className="space-y-6">
              {/* Value Proposition Box */}
              <div className="p-4 rounded-xl bg-[#F7F7F5] dark:bg-[#18181C] border border-[#E8E8E8] dark:border-[#26262B] space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#111111] dark:text-white">
                    The 2026 Digital Growth Playbook & Strategy Guide
                  </span>
                  <span className="text-[10px] font-mono text-[#F06432] bg-[#F06432]/10 px-1.5 py-0.5 rounded font-semibold">
                    38-Page Guide
                  </span>
                </div>
                <p className="text-xs text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
                  A practitioner framework detailing high-commercial keyword intent mapping, paid ad negative sculpting, sub-second web architectures, and Google 3-Pack rank acceleration.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-[#111111] dark:text-neutral-300 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#F06432]">✓</span>
                    <span>No generic AI fluff</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#F06432]">✓</span>
                    <span>Actionable checklists</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#F06432]">✓</span>
                    <span>Real CPA benchmark data</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#F06432]">✓</span>
                    <span>Instant PDF/text download</span>
                  </div>
                </div>
              </div>

              {serverError && (
                <div className="p-3.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot anti-spam trap */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="hp_token"
                    tabIndex={-1}
                    value={formData.hp_token}
                    onChange={(e) => setFormData({ ...formData, hp_token: e.target.value })}
                  />
                </div>

                {/* Full Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guide-name" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-1.5">
                      Full Name <span className="text-[#F06432]">*</span>
                    </label>
                    <input
                      type="text"
                      id="guide-name"
                      placeholder="e.g. Vikram Mehta"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-[#F06432] ${
                        errors.fullName ? 'border-red-500' : 'border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432]'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="guide-email" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-1.5">
                      Work Email <span className="text-[#F06432]">*</span>
                    </label>
                    <input
                      type="email"
                      id="guide-email"
                      placeholder="e.g. vikram@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-[#F06432] ${
                        errors.email ? 'border-red-500' : 'border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Company & Primary Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guide-company" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-1.5">
                      Company / Website <span className="text-[#707070] dark:text-[#A1A1AA] lowercase font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="guide-company"
                      placeholder="e.g. mycompany.com"
                      value={formData.companyOrWebsite}
                      onChange={(e) => setFormData({ ...formData, companyOrWebsite: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
                    />
                  </div>

                  <div>
                    <label htmlFor="guide-interest" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-1.5">
                      Primary Focus Area
                    </label>
                    <select
                      id="guide-interest"
                      value={formData.primaryInterest}
                      onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
                    >
                      <option value="B2B Lead Generation & Inbound SEO">B2B Lead Generation & Inbound SEO</option>
                      <option value="Local SEO & Google Business Profile">Local SEO & Google Map Pack</option>
                      <option value="Google Ads ROAS & PPC Management">Google Ads ROAS & Paid Search</option>
                      <option value="Meta Ads (FB/IG) Lead Generation">Meta Ads (FB/IG) Lead Generation</option>
                      <option value="Website Design & Conversion Optimization">Website Redesign & CRO Speed</option>
                    </select>
                  </div>
                </div>

                {/* Consent checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-[#F06432] focus:ring-[#F06432] border-[#E8E8E8] dark:border-[#2C2C32] dark:bg-[#1A1A1E] shrink-0"
                    />
                    <span className="text-[11px] text-[#707070] dark:text-[#A1A1AA] leading-snug">
                      I agree to receive the strategy guide and occasional agency marketing insights. We respect your inbox and never sell your information.
                    </span>
                  </label>
                  {errors.privacyConsent && (
                    <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.privacyConsent}</p>
                  )}
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 min-h-[46px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Generating Strategy Playbook Access...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Send Me The 2026 Strategy Guide</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

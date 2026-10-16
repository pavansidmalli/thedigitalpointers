import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface ContactFormProps {
  initialService?: string;
  onOpenPrivacy?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService, onOpenPrivacy }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: '+91',
    phoneNumber: '',
    companyOrWebsite: '',
    service: initialService || 'Website Design & Development',
    monthlyBudget: '₹50,000 - ₹1,50,000 / $1,000 - $2,500',
    projectDetails: '',
    privacyConsent: false,
    hp_token: '' // Honeypot field for spam bots
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid business email address.';
    }

    if (!formData.phoneNumber.trim() || formData.phoneNumber.trim().length < 6) {
      newErrors.phone = 'Please provide a valid contact phone number.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please share a brief summary of your project or goals (minimum 10 characters).';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must accept our privacy policy to proceed.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
          phone: `${formData.phoneCode} ${formData.phoneNumber}`,
          companyOrWebsite: formData.companyOrWebsite,
          service: formData.service,
          monthlyBudget: formData.monthlyBudget,
          projectDetails: formData.projectDetails,
          privacyConsent: formData.privacyConsent,
          hp_token: formData.hp_token
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Server validation failed. Please check your details and try again.');
      }

      setSubmittedLeadId(data.leadId);
    } catch (err: any) {
      setServerError(err.message || 'Unable to connect to the lead submission service. Please check your network or reach us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmittedLeadId(null);
    setFormData({
      fullName: '',
      email: '',
      phoneCode: '+91',
      phoneNumber: '',
      companyOrWebsite: '',
      service: 'Website Design & Development',
      monthlyBudget: '₹50,000 - ₹1,50,000 / $1,000 - $2,500',
      projectDetails: '',
      privacyConsent: false,
      hp_token: ''
    });
    setErrors({});
    setServerError(null);
  };

  if (submittedLeadId) {
    return (
      <div className="bg-white dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] p-6 sm:p-12 text-center shadow-[0_12px_36px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)] animate-in fade-in-50">
        <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-5 sm:mb-6">
          <CheckCircle2 className="w-7 sm:w-8 h-7 sm:h-8" />
        </div>

        <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#111111] dark:text-white">
          Enquiry Received Successfully
        </h3>

        <p className="text-xs sm:text-sm font-mono text-[#707070] dark:text-[#A1A1AA] mt-2">
          Reference Code: <span className="font-bold text-[#111111] dark:text-white">{submittedLeadId}</span>
        </p>

        <p className="text-xs sm:text-sm text-[#707070] dark:text-[#A1A1AA] max-w-md mx-auto mt-4 leading-relaxed">
          Thank you for reaching out to The Digital Pointers. Our senior digital marketing strategist will review your requirements, prepare initial observations, and reach out within 24 business hours.
        </p>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={resetForm}
            className="w-full sm:w-auto px-5 py-3 rounded-lg text-xs font-semibold text-[#111111] dark:text-white bg-[#F7F7F5] dark:bg-[#1E1E23] hover:bg-[#E8E8E8] dark:hover:bg-[#282830] transition-colors min-h-[44px]"
          >
            Submit Another Project Enquiry
          </button>

          <a
            href="https://wa.me/919705866749?text=Hello%20The%20Digital%20Pointers%2C%20I%20just%20submitted%20enquiry%20reference%20code%20"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fast-Track on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] p-5 sm:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Error</p>
            <p className="text-xs mt-0.5">{serverError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
        {/* Hidden Honeypot Spam Trap */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="hp_token"
            tabIndex={-1}
            autoComplete="off"
            value={formData.hp_token}
            onChange={(e) => setFormData({ ...formData, hp_token: e.target.value })}
          />
        </div>

        {/* Row 1: Name and Business Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-2">
              Full Name <span className="text-[#F06432]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg text-base sm:text-sm min-h-[44px] bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-[#F06432] ${
                errors.fullName ? 'border-red-500' : 'border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432]'
              }`}
            />
            {errors.fullName && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-2">
              Business Email <span className="text-[#F06432]">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. rahul@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg text-base sm:text-sm min-h-[44px] bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-[#F06432] ${
                errors.email ? 'border-red-500' : 'border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432]'
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Phone with Country Code and Company/Website */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-2">
              Phone Number with Code <span className="text-[#F06432]">*</span>
            </label>
            <div className="flex gap-2">
              <select
                value={formData.phoneCode}
                onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                className="w-24 sm:w-28 px-2 py-3 rounded-lg text-base sm:text-sm min-h-[44px] bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
                aria-label="Country Phone Code"
              >
                <option value="+91">+91 (IN)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+61">+61 (AU)</option>
                <option value="+65">+65 (SG)</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="e.g. 97058 66749"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className={`flex-1 px-4 py-3 rounded-lg text-base sm:text-sm min-h-[44px] bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-[#F06432] ${
                  errors.phone ? 'border-red-500' : 'border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432]'
                }`}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="companyOrWebsite" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-2">
              Company / Website URL <span className="text-[#707070] dark:text-[#A1A1AA] font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="companyOrWebsite"
              placeholder="e.g. companyname.com"
              value={formData.companyOrWebsite}
              onChange={(e) => setFormData({ ...formData, companyOrWebsite: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-base sm:text-sm min-h-[44px] bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
            />
          </div>
        </div>

        {/* Row 3: Service Interested In and Monthly Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-2">
              Primary Service Interested In <span className="text-[#F06432]">*</span>
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg text-base sm:text-sm min-h-[44px] bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-[#F06432] ${
                errors.service ? 'border-red-500' : 'border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432]'
              }`}
            >
              {servicesData.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Complete Multi-Channel Strategy">Complete Multi-Channel Growth Strategy</option>
            </select>
            {errors.service && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.service}</p>}
          </div>

          <div>
            <label htmlFor="monthlyBudget" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-2">
              Estimated Monthly Budget <span className="text-[#707070] dark:text-[#A1A1AA] font-normal lowercase">(optional)</span>
            </label>
            <select
              id="monthlyBudget"
              value={formData.monthlyBudget}
              onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-base sm:text-sm min-h-[44px] bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432] focus:outline-none focus:ring-1 focus:ring-[#F06432]"
            >
              <option value="₹30,000 - ₹50,000 / $500 - $1,000">₹30,000 - ₹50,000 / $500 - $1,000 (Emerging)</option>
              <option value="₹50,000 - ₹1,50,000 / $1,000 - $2,500">₹50,000 - ₹1,50,000 / $1,000 - $2,500 (Growth)</option>
              <option value="₹1,50,000 - ₹3,00,000 / $2,500 - $5,000">₹1,50,000 - ₹3,00,000 / $2,500 - $5,000 (Scale)</option>
              <option value="₹3,00,000+ / $5,000+">₹3,00,000+ / $5,000+ (Enterprise)</option>
              <option value="Flexible / Needs Recommendation">Flexible / Needs Recommendation</option>
            </select>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-[#111111] dark:text-white mb-2">
            Tell Us About Your Project & Goals <span className="text-[#F06432]">*</span>
          </label>
          <textarea
            id="projectDetails"
            rows={4}
            placeholder="Describe your current business model, challenges, timeline, or what you would like to achieve online..."
            value={formData.projectDetails}
            onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
            className={`w-full px-4 py-3 rounded-lg text-base sm:text-sm bg-white dark:bg-[#1A1A1E] text-[#111111] dark:text-white border transition-colors focus:outline-none focus:ring-1 focus:ring-[#F06432] ${
              errors.projectDetails ? 'border-red-500' : 'border-[#E8E8E8] dark:border-[#2C2C32] focus:border-[#F06432]'
            }`}
          />
          {errors.projectDetails && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.projectDetails}</p>}
        </div>

        {/* Privacy Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer py-1">
            <input
              type="checkbox"
              checked={formData.privacyConsent}
              onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-[#F06432] focus:ring-[#F06432] border-[#E8E8E8] dark:border-[#2C2C32] dark:bg-[#1A1A1E] shrink-0"
            />
            <span className="text-xs text-[#707070] dark:text-[#A1A1AA] leading-normal">
              I agree to The Digital Pointers{' '}
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-[#111111] dark:text-white underline hover:text-[#F06432]"
              >
                Privacy Policy
              </button>{' '}
              and give permission for your strategy team to contact me regarding my enquiry. We never share your data.
            </span>
          </label>
          {errors.privacyConsent && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.privacyConsent}</p>}
        </div>

        {/* Submit Button & WhatsApp Alternative */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 min-h-[48px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Enquiry to Backend...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Book a Free Strategy Consultation</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/919705866749?text=Hello%20The%20Digital%20Pointers%2C%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-sm font-semibold text-[#111111] dark:text-white bg-[#F7F7F5] dark:bg-[#1A1A1E] hover:bg-[#E8E8E8] dark:hover:bg-[#25252B] transition-colors flex items-center justify-center gap-2 border border-[#E8E8E8] dark:border-[#2C2C32] min-h-[48px]"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Prefer WhatsApp? Chat Directly</span>
          </a>
        </div>
      </form>
    </div>
  );
};

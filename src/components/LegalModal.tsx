import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#141417] rounded-2xl max-w-2xl w-full border border-[#E8E8E8] dark:border-[#26262B] shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-between bg-[#F7F7F5] dark:bg-[#18181C]">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#F06432]" />
            ) : (
              <FileText className="w-5 h-5 text-[#F06432]" />
            )}
            <h3 className="font-heading font-bold text-base text-[#111111] dark:text-white">
              {type === 'privacy' ? 'Digital Pointer Privacy Policy' : 'Digital Pointer Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#707070] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white hover:bg-[#E8E8E8] dark:hover:bg-[#222228] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-sm text-[#707070] dark:text-[#A1A1AA] space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-[#111111] dark:text-white">Last updated: October 2026</p>
              <p>
                At Digital Pointer, we respect your privacy. This policy outlines how we handle information submitted through our website and enquiry forms.
              </p>
              <h4 className="font-heading font-bold text-[#111111] dark:text-white text-base pt-2">1. Information We Collect</h4>
              <p>
                We collect personal information that you voluntarily provide when submitting a project enquiry or scheduling a consultation, including your name, business email, telephone number, company website, and project specifications.
              </p>
              <h4 className="font-heading font-bold text-[#111111] dark:text-white text-base pt-2">2. How We Use Your Information</h4>
              <p>
                We use your details exclusively to respond to your inquiry, perform requested website or SEO audits, and communicate about potential agency engagements. We do not sell, rent, or trade your contact data to third parties.
              </p>
              <h4 className="font-heading font-bold text-[#111111] dark:text-white text-base pt-2">3. Data Security & Storage</h4>
              <p>
                All form submissions are validated and processed over encrypted SSL/TLS protocols. Access to incoming leads is strictly restricted to authorized agency consultants.
              </p>
              <h4 className="font-heading font-bold text-[#111111] dark:text-white text-base pt-2">4. Contacting Us</h4>
              <p>
                If you have questions regarding your data or wish to request data deletion, contact us at <span className="font-mono text-[#111111] dark:text-white">privacy@digitalpointer.agency</span>.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#111111] dark:text-white">Last updated: October 2026</p>
              <p>
                These terms govern the use of the Digital Pointer website and our consultative service proposals.
              </p>
              <h4 className="font-heading font-bold text-[#111111] dark:text-white text-base pt-2">1. Scope of Engagement</h4>
              <p>
                Digital Pointer provides bespoke digital marketing services, including search engine optimization, website engineering, Google Business Profile management, and paid advertising. Specific deliverables and timelines are defined in written client scope documents.
              </p>
              <h4 className="font-heading font-bold text-[#111111] dark:text-white text-base pt-2">2. Search Engine & Platform Realities</h4>
              <p>
                In compliance with Google Webmaster and ad network standards, Digital Pointer does not make guarantees of specific numeric rankings or ad positions. Rankings and campaign outcomes depend on algorithmic conditions, market competition, and search engine platform policies.
              </p>
              <h4 className="font-heading font-bold text-[#111111] dark:text-white text-base pt-2">3. Intellectual Property</h4>
              <p>
                Upon receipt of full payment for design and development contracts, clients retain ownership of custom website assets, code, and ad account configurations built on their behalf.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E8E8E8] dark:border-[#26262B] bg-[#F7F7F5] dark:bg-[#18181C] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#111111] dark:bg-[#25252B] rounded-lg hover:bg-neutral-800 dark:hover:bg-[#32323A] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

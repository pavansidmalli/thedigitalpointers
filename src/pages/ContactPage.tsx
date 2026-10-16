import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin, MessageSquare, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
  onOpenPrivacy?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenPrivacy }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16 pb-20">
      <Breadcrumbs crumbs={[{ label: 'Contact Us' }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="text-xs font-mono font-semibold tracking-wider text-[#F06432] uppercase">
          Connect With The Digital Pointers
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-tight">
          Let’s Discuss Your Business Direction.
        </h1>
        <p className="text-base sm:text-lg text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
          Whether you need a full website redesign, Google Local Pack domination, or high-intent Google Ads management, we are here to provide clear, actionable advice.
        </p>
      </section>

      {/* Main Grid: Contact Info on Left, Lead Form on Right */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Channels & Credentials */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#F7F7F5] dark:bg-[#141417] rounded-2xl border border-[#E8E8E8] dark:border-[#26262B] p-7 space-y-6">
            <h2 className="font-heading font-bold text-xl text-[#111111] dark:text-white">
              Direct Inquiries
            </h2>

            <div className="space-y-4 text-sm text-[#111111] dark:text-white">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#1E1E24] border border-[#E8E8E8] dark:border-[#2C2C32] flex items-center justify-center text-[#F06432] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#707070] dark:text-[#A1A1AA] font-mono">Business Inquiries</div>
                  <a
                    href="mailto:hello@digitalpointer.agency"
                    className="font-semibold text-sm hover:text-[#F06432] transition-colors"
                  >
                    hello@digitalpointer.agency
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#1E1E24] border border-[#E8E8E8] dark:border-[#2C2C32] flex items-center justify-center text-[#F06432] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#707070] dark:text-[#A1A1AA] font-mono">Direct Strategy Line</div>
                  <a
                    href="tel:+919705866749"
                    className="font-semibold text-sm hover:text-[#F06432] transition-colors"
                  >
                    +91 9705866749 (India / Global)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#1E1E24] border border-[#E8E8E8] dark:border-[#2C2C32] flex items-center justify-center text-[#F06432] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#707070] dark:text-[#A1A1AA] font-mono">Headquarters</div>
                  <div className="font-medium text-sm text-[#111111] dark:text-white">
                    Hyderabad, Telangana, India
                  </div>
                  <div className="text-xs text-[#707070] dark:text-[#A1A1AA]">
                    Serving clients across India, North America, UK, UAE & Australia
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#1E1E24] border border-[#E8E8E8] dark:border-[#2C2C32] flex items-center justify-center text-[#F06432] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#707070] dark:text-[#A1A1AA] font-mono">Response Standard</div>
                  <div className="font-medium text-sm text-[#111111] dark:text-white">
                    Within 24 business hours
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="pt-4 border-t border-[#E8E8E8] dark:border-[#26262B]">
              <a
                href="https://wa.me/919705866749?text=Hello%20The%20Digital%20Pointers%2C%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Privacy & Anti-Spam Guarantee Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#141417] border border-[#E8E8E8] dark:border-[#26262B] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#111111] dark:text-white">
              <ShieldCheck className="w-4 h-4 text-[#F06432]" />
              <span>Our Client Privacy Pledge</span>
            </div>
            <p className="text-xs text-[#707070] dark:text-[#A1A1AA] leading-relaxed">
              We never share your contact details or project brief with external sales networks. Your enquiry is reviewed solely by our senior strategists under strict confidentiality.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Lead Capture Form */}
        <div className="lg:col-span-7">
          <ContactForm onOpenPrivacy={onOpenPrivacy} />
        </div>
      </section>
    </div>
  );
};

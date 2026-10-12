import React from 'react';
import { MousePointer2, ArrowUpRight, Mail, Phone, MapPin, MessageSquare, ShieldCheck, FileText, Sun, Moon, Lock } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenLeadsConsole: () => void;
  onOpenBlogCMS: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenLeadsConsole,
  onOpenBlogCMS
}) => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] dark:bg-[#070709] text-white border-t border-neutral-800 dark:border-[#1E1E22] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800 dark:border-[#1E1E22]">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white">
                <MousePointer2 className="w-4 h-4 text-[#F06432] fill-[#F06432]" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                Digital<span className="text-[#F06432]">Pointer</span>
              </span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              A premium digital marketing agency built for strategic clarity, sustainable organic search visibility, high-performing websites, and data-driven advertising ROI.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F06432] shrink-0" />
                <span>Headquartered in Bengaluru, India · Serving Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F06432] shrink-0" />
                <a href="mailto:hello@digitalpointer.agency" className="hover:text-white transition-colors">
                  hello@digitalpointer.agency
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F06432] shrink-0" />
                <a href="tel:+919845012345" className="hover:text-white transition-colors">
                  +91 98450 12345 (Direct Inquiries)
                </a>
              </div>
            </div>

            {/* Quick Action Badges / WhatsApp Direct & Theme Switch */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/919845012345?text=Hello%20Digital%20Pointer%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20marketing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors border border-neutral-700"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-400" />
              </a>

              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors border border-neutral-700"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-neutral-400" />}
                <span>{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <button onClick={() => handleLink('/')} className="hover:text-[#F06432] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/about/')} className="hover:text-[#F06432] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/services/')} className="hover:text-[#F06432] transition-colors">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/faqs/')} className="hover:text-[#F06432] transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/blog/')} className="hover:text-[#F06432] transition-colors">
                  Agency Insights Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('/contact/')} className="hover:text-[#F06432] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* All 8 Services */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Services & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-neutral-300">
              {servicesData.map((service) => (
                <button
                  key={service.slug}
                  onClick={() => handleLink(`/services/${service.slug}/`)}
                  className="text-left hover:text-[#F06432] transition-colors leading-snug line-clamp-1"
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Agency Utilities & Portals */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Agency Portals
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={onOpenBlogCMS}
                  className="text-left text-neutral-300 hover:text-[#F06432] flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>Blog Custom CMS</span>
                  <span className="text-[10px] text-[#F06432] bg-[#F06432]/10 px-1 py-0.5 rounded">Active</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {currentYear} Digital Pointer. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-neutral-300 transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-neutral-300 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

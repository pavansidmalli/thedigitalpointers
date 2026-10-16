import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, MousePointer2, Sun, Moon, Phone, MessageSquare, Download, UserCheck, Lock } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenStrategyGuide: () => void;
  onOpenLeadsConsole: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenStrategyGuide, onOpenLeadsConsole }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for subtle shadow/border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility: Escape key closes menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentActive = (path: string) => {
    if (path === '/' && (currentPath === '/' || currentPath === '')) return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const isServicesActive = currentPath.startsWith('/services');

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0C0C0E]/95 backdrop-blur-md border-b border-[#E8E8E8] dark:border-[#222226] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.4)]'
          : 'bg-white dark:bg-[#0C0C0E] border-b border-[#E8E8E8] dark:border-[#222226]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 sm:gap-8">
          {/* Zone 1: Brand Wordmark with minimal pointer symbol */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F06432] rounded-md min-h-[44px]"
              aria-label="The Digital Pointers Homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-[#111111] dark:bg-[#1A1A1E] dark:border dark:border-[#2E2E34] flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-105">
                <MousePointer2 className="w-4 h-4 text-[#F06432] fill-[#F06432]" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#111111] dark:text-white">
                The Digital <span className="text-[#F06432]">Pointers</span>
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F06432] rounded px-1.5 py-1 min-h-[36px] ${
                isCurrentActive('/') && !isServicesActive
                  ? 'text-[#F06432] font-semibold'
                  : 'text-[#111111] dark:text-[#E4E4E7] hover:text-[#F06432] dark:hover:text-[#F06432]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/about/')}
              className={`text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F06432] rounded px-1.5 py-1 min-h-[36px] ${
                isCurrentActive('/about/')
                  ? 'text-[#F06432] font-semibold'
                  : 'text-[#111111] dark:text-[#E4E4E7] hover:text-[#F06432] dark:hover:text-[#F06432]'
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F06432] rounded px-1.5 py-1 min-h-[36px] ${
                  isServicesActive
                    ? 'text-[#F06432] font-semibold'
                    : 'text-[#111111] dark:text-[#E4E4E7] hover:text-[#F06432] dark:hover:text-[#F06432]'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-[#F06432]' : 'text-[#707070] dark:text-[#A1A1AA]'
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] max-w-[calc(100vw-2rem)] bg-white dark:bg-[#141417] rounded-xl border border-[#E8E8E8] dark:border-[#26262B] shadow-[0_12px_36px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6 transition-all duration-150 animate-in fade-in-50 zoom-in-95"
                  role="menu"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] dark:border-[#26262B] mb-4">
                    <span className="text-xs font-semibold tracking-wider text-[#707070] dark:text-[#A1A1AA] uppercase">
                      Agency Capabilities
                    </span>
                    <button
                      onClick={() => handleNavClick('/services/')}
                      className="text-xs font-semibold text-[#F06432] hover:underline flex items-center gap-1"
                    >
                      View All Services <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {servicesData.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => handleNavClick(`/services/${service.slug}/`)}
                        className={`text-left p-2.5 rounded-lg transition-colors group flex flex-col ${
                          currentPath === `/services/${service.slug}/`
                            ? 'bg-[#F7F7F5] dark:bg-[#1E1E23]'
                            : 'hover:bg-[#F7F7F5] dark:hover:bg-[#1E1E23]'
                        }`}
                        role="menuitem"
                      >
                        <span className="text-sm font-semibold text-[#111111] dark:text-white group-hover:text-[#F06432] transition-colors leading-snug">
                          {service.title}
                        </span>
                        <span className="text-xs text-[#707070] dark:text-[#A1A1AA] line-clamp-1 mt-0.5">
                          {service.tagline}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8E8E8] dark:border-[#26262B] bg-[#F7F7F5] dark:bg-[#18181C] -mx-6 -mb-6 p-4 rounded-b-xl flex items-center justify-between">
                    <div className="text-xs text-[#707070] dark:text-[#A1A1AA]">
                      Need a custom growth strategy?
                    </div>
                    <button
                      onClick={() => handleNavClick('/contact/')}
                      className="text-xs font-semibold text-[#111111] dark:text-white hover:text-[#F06432] dark:hover:text-[#F06432] flex items-center gap-1"
                    >
                      Speak with our strategy team <ArrowRight className="w-3 h-3 text-[#F06432]" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/case-studies/')}
              className={`text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F06432] rounded px-1.5 py-1 min-h-[36px] ${
                isCurrentActive('/case-studies/') || isCurrentActive('/portfolio/')
                  ? 'text-[#F06432] font-semibold'
                  : 'text-[#111111] dark:text-[#E4E4E7] hover:text-[#F06432] dark:hover:text-[#F06432]'
              }`}
            >
              Case Studies
            </button>

            <button
              onClick={() => handleNavClick('/faqs/')}
              className={`text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F06432] rounded px-1.5 py-1 min-h-[36px] ${
                isCurrentActive('/faqs/')
                  ? 'text-[#F06432] font-semibold'
                  : 'text-[#111111] dark:text-[#E4E4E7] hover:text-[#F06432] dark:hover:text-[#F06432]'
              }`}
            >
              FAQs
            </button>

            <button
              onClick={() => handleNavClick('/blog/')}
              className={`text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F06432] rounded px-1.5 py-1 min-h-[36px] ${
                isCurrentActive('/blog/')
                  ? 'text-[#F06432] font-semibold'
                  : 'text-[#111111] dark:text-[#E4E4E7] hover:text-[#F06432] dark:hover:text-[#F06432]'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleNavClick('/contact/')}
              className={`text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F06432] rounded px-1.5 py-1 min-h-[36px] ${
                isCurrentActive('/contact/')
                  ? 'text-[#F06432] font-semibold'
                  : 'text-[#111111] dark:text-[#E4E4E7] hover:text-[#F06432] dark:hover:text-[#F06432]'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Zone 3: CTA Button + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNavClick('/contact/')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-all duration-150 shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F06432] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0C0C0E] min-h-[44px]"
            >
              Get a Free Consultation
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#111111] dark:text-white hover:bg-[#F7F7F5] dark:hover:bg-[#1A1A1E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F06432] min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white dark:bg-[#0C0C0E] z-50 overflow-y-auto px-5 py-6 flex flex-col justify-between shadow-2xl border-t border-[#E8E8E8] dark:border-[#222226]">
            <div className="space-y-2">
              <button
                onClick={() => handleNavClick('/')}
                className={`flex items-center justify-between w-full text-left py-3 px-2 text-base font-semibold border-b border-[#E8E8E8]/50 dark:border-[#222226] min-h-[44px] ${
                  isCurrentActive('/') && !isServicesActive ? 'text-[#F06432]' : 'text-[#111111] dark:text-white'
                }`}
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-[#707070] dark:text-[#A1A1AA]" />
              </button>

              <button
                onClick={() => handleNavClick('/about/')}
                className={`flex items-center justify-between w-full text-left py-3 px-2 text-base font-semibold border-b border-[#E8E8E8]/50 dark:border-[#222226] min-h-[44px] ${
                  isCurrentActive('/about/') ? 'text-[#F06432]' : 'text-[#111111] dark:text-white'
                }`}
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 text-[#707070] dark:text-[#A1A1AA]" />
              </button>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-3 px-2 border-b border-[#E8E8E8]/50 dark:border-[#222226] text-left min-h-[44px]"
                  onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                >
                  <span
                    className={`text-base font-semibold ${
                      isServicesActive ? 'text-[#F06432]' : 'text-[#111111] dark:text-white'
                    }`}
                  >
                    Services
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesExpanded ? 'rotate-180 text-[#F06432]' : 'text-[#707070] dark:text-[#A1A1AA]'
                    }`}
                  />
                </button>

                {isMobileServicesExpanded && (
                  <div className="pl-3 py-2 space-y-1 border-l-2 border-[#F06432]/40 ml-2 mt-2">
                    <button
                      onClick={() => handleNavClick('/services/')}
                      className="block w-full text-left py-2 px-2 text-xs font-bold text-[#F06432] uppercase tracking-wide min-h-[36px]"
                    >
                      View All Services Overview →
                    </button>
                    {servicesData.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => handleNavClick(`/services/${service.slug}/`)}
                        className={`block w-full text-left py-2 px-2 text-sm min-h-[40px] rounded-md ${
                          currentPath === `/services/${service.slug}/`
                            ? 'text-[#F06432] font-semibold bg-[#F7F7F5] dark:bg-[#1E1E23]'
                            : 'text-[#111111] dark:text-[#E4E4E7]'
                        }`}
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('/case-studies/')}
                className={`flex items-center justify-between w-full text-left py-3 px-2 text-base font-semibold border-b border-[#E8E8E8]/50 dark:border-[#222226] min-h-[44px] ${
                  isCurrentActive('/case-studies/') || isCurrentActive('/portfolio/') ? 'text-[#F06432]' : 'text-[#111111] dark:text-white'
                }`}
              >
                <span>Case Studies</span>
                <ArrowRight className="w-4 h-4 text-[#707070] dark:text-[#A1A1AA]" />
              </button>

              <button
                onClick={() => handleNavClick('/faqs/')}
                className={`flex items-center justify-between w-full text-left py-3 px-2 text-base font-semibold border-b border-[#E8E8E8]/50 dark:border-[#222226] min-h-[44px] ${
                  isCurrentActive('/faqs/') ? 'text-[#F06432]' : 'text-[#111111] dark:text-white'
                }`}
              >
                <span>FAQs</span>
                <ArrowRight className="w-4 h-4 text-[#707070] dark:text-[#A1A1AA]" />
              </button>

              <button
                onClick={() => handleNavClick('/blog/')}
                className={`flex items-center justify-between w-full text-left py-3 px-2 text-base font-semibold border-b border-[#E8E8E8]/50 dark:border-[#222226] min-h-[44px] ${
                  isCurrentActive('/blog/') ? 'text-[#F06432]' : 'text-[#111111] dark:text-white'
                }`}
              >
                <span>Blog</span>
                <ArrowRight className="w-4 h-4 text-[#707070] dark:text-[#A1A1AA]" />
              </button>

              <button
                onClick={() => handleNavClick('/contact/')}
                className={`flex items-center justify-between w-full text-left py-3 px-2 text-base font-semibold border-b border-[#E8E8E8]/50 dark:border-[#222226] min-h-[44px] ${
                  isCurrentActive('/contact/') ? 'text-[#F06432]' : 'text-[#111111] dark:text-white'
                }`}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#707070] dark:text-[#A1A1AA]" />
              </button>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-[#E8E8E8] dark:border-[#222226] mt-6 space-y-4">
              <div className="flex items-center justify-between bg-[#F7F7F5] dark:bg-[#141417] p-3 rounded-xl border border-[#E8E8E8] dark:border-[#26262B]">
                <span className="text-xs font-medium text-[#111111] dark:text-white">Theme Appearance</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#1E1E24] border border-[#E8E8E8] dark:border-[#2C2C32] text-[#111111] dark:text-white min-h-[36px]"
                >
                  {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-[#707070]" />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>

              {/* Mobile Download Strategy Guide */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenStrategyGuide();
                }}
                className="w-full py-3 rounded-xl text-center text-xs font-semibold text-[#111111] dark:text-white bg-[#F7F7F5] dark:bg-[#1A1A1E] border border-[#E8E8E8] dark:border-[#2C2C32] hover:bg-[#E8E8E8] dark:hover:bg-[#25252B] transition-colors min-h-[44px] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#F06432]" />
                <span>Download 2026 Strategy Guide</span>
              </button>


              <button
                onClick={() => handleNavClick('/contact/')}
                className="w-full py-3.5 rounded-xl text-center font-semibold text-white bg-[#F06432] hover:bg-[#d95526] transition-colors min-h-[48px] shadow-sm flex items-center justify-center gap-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919705866749"
                  className="py-2.5 px-3 rounded-lg text-center text-xs font-semibold text-[#111111] dark:text-white bg-[#F7F7F5] dark:bg-[#18181C] border border-[#E8E8E8] dark:border-[#26262B] flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F06432]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919705866749?text=Hello%20The%20Digital%20Pointers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg text-center text-xs font-semibold text-white bg-emerald-600 flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

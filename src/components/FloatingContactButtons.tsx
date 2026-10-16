import React from 'react';
import { Phone } from 'lucide-react';

export const FloatingContactButtons: React.FC = () => {
  const phoneNumber = '+919705866749';
  const displayPhone = '+91 9705866749';
  const whatsappUrl = `https://wa.me/919705866749?text=${encodeURIComponent(
    'Hello The Digital Pointers, I would like to inquire about your digital marketing services.'
  )}`;

  return (
    <>
      {/* ========================================================
          BOTTOM-LEFT CORNER: DIRECT CALL BUTTON
          ======================================================== */}
      <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 group">
        <a
          href={`tel:${phoneNumber}`}
          aria-label={`Call The Digital Pointers at ${displayPhone}`}
          title={`Call ${displayPhone}`}
          className="flex items-center gap-2.5 bg-[#111111] dark:bg-[#1A1A1E] text-white hover:bg-[#F06432] dark:hover:bg-[#F06432] p-3.5 sm:px-4 sm:py-3 rounded-full border border-neutral-700/80 dark:border-neutral-700 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_25px_rgba(240,100,50,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F06432] focus-visible:ring-offset-2"
        >
          <div className="relative flex items-center justify-center">
            {/* Subtle beacon pulse */}
            <span className="absolute -inset-1 rounded-full bg-[#F06432]/40 animate-ping opacity-60 pointer-events-none" />
            <div className="w-5 h-5 flex items-center justify-center relative">
              <Phone className="w-4 h-4 text-[#F06432] group-hover:text-white transition-colors animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white/90 leading-tight">
              Direct Call
            </span>
            <span className="text-xs font-bold tracking-tight text-white leading-tight">
              {displayPhone}
            </span>
          </div>

          {/* Tooltip for small screens */}
          <span className="sm:hidden absolute left-full ml-3 px-2.5 py-1 bg-[#111111] text-white text-[11px] font-semibold rounded-md shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            Call {displayPhone}
          </span>
        </a>
      </div>

      {/* ========================================================
          BOTTOM-RIGHT CORNER: DIRECT WHATSAPP BUTTON
          ======================================================== */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with The Digital Pointers on WhatsApp"
          title="Chat on WhatsApp"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <div className="relative flex items-center justify-center">
            {/* Pulsing ring indicator */}
            <span className="absolute -inset-1 rounded-full bg-white/40 animate-ping opacity-75 pointer-events-none" />
            <svg
              className="w-5 h-5 fill-current relative"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-100 leading-tight">
              Online Now
            </span>
            <span className="text-xs font-bold tracking-tight text-white leading-tight">
              Chat on WhatsApp
            </span>
          </div>

          {/* Tooltip for small screens */}
          <span className="sm:hidden absolute right-full mr-3 px-2.5 py-1 bg-[#111111] text-white text-[11px] font-semibold rounded-md shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            WhatsApp Us
          </span>
        </a>
      </div>
    </>
  );
};

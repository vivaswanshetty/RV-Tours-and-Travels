"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 print:hidden">
      {/* Floating Prompt Tooltip / Quick Dialog */}
      {isOpen && (
        <div className="bg-[#14120F] text-[#F6F3EC] border border-[#B08D3F] rounded-lg p-4 shadow-2xl w-72 sm:w-80 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#383229] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1F4C4C] flex items-center justify-center text-xs font-bold text-[#F6F3EC] border border-[#B08D3F]">
                RV
              </div>
              <div>
                <div className="font-display text-xs font-bold text-[#F6F3EC]">
                  {BUSINESS_INFO.proprietor}
                </div>
                <div className="font-mono text-[9px] text-[#C9A227] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B]" />
                  <span>Online · RV Tours &amp; Travels</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-[#F6F3EC]/60 hover:text-[#F6F3EC] p-1 rounded"
              aria-label="Close message preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="font-body text-xs text-[#F6F3EC]/85 mb-3 leading-relaxed">
            Namaskara! Traveling to/from Udupi, Mangalore Airport, or planning a tour in Karnataka? Send me a message for instant rates.
          </p>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 bg-[#1F4C4C] hover:bg-[#2E6B6B] text-[#F6F3EC] font-mono text-xs uppercase tracking-wider rounded font-bold flex items-center justify-center gap-2 transition-colors border border-[#B08D3F]"
          >
            <WhatsAppIcon className="w-4 h-4" withOriginalColor />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Main Floating Bubble Button */}
      <div className="relative group">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 bg-[#14120F] text-[#C9A227] border-2 border-[#B08D3F] rounded-full flex items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:scale-105 hover:border-[#E0C068] active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#B08D3F]/50"
          aria-label="Chat on WhatsApp with R Ramesh"
          title="Direct WhatsApp with R Ramesh"
        >
          <WhatsAppIcon className="w-7 h-7" withOriginalColor />
          
          {/* Pulsing indicator ring */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A227] opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#2E6B6B] border border-[#F6F3EC]" />
          </span>
        </a>

        {/* Quick Hover Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#14120F] text-[#F6F3EC] border border-[#383229] px-3 py-1.5 rounded font-mono text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg hidden sm:block">
          Chat with R Ramesh
        </div>
      </div>
    </div>
  );
}

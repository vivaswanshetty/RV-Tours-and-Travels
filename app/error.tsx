"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "@/components/TicketButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Error caught by error boundary:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#14120F] text-[#F6F3EC] flex flex-col justify-between selection:bg-[#B08D3F] selection:text-[#14120F] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#B08D3F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="p-6 sm:p-8 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#383229]/60 relative z-10">
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#2A241C] to-[#12100C] border border-[#B08D3F] flex items-center justify-center font-display text-lg font-bold text-[#C9A227] shadow-[0_0_15px_rgba(201,162,39,0.3)]">
            RV
          </div>
          <div>
            <div className="font-display text-base font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors">
              RV TOURS &amp; TRAVELS
            </div>
            <div className="font-mono text-[10px] text-[#B08D3F] tracking-widest uppercase">
              UDUPI, KARNATAKA
            </div>
          </div>
        </Link>

        <div className="font-mono text-xs text-red-400 px-3 py-1 bg-[#1C1914] border border-red-900/50 rounded">
          STATUS: ENGINE HOLD
        </div>
      </header>

      {/* Center 500 Boarding Pass Ticket Stub */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10 my-8">
        <div className="max-w-xl w-full bg-[#1C1914] border border-red-900/60 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center space-y-6">
          {/* Top Notch Perforation */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#14120F] rounded-full border border-red-900/60" />

          {/* Error 500 Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#14120F] border border-red-900/60 rounded-full font-mono text-xs text-red-400 tracking-widest uppercase">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span>DISPATCH INTERRUPTED // ERROR 500</span>
          </div>

          <div className="space-y-2">
            <div className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-[#E0C068]">
              500
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#F6F3EC]">
              Temporary System Hold
            </h1>
          </div>

          <p className="font-body text-sm sm:text-base text-[#F6F3EC]/80 max-w-md mx-auto leading-relaxed">
            An unexpected road condition occurred while rendering this page. You can retry dispatching the page or return to the main terminal.
          </p>

          {error?.digest && (
            <div className="font-mono text-[10px] text-[#F6F3EC]/40 bg-[#14120F] p-2 rounded border border-[#383229]">
              ERROR ID: {error.digest}
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="px-5 py-2.5 bg-[#B08D3F] hover:bg-[#E0C068] text-[#14120F] rounded font-mono text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 transition-colors shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Dispatch</span>
            </button>

            <TicketButton
              href="/"
              variant="secondary-outline"
              size="md"
              ticketCode="HOME"
              icon={<Home className="w-4 h-4" />}
            >
              Return Home
            </TicketButton>
          </div>

          <div className="pt-4 border-t border-[#383229]/60 font-mono text-xs text-[#F6F3EC]/60 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="hover:text-[#E0C068] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Helpline: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span>·</span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E0C068] transition-colors flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" withOriginalColor />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center font-mono text-[11px] text-[#F6F3EC]/50 border-t border-[#383229]/60 relative z-10">
        © {new Date().getFullYear()} {BUSINESS_INFO.name}. Managed by {BUSINESS_INFO.proprietor}. Udupi, Karnataka.
      </footer>
    </main>
  );
}

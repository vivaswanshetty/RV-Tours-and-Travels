import React from "react";
import Link from "next/link";
import { Compass, Home, Phone, ArrowLeft } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "@/components/TicketButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#14120F] text-[#F6F3EC] flex flex-col justify-between selection:bg-[#B08D3F] selection:text-[#14120F] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#B08D3F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B08D3F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Stamp */}
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

        <div className="font-mono text-xs text-[#E0C068] px-3 py-1 bg-[#1C1914] border border-[#383229] rounded">
          WAYPOINT: UNRESOLVED
        </div>
      </header>

      {/* Center 404 Boarding Pass Ticket Stub */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10 my-8">
        <div className="max-w-xl w-full bg-[#1C1914] border border-[#B08D3F] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center space-y-6">
          {/* Top Notch Perforations */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#14120F] rounded-full border border-[#B08D3F]/60" />

          {/* 404 Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#14120F] border border-[#B08D3F]/50 rounded-full font-mono text-xs text-[#E0C068] tracking-widest uppercase">
            <Compass className="w-4 h-4 text-[#C9A227] animate-spin" style={{ animationDuration: "12s" }} />
            <span>ROUTE DETOUR // ERROR 404</span>
          </div>

          <div className="space-y-2">
            <div className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-[#E0C068]">
              404
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#F6F3EC]">
              Destination Not Found
            </h1>
          </div>

          <p className="font-body text-sm sm:text-base text-[#F6F3EC]/80 max-w-md mx-auto leading-relaxed">
            The requested waypoint or route URL is not listed in our active Karnataka dispatch manifest. Let us guide you back to the main terminal.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <TicketButton
              href="/"
              variant="primary-gold"
              size="md"
              ticketCode="HOME"
              icon={<Home className="w-4 h-4" />}
            >
              Return to Main Terminal
            </TicketButton>

            <TicketButton
              href={BUSINESS_INFO.whatsappUrl}
              isExternal
              variant="secondary-outline"
              size="md"
              ticketCode="DISPATCH"
              icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
            >
              Enquire on WhatsApp
            </TicketButton>
          </div>

          <div className="pt-4 border-t border-[#383229]/60 font-mono text-xs text-[#F6F3EC]/60 flex items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="hover:text-[#E0C068] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Helpline: {BUSINESS_INFO.phoneDisplay}</span>
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

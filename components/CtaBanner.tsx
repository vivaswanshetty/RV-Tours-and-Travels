"use client";

import { Phone, ArrowRight, Compass } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-[#F6F3EC] relative border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#14120F] text-[#F6F3EC] border-2 border-[#B08D3F] rounded-xl p-5 sm:p-12 shadow-2xl overflow-hidden">
          {/* Background Grid & Vignette */}
          <div className="absolute inset-0 bg-route-dots opacity-10 pointer-events-none" />

          {/* Ticket Perforation Notch (Left & Right) */}
          <div className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F6F3EC] border-r-2 border-[#B08D3F]" />
          <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F6F3EC] border-l-2 border-[#B08D3F]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C9A227] tracking-widest uppercase font-bold">
                <Compass className="w-3.5 h-3.5" />
                <span>DIRECT CHAUFFEUR BOOKING</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F6F3EC]">
                Ready to Redefine Your Next Journey?
              </h2>
              <p className="font-body text-base text-[#F6F3EC]/80 leading-relaxed font-light">
                Message R Ramesh directly on WhatsApp with your pickup location, destination, and travel dates for an immediate, transparent quote.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <TicketButton
                href={BUSINESS_INFO.whatsappUrl}
                isExternal
                variant="primary-gold"
                size="lg"
                ticketCode="INSTANT"
                icon={<WhatsAppIcon className="w-5 h-5" withOriginalColor />}
                className="w-full sm:w-auto"
              >
                Book on WhatsApp
              </TicketButton>

              <TicketButton
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                isExternal
                variant="dark-ticket"
                size="lg"
                icon={<Phone className="w-5 h-5 shrink-0" />}
                className="w-full sm:w-auto whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Call: {BUSINESS_INFO.phoneDisplay}</span>
              </TicketButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

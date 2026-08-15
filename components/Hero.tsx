"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight, Compass, ShieldCheck, MapPin, Radio } from "lucide-react";
import { BUSINESS_INFO, DEPARTURE_BOARD_DATA } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[90vh] lg:min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-[#14120F] text-[#F6F3EC] flex items-center overflow-hidden border-b border-[#383229]"
    >
      {/* Background Graphic with Atmospheric Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-road.jpg"
          alt="Scenic coastal Karnataka and Western Ghats highway route - RV Tours & Travels"
          fill
          priority
          className="object-cover object-center opacity-35 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14120F] via-[#14120F]/90 to-[#14120F]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14120F] via-transparent to-[#14120F]/80" />
      </div>

      {/* Decorative Grid and Hairlines */}
      <div className="absolute inset-0 z-0 bg-route-dots opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Waypoint 01 Eyebrow Manifest Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1914] border border-[#B08D3F]/50 rounded text-xs font-mono tracking-widest text-[#E0C068] uppercase mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
          <span>WAYPOINT 01 // ORIGIN: UDUPI, KA (13.34° N, 74.74° E)</span>
        </div>

        {/* Asymmetric 60/40 Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (~60%) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="font-mono text-xs sm:text-sm text-[#B08D3F] uppercase tracking-[0.25em] font-semibold">
                — {BUSINESS_INFO.tagline}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-[#F6F3EC] leading-[1.1]">
                Boutique Chauffeur &amp; Taxi Service in <span className="italic text-[#C9A227]">Coastal Karnataka</span>
              </h1>
            </div>

            <p className="font-body text-base sm:text-lg text-[#F6F3EC]/85 max-w-2xl leading-relaxed font-light">
              Managed directly by proprietor <strong className="font-medium text-[#F6F3EC]">{BUSINESS_INFO.proprietor}</strong> out of Udupi. Punctual airport transfers, tailored temple circuits, and reliable inter-city journeys across all destinations in Karnataka.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <TicketButton
                href={BUSINESS_INFO.whatsappUrl}
                isExternal
                variant="primary-gold"
                size="lg"
                ticketCode="DIRECT DISPATCH"
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

            {/* Quick Manifest Bullet Strip */}
            <div className="pt-4 border-t border-[#383229]/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#F6F3EC]/70">
              <div className="flex items-center gap-2">
                <span className="text-[#B08D3F]">✓</span>
                <span>Flight-Timed Pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B08D3F]">✓</span>
                <span>All Vehicle Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#B08D3F]">✓</span>
                <span>Direct Owner Contact</span>
              </div>
            </div>
          </div>

          {/* Right Column (~40%): Departure Board Panel */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#1C1914] border border-[#B08D3F] rounded-lg p-5 sm:p-6 shadow-2xl overflow-hidden">
              {/* Board Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#383229] mb-4">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#C9A227] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#E0C068] font-bold">
                    RV TRAVEL MANIFEST
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-[#1F4C4C] text-[#F6F3EC] rounded border border-[#B08D3F]/40 uppercase tracking-widest">
                  LIVE DESK
                </span>
              </div>

              {/* Monospace Departure Board Table */}
              <div className="space-y-3 font-mono text-xs">
                {DEPARTURE_BOARD_DATA.map((item, index) => (
                  <div
                    key={index}
                    className="p-2.5 bg-[#14120F] border border-[#383229]/80 rounded flex flex-col gap-1 transition-colors hover:border-[#B08D3F]/60"
                  >
                    <div className="flex items-center justify-between text-[10px] text-[#B08D3F] uppercase tracking-wider">
                      <span>{item.code}</span>
                      <span className="text-[#C9A227] font-semibold">{item.status}</span>
                    </div>
                    <div className="text-sm font-semibold text-[#F6F3EC] tracking-tight">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Perforated Ticket Stub Footer in the Board */}
              <div className="mt-5 pt-4 border-t border-dashed border-[#B08D3F]/40 flex items-center justify-between font-mono text-[11px] text-[#F6F3EC]/70">
                <span>BASE: UDUPI, KA</span>
                <span className="text-[#C9A227] font-bold">NO HIDDEN CHARGES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

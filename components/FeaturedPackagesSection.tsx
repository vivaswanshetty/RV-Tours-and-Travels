"use client";

import React from "react";
import Link from "next/link";
import { TOUR_PACKAGES, BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";
import { Clock, Car, Compass, ArrowRight } from "lucide-react";

export default function FeaturedPackagesSection() {
  // Show top 3 featured packages on the home page
  const featured = TOUR_PACKAGES.slice(0, 3);

  return (
    <section id="packages" className="py-20 sm:py-28 bg-[#14120F] text-[#F6F3EC] relative border-b border-[#383229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#E0C068]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
              <span>WAYPOINT 04 // 2026 TOUR PACKAGES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC]">
              Popular Karnataka Tour Packages
            </h2>
            <p className="font-body text-base sm:text-lg text-[#F6F3EC]/80 font-light leading-relaxed">
              Curated road itineraries for temple darshans, coastal highway escapes, and Western Ghats hill stations with dedicated chauffeur service.
            </p>
          </div>

          <div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1C1914] text-[#E0C068] hover:text-[#F6F3EC] border border-[#B08D3F] rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#B08D3F]/20 shadow-lg"
            >
              <span>View All 2026 Tour Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Packages 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-[#1C1914] border border-[#383229] hover:border-[#B08D3F] rounded-xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 bg-[#14120F] text-[#E0C068] border border-[#B08D3F]/50 rounded">
                    {pkg.badge}
                  </span>
                  <span className="font-mono text-xs text-[#F6F3EC]/70 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                    {pkg.duration}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="font-mono text-xs text-[#B08D3F] mt-1">
                    {pkg.subtitle}
                  </p>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#F6F3EC]/75 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Key stops snippet */}
                <div className="p-3 bg-[#14120F] border border-[#383229]/80 rounded-lg space-y-1 font-mono text-xs text-[#F6F3EC]/80">
                  <span className="text-[10px] text-[#B08D3F] uppercase font-bold block">ROUTE STOPS:</span>
                  <p className="truncate text-xs">{pkg.stops.join(" ➔ ")}</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#383229]">
                <TicketButton
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                  isExternal
                  variant="primary-gold"
                  size="sm"
                  ticketCode="BOOK 2026"
                  icon={<WhatsAppIcon className="w-3.5 h-3.5" withOriginalColor />}
                  className="w-full justify-center"
                >
                  Enquire on WhatsApp
                </TicketButton>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 bg-[#1C1914] border border-[#383229] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#C9A227] shrink-0" />
            <span className="font-mono text-xs text-[#F6F3EC]/80">
              Want a customized multi-day itinerary across Karnataka or any neighboring state? We arrange custom vehicles and route scheduling.
            </span>
          </div>
          <Link
            href="/packages"
            className="shrink-0 text-xs font-mono text-[#C9A227] hover:underline font-bold uppercase tracking-wider"
          >
            Explore Complete Travel Guide ➔
          </Link>
        </div>
      </div>
    </section>
  );
}

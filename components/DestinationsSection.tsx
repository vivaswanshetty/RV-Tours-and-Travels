"use client";

import React from "react";
import Image from "next/image";
import { DESTINATIONS, BUSINESS_INFO } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";
import DestinationImageCarousel from "./DestinationImageCarousel";
import { openTripBookingModal } from "./StickyQuoteTab";

export default function DestinationsSection() {
  const featuredDestination = DESTINATIONS[0];
  const supportingDestinations = DESTINATIONS.slice(1);

  return (
    <section
      id="destinations"
      className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-[#1F4C4C]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
              <span>POPULAR DESTINATIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
              Where We Drive: Coastal Karnataka &amp; Beyond
            </h2>
            <p className="font-body text-base sm:text-lg text-[#14120F]/80 leading-relaxed font-light">
              Transparent, dedicated chauffeur services originating from Udupi to premier coastal, pilgrimage, and interstate destinations.
            </p>
          </div>

          <div className="shrink-0 font-body text-xs text-[#14120F]/60">
            <span className="text-[#B08D3F] font-bold">4 CORE SECTORS</span> · DIRECT BOOKING
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Destination: Udupi & Coastal Karnataka (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative bg-[#EFEAE0] text-[#14120F] border border-[#DCD4C4] rounded-xl overflow-hidden shadow-lg flex-1 flex flex-col justify-between group transition-all duration-300 hover:border-[#B08D3F]">
              {/* Card Top: Dynamic Landmark Carousel */}
              <div>
                <DestinationImageCarousel
                  images={featuredDestination.images}
                  fallbackSrc={featuredDestination.imageSrc}
                  fallbackAlt={featuredDestination.imageAlt}
                  stampBadge={featuredDestination.badge}
                  className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border-b border-[#DCD4C4]"
                  priority
                  staggerOffsetMs={0}
                />

                {/* Card Main Body */}
                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14120F]">
                    {featuredDestination.name}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-[#14120F]/80 leading-relaxed font-light">
                    {featuredDestination.description}
                  </p>
                </div>
              </div>

              {/* Action Base */}
              <div className="mt-4 border-t border-[#DCD4C4] p-6 bg-[#E5DFD1]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="font-body text-xs text-[#14120F]/70 text-center sm:text-left">
                  <div className="text-[11px] text-[#1F4C4C] uppercase tracking-wider font-semibold">DIRECT OWNER BOOKING</div>
                  <div>Direct with Proprietor R Ramesh · No Middlemen</div>
                </div>

                <button
                  type="button"
                  onClick={() => openTripBookingModal({ destination: featuredDestination.name, interest: featuredDestination.name })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-[#14120F] hover:bg-[#B08D3F] text-[#E0C068] hover:text-[#14120F] border border-[#B08D3F] hover:border-[#E0C068] font-body text-xs uppercase font-bold tracking-wide transition-colors cursor-pointer shadow-md whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" withOriginalColor />
                  <span>Plan This Trip</span>
                </button>
              </div>
            </div>
          </div>

          {/* Supporting Cards: 3 Stacked Cards (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {supportingDestinations.map((dest, idx) => {
              return (
                <div
                  key={dest.id}
                  className="relative bg-[#EFEAE0] text-[#14120F] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-xl overflow-hidden shadow-sm group transition-all duration-300 flex flex-col sm:flex-row"
                >
                  {/* Left: Image section */}
                  <DestinationImageCarousel
                    images={dest.images}
                    fallbackSrc={dest.imageSrc}
                    fallbackAlt={dest.imageAlt}
                    stampBadge={dest.badge}
                    className="relative w-full sm:w-[42%] h-48 sm:h-auto min-h-[180px] shrink-0 overflow-hidden border-b sm:border-b-0 sm:border-r border-[#DCD4C4]"
                    staggerOffsetMs={(idx + 1) * 750}
                  />

                  {/* Right: Content & Action */}
                  <div className="p-4 sm:p-5 flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-[#14120F] group-hover:text-[#B08D3F] transition-colors leading-snug">
                        {dest.name}
                      </h4>

                      <p className="font-body text-xs sm:text-sm text-[#14120F]/75 leading-relaxed font-light mt-1.5">
                        {dest.description}
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t border-[#DCD4C4]/70 mt-3">
                      <button
                        type="button"
                        onClick={() => openTripBookingModal({ destination: dest.name, interest: dest.name })}
                        className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-[#14120F] hover:bg-[#B08D3F] text-[#E0C068] hover:text-[#14120F] border border-[#B08D3F] hover:border-[#E0C068] font-body text-xs uppercase font-bold tracking-wide transition-colors cursor-pointer shadow-md whitespace-nowrap"
                      >
                        <WhatsAppIcon className="w-4 h-4 shrink-0" withOriginalColor />
                        <span>Plan This Trip</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

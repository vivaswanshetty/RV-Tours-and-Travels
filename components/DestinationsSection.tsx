"use client";

import React from "react";
import Image from "next/image";
import { DESTINATIONS, BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";
import DestinationImageCarousel from "./DestinationImageCarousel";

export default function DestinationsSection() {
  const featuredDestination = DESTINATIONS[0];
  const supportingDestinations = DESTINATIONS.slice(1);

  return (
    <section
      id="destinations"
      className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Waypoint 04 Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1F4C4C]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
              <span>WAYPOINT 02 // WHERE WE DRIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
              Where We Drive: Coastal Karnataka &amp; Beyond
            </h2>
            <p className="font-body text-base sm:text-lg text-[#14120F]/80 leading-relaxed font-light">
              Transparent, dedicated chauffeur services originating from Udupi to premier coastal, pilgrimage, and interstate destinations.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-[#14120F]/60">
            <span className="text-[#B08D3F] font-bold">4 CORE SECTORS</span> · DIRECT BOOKING
          </div>
        </div>

        {/* Asymmetric Boarding Pass Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Large Ticket Stub: Udupi & Coastal Karnataka (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative bg-[#EFEAE0] text-[#14120F] border border-[#DCD4C4] rounded-xl overflow-hidden shadow-lg flex-1 flex flex-col justify-between group transition-all duration-300 hover:border-[#B08D3F]">
              {/* Circular Ticket Cutouts on Left & Right edge at the perforation tear line */}
              <span
                className="absolute -left-3 bottom-[80px] w-6 h-6 rounded-full bg-[#F6F3EC] border border-[#DCD4C4] z-20 pointer-events-none"
                aria-hidden="true"
              />
              <span
                className="absolute -right-3 bottom-[80px] w-6 h-6 rounded-full bg-[#F6F3EC] border border-[#DCD4C4] z-20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Card Top: Dynamic Landmark Carousel */}
              <div>
                <DestinationImageCarousel
                  images={featuredDestination.images}
                  fallbackSrc={featuredDestination.imageSrc}
                  fallbackAlt={featuredDestination.imageAlt}
                  stampBadge={`WP 02-A // ${featuredDestination.badge}`}
                  className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border-b border-[#DCD4C4]"
                  priority
                  staggerOffsetMs={0}
                />

                {/* Card Main Body: Strictly 2 label types (Heading + 1 sentence description) */}
                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14120F]">
                    {featuredDestination.name}
                  </h3>

                  <p className="font-body text-base sm:text-lg text-[#14120F]/80 leading-relaxed font-light">
                    {featuredDestination.description}
                  </p>
                </div>
              </div>

              {/* Perforated Divider & Ticket Stub Action Base */}
              <div className="mt-4 border-t-2 border-dashed border-[#DCD4C4] p-6 bg-[#E5DFD1]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="font-mono text-xs text-[#14120F]/70 text-center sm:text-left">
                  <div className="text-[10px] text-[#1F4C4C] uppercase tracking-widest font-bold">DIRECT DISPATCH</div>
                  <div>Direct Booking with R Ramesh · No Middlemen</div>
                </div>

                <TicketButton
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(featuredDestination.whatsappMessage)}`}
                  isExternal
                  variant="primary-gold"
                  size="md"
                  ticketCode={featuredDestination.ticketCode}
                  icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
                  className="w-full sm:w-auto"
                >
                  Plan This Trip
                </TicketButton>
              </div>
            </div>
          </div>

          {/* Supporting Stubs: 3 Stacked Horizontal Boarding Passes (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {supportingDestinations.map((dest, idx) => {
              const wpIndex = idx === 0 ? "02-B" : idx === 1 ? "02-C" : "02-D";

              return (
                <div
                  key={dest.id}
                  className="relative bg-[#EFEAE0] text-[#14120F] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-xl overflow-hidden shadow-sm group transition-all duration-300 flex flex-col sm:flex-row"
                >
                  {/* Circular Notches on Top and Bottom at the vertical divider line */}
                  <span
                    className="hidden sm:block absolute top-[-10px] left-[36%] -translate-x-1/2 w-5 h-5 rounded-full bg-[#F6F3EC] border border-[#DCD4C4] z-20 pointer-events-none"
                    aria-hidden="true"
                  />
                  <span
                    className="hidden sm:block absolute bottom-[-10px] left-[36%] -translate-x-1/2 w-5 h-5 rounded-full bg-[#F6F3EC] border border-[#DCD4C4] z-20 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Left (Image section with dynamic carousel, 36% on desktop) */}
                  <DestinationImageCarousel
                    images={dest.images}
                    fallbackSrc={dest.imageSrc}
                    fallbackAlt={dest.imageAlt}
                    stampBadge={`WP ${wpIndex}`}
                    className="relative w-full sm:w-[36%] h-48 sm:h-auto min-h-[170px] shrink-0 overflow-hidden border-b sm:border-b-0 sm:border-r-2 border-dashed border-[#DCD4C4]"
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

                    {/* Action Bar: Fully contained with comfortable padding */}
                    <div className="pt-3 border-t border-[#DCD4C4]/70 mt-3">
                      <TicketButton
                        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(dest.whatsappMessage)}`}
                        isExternal
                        variant="paper-ticket"
                        size="sm"
                        icon={<WhatsAppIcon className="w-3.5 h-3.5" withOriginalColor />}
                        className="w-full justify-center"
                      >
                        Plan This Trip
                      </TicketButton>
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

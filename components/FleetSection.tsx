"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Wind } from "lucide-react";
import { FLEET_CATEGORIES, BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";
import { openTripBookingModal } from "./StickyQuoteTab";

export default function FleetSection() {
  return (
    <section id="fleet" className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fleet Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-[#1F4C4C]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
            <span>OUR VEHICLE FLEET</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
            Maintained Fleet for Every Group Size
          </h2>
          <p className="font-body text-base sm:text-lg text-[#14120F]/80 leading-relaxed font-light">
            Every vehicle in the RV fleet is clean, air-conditioned, well-maintained, and driven by courteous, route-savvy chauffeurs.
          </p>
        </div>

        {/* Fleet Ticket Cards Grid - Max 2 Label Types per Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_CATEGORIES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#EFEAE0] border border-[#DCD4C4] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#B08D3F] hover:shadow-xl group"
            >
              {/* Card Top: Large Photographic View */}
              <div>
                <div className="relative aspect-[16/9] w-full bg-[#E5DFD1] overflow-hidden border-b border-[#DCD4C4]">
                  <Image
                    src={vehicle.imageSrc}
                    alt={vehicle.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  {/* Segment Badge */}
                  <div className="absolute top-3 right-3 bg-[#14120F]/85 border border-[#B08D3F]/60 px-2.5 py-1 rounded text-xs font-body text-[#E0C068] tracking-wide uppercase backdrop-blur-sm flex items-center gap-1.5 shadow-md font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B]" />
                    <span>{vehicle.placeholderLabel}</span>
                  </div>
                </div>

                {/* Card Body: Exactly 2 label types (Heading + 1 sentence description) */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="font-display text-2xl font-bold text-[#14120F] group-hover:text-[#B08D3F] transition-colors">
                    {vehicle.name}
                  </h3>

                  <p className="font-body text-sm text-[#14120F]/75 leading-relaxed font-light">
                    {vehicle.description}
                  </p>

                  {/* Capacity Specs Pills */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#DCD4C4]/70 text-xs font-body font-medium">
                    <div className="p-2 bg-[#F6F3EC] rounded-md text-center border border-[#DCD4C4] flex flex-col items-center justify-center gap-1">
                      <Users className="w-4 h-4 text-[#1F4C4C]" />
                      <span className="text-[11px] text-[#14120F]/85 font-medium leading-tight">{vehicle.capacity.passengers}</span>
                    </div>

                    <div className="p-2 bg-[#F6F3EC] rounded-md text-center border border-[#DCD4C4] flex flex-col items-center justify-center gap-1">
                      <Briefcase className="w-4 h-4 text-[#1F4C4C]" />
                      <span className="text-[11px] text-[#14120F]/85 font-medium leading-tight">{vehicle.capacity.luggage}</span>
                    </div>

                    <div className="p-2 bg-[#F6F3EC] rounded-md text-center border border-[#DCD4C4] flex flex-col items-center justify-center gap-1">
                      <Wind className="w-4 h-4 text-[#1F4C4C]" />
                      <span className="text-[11px] text-[#14120F]/85 font-medium leading-tight">Full AC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-5 sm:p-6 pt-0 border-t border-[#DCD4C4]/60 mt-2">
                <TicketButton
                  onClick={() => openTripBookingModal({ vehicle: vehicle.name })}
                  variant="primary-gold"
                  size="sm"
                  className="w-full"
                  icon={<WhatsAppIcon className="w-4 h-4 shrink-0" withOriginalColor />}
                >
                  Book This Cab
                </TicketButton>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Consultation Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#EFEAE0] border border-[#DCD4C4] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#14120F]">
              Need a vehicle not listed here or special group requirements?
            </h4>
            <p className="font-body text-sm text-[#14120F]/75 mt-1 font-light">
              From luxury sedans to 20-seater Force Urbania vans, custom transport is arranged on prior notice.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/fleet"
              className="px-4 py-2.5 bg-[#F6F3EC] hover:bg-[#EFEAE0] text-[#14120F] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg font-body text-xs uppercase font-semibold tracking-wide transition-all"
            >
              View Full Specs ➔
            </Link>
            <button
              type="button"
              onClick={() => openTripBookingModal()}
              className="px-4 py-2.5 bg-[#B08D3F] hover:bg-[#C9A227] text-[#14120F] rounded-lg font-body text-xs font-bold uppercase tracking-wide transition-colors shadow-sm cursor-pointer"
            >
              Plan Your Trip →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

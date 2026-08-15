"use client";

import React from "react";
import Image from "next/image";
import { Users, Briefcase, Wind, CheckCircle2 } from "lucide-react";
import { FLEET_CATEGORIES, BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FleetSection() {
  return (
    <section id="fleet" className="py-20 sm:py-28 bg-[#14120F] text-[#F6F3EC] relative border-b border-[#383229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Waypoint 03 Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#E0C068]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
            <span>WAYPOINT 03 // FLEET &amp; VEHICLE SPECIFICATIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC]">
            Maintained Fleet for Every Group Size
          </h2>
          <p className="font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed font-light">
            Every vehicle in the RV fleet is clean, air-conditioned, well-maintained, and driven by courteous, route-savvy chauffeurs.
          </p>
        </div>

        {/* Fleet Ticket Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_CATEGORIES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#1C1914] border border-[#383229] rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#B08D3F] hover:shadow-xl group"
            >
              {/* Card Top: Graphic Image Container with Placeholder Notice */}
              <div>
                <div className="relative aspect-[16/10] w-full bg-[#14120F] overflow-hidden border-b border-[#383229]">
                  <Image
                    src={vehicle.imageSrc}
                    alt={vehicle.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Segment Badge */}
                  <div className="absolute top-3 right-3 bg-[#14120F]/90 border border-[#B08D3F]/60 px-2.5 py-1 rounded text-[10px] font-mono text-[#E0C068] tracking-wider uppercase backdrop-blur-sm flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B]" />
                    <span>{vehicle.placeholderLabel}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 space-y-4">
                  <div>
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#B08D3F] uppercase tracking-widest block font-semibold">
                      {vehicle.tagline}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F6F3EC] mt-0.5">
                      {vehicle.name}
                    </h3>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#F6F3EC]/75 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Capacity Specs Pills */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-3 border-y border-[#383229]/80 text-xs font-mono">
                    <div className="p-1.5 sm:p-2 bg-[#14120F] rounded text-center border border-[#383229]/40 flex flex-col items-center justify-center gap-1">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A227]" />
                      <span className="text-[9px] sm:text-[10px] text-[#F6F3EC]/90 leading-tight">{vehicle.capacity.passengers}</span>
                    </div>

                    <div className="p-1.5 sm:p-2 bg-[#14120F] rounded text-center border border-[#383229]/40 flex flex-col items-center justify-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A227]" />
                      <span className="text-[9px] sm:text-[10px] text-[#F6F3EC]/90 leading-tight">{vehicle.capacity.luggage}</span>
                    </div>

                    <div className="p-1.5 sm:p-2 bg-[#1F4C4C]/40 rounded text-center border border-[#1F4C4C] flex flex-col items-center justify-center gap-1">
                      <Wind className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F6F3EC]" />
                      <span className="text-[9px] sm:text-[10px] text-[#F6F3EC] leading-tight">Full AC</span>
                    </div>
                  </div>

                  {/* Ideal For Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#B08D3F] font-semibold">
                      SUITABLE FOR:
                    </div>
                    {vehicle.idealFor.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#F6F3EC]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4C4C] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0 border-t border-[#383229]/40 mt-4">
                <TicketButton
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(vehicle.whatsappMessage)}`}
                  isExternal
                  variant="primary-gold"
                  size="sm"
                  className="w-full"
                  icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
                >
                  Enquire {vehicle.name}
                </TicketButton>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Custom Vehicle Requests */}
        <div className="mt-12 p-5 bg-[#1C1914] border border-dashed border-[#B08D3F]/40 rounded-lg text-center font-mono text-xs text-[#F6F3EC]/80 max-w-2xl mx-auto">
          Need a specific vehicle variant or multiple cars for a family function or pilgrimage?{" "}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A227] hover:underline font-bold"
          >
            Message R Ramesh directly on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

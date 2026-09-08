"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TOUR_PACKAGES, BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";
import PackageImageCarousel from "./PackageImageCarousel";
import { Clock, Compass, ArrowRight } from "lucide-react";

export default function FeaturedPackagesSection() {
  // Show top 3 featured packages on the home page
  const featured = TOUR_PACKAGES.slice(0, 3);

  return (
    <section id="packages" className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1F4C4C]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
              <span>WAYPOINT 04 // POPULAR TOUR PACKAGES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
              Popular Karnataka Tour Packages
            </h2>
            <p className="font-body text-base sm:text-lg text-[#14120F]/80 font-light leading-relaxed">
              Curated road itineraries for temple darshans, coastal highway escapes, and Western Ghats hill stations with dedicated chauffeur service.
            </p>
          </div>

          <div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#EFEAE0] text-[#14120F] hover:text-[#B08D3F] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <span>View All 2026 Tour Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Packages 3-Card Grid with Rich Authentic Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((pkg, idx) => (
            <div
              key={pkg.id}
              className="group bg-[#EFEAE0] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Visual Landmark Carousel */}
                <PackageImageCarousel
                  images={pkg.images}
                  fallbackSrc={pkg.imageSrc}
                  fallbackAlt={pkg.imageAlt}
                  durationBadge={pkg.duration}
                  packageBadge={pkg.badge}
                  borderClassName="border-b border-[#DCD4C4]"
                  staggerOffsetMs={idx * 800}
                />

                <div className="p-6 sm:p-7 space-y-4">
                  {/* Exactly 2 label types: Heading + 1 sentence description */}
                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14120F] group-hover:text-[#B08D3F] transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-[#14120F]/75 leading-relaxed font-light">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Key stops snippet */}
                  <div className="p-3 bg-[#F6F3EC] border border-[#DCD4C4] rounded-lg space-y-1 font-mono text-xs text-[#14120F]/80">
                    <span className="text-[10px] text-[#1F4C4C] uppercase font-bold block">ROUTE STOPS:</span>
                    <p className="truncate text-xs text-[#14120F]/75">{pkg.stops.join(" ➔ ")}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <div className="pt-5 border-t border-[#DCD4C4]/70">
                  <TicketButton
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                    isExternal
                    variant="paper-ticket"
                    size="sm"
                    ticketCode="BOOK 2026"
                    icon={<WhatsAppIcon className="w-3.5 h-3.5" withOriginalColor />}
                    className="w-full justify-center"
                  >
                    Enquire on WhatsApp
                  </TicketButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 bg-[#EFEAE0] border border-[#DCD4C4] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#1F4C4C] shrink-0" />
            <span className="font-mono text-xs text-[#14120F]/80">
              Want a customized multi-day itinerary across Karnataka or neighboring states? We arrange custom vehicles and route scheduling.
            </span>
          </div>
          <Link
            href="/packages"
            className="shrink-0 text-xs font-mono text-[#B08D3F] hover:underline font-bold uppercase tracking-wider"
          >
            Explore Complete Travel Guide ➔
          </Link>
        </div>
      </div>
    </section>
  );
}

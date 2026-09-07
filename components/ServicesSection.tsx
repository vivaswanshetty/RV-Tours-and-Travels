"use client";

import React from "react";
import Link from "next/link";
import { Plane, MapPin, Car, Compass, ArrowRight } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ServicesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Plane: <Plane className="w-6 h-6 text-[#1F4C4C]" />,
    MapPin: <MapPin className="w-6 h-6 text-[#1F4C4C]" />,
    Car: <Car className="w-6 h-6 text-[#1F4C4C]" />,
    Compass: <Compass className="w-6 h-6 text-[#1F4C4C]" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Waypoint 02 Tag & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1F4C4C]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
              <span>WAYPOINT 06 // SERVICES &amp; ROUTES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
              Tailored Chauffeur &amp; Travel Solutions
            </h2>
            <p className="font-body text-base sm:text-lg text-[#14120F]/80 leading-relaxed">
              Transparent, dedicated chauffeur services originating from Udupi and Manipal across coastal Karnataka and interstate hubs.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-[#14120F]/60">
            <span className="text-[#B08D3F] font-bold">4 CORE SECTORS</span> · DIRECT BOOKING
          </div>
        </div>

        {/* Service Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#EFEAE0] border border-[#DCD4C4] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#B08D3F] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-[#F6F3EC] border border-[#DCD4C4] flex items-center justify-center group-hover:border-[#B08D3F] transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#1F4C4C] uppercase tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                {/* Exactly 2 label types: Heading + 1 clear sentence description */}
                <div className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14120F] group-hover:text-[#B08D3F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-[#14120F]/75 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#DCD4C4]/70">
                <TicketButton
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  isExternal
                  variant="paper-ticket"
                  size="sm"
                  className="w-full"
                  icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
                >
                  Enquire Route
                </TicketButton>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#14120F] text-[#E0C068] hover:text-[#F6F3EC] border border-[#B08D3F] rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:bg-[#1C1914]"
          >
            <span>View All Detailed Services &amp; Routes</span>
            <span>➔</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

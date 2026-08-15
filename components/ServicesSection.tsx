"use client";

import React from "react";
import { Plane, MapPin, Car, Compass, ArrowRight, Check } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ServicesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Plane: <Plane className="w-6 h-6 text-[#C9A227]" />,
    MapPin: <MapPin className="w-6 h-6 text-[#C9A227]" />,
    Car: <Car className="w-6 h-6 text-[#C9A227]" />,
    Compass: <Compass className="w-6 h-6 text-[#C9A227]" />,
  };

  const airportService = SERVICES[0];
  const karnatakaService = SERVICES[1];
  const vehicleService = SERVICES[2];
  const packageService = SERVICES[3];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Waypoint 02 Tag & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1F4C4C]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
              <span>WAYPOINT 02 // SERVICES &amp; ROUTES</span>
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

        {/* Asymmetric Service Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Featured Wide Tile: Airport Transfers (Span 12 / Dark Ticket aesthetic) */}
          <div className="lg:col-span-12 bg-[#14120F] text-[#F6F3EC] border border-[#B08D3F] rounded-lg p-6 sm:p-10 relative overflow-hidden shadow-xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-[#1C1914] border border-[#B08D3F] flex items-center justify-center">
                    {iconMap[airportService.icon]}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#C9A227] uppercase tracking-widest block font-semibold">
                      {airportService.subtitle}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F6F3EC]">
                      {airportService.title}
                    </h3>
                  </div>
                </div>

                <p className="font-body text-base text-[#F6F3EC]/85 leading-relaxed">
                  {airportService.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {airportService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#F6F3EC]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end gap-4 p-6 bg-[#1C1914] border border-[#383229] rounded-md">
                <div className="font-mono text-xs text-[#E0C068] uppercase tracking-wider">
                  REGIONAL TERMINAL TRANSFERS
                </div>
                <div className="font-mono text-sm text-[#F6F3EC] space-y-1">
                  <div>✈️ Mangalore Int&apos;l Airport (IXE)</div>
                  <div>✈️ Regional Terminals &amp; Outstations (On Request)</div>
                </div>

                <TicketButton
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(airportService.whatsappMessage)}`}
                  isExternal
                  variant="primary-gold"
                  size="md"
                  icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
                  className="w-full sm:w-auto mt-2"
                >
                  Enquire Airport Drop / Pickup
                </TicketButton>
              </div>
            </div>

            {/* Background Accent Grid */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-route-dots opacity-5 pointer-events-none" />
          </div>

          {/* Service 2: All Destinations Within Karnataka (Span 4) */}
          <div className="lg:col-span-4 bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#B08D3F] transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded bg-[#14120F] border border-[#B08D3F] flex items-center justify-center">
                  {iconMap[karnatakaService.icon]}
                </div>
                <span className="font-mono text-xs font-bold text-[#1F4C4C] uppercase tracking-wider">
                  SECTOR 02
                </span>
              </div>

              <div>
                <span className="font-mono text-[11px] text-[#1F4C4C] uppercase tracking-widest block font-bold">
                  {karnatakaService.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#14120F] mt-1">
                  {karnatakaService.title}
                </h3>
              </div>

              <p className="font-body text-sm text-[#14120F]/80 leading-relaxed">
                {karnatakaService.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#DCD4C4]">
                {karnatakaService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#14120F]/75">
                    <Check className="w-3.5 h-3.5 text-[#1F4C4C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DCD4C4]">
              <TicketButton
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(karnatakaService.whatsappMessage)}`}
                isExternal
                variant="primary-gold"
                size="sm"
                className="w-full"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                Book Karnataka Trip
              </TicketButton>
            </div>
          </div>

          {/* Service 3: All Types of Vehicle Available (Span 4) */}
          <div className="lg:col-span-4 bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#B08D3F] transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded bg-[#14120F] border border-[#B08D3F] flex items-center justify-center">
                  {iconMap[vehicleService.icon]}
                </div>
                <span className="font-mono text-xs font-bold text-[#1F4C4C] uppercase tracking-wider">
                  SECTOR 03
                </span>
              </div>

              <div>
                <span className="font-mono text-[11px] text-[#1F4C4C] uppercase tracking-widest block font-bold">
                  {vehicleService.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#14120F] mt-1">
                  {vehicleService.title}
                </h3>
              </div>

              <p className="font-body text-sm text-[#14120F]/80 leading-relaxed">
                {vehicleService.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#DCD4C4]">
                {vehicleService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#14120F]/75">
                    <Check className="w-3.5 h-3.5 text-[#1F4C4C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DCD4C4]">
              <TicketButton
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(vehicleService.whatsappMessage)}`}
                isExternal
                variant="primary-gold"
                size="sm"
                className="w-full"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                Enquire Vehicles
              </TicketButton>
            </div>
          </div>

          {/* Service 4: Custom Tour Packages (Span 4) */}
          <div className="lg:col-span-4 bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#B08D3F] transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded bg-[#14120F] border border-[#B08D3F] flex items-center justify-center">
                  {iconMap[packageService.icon]}
                </div>
                <span className="font-mono text-xs font-bold text-[#1F4C4C] uppercase tracking-wider">
                  SECTOR 04
                </span>
              </div>

              <div>
                <span className="font-mono text-[11px] text-[#1F4C4C] uppercase tracking-widest block font-bold">
                  {packageService.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#14120F] mt-1">
                  {packageService.title}
                </h3>
              </div>

              <p className="font-body text-sm text-[#14120F]/80 leading-relaxed">
                {packageService.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#DCD4C4]">
                {packageService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-mono text-[#14120F]/75">
                    <Check className="w-3.5 h-3.5 text-[#1F4C4C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#DCD4C4]">
              <TicketButton
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(packageService.whatsappMessage)}`}
                isExternal
                variant="primary-gold"
                size="sm"
                className="w-full"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                Plan Custom Package
              </TicketButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

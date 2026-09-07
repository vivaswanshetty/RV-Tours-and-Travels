"use client";

import { ShieldCheck, Navigation, Map, Receipt, Clock, UserCheck } from "lucide-react";
import { TRUST_POINTS, BUSINESS_INFO } from "@/lib/constants";

export default function OverviewSection() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#1F4C4C]" />,
    Navigation: <Navigation className="w-6 h-6 text-[#1F4C4C]" />,
    Map: <Map className="w-6 h-6 text-[#1F4C4C]" />,
    Receipt: <Receipt className="w-6 h-6 text-[#1F4C4C]" />,
    Clock: <Clock className="w-6 h-6 text-[#1F4C4C]" />,
    UserCheck: <UserCheck className="w-6 h-6 text-[#1F4C4C]" />,
  };

  return (
    <section id="trust" className="py-16 sm:py-24 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1F4C4C]">
            <span className="w-2 h-2 rounded-full bg-[#1F4C4C]" />
            <span>WAYPOINT 07 // WHY CHOOSE US</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
            Built on Trust, Punctuality &amp; Local Knowledge
          </h2>
          <p className="font-body text-base sm:text-lg text-[#14120F]/80 leading-relaxed font-light">
            Every trip with RV Tours &amp; Travels is coordinated with clean vehicles, route expertise, and honest commitments.
          </p>
        </div>

        {/* 6 Trust Points Cards - Max 2 Label Types per Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={index}
              className="group relative bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#B08D3F] hover:shadow-md hover:-translate-y-1"
            >
              {/* Top Accent & Index Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded bg-[#F6F3EC] border border-[#DCD4C4] flex items-center justify-center group-hover:border-[#B08D3F] transition-colors">
                  {iconMap[point.icon]}
                </div>
                <span className="font-mono text-xs font-bold text-[#B08D3F] tracking-widest">
                  0{index + 1}
                </span>
              </div>

              {/* Text Content: Strictly 2 label types (Heading + 1 clear sentence description) */}
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-[#14120F] leading-snug">
                  {point.title}
                </h3>
                <p className="font-body text-sm text-[#14120F]/75 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Operational Commitments Banner */}
        <div className="mt-12 p-4 sm:p-8 bg-[#EFEAE0] text-[#14120F] rounded-lg border border-[#DCD4C4] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center lg:text-left">
            <div className="font-mono text-xs text-[#1F4C4C] uppercase tracking-widest font-bold">
              OUR COMMITMENT TO EVERY PASSENGER
            </div>
            <div className="font-display text-lg sm:text-2xl font-bold">
              Clean AC Vehicles · Transparent Fares · Punctual Departures
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full lg:w-auto lg:flex lg:items-center lg:gap-3 shrink-0 font-mono text-xs">
            <div className="px-2.5 py-1.5 sm:px-4 sm:py-2 bg-[#F6F3EC] border border-[#DCD4C4] rounded text-center">
              <span className="text-[#B08D3F] block font-bold">DIRECT</span>
              <span className="text-[#14120F]/70 text-[9px] sm:text-[10px]">BOOKING</span>
            </div>
            <div className="px-2.5 py-1.5 sm:px-4 sm:py-2 bg-[#F6F3EC] border border-[#DCD4C4] rounded text-center">
              <span className="text-[#B08D3F] block font-bold">UDUPI</span>
              <span className="text-[#14120F]/70 text-[9px] sm:text-[10px]">HEADQUARTERS</span>
            </div>
            <div className="px-2.5 py-1.5 sm:px-4 sm:py-2 bg-[#F6F3EC] border border-[#DCD4C4] rounded text-center">
              <span className="text-[#B08D3F] block font-bold">DIRECT</span>
              <span className="text-[#14120F]/70 text-[9px] sm:text-[10px]">NO MIDDLEMEN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

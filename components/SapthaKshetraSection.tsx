"use client";

import React from "react";
import Image from "next/image";
import { SAPTHA_KSHETRAS, BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function SapthaKshetraSection() {
  return (
    <section
      id="saptha-kshetra"
      className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1F4C4C]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
            <span>WAYPOINT 03 // SAPTHA KSHETRA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
            Saptha Kshetra — Seven Sacred Kshetras
          </h2>
          <p className="font-body text-base sm:text-lg text-[#14120F]/80 leading-relaxed font-light">
            Consecrated by Parashurama across coastal Karnataka. Visit individual temples or combine neighboring kshetras into personalized day trips based on proximity — with relaxed darshan timings and private chauffeur care.
          </p>
        </div>

        {/* 7 Individual Temple Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SAPTHA_KSHETRAS.map((kshetra, index) => (
            <div
              key={kshetra.id}
              className={`bg-[#EFEAE0] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl group ${
                index === 0 ? "sm:col-span-2 lg:col-span-2 xl:col-span-2" : ""
              }`}
            >
              {/* Card Image */}
              <div>
                <div
                  className={`relative w-full overflow-hidden bg-[#E5DFD1] border-b border-[#DCD4C4] ${
                    index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={kshetra.imageSrc}
                    alt={kshetra.imageAlt}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle Corner Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#14120F]/85 border border-[#B08D3F]/70 rounded text-[10px] font-mono text-[#E0C068] tracking-widest uppercase backdrop-blur-sm">
                    KSHETRA {kshetra.number}
                  </div>
                </div>

                {/* Card Body: Exactly 2 label types (Heading + One short line) */}
                <div className="p-5 sm:p-6 space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14120F] leading-snug">
                    {kshetra.name}{" "}
                    <span className="font-normal text-[#14120F]/60 text-lg block sm:inline">
                      ({kshetra.templeName})
                    </span>
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#14120F]/75 leading-relaxed font-light">
                    {kshetra.shortLine}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 sm:p-6 pt-0 border-t border-[#DCD4C4]/60 mt-3 flex items-center justify-between gap-3">
                <TicketButton
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(kshetra.whatsappMessage)}`}
                  isExternal
                  variant="paper-ticket"
                  size="sm"
                  className="w-full"
                  icon={<WhatsAppIcon className="w-3.5 h-3.5" withOriginalColor />}
                >
                  Enquire {kshetra.name} Trip
                </TicketButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { UserCheck, MapPin, Compass, PhoneCall, ShieldCheck, HeartHandshake } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Operator Profile & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1F4C4C]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
                <span>WAYPOINT 04 // OPERATOR PROFILE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
                Dedicated Chauffeur Care by <span className="italic text-[#B08D3F]">R Ramesh</span>
              </h2>
            </div>

            <div className="font-body text-base sm:text-lg text-[#14120F]/85 space-y-4 leading-relaxed">
              <p>
                <strong>RV Tours &amp; Travels</strong> is a locally operated tour and taxi service based in Udupi, Karnataka. Managed directly by proprietor <strong>R Ramesh</strong>, the service focuses on reliable, polite, and comfortable road transport for every passenger.
              </p>
              <p>
                Whether coordinating airport pickups and drops at Mangalore Airport (IXE), planning temple circuit visits across coastal Karnataka, or arranging outstation travel throughout the state, each journey is handled with direct care.
              </p>
              <div className="text-sm font-mono text-[#1F4C4C] bg-[#EFEAE0] p-4 border-l-2 border-[#1F4C4C] rounded-r">
                Punctual departures, careful driving across coastal and ghat routes, and clear communication with transparent fares.
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#EFEAE0] border border-[#DCD4C4] rounded">
                <ShieldCheck className="w-5 h-5 text-[#1F4C4C] mb-2" />
                <div className="font-display text-sm font-bold text-[#14120F]">Safe Driving</div>
                <div className="font-mono text-xs text-[#14120F]/70">Ghats &amp; coastal highways</div>
              </div>

              <div className="p-4 bg-[#EFEAE0] border border-[#DCD4C4] rounded">
                <HeartHandshake className="w-5 h-5 text-[#1F4C4C] mb-2" />
                <div className="font-display text-sm font-bold text-[#14120F]">Direct Contact</div>
                <div className="font-mono text-xs text-[#14120F]/70">Speak directly with owner</div>
              </div>

              <div className="p-4 bg-[#EFEAE0] border border-[#DCD4C4] rounded">
                <Compass className="w-5 h-5 text-[#1F4C4C] mb-2" />
                <div className="font-display text-sm font-bold text-[#14120F]">Route Knowhow</div>
                <div className="font-mono text-xs text-[#14120F]/70">Temple timings &amp; halts</div>
              </div>
            </div>
          </div>

          {/* Right Column: Operator Manifest Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#14120F] text-[#F6F3EC] border border-[#B08D3F] rounded-lg p-6 sm:p-8 shadow-2xl relative">
              {/* Monogram Badge Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#383229] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1C1914] border border-[#B08D3F] rounded flex items-center justify-center font-display text-xl font-bold text-[#C9A227]">
                    RV
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-[#F6F3EC]">RV TOURS &amp; TRAVELS</div>
                    <div className="font-mono text-[10px] text-[#C9A227] tracking-widest uppercase">{BUSINESS_INFO.tagline}</div>
                  </div>
                </div>
              </div>

              {/* Manifest Data Rows */}
              <div className="space-y-4 font-mono text-xs">
                <div className="pb-3 border-b border-[#383229]/60">
                  <div className="text-[10px] text-[#B08D3F] uppercase tracking-wider mb-1">PROPRIETOR / CHAUFFEUR-IN-CHARGE</div>
                  <div className="text-base font-bold text-[#F6F3EC]">{BUSINESS_INFO.proprietor}</div>
                </div>

                <div className="pb-3 border-b border-[#383229]/60">
                  <div className="text-[10px] text-[#B08D3F] uppercase tracking-wider mb-1">BASE LOCATION</div>
                  <div className="text-sm font-semibold text-[#F6F3EC]">{BUSINESS_INFO.location}</div>
                  <div className="text-[11px] text-[#E0C068] mt-0.5">{BUSINESS_INFO.coordinates}</div>
                </div>

                <div className="pb-3 border-b border-[#383229]/60">
                  <div className="text-[10px] text-[#B08D3F] uppercase tracking-wider mb-1">DIRECT PHONE &amp; WHATSAPP</div>
                  <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-sm font-bold text-[#F6F3EC] hover:text-[#C9A227] block">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>

                <div>
                  <div className="text-[10px] text-[#B08D3F] uppercase tracking-wider mb-1">EMAIL</div>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xs text-[#E0C068] hover:underline break-all">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Bottom Stamp */}
              <div className="mt-6 pt-4 border-t border-dashed border-[#B08D3F]/40 flex items-center justify-between font-mono text-[10px] text-[#F6F3EC]/70">
                <span>SERVICE: PAN-KARNATAKA</span>
                <span>ORIGIN: UDUPI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

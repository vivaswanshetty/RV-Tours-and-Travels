"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, PhoneCall, Compass, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Chauffeur ID & Manifest Credential Card (5 cols) */}
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative bg-[#EFEAE0] border-2 border-[#DCD4C4] rounded-2xl p-5 sm:p-6 shadow-md hover:border-[#B08D3F] transition-all group">
              {/* Brass Corner Accents */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#B08D3F] pointer-events-none" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#B08D3F] pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#B08D3F] pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#B08D3F] pointer-events-none" />

              {/* Credential Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DCD4C4]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#14120F] border border-[#B08D3F] flex items-center justify-center font-display text-sm font-bold text-[#E0C068]">
                    RV
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#1F4C4C] font-bold">OPERATOR MANIFEST</div>
                    <div className="font-display text-xs font-bold text-[#14120F]">RV TOURS &amp; TRAVELS</div>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[#B08D3F] font-bold px-2 py-0.5 bg-[#F6F3EC] border border-[#DCD4C4] rounded">
                  ID: KA-20-DISPATCH
                </span>
              </div>

              {/* Large Real Photograph of R Ramesh */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-[#DCD4C4] bg-[#F6F3EC] shadow-inner mb-4">
                <Image
                  src="/ramesh-chauffeur.png"
                  alt="R Ramesh - Proprietor and Lead Chauffeur of RV Tours & Travels Udupi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-102 transition-transform duration-500 ease-out"
                />
                {/* Subtle active status pill */}
                <div className="absolute bottom-3 left-3 bg-[#14120F]/90 backdrop-blur-sm border border-[#B08D3F]/60 px-2.5 py-1 rounded text-[10px] font-mono text-[#E0C068] flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#2E6B6B] animate-pulse" />
                  <span>ON ACTIVE SERVICE · UDUPI</span>
                </div>
              </div>

              {/* Credential Details Underneath */}
              <div className="space-y-2 pt-1 border-t border-[#DCD4C4]/80">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-bold text-[#14120F] tracking-tight">
                    R Ramesh
                  </h3>
                  <span className="font-mono text-[11px] font-bold text-[#1F4C4C]">
                    15+ YRS EXP.
                  </span>
                </div>
                <div className="font-mono text-xs text-[#1F4C4C] font-bold uppercase tracking-wider">
                  Proprietor &amp; Chauffeur-in-Charge
                </div>

                {/* Metadata Rows */}
                <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] font-mono border-t border-dashed border-[#DCD4C4]">
                  <div>
                    <span className="text-[#14120F]/60 block text-[10px] uppercase">Base Station</span>
                    <span className="text-[#14120F] font-semibold">{BUSINESS_INFO.location}</span>
                  </div>
                  <div>
                    <span className="text-[#14120F]/60 block text-[10px] uppercase">Direct Helpline</span>
                    <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-[#14120F] font-semibold hover:text-[#B08D3F]">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, First-Person Quote, Backstory & Stats (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Waypoint Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1F4C4C]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
                <span>WAYPOINT 08 // OPERATOR PROFILE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
                Dedicated Chauffeur Care by <span className="italic text-[#B08D3F]">R Ramesh</span>
              </h2>
            </div>

            {/* First-Person Quote from R Ramesh */}
            <div className="relative p-5 sm:p-6 bg-[#EFEAE0] border-l-4 border-[#B08D3F] border-y border-r border-[#DCD4C4] rounded-r-xl rounded-l-sm shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-[#B08D3F] font-mono text-xs uppercase tracking-widest font-bold">
                <span>“</span>
                <span>PERSONAL CHAUFFEUR COMMITMENT</span>
              </div>
              <blockquote className="font-body text-base sm:text-lg text-[#14120F] italic font-normal leading-relaxed">
                &ldquo;When you book a trip with me, you are trusting me with your family, your temple darshan timings, or your flight schedule. I don&rsquo;t treat driving as just running a taxi meter — I have a lot of experience navigating these coastal highways and Western Ghats passes, and I take personal pride in every journey being on time, comfortable, and completely stress-free.&rdquo;
              </blockquote>
              <div className="pt-1 flex items-center gap-2 font-mono text-xs text-[#1F4C4C] font-semibold">
                <span>— R Ramesh</span>
                <span className="text-[#B08D3F]">·</span>
                <span className="text-[#14120F]/70">Proprietor &amp; Lead Chauffeur</span>
              </div>
            </div>

            {/* Real Backstory (2-3 sentences) */}
            <div className="font-body text-base text-[#14120F]/85 space-y-3 leading-relaxed font-light">
              <p>
                R Ramesh brings over 15 years of seasoned experience behind the wheel across coastal Karnataka, Western Ghats routes, and interstate highways. Known throughout Udupi and Manipal for his exceptional customer care, patient communication, and spotless driving record, he ensures every traveler feels genuinely respected, safe, and at ease.
              </p>
              <p>
                Whether coordinating punctuality for early morning airport transfers or navigating winding temple routes, he oversees every booking directly with zero middlemen or automated call centers.
              </p>
            </div>

            {/* 3 Ticket-Stub Trust / Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="relative bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg p-4 transition-all hover:border-[#B08D3F] group shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-4 h-4 text-[#1F4C4C]" />
                  <span className="font-display text-base sm:text-lg font-bold text-[#14120F]">15+ Years</span>
                </div>
                <p className="font-mono text-xs text-[#14120F]/75">Chauffeur Experience</p>
              </div>

              <div className="relative bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg p-4 transition-all hover:border-[#B08D3F] group shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <PhoneCall className="w-4 h-4 text-[#1F4C4C]" />
                  <span className="font-display text-base sm:text-lg font-bold text-[#14120F]">Direct Contact</span>
                </div>
                <p className="font-mono text-xs text-[#14120F]/75">Speak With the Owner</p>
              </div>

              <div className="relative bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg p-4 transition-all hover:border-[#B08D3F] group shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <Compass className="w-4 h-4 text-[#1F4C4C]" />
                  <span className="font-display text-base sm:text-lg font-bold text-[#14120F]">Route Knowhow</span>
                </div>
                <p className="font-mono text-xs text-[#14120F]/75">Ghats &amp; Coastal Highways</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <TicketButton
                href={BUSINESS_INFO.whatsappUrl}
                isExternal
                variant="paper-ticket"
                size="md"
                ticketCode="WHATSAPP DIRECT"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                Chat Directly with R Ramesh
              </TicketButton>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-3 bg-[#EFEAE0] hover:bg-[#E5DFD1] text-[#14120F] hover:text-[#B08D3F] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#1F4C4C]" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#1F4C4C] hover:text-[#B08D3F] font-bold uppercase tracking-wider transition-colors ml-auto sm:ml-0"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

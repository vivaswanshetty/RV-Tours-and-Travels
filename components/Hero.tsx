"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Phone, ArrowRight, Compass, ShieldCheck, MapPin, Radio, Plane, Clock, Award, Car } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";
import { openTripBookingModal } from "./StickyQuoteTab";

export default function Hero() {
  const trustStats = [
    { value: "15+ Years", label: "Chauffeur Experience" },
    { value: "100% Punctual", label: "Flight-Timed Pickups" },
    { value: "Zero Surge", label: "Transparent Pricing" },
    { value: "Clean Fleet", label: "Dzire · Innova · Tempo" },
  ];

  return (
    <section
      id="overview"
      className="relative min-h-[92vh] pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 bg-[#14120F] text-[#F6F3EC] flex flex-col justify-between overflow-hidden border-b border-[#383229]"
    >
      {/* Background Graphic with Atmospheric Cinematic Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero-coastal-sunset.jpg"
          alt="Scenic coastal Karnataka highway at golden hour alongside the Arabian Sea - RV Tours & Travels"
          fill
          priority
          className="object-cover object-center opacity-65 filter brightness-105 contrast-105"
        />
        {/* Soft Natural Atmospheric Warmth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14120F]/65 via-[#14120F]/35 to-[#14120F]/85" />
      </div>

      {/* Decorative Blueprint Grid & Subtle Amber Glow */}
      <div className="absolute inset-0 z-0 bg-route-dots opacity-10 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#B08D3F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-6 sm:space-y-8 my-auto">
        {/* Sacred Invocation Greeting */}
        <div className="flex items-center justify-center gap-3 select-none">
          <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#B08D3F]/60" />
          <span className="font-display text-xs sm:text-sm tracking-[0.2em] text-[#E0C068] font-medium">
            || Shri Krishnam Vandhe Jagadhgurum ||
          </span>
          <span className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#B08D3F]/60" />
        </div>

        {/* Location & Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 bg-[#181510]/95 border border-[#B08D3F]/50 rounded-full text-xs sm:text-sm font-body font-medium text-[#F6F3EC] shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>Based in Udupi &amp; Manipal · Available 24/7 Private Cab Service</span>
        </div>

        {/* Hero Typography */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F6F3EC] leading-[1.1]">
            Boutique Chauffeur &amp; Private Taxi Service in{" "}
            <span className="italic bg-gradient-to-r from-[#E0C068] via-[#F3E5AB] to-[#C9A227] bg-clip-text text-transparent">
              Coastal Karnataka
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg md:text-xl text-[#F6F3EC]/85 max-w-2xl mx-auto leading-relaxed font-light">
            Punctual airport transfers, sacred temple circuits, and custom outstation trips across Karnataka, managed directly by proprietor <strong className="font-semibold text-[#F6F3EC]">{BUSINESS_INFO.proprietor}</strong> with zero surge pricing.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-xl mx-auto">
          <button
            type="button"
            onClick={() => openTripBookingModal()}
            className="flex-1 inline-flex items-center justify-center gap-3 h-14 px-7 rounded-xl bg-gradient-to-r from-[#B08D3F] via-[#C9A227] to-[#B08D3F] text-[#14120F] font-body font-bold text-sm sm:text-base tracking-wide uppercase hover:brightness-110 shadow-xl transition-all active:scale-98 cursor-pointer whitespace-nowrap"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" withOriginalColor />
            <span>Plan &amp; Book on WhatsApp</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center justify-center gap-3 h-14 px-7 rounded-xl bg-[#1C1914]/90 hover:bg-[#252019] border-2 border-[#B08D3F]/70 hover:border-[#E0C068] text-sm sm:text-base font-body font-bold text-[#F6F3EC] hover:text-[#E0C068] transition-all shadow-xl whitespace-nowrap"
          >
            <Phone className="w-5 h-5 text-[#C9A227] shrink-0" />
            <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Interactive Quick Route Chips */}
        <div className="pt-4 space-y-3">
          <span className="text-xs font-body uppercase tracking-wider text-[#B08D3F] block font-semibold">
            Popular Travel Routes:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => openTripBookingModal({ destination: "Mangalore Airport (IXE)", interest: "Airport Drop / Pickup" })}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1914]/90 hover:bg-[#B08D3F]/20 border border-[#383229] hover:border-[#B08D3F] text-[#F6F3EC]/90 hover:text-[#E0C068] rounded-full text-xs sm:text-sm font-body font-medium transition-all shadow-sm hover:scale-105 cursor-pointer"
            >
              <Plane className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
              <span>Mangalore Airport (IXE)</span>
            </button>
            <button
              type="button"
              onClick={() => openTripBookingModal({ destination: "Karnataka Temple Circuit", interest: "Karnataka Temple Circuit" })}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1914]/90 hover:bg-[#B08D3F]/20 border border-[#383229] hover:border-[#B08D3F] text-[#F6F3EC]/90 hover:text-[#E0C068] rounded-full text-xs sm:text-sm font-body font-medium transition-all shadow-sm hover:scale-105 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
              <span>Saptha Kshetra Temple Tour</span>
            </button>
            <button
              type="button"
              onClick={() => openTripBookingModal({ destination: "Outstation Karnataka Road Trip", interest: "Custom Outstation Road Trip" })}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1914]/90 hover:bg-[#B08D3F]/20 border border-[#383229] hover:border-[#B08D3F] text-[#F6F3EC]/90 hover:text-[#E0C068] rounded-full text-xs sm:text-sm font-body font-medium transition-all shadow-sm hover:scale-105 cursor-pointer"
            >
              <Car className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
              <span>All-Karnataka Outstation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Animated Trust Matrix Banner (Bottom of Hero) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-8 border-t border-[#383229]/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {trustStats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{
                y: -3,
                transition: { duration: 0.15 },
              }}
              className="group relative p-3.5 sm:p-5 rounded-xl bg-white/[0.02] hover:bg-[#B08D3F]/[0.08] border border-white/[0.08] hover:border-[#B08D3F]/70 backdrop-blur-md shadow-sm hover:shadow-[0_10px_25px_rgba(176,141,63,0.18)] transition-all duration-200 cursor-default overflow-hidden space-y-1"
            >
              {/* Subtle ambient golden gradient highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#B08D3F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

              <div className="relative z-10 font-display text-xl sm:text-2xl font-bold text-[#E0C068] group-hover:text-white group-hover:scale-105 transform transition-all duration-200">
                {item.value}
              </div>
              <div className="relative z-10 font-body text-xs font-medium text-[#F6F3EC]/75 group-hover:text-[#F6F3EC] uppercase tracking-wide transition-colors">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

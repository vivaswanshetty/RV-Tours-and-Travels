"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Phone, ArrowRight, Compass, ShieldCheck, MapPin, Radio, Plane, Clock, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  const quickRoutes = [
    { label: "✈️ Mangalore Airport (IXE)", query: "Hello Ramesh ji, I want to book a Mangalore Airport (IXE) cab." },
    { label: "🛕 Kollur & Murudeshwar", query: "Hello Ramesh ji, I want to enquire about the Kollur & Murudeshwar temple tour." },
    { label: "🌊 Gokarna & Karwar", query: "Hello Ramesh ji, I want to enquire about a Gokarna & Karwar beach trip." },
    { label: "⛰️ Coorg & Chikmagalur", query: "Hello Ramesh ji, I want to enquire about the Coorg & Chikmagalur tour." },
    { label: "🚗 All-Karnataka Outstation", query: "Hello Ramesh ji, I need a chauffeur for an outstation Karnataka trip." },
  ];

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
          src="/hero-road.jpg"
          alt="Scenic coastal Karnataka and Western Ghats highway route - RV Tours & Travels"
          fill
          priority
          className="object-cover object-center opacity-25 filter brightness-95"
        />
        {/* Soft Multi-Layered Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14120F]/90 via-[#14120F]/60 to-[#14120F]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#14120F]/50 to-[#14120F]" />
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

        {/* Origin & Live Dispatch Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#1C1914]/90 border border-[#B08D3F]/50 rounded-full text-xs font-mono tracking-widest text-[#E0C068] uppercase shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#2E6B6B] animate-pulse" />
          <span>ORIGIN: UDUPI, KA (13.34° N, 74.74° E) · 24/7 DIRECT DISPATCH</span>
        </div>

        {/* Hero Typography */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="font-mono text-xs sm:text-sm text-[#B08D3F] uppercase tracking-[0.3em] font-bold">
            — {BUSINESS_INFO.tagline} —
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F6F3EC] leading-[1.1]">
            Boutique Chauffeur &amp; Private Taxi Service in{" "}
            <span className="italic bg-gradient-to-r from-[#E0C068] via-[#F3E5AB] to-[#C9A227] bg-clip-text text-transparent">
              Coastal Karnataka
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg md:text-xl text-[#F6F3EC]/80 max-w-2xl mx-auto leading-relaxed font-light">
            Managed directly by proprietor <strong className="font-semibold text-[#F6F3EC]">{BUSINESS_INFO.proprietor}</strong>. Punctual airport transfers, tailored temple circuits, and bespoke inter-city journeys across all destinations in Karnataka with zero surge pricing.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <TicketButton
            href={BUSINESS_INFO.whatsappUrl}
            isExternal
            variant="primary-gold"
            size="lg"
            ticketCode="WHATSAPP"
            icon={<WhatsAppIcon className="w-5 h-5" withOriginalColor />}
            className="w-full sm:w-auto shadow-xl"
          >
            Book on WhatsApp
          </TicketButton>

          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] hover:border-[#B08D3F] text-xs sm:text-sm font-mono text-[#F6F3EC] hover:text-[#E0C068] transition-all shadow-lg whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#C9A227]" />
            <span className="font-bold">Call: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Interactive Quick Route Chips */}
        <div className="pt-4 space-y-2.5">
          <span className="font-mono text-[11px] text-[#B08D3F] uppercase tracking-widest block font-bold">
            QUICK ENQUIRY SHORTCUTS // SELECT ROUTE:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickRoutes.map((route, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(route.query)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#1C1914] hover:bg-[#B08D3F]/20 border border-[#383229] hover:border-[#B08D3F] text-[#F6F3EC]/85 hover:text-[#E0C068] rounded-full font-mono text-xs transition-all duration-200 shadow-sm hover:scale-105 transform"
              >
                {route.label}
              </a>
            ))}
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
              <div className="relative z-10 font-mono text-[11px] text-[#F6F3EC]/70 group-hover:text-[#F6F3EC]/90 uppercase tracking-wider transition-colors">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

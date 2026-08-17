"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-3 sm:px-6 pt-2.5 sm:pt-3.5">
      {/* Floating macOS Liquid Glass Bar */}
      <div
        className={`pointer-events-auto max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 ${
          isScrolled
            ? "py-2 px-3 sm:px-5 bg-[#0F0D0A]/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.18),inset_0_-1px_1px_rgba(0,0,0,0.5)]"
            : "py-2.5 px-3.5 sm:px-6 bg-[#16130F]/80 backdrop-blur-xl backdrop-saturate-150 border border-[#B08D3F]/35 shadow-[0_12px_36px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]"
        } flex items-center justify-between gap-2 sm:gap-4`}
      >
        {/* Left: Brand Logo & Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D3F] rounded-full"
          aria-label={`${BUSINESS_INFO.name} Home`}
        >
          {/* Gold Monogram Badge */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-[#2A241C] to-[#12100C] border border-[#B08D3F]/80 flex items-center justify-center shadow-[0_2px_10px_rgba(176,141,63,0.25)] group-hover:border-[#E0C068] group-hover:shadow-[0_0_15px_rgba(201,162,39,0.4)] transition-all">
            <span className="font-display text-base sm:text-lg font-bold text-[#C9A227] tracking-wider">
              RV
            </span>
          </div>

          {/* Wordmark */}
          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-base font-bold tracking-wider text-[#F6F3EC] leading-tight group-hover:text-[#E0C068] transition-colors whitespace-nowrap">
              RV TOURS &amp; TRAVELS
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B] animate-pulse" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#B08D3F] uppercase font-semibold">
                {BUSINESS_INFO.tagline} · UDUPI
              </span>
            </div>
          </div>
        </Link>

        {/* Center: macOS Liquid Glass Pill Navigation (Desktop) */}
        <nav
          className="hidden lg:flex items-center p-0.5 xl:p-1 bg-white/[0.06] border border-white/[0.12] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] backdrop-blur-md shrink-0"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group px-2.5 xl:px-3.5 py-1 xl:py-1.5 text-[11px] xl:text-xs font-mono uppercase tracking-wider text-white hover:text-[#F6F3EC] hover:bg-white/[0.15] rounded-full transition-all duration-200 flex items-center gap-1 xl:gap-1.5 whitespace-nowrap"
            >
              <span className="text-[10px] xl:text-[11px] text-[#E0C068] font-bold group-hover:text-white transition-colors">
                {link.waypoint}
              </span>
              <span className="font-bold text-white tracking-wide">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right: Quick Action CTAs (Compact, Single-Line, Responsive) */}
        <div className="hidden sm:flex items-center gap-1.5 xl:gap-2.5 shrink-0">
          {/* Quick Call Pill (Full display on XL screens) */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-[#F6F3EC] hover:border-[#B08D3F] hover:bg-white/[0.1] hover:text-[#E0C068] transition-all shadow-sm whitespace-nowrap shrink-0 group"
            title="Call R Ramesh directly"
          >
            <div className="w-4 h-4 rounded-full bg-[#14120F] border border-[#B08D3F]/60 flex items-center justify-center shrink-0 group-hover:border-[#E0C068]">
              <Phone className="w-2.5 h-2.5 text-[#C9A227]" />
            </div>
            <span className="font-bold tracking-tight whitespace-nowrap">
              {BUSINESS_INFO.phoneDisplay}
            </span>
          </a>

          {/* Compact Call Icon Button on Large Laptops (1024px–1279px) */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="hidden lg:flex xl:hidden p-2 rounded-full bg-white/[0.06] border border-white/[0.1] text-[#C9A227] hover:border-[#B08D3F] hover:bg-white/[0.1] hover:text-[#E0C068] transition-all shrink-0"
            title={`Call R Ramesh: ${BUSINESS_INFO.phoneDisplay}`}
            aria-label="Call R Ramesh"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
          </a>

          {/* Ticket WhatsApp CTA */}
          <TicketButton
            href={BUSINESS_INFO.whatsappUrl}
            isExternal
            variant="primary-gold"
            size="sm"
            ticketCode="WHATSAPP"
            icon={<WhatsAppIcon className="w-3.5 h-3.5" withOriginalColor />}
            className="whitespace-nowrap shrink-0 rounded-full text-[11px] xl:text-xs font-bold px-3 xl:px-4 py-1.5"
          >
            Book on WhatsApp
          </TicketButton>
        </div>

        {/* Mobile Action & Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="p-2 bg-white/[0.06] border border-white/[0.1] rounded-full text-[#C9A227] hover:border-[#B08D3F] transition-colors sm:hidden"
            aria-label="Call R Ramesh"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 bg-white/[0.06] border border-white/[0.1] text-[#F6F3EC] hover:text-[#C9A227] hover:border-[#B08D3F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D3F] rounded-full transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Liquid Glass Effect) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden max-w-7xl mx-auto mt-2 bg-[#12100D]/95 backdrop-blur-2xl border border-white/12 rounded-2xl p-4 space-y-4 animate-in slide-in-from-top-3 duration-200 shadow-2xl">
          <div className="flex flex-col divide-y divide-white/10 font-mono text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 flex items-center justify-between text-white hover:text-[#E0C068] uppercase tracking-wider font-bold"
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-xs text-[#E0C068] font-bold">{link.waypoint}</span>
                  <span className="text-white">{link.label}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#E0C068]" />
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <TicketButton
              href={BUSINESS_INFO.whatsappUrl}
              isExternal
              variant="primary-gold"
              size="md"
              className="w-full whitespace-nowrap rounded-xl"
              icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
            >
              Book on WhatsApp
            </TicketButton>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full py-3 px-4 bg-white/[0.05] border border-white/10 text-[#F6F3EC] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 rounded-xl hover:border-[#B08D3F] whitespace-nowrap transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B08D3F] shrink-0" />
              <span className="whitespace-nowrap font-bold">Direct Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="text-center pt-1 font-mono text-[10px] text-[#B08D3F]/80 uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B]" />
            <span>{BUSINESS_INFO.proprietor} · Udupi, Karnataka</span>
          </div>
        </div>
      )}
    </header>
  );
}

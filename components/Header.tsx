"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowUpRight, HelpCircle } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const pathname = usePathname();
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
      {/* Floating Liquid Glass Bar */}
      <div
        className={`pointer-events-auto max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 ${
          isScrolled
            ? "py-2 px-4 sm:px-6 bg-[#0F0D0A]/90 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.18)]"
            : "py-2.5 px-4 sm:px-6 bg-[#16130F]/85 backdrop-blur-xl backdrop-saturate-150 border border-[#B08D3F]/40 shadow-[0_12px_36px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]"
        } flex items-center justify-between gap-3 sm:gap-4`}
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

        {/* Center: Clean Multi-Page Navigation (No Waypoint Numbers) */}
        <nav
          className="hidden lg:flex items-center p-1 bg-white/[0.06] border border-white/[0.12] rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)] backdrop-blur-md shrink-0 gap-0.5"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${
                  isActive
                    ? "bg-[#B08D3F]/30 text-[#E0C068] border border-[#B08D3F]/70 shadow-[0_0_10px_rgba(176,141,63,0.3)] font-bold"
                    : "text-white hover:text-[#F6F3EC] hover:bg-white/[0.15] border border-transparent font-semibold"
                }`}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}

          {/* Dedicated FAQ Link */}
          <Link
            href="/faq"
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
              pathname === "/faq"
                ? "bg-[#B08D3F]/30 text-[#E0C068] border border-[#B08D3F]/70 shadow-[0_0_10px_rgba(176,141,63,0.3)] font-bold"
                : "text-white hover:text-white hover:bg-white/[0.15] border border-transparent font-semibold"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#E0C068]" />
            <span>FAQ</span>
          </Link>
        </nav>

        {/* Right: Quick Action CTAs (Properly Contained within Capsule) */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Quick Call Pill */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-[#F6F3EC] hover:border-[#B08D3F] hover:bg-white/[0.1] hover:text-[#E0C068] transition-all shadow-sm whitespace-nowrap shrink-0 group"
            title="Call R Ramesh directly"
          >
            <div className="w-4 h-4 rounded-full bg-[#14120F] border border-[#B08D3F]/60 flex items-center justify-center shrink-0 group-hover:border-[#E0C068]">
              <Phone className="w-2.5 h-2.5 text-[#C9A227]" />
            </div>
            <span className="font-bold tracking-tight whitespace-nowrap">
              {BUSINESS_INFO.phoneDisplay}
            </span>
          </a>

          {/* Compact Call Icon Button on Laptops (1024px–1279px) */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="hidden lg:flex xl:hidden p-2 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#C9A227] hover:border-[#B08D3F] hover:bg-white/[0.1] hover:text-[#E0C068] transition-all shrink-0"
            title={`Call R Ramesh: ${BUSINESS_INFO.phoneDisplay}`}
            aria-label="Call R Ramesh"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
          </a>

          {/* WhatsApp CTA Button (Pill Styled, Fits Perfectly Inside Container) */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-[#1F1A13] to-[#120F0C] text-[#F6F3EC] border border-[#B08D3F] hover:border-[#E0C068] hover:shadow-[0_4px_20px_rgba(176,141,63,0.35)] transition-all duration-200 font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4" withOriginalColor />
            <span className="text-[#F6F3EC] group-hover:text-white">Book on WhatsApp</span>
          </a>
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden max-w-7xl mx-auto mt-2 bg-[#12100D]/95 backdrop-blur-2xl border border-white/12 rounded-2xl p-4 space-y-4 animate-in slide-in-from-top-3 duration-200 shadow-2xl">
          <div className="flex flex-col divide-y divide-white/10 font-mono text-sm">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 flex items-center justify-between uppercase tracking-wider font-bold ${
                    isActive ? "text-[#E0C068]" : "text-white hover:text-[#E0C068]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E0C068]" />
                </Link>
              );
            })}

            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 flex items-center justify-between uppercase tracking-wider font-bold ${
                pathname === "/faq" ? "text-[#E0C068]" : "text-white hover:text-[#E0C068]"
              }`}
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#E0C068]" />
                <span>Frequently Asked Questions</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#E0C068]" />
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-gradient-to-br from-[#1F1A13] to-[#120F0C] border border-[#B08D3F] hover:border-[#E0C068] text-[#F6F3EC] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 rounded-xl transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4" withOriginalColor />
              <span>Book on WhatsApp</span>
            </a>

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

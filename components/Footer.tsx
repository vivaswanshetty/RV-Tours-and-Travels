"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Compass, HelpCircle } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#14120F] text-[#F6F3EC] relative pt-12 pb-16 border-t-2 border-dashed border-[#B08D3F]/40 overflow-hidden">
      {/* Boarding Pass Header Stamp */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 pb-8 border-b border-[#383229]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1C1914] border border-[#B08D3F] rounded flex items-center justify-center font-display text-2xl font-bold text-[#C9A227]">
              RV
            </div>
            <div>
              <div className="font-display text-xl font-bold text-[#F6F3EC] tracking-wider">
                RV TOURS &amp; TRAVELS
              </div>
              <div className="font-mono text-xs text-[#C9A227] tracking-widest uppercase">
                {BUSINESS_INFO.tagline} · UDUPI, KARNATAKA
              </div>
            </div>
          </div>

          {/* Quick Dispatch Badge */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 bg-[#1C1914] border border-[#383229] rounded font-mono text-xs text-[#E0C068] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E6B6B]" />
              <span>TERMINAL: UDUPI (UD)</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#1C1914] border border-[#383229] rounded text-[#F6F3EC] hover:text-[#C9A227] hover:border-[#B08D3F] transition-colors focus:outline-none"
              aria-label="Scroll back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Boarding Pass Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Operator Manifest */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#B08D3F] uppercase tracking-widest font-bold">
              // OPERATOR MANIFEST
            </div>
            <div className="p-3 bg-[#1C1914] border border-[#383229]/80 rounded space-y-1">
              <div className="text-[10px] text-[#F6F3EC]/60">PROPRIETOR</div>
              <div className="text-sm font-bold text-[#F6F3EC] font-display">{BUSINESS_INFO.proprietor}</div>
              <div className="text-[11px] text-[#C9A227]">Chauffeur &amp; Tour Management</div>
            </div>
            <p className="text-[11px] text-[#F6F3EC]/70 leading-relaxed font-body">
              Boutique, owner-supervised tour &amp; taxi operator serving coastal Karnataka and pan-state routes.
            </p>
          </div>

          {/* Column 2: Direct Lines */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#B08D3F] uppercase tracking-widest font-bold">
              // DIRECT LINES
            </div>
            <div className="space-y-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F6F3EC] hover:text-[#C9A227] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" withOriginalColor />
                <span>WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-2.5 text-[#F6F3EC] hover:text-[#C9A227] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A227]" />
                <span>Direct Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 text-[#F6F3EC] hover:text-[#C9A227] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span className="text-[11px]">{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Column 3: Site Navigation & Subpages */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#B08D3F] uppercase tracking-widest font-bold">
              // NAVIGATION &amp; PAGES
            </div>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F6F3EC]/80 hover:text-[#C9A227] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#B08D3F]">➔</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-[#F6F3EC]/80 hover:text-[#C9A227] transition-colors flex items-center justify-between"
                >
                  <span>Frequently Asked Questions</span>
                  <span className="text-[#B08D3F]">➔</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Base Location */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#B08D3F] uppercase tracking-widest font-bold">
              // BASE LOCATION
            </div>
            <div className="flex items-start gap-2.5 text-[#F6F3EC]/80">
              <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-[#F6F3EC]">{BUSINESS_INFO.location}</div>
                <div className="text-[11px] text-[#E0C068]">{BUSINESS_INFO.coordinates}</div>
                <div className="text-[11px] text-[#F6F3EC]/60 mt-1">Mangalore Airport (IXE) Connect</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Policy Manifest Row */}
        <div className="pt-8 border-t border-[#383229] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#F6F3EC]/70">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-[#C9A227] transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-and-conditions" className="hover:text-[#C9A227] transition-colors underline-offset-4 hover:underline">
              Terms &amp; Conditions
            </Link>
            <span>·</span>
            <Link href="/cancellation-policy" className="hover:text-[#C9A227] transition-colors underline-offset-4 hover:underline">
              Cancellation &amp; Refunds
            </Link>
          </div>

          <div className="flex items-center gap-2 text-[#C9A227] font-semibold">
            <span>{BUSINESS_INFO.tagline}</span>
            <span>·</span>
            <span>Udupi, Karnataka</span>
          </div>
        </div>

        {/* Boarding Pass Bottom Perforation & Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] text-[#F6F3EC]/50">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Managed by {BUSINESS_INFO.proprietor}.
          </div>
          <div>
            Base: {BUSINESS_INFO.coordinates}
          </div>
        </div>
      </div>
    </footer>
  );
}

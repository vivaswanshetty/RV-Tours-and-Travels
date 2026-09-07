"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, Compass, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

const TRIP_OPTIONS = [
  "Airport Transfer",
  "Karnataka Temple Circuit",
  "Goa Trip",
  "Kerala/Mysuru/Coorg Trip",
  "Custom Trip",
] as const;

export default function StickyQuoteTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<string>(TRIP_OPTIONS[0]);
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close when clicking outside panel
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = [
      `Hello Ramesh ji, I would like to plan a trip with RV Tours & Travels.`,
      ``,
      `• Name: ${name.trim()}`,
      `• WhatsApp: ${phone.trim()}`,
      `• Interested In: ${interest}`,
      ``,
      `Please share transparent pricing and vehicle availability.`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setInterest(TRIP_OPTIONS[0]);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div ref={panelRef} className="print:hidden">
      {/* Collapsed State: Vertical Ticket Stub on Desktop, Bottom Dock on Mobile */}
      {!isOpen && (
        <>
          {/* Desktop Right Edge Tab */}
          <button
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Open Plan My Trip quote form"
            className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#14120F] text-[#F6F3EC] border-l-2 border-t-2 border-b-2 border-[#B08D3F] hover:border-[#E0C068] rounded-l-xl px-3 py-5 shadow-[-5px_0_25px_rgba(0,0,0,0.6)] hover:shadow-[-5px_0_25px_rgba(176,141,63,0.35)] transition-all duration-300 hover:-translate-x-1 group flex-col items-center gap-3 cursor-pointer"
          >
            {/* Top & Bottom Ticket Notch Cutouts */}
            <span className="absolute -left-2 top-2 w-3.5 h-3.5 rounded-full bg-[#F6F3EC] border border-[#B08D3F]/60" />
            <span className="absolute -left-2 bottom-2 w-3.5 h-3.5 rounded-full bg-[#F6F3EC] border border-[#B08D3F]/60" />

            {/* Compass / Ticket Icon */}
            <div className="w-6 h-6 rounded-full bg-[#1F4C4C] border border-[#B08D3F] flex items-center justify-center text-[#E0C068] group-hover:rotate-45 transition-transform duration-300">
              <Compass className="w-3.5 h-3.5" />
            </div>

            {/* Vertical Typography: PLAN MY TRIP */}
            <span
              className="font-mono text-[11px] font-bold tracking-widest text-[#E0C068] uppercase group-hover:text-white transition-colors"
              style={{ writingMode: "vertical-rl" }}
            >
              PLAN MY TRIP
            </span>

            {/* Perforated Indicator Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B] animate-pulse" />
          </button>

          {/* Mobile Bottom-Left Docked Ticket Tab (keeps clear of WhatsApp at bottom-right) */}
          <button
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Open Plan My Trip quote form"
            className="md:hidden fixed bottom-6 left-4 z-40 bg-[#14120F] text-[#F6F3EC] border border-[#B08D3F] hover:border-[#E0C068] rounded-full px-4 py-2.5 shadow-2xl flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
          >
            <div className="w-5 h-5 rounded-full bg-[#1F4C4C] border border-[#B08D3F] flex items-center justify-center text-[#E0C068]">
              <Compass className="w-3 h-3" />
            </div>
            <span className="font-mono text-xs font-bold tracking-wider text-[#E0C068] uppercase">
              Plan My Trip
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B] animate-pulse" />
          </button>
        </>
      )}

      {/* Expanded Inline State: Ticket Stub Quote Form */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Plan My Trip Quick Form"
          className="fixed z-50 md:right-4 md:top-1/2 md:-translate-y-1/2 bottom-4 inset-x-4 md:inset-x-auto w-auto md:w-96 bg-[#14120F] text-[#F6F3EC] border-2 border-[#B08D3F] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-5 sm:p-6 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Decorative Corner Notches on Top and Bottom edges */}
          <span className="absolute -left-2 top-10 w-4 h-4 rounded-full bg-[#F6F3EC] border border-[#B08D3F]" />
          <span className="absolute -right-2 top-10 w-4 h-4 rounded-full bg-[#F6F3EC] border border-[#B08D3F]" />

          {/* Header Strip */}
          <div className="flex items-center justify-between pb-3 border-b border-[#383229] mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#1C1914] border border-[#B08D3F] flex items-center justify-center font-display text-sm font-bold text-[#C9A227]">
                RV
              </div>
              <div>
                <div className="font-display text-base font-bold text-[#F6F3EC] tracking-wide">
                  Plan My Trip
                </div>
                <div className="font-mono text-[10px] text-[#B08D3F] tracking-widest uppercase">
                  DIRECT DISPATCH // R RAMESH
                </div>
              </div>
            </div>

            {/* Close Control Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded text-[#F6F3EC]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close quote form"
              title="Close form"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-[#2E6B6B] mx-auto" />
              <div className="font-display text-lg font-bold text-[#F6F3EC]">
                Dispatching to WhatsApp...
              </div>
              <p className="font-body text-xs text-[#F6F3EC]/80">
                Opening pre-filled message with proprietor R Ramesh on +91 98455 11169.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Name */}
              <div className="space-y-1">
                <label
                  htmlFor="quote-tab-name"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#B08D3F] font-semibold"
                >
                  Your Name *
                </label>
                <input
                  id="quote-tab-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Rao"
                  className="w-full px-3 py-2 bg-[#1C1914] border border-[#383229] focus:border-[#B08D3F] rounded text-xs font-mono text-[#F6F3EC] placeholder-[#F6F3EC]/30 outline-none transition-colors"
                />
              </div>

              {/* Field 2: WhatsApp Number */}
              <div className="space-y-1">
                <label
                  htmlFor="quote-tab-phone"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#B08D3F] font-semibold"
                >
                  WhatsApp Number *
                </label>
                <input
                  id="quote-tab-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3 py-2 bg-[#1C1914] border border-[#383229] focus:border-[#B08D3F] rounded text-xs font-mono text-[#F6F3EC] placeholder-[#F6F3EC]/30 outline-none transition-colors"
                />
              </div>

              {/* Field 3: I'm Interested In Dropdown */}
              <div className="space-y-1">
                <label
                  htmlFor="quote-tab-interest"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#B08D3F] font-semibold"
                >
                  I&apos;m Interested In
                </label>
                <select
                  id="quote-tab-interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3 py-2 bg-[#1C1914] border border-[#383229] focus:border-[#B08D3F] rounded text-xs font-mono text-[#F6F3EC] outline-none transition-colors cursor-pointer"
                >
                  {TRIP_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#1C1914] text-[#F6F3EC]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ticket Perforation Divider */}
              <div className="pt-2 border-t border-dashed border-[#B08D3F]/50 flex items-center justify-between text-[10px] font-mono text-[#F6F3EC]/60">
                <span>SECTOR: DIRECT DISPATCH</span>
                <span className="text-[#E0C068]">{BUSINESS_INFO.phoneDisplay}</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#B08D3F] via-[#C9A227] to-[#B08D3F] text-[#14120F] hover:brightness-110 font-mono text-xs uppercase font-bold tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4" withOriginalColor />
                <span>Send via WhatsApp ➔</span>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

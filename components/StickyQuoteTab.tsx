"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Compass,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Calendar,
  Clock,
  User,
  Phone,
  Car,
  Users,
  FileText,
  ChevronDown,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";
import ModernDatePicker, { ModernTimePicker, parseDateString } from "./ModernDatePicker";

const TRIP_OPTIONS = [
  "Airport Drop / Pickup",
  "Karnataka Temple Circuit",
  "Goa Coastal Tour",
  "Kerala, Mysuru & Coorg Tour",
  "Custom Outstation Road Trip",
] as const;

const VEHICLE_OPTIONS = [
  "Select vehicle type",
  "Comfort Sedan (Dzire / Etios) — 1-4 Pax",
  "Premium SUV / MUV (Innova Crysta / Ertiga) — 6-7 Pax",
  "Tempo Traveller (Force Executive) — 12-20 Pax",
  "Advise based on group size",
] as const;

const MEMBER_OPTIONS = [
  "Select no. of members",
  "1 - 2 Members",
  "3 - 4 Members",
  "5 - 7 Members",
  "8 - 12 Members",
  "13+ Members",
] as const;

const DURATION_OPTIONS = [
  "Select trip duration",
  "1 Day (Same Day)",
  "2 Days / 1 Night",
  "3 Days / 2 Nights",
  "4 Days / 3 Nights",
  "5+ Days (Custom)",
] as const;

const getTravelDatesSummary = (from: string, to: string) => {
  if (from && to) {
    return from === to ? `${from} (Same Day Return)` : `${from} to ${to}`;
  }
  if (from) return `${from} (Return TBA / One-Way)`;
  if (to) return `Until ${to}`;
  return "";
};

export function openTripBookingModal(detail?: {
  interest?: string;
  destination?: string;
  vehicle?: string;
}) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-trip-modal", { detail }));
  }
}

export default function StickyQuoteTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<string>(TRIP_OPTIONS[0]);
  const [destinationCustom, setDestinationCustom] = useState("");
  const [vehicleType, setVehicleType] = useState<string>(VEHICLE_OPTIONS[0]);
  const [members, setMembers] = useState<string>(MEMBER_OPTIONS[0]);
  const [tripDays, setTripDays] = useState<string>(DURATION_OPTIONS[0]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Listen for open-trip-modal custom event from buttons across the site
  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<{
        interest?: string;
        destination?: string;
        vehicle?: string;
      }>;
      setIsOpen(true);
      if (customEvent.detail?.interest) setInterest(customEvent.detail.interest);
      if (customEvent.detail?.destination) setDestinationCustom(customEvent.detail.destination);
      if (customEvent.detail?.vehicle) setVehicleType(customEvent.detail.vehicle);
    };
    window.addEventListener("open-trip-modal", handleOpenModal);
    return () => window.removeEventListener("open-trip-modal", handleOpenModal);
  }, []);

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

  // Lock body scroll when window modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const destStr = destinationCustom.trim()
      ? `${destinationCustom.trim()} (mention if any other places also)`
      : `${interest} (mention if any other places also)`;

    const datesStr = getTravelDatesSummary(fromDate, toDate);

    const message = [
      `Hello Ramesh, I would like to plan a trip with RV Tours & Travels.`,
      ``,
      `*Trip Enquiry Details:*`,
      `• *Passenger Name:* ${name.trim()}`,
      `• *WhatsApp:* ${phone.trim()}`,
      `• *Destination / Route:* ${destStr}`,
      `• *Vehicle Preference:* ${vehicleType && vehicleType !== "Select vehicle type" ? vehicleType : "[Enter vehicle type / name]"}`,
      `• *No. of Members:* ${members && members !== "Select no. of members" ? members : "[Enter no. of members]"}`,
      `• *No. of Trip Days:* ${tripDays && tripDays !== "Select trip duration" ? tripDays : "[Enter no. of days]"}`,
      `• *Travel Dates:* ${datesStr ? datesStr : "[Enter travel dates (From – To)]"}`,
      `• *Pickup Time (Optional):* ${pickupTime && pickupTime.trim() ? pickupTime.trim() : "Not specified (Optional)"}`,
    ];

    if (notes.trim()) {
      message.push(``);
      message.push(`*Notes / Requests:* ${notes.trim()}`);
    }

    message.push(``);
    message.push(`Please share vehicle availability and transparent pricing estimate.`);

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
      message.join("\n")
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setInterest(TRIP_OPTIONS[0]);
      setDestinationCustom("");
      setVehicleType(VEHICLE_OPTIONS[0]);
      setMembers(MEMBER_OPTIONS[0]);
      setTripDays(DURATION_OPTIONS[0]);
      setFromDate("");
      setToDate("");
      setPickupTime("");
      setNotes("");
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div className="print:hidden">
      {/* Collapsed State: Vertical Ticket Stub on Desktop, Bottom Dock on Mobile */}
      {!isOpen && (
        <>
          {/* Desktop Right Edge Tab */}
          <button
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Open Plan My Trip quote window"
            className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#14120F] text-[#F6F3EC] border-l-2 border-t-2 border-b-2 border-[#B08D3F] hover:border-[#E0C068] rounded-l-xl px-3 py-5 shadow-[-5px_0_25px_rgba(0,0,0,0.6)] hover:shadow-[-5px_0_25px_rgba(176,141,63,0.35)] transition-all duration-300 hover:-translate-x-1 group flex-col items-center gap-3 cursor-pointer"
          >
            {/* Compass Icon */}
            <div className="w-6 h-6 rounded-full bg-[#1F4C4C] border border-[#B08D3F] flex items-center justify-center text-[#E0C068] group-hover:rotate-45 transition-transform duration-300">
              <Compass className="w-3.5 h-3.5" />
            </div>

            {/* Vertical Typography: PLAN MY TRIP */}
            <span
              className="font-body text-[11px] font-bold tracking-widest text-[#E0C068] uppercase group-hover:text-white transition-colors"
              style={{ writingMode: "vertical-rl" }}
            >
              PLAN MY TRIP
            </span>

            {/* Indicator Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B] animate-pulse" />
          </button>

          {/* Mobile Bottom-Left Docked Ticket Tab */}
          <button
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Open Plan My Trip quote window"
            className="md:hidden fixed bottom-6 left-4 z-40 bg-[#14120F] text-[#F6F3EC] border border-[#B08D3F] hover:border-[#E0C068] rounded-full px-4 py-2.5 shadow-2xl flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
          >
            <div className="w-5 h-5 rounded-full bg-[#1F4C4C] border border-[#B08D3F] flex items-center justify-center text-[#E0C068]">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <span className="font-body text-xs font-bold tracking-wider text-[#E0C068] uppercase">
              Plan My Trip
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B] animate-pulse" />
          </button>
        </>
      )}

      {/* Expanded State: Big Screen-Covering Window Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            ref={panelRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Plan My Trip"
            className="w-full max-w-5xl h-auto max-h-[92vh] bg-[#14120F] text-[#F6F3EC] border border-[#B08D3F] rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 relative"
          >
            {/* Window Top Title Bar */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-[#383229] bg-[#181510] shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#14120F] border border-[#B08D3F] flex items-center justify-center font-display text-base font-bold text-[#C9A227] shadow-inner">
                  RV
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F6F3EC] tracking-wide">
                    Plan Your Trip
                  </h3>
                  <div className="text-xs font-body text-[#E0C068] font-medium flex items-center gap-2 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>Direct Owner Coordination with R Ramesh · Quick WhatsApp Quote</span>
                  </div>
                </div>
              </div>

              {/* Close Button & ESC hint */}
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="hidden sm:inline-block font-body text-xs text-[#F6F3EC]/50 border border-white/10 px-2.5 py-1 rounded-md">
                  ESC to close
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-[#F6F3EC]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-[#B08D3F]"
                  aria-label="Close trip planning window"
                  title="Close window"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Window Content Body */}
            {submitted ? (
              <div className="p-8 sm:p-16 text-center space-y-4 my-auto animate-in fade-in">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
                <div className="font-display text-2xl font-bold text-[#F6F3EC]">
                  Opening Your Trip Enquiry on WhatsApp...
                </div>
                <p className="font-body text-sm text-[#F6F3EC]/80 max-w-md mx-auto leading-relaxed">
                  Connecting directly with proprietor <strong>R Ramesh</strong> on{" "}
                  <span className="text-[#E0C068] font-body font-semibold">+91 98455 11169</span>.
                </p>
                <div className="text-xs font-body font-medium text-[#B08D3F]">
                  Reference: RV-{Date.now().toString().slice(-6)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 space-y-6">
                  {/* Master 2-Column Responsive Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* LEFT COLUMN: Passenger & Sector Logistics */}
                    <div className="space-y-4">
                      <div className="text-xs sm:text-sm font-body font-semibold uppercase tracking-wider text-[#E0C068] pb-1.5 border-b border-[#383229] flex items-center gap-2">
                        <User className="w-4 h-4 text-[#C9A227]" />
                        <span>Passenger &amp; Route Logistics</span>
                      </div>

                      {/* Field 1: Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="quote-tab-name"
                          className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal"
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
                          className="w-full px-3.5 py-2.5 bg-[#1C1914] border border-[#383229] focus:border-[#B08D3F] rounded-lg text-sm font-body font-normal text-[#F6F3EC] placeholder-[#F6F3EC]/40 outline-none transition-colors"
                        />
                      </div>

                      {/* Field 2: WhatsApp Number */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="quote-tab-phone"
                          className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal"
                        >
                          WhatsApp Contact Number *
                        </label>
                        <input
                          id="quote-tab-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98455 11169"
                          className="w-full px-3.5 py-2.5 bg-[#1C1914] border border-[#383229] focus:border-[#B08D3F] rounded-lg text-sm font-body font-normal text-[#F6F3EC] placeholder-[#F6F3EC]/40 outline-none transition-colors"
                        />
                      </div>

                      {/* Field 3: Sector Dropdown */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="quote-tab-interest"
                          className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal"
                        >
                          Primary Sector / Tour Package
                        </label>
                        <div className="relative">
                          <select
                            id="quote-tab-interest"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className="w-full appearance-none pl-3.5 pr-10 py-2.5 bg-[#1C1914] border border-[#383229] hover:border-[#B08D3F]/70 focus:border-[#B08D3F] rounded-lg text-sm font-body font-normal text-[#F6F3EC] outline-none transition-colors cursor-pointer"
                          >
                            {TRIP_OPTIONS.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#1C1914] text-[#F6F3EC]">
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B08D3F]" />
                        </div>
                      </div>

                      {/* Field 4: Destination & Other Places */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="quote-tab-destination"
                          className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal flex items-center justify-between"
                        >
                          <span>Destination / Places</span>
                          <span className="text-xs text-stone-400 font-normal">
                            (mention if any other places also)
                          </span>
                        </label>
                        <input
                          id="quote-tab-destination"
                          type="text"
                          value={destinationCustom}
                          onChange={(e) => setDestinationCustom(e.target.value)}
                          placeholder="e.g. Dharmasthala, Kukke, Kollur (mention if any other places also)"
                          className="w-full px-3.5 py-2.5 bg-[#1C1914] border border-[#383229] focus:border-[#B08D3F] rounded-lg text-sm font-body font-normal text-[#F6F3EC] placeholder-[#F6F3EC]/40 outline-none transition-colors"
                        />
                      </div>

                      {/* Field 5: Vehicle Preference */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="quote-tab-vehicle"
                          className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal"
                        >
                          Vehicle Preference
                        </label>
                        <div className="relative">
                          <select
                            id="quote-tab-vehicle"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                            className="w-full appearance-none pl-3.5 pr-10 py-2.5 bg-[#1C1914] border border-[#383229] hover:border-[#B08D3F]/70 focus:border-[#B08D3F] rounded-lg text-sm font-body font-normal text-[#F6F3EC] outline-none transition-colors cursor-pointer"
                          >
                            {VEHICLE_OPTIONS.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#1C1914] text-[#F6F3EC]">
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B08D3F]" />
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Schedule, Party Size & Timings */}
                    <div className="space-y-4">
                      <div className="text-xs sm:text-sm font-body font-semibold uppercase tracking-wider text-[#E0C068] pb-1.5 border-b border-[#383229] flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C9A227]" />
                        <span>Schedule &amp; Group Coordination</span>
                      </div>

                      {/* Fields 6 & 7: Members & Trip Days (2-col grid) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="quote-tab-members"
                            className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal"
                          >
                            Members (Pax)
                          </label>
                          <div className="relative">
                            <select
                              id="quote-tab-members"
                              value={members}
                              onChange={(e) => setMembers(e.target.value)}
                              className="w-full appearance-none pl-3.5 pr-10 py-2.5 bg-[#1C1914] border border-[#383229] hover:border-[#B08D3F]/70 focus:border-[#B08D3F] rounded-lg text-sm font-body font-normal text-[#F6F3EC] outline-none transition-colors cursor-pointer"
                            >
                              {MEMBER_OPTIONS.map((opt) => (
                                <option key={opt} value={opt} className="bg-[#1C1914] text-[#F6F3EC]">
                                  {opt}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B08D3F]" />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="quote-tab-duration"
                            className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal"
                          >
                            Trip Duration (Days)
                          </label>
                          <div className="relative">
                            <select
                              id="quote-tab-duration"
                              value={tripDays}
                              onChange={(e) => setTripDays(e.target.value)}
                              className="w-full appearance-none pl-3.5 pr-10 py-2.5 bg-[#1C1914] border border-[#383229] hover:border-[#B08D3F]/70 focus:border-[#B08D3F] rounded-lg text-sm font-body font-normal text-[#F6F3EC] outline-none transition-colors cursor-pointer"
                            >
                              {DURATION_OPTIONS.map((opt) => (
                                <option key={opt} value={opt} className="bg-[#1C1914] text-[#F6F3EC]">
                                  {opt}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B08D3F]" />
                          </div>
                        </div>
                      </div>

                      {/* Field 8: Travel Dates (Separate From & To Date Pickers) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="quote-tab-from-date"
                            className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal"
                          >
                            Departure Date (From)
                          </label>
                          <ModernDatePicker
                            id="quote-tab-from-date"
                            value={fromDate}
                            onChange={(val) => setFromDate(val)}
                            placeholder="Select departure"
                            label="Departure Date (From)"
                            theme="dark"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="quote-tab-to-date"
                            className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal"
                          >
                            Return Date (To)
                          </label>
                          <ModernDatePicker
                            id="quote-tab-to-date"
                            value={toDate}
                            onChange={(val) => setToDate(val)}
                            minDate={fromDate ? parseDateString(fromDate) : null}
                            isReturn={true}
                            placeholder="Select return"
                            label="Return Date (To)"
                            theme="dark"
                          />
                        </div>
                      </div>

                      {/* Field 9: Pickup Time (Optional) */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="quote-tab-time"
                          className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal flex items-center justify-between"
                        >
                          <span>Pickup Time (Optional)</span>
                          <span className="text-xs text-stone-400 font-normal">
                            non-mandatory
                          </span>
                        </label>
                        <ModernTimePicker
                          id="quote-tab-time"
                          value={pickupTime}
                          onChange={(val) => setPickupTime(val)}
                          placeholder="e.g. 06:00 AM or enter custom time"
                          theme="dark"
                        />
                      </div>

                      {/* Field 10: Additional Notes */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="quote-tab-notes"
                          className="block font-body text-xs font-semibold text-[#E0C068] tracking-normal"
                        >
                          Special Requests / Temple Halts (Optional)
                        </label>
                        <textarea
                          id="quote-tab-notes"
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Flight numbers, senior citizen assistance, luggage amount, specific temple timings..."
                          className="w-full px-3.5 py-2.5 bg-[#1C1914] border border-[#383229] focus:border-[#B08D3F] rounded-lg text-sm font-body font-normal text-[#F6F3EC] placeholder-[#F6F3EC]/40 outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Window Bottom Action Deck */}
                <div className="border-t border-[#383229] bg-[#181510] px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  <div className="flex items-center gap-2 text-xs font-body font-normal text-[#F6F3EC]/80">
                    <ShieldCheck className="w-4 h-4 text-[#C9A227] shrink-0" />
                    <span>
                      Direct Owner Coordination with R Ramesh · No surge pricing · Zero cancellation fees
                    </span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="h-11 px-5 rounded-lg border border-[#383229] hover:border-[#B08D3F] text-sm font-body font-medium text-[#F6F3EC]/80 hover:text-white transition-colors cursor-pointer w-1/3 sm:w-auto text-center"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="flex-1 sm:flex-initial h-11 px-7 bg-gradient-to-r from-[#B08D3F] via-[#C9A227] to-[#B08D3F] text-[#14120F] hover:brightness-110 font-body text-sm uppercase font-bold tracking-wide rounded-lg shadow-lg flex items-center justify-center gap-2.5 cursor-pointer transition-all active:scale-98"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" withOriginalColor />
                      <span>Send via WhatsApp ➔</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

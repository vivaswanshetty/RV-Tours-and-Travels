"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Calendar,
  Car,
  Loader2,
  AlertCircle,
  History,
  Trash2,
  ChevronDown,
  ChevronUp,
  RotateCcw,
} from "lucide-react";
import { BUSINESS_INFO, FLEET_CATEGORIES } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";
import ModernDatePicker from "./ModernDatePicker";

interface EnquiryHistoryItem {
  id: string;
  refCode: string;
  name: string;
  phone: string;
  serviceType: string;
  vehicleType: string;
  pickupLocation: string;
  destination: string;
  travelDate: string;
  message?: string;
  createdAt: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Airport Drop / Pickup",
    vehicleType: "Comfort Sedan (Dzire / Etios)",
    pickupLocation: "",
    destination: "",
    travelDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [history, setHistory] = useState<EnquiryHistoryItem[]>([]);
  const [activeTab, setActiveTab] = useState<"form" | "history">("form");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("rv_trip_enquiry_history");
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load enquiry history:", e);
    }
  }, []);

  const clearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem("rv_trip_enquiry_history");
    } catch {}
  };

  const buildCustomWhatsAppUrl = (item: {
    refCode: string;
    name: string;
    phone: string;
    serviceType: string;
    vehicleType: string;
    pickupLocation: string;
    destination: string;
    travelDate: string;
    message?: string;
  }) => {
    const lines = [
      `Hello Ramesh, I would like to enquire about a booking with RV Tours & Travels (Ref: ${item.refCode}).`,
      ``,
      `*Passenger Name:* ${item.name}`,
      `*Contact Number:* ${item.phone}`,
      `*Service:* ${item.serviceType}`,
      `*Vehicle Preference:* ${item.vehicleType}`,
      `*Pickup Location:* ${item.pickupLocation || "Udupi / Manipal area"}`,
      `*Destination:* ${item.destination || "As discussed"}`,
      `*Travel Date & Time:* ${item.travelDate || "Flexible / Not specified"}`,
    ];

    if (item.message && item.message.trim()) {
      lines.push(`*Notes / Requirements:* ${item.message.trim()}`);
    }

    lines.push(``);
    lines.push(`Please share vehicle availability and tariff estimate.`);

    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const buildWhatsAppUrl = (code?: string) => {
    const activeRef = code || refCode || `RV-${Date.now().toString().slice(-6)}`;
    return buildCustomWhatsAppUrl({
      ...formData,
      refCode: activeRef,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const code = `RV-${Date.now().toString().slice(-6)}`;
    setRefCode(code);

    const now = new Date();
    const formattedDate =
      now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }) +
      ", " +
      now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

    const newRecord: EnquiryHistoryItem = {
      id: code,
      refCode: code,
      name: formData.name,
      phone: formData.phone,
      serviceType: formData.serviceType,
      vehicleType: formData.vehicleType,
      pickupLocation: formData.pickupLocation,
      destination: formData.destination,
      travelDate: formData.travelDate,
      message: formData.message,
      createdAt: formattedDate,
    };

    const updatedHistory = [newRecord, ...history.filter((h) => h.id !== code)].slice(0, 10);
    setHistory(updatedHistory);
    try {
      localStorage.setItem("rv_trip_enquiry_history", JSON.stringify(updatedHistory));
    } catch (err) {
      console.warn("Could not save history to localStorage", err);
    }

    const whatsappUrl = buildWhatsAppUrl(code);

    // Silent background record to API / Web3Forms (does not block customer)
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, refCode: code }),
      }).catch((err) => console.log("Background record:", err));
    } catch {
      // Ignore background errors
    }

    // Immediately open WhatsApp with the pre-filled enquiry message
    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      // If popup was blocked by browser, redirect current window
      window.location.href = whatsappUrl;
    }

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#14120F] text-[#F6F3EC] relative border-b border-[#383229]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Waypoint 05 Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#E0C068]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
            <span>WAYPOINT 05 // DIRECT DISPATCH &amp; BOOKING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC]">
            Get in Touch &amp; Reserve Your Trip
          </h2>
          <p className="font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed font-light">
            Direct coordination with proprietor R Ramesh. Fast response via WhatsApp, phone call, or trip enquiry form for price estimates and vehicle availability.
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact Options & Ticket Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#1C1914] border border-[#B08D3F] rounded-lg flex items-center justify-between group hover:bg-[#242019] hover:border-[#E0C068] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-[#14120F] border border-[#B08D3F] flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6" withOriginalColor />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#B08D3F] uppercase tracking-widest block font-bold">
                      FASTEST RESPONSE
                    </span>
                    <span className="font-display text-lg font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors">
                      Chat on WhatsApp
                    </span>
                    <span className="font-mono text-xs text-[#F6F3EC]/70 block mt-0.5">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#C9A227] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              {/* Direct Call Card */}
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="p-5 bg-[#1C1914] border border-[#383229] rounded-lg flex items-center justify-between group hover:border-[#B08D3F] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-[#14120F] border border-[#383229] flex items-center justify-center text-[#C9A227]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#B08D3F] uppercase tracking-widest block font-bold">
                      PROPRIETOR DIRECT LINE
                    </span>
                    <span className="font-display text-lg font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors">
                      Call R Ramesh
                    </span>
                    <span className="font-mono text-xs text-[#F6F3EC]/70 block mt-0.5">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#B08D3F] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-5 bg-[#1C1914] border border-[#383229] rounded-lg flex items-center justify-between group hover:border-[#B08D3F] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-[#14120F] border border-[#383229] flex items-center justify-center text-[#F6F3EC]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#B08D3F] uppercase tracking-widest block font-bold">
                      EMAIL
                    </span>
                    <span className="font-display text-lg font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors">
                      Email
                    </span>
                    <span className="font-mono text-xs text-[#F6F3EC]/70 block mt-0.5 break-all">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#B08D3F] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-[#1C1914] border border-[#383229] rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between px-2 pt-1">
                <span className="font-mono text-xs text-[#B08D3F] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                  BASE STATION MAP // UDUPI, KARNATAKA
                </span>
                <span className="font-mono text-[10px] text-[#F6F3EC]/60">13.3409° N, 74.7421° E</span>
              </div>
              <div className="relative aspect-[16/9] w-full rounded overflow-hidden border border-[#383229]/60">
                <iframe
                  title="RV Tours and Travels Base Location - Udupi Karnataka"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Ticket Stub Booking & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C1914] border border-[#B08D3F] rounded-lg p-4 sm:p-8 shadow-2xl relative">
              {/* Form Ticket Header with Tab Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#383229] mb-6">
                <div>
                  <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold block">
                    RESERVATION MANIFEST
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#F6F3EC]">
                    {activeTab === "form" ? "Send Trip Enquiry" : "Recent Enquiries"}
                  </h3>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 bg-[#14120F] border border-[#383229] rounded-lg">
                  <button
                    type="button"
                    onClick={() => setActiveTab("form")}
                    className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                      activeTab === "form"
                        ? "bg-[#B08D3F] text-[#14120F] font-bold shadow"
                        : "text-[#F6F3EC]/70 hover:text-[#E0C068]"
                    }`}
                  >
                    New Form
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("history")}
                    className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded flex items-center gap-1.5 transition-all ${
                      activeTab === "history"
                        ? "bg-[#B08D3F] text-[#14120F] font-bold shadow"
                        : "text-[#F6F3EC]/70 hover:text-[#E0C068]"
                    }`}
                  >
                    <History className="w-3.5 h-3.5" />
                    <span>History ({history.length})</span>
                  </button>
                </div>
              </div>

              {activeTab === "history" ? (
                /* Dedicated History Tab Content */
                <div className="space-y-4 animate-in fade-in duration-200">
                  {history.length === 0 ? (
                    <div className="py-12 px-4 text-center space-y-3 bg-[#14120F] border border-[#383229] rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-[#1C1914] border border-[#383229] flex items-center justify-center mx-auto text-[#B08D3F]">
                        <History className="w-6 h-6" />
                      </div>
                      <div className="font-display text-lg font-bold text-[#F6F3EC]">
                        No Recent Enquiries Yet
                      </div>
                      <p className="font-body text-xs text-[#F6F3EC]/70 max-w-sm mx-auto leading-relaxed">
                        When you submit a trip enquiry, it will be automatically recorded here with its reference number, date &amp; time, and a direct link to re-open the WhatsApp chat.
                      </p>
                      <button
                        type="button"
                        onClick={() => setActiveTab("form")}
                        className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-[#B08D3F] text-[#14120F] rounded font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#E0C068] transition-colors"
                      >
                        <span>Fill New Trip Enquiry</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between font-mono text-xs text-[#F6F3EC]/70 pb-2 border-b border-[#383229]">
                        <span>Showing {history.length} saved {history.length === 1 ? "enquiry" : "enquiries"} on this device</span>
                        <button
                          type="button"
                          onClick={clearHistory}
                          className="flex items-center gap-1 text-red-400/80 hover:text-red-300 uppercase tracking-wider transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Clear All</span>
                        </button>
                      </div>

                      <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                        {history.map((item) => (
                          <div
                            key={item.id}
                            className="p-4 bg-[#14120F] border border-[#383229] rounded-lg space-y-2.5 hover:border-[#B08D3F]/70 transition-colors"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
                              <span className="text-[#C9A227] font-bold">
                                REF: {item.refCode}
                              </span>
                              <span className="text-[#F6F3EC]/60 flex items-center gap-1 text-[10px]">
                                <Clock className="w-3 h-3" />
                                {item.createdAt}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-xs text-[#F6F3EC]/90">
                              <div>
                                <span className="text-[#B08D3F]">Passenger:</span> {item.name} ({item.phone})
                              </div>
                              <div>
                                <span className="text-[#B08D3F]">Service:</span> {item.serviceType}
                              </div>
                              <div>
                                <span className="text-[#B08D3F]">Route:</span> {item.pickupLocation || "Udupi"} ➔ {item.destination || "TBD"}
                              </div>
                              <div>
                                <span className="text-[#B08D3F]">Vehicle:</span> {item.vehicleType}
                              </div>
                            </div>

                            {item.travelDate && (
                              <div className="font-mono text-[11px] text-[#F6F3EC]/70">
                                <span className="text-[#B08D3F]">Date &amp; Time:</span> {item.travelDate}
                              </div>
                            )}

                            {item.message && (
                              <div className="font-mono text-[10px] text-[#F6F3EC]/60 bg-[#1C1914] p-2 rounded border border-[#383229]/40">
                                <span className="text-[#B08D3F]">Notes:</span> {item.message}
                              </div>
                            )}

                            <div className="pt-2 border-t border-[#383229]/60 flex flex-wrap items-center justify-between gap-2">
                              <a
                                href={buildCustomWhatsAppUrl(item)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1914] border border-[#B08D3F]/70 hover:border-[#E0C068] hover:bg-[#25211A] text-[#F6F3EC] rounded font-mono text-[11px] font-bold tracking-wider uppercase transition-colors"
                              >
                                <WhatsAppIcon className="w-3.5 h-3.5" withOriginalColor />
                                <span>Re-open on WhatsApp</span>
                              </a>

                              <button
                                type="button"
                                onClick={() => {
                                  setFormData({
                                    name: item.name,
                                    phone: item.phone,
                                    serviceType: item.serviceType,
                                    vehicleType: item.vehicleType,
                                    pickupLocation: item.pickupLocation,
                                    destination: item.destination,
                                    travelDate: item.travelDate,
                                    message: item.message || "",
                                  });
                                  setSubmitted(false);
                                  setActiveTab("form");
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[#E0C068] hover:text-[#F6F3EC] font-mono text-[11px] uppercase tracking-wider transition-colors"
                              >
                                <RotateCcw className="w-3 h-3" />
                                <span>Reuse in Form</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : submitted ? (
                <div className="p-6 sm:p-8 bg-[#14120F] border border-[#1F4C4C] rounded-lg text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#1F4C4C]/40 border border-[#2E6B6B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#2E6B6B]" />
                  </div>

                  <div>
                    <span className="font-mono text-xs text-[#E0C068] uppercase tracking-widest font-bold block mb-1">
                      ENQUIRY PREPARED // REF: {refCode}
                    </span>
                    <h4 className="font-display text-2xl font-bold text-[#F6F3EC]">
                      Enquiry Ready on WhatsApp
                    </h4>
                  </div>

                  <p className="font-body text-sm text-[#F6F3EC]/85 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F6F3EC]">{formData.name}</strong>. Your trip details have been pre-filled. If WhatsApp did not open automatically, click the button below to send your enquiry directly to proprietor <strong>R Ramesh</strong>.
                  </p>

                  <div className="p-4 bg-[#1C1914] border border-[#383229] rounded font-mono text-xs text-left max-w-md mx-auto space-y-1.5 text-[#F6F3EC]/80">
                    <div><span className="text-[#B08D3F]">NAME:</span> {formData.name} ({formData.phone})</div>
                    <div><span className="text-[#B08D3F]">SERVICE:</span> {formData.serviceType}</div>
                    <div><span className="text-[#B08D3F]">ROUTE:</span> {formData.pickupLocation || "Udupi / Manipal"} ➔ {formData.destination || "As requested"}</div>
                    <div><span className="text-[#B08D3F]">VEHICLE:</span> {formData.vehicleType}</div>
                    <div><span className="text-[#B08D3F]">DATE:</span> {formData.travelDate || "Flexible"}</div>
                    {formData.message && (
                      <div className="pt-1 border-t border-[#383229]/60 text-[11px] text-[#F6F3EC]/70">
                        <span className="text-[#B08D3F]">NOTES:</span> {formData.message}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <TicketButton
                      href={buildWhatsAppUrl()}
                      isExternal
                      variant="primary-gold"
                      size="md"
                      ticketCode="OPEN CHAT"
                      icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
                    >
                      Open WhatsApp Chat
                    </TicketButton>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          serviceType: "Airport Drop / Pickup",
                          vehicleType: "Comfort Sedan (Dzire / Etios)",
                          pickupLocation: "",
                          destination: "",
                          travelDate: "",
                          message: "",
                        });
                      }}
                      className="text-xs font-mono text-[#F6F3EC]/60 hover:text-[#F6F3EC] underline uppercase tracking-wider py-2"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-body">
                  {errorMessage && (
                    <div className="p-3 bg-red-950/50 border border-red-800/80 rounded text-xs font-mono text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Passenger Name */}
                    <div>
                      <label htmlFor="name" className="block font-mono text-xs text-[#B08D3F] uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Raj Sharma"
                        className="w-full px-4 py-3 bg-[#14120F] border border-[#383229] rounded text-sm text-[#F6F3EC] focus:border-[#B08D3F] focus:outline-none font-mono"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block font-mono text-xs text-[#B08D3F] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98457 XXXXX"
                        className="w-full px-4 py-3 bg-[#14120F] border border-[#383229] rounded text-sm text-[#F6F3EC] focus:border-[#B08D3F] focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div>
                      <label htmlFor="serviceType" className="block font-mono text-xs text-[#B08D3F] uppercase tracking-wider mb-1.5">
                        Service Type
                      </label>
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#14120F] border border-[#383229] rounded text-sm text-[#F6F3EC] focus:border-[#B08D3F] focus:outline-none font-mono"
                      >
                        <option>Airport Drop / Pickup</option>
                        <option>All-Karnataka Outstation Trip</option>
                        <option>Temple Circuit / Pilgrimage Package</option>
                        <option>Local Udupi &amp; Manipal Sightseeing</option>
                        <option>Custom Tour Package</option>
                      </select>
                    </div>

                    {/* Vehicle Choice */}
                    <div>
                      <label htmlFor="vehicleType" className="block font-mono text-xs text-[#B08D3F] uppercase tracking-wider mb-1.5">
                        Vehicle Preference
                      </label>
                      <select
                        id="vehicleType"
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#14120F] border border-[#383229] rounded text-sm text-[#F6F3EC] focus:border-[#B08D3F] focus:outline-none font-mono"
                      >
                        <option>Comfort Sedan (Dzire / Etios) — 1-4 Pax</option>
                        <option>Premium SUV / MUV (Innova / Ertiga) — 6-7 Pax</option>
                        <option>Tempo Traveller — 12-20 Pax</option>
                        <option>Advise me based on group</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Pickup Location */}
                    <div>
                      <label htmlFor="pickupLocation" className="block font-mono text-xs text-[#B08D3F] uppercase tracking-wider mb-1.5">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        id="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        placeholder="e.g. Udupi / Manipal"
                        className="w-full px-4 py-3 bg-[#14120F] border border-[#383229] rounded text-sm text-[#F6F3EC] focus:border-[#B08D3F] focus:outline-none font-mono"
                      />
                    </div>

                    {/* Destination */}
                    <div>
                      <label htmlFor="destination" className="block font-mono text-xs text-[#B08D3F] uppercase tracking-wider mb-1.5">
                        Destination
                      </label>
                      <input
                        type="text"
                        id="destination"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Mangalore Airport / Outstation"
                        className="w-full px-4 py-3 bg-[#14120F] border border-[#383229] rounded text-sm text-[#F6F3EC] focus:border-[#B08D3F] focus:outline-none font-mono"
                      />
                    </div>

                    {/* Travel Date */}
                    <div>
                      <label htmlFor="travelDate" className="block font-mono text-xs text-[#B08D3F] uppercase tracking-wider mb-1.5">
                        Travel Date &amp; Time
                      </label>
                      <ModernDatePicker
                        id="travelDate"
                        value={formData.travelDate}
                        onChange={(val) => setFormData({ ...formData, travelDate: val })}
                        placeholder="Select travel date &amp; time"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-[#B08D3F] uppercase tracking-wider mb-1.5">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Number of passengers, luggage amount, flight details, or specific tour stops..."
                      className="w-full px-4 py-3 bg-[#14120F] border border-[#383229] rounded text-sm text-[#F6F3EC] focus:border-[#B08D3F] focus:outline-none font-mono resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <TicketButton
                      type="submit"
                      variant="primary-gold"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={
                        isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin text-[#E0C068]" />
                        ) : (
                          <WhatsAppIcon className="w-4 h-4" withOriginalColor />
                        )
                      }
                      ticketCode={isSubmitting ? "OPENING..." : "WHATSAPP"}
                    >
                      {isSubmitting ? "Opening WhatsApp..." : "Send Trip Enquiry on WhatsApp"}
                    </TicketButton>
                  </div>

                  <p className="font-mono text-[11px] text-[#F6F3EC]/60 text-center pt-1">
                    Direct dispatch to proprietor R Ramesh · Prompt response · Transparent quotes
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

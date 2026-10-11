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
import ModernDatePicker, { ModernTimePicker, parseDateString } from "./ModernDatePicker";

interface EnquiryHistoryItem {
  id: string;
  refCode: string;
  name: string;
  phone: string;
  serviceType: string;
  vehicleType: string;
  members: string;
  tripDays: string;
  pickupLocation: string;
  destination: string;
  fromDate?: string;
  toDate?: string;
  travelDates?: string;
  pickupTime?: string;
  travelDate?: string;
  message?: string;
  createdAt: string;
}

export const getTravelDatesSummary = (from?: string, to?: string, fallback?: string) => {
  if (from && to) {
    return from === to ? `${from} (Same Day Return)` : `${from} to ${to}`;
  }
  if (from) return `${from} (Return TBA / One-Way)`;
  if (to) return `Until ${to}`;
  return fallback || "";
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Airport Drop / Pickup",
    vehicleType: "",
    members: "",
    tripDays: "",
    pickupLocation: "",
    destination: "",
    fromDate: "",
    toDate: "",
    travelDates: "",
    pickupTime: "",
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
    members?: string;
    tripDays?: string;
    pickupLocation: string;
    destination: string;
    fromDate?: string;
    toDate?: string;
    travelDates?: string;
    pickupTime?: string;
    travelDate?: string;
    message?: string;
  }) => {
    const datesStr =
      item.travelDates ||
      getTravelDatesSummary(item.fromDate, item.toDate) ||
      item.travelDate;
    const lines = [
      `Hello Ramesh, I would like to enquire about a booking with RV Tours & Travels (Ref: ${item.refCode}).`,
      ``,
      `*Trip Booking Details:*`,
      `• *Passenger Name:* ${item.name}`,
      `• *Contact Number:* ${item.phone}`,
      `• *Service:* ${item.serviceType}`,
      `• *Vehicle Preference:* ${item.vehicleType && item.vehicleType.trim() ? item.vehicleType : "[Enter vehicle type / name]"}`,
      `• *No. of Members:* ${item.members && item.members.trim() ? item.members : "[Enter no. of members]"}`,
      `• *No. of Trip Days:* ${item.tripDays && item.tripDays.trim() ? item.tripDays : "[Enter no. of days]"}`,
      `• *Pickup Location:* ${item.pickupLocation || "Udupi / Manipal area"}`,
      `• *Destination:* ${item.destination ? `${item.destination} (mention if any other places also)` : "[Enter destination — mention if any other places also]"}`,
      `• *Travel Dates:* ${datesStr ? datesStr : "[Enter travel dates (From – To)]"}`,
      `• *Pickup Time (Optional):* ${item.pickupTime && item.pickupTime.trim() ? item.pickupTime.trim() : "Not specified (Optional)"}`,
    ];

    if (item.message && item.message.trim()) {
      lines.push(``);
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

    const datesFormatted = getTravelDatesSummary(formData.fromDate, formData.toDate, formData.travelDates);

    const newRecord: EnquiryHistoryItem = {
      id: code,
      refCode: code,
      name: formData.name,
      phone: formData.phone,
      serviceType: formData.serviceType,
      vehicleType: formData.vehicleType,
      members: formData.members,
      tripDays: formData.tripDays,
      pickupLocation: formData.pickupLocation,
      destination: formData.destination,
      fromDate: formData.fromDate,
      toDate: formData.toDate,
      travelDates: datesFormatted,
      pickupTime: formData.pickupTime,
      travelDate: datesFormatted,
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
        body: JSON.stringify({ ...formData, travelDates: datesFormatted, refCode: code }),
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
    <section id="contact" className="py-20 sm:py-28 bg-[#F6F3EC] text-[#14120F] relative border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Booking Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-[#1F4C4C]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F4C4C]" />
            <span>BOOKING &amp; ENQUIRIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14120F]">
            Get in Touch &amp; Reserve Your Trip
          </h2>
          <p className="font-body text-base sm:text-lg text-[#14120F]/80 leading-relaxed font-light">
            Direct coordination with proprietor R Ramesh via WhatsApp, phone call, or trip enquiry form for transparent price estimates and vehicle allocation.
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact Options & Ticket Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Channels & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <button
                type="button"
                onClick={() => {
                  const formEl = document.getElementById("contact-enquiry-form");
                  if (formEl) {
                    formEl.scrollIntoView({ behavior: "smooth" });
                    const nameInput = document.getElementById("name") || formEl.querySelector("input");
                    if (nameInput) (nameInput as HTMLInputElement).focus();
                  }
                }}
                className="w-full p-5 bg-[#EFEAE0] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-xl flex items-center justify-between group transition-all shadow-sm text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F6F3EC] border border-[#DCD4C4] flex items-center justify-center group-hover:border-[#B08D3F] transition-colors">
                    <WhatsAppIcon className="w-6 h-6" withOriginalColor />
                  </div>
                  <div>
                    <span className="font-body text-[11px] text-[#1F4C4C] uppercase tracking-wider block font-semibold">
                      FILL FORM &amp; SEND TO WHATSAPP
                    </span>
                    <span className="font-display text-lg font-bold text-[#14120F] group-hover:text-[#B08D3F] transition-colors">
                      Enquire on WhatsApp
                    </span>
                    <span className="font-body text-xs text-[#14120F]/70 block mt-0.5">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="font-body text-xs text-[#B08D3F] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              {/* Direct Call Card */}
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="p-5 bg-[#EFEAE0] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-xl flex items-center justify-between group transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F6F3EC] border border-[#DCD4C4] flex items-center justify-center text-[#1F4C4C] group-hover:border-[#B08D3F] transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-body text-[11px] text-[#1F4C4C] uppercase tracking-wider block font-semibold">
                      PROPRIETOR DIRECT LINE
                    </span>
                    <span className="font-display text-lg font-bold text-[#14120F] group-hover:text-[#B08D3F] transition-colors">
                      Call R Ramesh
                    </span>
                    <span className="font-body text-xs text-[#14120F]/70 block mt-0.5">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="font-body text-xs text-[#B08D3F] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-5 bg-[#EFEAE0] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-xl flex items-center justify-between group transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F6F3EC] border border-[#DCD4C4] flex items-center justify-center text-[#1F4C4C] group-hover:border-[#B08D3F] transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-body text-[11px] text-[#1F4C4C] uppercase tracking-wider block font-semibold">
                      EMAIL
                    </span>
                    <span className="font-display text-lg font-bold text-[#14120F] group-hover:text-[#B08D3F] transition-colors">
                      Email
                    </span>
                    <span className="font-body text-xs text-[#14120F]/70 block mt-0.5 break-all">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </div>
                <span className="font-body text-xs text-[#B08D3F] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-[#EFEAE0] border border-[#DCD4C4] rounded-xl p-3 space-y-2 shadow-sm">
              <div className="flex items-center justify-between px-2 pt-1">
                <span className="font-body text-xs text-[#1F4C4C] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#B08D3F]" />
                  LOCATION MAP · UDUPI, KARNATAKA
                </span>
                <span className="font-body text-xs text-[#14120F]/60">Coastal Karnataka Hub</span>
              </div>
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#DCD4C4]">
                <iframe
                  title="RV Tours and Travels Base Location - Udupi Karnataka"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Booking & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#EFEAE0] border border-[#DCD4C4] rounded-xl p-4 sm:p-8 shadow-sm relative text-[#14120F]">
              {/* Form Ticket Header with Tab Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DCD4C4] mb-6">
                <div>
                  <span className="font-body text-xs text-[#1F4C4C] uppercase tracking-wider font-semibold block">
                    RESERVATION DETAILS
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#14120F]">
                    {activeTab === "form" ? "Send Trip Enquiry" : "Recent Enquiries"}
                  </h3>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 bg-[#F6F3EC] border border-[#DCD4C4] rounded-lg">
                  <button
                    type="button"
                    onClick={() => setActiveTab("form")}
                    className={`px-3 py-1 text-xs font-body font-semibold uppercase tracking-wider rounded-md transition-all ${
                      activeTab === "form"
                        ? "bg-[#B08D3F] text-[#14120F] font-bold shadow-sm"
                        : "text-[#14120F]/70 hover:text-[#B08D3F]"
                    }`}
                  >
                    New Form
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("history")}
                    className={`px-3 py-1 text-xs font-body font-semibold uppercase tracking-wider rounded-md flex items-center gap-1.5 transition-all ${
                      activeTab === "history"
                        ? "bg-[#B08D3F] text-[#14120F] font-bold shadow-sm"
                        : "text-[#14120F]/70 hover:text-[#B08D3F]"
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
                    <div className="py-12 px-4 text-center space-y-3 bg-[#F6F3EC] border border-[#DCD4C4] rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-[#EFEAE0] border border-[#DCD4C4] flex items-center justify-center mx-auto text-[#1F4C4C]">
                        <History className="w-6 h-6" />
                      </div>
                      <div className="font-display text-lg font-bold text-[#14120F]">
                        No Recent Enquiries Yet
                      </div>
                      <p className="font-body text-xs text-[#14120F]/70 max-w-sm mx-auto leading-relaxed font-light">
                        When you submit a trip enquiry, it will be automatically recorded here with its reference number, date &amp; time, and a direct link to re-open the WhatsApp chat.
                      </p>
                      <button
                        type="button"
                        onClick={() => setActiveTab("form")}
                        className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-[#B08D3F] text-[#14120F] rounded-lg font-body text-xs font-bold uppercase tracking-wider hover:bg-[#C9A227] transition-colors"
                      >
                        <span>Fill New Trip Enquiry</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between font-body text-xs text-[#14120F]/70 pb-2 border-b border-[#DCD4C4]">
                        <span>Showing {history.length} saved {history.length === 1 ? "enquiry" : "enquiries"} on this device</span>
                        <button
                          type="button"
                          onClick={clearHistory}
                          className="flex items-center gap-1 text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Clear All</span>
                        </button>
                      </div>

                      <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                        {history.map((item) => (
                          <div
                            key={item.id}
                            className="p-4 bg-[#F6F3EC] border border-[#DCD4C4] rounded-lg space-y-2.5 hover:border-[#B08D3F] transition-colors"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 font-body text-xs">
                              <span className="text-[#1F4C4C] font-bold">
                                REF: {item.refCode}
                              </span>
                              <span className="text-[#14120F]/60 flex items-center gap-1 text-[11px]">
                                <Clock className="w-3 h-3" />
                                {item.createdAt}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-body text-xs text-[#14120F]/90">
                              <div>
                                <span className="text-[#1F4C4C] font-semibold">Passenger:</span> {item.name} ({item.phone})
                              </div>
                              <div>
                                <span className="text-[#1F4C4C] font-semibold">Service:</span> {item.serviceType}
                              </div>
                              <div>
                                <span className="text-[#1F4C4C] font-semibold">Vehicle:</span> {item.vehicleType}
                              </div>
                              <div>
                                <span className="text-[#1F4C4C] font-semibold">Members:</span> {item.members || "3 - 4 Members"}
                              </div>
                              <div>
                                <span className="text-[#1F4C4C] font-semibold">Trip Days:</span> {item.tripDays || "1 Day"}
                              </div>
                              <div>
                                <span className="text-[#1F4C4C] font-semibold">Route:</span> {item.pickupLocation || "Udupi"} ➔ {item.destination || "TBD"}
                              </div>
                            </div>

                            {(item.travelDates || item.travelDate) && (
                              <div className="font-body text-xs text-[#14120F]/70">
                                <span className="text-[#1F4C4C] font-semibold">Travel Dates:</span> {item.travelDates || item.travelDate}
                                {item.pickupTime && (
                                  <span className="ml-2 text-stone-500">· Time: {item.pickupTime}</span>
                                )}
                              </div>
                            )}

                            {item.message && (
                              <div className="font-body text-xs text-[#14120F]/75 bg-[#EFEAE0] p-2 rounded-lg border border-[#DCD4C4]">
                                <span className="text-[#1F4C4C] font-semibold">Notes:</span> {item.message}
                              </div>
                            )}

                            <div className="pt-2 border-t border-[#DCD4C4] flex flex-wrap items-center justify-between gap-2">
                              <a
                                href={buildCustomWhatsAppUrl(item)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EFEAE0] border border-[#DCD4C4] hover:border-[#B08D3F] hover:bg-[#E5DFD1] text-[#14120F] rounded-lg font-body text-xs font-bold tracking-wide uppercase transition-colors"
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
                                    vehicleType: item.vehicleType || "",
                                    members: item.members || "",
                                    tripDays: item.tripDays || "",
                                    pickupLocation: item.pickupLocation,
                                    destination: item.destination,
                                    fromDate: item.fromDate || (item.travelDates && item.travelDates.includes(" to ") ? item.travelDates.split(" to ")[0].trim() : (item.travelDates ? item.travelDates.split(" (")[0].trim() : "")),
                                    toDate: item.toDate || (item.travelDates && item.travelDates.includes(" to ") ? item.travelDates.split(" to ")[1].trim() : ""),
                                    travelDates: item.travelDates || item.travelDate || "",
                                    pickupTime: item.pickupTime || "",
                                    message: item.message || "",
                                  });
                                  setSubmitted(false);
                                  setActiveTab("form");
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[#1F4C4C] hover:text-[#B08D3F] font-body text-xs uppercase tracking-wider font-semibold transition-colors"
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
                <div className="p-6 sm:p-8 bg-[#F6F3EC] border border-[#2E6B6B] rounded-lg text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#1F4C4C]/10 border border-[#2E6B6B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#2E6B6B]" />
                  </div>

                  <div>
                    <span className="font-body text-xs text-[#1F4C4C] uppercase tracking-wider font-semibold block mb-1">
                      ENQUIRY PREPARED · REF: {refCode}
                    </span>
                    <h4 className="font-display text-2xl font-bold text-[#14120F]">
                      Enquiry Ready on WhatsApp
                    </h4>
                  </div>

                  <p className="font-body text-sm text-[#14120F]/80 max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <strong className="text-[#14120F]">{formData.name}</strong>. Your trip details have been pre-filled. If WhatsApp did not open automatically, click the button below to send your enquiry directly to proprietor <strong>R Ramesh</strong>.
                  </p>

                  <div className="p-4 bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg font-body text-xs text-left max-w-md mx-auto space-y-1.5 text-[#14120F]/85">
                    <div><span className="text-[#1F4C4C] font-semibold">NAME:</span> {formData.name} ({formData.phone})</div>
                    <div><span className="text-[#1F4C4C] font-semibold">SERVICE:</span> {formData.serviceType}</div>
                    <div><span className="text-[#1F4C4C] font-semibold">ROUTE:</span> {formData.pickupLocation || "Udupi / Manipal"} ➔ {formData.destination || "As requested"}</div>
                    <div><span className="text-[#1F4C4C] font-semibold">VEHICLE:</span> {formData.vehicleType || "As Discussed / Advise"}</div>
                    <div><span className="text-[#1F4C4C] font-semibold">MEMBERS:</span> {formData.members || "To be specified"}</div>
                    <div><span className="text-[#1F4C4C] font-semibold">TRIP DAYS:</span> {formData.tripDays || "To be specified"}</div>
                    <div><span className="text-[#1F4C4C] font-semibold">TRAVEL DATES:</span> {getTravelDatesSummary(formData.fromDate, formData.toDate, formData.travelDates) || "Flexible (From – To)"}</div>
                    <div><span className="text-[#1F4C4C] font-semibold">PICKUP TIME:</span> {formData.pickupTime || "Not specified (Optional)"}</div>
                    {formData.message && (
                      <div className="pt-1 border-t border-[#DCD4C4] text-[11px] text-[#14120F]/70">
                        <span className="text-[#1F4C4C] font-semibold">NOTES:</span> {formData.message}
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
                          vehicleType: "",
                          members: "",
                          tripDays: "",
                          pickupLocation: "",
                          destination: "",
                          fromDate: "",
                          toDate: "",
                          travelDates: "",
                          pickupTime: "",
                          message: "",
                        });
                      }}
                      className="text-xs font-body font-medium text-[#14120F]/60 hover:text-[#14120F] underline uppercase tracking-wider py-2"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-enquiry-form" onSubmit={handleSubmit} className="space-y-4 font-body">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs font-body text-red-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Passenger Name */}
                    <div>
                      <label htmlFor="name" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Raj Sharma"
                        className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#DCD4C4] rounded-lg text-sm text-[#14120F] focus:border-[#B08D3F] focus:outline-none font-body font-normal"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98457 XXXXX"
                        className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#DCD4C4] rounded-lg text-sm text-[#14120F] focus:border-[#B08D3F] focus:outline-none font-body font-normal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Type */}
                    <div>
                      <label htmlFor="serviceType" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        Service Type
                      </label>
                      <div className="relative">
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full appearance-none pl-4 pr-10 py-3 bg-[#F6F3EC] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg text-sm text-[#14120F] focus:border-[#B08D3F] focus:outline-none font-body font-normal cursor-pointer"
                        >
                          <option>Airport Drop / Pickup</option>
                          <option>All-Karnataka Outstation Trip</option>
                          <option>Temple Circuit / Pilgrimage Package</option>
                          <option>Local Udupi &amp; Manipal Sightseeing</option>
                          <option>Custom Tour Package</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B08D3F]" />
                      </div>
                    </div>

                    {/* Vehicle Choice */}
                    <div>
                      <label htmlFor="vehicleType" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        Vehicle Preference
                      </label>
                      <div className="relative">
                        <select
                          id="vehicleType"
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                          className="w-full appearance-none pl-4 pr-10 py-3 bg-[#F6F3EC] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg text-sm text-[#14120F] focus:border-[#B08D3F] focus:outline-none font-body font-normal cursor-pointer"
                        >
                          <option value="">Select vehicle preference</option>
                          <option>Comfort Sedan (Dzire / Etios) — 1-4 Pax</option>
                          <option>Premium SUV / MUV (Innova / Ertiga) — 6-7 Pax</option>
                          <option>Tempo Traveller — 12-20 Pax</option>
                          <option>Advise me based on group</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B08D3F]" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Number of Members */}
                    <div>
                      <label htmlFor="members" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        How Many Members
                      </label>
                      <div className="relative">
                        <select
                          id="members"
                          name="members"
                          value={formData.members}
                          onChange={(e) => setFormData({ ...formData, members: e.target.value })}
                          className="w-full appearance-none pl-4 pr-10 py-3 bg-[#F6F3EC] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg text-sm text-[#14120F] focus:border-[#B08D3F] focus:outline-none font-body font-normal cursor-pointer"
                        >
                          <option value="">Select no. of members</option>
                          <option>1 - 2 Members (Couples / Solo)</option>
                          <option>3 - 4 Members (Small Family / Sedan)</option>
                          <option>5 - 7 Members (Family / Innova Crysta)</option>
                          <option>8 - 12 Members (Group / Executive Tempo)</option>
                          <option>13 - 20 Members (Large Group / Tempo)</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B08D3F]" />
                      </div>
                    </div>

                    {/* No. of Trip Days */}
                    <div>
                      <label htmlFor="tripDays" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        No. of Trip Days
                      </label>
                      <div className="relative">
                        <select
                          id="tripDays"
                          name="tripDays"
                          value={formData.tripDays}
                          onChange={(e) => setFormData({ ...formData, tripDays: e.target.value })}
                          className="w-full appearance-none pl-4 pr-10 py-3 bg-[#F6F3EC] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg text-sm text-[#14120F] focus:border-[#B08D3F] focus:outline-none font-body font-normal cursor-pointer"
                        >
                          <option value="">Select no. of trip days</option>
                          <option>1 Day (Same Day Return / Airport)</option>
                          <option>2 Days / 1 Night (Weekend / Coastal)</option>
                          <option>3 Days / 2 Nights (Temple / Hill Station)</option>
                          <option>4 Days / 3 Nights (Heritage Circuit)</option>
                          <option>5+ Days (Custom Multi-Day Outstation)</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B08D3F]" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Pickup Location */}
                    <div>
                      <label htmlFor="pickupLocation" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        autoComplete="address-level2"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        placeholder="e.g. Udupi / Manipal"
                        className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg text-sm text-[#14120F] focus:border-[#B08D3F] focus:outline-none font-body font-normal"
                      />
                    </div>

                    {/* Destination */}
                    <div>
                      <label htmlFor="destination" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        Destination <span className="normal-case font-normal text-stone-500">(mention if any other places also)</span>
                      </label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        autoComplete="off"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Mangalore Airport / Outstation (mention if any other places also)"
                        className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg text-sm text-[#14120F] focus:border-[#B08D3F] focus:outline-none font-body font-normal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* From Date (Departure) */}
                    <div>
                      <label htmlFor="fromDate" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        Departure Date (From)
                      </label>
                      <ModernDatePicker
                        id="fromDate"
                        value={formData.fromDate}
                        onChange={(val) => setFormData({ ...formData, fromDate: val })}
                        placeholder="Select departure date"
                        label="Departure Date"
                        theme="light"
                      />
                    </div>

                    {/* To Date (Return) */}
                    <div>
                      <label htmlFor="toDate" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                        Return Date (To)
                      </label>
                      <ModernDatePicker
                        id="toDate"
                        value={formData.toDate}
                        onChange={(val) => setFormData({ ...formData, toDate: val })}
                        minDate={formData.fromDate ? parseDateString(formData.fromDate) : null}
                        isReturn={true}
                        placeholder="Select return date"
                        label="Return Date"
                        theme="light"
                      />
                    </div>
                  </div>

                  {/* Pickup Time (Optional) */}
                  <div>
                    <label htmlFor="pickupTime" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Pickup Time (Optional)</span>
                      <span className="text-[11px] text-stone-500 font-normal normal-case">Non-mandatory</span>
                    </label>
                    <ModernTimePicker
                      id="pickupTime"
                      value={formData.pickupTime}
                      onChange={(val) => setFormData({ ...formData, pickupTime: val })}
                      placeholder="e.g. 06:00 AM or enter custom time"
                      theme="light"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-body text-xs font-semibold text-[#1F4C4C] uppercase tracking-wider mb-1.5">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Number of passengers, luggage amount, flight details, or specific tour stops..."
                      className="w-full px-4 py-3 bg-[#F6F3EC] border border-[#DCD4C4] hover:border-[#B08D3F] rounded-lg text-sm text-[#14120F] focus:border-[#B08D3F] focus:outline-none font-body font-normal resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <TicketButton
                      type="submit"
                      variant="whatsapp-green"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={
                        isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                        ) : (
                          <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
                        )
                      }
                      ticketCode={isSubmitting ? "OPENING..." : "WHATSAPP"}
                    >
                      {isSubmitting ? "Opening WhatsApp..." : "Send Trip Enquiry on WhatsApp"}
                    </TicketButton>
                  </div>

                  <p className="font-body text-xs text-stone-600 text-center pt-1">
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

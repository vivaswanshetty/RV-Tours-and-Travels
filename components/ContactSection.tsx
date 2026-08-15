"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Calendar, Car, Loader2, AlertCircle } from "lucide-react";
import { BUSINESS_INFO, FLEET_CATEGORIES } from "@/lib/constants";
import TicketButton from "./TicketButton";
import WhatsAppIcon from "./WhatsAppIcon";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setRefCode(data.refCode || `RV-${Date.now().toString().slice(-6)}`);
        setSubmitted(true);
      } else {
        throw new Error(data.message || "Failed to submit enquiry.");
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      // Fallback: Generate local ref code and open mailto
      const fallbackRef = `RV-${Date.now().toString().slice(-6)}`;
      setRefCode(fallbackRef);

      const subject = encodeURIComponent(`[${fallbackRef}] Trip Enquiry from ${formData.name} - RV Tours & Travels`);
      const body = encodeURIComponent(
        `Reference Code: ${fallbackRef}\n` +
        `Passenger Name: ${formData.name}\n` +
        `Phone / WhatsApp: ${formData.phone}\n` +
        `Service: ${formData.serviceType}\n` +
        `Preferred Vehicle: ${formData.vehicleType}\n` +
        `Pickup Location: ${formData.pickupLocation}\n` +
        `Destination: ${formData.destination}\n` +
        `Travel Date: ${formData.travelDate}\n\n` +
        `Additional Notes:\n${formData.message}\n`
      );

      window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessageWithDetails = encodeURIComponent(
    `Hello Ramesh ji, I submitted a booking enquiry (Ref: ${refCode || "DIRECT"}).\n\n` +
    `*Name:* ${formData.name}\n` +
    `*Phone:* ${formData.phone}\n` +
    `*Service:* ${formData.serviceType}\n` +
    `*Vehicle:* ${formData.vehicleType}\n` +
    `*Route:* ${formData.pickupLocation || "Udupi"} ➔ ${formData.destination || "Destination"}\n` +
    `*Travel Date:* ${formData.travelDate || "As discussed"}\n\n` +
    `Please confirm vehicle availability and fare.`
  );

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
                      DIRECT INBOX
                    </span>
                    <span className="font-display text-lg font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors">
                      Email R Ramesh
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
              {/* Form Ticket Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#383229] mb-6">
                <div>
                  <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold block">
                    RESERVATION MANIFEST
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#F6F3EC]">
                    Send Trip Enquiry
                  </h3>
                </div>
                <div className="font-mono text-[10px] px-2.5 py-1 bg-[#14120F] border border-[#B08D3F]/50 text-[#E0C068] rounded uppercase tracking-wider">
                  DIRECT DESK
                </div>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#14120F] border border-[#1F4C4C] rounded-lg text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#1F4C4C]/40 border border-[#2E6B6B] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#2E6B6B]" />
                  </div>

                  <div>
                    <span className="font-mono text-xs text-[#E0C068] uppercase tracking-widest font-bold block mb-1">
                      ENQUIRY REGISTERED // REF: {refCode}
                    </span>
                    <h4 className="font-display text-2xl font-bold text-[#F6F3EC]">
                      Enquiry Dispatched Successfully
                    </h4>
                  </div>

                  <p className="font-body text-sm text-[#F6F3EC]/85 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F6F3EC]">{formData.name}</strong>. Your trip details have been transmitted directly to proprietor <strong>R Ramesh</strong> at <span className="text-[#E0C068] font-mono text-xs">{BUSINESS_INFO.email}</span>.
                  </p>

                  <div className="p-4 bg-[#1C1914] border border-[#383229] rounded font-mono text-xs text-left max-w-md mx-auto space-y-1.5 text-[#F6F3EC]/80">
                    <div><span className="text-[#B08D3F]">ROUTE:</span> {formData.pickupLocation || "Udupi"} ➔ {formData.destination || "As requested"}</div>
                    <div><span className="text-[#B08D3F]">VEHICLE:</span> {formData.vehicleType}</div>
                    <div><span className="text-[#B08D3F]">DATE:</span> {formData.travelDate || "Flexible"}</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <TicketButton
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${whatsappMessageWithDetails}`}
                      isExternal
                      variant="primary-gold"
                      size="md"
                      ticketCode="CONFIRM NOW"
                      icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
                    >
                      Instant WhatsApp Confirmation
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
                        Travel Date / Time
                      </label>
                      <input
                        type="text"
                        id="travelDate"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        placeholder="e.g. 24 Oct, 7:00 AM"
                        className="w-full px-4 py-3 bg-[#14120F] border border-[#383229] rounded text-sm text-[#F6F3EC] focus:border-[#B08D3F] focus:outline-none font-mono"
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
                      icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin text-[#E0C068]" /> : <Send className="w-4 h-4" />}
                      ticketCode={isSubmitting ? "DISPATCHING..." : "DISPATCH"}
                    >
                      {isSubmitting ? "Dispatching Enquiry..." : "Submit Reservation Enquiry"}
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

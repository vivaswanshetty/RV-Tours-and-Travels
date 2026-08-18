"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Calendar,
  ShieldCheck,
  Compass,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Car,
  Clock,
} from "lucide-react";
import { BUSINESS_INFO, FAQS_DATA } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";
import TicketButton from "./TicketButton";

export default function SeoContentSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    if (selectedCategory === "all") return true;
    return faq.category === selectedCategory;
  });

  return (
    <section className="py-20 sm:py-28 bg-[#14120F] text-[#F6F3EC] relative overflow-hidden border-t border-[#383229]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-route-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1914] border border-[#B08D3F]/50 rounded text-xs font-mono tracking-widest text-[#E0C068] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B6B]" />
            <span>TRAVEL ADVISORY // KARNATAKA ROUTE INTELLIGENCE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC] leading-[1.15]">
            RV Tours and Travels — Chauffeur Taxi &amp; Tour Packages 2026
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed">
            Your trusted road transport partner for bespoke holiday itineraries, spiritual temple circuits, airport transfers, and outstation taxi service across Karnataka. Headquartered in Udupi and coordinated directly by proprietor <strong>R Ramesh</strong>, we prioritize punctuality, clean vehicles, and transparent fares.
          </p>
        </div>

        {/* Content Block 1: About Business & Direct Proprietorship */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8 space-y-6 font-body text-sm sm:text-base text-[#F6F3EC]/85 leading-relaxed">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#E0C068] flex items-center gap-2.5">
              <Compass className="w-6 h-6 text-[#C9A227]" />
              Dedicated Chauffeur Care with Direct Owner Supervision
            </h3>

            <p>
              When navigating the coastal highway stretches of the Arabian Sea or ascending the mist-laden Western Ghats, vehicle reliability, driver road familiarity, and chauffeur patience are essential. Our boutique operation stands apart through personalized, owner-supervised hospitality. Every trip booked with <strong>RV Tours and Travels</strong> is personally verified, scheduled, and managed directly by proprietor R Ramesh.
            </p>

            <p>
              Our service is built on three core principles: immaculate vehicle hygiene, punctual arrivals, and courteous drivers who are familiar with local customs, temple darshan timings, coastal routes, and mountain ghat safety. Whether you require an early dawn departure for Kollur Mookambika Temple, a family trip to Dharmasthala and Kukke Subramanya, or a midnight airport drop at Mangalore International Airport (IXE), we ensure a calm, safe, and punctual journey.
            </p>

            <p>
              With extensive hands-on driving experience across coastal Karnataka, Malnad, and the Central Western Ghats, we combine deep regional route intelligence with modern customer convenience. Every traveler receives dedicated trip coordination, transparent tariff estimation, luggage handling assistance, and continuous communication throughout their journey.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 bg-[#1C1914] border border-[#B08D3F]/60 rounded-xl space-y-4 shadow-xl">
            <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold block">
              QUICK DISPATCH CONTACT
            </span>
            <h4 className="font-display text-xl font-bold text-[#F6F3EC]">
              Direct Booking &amp; Enquiries
            </h4>
            <p className="font-body text-xs text-[#F6F3EC]/70 leading-relaxed">
              Reach proprietor R Ramesh directly for instant price quotations, vehicle availability, and personalized 2026 itinerary planning.
            </p>
            <div className="pt-2 space-y-2 font-mono text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-2.5 p-3 bg-[#14120F] border border-[#383229] rounded hover:border-[#B08D3F] transition-colors text-[#F6F3EC]"
              >
                <Phone className="w-4 h-4 text-[#C9A227]" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 bg-[#14120F] border border-[#B08D3F]/50 rounded hover:border-[#E0C068] transition-colors text-[#E0C068]"
              >
                <WhatsAppIcon className="w-4 h-4" withOriginalColor />
                <span>WhatsApp: +91 98455 11169</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Block 2: Karnataka Tour Packages */}
        <div className="p-8 sm:p-10 bg-[#1C1914] border border-[#383229] rounded-2xl mb-16 space-y-6">
          <div className="border-b border-[#383229] pb-4">
            <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold block">
              CURATED ITINERARIES
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F6F3EC]">
              Popular Karnataka Tour Packages 2026
            </h3>
          </div>

          <p className="font-body text-sm sm:text-base text-[#F6F3EC]/85 leading-relaxed">
            We specialize in customized multi-day and single-day sightseeing circuits across coastal Karnataka, Malnad coffee plantations, and heritage sites. Every package includes a dedicated chauffeur, air-conditioned vehicle, fuel allowances, and door-to-door pickup:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2 font-mono text-xs">
            <div className="p-4 bg-[#14120F] border border-[#383229] rounded-lg space-y-2">
              <div className="text-[#E0C068] font-bold">01 // Temple Circuit Package</div>
              <div className="text-[#F6F3EC] font-semibold text-sm font-display">
                Udupi – Kollur – Murudeshwar – Gokarna
              </div>
              <p className="text-[#F6F3EC]/70 font-sans text-xs leading-relaxed">
                2 to 3 days covering sacred shrines, pristine beaches, and coastal sunset views along NH-66.
              </p>
            </div>

            <div className="p-4 bg-[#14120F] border border-[#383229] rounded-lg space-y-2">
              <div className="text-[#E0C068] font-bold">02 // South Kanara Pilgrimage</div>
              <div className="text-[#F6F3EC] font-semibold text-sm font-display">
                Dharmasthala – Kukke Subramanya – Kateel
              </div>
              <p className="text-[#F6F3EC]/70 font-sans text-xs leading-relaxed">
                1 to 2 days tailored for family darshans with comfortable halts and flexible pooja timings.
              </p>
            </div>

            <div className="p-4 bg-[#14120F] border border-[#383229] rounded-lg space-y-2">
              <div className="text-[#E0C068] font-bold">03 // Western Ghats Nature Tour</div>
              <div className="text-[#F6F3EC] font-semibold text-sm font-display">
                Coorg – Chikmagalur – Sringeri – Agumbe
              </div>
              <p className="text-[#F6F3EC]/70 font-sans text-xs leading-relaxed">
                3 to 4 days exploring misty coffee estates, waterfalls, sunset viewpoints, and historic mathas.
              </p>
            </div>
          </div>
        </div>

        {/* Content Block 3: Service Commitments & Passenger Safety */}
        <div className="p-8 sm:p-10 bg-[#1C1914] border border-[#383229] rounded-2xl mb-16 space-y-6">
          <div className="border-b border-[#383229] pb-4">
            <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold block">
              SERVICE COMMITMENTS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F6F3EC]">
              Our Promise: Safety, Transparency &amp; Punctuality
            </h3>
          </div>

          <p className="font-body text-sm sm:text-base text-[#F6F3EC]/85 leading-relaxed">
            Whether booking an airport transfer or a multi-day family holiday, we stand behind clear operational guarantees that ensure a stress-free travel experience:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-mono text-xs">
            <div className="p-5 bg-[#14120F] border-l-2 border-[#B08D3F] rounded-r-lg space-y-2">
              <div className="font-bold text-[#E0C068] uppercase">Zero Surge Pricing</div>
              <p className="font-body text-xs text-[#F6F3EC]/80 leading-relaxed">
                Your agreed quote is fixed. We do not use surge pricing during rain, festival weekends, or peak travel seasons.
              </p>
            </div>

            <div className="p-5 bg-[#14120F] border-l-2 border-[#B08D3F] rounded-r-lg space-y-2">
              <div className="font-bold text-[#E0C068] uppercase">Spotless Sanitized Fleet</div>
              <p className="font-body text-xs text-[#F6F3EC]/80 leading-relaxed">
                Every vehicle is thoroughly vacuumed, cleaned, and sanitized with functional air-conditioning before departure.
              </p>
            </div>

            <div className="p-5 bg-[#14120F] border-l-2 border-[#B08D3F] rounded-r-lg space-y-2">
              <div className="font-bold text-[#E0C068] uppercase">Western Ghats Safety</div>
              <p className="font-body text-xs text-[#F6F3EC]/80 leading-relaxed">
                Experienced chauffeurs who navigate the steep curves of Agumbe, Charmadi, and Shiradi Ghats with patient, defensive driving.
              </p>
            </div>
          </div>
        </div>

        {/* Content Block 4: Fleet Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-[#1C1914] border border-[#383229] rounded-xl space-y-3">
            <Car className="w-6 h-6 text-[#C9A227]" />
            <h4 className="font-display text-lg font-bold text-[#F6F3EC]">
              Comfort Sedan Class
            </h4>
            <p className="font-body text-xs text-[#F6F3EC]/75 leading-relaxed">
              Toyota Etios &amp; Maruti Dzire. Ideal for 1 to 4 passengers with 2 to 3 suitcases. Best suited for city commutes, airport transfers, and economical one-way outstation trips across Karnataka.
            </p>
          </div>

          <div className="p-6 bg-[#1C1914] border border-[#383229] rounded-xl space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#C9A227]" />
            <h4 className="font-display text-lg font-bold text-[#F6F3EC]">
              Executive SUV / MUV Class
            </h4>
            <p className="font-body text-xs text-[#F6F3EC]/75 leading-relaxed">
              Toyota Innova Crysta &amp; Maruti Ertiga. Accommodates 6 to 7 passengers with generous boot capacity. Unrivalled ride comfort on winding mountain ghats and long journeys.
            </p>
          </div>

          <div className="p-6 bg-[#1C1914] border border-[#383229] rounded-xl space-y-3">
            <Clock className="w-6 h-6 text-[#C9A227]" />
            <h4 className="font-display text-lg font-bold text-[#F6F3EC]">
              Luxury Tempo Traveller
            </h4>
            <p className="font-body text-xs text-[#F6F3EC]/75 leading-relaxed">
              12 to 20 seater luxury coaches. Tailored for joint family vacations, wedding transportation, and group pilgrimages with individual AC vents and spacious legroom.
            </p>
          </div>
        </div>

        {/* Content Block 5: Relevant Local FAQs */}
        <div className="p-8 sm:p-10 bg-[#1C1914] border border-[#383229] rounded-2xl space-y-6">
          <div className="border-b border-[#383229] pb-4">
            <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold block">
              KNOWLEDGE BASE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F6F3EC]">
              Frequently Asked Questions About Booking &amp; Travel
            </h3>
          </div>

          <div className="space-y-4">
            {filteredFaqs.slice(0, 6).map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#14120F] border border-[#383229] rounded-lg overflow-hidden transition-colors hover:border-[#B08D3F]/60"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 font-mono text-xs sm:text-sm text-[#F6F3EC] focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm sm:text-base font-display">
                      {faq.q}
                    </span>
                    <span className="text-[#C9A227] font-mono text-xs shrink-0 mt-0.5">
                      {isOpen ? "[-] COLLAPSE" : "[+] EXPAND"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#383229]/60 font-body text-xs sm:text-sm text-[#F6F3EC]/80 leading-relaxed">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

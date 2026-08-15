import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO } from "@/lib/constants";
import { ArrowLeft, FileText, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BUSINESS_INFO.name}`,
  description: `Terms and conditions for chauffeur-driven taxi, airport transfers, and tour bookings with RV Tours & Travels in Udupi, Karnataka.`,
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#14120F] flex flex-col justify-between selection:bg-[#B08D3F] selection:text-[#14120F]">
      <Header />

      <div className="pt-28 sm:pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#1F4C4C] hover:text-[#B08D3F] uppercase tracking-wider font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>

        {/* Page Header */}
        <div className="border-b border-[#DCD4C4] pb-8 mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#1F4C4C] font-bold uppercase tracking-widest">
            <FileText className="w-4 h-4 text-[#1F4C4C]" />
            <span>SERVICE AGREEMENT MANIFEST</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14120F]">
            Terms &amp; Conditions
          </h1>
          <div className="font-mono text-xs text-[#14120F]/60">
            Last Updated: August 2026 · Operator: {BUSINESS_INFO.proprietor} · {BUSINESS_INFO.location}
          </div>
        </div>

        {/* Content Document */}
        <div className="space-y-8 font-body text-base text-[#14120F]/85 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              1. Booking &amp; Confirmation
            </h2>
            <p>
              All reservations with <strong>{BUSINESS_INFO.name}</strong> are coordinated and confirmed directly with proprietor <strong>{BUSINESS_INFO.proprietor}</strong> via Phone (`+91 98455 11169`) or official WhatsApp.
            </p>
            <p>
              A booking is considered confirmed once trip dates, pickup times, vehicle category, and agreed fares have been mutually acknowledged.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              2. Transparent Tariffs &amp; Incidental Charges
            </h2>
            <p>
              We believe in honest, upfront pricing with no hidden surcharges:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm font-mono">
              <li><strong>Included in Quote:</strong> Vehicle rental, fuel costs, and chauffeur driving services for the agreed route or distance.</li>
              <li><strong>Toll &amp; Parking Charges:</strong> National highway toll plaza charges, airport parking slips, and monument entry parking fees are payable as per actuals based on physical toll receipts, unless explicitly agreed as an all-inclusive package quote.</li>
              <li><strong>Interstate Permits:</strong> For journeys outside Karnataka (e.g., Goa, Kerala), interstate border road permits and entry taxes are charged at actual government rates.</li>
              <li><strong>Driver Allowance (Bata):</strong> Applicable for multi-day outstation packages or journeys extending past midnight, as communicated prior to trip departure.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              3. Airport Transfers &amp; Flight Timing Tracking
            </h2>
            <p>
              For Mangalore International Airport (IXE), Goa Airport, and regional terminals:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Please provide correct flight numbers during booking.</li>
              <li>In the event of airline delays, our chauffeurs will adjust pickup timings accordingly without penalty where feasible.</li>
              <li>Passengers are advised to schedule airport drops with appropriate buffer time for highway traffic and security checks.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              4. Passenger Safety &amp; Vehicle Conduct
            </h2>
            <p>
              All vehicles operate under valid commercial taxi permits with active commercial insurance:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Seatbelt usage is mandatory as per Motor Vehicles Act regulations.</li>
              <li>Smoking, consumption of alcohol, or possession of contraband is strictly prohibited inside the vehicles.</li>
              <li>Luggage must fit safely in the dedicated vehicle boot/trunk without obstructing passenger seats or driver visibility.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              5. Route Safety &amp; Ghats Section Guidelines
            </h2>
            <p>
              Our experienced chauffeurs are trained in driving across coastal highways and Western Ghats routes. In case of extreme weather conditions, landslides, or official road closures, the chauffeur reserves the right to choose the safest alternative detour in consultation with the passenger.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              6. Jurisdiction
            </h2>
            <p>
              Any disputes arising out of transportation or tour services rendered by RV Tours &amp; Travels shall be subject to the exclusive jurisdiction of the competent courts in <strong>Udupi, Karnataka, India</strong>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO } from "@/lib/constants";
import { ArrowLeft, RefreshCw, Phone } from "lucide-react";
import TicketButton from "@/components/TicketButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: `Cancellation & Refund Policy | ${BUSINESS_INFO.name}`,
  description: `Cancellation and refund terms for airport taxi, local trips, and custom tour packages with RV Tours & Travels in Udupi, Karnataka.`,
};

export default function CancellationPolicy() {
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
            <RefreshCw className="w-4 h-4 text-[#1F4C4C]" />
            <span>TRIP ADJUSTMENT MANIFEST</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14120F]">
            Cancellation &amp; Refund Policy
          </h1>
          <div className="font-mono text-xs text-[#14120F]/60">
            Last Updated: August 2026 · Operator: {BUSINESS_INFO.proprietor} · {BUSINESS_INFO.location}
          </div>
        </div>

        {/* Content Document */}
        <div className="space-y-8 font-body text-base text-[#14120F]/85 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              1. General Cancellation Principles
            </h2>
            <p>
              We understand that travel plans can change due to flight reschedulings, family emergencies, or changing itineraries. Because we operate as a personalized boutique chauffeur service rather than an automated aggregator, we strive to be as flexible and accommodating as possible.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              2. Notice Periods &amp; Cancellation Terms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg space-y-2">
                <div className="font-mono text-xs text-[#1F4C4C] font-bold uppercase tracking-wider">
                  LOCAL &amp; AIRPORT TRANSFERS
                </div>
                <div className="font-display text-lg font-bold text-[#14120F]">
                  Up to 3 Hours Prior
                </div>
                <p className="text-xs font-mono text-[#14120F]/75">
                  Airport drop/pickup cancellations requested at least 3 hours before pickup incur zero cancellation fee.
                </p>
              </div>

              <div className="p-5 bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg space-y-2">
                <div className="font-mono text-xs text-[#1F4C4C] font-bold uppercase tracking-wider">
                  OUTSTATION &amp; MULTI-DAY PACKAGES
                </div>
                <div className="font-display text-lg font-bold text-[#14120F]">
                  24 Hours Prior
                </div>
                <p className="text-xs font-mono text-[#14120F]/75">
                  For multi-day temple or Ghats packages, please provide 24 hours advance notice so that vehicle scheduling can be adjusted.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              3. Rescheduling &amp; Flight Delays
            </h2>
            <p>
              If your incoming flight to Mangalore Airport (IXE) or another arrival terminal is delayed, your scheduled pickup will be rescheduled to match your updated landing time at no extra charge whenever possible. Please inform R Ramesh via WhatsApp as soon as your airline notifies you of the delay.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              4. Refunds &amp; Advance Deposits
            </h2>
            <p>
              For trips where an advance booking token was collected for high-season vehicle reservations (e.g., peak pilgrimage seasons or festival holidays), eligible refunds for timely cancellations are processed directly via UPI or bank transfer within 24–48 hours.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#DCD4C4]">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              5. How to Cancel or Modify a Trip
            </h2>
            <p>
              To request a change or cancellation, contact R Ramesh directly via Phone or WhatsApp with your booking details:
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <TicketButton
                href={BUSINESS_INFO.whatsappUrl}
                isExternal
                variant="primary-gold"
                size="md"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                WhatsApp: {BUSINESS_INFO.phoneDisplay}
              </TicketButton>

              <TicketButton
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                isExternal
                variant="dark-ticket"
                size="md"
                icon={<Phone className="w-4 h-4" />}
              >
                Call: {BUSINESS_INFO.phoneDisplay}
              </TicketButton>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

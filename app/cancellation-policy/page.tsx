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
  description: `Cancellation and trip adjustment guidelines for taxi and tour services with RV Tours & Travels in Udupi, Karnataka.`,
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
            <span>TRIP ADJUSTMENT GUIDELINES</span>
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
              1. General Principles
            </h2>
            <p>
              We understand that travel schedules can change due to flight adjustments, family obligations, or updated itineraries. As a personalized chauffeur and taxi service operated directly by proprietor R Ramesh, we handle schedule modifications and cancellations on a flexible, case-by-case basis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              2. Cancellations &amp; Rescheduling
            </h2>
            <p>
              If you need to cancel or modify your reservation, please inform R Ramesh as early as possible via WhatsApp or phone call. Because vehicle allocation is planned in advance, early notice allows us to adjust schedules smoothly. Cancellations and date changes are reviewed and handled directly with the passenger based on the specific route and circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              3. Flight Delays &amp; Arrival Updates
            </h2>
            <p>
              If your incoming flight to Mangalore Airport (IXE) or another arrival terminal is delayed, your scheduled pickup will be rescheduled to match your updated landing time whenever possible. Please inform R Ramesh via WhatsApp as soon as your airline notifies you of the schedule change.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              4. Advance Payments &amp; Refunds
            </h2>
            <p>
              For trips where an advance deposit was provided, any refund or credit adjustment is evaluated and settled directly with proprietor R Ramesh on a case-by-case basis. Please reach out directly to discuss your reservation details.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-[#DCD4C4]">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              5. How to Contact the Operator
            </h2>
            <p>
              To request a change or cancellation, contact R Ramesh directly via Phone or WhatsApp:
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

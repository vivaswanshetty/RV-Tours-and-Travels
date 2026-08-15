import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO } from "@/lib/constants";
import { ArrowLeft, ShieldCheck, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS_INFO.name}`,
  description: `Privacy Policy and data protection terms for RV Tours & Travels (Udupi, Karnataka). Understand how customer booking information is handled.`,
};

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-4 h-4 text-[#1F4C4C]" />
            <span>LEGAL &amp; COMPLIANCE MANIFEST</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14120F]">
            Privacy Policy
          </h1>
          <div className="font-mono text-xs text-[#14120F]/60">
            Last Updated: August 2026 · Operator: {BUSINESS_INFO.proprietor} · {BUSINESS_INFO.location}
          </div>
        </div>

        {/* Content Document */}
        <div className="space-y-8 font-body text-base text-[#14120F]/85 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              1. Overview &amp; Our Commitment
            </h2>
            <p>
              At <strong>{BUSINESS_INFO.name}</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), managed directly by proprietor <strong>{BUSINESS_INFO.proprietor}</strong> in {BUSINESS_INFO.location}, we deeply value the trust and privacy of our passengers and website visitors.
            </p>
            <p>
              This Privacy Policy describes how we collect, use, and safeguard personal information when you visit our website or communicate with us to enquire about and book chauffeur and tour services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              2. Information We Collect
            </h2>
            <p>
              We only collect information that is strictly necessary to arrange, confirm, and execute your taxi and tour bookings:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm font-mono">
              <li><strong>Contact Information:</strong> Name, telephone/mobile number, WhatsApp contact, and email address.</li>
              <li><strong>Trip Itinerary Details:</strong> Pickup address/landmark, destination, travel dates, departure times, flight details (for airport transfers), and passenger group size.</li>
              <li><strong>Vehicle Preferences:</strong> Preferred vehicle class (Sedan, SUV, or Tempo Traveller) and luggage specifications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              3. How We Use Your Information
            </h2>
            <p>Your details are used solely for operational transportation purposes:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>To provide accurate fare estimates and route itineraries.</li>
              <li>To coordinate driver dispatch and curbside airport pickups at Mangalore (IXE), Goa, or regional terminals.</li>
              <li>To communicate trip updates, driver contact details, or schedule changes via Phone or WhatsApp.</li>
              <li>To generate physical trip receipts and commercial invoices when requested.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              4. Data Sharing &amp; Third Parties
            </h2>
            <p className="font-bold text-[#14120F]">
              We do not sell, rent, trade, or share your personal contact details with third-party marketing agencies or advertisers.
            </p>
            <p>
              Information is only shared with the assigned chauffeur specifically for navigation and passenger coordination on the day of travel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              5. Communications via WhatsApp &amp; Phone
            </h2>
            <p>
              When you contact us via WhatsApp or Phone, standard end-to-end encryption protocols and privacy controls of WhatsApp/Meta apply to your messages. We do not use automated spam bots or marketing SMS blasts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-[#14120F]">
              6. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request the deletion of your contact records, please contact R Ramesh directly:
            </p>
            <div className="p-5 bg-[#EFEAE0] border border-[#DCD4C4] rounded-lg font-mono text-xs space-y-2">
              <div><strong>Proprietor:</strong> {BUSINESS_INFO.proprietor}</div>
              <div><strong>Entity:</strong> {BUSINESS_INFO.name}</div>
              <div><strong>Address:</strong> {BUSINESS_INFO.location} ({BUSINESS_INFO.coordinates})</div>
              <div><strong>Phone / WhatsApp:</strong> {BUSINESS_INFO.phoneDisplay}</div>
              <div><strong>Email:</strong> {BUSINESS_INFO.email}</div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

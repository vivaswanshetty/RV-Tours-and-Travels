import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactSection from "@/components/ContactSection";
import { BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "@/components/TicketButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Phone, Mail, MapPin, Radio, Clock, ChevronRight, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Trip Booking Terminal | RV Tours and Travels Udupi",
  description: "Contact RV Tours and Travels (proprietor R Ramesh) in Udupi, Karnataka. Book your taxi, tour package, or airport drop with our online reservation terminal or instant WhatsApp dispatch.",
  keywords: [
    "rv tours and travels contact number",
    "rv tours and travels udupi phone",
    "book taxi udupi",
    "contact r ramesh udupi",
    "online cab booking udupi",
  ],
  alternates: {
    canonical: "https://rvtravelsudupi.com/contact",
  },
  openGraph: {
    title: "Contact & Trip Booking Terminal | RV Tours and Travels",
    description: "Direct WhatsApp booking, phone helpline (+91 98455 11169), and trip enquiry manifest for instant price estimates.",
    url: "https://rvtravelsudupi.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#14120F] relative selection:bg-[#B08D3F] selection:text-[#14120F]">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 sm:pt-36 lg:pt-40 pb-16 bg-[#14120F] text-[#F6F3EC] relative overflow-hidden border-b border-[#383229]">
        <div className="absolute inset-0 bg-route-dots opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B08D3F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-xs text-[#E0C068] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B08D3F]" />
            <span className="text-[#F6F3EC] font-bold">Contact &amp; Reservation Terminal</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1914] border border-[#B08D3F]/50 rounded text-xs font-mono tracking-widest text-[#E0C068] uppercase">
              <Radio className="w-3.5 h-3.5 text-[#2E6B6B] animate-pulse" />
              <span>DIRECT DISPATCH DESK // 24/7 RESERVATIONS</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC]">
              Direct Dispatch &amp; Reservation Terminal
            </h1>

            <p className="font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed">
              Connect directly with proprietor <strong>R Ramesh</strong>. Submit your trip requirements for an instant WhatsApp estimate, or call our direct helpline anytime for urgent airport drops.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <TicketButton
                href={BUSINESS_INFO.whatsappUrl}
                isExternal
                variant="primary-gold"
                size="md"
                ticketCode="WHATSAPP"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                Instant WhatsApp Chat
              </TicketButton>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-[#F6F3EC] hover:border-[#B08D3F] hover:text-[#E0C068] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Interactive Contact Section (Form + Map + History Tab) */}
      <ContactSection />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

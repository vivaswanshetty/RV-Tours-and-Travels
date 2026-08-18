import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FleetSection from "@/components/FleetSection";
import { BUSINESS_INFO, FLEET_CATEGORIES } from "@/lib/constants";
import TicketButton from "@/components/TicketButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { ShieldCheck, Users, Briefcase, Wind, CheckCircle2, ChevronRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Fleet & Vehicle Specifications | RV Tours and Travels Udupi",
  description: "Browse our clean, air-conditioned fleet: Toyota Innova Crysta, Dzire / Etios Sedans, and 12-20 seater Tempo Travellers for family and group tours in Karnataka.",
  keywords: [
    "innova car rental udupi",
    "tempo traveller in udupi",
    "etios dzire taxi udupi",
    "wedding cab service udupi",
    "luxury ac tempo traveller karnataka",
    "car rental with driver mangalore",
  ],
  alternates: {
    canonical: "https://rvtravelsudupi.com/fleet",
  },
  openGraph: {
    title: "Fleet & Vehicle Specifications | RV Tours and Travels",
    description: "Spotless, fully sanitized air-conditioned vehicles for solo, family, and group journeys across Karnataka.",
    url: "https://rvtravelsudupi.com/fleet",
  },
};

export default function FleetPage() {
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
            <span className="text-[#F6F3EC] font-bold">Fleet Specifications</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1914] border border-[#B08D3F]/50 rounded text-xs font-mono tracking-widest text-[#E0C068] uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>VEHICLE INVENTORY // SANITIZED &amp; CLIMATE-CONTROLLED</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC]">
              Fleet &amp; Vehicle Specifications
            </h1>

            <p className="font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed">
              Every vehicle in our fleet is maintained to rigorous standards of mechanical safety, climate-controlled comfort, and interior hygiene. Explore our vehicle segments to find the perfect match for your group size and luggage requirements.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <TicketButton
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Ramesh ji, I want to check fleet availability and pricing.")}`}
                isExternal
                variant="primary-gold"
                size="md"
                ticketCode="CHECK FLEET"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                Check Availability on WhatsApp
              </TicketButton>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-[#F6F3EC] hover:border-[#B08D3F] hover:text-[#E0C068] transition-all"
              >
                <span>Open Trip Enquiry Form ➔</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fleet Showcase */}
      <FleetSection />

      {/* Fleet Standards & Hygiene Commitments */}
      <section className="py-20 bg-white text-[#14120F] border-t border-[#DCD4C4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs text-[#1F4C4C] uppercase tracking-widest font-bold block mb-1">
              // VEHICLE HYGIENE &amp; SAFETY ASSURANCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14120F]">
              Our Fleet Standards on Every Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F6F3EC] border border-[#DCD4C4] rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#14120F] border border-[#B08D3F] flex items-center justify-center text-[#C9A227]">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold">Sanitized AC Cabins</h3>
              <p className="font-body text-sm text-[#14120F]/80 leading-relaxed">
                Full interior detailing and air disinfection before every long-distance and outstation trip. Fresh cabin fragrance with zero smoke odor.
              </p>
            </div>

            <div className="p-6 bg-[#F6F3EC] border border-[#DCD4C4] rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#14120F] border border-[#B08D3F] flex items-center justify-center text-[#C9A227]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold">Highway &amp; Ghat Safety</h3>
              <p className="font-body text-sm text-[#14120F]/80 leading-relaxed">
                Regularly serviced brakes, tires, and suspension tuned specifically for the winding roads of Agumbe, Charmadi, and Western Ghats passes.
              </p>
            </div>

            <div className="p-6 bg-[#F6F3EC] border border-[#DCD4C4] rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#14120F] border border-[#B08D3F] flex items-center justify-center text-[#C9A227]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold">Luggage Handling Care</h3>
              <p className="font-body text-sm text-[#14120F]/80 leading-relaxed">
                Clean and spacious boot compartments with roof carrier options for large group baggage, airport suitcases, and temple prasadam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Call to Action */}
      <section className="py-16 bg-[#16130F] text-[#F6F3EC] border-t border-[#383229]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold">
            CHOOSE YOUR COMFORT LEVEL
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Need Guidance Choosing the Right Vehicle?
          </h2>
          <p className="font-body text-base text-[#F6F3EC]/80 max-w-xl mx-auto leading-relaxed">
            Tell us your passenger count, luggage volume, and travel destination. We will recommend the most cost-effective and comfortable vehicle for your journey.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#B08D3F] hover:bg-[#C9A227] text-[#14120F] font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg"
            >
              Open Trip Enquiry Terminal ➔
            </Link>
            <TicketButton
              href={BUSINESS_INFO.whatsappUrl}
              isExternal
              variant="secondary-outline"
              size="md"
              ticketCode="WHATSAPP"
              icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
            >
              Chat on WhatsApp
            </TicketButton>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

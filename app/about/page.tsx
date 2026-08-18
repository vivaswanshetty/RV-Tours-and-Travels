import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AboutSection from "@/components/AboutSection";
import OverviewSection from "@/components/OverviewSection";
import { BUSINESS_INFO } from "@/lib/constants";
import TicketButton from "@/components/TicketButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { UserCheck, ShieldCheck, MapPin, Award, ChevronRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Proprietor R Ramesh | RV Tours and Travels Udupi",
  description: "Learn about RV Tours and Travels, a premier boutique tour & taxi service based in Udupi, Karnataka, managed with personal care by proprietor R Ramesh.",
  keywords: [
    "r ramesh udupi travels",
    "rv tours and travels owner",
    "about rv tours and travels",
    "boutique taxi operator udupi",
    "best chauffeur in udupi karnataka",
  ],
  alternates: {
    canonical: "https://rvtravelsudupi.com/about",
  },
  openGraph: {
    title: "About Proprietor R Ramesh | RV Tours and Travels",
    description: "10+ years of dedicated, owner-supervised chauffeur hospitality across coastal Karnataka and Western Ghats.",
    url: "https://rvtravelsudupi.com/about",
  },
};

export default function AboutPage() {
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
            <span className="text-[#F6F3EC] font-bold">About Operator Profile</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1914] border border-[#B08D3F]/50 rounded text-xs font-mono tracking-widest text-[#E0C068] uppercase">
              <UserCheck className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>OPERATOR PROFILE // DIRECT PROPRIETORSHIP</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC]">
              Dedicated Chauffeur Care with Zero Middlemen
            </h1>

            <p className="font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed">
              At <strong>RV Tours &amp; Travels</strong>, you speak directly with the owner, <strong>R Ramesh</strong>. No call centers, no algorithmic surge pricing, and no unvetted app drivers.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <TicketButton
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Ramesh ji, I would like to enquire about your services.")}`}
                isExternal
                variant="primary-gold"
                size="md"
                ticketCode="CONNECT"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                Chat with R Ramesh
              </TicketButton>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-[#F6F3EC] hover:border-[#B08D3F] hover:text-[#E0C068] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Call Directly: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Core */}
      <AboutSection />

      {/* Overview & Trust Commitments */}
      <OverviewSection />

      {/* Pre-Footer Call to Action */}
      <section className="py-16 bg-[#16130F] text-[#F6F3EC] border-t border-[#383229]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold">
            EXPERIENCE THE DIFFERENCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Ready to Plan Your Next Journey?
          </h2>
          <p className="font-body text-base text-[#F6F3EC]/80 max-w-xl mx-auto leading-relaxed">
            Reach out directly for customized tour package advice, outstation estimates, and airport pickups.
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

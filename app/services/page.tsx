import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import TicketButton from "@/components/TicketButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Plane, MapPin, Car, ShieldCheck, Clock, CheckCircle2, ChevronRight, Phone, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Chauffeur Services & Taxi Routes | RV Tours and Travels Udupi",
  description: "Explore our premium taxi and tour services in Udupi: Airport transfers to Mangalore (IXE), All-Karnataka outstation cabs, temple pilgrimage circuits, and local sightseeing.",
  keywords: [
    "udupi taxi service",
    "mangalore airport taxi",
    "mangalore airport drop udupi",
    "karnataka outstation taxi",
    "temple tour cab udupi",
    "car rental with driver udupi",
    "innova cab booking udupi",
  ],
  alternates: {
    canonical: "https://rvtravelsudupi.com/services",
  },
  openGraph: {
    title: "Chauffeur Services & Taxi Routes | RV Tours and Travels",
    description: "Reliable, owner-supervised road transport across Karnataka. Airport transfers, pilgrimage yatras, and outstation trips.",
    url: "https://rvtravelsudupi.com/services",
  },
};

const serviceIcons: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6 text-[#C9A227]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#C9A227]" />,
  Car: <Car className="w-6 h-6 text-[#C9A227]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C9A227]" />,
};

export default function ServicesPage() {
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
            <span className="text-[#F6F3EC] font-bold">Services &amp; Routes</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1914] border border-[#B08D3F]/50 rounded text-xs font-mono tracking-widest text-[#E0C068] uppercase">
              <Navigation className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>CHAUFFEUR SERVICE CAPABILITIES // KARNATAKA</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC]">
              Chauffeur Services &amp; Routes
            </h1>

            <p className="font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed">
              From punctual airport terminal transfers to bespoke multi-day road yatras across Karnataka, every booking is handled with owner-supervised care by proprietor R Ramesh.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <TicketButton
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Ramesh ji, I would like to enquire about your taxi services.")}`}
                isExternal
                variant="primary-gold"
                size="md"
                ticketCode="ENQUIRE"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                Instant WhatsApp Quote
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

      {/* Detailed Services Grid */}
      <section className="py-20 sm:py-24 bg-[#F6F3EC] text-[#14120F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white border border-[#DCD4C4] hover:border-[#B08D3F] rounded-2xl p-6 sm:p-10 shadow-sm transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#14120F] border border-[#B08D3F] flex items-center justify-center shrink-0">
                    {serviceIcons[service.icon] || <Car className="w-6 h-6 text-[#C9A227]" />}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#1F4C4C] uppercase tracking-widest font-bold block">
                      SERVICE // 0{index + 1}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14120F]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="font-mono text-xs text-[#B08D3F] uppercase tracking-wider font-semibold">
                  — {service.subtitle}
                </p>

                <p className="font-body text-base sm:text-lg text-[#14120F]/85 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-xs text-[#14120F] uppercase tracking-widest font-bold block">
                    SERVICE HIGHLIGHTS &amp; INCLUSIONS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 font-body text-sm text-[#14120F]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#2E6B6B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Quick Booking Card (4 cols) */}
              <div className="lg:col-span-4 p-6 bg-[#14120F] text-[#F6F3EC] border border-[#383229] rounded-xl space-y-4 shadow-xl">
                <span className="font-mono text-[10px] text-[#E0C068] uppercase tracking-widest font-bold block">
                  INSTANT ROUTE DISPATCH
                </span>
                <h3 className="font-display text-xl font-bold text-[#F6F3EC]">
                  Book This Service
                </h3>
                <p className="font-body text-xs text-[#F6F3EC]/70 leading-relaxed">
                  Direct coordination with proprietor R Ramesh. Get instant vehicle availability and transparent fixed pricing.
                </p>
                <div className="pt-2 space-y-2.5">
                  <TicketButton
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                    isExternal
                    variant="primary-gold"
                    size="sm"
                    ticketCode="WHATSAPP"
                    icon={<WhatsAppIcon className="w-3.5 h-3.5" withOriginalColor />}
                    className="w-full justify-center"
                  >
                    Enquire on WhatsApp
                  </TicketButton>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center py-2 px-3 text-xs font-mono text-[#F6F3EC]/80 hover:text-white uppercase tracking-wider transition-colors"
                  >
                    Use Booking Form ➔
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-Footer Call to Action */}
      <section className="py-16 bg-[#16130F] text-[#F6F3EC] border-t border-[#383229]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold">
            24/7 ALL-KARNATAKA COVERAGE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Ready to Reserve Your Chauffeur?
          </h2>
          <p className="font-body text-base text-[#F6F3EC]/80 max-w-xl mx-auto leading-relaxed">
            Whether for an early morning airport drop or a multi-day family temple tour, we guarantee punctual arrivals and spotless air-conditioned vehicles.
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

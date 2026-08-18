import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SeoContentSection from "@/components/SeoContentSection";
import { BUSINESS_INFO, TOUR_PACKAGES } from "@/lib/constants";
import TicketButton from "@/components/TicketButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Clock, Car, ChevronRight, Compass, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Karnataka Tour Packages 2026 | RV Tours and Travels Udupi",
  description: "Explore curated 2026 Karnataka tour packages: Kollur Mookambika, Murudeshwar, Gokarna, Dharmasthala, Kukke Subramanya, Coorg & Chikmagalur with dedicated chauffeur care by R Ramesh.",
  keywords: [
    "rv tours and travels packages 2026",
    "rv tours and travels packages",
    "karnataka tour packages 2026",
    "udupi temple tour cab package",
    "kollur murudeshwar gokarna tour taxi",
    "dharmasthala kukke subramanya package",
    "coorg chikmagalur tour package from udupi",
    "mangalore airport tour packages",
  ],
  alternates: {
    canonical: "https://rvtravelsudupi.com/packages",
  },
  openGraph: {
    title: "Karnataka Tour Packages 2026 | RV Tours and Travels",
    description: "Handcrafted 2026 holiday itineraries, temple yatras, and coastal road trips across Karnataka with transparent pricing and private chauffeur cars.",
    url: "https://rvtravelsudupi.com/packages",
  },
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#14120F] relative selection:bg-[#B08D3F] selection:text-[#14120F]">
      <Header />

      {/* Page Hero Header */}
      <section className="pt-32 sm:pt-36 lg:pt-40 pb-16 bg-[#14120F] text-[#F6F3EC] relative overflow-hidden border-b border-[#383229]">
        <div className="absolute inset-0 bg-route-dots opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B08D3F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-xs text-[#E0C068] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#B08D3F]" />
            <span className="text-[#F6F3EC] font-bold">Tour Packages 2026</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1914] border border-[#B08D3F]/50 rounded text-xs font-mono tracking-widest text-[#E0C068] uppercase">
              <Compass className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>CURATED 2026 ITINERARIES // PRIVATE CHAUFFEUR</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC] leading-tight">
              Bespoke Karnataka Tour Packages 2026
            </h1>

            <p className="font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed">
              Explore coastal Karnataka temple circuits, mist-covered Western Ghats highlands, and scenic Arabian Sea drives. Every package includes a pristine air-conditioned vehicle, route-expert chauffeur, transparent pricing with zero surge charges, and door-to-door pickup.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <TicketButton
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Ramesh ji, I want to discuss a customized 2026 tour package.")}`}
                isExternal
                variant="primary-gold"
                size="md"
                ticketCode="CUSTOM YATRA"
                icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
              >
                Plan Custom Itinerary on WhatsApp
              </TicketButton>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-[#F6F3EC] hover:border-[#B08D3F] hover:text-[#E0C068] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Call Helpline: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tour Packages Grid */}
      <section className="py-20 sm:py-24 bg-[#F6F3EC] text-[#14120F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#DCD4C4]">
            <div>
              <div className="font-mono text-xs text-[#1F4C4C] uppercase tracking-widest font-bold mb-1">
                // ACTIVE 2026 CIRCUITS
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14120F]">
                Featured Holiday &amp; Pilgrimage Packages
              </h2>
            </div>
            <p className="font-mono text-xs text-[#14120F]/60 max-w-xs">
              All routes fully customizable based on pooja timings, train/flight arrivals, and personal preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOUR_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative bg-[#14120F] text-[#F6F3EC] border border-[#383229] hover:border-[#B08D3F] rounded-xl p-6 sm:p-7 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 bg-[#1C1914] text-[#E0C068] border border-[#B08D3F]/50 rounded">
                      {pkg.badge}
                    </span>
                    <span className="font-mono text-xs text-[#F6F3EC]/70 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="font-mono text-xs text-[#B08D3F] mt-1">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-sm text-[#F6F3EC]/80 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Key Stops */}
                  <div className="p-3.5 bg-[#1C1914] border border-[#383229]/60 rounded-lg space-y-2">
                    <span className="font-mono text-[10px] text-[#B08D3F] uppercase tracking-wider block font-bold">
                      KEY WAYPOINTS &amp; STOPS:
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs text-[#F6F3EC]/85">
                      {pkg.stops.map((stop, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#C9A227] font-bold">{idx + 1}.</span>
                          <span>{stop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal Vehicle */}
                  <div className="font-mono text-xs text-[#F6F3EC]/70 flex items-center gap-2 pt-1">
                    <Car className="w-4 h-4 text-[#C9A227] shrink-0" />
                    <span>Vehicle: <strong className="text-[#F6F3EC]">{pkg.idealVehicle}</strong></span>
                  </div>
                </div>

                {/* Bottom WhatsApp Booking CTA */}
                <div className="pt-6 mt-6 border-t border-[#383229]/60">
                  <TicketButton
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                    isExternal
                    variant="primary-gold"
                    size="sm"
                    ticketCode="BOOK 2026"
                    icon={<WhatsAppIcon className="w-3.5 h-3.5" withOriginalColor />}
                    className="w-full justify-center"
                  >
                    Enquire on WhatsApp
                  </TicketButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Comprehensive Karnataka Travel & Route Guide */}
      <SeoContentSection />

      {/* Pre-Footer Call to Action */}
      <section className="py-16 bg-[#16130F] text-[#F6F3EC] border-t border-[#383229]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold">
            CUSTOM ITINERARIES // DOOR-TO-DOOR DISPATCH
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Have a Specific Multi-Day Tour Itinerary in Mind?
          </h2>
          <p className="font-body text-base text-[#F6F3EC]/80 max-w-xl mx-auto leading-relaxed">
            Send your dates, destination list, and passenger count. Proprietor R Ramesh will provide an immediate customized schedule and fixed transparent pricing.
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

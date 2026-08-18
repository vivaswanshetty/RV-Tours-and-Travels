"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO, FAQS_DATA } from "@/lib/constants";
import TicketButton from "@/components/TicketButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Car,
  Gift
} from "lucide-react";

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First open by default

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "travels", label: "Travels & Chauffeurs", icon: ShieldCheck },
    { id: "vehicles", label: "Cars & Bus Travel", icon: Car },
    { id: "gifts", label: "Travel Gifts", icon: Gift },
  ];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://rvtravelsudupi.com/faq/#faqpage",
    mainEntity: FAQS_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#14120F] relative selection:bg-[#B08D3F] selection:text-[#14120F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            <span className="text-[#F6F3EC] font-bold">Frequently Asked Questions</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1914] border border-[#B08D3F]/50 rounded text-xs font-mono tracking-widest text-[#E0C068] uppercase">
              <HelpCircle className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>KNOWLEDGE BASE // TRAVEL ADVISORY</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC]">
              Frequently Asked Questions
            </h1>

            <p className="font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed">
              Find instant answers to questions regarding taxi bookings in Udupi, best cars for Karnataka tour packages, Western Ghats travel, and gift ideas for avid travelers.
            </p>

            {/* Live Search Filter Box */}
            <div className="pt-3 max-w-xl">
              <div className="relative">
                <Search className="w-4 h-4 text-[#B08D3F] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g. Innova, best travels, gifts, Bangalore)..."
                  className="w-full pl-11 pr-4 py-3.5 bg-[#1C1914] border border-[#383229] hover:border-[#B08D3F]/80 focus:border-[#B08D3F] focus:outline-none rounded-xl text-sm text-[#F6F3EC] font-mono placeholder:text-[#F6F3EC]/40 transition-colors shadow-inner"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#E0C068] hover:text-white"
                  >
                    CLEAR
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="py-16 sm:py-24 bg-[#F6F3EC] text-[#14120F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setOpenFaq(null);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-[#14120F] text-[#E0C068] border border-[#B08D3F] shadow-md font-bold"
                      : "bg-[#EAE4D6] text-[#14120F]/80 border border-[#DCD4C4] hover:border-[#B08D3F] hover:text-[#14120F]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Accordion List (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              {filteredFaqs.length === 0 ? (
                <div className="p-8 bg-white border border-[#DCD4C4] rounded-xl text-center space-y-3 font-mono text-sm text-[#14120F]/70">
                  <p>No questions matched your search query "{searchQuery}".</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="text-xs text-[#B08D3F] underline font-bold uppercase tracking-wider"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#DCD4C4] hover:border-[#B08D3F] rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-base sm:text-lg font-bold text-[#14120F] leading-snug">
                          {faq.q}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#F6F3EC] border border-[#DCD4C4] flex items-center justify-center shrink-0 text-[#B08D3F] mt-0.5">
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#DCD4C4]/60 font-body text-sm sm:text-base text-[#14120F]/85 leading-relaxed animate-in fade-in duration-200">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Right Column: Direct Help & Dispatch Card (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-[#14120F] text-[#F6F3EC] border border-[#B08D3F] rounded-xl space-y-5 shadow-xl">
                <div className="flex items-center gap-2.5 font-mono text-xs text-[#E0C068] uppercase tracking-widest font-bold">
                  <MessageSquare className="w-4 h-4 text-[#C9A227]" />
                  <span>HAVE ANOTHER QUESTION?</span>
                </div>

                <h3 className="font-display text-2xl font-bold leading-tight">
                  Speak Directly with Proprietor R Ramesh
                </h3>

                <p className="font-body text-sm text-[#F6F3EC]/80 leading-relaxed">
                  Need a custom price quote for an outstation route, vehicle availability on specific dates, or temple darshan advice? We provide prompt personal coordination.
                </p>

                <div className="pt-2 space-y-3">
                  <TicketButton
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Ramesh ji, I have a question regarding travel booking.")}`}
                    isExternal
                    variant="primary-gold"
                    size="md"
                    ticketCode="DIRECT CHAT"
                    icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
                    className="w-full justify-center"
                  >
                    Ask on WhatsApp
                  </TicketButton>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-[#F6F3EC] hover:border-[#B08D3F] hover:text-[#E0C068] transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Call Helpline: {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="p-6 bg-white border border-[#DCD4C4] rounded-xl space-y-3">
                <span className="font-mono text-xs text-[#1F4C4C] uppercase tracking-widest font-bold block">
                  EXPLORE SERVICES &amp; PACKAGES
                </span>
                <ul className="space-y-2 font-mono text-xs divide-y divide-[#DCD4C4]/50">
                  <li className="pt-2">
                    <Link href="/packages" className="hover:text-[#B08D3F] flex items-center justify-between">
                      <span>Tour Packages 2026</span>
                      <span>➔</span>
                    </Link>
                  </li>
                  <li className="pt-2">
                    <Link href="/services" className="hover:text-[#B08D3F] flex items-center justify-between">
                      <span>Services &amp; Routes</span>
                      <span>➔</span>
                    </Link>
                  </li>
                  <li className="pt-2">
                    <Link href="/fleet" className="hover:text-[#B08D3F] flex items-center justify-between">
                      <span>Vehicle Specifications</span>
                      <span>➔</span>
                    </Link>
                  </li>
                  <li className="pt-2">
                    <Link href="/contact" className="hover:text-[#B08D3F] flex items-center justify-between">
                      <span>Online Booking Terminal</span>
                      <span>➔</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

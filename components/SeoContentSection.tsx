"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Calendar,
  ShieldCheck,
  Star,
  Compass,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Car,
  Clock,
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";
import TicketButton from "./TicketButton";

export default function SeoContentSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const faqs = [
    {
      category: "travels",
      q: "Which travels is best?",
      a: "The best travels service is one that provides personalized owner-driven coordination, transparent pricing with zero surge charges, punctual pickups, and route-expert chauffeurs. For travel across Karnataka and coastal regions, RV Tours and Travels (managed directly by proprietor R Ramesh) is widely recognized for spotless air-conditioned vehicles, safe driving on Western Ghats, and 24/7 dedicated customer support.",
    },
    {
      category: "vehicles",
      q: "Which car is best for tour and travels?",
      a: "The Toyota Innova Crysta is widely considered the best car for tour and travels due to its exceptional ride comfort, spacious captain seating for 6–7 passengers, generous luggage boot, and reliable performance on long highway stretches and ghat roads. For smaller families (1–4 passengers), the Toyota Etios or Maruti Dzire offers excellent comfort and mileage, while the luxury Tempo Traveller (12–20 seater) is ideal for large group excursions.",
    },
    {
      category: "travels",
      q: "Which travels is best in India?",
      a: "The best travels in India depends on the journey type: For personalized regional road tours, coastal temple yatras, and private airport transfers in South India, boutique owner-operated fleets like RV Tours and Travels offer superior reliability and care. For pan-India rail journeys, IRCTC provides premier heritage trains, and for scheduled interstate coach transport, premium operators like KSRTC (Airavat Club Class) lead the industry.",
    },
    {
      category: "travels",
      q: "Which travels is best in Bangalore?",
      a: "For outstation journeys connecting Bangalore to coastal Karnataka (Udupi, Mangalore, Murudeshwar, Gokarna) and the Western Ghats (Coorg, Chikmagalur), RV Tours and Travels is among the top choices for customized tour packages and dedicated private chauffeur cabs with fixed transparent tariffs and expert ghat drivers.",
    },
    {
      category: "vehicles",
      q: "Which is the best car for travels in India?",
      a: "The best car for road travels in India is the Toyota Innova Crysta / Hycross for long-distance family travel and rough road handling, followed by the Maruti Suzuki Ertiga for budget-conscious families. For budget solo or couple travel, the Toyota Etios / Maruti Dzire is ideal. For joint family pilgrimages and large group holiday tours, luxury Force Tempo Travellers provide unmatched space and comfort.",
    },
    {
      category: "travels",
      q: "Which is the best tours and travels in India?",
      a: "For customized road tours, spiritual pilgrimages, and chauffeur services in Karnataka, RV Tours and Travels stands out for transparent, un-surged pricing, pristine vehicles, and owner-supervised itineraries. For large pan-India holiday packages, established national operators exist, but regional boutique agencies offer far higher reliability and personalized customer service.",
    },
    {
      category: "gifts",
      q: "Best gifts for someone who travels?",
      a: "The best gifts for travelers include: Active Noise-Cancelling (ANC) headphones or earbuds, universal worldwide travel adapters with high-speed USB-C PD charging, high-capacity portable power banks (20,000mAh+), memory foam ergonomic neck pillows, packing cube compression organizers, RFID-blocking travel wallets, and lightweight compact digital luggage scales.",
    },
    {
      category: "gifts",
      q: "Best gifts for someone who travels for work?",
      a: "The best gifts for business and work travelers include: sleek laptop backpacks with TSA-friendly compartments and USB passthrough, portable second laptop monitors, noise-canceling headsets with crystal-clear microphones for conference calls, wrinkle-resistant garment bags, multi-device fast GaN travel chargers, and portable power banks with laptop charging capability.",
    },
    {
      category: "gifts",
      q: "Best gifts for someone who travels a lot for work?",
      a: "For frequent corporate and business flyers, top gifts include: premium ultra-durable hardshell spinner carry-on luggage, airline-approved portable power stations with 65W+ laptop charging, premium ANC headphones (such as Sony WH-1000XM5 or Bose QuietComfort), leather passport and document organizers, international multi-port GaN power strips, and subscription to lounge access or travel organizer apps.",
    },
    {
      category: "vehicles",
      q: "Which is the best bus travels in India?",
      a: "In the luxury government sector, KSRTC (Karnataka State Road Transport Corporation) with its Airavat Club Class (Volvo Multi-Axle) and Ambari Utsav (Volvo Sleeper) is considered the best bus service in India for safety, punctuality, and comfort. For private group travels, booking a dedicated private Luxury AC Tempo Traveller from RV Tours and Travels provides greater flexibility, custom departure times, and door-to-door convenience.",
    },
  ];

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section
      id="travel-guide"
      aria-label="RV Tours and Travels Comprehensive Travel Guide and Tour Packages 2026"
      className="py-20 bg-[#14120F] text-[#F6F3EC] relative overflow-hidden border-t border-[#383229]"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#B08D3F_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B08D3F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1914] border border-[#B08D3F]/40 rounded font-mono text-xs text-[#E0C068] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>AUTHORITATIVE TRAVEL GUIDE // KARNATAKA 2026</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F3EC] leading-[1.15]">
            RV Tours and Travels — Premium Chauffeur Taxi &amp; Tour Packages 2026
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-[#F6F3EC]/80 leading-relaxed">
            Welcome to the official digital portal of <strong>RV Tours and Travels</strong>, your premier road transport partner for bespoke holiday itineraries, spiritual temple circuits, airport transfers, and outstation taxi service across Karnataka. Headquartered in Udupi and directed by proprietor <strong>R Ramesh</strong>, we redefine road travel through uncompromising punctuality, pristine vehicles, and transparent fares.
          </p>
        </div>

        {/* Content Block 1: About Business & Direct Proprietorship */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8 space-y-6 font-body text-sm sm:text-base text-[#F6F3EC]/85 leading-relaxed">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#E0C068] flex items-center gap-2.5">
              <Compass className="w-6 h-6 text-[#C9A227]" />
              About RV Tours and Travels — Dedicated Chauffeur Care with Zero Middlemen
            </h3>

            <p>
              When navigating the scenic coastal highway stretches of the Arabian Sea or ascending the mist-laden Western Ghats, vehicle reliability, driver familiarity, and chauffeur expertise are indispensable. While many travelers search online for <strong>RV Tours and Travels Pvt Ltd</strong> or commercial aggregators, our boutique operation stands apart through personalized, owner-supervised hospitality. Unlike large app-based aggregators that assign unvetted third-party contractors and frequently cancel scheduled rides, every trip booked with <strong>RV Tours and Travels</strong> is personally verified, scheduled, and managed by proprietor R Ramesh.
            </p>

            <p>
              Our foundation is built on three core pillars: immaculate vehicle hygiene, punctual arrivals, and courteous drivers who are intimately familiar with local customs, temple darshan protocols, coastal shortcuts, and mountain ghat safety. Whether you require an early dawn departure for Kollur Mookambika Temple, a family trip to Dharmasthala and Kukke Subramanya, or a midnight airport drop at Mangalore International Airport (IXE), we ensure a calm, safe, and punctual transit across every single kilometer.
            </p>

            <p>
              With over a decade of hands-on expertise navigating the roads of coastal Karnataka, Malnad, and the Central Western Ghats, we combine deep regional route intelligence with modern customer conveniences. Every traveler receives dedicated trip coordination, transparent tariff estimation, luggage handling assistance, and continuous communication throughout their journey.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 bg-[#1C1914] border border-[#B08D3F]/60 rounded-xl space-y-4 shadow-xl">
            <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold block">
              QUICK DISPATCH CONTACT
            </span>
            <h4 className="font-display text-xl font-bold text-[#F6F3EC]">
              Official RV Tours and Travels Contact Number
            </h4>
            <p className="font-body text-xs text-[#F6F3EC]/70 leading-relaxed">
              Reach proprietor R Ramesh directly for instant price quotations, vehicle availability, and personalized 2026 itinerary planning.
            </p>
            <div className="pt-2 space-y-2 font-mono text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-2.5 p-3 bg-[#14120F] border border-[#383229] rounded hover:border-[#B08D3F] transition-colors text-[#F6F3EC]"
              >
                <Phone className="w-4 h-4 text-[#C9A227]" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 bg-[#14120F] border border-[#B08D3F]/50 rounded hover:border-[#E0C068] transition-colors text-[#E0C068]"
              >
                <WhatsAppIcon className="w-4 h-4" withOriginalColor />
                <span>WhatsApp: +91 98455 11169</span>
              </a>
            </div>
            <div className="p-3 bg-[#14120F] border border-[#383229]/60 rounded font-mono text-[11px] text-[#F6F3EC]/60 space-y-1">
              <div><strong className="text-[#B08D3F]">Operating Hours:</strong> 24/7 Advance Dispatch</div>
              <div><strong className="text-[#B08D3F]">Headquarters:</strong> Udupi, Karnataka, India</div>
            </div>
          </div>
        </div>

        {/* Content Block 2: Tour Packages 2026 */}
        <div className="mb-16 space-y-8">
          <div className="border-b border-[#383229] pb-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F6F3EC]">
              Curated RV Tours and Travels Packages 2026
            </h3>
            <p className="font-body text-sm sm:text-base text-[#F6F3EC]/70 mt-1">
              Handcrafted road itineraries designed for families, pilgrims, corporate delegates, and group excursions across Karnataka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Package 1 */}
            <div className="p-6 bg-[#1C1914] border border-[#383229] rounded-xl hover:border-[#B08D3F] transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#C9A227] uppercase tracking-widest px-2 py-0.5 bg-[#14120F] border border-[#B08D3F]/40 rounded font-bold">
                  PILGRIMAGE CIRCUIT
                </span>
                <span className="font-mono text-xs text-[#F6F3EC]/60">3–5 Days</span>
              </div>
              <h4 className="font-display text-xl font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors">
                Coastal Karnataka &amp; 7-Temple Circuit 2026
              </h4>
              <p className="font-body text-xs text-[#F6F3EC]/80 leading-relaxed">
                Complete sacred temple yatra covering Udupi Sri Krishna Matha, Kollur Mookambika Temple, Murudeshwar Shiva Temple &amp; Beach, Gokarna Mahabaleshwar, Anegudde Vinayaka, Kateel Durgaparameshwari, Dharmasthala Manjunatha, and Kukke Subramanya. Includes customized halts aligned with morning and evening pooja schedules.
              </p>
              <ul className="font-mono text-xs text-[#F6F3EC]/70 space-y-1.5 pt-2 border-t border-[#383229]/60">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3F]" /> Optimized darshan time halts</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3F]" /> AC Sedan, Innova or Tempo</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3F]" /> Senior citizen friendly pace</li>
              </ul>
            </div>

            {/* Package 2 */}
            <div className="p-6 bg-[#1C1914] border border-[#383229] rounded-xl hover:border-[#B08D3F] transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#C9A227] uppercase tracking-widest px-2 py-0.5 bg-[#14120F] border border-[#B08D3F]/40 rounded font-bold">
                  HILL STATION &amp; NATURE
                </span>
                <span className="font-mono text-xs text-[#F6F3EC]/60">3–4 Days</span>
              </div>
              <h4 className="font-display text-xl font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors">
                Western Ghats &amp; Coffee Estates Tour 2026
              </h4>
              <p className="font-body text-xs text-[#F6F3EC]/80 leading-relaxed">
                Scenic mountain escapes exploring Chikmagalur coffee plantations, Mullayanagiri peak, Agumbe rainforest sunset viewpoint, Kudremukh National Park, and Coorg (Madikeri, Abbey Falls, Raja’s Seat, and Bylakuppe Golden Temple). Expert ghat chauffeurs ensure effortless mountain driving.
              </p>
              <ul className="font-mono text-xs text-[#F6F3EC]/70 space-y-1.5 pt-2 border-t border-[#383229]/60">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3F]" /> Mountain ghat driving experts</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3F]" /> Flexible scenic viewpoints</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3F]" /> Estate homestay drops</li>
              </ul>
            </div>

            {/* Package 3 */}
            <div className="p-6 bg-[#1C1914] border border-[#383229] rounded-xl hover:border-[#B08D3F] transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#C9A227] uppercase tracking-widest px-2 py-0.5 bg-[#14120F] border border-[#B08D3F]/40 rounded font-bold">
                  AIRPORT &amp; OUTSTATION
                </span>
                <span className="font-mono text-xs text-[#F6F3EC]/60">24/7 Service</span>
              </div>
              <h4 className="font-display text-xl font-bold text-[#F6F3EC] group-hover:text-[#E0C068] transition-colors">
                Mangalore Airport (IXE) &amp; Express Transfers
              </h4>
              <p className="font-body text-xs text-[#F6F3EC]/80 leading-relaxed">
                Flight-synchronized private airport transfers between Mangalore International Airport (IXE) and Udupi, Manipal, Kundapura, Karkala, and outstation hubs. Real-time flight tracking ensures timely curbside pickups with zero waiting hassle and fixed transparent rates.
              </p>
              <ul className="font-mono text-xs text-[#F6F3EC]/70 space-y-1.5 pt-2 border-t border-[#383229]/60">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3F]" /> Curbside luggage assistance</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3F]" /> Clean, sanitized AC interiors</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#B08D3F]" /> No midnight surge pricing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Block 3: Customer Trust & Reviews */}
        <div className="p-8 sm:p-10 bg-[#1C1914] border border-[#383229] rounded-2xl mb-16 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#383229] pb-4">
            <div>
              <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold block">
                PASSENGER TRUST &amp; SAFETY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F6F3EC]">
                Verified RV Tours and Travels Reviews &amp; Testimonials
              </h3>
            </div>
            <div className="flex items-center gap-1 text-[#E0C068] font-mono text-sm bg-[#14120F] px-3 py-1.5 rounded border border-[#B08D3F]/40">
              <Star className="w-4 h-4 fill-current text-[#C9A227]" />
              <Star className="w-4 h-4 fill-current text-[#C9A227]" />
              <Star className="w-4 h-4 fill-current text-[#C9A227]" />
              <Star className="w-4 h-4 fill-current text-[#C9A227]" />
              <Star className="w-4 h-4 fill-current text-[#C9A227]" />
              <span className="ml-1 text-xs text-[#F6F3EC]/90 font-bold">4.9 / 5.0 (128+ Reviews)</span>
            </div>
          </div>

          <p className="font-body text-sm sm:text-base text-[#F6F3EC]/85 leading-relaxed">
            Customer trust is the core foundation of our service. When travelers read authentic <strong>RV Tours and Travels reviews</strong>, three consistent highlights stand out: courteous chauffeur behavior, spotless and odor-free vehicles, and predictable, transparent billing with zero hidden surcharges or peak hour surge tariffs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <blockquote className="p-5 bg-[#14120F] border-l-2 border-[#B08D3F] rounded-r-lg space-y-2">
              <p className="font-body text-xs sm:text-sm text-[#F6F3EC]/90 italic leading-relaxed">
                &ldquo;Our family booked a 4-day pilgrimage package covering Udupi, Kollur, Murudeshwar, and Dharmasthala with RV Tours and Travels. The Innova Crysta was spotless, and Ramesh ji&apos;s driving on the ghat curves was exceptionally smooth and safe. Highly recommended for families with elders!&rdquo;
              </p>
              <footer className="font-mono text-xs text-[#E0C068]">
                — Suresh Hegde, Bengaluru (Family Temple Tour)
              </footer>
            </blockquote>

            <blockquote className="p-5 bg-[#14120F] border-l-2 border-[#B08D3F] rounded-r-lg space-y-2">
              <p className="font-body text-xs sm:text-sm text-[#F6F3EC]/90 italic leading-relaxed">
                &ldquo;I needed a prompt 4:00 AM pickup from Manipal to Mangalore Airport. The driver arrived 15 minutes before time, helped with heavy luggage, and got me to the airport relaxed. The most dependable taxi service in coastal Karnataka.&rdquo;
              </p>
              <footer className="font-mono text-xs text-[#E0C068]">
                — Dr. Ananya Rao, Mumbai (Frequent Airport Commuter)
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Content Block 4: Fleet Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-[#1C1914] border border-[#383229] rounded-xl space-y-3">
            <Car className="w-6 h-6 text-[#C9A227]" />
            <h4 className="font-display text-lg font-bold text-[#F6F3EC]">
              Comfort Sedan Class
            </h4>
            <p className="font-body text-xs text-[#F6F3EC]/75 leading-relaxed">
              Toyota Etios &amp; Maruti Dzire. Ideal for 1 to 4 passengers with 2 to 3 suitcases. Best suited for city commutes, airport transfers, and economical one-way outstation trips across Karnataka.
            </p>
          </div>

          <div className="p-6 bg-[#1C1914] border border-[#383229] rounded-xl space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#C9A227]" />
            <h4 className="font-display text-lg font-bold text-[#F6F3EC]">
              Executive SUV / MUV Class
            </h4>
            <p className="font-body text-xs text-[#F6F3EC]/75 leading-relaxed">
              Toyota Innova Crysta &amp; Maruti Ertiga. Accommodates 6 to 7 passengers with generous boot capacity. Unrivalled ride comfort on winding mountain ghats and long journeys.
            </p>
          </div>

          <div className="p-6 bg-[#1C1914] border border-[#383229] rounded-xl space-y-3">
            <Clock className="w-6 h-6 text-[#C9A227]" />
            <h4 className="font-display text-lg font-bold text-[#F6F3EC]">
              Luxury Tempo Traveller
            </h4>
            <p className="font-body text-xs text-[#F6F3EC]/75 leading-relaxed">
              12 to 20 seater luxury coaches. Tailored for joint family vacations, wedding transportation, and corporate tours with individual AC vents and spacious legroom.
            </p>
          </div>
        </div>

        {/* Content Block 4.5: Transparent Booking & Seasonal Advice */}
        <div className="p-6 sm:p-8 bg-[#1C1914] border border-[#B08D3F]/40 rounded-xl mb-16 space-y-4">
          <h4 className="font-display text-xl font-bold text-[#E0C068]">
            Transparent Fare Structure &amp; 2026 Peak Season Planning
          </h4>
          <p className="font-body text-xs sm:text-sm text-[#F6F3EC]/85 leading-relaxed">
            Planning your trip in advance for the 2026 holiday calendar — including Navaratri poojas at Kollur Mookambika, Paryaya celebrations in Udupi, year-end New Year beach holidays, and summer vacation getaways — is strongly recommended. With <strong>RV Tours and Travels</strong>, reservations are secured with zero hidden booking commissions. Our upfront quotation covers vehicle charges, fuel allowances, driver assistance, and route tolls clearly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-[#F6F3EC]/80">
            <div className="p-3 bg-[#14120F] border border-[#383229] rounded">
              <span className="text-[#C9A227] font-bold block mb-1">01. SHARE DETAILS</span>
              Send dates, passenger count, and preferred vehicle via phone or WhatsApp.
            </div>
            <div className="p-3 bg-[#14120F] border border-[#383229] rounded">
              <span className="text-[#C9A227] font-bold block mb-1">02. ALL-INCLUSIVE QUOTE</span>
              Receive a fixed, transparent tariff breakdown with zero hidden surcharges.
            </div>
            <div className="p-3 bg-[#14120F] border border-[#383229] rounded">
              <span className="text-[#C9A227] font-bold block mb-1">03. GUARANTEED PICKUP</span>
              Vehicle and route-expert chauffeur assigned with instant dispatch confirmation.
            </div>
          </div>
        </div>

        {/* Content Block 5: Interactive SEO FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center mb-6">
            <span className="font-mono text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F6F3EC]">
              Everything You Need to Know About Travel &amp; Chauffeur Services
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#F6F3EC]/70 mt-2 max-w-xl mx-auto">
              Answers to top traveler questions on vehicle selection, destination planning, best travel operators, and travel gear recommendations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
            {[
              { id: "all", label: "All Questions (10)" },
              { id: "travels", label: "Travels & Chauffeur Services" },
              { id: "vehicles", label: "Cars & Bus Travels" },
              { id: "gifts", label: "Best Travel Gifts" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenFaq(null);
                }}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#B08D3F] text-[#14120F] font-bold shadow-md"
                    : "bg-[#1C1914] text-[#F6F3EC]/70 border border-[#383229] hover:border-[#B08D3F]/60 hover:text-[#E0C068]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1C1914] border border-[#383229] rounded-lg overflow-hidden transition-colors hover:border-[#B08D3F]/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display text-sm sm:text-base font-bold text-[#F6F3EC] hover:text-[#E0C068] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#B08D3F] font-normal">
                      Q{index + 1}.
                    </span>
                    {faq.q}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-[#C9A227] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#C9A227] shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 font-body text-xs sm:text-sm text-[#F6F3EC]/85 leading-relaxed border-t border-[#383229]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick CTA inside SEO section */}
          <div className="pt-8 text-center">
            <TicketButton
              href="#contact"
              variant="primary-gold"
              size="lg"
              ticketCode="BOOK NOW"
              icon={<WhatsAppIcon className="w-4 h-4" withOriginalColor />}
            >
              Book RV Tours and Travels Today
            </TicketButton>
          </div>
        </div>
      </div>
    </section>
  );
}

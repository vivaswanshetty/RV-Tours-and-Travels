import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RouteLine from "@/components/RouteLine";
import OverviewSection from "@/components/OverviewSection";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import DestinationsSection from "@/components/DestinationsSection";
import SapthaKshetraSection from "@/components/SapthaKshetraSection";
import FeaturedPackagesSection from "@/components/FeaturedPackagesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import QuickFaqStrip from "@/components/QuickFaqStrip";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F3EC] text-[#14120F] relative selection:bg-[#B08D3F] selection:text-[#14120F]">
      {/* Persistent Sticky Header */}
      <Header />

      {/* Signature Route Line Navigation Spine */}
      <RouteLine />

      {/* Waypoint 01: Hero & Departure Board */}
      <Hero />

      {/* Waypoint 02: Destinations ("Where We Drive") */}
      <DestinationsSection />

      {/* Waypoint 03: Saptha Kshetra Sacred Pilgrimage */}
      <SapthaKshetraSection />

      {/* Waypoint 04: Popular Tour Packages */}
      <FeaturedPackagesSection />

      {/* Waypoint 05: Fleet Specifications */}
      <FleetSection />

      {/* Waypoint 06: Services & Routes */}
      <ServicesSection />

      {/* Waypoint 07: Built on Trust ("Why Choose Us") */}
      <OverviewSection />

      {/* Waypoint 08: About / Operator Profile */}
      <AboutSection />

      {/* Waypoint 09: Contact / Dispatch */}
      <ContactSection />

      {/* Quick FAQs Teaser */}
      <QuickFaqStrip />

      {/* Pre-footer Call to Action */}
      <CtaBanner />

      {/* Boarding Pass Stub Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Chat Bubble */}
      <FloatingWhatsApp />
    </main>
  );
}

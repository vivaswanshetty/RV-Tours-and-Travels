import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RouteLine from "@/components/RouteLine";
import OverviewSection from "@/components/OverviewSection";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
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

      {/* Waypoint 01 Trust & Commitments */}
      <OverviewSection />

      {/* Waypoint 02: Services */}
      <ServicesSection />

      {/* Waypoint 03: Fleet Specifications */}
      <FleetSection />

      {/* Waypoint 04: Featured 2026 Tour Packages */}
      <FeaturedPackagesSection />

      {/* Waypoint 05: About R Ramesh & RV Tours */}
      <AboutSection />

      {/* Waypoint 06: Contact & Reservation Manifest */}
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

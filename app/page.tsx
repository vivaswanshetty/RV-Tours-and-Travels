import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      {/* Persistent Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Destinations ("Popular Destinations") */}
      <DestinationsSection />

      {/* Saptha Kshetra Sacred Pilgrimage */}
      <SapthaKshetraSection />

      {/* Popular Tour Packages */}
      <FeaturedPackagesSection />

      {/* Fleet Specifications */}
      <FleetSection />

      {/* Services & Routes */}
      <ServicesSection />

      {/* Built on Trust ("Why Travel With Us") */}
      <OverviewSection />

      {/* About / Operator Profile */}
      <AboutSection />

      {/* Booking & Contact */}
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

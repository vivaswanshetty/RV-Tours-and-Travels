"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQS_DATA } from "@/lib/constants";
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export default function QuickFaqStrip() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Take first 3 FAQs for the home page teaser
  const quickFaqs = FAQS_DATA.slice(0, 3);

  return (
    <section className="py-20 bg-[#F6F3EC] text-[#14120F] border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#1F4C4C]">
              <HelpCircle className="w-4 h-4 text-[#1F4C4C]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#14120F]">
              Got Questions? We Have Answers.
            </h2>
            <p className="font-body text-base text-[#14120F]/80">
              Clear information regarding vehicle selection, chauffeur service standards, and pricing.
            </p>
          </div>

          <div>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#14120F] text-[#E0C068] hover:text-[#F6F3EC] border border-[#B08D3F] rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <span>View All 10 FAQs &amp; Travel Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="space-y-4 max-w-4xl">
          {quickFaqs.map((faq, idx) => {
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
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#DCD4C4]/60 font-body text-sm sm:text-base text-[#14120F]/85 leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

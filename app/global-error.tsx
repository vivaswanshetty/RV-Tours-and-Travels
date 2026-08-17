"use client";

import React from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#14120F] text-[#F6F3EC] flex items-center justify-center p-4 font-sans selection:bg-[#B08D3F] selection:text-[#14120F]">
        <div className="max-w-md w-full bg-[#1C1914] border border-[#B08D3F] rounded-2xl p-8 shadow-2xl text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#14120F] border border-red-800 flex items-center justify-center mx-auto text-red-400">
            <AlertTriangle className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <div className="font-mono text-xs text-[#C9A227] uppercase tracking-widest">
              SYSTEM LEVEL 500
            </div>
            <h1 className="text-2xl font-bold text-[#F6F3EC]">
              Critical Application Error
            </h1>
          </div>

          <p className="text-sm text-[#F6F3EC]/75 leading-relaxed">
            An unexpected error occurred in the application shell. Please retry reloading or contact proprietor {BUSINESS_INFO.proprietor}.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#B08D3F] text-[#14120F] rounded text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#E0C068] transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reload Application</span>
            </button>

            <a
              href="/"
              className="w-full sm:w-auto px-5 py-2.5 bg-[#14120F] border border-[#383229] hover:border-[#B08D3F] text-[#F6F3EC] rounded text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

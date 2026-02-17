"use client";
import React from 'react';
import { Box, CheckCircle2, Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function JafzaPage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white">
      <header className="py-20 px-6 text-center bg-gradient-to-r from-[#001f3f] via-[#002d5a] to-[#001f3f]">
        <div className="max-w-4xl mx-auto">
          <Box size={48} className="text-[#D4AF37] mx-auto mb-6" />
          <h1 className="text-4xl font-black text-[#D4AF37] mb-4 uppercase">JAFZA Gratuity Calculator</h1>
          <p className="text-gray-400 leading-relaxed">
            Jebel Ali Free Zone companies usually follow the standard UAE Labour Law, 
            but the documentation and end-of-service process is handled via the JAFZA portal.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-[#002d5a] p-10 rounded-[40px] border border-[#D4AF37]/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calculator className="text-[#D4AF37]" /> JAFZA Specific Rules 2026
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4 p-4 bg-[#001f3f] rounded-2xl border border-white/5">
                <CheckCircle2 className="text-[#D4AF37] shrink-0" />
                <p className="text-sm text-gray-300">JAFZA follows the same 21/30 day logic as Dubai Mainland.</p>
              </li>
              <li className="flex gap-4 p-4 bg-[#001f3f] rounded-2xl border border-white/5">
                <CheckCircle2 className="text-[#D4AF37] shrink-0" />
                <p className="text-sm text-gray-300">Final settlements must be uploaded to the JAFZA Jafznet portal for visa cancellation.</p>
              </li>
            </ul>
            <div className="mt-12 flex justify-center">
              <Link href="/" className="flex items-center gap-2 bg-[#D4AF37] text-[#001f3f] px-8 py-4 rounded-full font-black uppercase text-sm hover:scale-105 transition">
                Start JAFZA Calculation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
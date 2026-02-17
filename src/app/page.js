"use client";
import React from 'react';
import { CheckCircle2, HelpCircle, ArrowRight, ShieldCheck, Zap, Star, Calculator as CalcIcon } from 'lucide-react';
import Link from 'next/link';
import GratuityCalculatorForm from './components/GratuityCalculatorForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      <section className="relative py-20 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
              Free <span className="text-[#D4AF37]">UAE Gratuity</span> Calculator
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-medium">Accurate, fast, and compliant with UAE Labour Law. Get your gratuity calculation in seconds!</p>
            <Link href="#calculator" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#001f3f] px-8 py-4 rounded-2xl font-black uppercase text-sm hover:bg-yellow-500">
              Calculate My Gratuity Now →
            </Link>
          </div>
          <div id="calculator" className="lg:w-1/2 w-full">
            <GratuityCalculatorForm />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-16 uppercase tracking-widest text-[#D4AF37]">Why Use Our Calculator?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-justify">
            <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5"><h3 className="font-bold mb-3">100% Accurate & Compliant</h3><p className="text-xs text-gray-400">Updated with the latest UAE Labour Law regulations.</p></div>
            <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5"><h3 className="font-bold mb-3">Instant Results</h3><p className="text-xs text-gray-400">No waiting, no complicated forms. Get your gratuity in seconds.</p></div>
            <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5"><h3 className="font-bold mb-3">Free to Use</h3><p className="text-xs text-gray-400">Completely free, no hidden charges, no registration required.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
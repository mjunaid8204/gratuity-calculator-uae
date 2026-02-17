"use client";
import React from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Calculator as CalcIcon, 
  Star 
} from 'lucide-react';
import Link from 'next/link';
// Import the separate calculator logic
import GratuityCalculatorForm from './components/GratuityCalculatorForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      
      {/* 1. HERO SECTION [cite: 3, 4, 5] */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
              Free <span className="text-[#D4AF37]">UAE Gratuity</span> Calculator [cite: 5]
            </h1>
            <h2 className="text-xl text-gray-300 mb-8 font-medium">
              Accurate, fast, and compliant with UAE Labour Law. Get your gratuity calculation in seconds! [cite: 7]
            </h2>
            <Link href="#calculator" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#001f3f] px-8 py-4 rounded-2xl font-black uppercase text-sm hover:bg-yellow-500 transition shadow-lg">
              Calculate My Gratuity Now → [cite: 9]
            </Link>
          </div>
          
          {/* Calculator Integrated Here without mixing code [cite: 14] */}
          <div id="calculator" className="lg:w-1/2 w-full">
            <GratuityCalculatorForm />
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION [cite: 10, 11, 14] */}
      <section className="py-20 px-6 bg-[#002d5a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8 text-[#D4AF37] uppercase tracking-tighter">
            What is Gratuity in UAE? [cite: 11]
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-justify">
            <p>
              Gratuity, also known as end of service benefit, is a legally mandated payment that employers in the UAE must provide to employees upon termination of employment. [cite: 12]
            </p>
            <p>
              Whether you resign, retire, or are terminated, you are entitled to receive gratuity pay based on your years of service and final salary. [cite: 13]
            </p>
            <p className="text-sm border-t border-white/5 pt-6 italic">
              Our free UAE Gratuity Calculator helps you determine the exact amount you deserve according to UAE Labour Law Federal Decree-Law No. 33 of 2021. [cite: 14]
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY USE OUR CALCULATOR [cite: 15] */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-16 uppercase tracking-widest text-[#D4AF37]">
            Why Use Our Calculator? [cite: 15]
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <FeatureCard title="100% Accurate & Compliant" desc="Updated with the latest UAE Labour Law regulations." [cite: 16, 17] />
            <FeatureCard title="Instant Results" desc="No waiting, no complicated forms. Get your gratuity in seconds." [cite: 18, 19] />
            <FeatureCard title="Free to Use" desc="Completely free, no hidden charges, no registration required." [cite: 20, 21] />
          </div>
        </div>
      </section>

      {/* 4. CALCULATION TIERS TABLE [cite: 37, 38] */}
      <section className="py-20 px-6 bg-[#001122]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-[#D4AF37] text-center uppercase">
            Understanding the Calculation [cite: 37]
          </h2>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <table className="w-full text-left">
              <thead className="bg-[#D4AF37] text-[#001f3f] font-black uppercase text-xs">
                <tr>
                  <th className="p-6">Years of Service [cite: 30]</th>
                  <th className="p-6">Gratuity Rule [cite: 38]</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">1 - 5 Years [cite: 39]</td>
                  <td className="p-6">21 days of basic salary for each year [cite: 40]</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">More than 5 Years [cite: 41]</td>
                  <td className="p-6 text-justify">21 days for first 5 years + 30 days for additional years [cite: 42, 43]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION [cite: 49] */}
      <section className="py-20 px-6 bg-[#001f3f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">
            Frequently Asked Questions [cite: 49]
          </h2>
          <div className="space-y-6">
            <FAQ q="Is it based on basic or total salary?" a="Gratuity is calculated based on your basic salary only. Allowances are excluded." [cite: 50, 51] />
            <FAQ q="Will I receive gratuity if I resign?" a="Yes, but amount depends on years of service. Full gratuity after 5 years." [cite: 52, 53, 54] />
            <FAQ q="Is this accurate for 2025/2026?" a="Yes, fully updated with Decree-Law No. 33 of 2021." [cite: 57, 58] />
          </div>
        </div>
      </section>

      {/* 6. TRUSTED BY SECTION [cite: 63] */}
      <section className="py-16 bg-[#D4AF37] text-[#001f3f] text-center">
         <h2 className="text-2xl font-black uppercase mb-4">Trusted by 50,000+ UAE Employees [cite: 65]</h2>
         <p className="font-bold opacity-80 uppercase text-xs tracking-widest">Verified Calculations • No Registration [cite: 67, 68]</p>
      </section>
    </div>
  );
}

// Reusable Components to keep page.js clean
function FeatureCard({ title, desc }) {
  return (
    <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5 shadow-xl">
      <h3 className="text-white font-bold mb-3">{title}</h3>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5">
      <h4 className="flex items-center gap-2 font-bold mb-3 text-[#D4AF37]"><HelpCircle size={18}/> {q}</h4>
      <p className="text-sm text-gray-400 ml-7">{a}</p>
    </div>
  );
}
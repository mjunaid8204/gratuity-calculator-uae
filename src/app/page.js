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
import GratuityCalculatorForm from './components/GratuityCalculatorForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative py-20 px-6 overflow-hidden border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
              Free UAE Gratuity Calculator - Instantly Calculate Your End of Service Benefits [cite: 5]
            </h1>
            <h2 className="text-xl text-gray-300 mb-8 font-medium">
              Accurate, fast, and compliant with UAE Labour Law. Get your gratuity calculation in seconds! [cite: 7]
            </h2>
            <Link href="#calculator" className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#001f3f] px-8 py-4 rounded-2xl font-black uppercase text-sm hover:bg-yellow-500 transition shadow-lg">
              Calculate My Gratuity Now → [cite: 9]
            </Link>
          </div>
          
          <div id="calculator" className="lg:w-1/2 w-full">
            <GratuityCalculatorForm />
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-20 px-6 bg-[#002d5a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-8 text-[#D4AF37] uppercase tracking-tighter">
            What is Gratuity in UAE? [cite: 11]
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-justify">
            <p>
              Gratuity, also known as end of service benefit, is a legally mandated payment that employers in the UAE must provide to employees upon termination of employment[cite: 12]. Whether you resign, retire, or are terminated, you are entitled to receive gratuity pay based on your years of service and final salary[cite: 13].
            </p>
            <p>
              Our free UAE Gratuity Calculator helps you determine the exact amount you deserve according to UAE Labour Law Federal Decree-Law No. 33 of 2021[cite: 14]. Simply enter your employment details, and get an instant, accurate calculation of your end of service benefits[cite: 14].
            </p>
          </div>
        </div>
      </section>

      {/* WHY USE OUR CALCULATOR */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-16 uppercase tracking-widest text-[#D4AF37]">
            Why Use Our Gratuity Calculator? [cite: 15]
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard title="100% Accurate & UAE Law Compliant" desc="Our calculator is updated with the latest UAE Labour Law regulations to ensure precise calculations every time[cite: 16, 17]." />
            <FeatureCard title="Instant Results" desc="No waiting, no complicated forms. Get your gratuity amount calculated in seconds[cite: 18, 19]." />
            <FeatureCard title="Free to Use" desc="Completely free, no hidden charges, no registration required[cite: 20, 21]." />
            <FeatureCard title="Works for All Employment Types" desc="Whether you have a limited or unlimited contract, our calculator handles both scenarios[cite: 24, 25]." />
          </div>
        </div>
      </section>

      {/* HOW TO USE SECTION */}
      <section className="py-20 px-6 bg-[#001122]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black mb-12 text-center uppercase tracking-widest text-[#D4AF37]">
            How to Use the UAE Gratuity Calculator [cite: 26]
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            <Step number="1" title="Salary" text="Enter Your Basic Salary (excluding allowances) [cite: 27, 28]" />
            <Step number="2" title="Duration" text="Add Your Employment Duration (Years, Months, Days) [cite: 29, 30]" />
            <Step number="3" title="Contract" text="Select Your Contract Type (Limited or Unlimited) [cite: 31, 32]" />
            <Step number="4" title="Reason" text="Choose Resignation Reason (Resigned or Terminated) [cite: 33, 34]" />
            <Step number="5" title="Result" text="Click calculate and instantly see your result [cite: 35, 36]" />
          </div>
        </div>
      </section>

      {/* FORMULA & TABLE SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-[#D4AF37] text-center uppercase">
            Understanding UAE Gratuity Calculation [cite: 37]
          </h2>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl mb-12">
            <table className="w-full text-left">
              <thead className="bg-[#D4AF37] text-[#001f3f] font-black uppercase text-xs">
                <tr>
                  <th className="p-6">Years of Service</th>
                  <th className="p-6">Gratuity Calculation Formula [cite: 38]</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="p-6 font-bold">Less than 5 Years [cite: 39]</td>
                  <td className="p-6">21 days of basic salary for each year [cite: 40]</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">More than 5 Years [cite: 41]</td>
                  <td className="p-6">21 days for first 5 years + 30 days for each additional year [cite: 42, 43]</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
             <NoteBox title="Entitlement Note">If you resign before completing 1 year of service, you are not entitled to gratuity[cite: 45].</NoteBox>
             <NoteBox title="Maximum Cap">Maximum gratuity is capped at 2 years of basic salary[cite: 48].</NoteBox>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6 bg-[#001122]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">
            Frequently Asked Questions [cite: 49]
          </h2>
          <div className="space-y-4">
            <FAQ q="Is gratuity based on basic or total salary? [cite: 50]" a="Gratuity is calculated based on your basic salary only. Allowances such as housing and transport are not included[cite: 51]." />
            <FAQ q="Will I receive gratuity if I resign? [cite: 52]" a="Yes, but the amount depends on years of service. After 1-5 years you receive partial, and after 5 years you receive full gratuity[cite: 53, 54]." />
            <FAQ q="How is gratuity calculated for incomplete years? [cite: 55]" a="It is calculated proportionally based on the number of months and days worked[cite: 56]." />
            <FAQ q="Is this calculator accurate for 2025/2026? [cite: 57]" a="Yes, it is fully updated and compliant with UAE Labour Law Federal Decree-Law No. 33 of 2021[cite: 58]." />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-[#D4AF37] p-16 rounded-[3rem] text-[#001f3f]">
          <h2 className="text-4xl font-black mb-6 uppercase">Ready to Calculate Your Gratuity? [cite: 59]</h2>
          <p className="text-lg font-bold mb-10 opacity-80 max-w-xl mx-auto">
            Use our free UAE Gratuity Calculator now and get instant, accurate results in seconds! [cite: 61]
          </p>
          <Link href="#calculator" className="bg-[#001f3f] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition text-sm">
             Calculate My Gratuity Now → [cite: 62]
          </Link>
          <div className="mt-12 flex justify-center gap-8 opacity-60 text-[10px] font-black uppercase">
             <span>Used by 50,000+ Employees [cite: 65]</span>
             <span>No Registration Required [cite: 68]</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-components
function FeatureCard({ title, desc }) {
  return (
    <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5 h-full">
      <h3 className="text-white font-bold mb-3">{title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5 text-center">
      <div className="text-[#D4AF37] font-black text-2xl mb-1">0{number}</div>
      <h4 className="text-[10px] font-black text-white uppercase mb-2 tracking-widest">{title}</h4>
      <p className="text-[10px] text-gray-500 leading-tight">{text}</p>
    </div>
  );
}

function NoteBox({ title, children }) {
  return (
    <div className="bg-[#001f3f] p-6 rounded-2xl border-l-4 border-[#D4AF37]">
      <h4 className="text-[#D4AF37] font-black uppercase text-xs mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{children}</p>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5">
      <h4 className="font-bold mb-3 text-white flex gap-2"><HelpCircle size={18} className="text-[#D4AF37] shrink-0" /> {q}</h4>
      <p className="text-sm text-gray-400 ml-7 leading-relaxed">{a}</p>
    </div>
  );
}
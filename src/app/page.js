"use client";
import React from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Calculator as CalcIcon, 
  Star,
  Info
} from 'lucide-react';
import Link from 'next/link';
import GratuityCalculatorForm from './components/GratuityCalculatorForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans selection:bg-[#D4AF37] selection:text-[#001f3f]">
      
      {/* HERO SECTION - Improved Layout & Typography */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-[#D4AF37]/10 bg-gradient-to-b from-[#002d5a] to-[#001f3f]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Professional Title & Keywords */}
          <div className="lg:w-3/5 text-left z-10">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full mb-6 border border-[#D4AF37]/20">
              <Star size={16} fill="#D4AF37" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Updated for 2026 Labour Law</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] uppercase tracking-tighter">
              Free <span className="text-[#D4AF37] block">UAE Gratuity</span> Calculator
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed max-w-2xl">
              Instantly calculate your <span className="text-white font-bold border-b-2 border-[#D4AF37]">End of Service Benefits</span> with our 100% accurate and legal-compliant tool.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400">
                <CheckCircle2 size={18} className="text-[#D4AF37]" /> Limited Contract
              </div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400">
                <CheckCircle2 size={18} className="text-[#D4AF37]" /> Unlimited Contract
              </div>
            </div>

            <Link href="#calculator" className="group inline-flex items-center gap-4 bg-[#D4AF37] text-[#001f3f] px-10 py-5 rounded-2xl font-black uppercase text-sm hover:bg-white transition-all duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.2)]">
              Calculate Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          {/* Right Side: Calculator Form */}
          <div id="calculator" className="lg:w-2/5 w-full relative">
            <div className="absolute -inset-4 bg-[#D4AF37]/10 blur-3xl rounded-full opacity-30"></div>
            <div className="relative">
              <GratuityCalculatorForm />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION - High Readability */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-center uppercase tracking-tighter">
            What is <span className="text-[#D4AF37]">Gratuity</span> in UAE?
          </h2>
          <div className="space-y-8 text-gray-300 leading-[1.8] text-lg text-justify font-medium">
            <p className="bg-[#002d5a] p-8 rounded-3xl border-l-8 border-[#D4AF37] shadow-xl">
              Gratuity, also known as end of service benefit, is a legally mandated payment that employers in the UAE must provide to employees upon termination. Whether you resign, retire, or are terminated, you are entitled to receive gratuity pay based on your <span className="text-white font-bold underline decoration-[#D4AF37]">years of service</span> and <span className="text-white font-bold underline decoration-[#D4AF37]">basic salary</span>.
            </p>
            <p>
              Our free UAE Gratuity Calculator determine the exact amount you deserve according to <strong>UAE Labour Law Federal Decree-Law No. 33 of 2021</strong>. No registration, no hidden fees—just instant clarity for your financial planning.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES - Pop-up Hover Effect */}
      <section className="py-24 px-6 bg-[#001122]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-black mb-20 uppercase tracking-widest text-[#D4AF37]">
            Why Professionals Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HoverCard 
              icon={<ShieldCheck size={32} />} 
              title="Legal Compliance" 
              desc="Fully updated with the latest UAE Labour Law 2021/2026 regulations." 
            />
            <HoverCard 
              icon={<Zap size={32} />} 
              title="Instant Speed" 
              desc="Get precise end-of-service calculations in less than 2 seconds." 
            />
            <HoverCard 
              icon={<Star size={32} />} 
              title="100% Free" 
              desc="No registration or personal data required. Your privacy is our priority." 
            />
            <HoverCard 
              icon={<CalcIcon size={32} />} 
              title="All Contracts" 
              desc="Accurate results for both Limited and Unlimited employment contracts." 
            />
          </div>
        </div>
      </section>

      {/* FORMULA SECTION - Clean Table */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#001f3f] to-[#001122]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-[#D4AF37] text-center uppercase tracking-tighter">
            The Calculation Formula
          </h2>
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-[#002d5a]">
            <table className="w-full text-left">
              <thead className="bg-[#D4AF37] text-[#001f3f] font-black uppercase text-sm">
                <tr>
                  <th className="p-8">Service Duration</th>
                  <th className="p-8">Gratuity Rate</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition">
                  <td className="p-8 font-bold text-white">1 - 5 Years</td>
                  <td className="p-8">21 Days of Basic Salary for each year</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-8 font-bold text-white">Over 5 Years</td>
                  <td className="p-8">21 Days (first 5 years) + 30 Days (additional years)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Modern Design */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center uppercase tracking-tighter">
            Expert <span className="text-[#D4AF37]">FAQs</span>
          </h2>
          <div className="grid gap-6">
            <FAQItem q="Is gratuity based on total salary?" a="No. It is calculated strictly on your Basic Salary as stated in your contract. Housing and transport allowances are excluded." />
            <FAQItem q="What if I resign before 1 year?" a="Under UAE law, if you resign or are terminated before completing 1 full year of service, you are not entitled to gratuity." />
            <FAQItem q="Is there a maximum limit?" a="Yes, the total gratuity amount cannot exceed two years' worth of your basic salary." />
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-[#D4AF37] p-16 rounded-[4rem] text-[#001f3f] shadow-[0_20px_60px_rgba(212,175,55,0.3)]">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Plan Your Future Today</h2>
          <p className="text-xl font-bold mb-10 opacity-80 max-w-2xl mx-auto">
            Used by over 50,000+ professionals in Dubai, Abu Dhabi, and across the UAE.
          </p>
          <Link href="#calculator" className="bg-[#001f3f] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl inline-block">
             Start Calculation →
          </Link>
        </div>
      </section>
    </div>
  );
}

// Sub-components with Pop-up Effect
function HoverCard({ icon, title, desc }) {
  return (
    <div className="group bg-[#002d5a] p-10 rounded-[2.5rem] border border-white/5 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/50">
      <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-white text-xl font-black mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 group">
      <h4 className="font-bold text-xl mb-4 text-white flex items-start gap-3">
        <HelpCircle size={22} className="text-[#D4AF37] shrink-0 mt-1" /> {q}
      </h4>
      <p className="text-gray-400 ml-9 leading-relaxed">{a}</p>
    </div>
  );
}
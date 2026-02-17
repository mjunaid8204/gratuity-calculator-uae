"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { Landmark, CheckCircle, Calculator, Info, MapPin, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function EmirateLawPage() {
  const params = useParams();
  const emirateSlug = params.emirate;

  // Formatting name for display (e.g., "abu-dhabi" -> "Abu Dhabi")
  const emirateName = emirateSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-[#001f3f] text-white">
      {/* Dynamic Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#001f3f] via-[#002d5a] to-[#001f3f] border-b border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#D4AF37]/10 p-4 rounded-full border border-[#D4AF37]/20">
              <MapPin size={32} className="text-[#D4AF37]" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            {emirateName} <span className="text-[#D4AF37]">Gratuity Rules 2026</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {emirateName} Mainland private sector employees are governed by the UAE Federal Labour Law. 
            Ensure your end-of-service settlement is calculated with 100% accuracy.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-2 uppercase tracking-tight">
              <Gavel size={24} /> Labour Regulations in {emirateName}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              United Arab Emirates ki tamam mainland states, jin mein <strong>{emirateName}</strong> shamil hai, 
              aik hi Federal Decree-Law No. 33 of 2021 ko follow karti hain. Iska matlab hai ke gratuity ki basic logic 
              poore UAE mein aik hi hai.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition">
                <h4 className="font-bold mb-2 text-white">Calculation Basis</h4>
                <p className="text-xs text-gray-400">Hamesha monthly basic salary par calculate kiya jata hai.</p>
              </div>
              <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition">
                <h4 className="font-bold mb-2 text-white">Payment Deadline</h4>
                <p className="text-xs text-gray-400">Employer ko 14 din ke andar final payment karni hoti hai.</p>
              </div>
            </div>
          </section>

          {/* SEO Table Section */}
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white uppercase tracking-widest text-xs">
              <CheckCircle size={18} className="text-[#D4AF37]" /> Gratuity Tiers for {emirateName}
            </h3>
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#D4AF37] text-[#001f3f] uppercase font-black">
                  <tr>
                    <th className="p-5">Service Tenure</th>
                    <th className="p-5">Entitlement</th>
                  </tr>
                </thead>
                <tbody className="bg-[#002d5a]">
                  <tr className="border-b border-white/5 hover:bg-[#001f3f] transition">
                    <td className="p-5 font-bold">1 - 5 Years</td>
                    <td className="p-5">21 Days Salary per Year</td>
                  </tr>
                  <tr className="hover:bg-[#001f3f] transition">
                    <td className="p-5 font-bold">More than 5 Years</td>
                    <td className="p-5">30 Days Salary per Year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-[#D4AF37] p-8 rounded-[40px] text-[#001f3f] shadow-xl shadow-yellow-500/10">
            <Calculator size={32} className="mb-4" />
            <h4 className="text-2xl font-black mb-2 uppercase leading-none">Instant Calc</h4>
            <p className="text-sm mb-6 font-bold opacity-80">{emirateName} mainland formula apply karein.</p>
            <Link href="/" className="block w-full py-4 bg-[#001f3f] text-white text-center rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black transition">
              Launch Calculator
            </Link>
          </div>

          <div className="bg-[#002d5a] p-6 rounded-3xl border border-white/5">
            <h4 className="font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
              <Info size={18} /> Legal Support
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Agar aapka employer {emirateName} mein gratuity dene se inkar kare, toh aap MOHRE complaint portal 
              ya nazdeeki Tasheel center se rabta kar sakte hain.
            </p>
            <button className="w-full py-2 bg-transparent border border-gray-700 text-gray-400 rounded-lg text-[10px] font-bold uppercase hover:text-white transition">
              Find Tasheel in {emirateName}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
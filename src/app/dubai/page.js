"use client";
import React from 'react';
import { Landmark, CheckCircle, Info, Calculator, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function DubaiLawPage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#002d5a] border-b border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            Dubai Gratuity <span className="text-[#D4AF37]">Law 2026</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Dubai Mainland private sector companies follow the UAE Federal Decree-Law No. 33 of 2021. 
            Calculate your end-of-service benefits specifically for Dubai employment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 flex items-center gap-2">
              <Gavel size={24} /> Dubai Employment Rules
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Dubai Mainland mein kaam karne wale tamam employees MOHRE (Ministry of Human Resources and Emiratisation) ke rules ke mutabiq gratuity ke haqdar hain.
              </p>
              <div className="bg-[#001f3f] p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="text-[#D4AF37] shrink-0" />
                  <p><strong>Unlimited to Limited:</strong> 2026 tak tamam purane contracts ab "Limited Term" mein badal chuke hain.</p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-[#D4AF37] shrink-0" />
                  <p><strong>Resignation:</strong> Agar aap 1 saal ke baad resign karte hain, toh aap full gratuity ke haqdar hain (Limited contract rules).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Table for SEO */}
          <section>
            <h3 className="text-xl font-bold mb-6">Gratuity Calculation Table (Dubai)</h3>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#D4AF37] text-[#001f3f] uppercase font-black">
                  <tr>
                    <th className="p-4">Years of Service</th>
                    <th className="p-4">Gratuity Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-[#002d5a]">
                  <tr className="border-b border-white/5">
                    <td className="p-4">1 - 5 Years</td>
                    <td className="p-4">21 Days of Basic Salary per year</td>
                  </tr>
                  <tr>
                    <td className="p-4">Above 5 Years</td>
                    <td className="p-4">30 Days of Basic Salary per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-[#D4AF37] p-8 rounded-3xl text-[#001f3f]">
            <Calculator size={32} className="mb-4" />
            <h4 className="text-xl font-black mb-2 uppercase">Calculate Now</h4>
            <p className="text-sm mb-6 font-medium">Dubai specific benefits check karein.</p>
            <Link href="/" className="block w-full py-3 bg-[#001f3f] text-white text-center rounded-xl font-bold uppercase text-xs">
              Go to Calculator
            </Link>
          </div>
          <div className="bg-[#002d5a] p-6 rounded-3xl border border-white/5">
            <h4 className="font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
              <Info size={18} /> Pro Tip
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Dubai Mainland mein final settlement 14 days ke andar honi chahiye. Agar delay ho toh MOHRE complaint portal use karein.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
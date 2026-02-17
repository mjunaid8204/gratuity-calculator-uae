"use client";
import { Scale, Clock, ShieldCheck } from 'lucide-react';

export default function LabourLaw() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">UAE Labour Law 2026</h1>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#002d5a] p-6 rounded-2xl border border-[#D4AF37]/20">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-[#D4AF37]"><Clock size={20}/> 1 - 5 Years</h3>
            <p className="text-gray-400">Aapko har saal ke liye 21 din ki 'Basic Salary' milti hai.</p>
          </div>
          <div className="bg-[#002d5a] p-6 rounded-2xl border border-[#D4AF37]/20">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-[#D4AF37]"><ShieldCheck size={20}/> 5+ Years</h3>
            <p className="text-gray-400">Pehle 5 saal ke liye 21 din, phir har agle saal ke liye 30 din ki salary.</p>
          </div>
        </div>
        <div className="bg-red-500/10 border-l-4 border-red-500 p-4 italic text-gray-300">
          "Note: Gratuity sirf Basic Salary par calculate hoti hai, allowances par nahi."
        </div>
      </div>
    </div>
  );
}
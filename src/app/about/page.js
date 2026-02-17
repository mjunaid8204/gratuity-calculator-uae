"use client";
import React from 'react';
import { ShieldCheck, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-black text-[#D4AF37] mb-6 uppercase">About Gratuity Calculator UAE</h1>
        <p className="text-gray-300 mb-16">Dedicated to helping UAE's private sector workforce understand their financial rights.</p>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5">
            <Target className="text-[#D4AF37] mb-4" />
            <h4 className="font-bold mb-2">Our Mission</h4>
            <p className="text-xs text-gray-400">To provide transparent and free EOSB calculation tools for everyone.</p>
          </div>
          <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5">
            <ShieldCheck className="text-[#D4AF37] mb-4" />
            <h4 className="font-bold mb-2">Accuracy</h4>
            <p className="text-xs text-gray-400">Regularly updated with the latest 2026 MOHRE regulations.</p>
          </div>
          <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5">
            <Users className="text-[#D4AF37] mb-4" />
            <h4 className="font-bold mb-2">Community</h4>
            <p className="text-xs text-gray-400">Trusted by thousands of employees across all 7 Emirates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
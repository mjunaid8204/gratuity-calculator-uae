"use client";
import React from 'react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-[#D4AF37] text-4xl font-black mb-8 uppercase">Legal Disclaimer</h1>
        <div className="bg-[#002d5a] p-10 rounded-3xl border border-[#D4AF37]/20">
          <p className="text-gray-300 leading-relaxed mb-6">
            This website is an independent information portal. We are NOT affiliated with MOHRE or any UAE Government entity.
          </p>
          <p className="text-gray-400 text-sm">
            All calculations are based on publically available Federal Decree-Law No. 33 of 2021. For official legal cases, please consult a registered UAE legal advocate.
          </p>
        </div>
      </div>
    </div>
  );
}
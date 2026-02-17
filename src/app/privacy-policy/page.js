"use client";
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-[#D4AF37] font-black uppercase tracking-tighter mb-8">Privacy Policy</h1>
        <p className="text-gray-300">Last Updated: February 2026</p>
        <p>At Gratuity Calculator UAE, we prioritize your privacy. This policy outlines how we handle your data.</p>
        <h2 className="text-[#D4AF37]">1. Data Collection</h2>
        <p>We do not store personal financial data. The values you enter in the calculator are processed locally to provide estimates.</p>
        <h2 className="text-[#D4AF37]">2. Cookies</h2>
        <p>We use essential cookies to improve your experience and analyze site traffic for optimization.</p>
      </div>
    </div>
  );
}
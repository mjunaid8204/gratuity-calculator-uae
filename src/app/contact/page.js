"use client";
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto bg-[#002d5a] p-12 rounded-[3rem] border border-[#D4AF37]/20 text-center">
        <h1 className="text-3xl font-black text-[#D4AF37] mb-6 uppercase">Contact Our Team</h1>
        <p className="text-gray-400 mb-10">Have questions about the calculator or Law? Reach out to us.</p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-[#001f3f] p-6 rounded-2xl flex items-center gap-4">
            <Mail className="text-[#D4AF37]" />
            <span className="text-sm">support@uaegratuitycalc.com</span>
          </div>
          <div className="bg-[#001f3f] p-6 rounded-2xl flex items-center gap-4">
            <MessageSquare className="text-[#D4AF37]" />
            <span className="text-sm">Live Support (Mon-Fri)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
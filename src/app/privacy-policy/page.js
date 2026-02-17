"use client";
import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  UserPlus, 
  Globe, 
  Database, 
  Mail, 
  Cookie,
  FileCheck
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      
      {/* 1. Header Section */}
      <header className="py-20 px-6 bg-[#002d5a] border-b border-[#D4AF37]/10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full mb-6 border border-[#D4AF37]/30">
            <ShieldCheck size={18} />
            <span className="text-xs font-black uppercase tracking-widest">Privacy Protection</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Privacy <span className="text-[#D4AF37]">Policy</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">
            Last Updated: February 2026
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction Box */}
          <div className="bg-[#002d5a] p-8 rounded-3xl border border-[#D4AF37]/20 mb-16 shadow-2xl">
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              At Gratuity Calculator UAE, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This policy explains how we collect, use, and safeguard your data when you visit our website and use our calculation tools. By using our Website, you agree to these terms.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* Section 1: Information We Collect */}
            <div className="space-y-8">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <Database size={24} /> 1. Information We Collect
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#001f3f] rounded-2xl border border-white/5">
                  <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                    <Lock size={14} className="text-[#D4AF37]" /> Calculator Inputs
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    When you use our tool, you input salary and service duration data. <strong>IMPORTANT:</strong> This information is processed in real-time in your browser and is <strong>NOT</strong> stored on our servers.
                  </p>
                </div>
                <div className="p-6 bg-[#001f3f] rounded-2xl border border-white/5">
                  <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                    <UserPlus size={14} className="text-[#D4AF37]" /> Contact Information
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    If you contact us voluntarily, we collect your name, email address, and message content to respond to your inquiry.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Cookies & Tracking */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <Cookie size={24} /> 2. Cookies & Tracking
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies to enhance your experience, remember preferences, and analyze Website traffic patterns. You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Section 3: Data Usage & Sharing */}
            <div className="space-y-8">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <Eye size={24} /> 3. Data Usage & Sharing
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use your information to provide services, improve functionality, and communicate with you regarding updates. We <strong>do not sell, trade, or rent</strong> your personal information to third parties.
              </p>
              <div className="bg-amber-950/20 p-6 rounded-2xl border-l-4 border-amber-500">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Legal Requirement</p>
                <p className="text-sm text-gray-300">We may disclose information if required by law or in response to valid legal processes (court orders, subpoenas).</p>
              </div>
            </div>

            {/* Section 4: Data Security */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <ShieldCheck size={24} /> 4. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We implement reasonable technical measures, including <strong>SSL/TLS encryption</strong> and secure servers, to protect your data. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            {/* Section 5: Children's Privacy & International Transfers */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">Children's Privacy</h3>
                <p className="text-sm text-gray-400">Our Website is not intended for individuals under 18. We do not knowingly collect information from children.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">International Transfers</h3>
                <p className="text-sm text-gray-400">By using our Website, you consent to the transfer and processing of your information in the UAE or other countries.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-10 bg-[#002d5a] rounded-[3rem] border border-[#D4AF37]/20 text-center shadow-2xl">
              <h2 className="text-xl font-black uppercase mb-4">Privacy Questions?</h2>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                If you have any questions or requests regarding this Privacy Policy, please contact us.
              </p>
              <div className="flex flex-col items-center gap-4">
                <a href="mailto:info@gratuitycalculatoruae.com" className="bg-[#D4AF37] text-[#001f3f] px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition flex items-center gap-2 shadow-lg">
                  <Mail size={16} /> info@gratuitycalculatoruae.com
                </a>
                <Link href="/contact" className="text-xs font-bold text-gray-500 hover:text-[#D4AF37] transition">
                  Contact Form Support
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Consent */}
      <footer className="py-12 text-center border-t border-white/5 bg-[#001122]">
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black flex items-center justify-center gap-2">
          <FileCheck size={12} /> YOUR CONSENT: BY USING THIS WEBSITE, YOU AGREE TO THIS POLICY.
        </p>
      </footer>
    </div>
  );
}
"use client";
import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Gavel, 
  AlertCircle, 
  Ban, 
  UserCheck, 
  Globe,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      
      {/* 1. Header Section */}
      <header className="py-20 px-6 bg-[#002d5a] border-b border-[#D4AF37]/10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full mb-6 border border-[#D4AF37]/30">
            <FileText size={18} />
            <span className="text-xs font-black uppercase tracking-widest">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Terms & <span className="text-[#D4AF37]">Conditions</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">
            Last Updated: February 2026
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed text-lg italic border-l-4 border-[#D4AF37] pl-6">
              Welcome to Gratuity Calculator UAE. These Terms and Conditions govern your access to and use of our website. By using this website, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* 1. Acceptance of Terms */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <ShieldCheck size={24} /> 1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing, browsing, or using the Gratuity Calculator UAE website, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy and Disclaimer. We reserve the right to modify these Terms at any time without prior notice.
              </p>
            </div>

            {/* 2. Use of Website */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <UserCheck size={24} /> 2. Use of the Website
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-white mb-3 uppercase text-xs tracking-widest">2.1 Permitted Use</h3>
                  <p className="text-sm text-gray-400">You are granted a limited license to access the Website for personal, non-commercial purposes, including using our calculator to estimate benefits.</p>
                </div>
                <div className="bg-[#002d5a] p-6 rounded-2xl border border-red-500/20">
                  <h3 className="font-bold text-red-400 mb-3 uppercase text-xs tracking-widest flex items-center gap-2">
                    <Ban size={14} /> 2.2 Prohibited Use
                  </h3>
                  <p className="text-sm text-gray-400">You agree NOT to use the Website for unlawful purposes, gain unauthorized access, or use automated systems (robots/spiders) to access data.</p>
                </div>
              </div>
            </div>

            {/* 3. Intellectual Property */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37]">3. Intellectual Property Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                All content, including text, graphics, logos, and code, is the property of Gratuity Calculator UAE and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without express permission.
              </p>
            </div>

            {/* 4. Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <AlertCircle size={24} /> 4. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed bg-[#001f3f] p-6 rounded-2xl border border-white/10">
                Gratuity Calculator UAE shall not be liable for any direct, indirect, or consequential damages resulting from your use of the website or reliance on calculations. The tool is provided "As Is" without any warranties.
              </p>
            </div>

            {/* 5. Governing Law */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <Globe size={24} /> 5. Governing Law & Jurisdiction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the <strong>laws of the United Arab Emirates</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of the UAE.
              </p>
            </div>

            {/* 6. Contact Information */}
            <div className="p-8 bg-[#002d5a] rounded-3xl border border-[#D4AF37]/20 text-center">
              <h2 className="text-xl font-black uppercase mb-4">Questions About These Terms?</h2>
              <p className="text-gray-400 mb-6 text-sm">If you have any questions, please contact us at:</p>
              <div className="flex flex-col items-center gap-2">
                <a href="mailto:info@gratuitycalculatoruae.com" className="text-[#D4AF37] font-bold hover:underline flex items-center gap-2">
                  <Mail size={16} /> info@gratuitycalculatoruae.com
                </a>
                <Link href="/contact" className="mt-4 bg-[#D4AF37] text-[#001f3f] px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white transition">
                  Contact Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-12 text-center border-t border-white/5 bg-[#001122]">
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black">
          © 2026 Gratuity Calculator UAE • Professional Terms of Service
        </p>
      </footer>
    </div>
  );
}
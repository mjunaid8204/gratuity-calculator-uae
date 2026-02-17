"use client";
import React from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Info, 
  Scale, 
  UserCheck,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      
      {/* 1. Header Section */}
      <header className="py-20 px-6 bg-[#002d5a] border-b border-[#D4AF37]/10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full mb-6 border border-amber-500/30">
            <AlertTriangle size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Legal Notice</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Legal <span className="text-[#D4AF37]">Disclaimer</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">
            Last Updated: February 2026
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction Box */}
          <div className="bg-[#002d5a] p-8 rounded-3xl border border-[#D4AF37]/20 mb-12 shadow-2xl">
            <p className="text-gray-300 leading-relaxed mb-4">
              Please read this disclaimer carefully before using the <strong>Gratuity Calculator UAE</strong> website and its calculation tools.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by the terms of this disclaimer.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* Section 1: General Purpose */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <Info size={24} /> 1. General Information Purpose
              </h2>
              <p className="text-gray-300 leading-relaxed text-justify">
                The Calculator is designed to help users estimate their end of service benefits based on <strong>UAE Labour Law Federal Decree-Law No. 33 of 2021</strong>. The information provided should <strong>NOT</strong> be considered as:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <WarningItem text="Legal advice or counsel" />
                <WarningItem text="Professional financial advice" />
                <WarningItem text="Official termination documentation" />
                <WarningItem text="Official MOHRE calculation" />
              </ul>
            </div>

            {/* Section 2: Accuracy */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <ShieldAlert size={24} /> 2. Accuracy of Calculations
              </h2>
              <p className="text-gray-300 leading-relaxed text-justify">
                While we make every effort to ensure accurate estimates, we cannot guarantee 100% accuracy in all circumstances. Factors affecting actual amounts include:
              </p>
              <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <ListItem text="Individual contract terms" />
                <ListItem text="Company-specific policies" />
                <ListItem text="Complex salary structures" />
                <ListItem text="Recent Law amendments" />
                <ListItem text="Pending legal disputes" />
                <ListItem text="Outstanding loans or advances" />
              </div>
            </div>

            {/* Section 3: Professional Relationship */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37] flex items-center gap-3">
                <Scale size={24} /> 3. No Professional Relationship
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Use of this Website does not create any attorney-client or professional relationship. For official calculations, you should consult with:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Your HR Department', 'UAE Labour Lawyer', 'MOHRE Portal'].map((item) => (
                  <span key={item} className="bg-[#001f3f] border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-xl text-xs font-bold uppercase">{item}</span>
                ))}
              </div>
            </div>

            {/* Section 4: Liability & Warranty */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37]">4. Limitation of Liability</h2>
              <div className="p-8 bg-amber-950/20 border-l-4 border-amber-500 rounded-r-3xl">
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  Gratuity Calculator UAE and its operators shall not be liable for any direct or indirect damages arising from the use of calculations, errors in inaccuracies, or decisions made based on these results. The tool is provided on an "as is" and "as available" basis.
                </p>
              </div>
            </div>

            {/* Section 5: Jurisdictional Variations */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-[#D4AF37]">5. Regional Variations</h2>
              <p className="text-gray-300 leading-relaxed">
                This Calculator is specifically designed for <strong>UAE Federal Labour Law</strong>. It may not be applicable for:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <EmirateTag text="Free Zones" />
                <EmirateTag text="Offshore" />
                <EmirateTag text="Domestic" />
                <EmirateTag text="Government" />
              </div>
            </div>

          </div>

          {/* Acceptance Box */}
          <div className="mt-20 p-10 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-[3rem] text-[#001f3f] shadow-2xl">
            <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
              <UserCheck size={28} /> Acceptance of Terms
            </h3>
            <p className="font-bold mb-8 leading-relaxed">
              By using this website, you agree that you have read and understood this disclaimer in its entirety and accept all risks associated with using the calculator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="bg-[#001f3f] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition shadow-xl text-center">
                I Agree & Back to Calculator
              </Link>
              <Link href="/contact" className="bg-white/20 border border-[#001f3f]/20 text-[#001f3f] px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/40 transition text-center">
                Contact for Questions
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Link */}
      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
          © 2026 Gratuity Calculator UAE — Legal Information Portal
        </p>
      </footer>
    </div>
  );
}

// Sub-components
function WarningItem({ text }) {
  return (
    <div className="flex items-center gap-3 bg-[#002d5a] p-4 rounded-xl border border-white/5">
      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
      <span className="text-xs font-bold text-gray-300 uppercase">{text}</span>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-400">
      <ChevronRight size={14} className="text-[#D4AF37]" /> {text}
    </div>
  );
}

function EmirateTag({ text }) {
  return (
    <div className="bg-[#002d5a] py-3 text-center rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-tighter">
      {text}
    </div>
  );
}
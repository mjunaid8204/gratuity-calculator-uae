"use client";
import React from 'react';
import { 
  Scale, 
  ShieldAlert, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Gavel 
} from 'lucide-react';

export default function UAEgetContentLawPage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      {/* Hero Section */}
      <header className="py-16 px-6 bg-gradient-to-b from-[#002d5a] to-[#001f3f] border-b border-[#D4AF37]/20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full mb-6 border border-[#D4AF37]/30">
            <Gavel size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Official 2026 Guidelines</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            UAE Labour Law & <span className="text-[#D4AF37]">Gratuity Regulations</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Understand your legal rights, end-of-service benefits, and the latest federal decree-law 
            governing private sector employment in the UAE.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-6">
        {/* Warning/Alert Box */}
        <div className="bg-amber-950/30 border-l-4 border-amber-500 p-6 rounded-r-2xl mb-12 flex items-start gap-4">
          <AlertTriangle className="text-amber-500 shrink-0" size={28} />
          <div>
            <h4 className="text-amber-500 font-bold mb-1">Important 2026 Update</h4>
            <p className="text-sm text-gray-300">
              According to the latest MOHRE updates, all unlimited contracts have been transitioned 
              to fixed-term (limited) contracts. Gratuity is now calculated based on this unified system.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Core Rules */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-[#D4AF37]">
                <BookOpen className="text-white" /> What is End of Service Gratuity?
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
                <p>
                  Gratuity is a financial compensation paid by the employer to an employee at the end 
                  of their service. It is a mandatory benefit under the <strong>UAE Federal Decree-Law No. 33 of 2021</strong>.
                </p>
                <h3 className="text-xl font-semibold text-white mt-6">Eligibility Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#D4AF37]" size={18} />
                    Minimum of 1 year of continuous service.
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#D4AF37]" size={18} />
                    Applies to full-time, part-time, and flexible work contracts.
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#D4AF37]" size={18} />
                    Applicable only on the <strong>Basic Salary</strong> component.
                  </li>
                </ul>
              </div>
            </section>

            {/* Calculation Cards */}
            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5 hover:border-[#D4AF37]/50 transition-all group">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 text-[#001f3f]">
                  <Scale size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">1 to 5 Years</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  For service periods between 1 and 5 years, the employee is entitled to 
                  <strong> 21 days</strong> of basic salary for each year.
                </p>
                <div className="bg-[#001f3f] p-3 rounded-xl text-xs font-mono border border-white/10 text-center">
                  (Basic / 30) × 21 × Years
                </div>
              </div>

              <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5 hover:border-[#D4AF37]/50 transition-all">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 text-[#001f3f]">
                  <ShieldAlert size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">More than 5 Years</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  After completing 5 years, the employee is entitled to <strong>30 days</strong> 
                  of basic salary for every additional year.
                </p>
                <div className="bg-[#001f3f] p-3 rounded-xl text-xs font-mono border border-white/10 text-center">
                  (Basic / 30) × 30 × Remaining Years
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar Stats & Highlights */}
          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-6 rounded-3xl text-[#001f3f]">
              <h4 className="font-black uppercase text-xs tracking-widest mb-2 opacity-80">Max Cap Rule</h4>
              <p className="text-2xl font-bold mb-2 leading-tight">2 Years Salary Limit</p>
              <p className="text-sm font-medium opacity-90">
                The total gratuity amount cannot exceed the equivalent of two years of total salary.
              </p>
            </div>

            <div className="bg-[#002d5a] p-6 rounded-3xl border border-white/5">
              <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
                <Info size={20} />
                <h4 className="font-bold">Pro-Rata Basis</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                If you have completed fractions of a year (e.g., 2 years and 3 months), 
                your gratuity will be calculated on a pro-rata basis for those 3 months.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-[#D4AF37]/20 bg-[#001f3f]">
              <h4 className="font-bold text-white mb-4">Need Legal Help?</h4>
              <p className="text-sm text-gray-400 mb-6">
                Consult with our experts regarding MOHRE disputes or calculation errors.
              </p>
              <button className="w-full py-3 bg-white text-[#001f3f] font-bold rounded-xl hover:bg-gray-200 transition">
                Contact Expert
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
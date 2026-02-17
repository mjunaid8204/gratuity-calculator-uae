"use client";
import React from 'react';
import { 
  Target, 
  Users, 
  ShieldCheck, 
  Eye, 
  Lightbulb, 
  Scale, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      
      {/* 1. Header Section */}
      <header className="py-20 px-6 bg-[#002d5a] border-b border-[#D4AF37]/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">
            About Gratuity Calculator UAE
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your trusted online tool for calculating end of service benefits according to UAE Labour Law.
          </p>
        </div>
      </header>

      {/* 2. Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 uppercase text-white">Our <span className="text-[#D4AF37]">Mission</span></h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-justify">
              Our mission is to empower employees and employers across the UAE with a transparent, reliable, and easy-to-use gratuity calculation tool. We believe that everyone deserves to know their legal entitlements without confusion or complexity.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              Whether you're an employee planning your next career step or an HR professional ensuring compliance, our calculator provides the clarity you need.
            </p>
          </div>
          <div className="bg-[#002d5a] p-10 rounded-[3rem] border border-[#D4AF37]/20 flex justify-center items-center">
            <Target size={120} className="text-[#D4AF37] opacity-20 absolute" />
            <blockquote className="relative text-xl italic font-medium text-center">
              "Empowering the UAE workforce with financial clarity and legal transparency."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3. Why We Created This (Cards) */}
      <section className="py-20 px-6 bg-[#001122]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase mb-4">Why We Created <span className="text-[#D4AF37]">This Tool</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We saw a gap in the market for a free, accurate, and user-friendly online gratuity calculator.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5 shadow-xl">
              <Lightbulb className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">The Problem</h3>
              <p className="text-sm text-gray-400">Thousands of employees were uncertain about their calculations, relying on manual or paid services.</p>
            </div>
            <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5 shadow-xl">
              <Eye className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-sm text-gray-400">A straightforward, accessible tool for everyone without registration or hidden fees.</p>
            </div>
            <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5 shadow-xl">
              <ShieldCheck className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">The Result</h3>
              <p className="text-sm text-gray-400">A 100% compliant calculator built on Federal Decree-Law No. 33 of 2021.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Commitment */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12 uppercase text-[#D4AF37]">Our Commitment to You</h2>
          <div className="space-y-6">
            <CommitmentRow icon={<Scale />} title="Accuracy" text="Regularly updated to reflect the latest UAE Labour Law amendments." />
            <CommitmentRow icon={<ShieldCheck />} title="Privacy" text="We don't collect, store, or share your personal information. Your data stays private." />
            <CommitmentRow icon={<Users />} title="Transparency" text="Clear breakdowns of all calculations so you understand exactly how it's computed." />
          </div>
        </div>
      </section>

      {/* 5. Legal Disclaimer Box */}
      <section className="py-20 px-6 bg-[#001122]">
        <div className="max-w-4xl mx-auto bg-[#001f3f] p-10 rounded-[2rem] border-l-8 border-[#D4AF37]">
          <h3 className="text-xl font-black mb-4 uppercase">Legal Compliance & Disclaimer</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            While we strive for accuracy based on Federal Decree-Law No. 33, this tool is for informational and estimation purposes only. Actual payments may vary based on specific contracts and HR policies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold text-[#D4AF37]">
            <p>• Consult your HR department</p>
            <p>• Contact a qualified lawyer</p>
            <p>• Visit MOHRE portal</p>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <MessageSquare size={48} className="text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-4 uppercase">Get in Touch</h2>
          <p className="text-gray-400 mb-10">We value your feedback. If you have questions or suggestions, please reach out.</p>
          <Link href="/contact" className="text-[#D4AF37] font-black uppercase tracking-widest border-b-2 border-[#D4AF37] pb-2 hover:text-white hover:border-white transition">
            Go to Contact Page
          </Link>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION (FUNCTIONAL BUTTON) */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#D4AF37] to-[#B8860B] p-12 rounded-[3rem] text-center text-[#001f3f]">
          <h2 className="text-3xl font-black mb-6 uppercase">Ready to Check Your Entitlement?</h2>
          <Link 
            href="/#calculator" 
            className="inline-flex items-center gap-3 bg-[#001f3f] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
          >
            Calculate Your Gratuity Now <ArrowRight size={20} />
          </Link>
          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
            Last Updated: February 2026
          </p>
        </div>
      </section>

    </div>
  );
}

// Sub-component
function CommitmentRow({ icon, title, text }) {
  return (
    <div className="flex gap-6 p-6 bg-[#002d5a] rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition">
      <div className="text-[#D4AF37] shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-white mb-1 uppercase text-sm tracking-widest">{title}</h4>
        <p className="text-gray-400 text-sm">{text}</p>
      </div>
    </div>
  );
}
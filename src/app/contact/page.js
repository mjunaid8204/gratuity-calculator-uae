"use client";
import React, { useState } from 'react';
import { Mail, Clock, MessageSquare, Send, HelpCircle, ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Feedback', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      <header className="py-20 px-6 bg-[#002d5a] border-b border-[#D4AF37]/10 text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">Contact Us</h1>
          <p className="text-xl text-gray-300 leading-relaxed">We're here to help! Whether you have a question about the calculator or want to provide feedback.</p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
              <MessageSquare className="text-[#D4AF37]" /> Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="bg-[#001f3f] p-6 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Email Address</p>
                <p className="text-sm font-bold text-white tracking-widest uppercase">info@gratuitycalculatoruae.com</p>
              </div>
              <div className="bg-[#001f3f] p-6 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Business Hours</p>
                <p className="text-sm font-bold text-white tracking-widest uppercase">Sunday to Thursday, 9:00 AM - 6:00 PM (UAE Time)</p>
              </div>
            </div>
          </div>

          <div className="bg-[#002d5a] p-10 rounded-[3rem] border border-[#D4AF37]/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-[#D4AF37] mb-2 tracking-widest">Your Name</label>
                  <input type="text" placeholder="Enter your full name" className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37]" required />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-[#D4AF37] mb-2 tracking-widest">Email Address</label>
                  <input type="email" placeholder="your.email@example.com" className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37]" required />
                </div>
              </div>
              <button type="submit" className="w-full bg-[#D4AF37] text-[#001f3f] font-black py-5 rounded-2xl uppercase tracking-[0.2em] hover:bg-yellow-500 flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
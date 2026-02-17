"use client";
import React, { useState } from 'react';
import { 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  HelpCircle, 
  ArrowLeft,
  ShieldCheck,
  Building2
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Feedback',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <div className="min-h-screen bg-[#001f3f] text-white font-sans">
      
      {/* 1. Header Section */}
      <header className="py-20 px-6 bg-[#002d5a] border-b border-[#D4AF37]/10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">
            Contact Us [cite: 137]
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're here to help! Whether you have a question about the calculator or want to provide feedback. [cite: 138]
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* 2. Left: Contact Information & Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
                <MessageSquare className="text-[#D4AF37]" /> Get In Touch [cite: 139]
              </h2>
              <p className="text-gray-400 mb-8">
                Have questions or feedback? Fill out the form and we'll get back to you as soon as possible. [cite: 140]
              </p>
              
              <div className="space-y-6">
                <ContactInfoCard 
                  icon={<Mail size={20} />} 
                  title="Email Address" 
                  detail="info@gratuitycalculatoruae.com [cite: 180]" 
                />
                <ContactInfoCard 
                  icon={<Clock size={20} />} 
                  title="Business Hours" 
                  detail="Sunday to Thursday, 9:00 AM - 6:00 PM (UAE Time) [cite: 181]" 
                />
                <div className="bg-[#002d5a] p-4 rounded-xl border-l-4 border-amber-500 text-xs text-gray-400 italic">
                  Note: We do not provide phone support to maintain our free service model. [cite: 182, 183]
                </div>
              </div>
            </div>

            {/* Response Time Information */}
            <div className="bg-[#002d5a] p-8 rounded-3xl border border-white/5 shadow-xl">
              <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                <Zap size={14} className="text-[#D4AF37]" /> Response Time [cite: 161]
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We aim to respond to all inquiries within 24-48 hours during business days (Sunday to Thursday). [cite: 162]
                <br /><br />
                <strong className="text-white">Tip:</strong> For urgent matters, please include 'URGENT' in your subject line. [cite: 163]
              </p>
            </div>
          </div>

          {/* 3. Right: Interactive Contact Form */}
          <div className="bg-[#002d5a] p-10 rounded-[3rem] border border-[#D4AF37]/20 shadow-2xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-[#D4AF37] mb-2 tracking-widest">Your Name [cite: 142]</label>
                  <input 
                    type="text" 
                    [cite_start]placeholder="Enter your full name [cite: 143]" 
                    className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37] transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-[#D4AF37] mb-2 tracking-widest">Email Address [cite: 144]</label>
                  <input 
                    type="email" 
                    [cite_start]placeholder="your.email@example.com [cite: 145]" 
                    className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37] transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-[#D4AF37] mb-2 tracking-widest">Subject [cite: 146]</label>
                <select 
                  className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37] transition appearance-none"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option>Calculator Issue / Bug Report [cite: 149]</option>
                  <option>Calculation Question [cite: 150]</option>
                  <option>UAE Labour Law Query [cite: 151]</option>
                  <option>Feature Request / Suggestion [cite: 152]</option>
                  <option>Partnership / Business Inquiry [cite: 153]</option>
                  <option>General Feedback [cite: 154]</option>
                  <option>Other [cite: 155]</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-[#D4AF37] mb-2 tracking-widest">Your Message [cite: 156]</label>
                <textarea 
                  rows="5"
                  [cite_start]placeholder="Please provide details about your inquiry... [cite: 157]"
                  className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37] transition resize-none"
                  minLength="10"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#D4AF37] text-[#001f3f] font-black py-5 rounded-2xl uppercase tracking-[0.2em] hover:bg-yellow-500 transition shadow-xl flex items-center justify-center gap-3"
              >
                Send Message [cite: 160] <Send size={18} />
              </button>
              
              <p className="text-[10px] text-gray-500 text-center uppercase font-bold">
                Privacy Notice: We do not share your information with third parties. [cite: 198, 199]
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Pre-Contact FAQ Section */}
      <section className="py-20 px-6 bg-[#001122]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black uppercase mb-4 tracking-tighter">Before You Contact Us [cite: 164]</h2>
            <p className="text-gray-400 text-sm">Looking for quick answers? Check these common questions first. [cite: 165]</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FAQCard q="Is the calculator really free? [cite: 166]" a="Yes! 100% free with no hidden charges or premium features. [cite: 167]" />
            <FAQCard q="Do I need an account? [cite: 168]" a="No registration required. Simply visit and start using it. [cite: 169]" />
            <FAQCard q="How accurate is it? [cite: 170]" a="It follows UAE Labour Law Federal Decree-Law No. 33 exactly. [cite: 171]" />
            <FAQCard q="Do you provide legal advice? [cite: 173]" a="No. We are a calculation tool. For legal advice, consult a lawyer or MOHRE. [cite: 174, 175]" />
          </div>
        </div>
      </section>

      {/* 5. Business & Partnership CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#002d5a] to-[#001122] p-12 rounded-[3rem] border border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase text-[#D4AF37] mb-2">Business Inquiries [cite: 193]</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Interested in partnering or integrating our calculator into your platform? [cite: 194, 195]
            </p>
          </div>
          <button className="bg-white text-[#001f3f] px-8 py-4 rounded-xl font-black text-xs uppercase hover:bg-gray-200 transition shrink-0">
            Discuss Partnership [cite: 196]
          </button>
        </div>
      </section>

      {/* 6. Final Footer Link */}
      <footer className="py-12 text-center border-t border-white/5">
        <Link href="/" className="inline-flex items-center gap-2 text-[#D4AF37] font-black uppercase text-xs tracking-widest hover:text-white transition">
          <ArrowLeft size={16} /> Back to Calculator [cite: 204]
        </Link>
      </footer>
    </div>
  );
}

// Sub-components
function ContactInfoCard({ icon, title, detail }) {
  return (
    <div className="flex items-center gap-4 bg-[#001f3f] p-6 rounded-2xl border border-white/5">
      <div className="bg-[#D4AF37]/10 p-3 rounded-lg text-[#D4AF37]">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase text-gray-500 mb-1">{title}</h4>
        <p className="text-sm font-bold text-white">{detail}</p>
      </div>
    </div>
  );
}

function FAQCard({ q, a }) {
  return (
    <div className="p-6 bg-[#002d5a] rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition group">
      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
        <HelpCircle size={16} className="text-[#D4AF37] group-hover:scale-110 transition" /> {q}
      </h4>
      <p className="text-xs text-gray-400 leading-relaxed">{a}</p>
    </div>
  );
}
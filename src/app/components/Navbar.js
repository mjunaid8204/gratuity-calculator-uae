"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Menu, X, Gavel, Calculator, Globe, briefcase } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#001f3f] border-b border-[#D4AF37]/20 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo with Icon */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#D4AF37] p-2 rounded-lg group-hover:bg-yellow-500 transition shadow-lg shadow-yellow-500/10">
                <Gavel size={24} className="text-[#001f3f]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#D4AF37] text-xl font-black tracking-tighter uppercase">Gratuity</span>
                <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">Calculator UAE</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu with Dropdowns */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Home</Link>
            
            {/* Calculators Mega Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white group-hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest outline-none">
                Calculators <ChevronDown size={12} />
              </button>
              <div className="absolute hidden group-hover:grid grid-cols-2 w-[450px] bg-[#002d5a] border border-[#D4AF37]/30 mt-2 rounded-2xl shadow-2xl p-6 gap-4 left-1/2 -translate-x-1/2">
                <div>
                  <h5 className="text-[#D4AF37] text-[10px] font-black uppercase mb-3 border-b border-[#D4AF37]/20 pb-1">Mainland & Contracts</h5>
                  <Link href="/limited-contract" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">Limited Contract</Link>
                  <Link href="/unlimited-contract" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">Unlimited Contract</Link>
                  <Link href="/domestic-workers" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">Domestic Workers</Link>
                </div>
                <div>
                  <h5 className="text-[#D4AF37] text-[10px] font-black uppercase mb-3 border-b border-[#D4AF37]/20 pb-1">Free Zones (MOHRE)</h5>
                  <Link href="/jafza-calculator" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">JAFZA (Jebel Ali)</Link>
                  <Link href="/dmcc-calculator" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">DMCC Dubai</Link>
                  <Link href="/difc-dews" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">DIFC DEWS System</Link>
                </div>
              </div>
            </div>

            {/* Emirates Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white group-hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest outline-none">
                Emirates <ChevronDown size={12} />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-[#002d5a] border border-[#D4AF37]/30 mt-2 rounded-2xl shadow-2xl p-4 right-0">
                {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'RAK', 'Fujairah', 'UAQ'].map((emirate) => (
                  <Link key={emirate} href={`/${emirate.toLowerCase().replace(' ', '-')}`} className="block p-2 text-sm text-gray-300 hover:text-[#D4AF37]">
                    {emirate}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blog" className="text-white hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Blog</Link>
          </div>

          {/* Search Bar Component */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-[#001f3f] border border-[#D4AF37]/20 rounded-full px-4 py-2 focus-within:border-[#D4AF37] transition">
              <input 
                type="text" 
                placeholder="Search Law or Area..." 
                className="bg-transparent border-none text-[10px] text-white outline-none w-40 placeholder:text-gray-500 uppercase tracking-tighter" 
              />
              <Search size={14} className="text-[#D4AF37]" />
            </div>
            
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#D4AF37]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="lg:hidden bg-[#001f3f] border-t border-white/5 p-6 h-screen">
          <div className="space-y-6">
            <Link href="/" className="block text-[#D4AF37] text-xl font-black uppercase">Home</Link>
            <div className="border-b border-white/5 pb-2">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">Calculators</p>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/limited-contract" className="text-sm text-white">Limited</Link>
                <Link href="/jafza-calculator" className="text-sm text-white">JAFZA</Link>
                <Link href="/domestic-workers" className="text-sm text-white">Domestic</Link>
                <Link href="/difc-dews" className="text-sm text-white">DIFC</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
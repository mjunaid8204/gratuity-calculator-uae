"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#001f3f] border-b border-[#D4AF37]/30 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-black text-[#D4AF37] tracking-tighter">
        UAE<span className="text-white">CALC</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-widest text-gray-300">
        <Link href="/" className="hover:text-[#D4AF37] transition">Home</Link>
        <Link href="/uae-labour-law" className="hover:text-[#D4AF37] transition">Labour Law</Link>
        <Link href="/guides" className="hover:text-[#D4AF37] transition">Guides</Link>
        <Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link>
      </div>
      <button className="bg-[#D4AF37] text-[#001f3f] px-5 py-2 rounded-full text-xs font-bold hover:bg-yellow-500 transition">
        GET LEGAL INFO
      </button>
    </nav>
  );
}

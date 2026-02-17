"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ChevronDown, Menu, X, Gavel } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const searchRef = useRef(null);

  // Searchable pages list
  const pages = [
    { title: "Dubai Mainland Law", path: "/dubai" },
    { title: "Abu Dhabi Law", path: "/abu-dhabi" },
    { title: "JAFZA Calculator", path: "/jafza-calculator" },
    { title: "Domestic Workers Rights", path: "/domestic-workers" },
    { title: "Limited Contract Rules", path: "/limited-contract" },
    { title: "Unlimited Contract Guide", path: "/unlimited-contract" },
    { title: "Legal Blog", path: "/blog" },
    { title: "Labour Law FAQ", path: "/faq" }
  ];

  const filteredPages = pages.filter(page =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredPages.length > 0) {
      router.push(filteredPages[0].path);
      setShowSuggestions(false);
    }
  };

  return (
    <nav className="bg-[#001f3f] border-b border-[#D4AF37]/20 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#D4AF37] p-2 rounded-lg group-hover:bg-yellow-500 transition shadow-lg">
                <Gavel size={24} className="text-[#001f3f]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#D4AF37] text-xl font-black tracking-tighter uppercase">Gratuity</span>
                <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">Calculator UAE</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Home</Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-white group-hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest outline-none">
                Calculators <ChevronDown size={12} />
              </button>
              <div className="absolute hidden group-hover:grid grid-cols-2 w-[400px] bg-[#002d5a] border border-[#D4AF37]/30 mt-2 rounded-2xl shadow-2xl p-6 gap-4 left-1/2 -translate-x-1/2">
                <div>
                  <h5 className="text-[#D4AF37] text-[10px] font-black uppercase mb-3 border-b border-[#D4AF37]/20 pb-1">Contracts</h5>
                  <Link href="/limited-contract" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">Limited</Link>
                  <Link href="/unlimited-contract" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">Unlimited</Link>
                </div>
                <div>
                  <h5 className="text-[#D4AF37] text-[10px] font-black uppercase mb-3 border-b border-[#D4AF37]/20 pb-1">Specialized</h5>
                  <Link href="/jafza-calculator" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">JAFZA</Link>
                  <Link href="/domestic-workers" className="block p-2 text-sm text-gray-300 hover:bg-[#001f3f] rounded-lg">Domestic</Link>
                </div>
              </div>
            </div>

            <Link href="/blog" className="text-white hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Blog</Link>
          </div>

          {/* Search Bar with Logic */}
          <div className="relative flex items-center gap-4" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center bg-[#001f3f] border border-[#D4AF37]/20 rounded-full px-4 py-2 focus-within:border-[#D4AF37] transition">
              <input 
                type="text" 
                placeholder="Search Law or Area..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                className="bg-transparent border-none text-[10px] text-white outline-none w-40 placeholder:text-gray-500 uppercase tracking-tighter" 
              />
              <Search size={14} className="text-[#D4AF37] cursor-pointer" onClick={handleSearchSubmit} />
            </form>

            {/* Search Suggestions Dropdown */}
            {showSuggestions && searchQuery.length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-[#002d5a] border border-[#D4AF37]/30 rounded-xl shadow-2xl overflow-hidden z-[200]">
                {filteredPages.length > 0 ? (
                  filteredPages.map((page, index) => (
                    <Link 
                      key={index} 
                      href={page.path}
                      onClick={() => { setShowSuggestions(false); setSearchQuery(""); }}
                      className="block p-4 text-xs text-gray-300 hover:bg-[#001f3f] hover:text-[#D4AF37] border-b border-white/5 last:border-none"
                    >
                      {page.title}
                    </Link>
                  ))
                ) : (
                  <div className="p-4 text-xs text-gray-500 italic">No matching law found...</div>
                )}
              </div>
            )}
            
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#D4AF37]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="lg:hidden bg-[#001f3f] border-t border-white/5 p-6 h-screen space-y-6">
          <Link href="/" className="block text-[#D4AF37] text-xl font-black uppercase">Home</Link>
          <Link href="/dubai" className="block text-white text-sm font-bold uppercase">Dubai Mainland</Link>
          <Link href="/jafza-calculator" className="block text-white text-sm font-bold uppercase">JAFZA</Link>
          <Link href="/blog" className="block text-white text-sm font-bold uppercase">Legal Blog</Link>
        </div>
      )}
    </nav>
  );
}
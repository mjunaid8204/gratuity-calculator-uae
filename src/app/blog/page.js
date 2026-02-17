"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

// Sample Blog Data (Aap isay bad mein Firebase ya CMS se connect kar sakte hain)
const blogPosts = [
  {
    id: 1,
    title: "UAE Labour Law 2026: Major Changes Every Employee Should Know",
    excerpt: "The UAE has introduced new regulations regarding limited contracts and gratuity calculations. Discover how these changes affect your end-of-service benefits.",
    date: "Feb 15, 2026",
    author: "Legal Expert",
    category: "Labour Law",
    slug: "uae-labour-law-2026-changes",
    image: "⚖️"
  },
  {
    id: 2,
    title: "How to Calculate Gratuity for JAFZA Employees",
    excerpt: "Working in Jebel Ali Free Zone? Here is a step-by-step guide to understanding JAFZA specific gratuity rules and the Jafznet process.",
    date: "Feb 12, 2026",
    author: "HR Consultant",
    category: "Free Zones",
    slug: "jafza-gratuity-guide",
    image: "🏢"
  },
  {
    id: 3,
    title: "Resignation vs Termination: Impact on Your Gratuity",
    excerpt: "Does leaving your job voluntarily reduce your gratuity? We break down the differences between resigning and being terminated under the new law.",
    date: "Feb 10, 2026",
    author: "Jayanti",
    category: "Career Advice",
    slug: "resignation-vs-termination-gratuity",
    image: "📝"
  }
];

export default function BlogListingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#001f3f] text-white">
      {/* Blog Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#002d5a] to-[#001f3f] text-center border-b border-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-6 uppercase tracking-tighter">
            Legal Insights & <span className="text-white">Guides</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Stay updated with the latest news, law changes, and expert tips on UAE Gratuity and Labour Law.
          </p>
          
          {/* Internal Blog Search */}
          <div className="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 px-6 rounded-full bg-[#001f3f] border border-[#D4AF37]/30 text-white focus:border-[#D4AF37] outline-none shadow-xl transition"
            />
            <Search className="absolute right-5 top-4 text-[#D4AF37]" size={20} />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-[#002d5a] rounded-3xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/50 transition-all group shadow-lg">
              {/* Post Icon/Image Placeholder */}
              <div className="h-48 bg-[#001f3f] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {post.image}
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
                  <span className="flex items-center gap-1"><Tag size={12}/> {post.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <User size={14} className="text-[#D4AF37]" /> {post.author}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-[#D4AF37] text-xs font-black flex items-center gap-1 hover:translate-x-1 transition-transform">
                    READ MORE <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No articles found matching your search.
          </div>
        )}
      </section>

      {/* Call to Action for Blog Readers */}
      <section className="max-w-5xl mx-auto mb-20 px-6">
        <div className="bg-[#D4AF37] p-10 rounded-[40px] text-[#001f3f] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h3 className="text-2xl font-black uppercase leading-none mb-2">Have a specific legal question?</h3>
            <p className="font-medium opacity-80">Our experts can help you understand your unique gratuity case.</p>
          </div>
          <Link href="/contact" className="bg-[#001f3f] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase hover:bg-black transition shadow-lg">
            Consult Now
          </Link>
        </div>
      </section>
    </div>
  );
}
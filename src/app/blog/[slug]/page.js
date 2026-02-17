"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin,
  Clock,
  ChevronRight
} from 'lucide-react';

// Sample Data (Real app mein ye database/Firebase se ayega)
const blogContent = {
  "uae-labour-law-2026-changes": {
    title: "UAE Labour Law 2026: Major Changes Every Employee Should Know",
    date: "Feb 15, 2026",
    author: "Legal Expert",
    readTime: "5 min read",
    category: "Labour Law",
    content: `
      <p className="mb-4 text-gray-300 leading-relaxed">UAE Labour Law 2026 mein bohot baray badlaw laye gaye hain. Sabse aham tabdeeli 'Limited Contracts' ka laazmi hona hai. Purane tamam unlimited contracts ko khatam karke ab unhe naye rules ke mutabiq dhal diya gaya hai.</p>
      
      <h3 className="text-xl font-bold text-[#D4AF37] mt-8 mb-4">1. Transition to Limited Contracts</h3>
      <p className="mb-4 text-gray-300 leading-relaxed">Ab har employee ka contract aik makhsoos muddat (Fixed Term) ke liye hota hai. Iska faida ye hai ke resignation ke waqt gratuity calculation ab pehle se kahin zyada asaan ho gayi hai.</p>

      <h3 className="text-xl font-bold text-[#D4AF37] mt-8 mb-4">2. Unified Gratuity Calculation</h3>
      <p className="mb-4 text-gray-300 leading-relaxed">Naye qanoon ke mutabiq, gratuity hamesha 'Basic Salary' par calculate hogi. Agar aap ne 1 saal mukammal kar liya hai, toh aap iske haqdar hain, chahay aap resign karein ya terminate kiye jayein.</p>
      
      <div className="bg-[#002d5a] p-6 rounded-2xl border-l-4 border-[#D4AF37] my-8">
        <p className="italic text-gray-200">"Employee ki gratuity calculate karte waqt housing aur transport allowances ko shamil nahi kiya jata. Sirf contract mein likhi gayi Basic Salary hi asal bunyad hai."</p>
      </div>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  const post = blogContent[slug] || blogContent["uae-labour-law-2026-changes"]; // Fallback for demo

  return (
    <div className="min-h-screen bg-[#001f3f] text-white">
      {/* Article Header */}
      <header className="py-16 px-6 bg-[#002d5a] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8 hover:-translate-x-2 transition-transform">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
            <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#001f3f] font-black">
                {post.author[0]}
              </div>
              <div>
                <p className="text-sm font-bold">{post.author}</p>
                <p className="text-[10px] text-gray-500 uppercase">Senior Advisor</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Share2 size={18} className="text-gray-500 cursor-pointer hover:text-[#D4AF37]" />
              <Facebook size={18} className="text-gray-500 cursor-pointer hover:text-[#D4AF37]" />
              <Twitter size={18} className="text-gray-500 cursor-pointer hover:text-[#D4AF37]" />
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto py-16 px-6">
        <div 
          className="blog-content prose prose-invert max-w-none prose-headings:text-[#D4AF37] prose-p:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags / Footer of Article */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-2">
          {['#UAE_Law', '#Gratuity', '#DubaiJobs', '#MOHRE'].map(tag => (
            <span key={tag} className="text-[10px] font-bold text-gray-500 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </section>

      {/* Related Posts Simple Section */}
      <section className="bg-[#002d5a] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#D4AF37] font-black uppercase text-xs tracking-widest mb-8">Related Articles</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#001f3f] rounded-2xl border border-white/5">
              <h5 className="font-bold mb-2">How to Claim Your Gratuity in Dubai?</h5>
              <Link href="/blog/jafza-gratuity-guide" className="text-[#D4AF37] text-xs font-black flex items-center gap-1">
                READ ARTICLE <ChevronRight size={14} />
              </Link>
            </div>
            <div className="p-6 bg-[#001f3f] rounded-2xl border border-white/5">
              <h5 className="font-bold mb-2">Notice Period Rules for 2026</h5>
              <Link href="/blog" className="text-[#D4AF37] text-xs font-black flex items-center gap-1">
                READ ARTICLE <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
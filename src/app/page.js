"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HelpCircle, ArrowRight, Zap, ShieldCheck, Calculator as CalcIcon, Star, TrendingUp, Award, Briefcase, Users, Globe, Smartphone } from 'lucide-react';
import Link from 'next/link';
import GratuityCalculatorForm from './components/GratuityCalculatorForm';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HomePage() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#001f3f] to-[#0a1628] text-white font-sans selection:bg-[#D4AF37] selection:text-[#001f3f] overflow-hidden">
      
      {/* ANIMATED BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 right-10 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 left-10 w-96 h-96 bg-[#00d4ff] rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* HERO SECTION */}
      <motion.section className="relative py-32 px-6 overflow-hidden border-b border-[#D4AF37]/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* LEFT CONTENT */}
          <motion.div className="space-y-8" variants={slideInVariants} initial="hidden" animate="visible">
            <motion.div className="inline-flex items-center gap-3 bg-[#D4AF37]/15 text-[#D4AF37] px-6 py-3 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
              <Star size={18} fill="#D4AF37" />
              <span className="text-sm font-bold uppercase tracking-[0.15em]">🔥 Updated for 2026</span>
            </motion.div>

            <div>
              <motion.h1 className="text-6xl md:text-8xl font-black mb-6 leading-[1.1] uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#D4AF37] to-white" variants={itemVariants}>
                UAE Gratuity
              </motion.h1>
              <motion.p className="text-2xl md:text-3xl text-gray-300 font-light mb-8" variants={itemVariants}>
                Your trusted calculator for <span className="text-[#D4AF37] font-bold">End of Service Benefits</span>
              </motion.p>
            </div>

            <motion.p className="text-lg text-gray-400 leading-relaxed max-w-xl" variants={itemVariants}>
              Instantly calculate your gratuity with our advanced, legally-compliant calculator. Used by 50,000+ professionals.
            </motion.p>

            <motion.div className="flex gap-4 pt-8" variants={itemVariants}>
              <motion.button className="group bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-[#001f3f] px-8 py-4 rounded-xl font-black uppercase text-sm hover:shadow-[0_20px_60px_rgba(212,175,55,0.4)] transition-all" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link href="#calculator" className="flex items-center gap-2">
                  Start Now <ArrowRight size={18} />
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* CALCULATOR */}
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <motion.div className="absolute -inset-6 bg-gradient-to-r from-[#D4AF37]/20 to-[#00d4ff]/20 blur-3xl rounded-2xl" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
            <div id="calculator" className="relative bg-[#002d5a]/80 backdrop-blur-xl p-10 rounded-2xl border border-[#D4AF37]/30 shadow-2xl">
              <GratuityCalculatorForm />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS SECTION */}
      <motion.section className="py-20 px-6 bg-[#001122]/50 border-y border-[#D4AF37]/10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Active Users", icon: Users },
              { number: "100%", label: "Accuracy", icon: Award },
              { number: "7", label: "Emirates", icon: Globe },
              { number: "24/7", label: "Available", icon: Smartphone }
            ].map((stat, idx) => (
              <motion.div key={idx} className="text-center" whileHover={{ scale: 1.1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
                <stat.icon className="mx-auto mb-4 text-[#D4AF37]" size={32} />
                <p className="text-4xl font-black text-[#D4AF37]">{stat.number}</p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section className="py-32 px-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-5xl font-black text-center mb-20 uppercase tracking-tighter" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Why Choose <span className="text-[#D4AF37]">Our Calculator</span>?
          </motion.h2>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: ShieldCheck, title: "100% Legal", desc: "Latest UAE Labour Law 2026" },
              { icon: Zap, title: "Lightning Fast", desc: "Results in under 2 seconds" },
              { icon: Star, title: "Completely Free", desc: "No registration needed" },
              { icon: TrendingUp, title: "Advanced", desc: "Housing, transport deductions" },
              { icon: Briefcase, title: "Multi-Contract", desc: "All employment types" },
              { icon: CalcIcon, title: "Detailed", desc: "Step-by-step breakdown" }
            ].map((feature, idx) => (
              <motion.div key={idx} className="bg-[#002d5a] p-8 rounded-2xl border border-white/5 group hover:border-[#D4AF37]/50 transition" variants={itemVariants} whileHover={{ scale: 1.05, y: -10 }}>
                <feature.icon size={40} className="text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-black mb-3 uppercase">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section className="py-32 px-6 relative overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#D4AF37] via-yellow-400 to-[#D4AF37] p-1 rounded-3xl">
          <div className="bg-[#001f3f] p-16 rounded-3xl text-center">
            <motion.h2 className="text-5xl font-black mb-6 uppercase" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
              Ready to Calculate?
            </motion.h2>
            <p className="text-xl text-gray-300 mb-10">Join thousands of professionals</p>
            <motion.button className="bg-[#D4AF37] text-[#001f3f] px-12 py-5 rounded-xl font-black uppercase text-lg" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href="#calculator">Start Now →</Link>
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
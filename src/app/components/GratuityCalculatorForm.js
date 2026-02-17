"use client";
import React, { useState } from 'react';
import { Calculator, Download, RefreshCcw } from 'lucide-react';

export default function GratuityCalculatorForm() {
  const [salary, setSalary] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [unpaidLeave, setUnpaidLeave] = useState(0);
  const [contractType, setContractType] = useState('limited');
  const [result, setResult] = useState(null);

  const calculateGratuity = (e) => {
    e.preventDefault();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    
    // Unpaid leave deduction [cite: 14]
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - unpaidLeave;
    const years = totalDays / 365;
    const dailyWage = salary / 30;
    let totalGratuity = 0;

    // UAE Labour Law 2026 Logic [cite: 38, 43]
    if (years >= 1) {
      if (years <= 5) {
        totalGratuity = dailyWage * 21 * years;
      } else {
        const firstFiveYears = dailyWage * 21 * 5;
        const additionalYears = dailyWage * 30 * (years - 5);
        totalGratuity = firstFiveYears + additionalYears;
      }
    }
    
    // Capped at 2 years of salary [cite: 48]
    const maxCap = salary * 24;
    if (totalGratuity > maxCap) totalGratuity = maxCap;

    setResult({
      amount: totalGratuity.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      years: years.toFixed(2),
      days: totalDays
    });
  };

  return (
    <div className="bg-[#002d5a] p-8 rounded-[2rem] border border-[#D4AF37]/30 shadow-2xl">
      <form onSubmit={calculateGratuity} className="space-y-4">
        <div>
          <label className="block text-[10px] font-black uppercase text-[#D4AF37] mb-2 tracking-widest">Monthly Basic Salary (AED)</label>
          <input 
            type="number" 
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="e.g. 10000" 
            className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37]"
            required 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-3 text-sm text-white outline-none" required />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">End Date</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-3 text-sm text-white outline-none" required />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Unpaid Leave Days</label>
          <input type="number" value={unpaidLeave} onChange={(e) => setUnpaidLeave(e.target.value)} className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none" />
        </div>

        <button type="submit" className="w-full bg-[#D4AF37] text-[#001f3f] font-black py-4 rounded-xl uppercase tracking-widest hover:bg-yellow-500 transition flex items-center justify-center gap-2 shadow-lg">
          <Calculator size={18} /> Calculate Now
        </button>
      </form>

      {result && (
        <div className="mt-8 pt-8 border-t border-white/5 animate-in fade-in duration-500">
          <div className="text-center mb-6">
            <p className="text-[10px] font-black uppercase text-[#D4AF37] tracking-[0.3em] mb-1">Estimated Gratuity</p>
            <h3 className="text-4xl font-black text-white">AED {result.amount}</h3>
          </div>
          <button onClick={() => window.print()} className="w-full py-3 bg-white text-[#001f3f] rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 mb-3">
            <Download size={14} /> Download PDF Report
          </button>
          <button onClick={() => {setResult(null); setSalary('');}} className="w-full py-3 border border-white/10 text-gray-500 rounded-xl font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:text-white transition">
            <RefreshCcw size={12} /> Reset Calculator
          </button>
        </div>
      )}
    </div>
  );
}
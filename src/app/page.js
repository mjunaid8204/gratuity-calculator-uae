"use client";
import React, { useState, useRef } from 'react';
import { 
  Calculator, 
  Download, 
  Calendar, 
  Briefcase, 
  AlertCircle, 
  FileText,
  RefreshCcw
} from 'lucide-react';

export default function GratuityCalculator() {
  const [salary, setSalary] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [unpaidLeave, setUnpaidLeave] = useState(0);
  const [contractType, setContractType] = useState('limited');
  const [result, setResult] = useState(null);

  const calculateGratuity = (e) => {
    e.preventDefault();
    // Logic for calculation based on UAE Labour Law 2026
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - unpaidLeave;
    const years = totalDays / 365;

    let totalGratuity = 0;
    const dailyWage = salary / 30;

    if (years >= 1) {
      if (years <= 5) {
        totalGratuity = dailyWage * 21 * years;
      } else {
        const firstFiveYears = dailyWage * 21 * 5;
        const additionalYears = dailyWage * 30 * (years - 5);
        totalGratuity = firstFiveYears + additionalYears;
      }
    }

    setResult({
      amount: totalGratuity.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      years: years.toFixed(2),
      days: totalDays
    });
  };

  const downloadPDF = () => {
    // Simple alert for now, we can integrate jspdf library later
    alert("Generating your professional EOSB Report PDF...");
    window.print(); // Browser's print-to-pdf functionality
  };

  return (
    <div className="min-h-screen bg-[#001f3f] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">
            UAE <span className="text-[#D4AF37]">Gratuity Calculator</span>
          </h1>
          <p className="text-gray-400 font-medium">Official End of Service Benefits (EOSB) Estimation Tool</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Inputs */}
          <div className="bg-[#002d5a] p-8 rounded-[2rem] border border-[#D4AF37]/20 shadow-2xl">
            <form onSubmit={calculateGratuity} className="space-y-5">
              
              <div>
                <label className="block text-xs font-bold uppercase text-[#D4AF37] mb-2 tracking-widest">Monthly Basic Salary (AED)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="e.g. 12000" 
                    className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37] transition"
                    required
                  />
                  <Briefcase className="absolute right-4 top-4 text-gray-600" size={18} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">Start Date</label>
                  <input 
                    type="date" 
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-3 text-sm text-white outline-none focus:border-[#D4AF37]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2">End Date</label>
                  <input 
                    type="date" 
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-3 text-sm text-white outline-none focus:border-[#D4AF37]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest text-justify">Unpaid Leave Days (Deductions)</label>
                <input 
                  type="number" 
                  value={unpaidLeave}
                  onChange={(e) => setUnpaidLeave(e.target.value)}
                  placeholder="0" 
                  className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest">Contract Type</label>
                <select 
                  value={contractType}
                  onChange={(e) => setContractType(e.target.value)}
                  className="w-full bg-[#001f3f] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37]"
                >
                  <option value="limited">Limited Term Contract</option>
                  <option value="unlimited">Unlimited (Pre-2023)</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#D4AF37] text-[#001f3f] font-black py-4 rounded-xl uppercase tracking-widest hover:bg-yellow-500 transition shadow-lg shadow-yellow-500/10 flex items-center justify-center gap-2"
              >
                <Calculator size={20} /> Calculate Now
              </button>
            </form>
          </div>

          {/* Result Display */}
          <div className="flex flex-col gap-6">
            <div className={`bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-8 rounded-[2rem] text-[#001f3f] shadow-2xl transition-all ${result ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-2 opacity-70">Estimated Gratuity</h3>
              <div className="text-5xl font-black mb-4 flex items-baseline gap-2">
                <span className="text-xl font-bold">AED</span> {result ? result.amount : '0.00'}
              </div>
              <div className="pt-6 border-t border-[#001f3f]/10 space-y-2">
                <p className="text-xs font-bold flex justify-between uppercase"><span>Total Tenure:</span> <span>{result ? result.years : '0'} Years</span></p>
                <p className="text-xs font-bold flex justify-between uppercase"><span>Total Working Days:</span> <span>{result ? result.days : '0'} Days</span></p>
              </div>
            </div>

            {result && (
              <div className="space-y-4">
                <button 
                  onClick={downloadPDF}
                  className="w-full py-4 bg-white text-[#001f3f] rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-gray-200 transition"
                >
                  <Download size={18} /> Download Statement (PDF)
                </button>
                <button 
                  onClick={() => {setResult(null); setSalary('');}}
                  className="w-full py-4 border border-white/10 text-gray-400 rounded-xl font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:text-white transition"
                >
                  <RefreshCcw size={14} /> Reset Form
                </button>
              </div>
            )}

            <div className="bg-[#002d5a] p-6 rounded-3xl border border-white/5 flex gap-4 items-start">
              <AlertCircle className="text-[#D4AF37] shrink-0" />
              <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-wider font-bold">
                Disclaimer: This estimation is based on the 2026 UAE Labour Law for private sector employees. 
                Final settlements are subject to employer verification and legal review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
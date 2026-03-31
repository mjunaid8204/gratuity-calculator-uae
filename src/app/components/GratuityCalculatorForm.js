"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Download, RefreshCcw, ArrowRight, Home, Plane, Minus, AlertCircle, Info } from 'lucide-react';

export default function GratuityCalculatorForm() {
  const [salary, setSalary] = useState('');
  const [housingAllowance, setHousingAllowance] = useState('');
  const [transportAllowance, setTransportAllowance] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [unpaidLeave, setUnpaidLeave] = useState('');
  const [deductions, setDeductions] = useState('');
  const [contractType, setContractType] = useState('unlimited');
  const [isDomesticWorker, setIsDomesticWorker] = useState(false);
  const [endReason, setEndReason] = useState('resignation');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateGratuity = (e) => {
    e.preventDefault();
    setError('');
    
    if (!salary || !startDate || !endDate) {
      setError('Please fill required fields: Salary, Start Date, End Date');
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (end <= start) {
      setError('End date must be after start date');
      return;
    }

    const diffTime = Math.abs(end - start);
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - (parseInt(unpaidLeave) || 0);
    const years = totalDays / 365;
    const basicSalary = parseFloat(salary) || 0;
    const deductAmount = parseFloat(deductions) || 0;
    
    let calculatedGratuity = 0;
    const dailyWage = basicSalary / 30;

    if (isDomesticWorker) {
      if (years >= 1) {
        calculatedGratuity = dailyWage * 30 * years;
      }
    } else if (years >= 1) {
      if (years <= 5) {
        calculatedGratuity = dailyWage * 21 * years;
      } else {
        const firstFiveYears = dailyWage * 21 * 5;
        const additionalYears = dailyWage * 30 * (years - 5);
        calculatedGratuity = firstFiveYears + additionalYears;
      }
    }

    const maxCap = basicSalary * 24;
    if (calculatedGratuity > maxCap) {
      calculatedGratuity = maxCap;
    }

    calculatedGratuity = Math.max(0, calculatedGratuity - deductAmount);

    setResult({
      amount: calculatedGratuity.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      years: years.toFixed(2),
      days: totalDays,
      basicSalary: basicSalary.toLocaleString('en-AE'),
      dailyWage: (dailyWage).toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      contractType,
      endReason
    });
  };

  const handleReset = () => {
    setSalary('');
    setHousingAllowance('');
    setTransportAllowance('');
    setStartDate('');
    setEndDate('');
    setUnpaidLeave('');
    setDeductions('');
    setContractType('unlimited');
    setIsDomesticWorker(false);
    setEndReason('resignation');
    setResult(null);
    setError('');
  };

  return (
    <motion.div 
      className="w-full space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* INFO BOX */}
      <motion.div 
        className="bg-blue-500/10 border-l-4 border-blue-400 p-5 rounded-lg flex gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Info className="text-blue-400 flex-shrink-0 mt-1" size={18} />
        <p className="text-xs text-blue-200">💡 Include all allowances for accurate calculation based on UAE Labour Law</p>
      </motion.div>

      <motion.form 
        onSubmit={calculateGratuity} 
        className="space-y-6"
      >
        {/* ERROR MESSAGE */}
        {error && (
          <motion.div 
            className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle className="text-red-400 flex-shrink-0" size={18} />
            <span className="text-red-300 text-sm font-medium">{error}</span>
          </motion.div>
        )}

        {/* SECTION 1: SALARY */}
        <motion.div 
          className="bg-[#001f3f]/50 p-6 rounded-2xl border border-white/5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-sm font-bold uppercase text-[#D4AF37] mb-5">📊 Salary Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2">Monthly Basic Salary (AED)*</label>
              <input 
                type="number" 
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Enter salary" 
                className="w-full bg-[#002d5a] border-2 border-[#D4AF37]/30 rounded-xl p-4 text-white outline-none focus:border-[#D4AF37] font-semibold"
                required
                inputMode="numeric"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">🏠 Housing (AED)</label>
                <input 
                  type="number" 
                  value={housingAllowance}
                  onChange={(e) => setHousingAllowance(e.target.value)}
                  placeholder="0" 
                  className="w-full bg-[#002d5a] border-2 border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#D4AF37] text-sm"
                  inputMode="numeric"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-2">✈️ Transport (AED)</label>
                <input 
                  type="number" 
                  value={transportAllowance}
                  onChange={(e) => setTransportAllowance(e.target.value)}
                  placeholder="0" 
                  className="w-full bg-[#002d5a] border-2 border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#D4AF37] text-sm"
                  inputMode="numeric"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 2: DATES */}
        <motion.div 
          className="bg-[#001f3f]/50 p-6 rounded-2xl border border-white/5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-sm font-bold uppercase text-[#D4AF37] mb-5">📅 Employment Period</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2">Start Date*</label>
              <input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                className="w-full bg-[#002d5a] border-2 border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#D4AF37] text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2">End Date*</label>
              <input 
                type="date" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)} 
                className="w-full bg-[#002d5a] border-2 border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#D4AF37] text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 mb-2">Unpaid Leave Days</label>
            <input 
              type="number" 
              value={unpaidLeave}
              onChange={(e) => setUnpaidLeave(e.target.value)}
              placeholder="0" 
              className="w-full bg-[#002d5a] border-2 border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#D4AF37] text-sm"
              inputMode="numeric"
            />
          </div>
        </motion.div>

        {/* SECTION 3: DETAILS */}
        <motion.div 
          className="bg-[#001f3f]/50 p-6 rounded-2xl border border-white/5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-sm font-bold uppercase text-[#D4AF37] mb-5">⚙️ Employment Details</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2">Contract Type*</label>
              <select 
                value={contractType}
                onChange={(e) => setContractType(e.target.value)}
                className="w-full bg-[#002d5a] border-2 border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#D4AF37] text-sm"
              >
                <option value="unlimited">Unlimited Contract</option>
                <option value="limited">Limited Contract</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-300 mb-2">End Reason*</label>
              <select 
                value={endReason}
                onChange={(e) => setEndReason(e.target.value)}
                className="w-full bg-[#002d5a] border-2 border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#D4AF37] text-sm"
              >
                <option value="resignation">Resignation</option>
                <option value="termination">Termination</option>
                <option value="retirement">Retirement</option>
                <option value="contract-end">Contract End</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 mb-2">💰 Deductions (AED)</label>
            <input 
              type="number" 
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
              placeholder="0" 
              className="w-full bg-[#002d5a] border-2 border-white/10 rounded-xl p-3 text-white outline-none focus:border-[#D4AF37] text-sm"
              inputMode="numeric"
            />
          </div>
        </motion.div>

        {/* CHECKBOX */}
        <motion.div 
          className="flex items-center gap-3 bg-purple-500/10 p-4 rounded-xl border border-purple-500/30 cursor-pointer hover:border-purple-500/50"
          onClick={() => setIsDomesticWorker(!isDomesticWorker)}
        >
          <input 
            type="checkbox"
            checked={isDomesticWorker}
            onChange={(e) => setIsDomesticWorker(e.target.checked)}
            className="w-5 h-5 accent-purple-400 cursor-pointer"
          />
          <label className="text-sm font-bold text-gray-300 cursor-pointer">🏠 Domestic Worker (Special Calculation)</label>
        </motion.div>

        {/* BUTTONS */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button 
            type="submit" 
            className="col-span-2 bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-[#001f3f] font-black py-4 rounded-xl uppercase tracking-widest hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calculator size={18} className="inline mr-2" /> Calculate Gratuity
          </motion.button>
        </div>
      </motion.form>

      {/* RESULTS */}
      {result && (
        <motion.div 
          className="mt-8 pt-8 border-t border-[#D4AF37]/30 space-y-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-[#D4AF37]/15 to-cyan-500/15 p-8 rounded-2xl border-2 border-[#D4AF37]/40 text-center"
          >
            <p className="text-xs font-bold text-[#D4AF37] mb-2">✨ YOUR GRATUITY</p>
            <h3 className="text-5xl font-black text-white mb-1">AED {result.amount}</h3>
            <p className="text-sm text-gray-300">{result.years} years • {result.days} days</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[#002d5a] p-3 rounded-lg border border-white/10 text-center">
              <p className="text-xs text-gray-400 mb-1">Basic Salary</p>
              <p className="text-sm font-bold text-[#D4AF37]">AED {result.basicSalary}</p>
            </div>
            <div className="bg-[#002d5a] p-3 rounded-lg border border-white/10 text-center">
              <p className="text-xs text-gray-400 mb-1">Daily Wage</p>
              <p className="text-sm font-bold text-[#D4AF37]">AED {result.dailyWage}</p>
            </div>
            <div className="bg-[#002d5a] p-3 rounded-lg border border-white/10 text-center">
              <p className="text-xs text-gray-400 mb-1">Contract</p>
              <p className="text-sm font-bold text-cyan-300 capitalize">{result.contractType}</p>
            </div>
            <div className="bg-[#002d5a] p-3 rounded-lg border border-white/10 text-center">
              <p className="text-xs text-gray-400 mb-1">End Reason</p>
              <p className="text-sm font-bold text-cyan-300 capitalize">{result.endReason}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <motion.button 
              onClick={() => window.print()} 
              className="py-3 bg-white text-[#001f3f] rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <Download size={14} className="inline mr-1" /> Print
            </motion.button>
            <motion.button 
              onClick={handleReset} 
              className="py-3 border-2 border-[#D4AF37]/40 text-gray-300 rounded-lg font-bold uppercase text-xs tracking-widest hover:text-[#D4AF37]"
              whileHover={{ scale: 1.02 }}
            >
              <RefreshCcw size={14} className="inline mr-1" /> Reset
            </motion.button>
          </div>

          <motion.div 
            className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-lg"
          >
            <p className="text-xs text-orange-300 font-semibold">
              ⚠️ <strong>Disclaimer:</strong> This is an estimate based on UAE Labour Law. Consult your HR for official calculation.
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
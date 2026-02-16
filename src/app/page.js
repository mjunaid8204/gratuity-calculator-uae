"use client";
import React, { useState } from 'react';

export default function GratuityCalculator() {
  const [salary, setSalary] = useState('');
  
  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold text-yellow-500 mb-5">UAE Gratuity Calculator</h1>
      <div className="bg-slate-800 p-6 rounded-lg shadow-xl max-w-md">
        <label className="block mb-2">Basic Salary (AED)</label>
        <input 
          type="number" 
          value={salary} 
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-2 bg-slate-700 rounded border border-slate-600 mb-4"
          placeholder="Enter salary"
        />
        <button className="w-full bg-yellow-600 hover:bg-yellow-500 p-3 rounded font-bold transition">
          Calculate
        </button>
      </div>
    </div>
  );
}
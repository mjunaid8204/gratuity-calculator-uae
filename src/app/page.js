"use client";
import React, { useState, useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { Calculator, Info, Landmark } from 'lucide-react';

export default function Home() {
  const [salary, setSalary] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  // Matter.js Physics Logic for falling gold coins/elements
  useEffect(() => {
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: 'transparent',
      },
    });

    const ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    Matter.World.add(engine.world, [ground]);
    Matter.Runner.run(engine);
    Matter.Render.run(render);
    engineRef.current = engine;

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  const calculateGratuity = () => {
    const basic = parseFloat(salary);
    const time = parseFloat(years);

    if (isNaN(basic) || isNaN(time) || time < 1) {
      alert("Please enter valid salary and at least 1 year of service.");
      return;
    }

    let total = 0;
    // UAE Law 2026 Logic: 21 days for first 5 years, 30 days after that
    if (time <= 5) {
      total = (basic / 30) * 21 * time;
    } else {
      const firstFive = (basic / 30) * 21 * 5;
      const remainingYears = time - 5;
      const afterFive = (basic / 30) * 30 * remainingYears;
      total = firstFive + afterFive;
    }

    setResult(total.toFixed(2));

    // Physics Effect: Drop "Gold Coins" on calculation
    for (let i = 0; i < 15; i++) {
      const coin = Matter.Bodies.circle(Math.random() * 800, -20, 15, {
        render: { fillStyle: '#D4AF37' },
        restitution: 0.5
      });
      Matter.World.add(engineRef.current.world, coin);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#001f3f] flex flex-col items-center py-12 px-4 overflow-hidden">
      {/* Background Physics Layer */}
      <div ref={sceneRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />

      <div className="z-10 w-full max-w-xl bg-[#002d5a]/80 backdrop-blur-md p-8 rounded-3xl border border-[#D4AF37]/30 shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="text-[#D4AF37]" size={32} />
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Gratuity <span className="text-[#D4AF37]">Calculator</span>
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Monthly Basic Salary (AED)</label>
            <input 
              type="number" 
              value={salary} 
              onChange={(e) => setSalary(e.target.value)}
              className="w-full p-4 bg-[#001f3f] border border-gray-700 rounded-2xl text-white focus:border-[#D4AF37] outline-none transition"
              placeholder="e.g. 10000"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Years of Service</label>
            <input 
              type="number" 
              value={years} 
              onChange={(e) => setYears(e.target.value)}
              className="w-full p-4 bg-[#001f3f] border border-gray-700 rounded-2xl text-white focus:border-[#D4AF37] outline-none transition"
              placeholder="e.g. 5.5"
            />
          </div>

          <button 
            onClick={calculateGratuity}
            className="w-full py-5 bg-[#D4AF37] text-[#001f3f] font-black rounded-2xl hover:bg-yellow-500 transition shadow-xl shadow-yellow-500/10 active:scale-95"
          >
            CALCULATE NOW
          </button>

          {result && (
            <div className="mt-8 p-6 bg-[#001f3f] border-2 border-[#D4AF37] rounded-2xl text-center animate-bounce">
              <p className="text-gray-400 text-sm font-bold uppercase">Estimated Gratuity Amount</p>
              <h2 className="text-4xl font-black text-[#D4AF37] mt-2">AED {result}</h2>
            </div>
          )}
        </div>

        <div className="mt-8 flex items-start gap-3 p-4 bg-white/5 rounded-xl text-xs text-gray-400 border border-white/10">
          <Info size={16} className="text-[#D4AF37] shrink-0" />
          <p>This calculation is based on the UAE Labour Law 2026 for Limited Contracts. It assumes the 21/30 day tier system. For precise legal advice, please consult our expert.</p>
        </div>
      </div>
      
      {/* Informational SEO Section Below Calculator */}
      <div className="z-10 mt-16 max-w-4xl w-full grid md:grid-cols-2 gap-8">
        <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5">
          <Landmark className="text-[#D4AF37] mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Did You Know?</h3>
          <p className="text-sm text-gray-400 leading-relaxed">UAE Labour Law ensures that every employee with more than 1 year of continuous service is entitled to end-of-service benefits. This calculation is the legal right of every worker in Dubai, Abu Dhabi, and other Emirates.</p>
        </div>
        <div className="bg-[#002d5a] p-6 rounded-2xl border border-white/5">
          <Scale className="text-[#D4AF37] mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">Legal Information vs Advice</h3>
          <p className="text-sm text-gray-400 leading-relaxed">This tool provides general legal information. Every contract is unique, and for a formal case filing, specific legal advice is required from a licensed professional.</p>
        </div>
      </div>
    </div>
  );
}
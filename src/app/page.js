"use client";
import React, { useState, useEffect, useRef } from 'react';
import Matter from 'matter-js';

export default function GratuityCalculator() {
  const [salary, setSalary] = useState('');
  const [years, setYears] = useState('');
  const [total, setTotal] = useState(0);
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());

  // Antigravity Effect Logic
  const spawnPhysicsResult = (amount) => {
    const { Render, World, Bodies, Runner } = Matter;
    const engine = engineRef.current;
    
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: { width: 400, height: 200, wireframes: false, background: 'transparent' }
    });

    const ball = Bodies.circle(200, 0, 40, {
      restitution: 0.8,
      render: { fillStyle: '#D4AF37' }
    });

    const ground = Bodies.rectangle(200, 190, 400, 20, { isStatic: true, render: { visible: false } });
    
    World.add(engine.world, [ball, ground]);
    Runner.run(engine);
    Render.run(render);
  };

  const calculateGratuity = () => {
    const s = parseFloat(salary);
    const y = parseFloat(years);
    let result = 0;

    if (y >= 1 && y <= 5) result = (s / 30) * 21 * y;
    else if (y > 5) result = ((s / 30) * 21 * 5) + ((s / 30) * 30 * (y - 5));

    setTotal(result.toFixed(2));
    spawnPhysicsResult(result);
  };

  return (
    <div className="min-h-screen bg-[#001f3f] text-white flex flex-col items-center justify-center p-6">
      <div className="bg-[#002d5a] p-8 rounded-3xl border-2 border-[#D4AF37] shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-[#D4AF37] text-center mb-6">UAE Gratuity Calc 2026</h1>
        
        <div className="space-y-4">
          <input 
            type="number" placeholder="Monthly Basic Salary (AED)" 
            className="w-full p-4 rounded-xl bg-[#001f3f] border border-[#D4AF37]/40 text-white"
            onChange={(e) => setSalary(e.target.value)}
          />
          <input 
            type="number" placeholder="Total Years of Service" 
            className="w-full p-4 rounded-xl bg-[#001f3f] border border-[#D4AF37]/40 text-white"
            onChange={(e) => setYears(e.target.value)}
          />
          <button 
            onClick={calculateGratuity}
            className="w-full py-4 bg-[#D4AF37] text-[#001f3f] font-bold rounded-xl hover:scale-105 transition-transform"
          >
            Calculate Now
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div ref={sceneRef} className="h-[200px] w-full mb-4"></div>
          {total > 0 && <h2 className="text-4xl font-black text-[#D4AF37]">AED {total}</h2>}
        </div>
      </div>
    </div>
  );
}
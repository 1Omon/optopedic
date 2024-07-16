"use client"
import React, { useState } from 'react';
import PhaseOneAndTwo from "@/components/PhaseOneAndTwo";
import PhaseThree from "@/components/PhaseThree";
import PhaseFour from "@/components/PhaseFour";

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState(1);

  const renderPhase = () => {
    switch (currentPhase) {
      case 1:
        return <PhaseOneAndTwo />;
      case 2:
        return <PhaseThree />;
      case 3:
        return <PhaseFour />;
      default:
        return <PhaseOneAndTwo />;
    }
  };

  return (
    <main className="flex w-full min-h-screen flex-col items-center p-6 bg-zinc-900">
      <h2 className="text-4xl font-bold mb-4 text-zinc-100">
        Optometry Project
      </h2>
      <div className="mb-4">
        <button 
          className="px-4 py-2 bg-gray-500 mx-2"
          onClick={() => setCurrentPhase(1)}
        >
          Phase 1 & 2
        </button>
        <button 
          className="px-4 py-2 bg-gray-500 mx-2"
          onClick={() => setCurrentPhase(2)}
        >
          Phase 3
        </button>
        <button 
          className="px-4 py-2 bg-gray-500 mx-2"
          onClick={() => setCurrentPhase(3)}
        >
          Phase 4
        </button>
      </div>
      <div className="w-full mt-8">
        {renderPhase()}
      </div>
    </main>
  );
}

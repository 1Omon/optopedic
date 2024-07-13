"use client"
import React, { useState } from 'react';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

const PhaseFour = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

  const nextColor = () => {
    setHighlightedIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const previousColor = () => {
    setHighlightedIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length);
  };

  return (
    <>
      <h4 className="text-lg text-zinc-300 font-medium mb-2 text-center">
        Focus on the highlighted color
      </h4>
      <div className='flex justify-center items-center mb-4'>
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-12 h-12 mx-1 rounded-full ${index === highlightedIndex ? 'border-4 border-black' : 'filter blur-sm'}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="flex w-1/4 items-center justify-between mx-auto">
        <button className='px-4 py-2 bg-zinc-600' onClick={previousColor}>
          Previous
        </button>
        <button className='px-4 py-2 bg-zinc-600' onClick={nextColor}>
          Next
        </button>
      </div>
    </>
  );
};

export default PhaseFour;

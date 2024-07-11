// import React from 'react'

// const PhaseOne = () => {
//   return (
//     <div className='w-full grid grid-cols-6 gap-2'>
//       <div className="bg-zinc-300 w-[170px] h-[150px] "></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//       <div className="bg-zinc-300 w-[170px] h-[150px]"></div>
//     </div>
//   )
// }

// export default PhaseOne



// ImageGrid.tsx

"use client"
import React, { useState, useEffect } from 'react';

// Sample images array (replace with your image sources)
const images = [
  '/images/orange.jpeg',
  '/images/watermelon.jpeg',
  // '/images/apple.jpeg',
  '/images/mango.jpeg',
  '/images/banana.jpeg',
  '/images/passion.jpeg',
  '/images/sugarcane.jpeg',
  '/images/kiwi.jpeg',
  '/images/guava.jpeg',
  '/images/pawpaw.jpeg',
  '/images/coconut.jpeg',
  '/images/avocado.jpeg',
  '/images/blackberry.jpeg',
];

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const PhaseOne: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [phase, setPhase] = useState<number>(1);

  useEffect(() => {
    setShuffledImages(shuffleArray([...images]));
  }, []);

  const handleImageClick = (image: string) => {
    if (phase === 1) {
      if (selectedImages.length < 3 && !selectedImages.includes(image)) {
        setSelectedImages([...selectedImages, image]);
      }
    } else if (phase === 2) {
      if (selectedImages.includes(image)) {
        alert('Correct!');
      } else {
        alert('Incorrect!');
      }
    }
  };

  const startPhaseTwo = () => {
    if (selectedImages.length === 3) {
      setPhase(2);
      setShuffledImages(shuffleArray([...images]));
    } else {
      alert('Please select 3 images first.');
    }
  };

  return (
    <div>
      <h1>Image Selection - Phase {phase}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {shuffledImages.map((image) => (
          <img
            key={image}
            src={image}
            alt="grid-item"
            style={{ width: '150px', height: '125px', cursor: 'pointer', objectFit: 'cover' }}
            className={`${selectedImages.includes(image)? 'opacity-60 bg-blue-400': ''}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {phase === 1 && (
        <button onClick={startPhaseTwo} disabled={selectedImages.length !== 3} className='w-[150px] h-[40px] bg-blue-400 mt-5'>
          Next
        </button>
      )}
    </div>
  );
};

export default PhaseOne;

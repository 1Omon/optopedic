"use client"
import Image from 'next/image';
import React, {useState, useEffect} from 'react'

const images = [
  '/images/orange.jpeg',
  '/images/watermelon.jpeg',
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


const PhaseOne = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  const handleImageClick = (image: string) => {
    if (selectedImages.length < 3 && !selectedImages.includes(image)) {
      setSelectedImages([...selectedImages, image]);
    }
    if (selectedImages.includes(image)) {
      selectedImages.pop()
    }
  }
  const resetImages = () => {
    setSelectedImages([])
  }
  useEffect(() => {
    setShuffledImages(shuffleArray([...images]));
  }, []);
  const nextPhase = () => {
      setShuffledImages(shuffleArray([...images]));
  }
  return (
    <>
      <h4 className="text-lg text-zinc-300 font-medium mb-2 text-center">
        Select 3 images
      </h4>
      <div className='w-full grid grid-cols-4 gap-2 mb-4'>
        {
          shuffledImages.map((image) => (
            <Image 
              key={image}
              width={300} 
              height={170} 
              src={image} 
              onClick={()=>handleImageClick(image)}
              alt='fruit image' 
              className={`w-[170px] h-[150px] ${selectedImages.includes(image)? 'opacity-30 bg-black ': ''}`}
            />
          ))
        }
      </div>
      <div className="flex w-1/4 items-center justify-between mx-auto">
        <button className='px-4 py-2 bg-zinc-600' onClick={resetImages}>
          Reset
        </button>
        <button className='px-4 py-2 bg-zinc-600' onClick={nextPhase}>
          Next
        </button>
      </div>
    </>
  )
}

export default PhaseOne




// "use client"
// import React, { useState, useEffect } from 'react';

// // Sample images array (replace with your image sources)

// const PhaseOne: React.FC = () => {
//   const [phase, setPhase] = useState<number>(1);



//   const handleImageClick = (image: string) => {
//     if (phase === 1) {

//     } else if (phase === 2) {
//       if (selectedImages.includes(image)) {
//         alert('Correct!');
//       } else {
//         alert('Incorrect!');
//       }
//     }
//   };

//   const startPhaseTwo = () => {
//     if (selectedImages.length === 3) {
//       setPhase(2);
//       setShuffledImages(shuffleArray([...images]));
//       // setSelectedImages([])
//     } else {
//       alert('Please select 3 images first.');
//     }
//   };

//   return (
//     <div>
//       <h1>Image Selection - Phase {phase}</h1>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
//         {shuffledImages.map((image) => (
//           <img
//             key={image}
//             src={image}
//             alt="grid-item"
//             style={{ width: '150px', height: '125px', cursor: 'pointer', objectFit: 'cover' }}
//             className={`${selectedImages.includes(image)? 'opacity-60 bg-blue-400': ''}`}
//             onClick={() => handleImageClick(image)}
//           />
//         ))}
//       </div>
//       {phase === 1 && (
//         <button onClick={startPhaseTwo} disabled={selectedImages.length !== 3} className='w-[150px] h-[40px] bg-blue-400 mt-5'>
//           Next
//         </button>
//       )}
//     </div>
//   );
// };

// export default PhaseOne;

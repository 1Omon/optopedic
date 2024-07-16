// "use client"
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';

// const images = [
//   '/images/orange.jpeg',
//   '/images/watermelon.jpeg',
//   '/images/mango.jpeg',
//   '/images/banana.jpeg',
//   '/images/passion.jpeg',
//   '/images/sugarcane.jpeg',
//   '/images/kiwi.jpeg',
//   '/images/guava.jpeg',
//   '/images/pawpaw.jpeg',
//   '/images/coconut.jpeg',
//   '/images/avocado.jpeg',
//   '/images/blackberry.jpeg',
// ];

// const shuffleArray = (array: string[]) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// const PhaseOne = () => {
//   const [selectedImages, setSelectedImages] = useState<string[]>([]);
//   const [shuffledImages, setShuffledImages] = useState<string[]>([]);
//   const [chosenImages, setChosenImages] = useState<string[]>([]);

//   const handleImageClick = (image: string) => {
//     if (selectedImages.includes(image)) {
//       setSelectedImages(selectedImages.filter(img => img !== image));
//     } else if (selectedImages.length < 3) {
//       setSelectedImages([...selectedImages, image]);
//     }
//   };

//   const resetImages = () => {
//     setSelectedImages([]);
//   };

//   useEffect(() => {
//     setShuffledImages(shuffleArray([...images]));
//   }, []);

//   const nextPhase = () => {
//     setChosenImages(selectedImages);
//     setSelectedImages([]);
//     setShuffledImages(shuffleArray([...images]));
//   };

//   useEffect(() => {
//     if (chosenImages.length === 3 && selectedImages.length === 3) {
//       const arraysMatch = chosenImages.every(image => selectedImages.includes(image));
//       if (arraysMatch) {
//         alert('Correct selection!');
//       } else {
//         alert('wrong match')
//       }
//     }
//   }, [selectedImages]);

//   return (
//     <>
//       <h4 className="text-lg text-zinc-300 font-medium mb-2 text-center">
//         Select 3 images
//       </h4>
//       <div className='w-full grid grid-cols-4 gap-2 mb-4'>
//         {
//           shuffledImages.map((image) => (
//             <Image 
//               key={image}
//               width={300} 
//               height={170} 
//               src={image} 
//               onClick={() => handleImageClick(image)}
//               alt='fruit image' 
//               className={`w-[170px] h-[150px] ${selectedImages.includes(image) ? 'opacity-30 bg-black ' : ''}`}
//             />
//           ))
//         }
//       </div>
//       <div className="flex w-1/4 items-center justify-between mx-auto">
//         <button className='px-4 py-2 bg-zinc-600' onClick={resetImages}>
//           Reset
//         </button>
//         <button className='px-4 py-2 bg-zinc-600' onClick={nextPhase}>
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default PhaseOne;

"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

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

const PhaseOneAndTwo = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [chosenImages, setChosenImages] = useState<string[]>([]);

  const handleImageClick = (image: string) => {
    if (selectedImages.includes(image)) {
      setSelectedImages(selectedImages.filter(img => img !== image));
    } else if (selectedImages.length < 3) {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const resetImages = () => {
    setSelectedImages([]);
  };

  useEffect(() => {
    setShuffledImages(shuffleArray([...images]));
  }, []);

  const shuffleWithChosenImages = (chosenImages: string[], images: string[]) => {
    const remainingImages = images.filter(img => !chosenImages.includes(img));
    shuffleArray(remainingImages);
    return images.map(img => (chosenImages.includes(img) ? img : remainingImages.pop()));
  };

  const nextPhase = () => {
    setChosenImages(selectedImages);
    setSelectedImages([]);
    //@ts-ignore
    setShuffledImages(shuffleWithChosenImages(selectedImages, [...images]));
  };

  useEffect(() => {
    if (chosenImages.length === 3 && selectedImages.length === 3) {
      const arraysMatch = chosenImages.every(image => selectedImages.includes(image));
      if (arraysMatch) {
        alert('Correct selection!');
        setSelectedImages([])
      } else{
        alert('Wrong selection')
      }
    }
  }, [selectedImages]);

  return (
    <>
      <h4 className="text-lg text-zinc-300 font-medium mb-2 text-center">
        Select 3 images
      </h4>
      <div className='w-full grid grid-cols-6 gap-2 mb-4'>
        {
          shuffledImages.map((image) => (
            <Image 
              key={image}
              width={300} 
              height={170} 
              src={image} 
              onClick={() => handleImageClick(image)}
              alt='fruit image' 
              className={`w-[170px] h-[150px] ${selectedImages.includes(image) ? 'opacity-30 bg-black ' : ''}`}
            />
          ))
        }
      </div>
      <div className="flex w-full mt-8 items-center justify-between mx-auto">
        <button className='px-4 py-2 bg-zinc-600' onClick={resetImages}>
          Reset
        </button>
        <button className='px-4 py-2 bg-zinc-600' onClick={nextPhase}>
          Next
        </button>
      </div>
    </>
  );
};

export default PhaseOneAndTwo;

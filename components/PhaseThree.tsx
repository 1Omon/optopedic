"use client"
import Image from 'next/image';
import React, { useState } from 'react';

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

const distances = [
  { label: '0cm', size: '450' },
  { label: '25cm', size: '325px' },
  { label: '40cm', size: '200px' },
  { label: '75cm', size: '125px' },
  { label: '100cm', size: '50px' },
];

const PhaseThree = () => {
  const [currentImage, setCurrentImage] = useState<string>(images[0]);
  const [currentDistance, setCurrentDistance] = useState<string>(distances[0].size);

  const handleDistanceChange = (distance: string) => {
    setCurrentDistance(distance);
  };

  const handleImageChange = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <section className='relative h-screen'>
      <h4 className="text-lg text-zinc-300 font-medium mb-2 text-center">
        Focus on the image from different distances
      </h4>
      <div className="flex flex-col items-center j mb-4">
        <div className='flex items-center justify-center'>
          <Image 
            src={currentImage} 
            width={parseInt(currentDistance)} 
            height={parseInt(currentDistance)} 
            alt='focus image' 
            className="mx-auto"
          />
        </div>
        <div className="flex gap-4 absolute bottom-2 ">
          {distances.map(distance => (
            <button 
              key={distance.label} 
              className='px-4 py-2 bg-zinc-600' 
              onClick={() => handleDistanceChange(distance.size)}
            >
              {distance.label}
            </button>
          ))}
        </div>
        <div className=" gap-4 mt-4 flex absolute bottom-16">
          {images.map(image => (
            <Image 
              key={image} 
              src={image} 
              width={50} 
              height={50} 
              alt='thumbnail' 
              className={`cursor-pointer ${currentImage === image ? 'border-2 border-blue-500' : ''}`}
              onClick={() => handleImageChange(image)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhaseThree;

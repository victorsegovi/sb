"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Reviews = ({ bg, text, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (images && images.length > 0) { // Check if images exist
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (images && images.length > 0) { // Check if images exist
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className={`flex justify-center items-center bg-[${bg}] p-4 text-[${text}] text-4xl h-[300px]`}>
        {images ? "No reviews available." : "Loading reviews..."}
      </div>
    );
  }

  return (
    <div className={`flex justify-center gap-1 items-center bg-[${bg}] p-4 text-[${text}] text-4xl h-[80vh]`}>
      <div onClick={goToPrevious} style={{ cursor: 'pointer' }}>
        <FaChevronLeft />
      </div>
      <div className="h-[300px]  rounded-4xl relative w-[90vw] overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Review ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain"
          className='rounded-4xl'
        />
      </div>
      <div onClick={goToNext} style={{ cursor: 'pointer' }}>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Reviews;
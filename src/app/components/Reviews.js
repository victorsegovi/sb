"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFacebook, FaStar } from "react-icons/fa";

const Reviews = ({ bg, text, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (images && images.length > 0) {
      // Check if images exist
      const newIndex =
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (images && images.length > 0) {
      // Check if images exist
      const newIndex =
        currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  if (!images || images.length === 0) {
    return (
      <div
        className={`flex justify-center items-center bg-[${bg}] p-4 text-[${text}] text-4xl h-[300px]`}
      >
        {images ? "No reviews available." : "Loading reviews..."}
      </div>
    );
  }

  return (

  <>
  <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
    <div className="flex items-center justify-between gap-1 rounded-full p-4 bg-[#0170b9] text-[#FAFAFA] h-[50px] text-2xl"><FaFacebook></FaFacebook><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
    <div style={{backgroundImage: "url(/logo-transparent.png)"}} className="w-[300px] bg-center bg-cover h-[400px]"></div>
  </div>
  <div className="w-3/4 max-w-[800px] relative text-4xl">
      <div
        onClick={goToPrevious}
        className="absolute cursor-pointer top-1/2 left-0 -translate-x-full -translate-y-1/2"
      >
        <FaChevronLeft className="text-[#0170b9]" />
      </div>
      <div
        className={`bg-[${bg}] text-[${text}] h-[250px] rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl overflow-hidden`}
      >
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
      </div>
      <div
        onClick={goToNext}
        className="absolute cursor-pointer top-1/2 right-0 translate-x-full -translate-y-1/2"
      >
        <FaChevronRight className="text-[#0170b9]" />
      </div>
    </div>
  </>
  );
};

export default Reviews;

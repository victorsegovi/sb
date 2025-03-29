"use client";

import Header from "../components/Header";
import WhatsappButton from "../components/Whatsapp";
import { useState } from "react";
import { FaFacebook, FaStar } from "react-icons/fa6";

export default function ReviewsPage() {
  const images = [
    "/review-1.png",
    "/review-2.png",
    "/review-3.png",
    "/review-4.png",
    "/review-5.png",
    "/review-6.png",
    "/review-7.png",
    "/review-8.png",
    "/review-9.png",
    "/review-10.png",
    "/review-11.png",
    "/review-12.png",
    "/review-13.png",
    "/review-14.png",
  ];

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <Header active={"Reviews"}></Header>
      <main className="flex flex-col items-center justify-center p-4">
        <WhatsappButton />
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center w-full lg:w-1/2">
          <h1 className=" text-center text-[#0170B9] text-4xl lg:w-1/2">
            See what our happy customers say
          </h1>
          <div
            style={{ backgroundImage: "url(/logo-transparent.png)" }}
            className="w-[250px] h-[400px] bg-center bg-cover"
          ></div>
        </div>
        <div className="overflow-hidden rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl flex flex-col lg:flex-row bg-[#0170b9] m-10 lg:w-1/2">
          <div className="flex gap-4 text-4xl text-[#FAFAFA] p-4 items-center justify-center lg:w-1/2">
            <FaFacebook></FaFacebook>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="rounded-tr-4xl rounded-bl-4xl p-4 bg-[#FAFAFA] lg:w-1/2">
            <p>Throughout our journey, we are proud to share that we have achieved a 100% approval rating on Facebook and recieved outsanding reviews.</p>
          </div>
        </div>
        <div
          className={`transition-all duration-700 flex flex-wrap gap-4 justify-around w-full lg:w-[70%] overflow-hidden ${
            show ? "h-auto" : "h-[400px] mb-10 relative"
          }`}
        >
          {images &&
            images.map((image, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${image})` }}
                  className=" w-full m-4 lg:w-[45%] h-[200px] bg-contain bg-no-repeat bg-center overflow-hidden rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl"
                ></div>
              );
            })}
          <div
            className={`absolute top-0 lef-0 w-full h-full bg-linear-180 from-transparent to-[#FFF] ${
              show ? "hidden" : "block"
            }`}
          ></div>
        </div>
        <button
          onClick={handleClick}
          className="p-3 w-full lg:w-1/2 text-[#0170b9] bg-[#FAFAFA] border-2 font-bold cursor-pointer"
        >
          {show ? "Show Less" : "Show More"}
        </button>
        <a
          href="sms:19407583617"
          className="w-full lg:w-1/2 text-center p-3 text-[#fafafa] font-medium bg-[#0170B9] transition-all duration-500 mt-4"
        >
          Schedule Service
        </a>
      </main>
    </>
  );
}

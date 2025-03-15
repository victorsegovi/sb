"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";
import WhatsappButton from "../components/Whatsapp";
import Reviews from "../components/Reviews";

export default function ReviewsPage() {
  const images = [
    '/review-1.png',
    '/review-2.png',
    '/review-3.png',
    '/review-4.png',
    '/review-5.png',
    '/review-6.png',
    '/review-7.png',
    '/review-8.png',
    '/review-9.png',
    '/review-10.png',
    '/review-11.png',
    '/review-12.png',
    '/review-13.png',
    '/review-14.png',
  ];

  return (
    <>
      <Header active={"Reviews"}></Header>
      <main>
        <WhatsappButton />
        <div>
          <h1 className="p-10 text-center text-[#0170B9] text-4xl">Reviews</h1>
          <Reviews bg={"#0170B9"} text={"#FAFAFA"} images={images}/>
        </div>
      </main>
    </>
  );
}

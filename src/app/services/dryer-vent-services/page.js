"use client";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WhatsappButton from "@/app/components/Whatsapp";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function getScrollY() {
  if (typeof window !== "undefined") {
    return window.scrollY;
  }
  return 0;
}

export default function DryerVent() {
  const [scrollNumber, setScrollNumber] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollNumber(() => getScrollY());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header active={"Services"}></Header>
      <main className=" flex flex-col items-center justify-center gap-10">
        <WhatsappButton/>
        <motion.div className="flex flex-col items-center justify-center gap-4 bg-[#2F2F2F] text-[#FAFAFA] p-10 text-center">
          <motion.h1 className="text-4xl"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}>Dryer Vent Cleaning</motion.h1>
          <motion.p className="lg:max-w-[50%]"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}>
            Our dryer vent service ensures your dryer works efficiently and
            safely. Over time, dryer vents can get clogged with lint,causing
            longer drying yimer, higher energy bills, and even fire risks.
          </motion.p>
        </motion.div>
        <motion.div className="min-h-[600px] justify-between p-10 items-center w-full max-w-[900px] flex flex-wrap gap-1">
          <motion.div
            className="bg-cover bg-center h-[600px] w-[49%]"
            style={{ backgroundImage: "url(../dryer.jpg)" }}
          ></motion.div>
          <motion.div
            className="bg-cover bg-center h-[600px] w-[49%]"
            style={{ backgroundImage: "url(../dryer-2.jpg)" }}
          ></motion.div>
        </motion.div>
        <motion.div className="text-[#FAFAFA] bg-[#101333] w-full p-10 flex flex-col justify-center items-center gap-4"
        initial="hidden"
        animate={scrollNumber > 400? "visible": "hidden"}
        variants={fadeInUp}>
            <motion.h2 className="text-4xl">Why choose us?</motion.h2>
            <motion.ul>
                <li className="list-disc"><strong>Faster drying cycles</strong></li>
                <li className="list-disc"><strong>Lower energy costs</strong></li>
                <li className="list-disc"><strong>Reduced fire risk</strong></li>
                <li className="list-disc"><strong>Professional and reliable service</strong></li>
            </motion.ul>
        </motion.div>
      </main>
    </>
  );
}

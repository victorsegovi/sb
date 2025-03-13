"use client";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

export default function Heating() {
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
      <main className="flex flex-col items-center gap-10 p-10">
        <motion.div className="w-full lg:w-1/2 flex flex-col gap-4">
          <motion.h1 className="text-4xl text-[#0170b9]"
          initial="hidden"
          variants={fadeInUp}
          animate="visible">Heater Maintenance & Repair</motion.h1>
          <motion.p
          initial="hidden"
          variants={fadeInUp}
          animate="visible">
            At Sanchez Brothers AC , we understand the importance of having an
            efficient and safe heating system during the colder months. We
            provide preventive maintenance and expert repair services to ensure
            your system runs optimally and extends its lifespan. Prevent
            Unexpected Breakdowns Improve Energy Efficiency Ensure Safety Save
            Money in the Long Run
          </motion.p>
        </motion.div>
        <motion.div className="w-full lg:w-1/2 h-[600px] rounded-2xl bg-cover bg-center" style={{backgroundImage: "url(../heater.jpg)"}}
                  initial="hidden"
                  variants={fadeInUp}
                  animate="visible"></motion.div>
      </main>
    </>
  );
}

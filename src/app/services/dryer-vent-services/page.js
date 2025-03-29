"use client";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WhatsappButton from "@/app/components/Whatsapp";
import Questions from "@/app/components/Questions";

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

  const questions = [
    {
      title:"Efficient Work",
      answer:"Our dryer vent service ensures your dryer works efficiently and safely"
    },
    {
      title:"Prevention",
      answer:"Over time, dryer vents can get clogged with lint,causing longer drying yimer, higher energy bills, and even fire risks"
    },
    {
      title:"Benefits",
      answer:"Faster drying cycles, lower energy costs, reduced fire risk, professional and reliable service"
    },
  ]

  return (
    <>
      <Header active={"Services"}></Header>
      <main className=" flex flex-col items-center justify-center gap-10 p-10">
        <WhatsappButton/>
        <motion.div className="flex flex-col justify-center gap-4 text-[#0170b9] p-10 lg:w-1/2">
          <motion.h1 className="text-4xl"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}>Dryer Vent Cleaning</motion.h1>
            <Questions questions={questions}/>
        </motion.div>
        <motion.div className="min-h-[600px] justify-between p-10 items-center w-full max-w-[900px] flex flex-wrap gap-1">
          <motion.div
            className="bg-cover bg-center h-[600px] w-full lg:w-[49%]"
            style={{ backgroundImage: "url(../dryer.jpg)" }}
          ></motion.div>
          <motion.div
            className="bg-cover bg-center h-[600px] w-full lg:w-[49%]"
            style={{ backgroundImage: "url(../dryer-2.jpg)" }}
          ></motion.div>
        </motion.div>
        <motion.div className="w-full overflow-hidden flex flex-col justify-center items-center gap-4 rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl lg:w-1/2"
        initial="hidden"
        animate={scrollNumber > 400? "visible": "hidden"}
        variants={fadeInUp}>
            <motion.h2 className="text-4xl p-5 text-[#FAFAFA] bg-[#0170b9] w-full">Why choose us?</motion.h2>
            <motion.ul className="p-5">
                <li className="list-disc"><strong>Faster drying cycles</strong></li>
                <li className="list-disc"><strong>Lower energy costs</strong></li>
                <li className="list-disc"><strong>Reduced fire risk</strong></li>
                <li className="list-disc"><strong>Professional and reliable service</strong></li>
            </motion.ul>
        </motion.div>
        <motion.a
          href="sms:19407583617"
          className="w-full lg:w-1/2 text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 m-10"
        >
          Schedule Service
        </motion.a>
      </main>
    </>
  );
}

"use client";

import { motion} from "framer-motion";
import Header from "@/app/components/Header";
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

export default function RefrigerantRecharge(){
    
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

    return(
        <>
        <Header active={"Services"}></Header>
        <main>
          <WhatsappButton/>
          <motion.div className="flex flex-col gap-4 p-10 text-justify items-center"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}>
            <h1 className="text-4xl text-[#0170b9] w-full lg:w-1/4">Refrigerant Recharge</h1>
            <p className=" w-full lg:w-1/4">We provide professional refrigerant recharge services to restore your AC&apos;s cooling power and efficiency.</p>
          </motion.div>
          <motion.div className="flex flex-col gap-4 p-10 text-justify bg-[#0170b9] text-[#FAFAFA] items-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}>
            <h2 className="text-4xl w-full lg:w-1/4">Why is Refrigerant Recharge Important?</h2>
            <p className=" w-full lg:w-1/4">Refrigerant is essential for your air conditioning system to absorb and release heat properly. Over time, leaks or system inefficiencies can lead to refrigerant loss, resulting in:</p>
            <ul className=" w-full lg:w-1/4">
              <li>Insufficient cooling performance</li>
              <li>Higher energy bills</li>
              <li>Increased strain on your AC unit</li>
            </ul>
          </motion.div>
          <motion.div className="flex flex-col gap-4 p-10 text-justify items-center"
          initial="hidden"
          animate={scrollNumber > 300? "visible": "hidden"}
          variants={fadeInRight}>
            <h2 className="text-4xl text-[#0170b9] w-full lg:w-1/4">Our Refrigerant Recharge Process</h2>
            <ul className="w-full lg:w-1/4">
              <li>Inspection & Leak Detection : We assess your AC system to check for leaks or other issues.</li>
              <li>Proper Refrigerant Levels : Our technicians ensure your system is recharged with the right amount of refrigerant for optimal performance.</li>
              <li>Efficiency & Performance Testing : We verify that your AC is cooling efficiently and operating at peak performance.</li>
            </ul>
          </motion.div>
        </main>
        </>
    )
}
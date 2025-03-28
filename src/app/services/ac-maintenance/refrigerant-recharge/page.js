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
        <main className="flex flex-col gap-4 items-center p-5">
          <WhatsappButton/>
          <motion.div className="flex flex-col gap-4 border-2 border-[#0170b9] rounded-tr-4xl text-justify items-center overflow-hidden rounded-bl-4xl lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}>
            <h1 className="text-4xl text-[#FAFAFA] w-full bg-[#0170b9] p-5">Refrigerant Recharge</h1>
            <p className=" w-full p-5">We provide professional refrigerant recharge services to restore your AC&apos;s cooling power and efficiency.</p>
          </motion.div>
          <motion.div className="flex flex-col gap-4 text-justify text-[#FAFAFA] items-center border-2 border-[#0170b9] rounded-tr-4xl overflow-hidden rounded-bl-4xl lg:w-1/2"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}>
            <h2 className="text-4xl w-full bg-[#0170b9] p-5">Why is Refrigerant Recharge Important?</h2>
            <p className="w-full text-[#000] px-5">Refrigerant is essential for your air conditioning system to absorb and release heat properly. Over time, leaks or system inefficiencies can lead to refrigerant loss, resulting in:</p>
            <ul className="w-full text-[#000] px-5 pb-5">
              <li>Insufficient cooling performance</li>
              <li>Higher energy bills</li>
              <li>Increased strain on your AC unit</li>
            </ul>
          </motion.div>
          <motion.div className="flex flex-col gap-4 text-justify items-center border-2 border-[#0170b9] rounded-tr-4xl overflow-hidden rounded-bl-4xl lg:w-1/2"
          initial="hidden"
          animate={scrollNumber > 300? "visible": "hidden"}
          variants={fadeInRight}>
            <h2 className="text-4xl text-[#FAFAFA] bg-[#0170b9] p-5 w-full">Our Refrigerant Recharge Process</h2>
            <ul className="w-full p-5">
              <li><strong>Inspection & Leak Detection:</strong> We assess your AC system to check for leaks or other issues.</li>
              <li><strong>Proper Refrigerant Levels:</strong> Our technicians ensure your system is recharged with the right amount of refrigerant for optimal performance.</li>
              <li><strong>Efficiency & Performance Testing:</strong> We verify that your AC is cooling efficiently and operating at peak performance.</li>
            </ul>
          </motion.div>
          <motion.div style={{backgroundImage: "url(../../refrigerant-recharge.jpeg)"}} className="bg-cover bg-center w-full lg:w-1/2 h-[400px] rounded-4xl"
                    initial="hidden"
                    animate={scrollNumber > 350? "visible": "hidden"}
                    variants={fadeInRight}></motion.div>
          <motion.a
          href="sms:19407583617"
          className="w-full lg:w-1/2 text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 m-10"
        >
          Schedule Service
        </motion.a>
        </main>
        </>
    )
}
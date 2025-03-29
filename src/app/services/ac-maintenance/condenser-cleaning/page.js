"use client";

import { motion} from "framer-motion";
import Header from "@/app/components/Header";
import { useState, useEffect } from "react";
import WhatsappButton from "@/app/components/Whatsapp";
import Questions from "@/app/components/Questions";

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

export default function CondenserCleaning() {
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
      title: "Why clean your condenser",
      answer: "Regular condenser cleaning not only keeps your system running smoothly,<br />you can get indoor comfort and air quality.",
    },
    {
      title: "Benefits",
      answer:
        "Improved Energy Efficiency: Clean condenser coils allow your AC system to cool more effectively, reducing energy consumption and lowering your utility bills.<br /><br/>" +
        "Enhanced Cooling Performance: A clean condenser ensures your system maintains optimal cooling, keeping your home comfortable even during the hottest days.<br /><br/>" +
        "Extended Equipment Lifespan: Regular maintenance prevents strain on your system, reducing the risk of breakdowns and extending the life of your AC unit.<br /><br/>" +
        "Reduced Repair Costs: Preventing dirt and debris buildup helps avoid costly repairs caused by overheating or system malfunctions.<br /><br/>" +
        "Better Indoor Air Quality: A clean condenser contributes to better airflow and reduces the circulation of dust and allergens inside your home.",
    },
  ];
  

  return (
    <>
      <Header active={"Services"}></Header>
      <main className="flex flex-col gap-10 items-center justify-between">
        <WhatsappButton />
        <motion.div
          className="p-10 lg:w-1/2 text-justify flex flex-col gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <h1 className="text-4xl text-[#0170b9]">
            Condenser Cleaning Service
          </h1>
          <Questions questions={questions} />
        </motion.div>
        <motion.div
          className="p-10 w-full text-justify flex flex-col gap-4 bg-[#01709B] text-[#FAFAFA] items-center"
          initial="hidden"
          animate={scrollNumber > 150 ? "visible" : "hidden"}
          variants={fadeInRight}
        >
          <h2 className="text-4xl lg:w-1/2">The most important benefits</h2>
          <ul className="list-disc flex flex-col gap-4 lg:w-1/2">
            <li>
              <strong>Improved Energy Efficiency: </strong>Clean condenser coils
              allow your AC system to cool more effectively, reducing energy
              consumption and lowering your utility bills.
            </li>
            <li>
              <strong>Enhanced Cooling Performance: </strong>A clean condenser
              ensures your system maintains optimal cooling, keeping your home
              comfortable even during the hottest days.
            </li>
            <li>
              <strong>Extended Equipment Lifespan: </strong>Regular maintenance
              prevents strain on your system, reducing the risk of breakdowns
              and extending the life of your AC unit.
            </li>
            <li>
              <strong>Reduced Repair Costs: </strong>Preventing dirt and debris
              buildup helps avoid costly repairs caused by overheating or
              system malfunctions.
            </li>
            <li>
              <strong>Better Indoor Air Quality: </strong>A clean condenser
              contributes to better airflow and reduces the circulation of dust
              and allergens inside your home.
            </li>
          </ul>
        </motion.div>
        <motion.a
          href="sms:19407583617"
          className="w-full lg:w-[60%] text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 mb-10"
        >
          Schedule Service
        </motion.a>
      </main>
    </>
  );
}
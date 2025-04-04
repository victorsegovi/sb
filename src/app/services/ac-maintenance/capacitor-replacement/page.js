"use client";

import { motion} from "framer-motion";
import Header from "@/app/components/Header";
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
export default function CapacitorReplacement() {

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
      title:"What is a capacitor?",
      answer:"The capacitor is a vital component in your HVAC system, responsible for storing and releasing energy to power the motor"
    },
    {
      title:"Warning!",
      answer:"Over time, capacitors can wear out, leading to system malfunctions or failures."
    },
    {
      title:"Our Service",
      answer:`Inspection: We assess your system to identify faulty or aging capacitors.
      Replacement: We replace defective capacitors with high - quality, durable units to ensure optimal performance.
      Testing: After replacement, we test your system to confirm it's operating efficiently and reliably.`
    }
  ]

  return(
    <>
        <Header active="Services"></Header>
        <main className="flex flex-col gap-10 items-center">
          <WhatsappButton/>
          <motion.div className="flex flex-col gap-10 items-center justify-around p-10">
          <motion.div className="w-full lg:w-1/2 flex flex-col justify-between gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}>
            <h1 className="text-4xl text-[#0170B9]">Capacitor Replacement</h1>
            <Questions number={3} questions={questions}/>
            </motion.div>
            <motion.div className="bg-cover bg-center w-[400px] h-[400px] rounded-2xl" style={{backgroundImage: "url(../../capacitor.jpeg)"}}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInRight}>
            </motion.div>
          </motion.div>
          <motion.div className="bg-[#FAFAFA] flex flex-col justify-between items-center gap-4 text-justify text-[#FAFAFA] rounded-bl-4xl rounded-tr-4xl overflow-hidden border-2 border-[#0170B9] m-10"
                      initial="hidden"
                      animate={scrollNumber > 100 ? "visible" : "hidden"}
                      variants={fadeInUp}>
            <h2 className="text-4xl bg-[#0170b9] w-full p-5 text-[#FAFAFA]">Benefits of Our Service:</h2>
            <ul className="list-disc text-[#0170B9] p-10">
              <li><strong>Improved System Performance:</strong> A new capacitor ensures your HVAC system runs smoothly and efficiently.</li>
              <li><strong>Preventative Maintenance:</strong> Replacing worn – out capacitors can prevent unexpected breakdowns and costly repairs.</li>
              <li><strong>Extended Equipment Lifespan:</strong> Regular maintenance, including capacitor replacement, can prolong the life of your HVAC system.</li>
            </ul>
          </motion.div>
          <motion.a
          href="sms:19407583617"
          className="w-full lg:w-[60%] text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 m-10"
        >
          Schedule Service
        </motion.a>
        </main>
    </>
  )
}
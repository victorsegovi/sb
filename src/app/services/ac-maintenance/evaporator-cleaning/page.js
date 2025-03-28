"use client";

import { motion, AnimatePresence } from "framer-motion";
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
export default function EvaporatorCleaning() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const handleSelectChange = (event) => {
    setSelectedQuestion(event.target.value);
  };

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

  const questions = {
    q1: {
      question: "Why is evaporator coil cleaning important?",
      answer:
        "Evaporator coil cleaning is essential to maintain the efficiency and performance of your air conditioning system. Dirty coils can reduce cooling capacity, increase energy consumption, and lead to unpleasant odors.",
    },
    q2: {
      question: "How often should I have my evaporator coils cleaned?",
      answer:
        "We recommend cleaning your evaporator coils at least once a year. However, if you live in a dusty environment or use your air conditioner frequently, more frequent cleanings may be necessary.",
    },
    q3: {
      question: "What are the signs that my evaporator coils need cleaning",
      answer:
        "Common signs include reduced cooling efficiency, higher energy bills, poor airflow, unusual noises, or a musty smell when the system is running.",
    },
    q4: {
      question: "Will cleaning the evaporator coils improve energy efficiency?",
      answer:
        "Yes, clean evaporator coils allow your system to run more efficiently, reducing energy consumption and potentially lowering your utility bills.",
    },
  };

  const questions_1 = [
    {
      title: "Why is it essential?",
      answer: "Evaporator coil cleaning is essential to ensure the optimal performance of your air conditioning system"
    },
    {title:"What is this?", answer:"The evaporator coil plays a crucial role in cooling the air and maintaining a comfortable environment in your home or business"}
  ]

  return (
    <>
      <Header active={"Services"}></Header>
      <main className="flex flex-col p-10 items-center justify-between gap-10">
        <WhatsappButton/>
        <motion.div className="lg:w-1/2"
                    initial="hidden"
                    variants={fadeInUp}
                    animate="visible">
          <h1 className="text-4xl text-[#0170b9]">Evaporator Coil Cleaning</h1>
          {/* <p className="text-justify">
            Evaporator coil cleaning is essential to ensure the optimal
            performance of your air conditioning system. The evaporator coil
            plays a crucial role in cooling the air and maintaining a
            comfortable environment in your home or business.
          </p> */}
          <Questions questions={questions_1} number={2}/>
        </motion.div>
        <motion.div className="mt-4 w-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center gap-8 flex-wrap"
                    initial="hidden"
                    variants={fadeInUp}
                    animate="visible">
          <motion.div
            className="rounded-xl bg-cover bg-center w-full h-[600px] max-w-[400px]"
            style={{ backgroundImage: "url(../../coil-before.jpg)" }}
          >
            <p className="p-4 bg-[#fff] inline rounded-tl-xl rounded-br-xl font-bold border text-[#0170b9]">
              Before
            </p>
          </motion.div>
          <motion.div
            className="rounded-xl bg-cover bg-center w-full h-[600px] max-w-[400px]"
            style={{ backgroundImage: "url(../../coil-after.jpg" }}
          >
            <p className="p-4 bg-[#fff] inline rounded-tl-xl rounded-br-xl font-bold border text-[#0170b9]">
              After
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="lg:w-[60%] flex flex-col w-full">
          <motion.h2
            className="text-4xl text-[#0170b9] mb-10"
            initial="hidden"
            variants={fadeInUp}
            animate={scrollNumber > 470 ? "visible" : "hidden"}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.select
            onChange={handleSelectChange}
            className="p-4 border-[#0170b9] border-2 font-medium rounded-t-2xl text-xl"
            initial="hidden"
            variants={fadeInUp}
            animate={scrollNumber > 50 ? "visible" : "hidden"}
          >
            <motion.option value={""}>Select a question</motion.option>
            <motion.option value={"q1"}>{questions.q1.question}</motion.option>
            <motion.option value={"q2"}>{questions.q2.question}</motion.option>
            <motion.option value={"q3"}>{questions.q3.question}</motion.option>
          </motion.select>
          <motion.div>
            <AnimatePresence>
              {selectedQuestion && (
                <motion.div
                  initial={scrollNumber > 50 && { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="p-10 bg-[#0170b9] text-[#fafafa] rounded-b-xl text-xl"
                >
                  <p>{questions[selectedQuestion].answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <motion.a
          href="sms:19407583617"
          className="w-full lg:w-[60%] text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500"
        >
          Schedule Service
        </motion.a>
      </main>
    </>
  );
}

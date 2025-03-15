"use client";
import Header from "@/app/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import WhatsappButton from "../../components/Whatsapp"

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

export default function UVLight() {
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

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedQuestion(event.target.value);
  };

  const questions = {
    q1: {
      question: "Is UV light safe for my HVAC system?",
      answer:
        "Yes, UV light is safe when professionally installed. Our experts ensure the UV light is correctly positioned to avoid damage to components and maintain safety.",
    },
    q2: {
      question: "How often do UV lights need to be replaced?",
      answer:
        "Typically, UV bulbs need replacement every 12-24 months, depending on the model. We offer maintenance services to keep your system running efficiently.",
    },
    q3: {
      question: "Will UV light eliminate all germs and bacteria?",
      answer:
        "While UV light significantly reduces airborne microorganisms, it is most effective as part of a complete air quality strategy, including regular filter changes and maintenance.",
    },
  };

  return (
    <>
      <Header active={"Services"}></Header>
      <main className="flex flex-col gap-10 p-10 items-center">
        <WhatsappButton/>
        <motion.div className="lg:w-[60%] flex flex-col gap-10">
          <motion.h1
            className="text-4xl text-[#0170b9]"
            initial="hidden"
            variants={fadeInUp}
            animate="visible"
          >
            UV Light Service
          </motion.h1>
          <motion.p initial="hidden" variants={fadeInUp} animate="visible">
            Sanchez Brothers offer professional UV light installation services
            for air conditioning systems. UV (ultraviolet) light technology
            helps improve indoor air quality by eliminating bacteria, mold, and
            viruses within your HVAC system, providing a cleaner and healthier
            environment for your home or business.
          </motion.p>
        </motion.div>
        <motion.div className="lg:w-[60%] flex flex-col gap-10">
          <motion.h2
            className="text-4xl text-[#0170b9]"
            initial="hidden"
            variants={fadeInUp}
            animate={scrollNumber > 50 ? "visible" : "hidden"}
          >
            How Does UV Light Work in HVAC System
          </motion.h2>
          <motion.p
            initial="hidden"
            variants={fadeInUp}
            animate={scrollNumber > 50 ? "visible" : "hidden"}
          >
            UV lights are installed within the air handler or ductwork of your
            AC system. As air circulates, the UV light disinfects the air by
            destroying the DNA of microorganisms, preventing them from
            reproducing. This process helps reduce allergens, odors, and
            potential health risks associated with poor indoor air quality.
          </motion.p>
        </motion.div>
        <motion.div className="lg:w-[60%] flex flex-col gap-10">
          <motion.h2
            className="text-4xl text-[#0170b9]"
            initial="hidden"
            variants={fadeInUp}
            animate={scrollNumber > 150 ? "visible" : "hidden"}
          >
            Benefits of UV Light Installation
          </motion.h2>
          <motion.ul
            initial="hidden"
            variants={fadeInUp}
            animate={scrollNumber > 150 ? "visible" : "hidden"}
          >
            <li className="list-disc">
              <strong>Improved Air Quality:</strong> Eliminates airborne
              contaminants like bacteria, viruses, and mold.
            </li>
            <li className="list-disc">
              <strong>Odor Reduction:</strong> Helps neutralize odors from pets,
              cooking, and mold
            </li>
            <li className="list-disc">
              <strong>Enhanced HVAC Efficiency:</strong> Prevents mold and
              biological buildup on coils, improving system efficiency
            </li>
            <li className="list-disc">
              <strong>Lower Maintenance Costs:</strong> Keeps your system
              cleaner, reducing the need for frequent maintenance.
            </li>
            <li className="list-disc">
              <strong>Healthier Environment:</strong> Beneficial for allergy and
              asthma sufferers.
            </li>
          </motion.ul>
        </motion.div>
        <motion.div className="lg:w-[60%] flex flex-col w-full">
          <motion.h2
            className="text-4xl text-[#0170b9] mb-10"
            initial="hidden"
            variants={fadeInUp}
            animate={scrollNumber > 50 ? "visible" : "hidden"}
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
                  initial="hidden"
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
          href="sms:9407583617"
          className="w-full lg:w-[60%] text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500"
        >
          Schedule Service
        </motion.a>
      </main>
    </>
  );
}

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

export default function AirDuct() {
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
      <main className="flex flex-col gap-10 items-center">
        <WhatsappButton/>
        <motion.div className="bg-[#2f2f2f] text-[#fafafa] p-10 flex flex-col gap-4">
          <motion.h1
            className="text-4xl"
            initial="hidden"
            variants={fadeInUp}
            animate="visible"
          >
            Air Duct Service
          </motion.h1>
          <motion.p initial="hidden" variants={fadeInUp} animate="visible">
            Proper air duct cleaning and Maintenance are essential for ensuring
            clean, fresh, and healthy indoor air quality. Over time, dust,
            allergens can accumulate in your air ducts, Effecting the efficiency
            of your AC system and potenttially causing health issues.
          </motion.p>
          <motion.ul initial="hidden" variants={fadeInUp} animate="visible">
            <li className="list-disc">
              <strong>Duct Cleaning:</strong> Over time, dust, debris, and
              allergens can accumulate in your air ducts, reducing efficiency
              and affecting indoor air quality. Our professional cleaning
              service removes contaminants, helping you breathe cleaner, fresher
              air.
            </li>
            <li className="list-disc">
              <strong>Duct Installation:</strong> Whether you&apos;re building a
              new property or upgrading your HVAC system, we provide expert duct
              installation tailored to your space. Our team ensures precision
              and durability for optimal airflow and efficiency.
            </li>
            <li className="list-disc">
              <strong>Duct Repair:</strong> Damaged or leaky ducts can lead to
              energy waste and uneven cooling. We diagnose and fix issues,
              restoring your system&apos;s performance and helping you save on
              energy costs.
            </li>
          </motion.ul>
        </motion.div>
        <motion.div
          className="w-full max-w-[500px] h-[600px] rounded-2xl bg-cover bg-center"
          initial="hidden"
          variants={fadeInUp}
          animate={scrollNumber > 400 ? "visible" : "hidden"}
          style={{ backgroundImage: "url(../ducts.jpg)" }}
        ></motion.div>
        <motion.div className="p-10 flex flex-col gap-4"
                  initial="hidden"
                  variants={fadeInUp}
                  animate={scrollNumber > 700 ? "visible" : "hidden"}>
          <motion.h2 className="text-4xl text-[#0170b9]">
            Why Choose Us?
          </motion.h2>
          <motion.ul>
            <li className="list-disc">
              Experienced and certified technicians.
            </li>
            <li className="list-disc">
              Family- Owned business committed to quality service.
            </li>
            <li className="list-disc">
              Safe and environmentally friendly cleaning methods.
            </li>
            <li className="list-disc">
              Improved energy efficiency and air quality guaranteed.
            </li>
          </motion.ul>
        </motion.div>
        <motion.a
          href="sms:9407583617"
          className="w-full lg:w-[60%] text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 m-10"
        >
          Schedule Service
        </motion.a>
      </main>
    </>
  );
}

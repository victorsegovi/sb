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

export default function ACMaintenance() {
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
      <main className="flex flex-col items-center p-10 gap-10">
        <WhatsappButton/>
        <motion.div
          className="flex flex-col items-center w-full gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div className="lg:w-[65%]" initial="hidden" animate="visible">
            <motion.h1
              className="text-[#0170b9] text-4xl"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
            >
              AC Maintenance Service
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeInRight}>
              Regular air conditioning maintenance is essential to keep your
              system running efficiently and effectively. Over time, dust and
              dirt can build up in your AC unit, reducing its performance and
              increasing energy consumption By scheduling routine maintenance,
              you ensure: Improved Efficiency, Longer Lifespan, Better Air
              Queality, Reduced Breakdowns.<br></br>
              <br></br> Our Professional maintenance services ensure your AC
              system operates at its best, providing comfort and peace of mind
              all year long.
            </motion.p>
          </motion.div>
          <motion.div className="mt-4 w-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center gap-8 flex-wrap">
            <motion.div
              className="rounded-xl bg-cover bg-center w-full h-[600px] max-w-[400px]"
              style={{ backgroundImage: "url(../before.jpeg)" }}
            >
              <p className="p-4 bg-[#fff] inline rounded-tl-xl rounded-br-xl font-bold border text-[#0170b9]">
                Before
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl bg-cover bg-center w-full h-[600px] max-w-[400px]"
              style={{ backgroundImage: "url(../after.jpg)" }}
            >
              <p className="p-4 bg-[#fff] inline rounded-tl-xl rounded-br-xl font-bold border text-[#0170b9]">
                After
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center gap-6">
          <motion.h2
            className="text-4xl text-[#0170b9]"
            animate={scrollNumber > 650 ? "visible" : "hidden"}
            initial="hidden"
            variants={fadeInRight}
          >
            Important points we can check in your system.
          </motion.h2>
          <motion.ul className="flex flex-col gap-2"
                      animate={scrollNumber > 600 ? "visible" : "hidden"}
                      initial="hidden"
                      variants={fadeInRight}>
            <li className="list-disc">
              Checking Refrigerant levels Thermostat settings & Operation to
              ensure comfort & lower cooling bills
            </li>
            <li className="list-disc">
              Making sure your evaporator and condenser coils are clean and
              functional
            </li>
            <li className="list-disc">
              Cleaning and adjusting the blower component to provide proper
              airflow
            </li>
            <li className="list-disc">
              Check fan blades and grilles to maintain optimal airflow
            </li>
            <li className="list-disc">
              Checking the electrical connections to ensure safe operation
            </li>
            <li className="list-disc">
              Checking the controls for proper operation and system cycling
            </li>
            <li className="list-disc">
              Inspecting and teting the drains to ensure proper flow.
            </li>
            <li className="list-disc">Drain Pan and Drain Lines</li>
            <li className="list-disc">System Performance Check</li>
          </motion.ul>
        </motion.div>
        <motion.a className="w-full lg:w-[60%] text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Schedule Service
            </motion.a>
      </main>
    </>
  );
}

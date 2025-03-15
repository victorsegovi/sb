"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WhatsappButton from "../components/Whatsapp";
import Map from "../components/Map";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

function getScrollY() {
  if (typeof window !== "undefined") {
    return window.scrollY;
  }
  return 0;
}

export default function Contact() {
  const [scrollNumber, setScrollNumber] = useState(0);
  const center = [32.8975, 97.0404];
  const zoom = 13;

  useEffect(() => {
    const handleScroll = () => {
      setScrollNumber(() => getScrollY());
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <Header active={"Contact"}></Header>
      <main>
      <WhatsappButton />
        <motion.div
          id="contact"
          className="p-10 flex flex-col gap-10 items-center justify-center"
          initial="hidden"
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          <motion.div
            className="flex flex-col gap-4 lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <motion.h2
              className="text-[#2f2f2f] text-4xl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              Contact Us Today
            </motion.h2>
            <motion.p
              className="text-[#2f2f2f] text-justify"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                },
              }}
            >
              If you are interested in quality maintenance service for your AC
              system, call now 940-758-3617 or filling out{" "}
              <strong>&quot;Schedule your free visit&quot;</strong> form. Our
              team is happy to assist you in maintaining the quality and comfort
              of your home.
            </motion.p>
            <motion.a
              className="p-3 w-full bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer text-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.4 },
                },
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
          <motion.form
            className="flex flex-col gap-4 text-[#2f2f2f] md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <motion.h2
              className=" text-4xl md:text-3xl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              Schedule your Free Visit
            </motion.h2>
            <label>
              Your Name <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              className="border-b-[#1f1f1f] border-b-[1px] p-3"
            ></input>
            <label>
              Your Phone Number{" "}
              <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              className="border-b-[#1f1f1f] border-b-[1px] p-3"
            ></input>
            <label>
              Email Address <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="email"
              className="border-b-[#1f1f1f] border-b-[1px] p-3"
            ></input>
            <label>
              Service Needed <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              className="border-b-[#1f1f1f] border-b-[1px] p-3"
            ></input>
            <label>
              Location <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              className="border-b-[#1f1f1f] border-b-[1px] p-3"
            ></input>
            <button className="p-3 w-full bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Request My Visit
            </button>
          </motion.form>
        </motion.div>
        <motion.div className="p-20">
          <Map center={center} zoom={zoom}></Map>
        </motion.div>
      </main>
    </>
  );
}

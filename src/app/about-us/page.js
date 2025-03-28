"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WhatsappButton from "../components/Whatsapp";

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

export default function AboutUs() {
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
      <Header active={"About Us"}></Header>
      <main className="flex flex-col gap-10 p-10 items-center">
        <WhatsappButton/>
        <motion.div
          className="flex flex-col gap-4 lg:flex-row flex-wrap justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-4xl text-[#0170B9] lg:w-full text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            About Us
          </motion.h1>
          <div className="bg-[#0170b9] flex flex-col justify-between items-center text-[#FAFAFA] rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl overflow-hidden lg:w-[30%]">
            <h2 className="p-5 text-4xl">Let&apos;s Meet!</h2>
            <p className="p-5">Sanchez Brothers AC was founded in Dallas Texas. We're more than just an Air Conditioning maintenance and repair company.</p>
            <div className="w-full h-[250px] lg:h-[300px] bg-center bg-cover" style={{backgroundImage:"url(../lets-meet.jpg)"}}></div>
          </div>
          <div className="bg-[#0170b9] flex flex-col justify-center items-center text-[#FAFAFA] rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl overflow-hidden lg:w-[30%]">
            <h2 className="p-5 text-4xl">Our Values</h2>
            <p className="p-5">From day one, we&apos;ve operated with responsability, honesty and care, values that define who we are and how we serve our clients.</p>
            <div className="w-full h-[250px] lg:h-[300px] bg-center bg-cover" style={{backgroundImage:"url(../our-values.jpg)"}}></div>
          </div>
          <div className="bg-[#0170b9] flex flex-col justify-center items-center text-[#FAFAFA] rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl overflow-hidden lg:w-[30%]">
            <h2 className="p-5 text-4xl">We&apos;re a family</h2>
            <p className="p-5">As a family owned company, we understand how important it is to have a comfortable, reliable, and efficient space for your home or business.</p>
            <div className="w-full h-[250px] lg:h-[300px] bg-center bg-cover" style={{backgroundImage:"url(../family.jpg)"}}></div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row gap-4 bg-[#0170b9] items-center justify-center rounded-bl-4xl border-[#0170b9] border-2 rounded-tr-4xl overflow-hidden lg:w-3/4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl text-[#fafafa] p-5 lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            Wherever You Are, We&apos;ve Got you Covered!
          </motion.h2>
          <motion.p className="p-5 rounded-bl-4xl lg:w-1/2 text-[#0170b9] bg-[#FAFAFA]" initial="hidden" animate="visible" variants={fadeInUp}>
            We proudly provide our services throughout the Metroplex and its
            surrounding communities.<br></br>
            <br></br>Dallas – Forth Worth -Arlington – Southlake – Keller –
            Denton – Krum – Sanger – Gainesville – Argyle – Mesquite – Garland –
            Mckinney – Plano – Frisco – Mansfield – Irving – Weatherford –
            Justin – Little Elm – Prosper.
          </motion.p>
        </motion.div>
      </main>
    </>
  );
}

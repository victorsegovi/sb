"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
        <motion.div
          className="flex flex-col gap-4 lg:w-1/3"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-4xl text-[#0170B9]"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            About Us
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
            Sanchez Brothers AC was founded in Dallas Texas. We&apos;re more
            than just an Air Conditioning maintenance and repair company.
            We&apos;re a family business dedicated to your comfort. From day
            one, We&apos;ve operated with responsability, honesty and care,
            values that define who we are and how we serve our clients. As a
            family owned company, we understand how important it is to have a
            comfortable, reliable, and efficient space for your home or
            business. We take pride in delivering a personal, dependable
            service, where every client is treated like part of our family.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 lg:w-1/3"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl text-[#0170B9]"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            Wherever You Are, We&apos;ve Got you Covered!
          </motion.h2>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
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

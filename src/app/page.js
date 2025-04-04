"use client";
import Header from "./components/Header";
import { FaTruck } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import FacebookReviews from "./components/FacebookReviews";
import WhatsappButton from "./components/Whatsapp";
import Reviews from "./components/Reviews";
import { useRouter } from "next/navigation";

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

export default function Home() {
  const [scrollNumber, setScrollNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const router = useRouter()

  const images = [
    '/review-1.png',
    '/review-2.png',
    '/review-3.png',
    '/review-4.png',
    '/review-5.png',
    '/review-6.png',
    '/review-7.png',
    '/review-8.png',
    '/review-9.png',
    '/review-10.png',
    '/review-11.png',
    '/review-12.png',
    '/review-13.png',
    '/review-14.png',
  ];


  const togglePlay = () => {
    console.log(videoRef.current);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
      <Header active={"Home"}></Header>
      <main className="overflow-hidden">
        <WhatsappButton />
        <motion.div
          id="hero-section"
          className="bg-image-hero flex flex-col justify-between lg:flex-row min-h-screen"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            className={` flex flex-col justify-center items-center p-10 h-1/2 gap-6 text-center bg-[#FFFFFF] lg:h-auto lg:w-1/2`}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h1
              className={`text-4xl font-bold text-[#2f2f2f] text-left`}
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
            >
              Your home is your <span className="text-[#0170B9]">comfort</span>
            </motion.h1>
            <motion.h4
              className={` text-2xl text-[#2f2f2f] text-left`}
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
            >
              Reliable HVAC services in DFW
            </motion.h4>
            <motion.a
              href="sms:19407583617"
              className="p-3 w-full bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
            >
              Get In Touch
            </motion.a>
            <motion.div className="flex gap-4 text-[#0170b9]">
              <motion.div className="flex flex-col gap-4 items-center justify-center">
                <FaTruck className="text-4xl" />
                <motion.p className="text-[#2f2f2f]">Rapid Response</motion.p>
              </motion.div>
              <motion.div className="flex flex-col gap-4 items-center justify-center">
                <BiSolidLike className="text-4xl" />
                <motion.p className="text-[#2f2f2f]">Premium Service</motion.p>
              </motion.div>
              <motion.div className="flex flex-col gap-4 items-center justify-center">
                <FaStar className="text-4xl" />
                <motion.p className="text-[#2f2f2f]">
                  Top Rated Business
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex bg-cover bg-center lg:w-3/4 lg:h-auto min-h-[500px]"
            style={{ backgroundImage: "url(/hero-banner.jpg)" }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div className="bg-center bg-cover bg-gradient-to-b lg:bg-gradient-to-r from-[#FFFFFF] to-transparent w-full min-h-[200px]"></motion.div>
          </motion.div>
        </motion.div>
        <motion.div id="about-us" className="linear-gradient p-10 flex flex-col lg:flex-row lg:items-center">
          <motion.div className="flex flex-col justify-center items-center p-10 gap-4 text-[#FFFFFF] lg:w-1/2">
            <motion.div
              initial="hidden"
              animate={scrollNumber > 400 ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <motion.h2 className="text-4xl">About Us</motion.h2>
              <motion.h3 className="text-2xl">
                Committed to keeping your home Comfortable!
              </motion.h3>
              <motion.p className="text-justify">
                Sanchez Brothers AC, is a family company specialized in
                providing maintenance and repair solutions for air conditioning
                systems in homes and businesses, with years of experience, our
                team of technicians is dedicated to delivering reliable, fast,
                and effective services to keep your environment cool and
                comfortable.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div className="relative flex flex-col items-center lg:w-1/2 h-[300px]">
          <motion.div className="h-[300px] w-2/3 rounded-bl-4xl border-2 border-[#FAFAFA] rounded-tr-4xl overflow-hidden">
            <div className="h-[300px] bg-center bg-cover" style={{backgroundImage: "url(/about-us-image.jpg)"}}>

            </div>
          </motion.div>
          <motion.a
              className="p-3 text-center w-1/2 left-1/2 -translate-x-1/2 bg-[#FFFFFF] font-medium text-[#023455] cursor-pointer absolute bottom-0 translate-y-1/2 rounded-4xl"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              onClick={()=>router.push("/about-us")}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div className="p-10 flex flex-col justify-center items-center bg-[#FFFFFF] rounded-b-[16%] gap-4 w-[100vw]">
          <motion.h2
              className="text-[#2f2f2f] text-4xl"
              initial="hidden"
              animate={scrollNumber > 900 ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              See what our happy customers say
            </motion.h2> 
           <Reviews images={images}/>
        </motion.div>
        <motion.div
          id="experience"
          className="linear-gradient flex flex-col p-10 gap-4 justify-center items-center"
        >
          <motion.div
            className="w-1/2 max-w-[400px] gap-4 flex flex-col"
            initial="hidden"
            animate={scrollNumber > 900 ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <motion.h2 className="text-[#FAFAFA] text-4xl w-full">
              Our Experience Speaks for itself
            </motion.h2>
            <ul className="lg:self-center text-[#FAFAFA] text-justify">
              <li>Over 10 years of experience</li>
              <li>100% satisfied customers</li>
              <li>+800 homes served in Dallas and the surrounding areas</li>
              <li>+1000 Free Diagnostics</li>
              <li>+200 AC Repaired and Restored</li>
              <li>+500 Dryer cleaning</li>
              <li>+800 Ducts Services</li>
            </ul>
          </motion.div>
          <motion.div
            className="relative w-1/2 md:w-[400px]"
            initial="hidden"
            animate={scrollNumber > 900 ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.video
              ref={videoRef}
              src="/video-laura-home.mp4"
              className="md:w-[400px] w-[300px] rounded-3xl"
              initial="hidden"
              animate={scrollNumber > 800 ? "visible" : "hidden"}
              variants={fadeInUp}
            ></motion.video>
            <motion.button
              initial="hidden"
              animate={scrollNumber > 800 ? "visible" : "hidden"}
              variants={fadeInUp}
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-4 text-white"
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          id="services"
          className="p-10 flex flex-wrap gap-4 justify-between"
        >
          <motion.h2
            className="text-[#2f2f2f] text-4xl w-full text-center"
            initial="hidden"
            animate={scrollNumber > 1500 ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="lg:w-[30%] p-4 flex flex-col items-center gap-4 shadow-2xl justify-between"
            initial="hidden"
            animate={scrollNumber > 1700 ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <motion.div
              className="h-[470px] overflow-hidden w-full bg-cover bg-center"
              style={{ backgroundImage: "url(/ac-maintenance.jpeg)" }}
            ></motion.div>
            <motion.h3 className="text-2xl font-bold text-[#2f2f2f]">
              AC Maintenance
            </motion.h3>
            <motion.p className="text-[#2f2f2f] text-justify">
              Keep your Air Conditioning system running with our professional
              service. Regular maintenance ensures optimal performance, extends
              the life of your unit, and helps lower energy bills by improving
              efficiency.
            </motion.p>
            <motion.a 
            href="sms:19407583617"
            className="w-full text-center bg-center bg-cover p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Schedule Service
            </motion.a>
          </motion.div>
          <motion.div
            className="lg:w-[30%] p-4 flex flex-col items-center gap-4 shadow-2xl justify-between"
            initial="hidden"
            animate={scrollNumber > 1700 ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <motion.div
              className="h-[470px] overflow-hidden w-full bg-cover bg-center"
              style={{ backgroundImage: "url(/dryer-vent-cleaning.jpeg)" }}
            ></motion.div>
            <motion.h3 className="text-2xl font-bold text-[#2f2f2f]">
              Dryer Vent Cleaning
            </motion.h3>
            <motion.p className="text-[#2f2f2f] text-justify">
              Our service ensures your home stays safe and your dryer runs
              efficiently. Over time, lint and debris accumulate in dryer vents,
              reducing performance. With our cleaning process, we remove
              built-up lint, improve airflow and help your dryer more
              efficiently, saving your time and energy.
            </motion.p>
            <motion.a 
            href="sms:19407583617" className="w-full text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Schedule Service
            </motion.a>
          </motion.div>
          <motion.div
            className="lg:w-[30%] p-4 flex flex-col items-center gap-4 shadow-2xl justify-between"
            initial="hidden"
            animate={scrollNumber > 1700 ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <motion.div
              className="h-[470px] overflow-hidden bg-cover bg-center w-full"
              style={{ backgroundImage: "url(/air-duct-cleaning.jpeg)" }}
            ></motion.div>
            <motion.h3 className="text-[#2f2f2f] text-2xl font-bold">
              Air Duct Cleaning
            </motion.h3>
            <motion.p className="text-[#2f2f2f] text-justify">
              Essential for Maintaining Good air quality in your home. Dust and
              Dirt build up in the ducts, affecting the efficiency of your air
              conditioning system. We recommend your air ducts receive a
              cleaning every two years.
            </motion.p>
            <motion.a 
            href="sms:19407583617"
            className="w-full text-center p-3 bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer">
              Schedule Service
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          id="benefits"
          className="p-10 flex flex-col gap-4 items-center"
          initial="hidden"
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          <motion.h2
            className="text-[#2f2f2f] text-4xl"
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            style={{ y: 50 }}
          >
            Our Clients&apos; Benefits
          </motion.h2>
          <motion.ul
            className="text-xl"
            initial="hidden"
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.4 },
            }}
            style={{ y: 50 }}
          >
            <motion.li
              className="list-disc"
              initial="hidden"
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.6 },
              }}
              style={{ y: 50 }}
            >
              Free Visit and Estimate.
            </motion.li>
            <motion.li
              className="list-disc"
              initial="hidden"
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.7 },
              }}
              style={{ y: 50 }}
            >
              Specialized Assistance during the Repair, Maintenance, or
              Installation of your AC System.
            </motion.li>
            <motion.li
              className="list-disc"
              initial="hidden"
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.8 },
              }}
              style={{ y: 50 }}
            >
              Warranty on Completed work.
            </motion.li>
            <motion.li
              className="list-disc"
              initial="hidden"
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.9 },
              }}
              style={{ y: 50 }}
            >
              We help you save money with the best prices.
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          id="business"
          className="flex flex-wrap justify-center p-10 items-center gap-10 grayscale-100 bg-[#FFFFFF]"
          initial="hidden"
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          <motion.div
            initial="hidden"
            animate={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.4 },
            }}
            className="bg-cover bg-center h-[250px] w-[160px]"
            style={{ backgroundImage: "url(/dryer-certified.jpeg)" }}
          ></motion.div>
          <motion.div
            initial="hidden"
            animate={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.6 },
            }}
            className="bg-contain bg-no-repeat bg-center h-[250px] w-[160px]"
            style={{ backgroundImage: "url(/epa-certification.jpg)" }}
          ></motion.div>
          <motion.div
            className="h-[250px] w-[300px] bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('/esco-logo.png')" }}
            initial="hidden"
            animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.6 } }}
          ></motion.div>
          <motion.div
            className="h-[250px] w-[200px]  bg-center bg-cover"
            style={{ backgroundImage: "url('/energy-skilled.jpeg')" }}
            initial="hidden"
            animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.6 } }}
          ></motion.div>
        </motion.div>
        <motion.div
          id="contact"
          className="p-10 flex flex-col gap-10 items-center justify-center"
          initial="hidden"
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
          <motion.div
            className="flex flex-col gap-4 lg:w-1/2"
            initial="hidden"
            animate={scrollNumber > 2700 ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <motion.h2
              className="text-[#2f2f2f] text-4xl"
              initial="hidden"
              animate={scrollNumber > 2700 ? "visible" : "hidden"}
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
              animate={scrollNumber > 2700 ? "visible" : "hidden"}
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
            <motion.a href="sms:19407583617"
              className="p-3 w-full bg-[#0170B9] font-medium text-[#FFFFFF] hover:bg-[#47b6ff] transition-all duration-500 cursor-pointer text-center"
              initial="hidden"
              animate={scrollNumber > 2700 ? "visible" : "hidden"}
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
            animate={scrollNumber > 3200 ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <motion.h2
              className=" text-4xl md:text-3xl"
              initial="hidden"
              animate={scrollNumber > 3200 ? "visible" : "hidden"}
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
      </main>
    </>
  );
}

"use client"
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsappButton(){
    return(
        <motion.a href="https://wa.me/9407583617" target="_blank" className="inline p-4 rounded-full fixed bottom-10 right-10 bg-green-500 text-white shadow-lg text-4xl cursor-pointer z-[999]"><FaWhatsapp></FaWhatsapp></motion.a>
    )
}
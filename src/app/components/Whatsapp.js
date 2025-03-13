"use client"
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsappButton(){
    return(
        <motion.a className="inline p-4 rounded-full fixed bottom-10 right-10 bg-green-500 text-white shadow-lg text-4xl z-50 cursor-pointer"><FaWhatsapp></FaWhatsapp></motion.a>
    )
}
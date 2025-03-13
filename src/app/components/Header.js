"use client";

import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState} from "react";
import { useRouter } from "next/navigation";
import {HiMiniBars3BottomRight} from "react-icons/hi2"
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

export default function Header({ active }){

  const router = useRouter()
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [dropdownMobileToggle, setDropdownMobileToggle] = useState(false);

  function handleToggle() {
    setDropdownToggle(!dropdownToggle);
    console.log(dropdownToggle)
  }


  function handleToggleMobile(){
    setDropdownMobileToggle(!dropdownMobileToggle)
    console.log(dropdownMobileToggle)
  }

  return (
    <>
        <header className="hidden lg:flex justify-between items-center p-4 text-[#0170B9] bg-[#FAFAFA] top-0 sticky z-50">
      <Image
        src="/logo-circular.png"
        alt="Logo"
        width={100}
        height={100}
      />
      <ul className="flex gap-4 font-medium">
        <li
          className={` cursor-pointer ${
            active == "Home" ? "font-normal text-gray-600" : "font-medium"
          }`}
        >
          <a onClick={()=> router.push('/')}>Home</a>
        </li>
        <li className={` cursor-pointer ${
            active == "About Us" ? "font-normal text-gray-600" : "font-medium"
          }`}>
          <a onClick={()=> router.push('/about-us')}>About Us</a>
        </li>
        <li onClick={handleToggle}
          className={` cursor-pointer relative ${
            active == "Services" ? "font-normal text-gray-600" : "font-medium"
          }`}
        >
          <div
            className={`${dropdownToggle?"block": "hidden"} flex flex-col border-t-[#0170B9] absolute top-[120%] left-[-50%] w-[200px] bg-[#FAFAFA] p-4 border-t-2 shadow-2xs gap-4`}
          >
            <a onClick={()=>router.push('/services/ac-maintenance')}>AC Maintenance</a>
            <a onClick={()=>router.push('/services/heating')}>Heating</a>
            <a onClick={()=>router.push('/services/uv-light-services')}>UV Light Services</a>
            <a onClick={()=>router.push('/services/air-duct-services')}>Air Duct Services</a>
            <a onClick={()=>router.push('/services/dryer-vent-services')}>Dryer Vent Services</a>
            <a onClick={()=>router.push('/services/customer-services')}>Customer Services 7 Days a Week</a>
          </div>
          <a
            className="flex items-center justify-center"
          >
            Services
            <MdKeyboardArrowDown />
          </a>
        </li>
        <li
          className={` cursor-pointer ${
            active == "Reviews" ? "font-normal text-gray-600" : "font-medium"
          }`}
        >
          <a onClick={()=>router.push("/reviews")}>Reviews</a>
        </li>
        <li
          className={` cursor-pointer ${
            active == "Contact" ? "font-normal text-gray-600" : "font-medium"
          }`}
        >
          <a onClick={()=>router.push("/contact")}>Contact</a>
        </li>
      </ul>
      <div className="flex gap-4 text-2xl">
        <a>
          <FaMeta />
        </a>
        <a>
          <FaInstagram />
        </a>
      </div>
    </header>
    <header className="lg:hidden flex justify-between items-center p-4 text-[#0170B9] bg-[#FAFAFA] top-0 sticky z-50">
      <Image
        src="/logo-circular.png"
        alt="Logo"
        width={120}
        height={120}
      />

      <HiMiniBars3BottomRight className="text-3xl" onClick={handleToggleMobile}/>
      <ul className={`flex flex-col justify-center items-center gap-4 font-medium absolute bg-[#FAFAFA] w-full h-screen transition-all duration-1000 left-0 top-0 ${dropdownMobileToggle? "top-0": "top-[-100vh]"}`}>
        <IoCloseOutline onClick={handleToggleMobile} className="text-4xl"/>
        <li
          className={` cursor-pointer ${
            active == "Home" ? "font-normal text-gray-600" : "font-medium"
          }`}
        >
          <a onClick={()=>router.push('/')}>Home</a>
        </li>
        <li className={`cursor-pointer ${active=="About Us"? "font-normal text-gray-600": "font-medium"}`}>
          <a onClick={()=>router.push('/about-us')}>About Us</a>
        </li>
        <li onClick={handleToggle}
          className={` cursor-pointer relative ${
            active == "Services" ? "font-normal text-gray-600" : "font-medium"
          }`}
        >
          <div
            className={`${dropdownToggle?"block": "hidden"} flex flex-col border-t-[#0170B9] absolute top-[120%] left-[-100%] w-[200px] bg-[#FAFAFA] p-4 border-t-2 shadow-2xs gap-4`}
          >
            <a onClick={()=>router.push('/services/ac-maintenance')}>AC Maintenance</a>
            <a onClick={()=>router.push('/services/heating')}>Heating</a>
            <a onClick={()=>router.push('/services/uv-light-services')}>UV Light Services</a>
            <a onClick={()=>router.push('/services/air-duct-services')}>Air Duct Services</a>
            <a onClick={()=>router.push('/services/dryer-vent-services')}>Dryer Vent Services</a>
            <a onClick={()=>router.push('/services/customer-services')}>Customer Services 7 Days a Week</a>
          </div>
          <a
          >
            Services
          </a>
        </li>
        <li
          className={` cursor-pointer ${
            active == "Reviews" ? "font-normal text-gray-600" : "font-medium"
          }`}
        >
          <a onClick={()=>router.push("/reviews")}>Reviews</a>
        </li>
        <li
          className={` cursor-pointer ${
            active == "Contact" ? "font-normal text-gray-600" : "font-medium"
          }`}
        >
          <a onClick={()=>router.push('/contact')}>Contact</a>
        </li>
      </ul>
    </header>
    </>
  );
};

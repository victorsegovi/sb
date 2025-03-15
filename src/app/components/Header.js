"use client";

import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

export default function Header({ active }) {
  const router = useRouter();
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [dropdownMobileToggle, setDropdownMobileToggle] = useState(false);

  const [ACMToggle, setACMToggle] = useState(false);

  function handleToggle() {
    setDropdownToggle(!dropdownToggle);
    console.log(dropdownToggle);
  }

  function handleToggleMobile() {
    setDropdownMobileToggle(!dropdownMobileToggle);
    console.log(dropdownMobileToggle);
  }

  function handleACMClick() {
    setACMToggle(!ACMToggle);
  }
  return (
    <>
      <header className="hidden lg:flex justify-between items-center p-4 text-[#0170B9] bg-[#FAFAFA] top-0 sticky z-50">
        <Image src="/logo-circular.png" alt="Logo" width={100} height={100} />
        <ul className="flex gap-4 font-medium">
          <li
            className={` cursor-pointer ${
              active == "Home" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <a onClick={() => router.push("/")}>Home</a>
          </li>
          <li
            className={` cursor-pointer ${
              active == "About Us" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <a onClick={() => router.push("/about-us")}>About Us</a>
          </li>
          <li
            className={` cursor-pointer relative ${
              active == "Services" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <div
              className={`${
                dropdownToggle ? "block" : "hidden"
              } flex flex-col border-t-[#0170B9] absolute top-[120%] left-[-50%] w-[250px] bg-[#FAFAFA] p-4 border-t-2 shadow-2xs gap-4`}
            >
              <div
                className="flex flex-col gap-1"
              >
                <div className="flex gap-1 justify-between items-center w-full">
                  <a onClick={() => router.push("/services/ac-maintenance")}>AC Maintenance</a>
                  <IoIosArrowDown onClick={handleACMClick} />
                </div>
                <div className={`flex flex-col gap-4 p-2 border-l-2 border-l-[#0170B9] ${ACMToggle? "flex":"hidden"}`}>
                  <a onClick={()=>router.push('/services/ac-maintenance/evaporator-cleaning')}>Evaporator Cleaning</a>
                  <a onClick={()=>router.push('/services/ac-maintenance/capacitor-replacement')}>Capacitor Replacement</a>
                  <a onClick={()=>router.push('/services/ac-maintenance/condenser-cleaning')}>Condenser Cleaning</a>
                  <a onClick={()=>router.push('/services/ac-maintenance/refrigerant-recharge')}>Refrigerant Recharge</a>
                </div>
              </div>
              <div onClick={() => router.push("/services/heating")}>
                Heating
              </div>
              <div onClick={() => router.push("/services/uv-light-services")}>
                UV Light Services
              </div>
              <div onClick={() => router.push("/services/air-duct-services")}>
                Air Duct Services
              </div>
              <div onClick={() => router.push("/services/dryer-vent-services")}>
                Dryer Vent Services
              </div>
              <div onClick={() => router.push("/services/customer-services")}>
                Customer Services 7 Days a Week
              </div>
            </div>
            <a className="flex items-center justify-center" onClick={handleToggle}>
              Services
              <MdKeyboardArrowDown/>
            </a>
          </li>
          <li
            className={` cursor-pointer ${
              active == "Reviews" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <a onClick={() => router.push("/reviews")}>Reviews</a>
          </li>
          <li
            className={` cursor-pointer ${
              active == "Contact" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <a onClick={() => router.push("/contact")}>Contact</a>
          </li>
        </ul>
        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=61555954341356"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/sanchezbrothershvac/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@sanchezbrothershv?_t=ZT-8uf9ozYxypu&_r=1"
            target="_blank"
          >
            <FaTiktok />
          </a>
        </div>
      </header>
      <header className="lg:hidden flex justify-between items-center p-4 text-[#0170B9] bg-[#FAFAFA] top-0 sticky z-50">
        <Image src="/logo-circular.png" alt="Logo" width={120} height={120} />

        <HiMiniBars3BottomRight
          className="text-3xl"
          onClick={handleToggleMobile}
        />
        <ul
          className={`flex flex-col justify-center items-center gap-4 font-medium absolute bg-[#FAFAFA] w-full h-screen transition-all duration-1000 left-0 top-0 ${
            dropdownMobileToggle ? "top-0" : "top-[-100vh]"
          }`}
        >
          <IoCloseOutline onClick={handleToggleMobile} className="text-4xl" />
          <li
            className={` cursor-pointer ${
              active == "Home" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <a onClick={() => router.push("/")}>Home</a>
          </li>
          <li
            className={`cursor-pointer ${
              active == "About Us" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <a onClick={() => router.push("/about-us")}>About Us</a>
          </li>
          <li
            onClick={handleToggle}
            className={` cursor-pointer relative ${
              active == "Services" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <div
              className={`${
                dropdownToggle ? "block" : "hidden"
              } flex flex-col border-t-[#0170B9] absolute top-[120%] left-[-100%] w-[200px] bg-[#FAFAFA] p-4 border-t-2 shadow-2xs gap-4`}
            >
              <a className="flex justify-between items-center">
                <span onClick={() => router.push("/services/ac-maintenance")}>
                  AC Maintenance
                </span>
              </a>
              <a onClick={() => router.push("/services/heating")}>Heating</a>
              <a onClick={() => router.push("/services/uv-light-services")}>
                UV Light Services
              </a>
              <a onClick={() => router.push("/services/air-duct-services")}>
                Air Duct Services
              </a>
              <a onClick={() => router.push("/services/dryer-vent-services")}>
                Dryer Vent Services
              </a>
              <a onClick={() => router.push("/services/customer-services")}>
                Customer Services 7 Days a Week
              </a>
            </div>
            <a>Services</a>
          </li>
          <li
            className={` cursor-pointer ${
              active == "Reviews" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <a onClick={() => router.push("/reviews")}>Reviews</a>
          </li>
          <li
            className={` cursor-pointer ${
              active == "Contact" ? "font-normal text-gray-600" : "font-medium"
            }`}
          >
            <a onClick={() => router.push("/contact")}>Contact</a>
          </li>
        </ul>
      </header>
    </>
  );
}

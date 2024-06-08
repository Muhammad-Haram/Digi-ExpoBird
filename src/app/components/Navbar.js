"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import callButton from "../../../public/assets/call button.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="sm:px-2 md:px-8 px-24 font-montserrat flex items-center justify-center bg-[#000213] relative">
        <div className="w-full">
          <nav className="py-6 w-full flex items-center justify-between md:space-x-5">
            <Image
              className="w-[150px] sm:w-[100px]"
              src={"/assets/logov2.jpg"}
              width={0}
              height={0}
              alt="pic"
            />
            <div className="flex items-center">
              <ul className="flex items-center gap-[40px] xl:space-x-10 list-none space-x-3 cursor-pointer">
                <Link href="/">
                  <li className="sm:text-[12px] md:text-[14px] text-white text-[16px] font-semibold">
                    Home
                  </li>
                </Link>

                <Link href="/about">
                  <li className="sm:text-[12px] md:text-[14px] text-white text-[16px] font-semibold">
                    About Us
                  </li>
                </Link>

                <Link href="/portfolio">
                  <li className="sm:text-[12px] md:text-[14px] text-white text-[16px] font-semibold">
                    Portfolio
                  </li>
                </Link>

                <li
                  className="sm:text-[12px] md:text-[14px] text-white text-[16px] font-semibold"
                  onClick={toggleMobileMenu}
                >
                  Services
                </li>
                <Link href="/contact">
                  <li className="sm:text-[12px] md:text-[14px] text-white text-[16px] font-semibold">
                    Contact Us
                  </li>
                </Link>
              </ul>
              <Link href="/contact">
                <button className="sm:hidden ml-20 justify-end px-5 py-3 rounded-[40px] text-white text-[17px] md:text-[14px] font-semibold buttonv2">
                  Let’s Talk{" "}
                  <span>
                    <Image
                      src={"/assets/Send-arrow.svg"}
                      className="inline"
                      width={21}
                      height={20}
                      alt="pic"
                    />
                  </span>
                </button>
              </Link>
              <button className="bg-[#7b41f9] ml-[20px] p-2 rounded-3xl">
                <a href="/contact">
                  <Image src={callButton} width={40} height={40} />
                </a>
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={`z-50 fixed cursor-pointer top-0 left-0 h-screen w-full bg-[#000213] text-white transform transition-transform duration-300 ${
          isMobileMenuOpen
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className="text-white absolute right-28 text-6xl cursor-pointer -mr-[98px]"
        >
          &times;
        </button>

        <div className="justify-center grid grid-cols-2 mt-[100px] ml-10 mr-10 gap-[40px] font-montserrat text-center">
          <ul className="py-10 shadow-sm shadow-[#7b41f9]">
            <Link href="/services/digital">
              <li
                className=" text-[35px] text-left uppercase font-semibold leading-none decoration-none pl-[40px] px-4"
                onClick={closeMobileMenu}
              >
                Digital Marketing Services
              </li>
            </Link>
          </ul>
          <ul className="py-10 shadow-sm shadow-[#7b41f9]">
            <Link href="/services/social">
              <li
                className="text-[35px] text-left uppercase leading-none pl-[40px] font-semibold px-4"
                onClick={closeMobileMenu}
              >
                Social Media Marketing Services
              </li>
            </Link>
          </ul>
          <ul className="py-10 shadow-sm shadow-[#7b41f9]">
            <Link href="/services/web">
              <li
                className="text-[35px] text-left uppercase leading-none pl-[40px] font-semibold px-4"
                onClick={closeMobileMenu}
              >
                Web Development Services
              </li>
            </Link>
          </ul>
          <ul className="py-10 shadow-sm shadow-[#7b41f9]">
            <Link href="/services/commerce">
              <li
                className="text-[35px] text-left uppercase leading-none pl-[40px] font-semibold px-4"
                onClick={closeMobileMenu}
              >
                E-commerce Service
              </li>
            </Link>
          </ul>
          <ul className="py-10 shadow-sm shadow-[#7b41f9]">
            <Link href="/services/video">
              <li
                className="text-[35px] text-left uppercase leading-none pl-[40px] font-semibold px-4"
                onClick={closeMobileMenu}
              >
                Video Production Services
              </li>
            </Link>
          </ul>
          <ul className="py-10 shadow-sm shadow-[#7b41f9]">
            <Link href="/services/animation">
              <li
                className="text-[35px] text-left uppercase leading-none pl-[40px] font-semibold px-4"
                onClick={closeMobileMenu}
              >
                Animation Services
              </li>
            </Link>
          </ul>
          <ul className="py-10 shadow-sm shadow-[#7b41f9]">
            <Link href="/services/ui">
              <li
                className="text-[35px] text-left uppercase leading-none pl-[40px] font-semibold px-4"
                onClick={closeMobileMenu}
              >
                UI/UX Design Services
              </li>
            </Link>
          </ul>
          <ul className="py-10 shadow-sm shadow-[#7b41f9]">
            <Link href="/services/appdev">
              <li
                className="text-[35px] text-left uppercase leading-none pl-[40px] font-semibold px-4"
                onClick={closeMobileMenu}
              >
                Application Development Services
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

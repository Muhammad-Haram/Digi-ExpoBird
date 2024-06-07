"use client";
import React, { Fragment } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showServices, setShowServices] = useState(false);
  return (
    <Fragment>
      <div className="bg-[#000213] sm:h-[50px]">

        <div>
          {
            <Image
              className="lg:hidden sm:relative translate-x-0.5 sm:right-6 sm:top-5 md:top-5 md:right-6 md:relative xl:hidden 2xl:hidden cursor-pointer md:float-right sm:float-right lg:float-right lg:top-5 lg:right-6 lg:relative"
              src={
                showNav
                  ? "/assets/01fe6447fbd35f56bf5b36ce07e7fabb.jpg"
                  : "/assets/269dd16fa1f5ff51accd09e7e1602267.png"
              }
              height={35}
              width={35}
              alt="pic1"
              onClick={() => setShowNav(!showNav)}
            />
          }
        </div>

        <div>
          <Image
            className="xl:hidden lg:hidden w-[150px] sm:w-[100px] lg:mb-[20px] 2xl:hidden relative top-5 left-5"
            src={"/assets/logov2.jpg"}
            width={0}
            height={0}
            alt="pic"
          />
        </div>

      </div>

      {
        <aside
          className={
            showNav
              ? "sm:bg-[#000213] lg:bg-[#000213] md:bg-[#000213] font-montserrat lg:hidden lg:h-[900px] sm:h-[810px] sm:mt-[20px] sm:absolute sm:w-full md:absolute lg:absolute md:w-full lg:w-full cursor-pointer sm:text-white md:text-white accordion-nav lg:text-white xl:hidden 2xl:hidden"
              : "hidden sm:bg-[#000213] md:bg-[#000213] md:absolute md:w-full md:mt-[20px] cursor-pointer sm:absolute font-montserrat sm:text-white sm:w-full sm:h-[740px] md:h-[1200px] lg:w-full lg:h-[900px] sm:mt-[20px] accordion-nav xl:hidden 2xl:hidden"
          }
        >
          <h3 className="sm:text-center lg:text-center md:text-center sm:mt-5 font-extrabold text-2xl">
            <a href="/">Home</a>
          </h3>
          <h3 className="sm:text-center lg:text-center md:text-center font-extrabold sm:mt-2 text-2xl">
            <a href="/">About Us</a>
          </h3>
          <h3 className="sm:text-center lg:text-center md:text-center font-extrabold sm:mt-2 text-2xl">
            <a href="/portfolio">Portfolio</a>
          </h3>
          <h3 className="sm:text-center lg:text-center md:text-center font-extrabold sm:mt-2 text-2xl">
            Services
          </h3>
          <h1 className="text-2xl md:text-center lg:text-center sm:mt-2 font-extrabold sm:text-center">
            <a href="/contact">Contact Us</a>
          </h1>
          <div>
            <h2 className="sm:text-center lg:text-center mob-nav-item md:text-center sm:relative sm:left-2 text-xl">
              Digital Marketing Services
            </h2>
            <h2 className="sm:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl">
              Social Media Marketing Services
            </h2>
            <h2 className="sm:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl">
              Web Design & Development Services
            </h2>
            <h2 className="sm:text-center lg:text-center md:text-center mob-nav-item sm:relative sm:left-2 sm:mt-2 text-xl">
              E-commerce Development Services
            </h2>
            <h2 className="sm:text-center lg:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl">
              Video Production Services
            </h2>
            <h2 className="sm:text-center lg:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl">
              Animation Services
            </h2>
            <h2 className="sm:text-center lg:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl">
              UI/UX Design Services
            </h2>
            <h2 className="sm:text-center lg:text-center md:text-center mob-nav-item sm:relative sm:left-2 text-xl">
              Application Development Services
            </h2>
          </div>
        </aside>
      }
    </Fragment>
  );
};

export default MobileNav;

import React, { Fragment } from 'react'
import Image from 'next/image';
import Script from 'next/script';

const HouseTechnology = () => {

  return (
    <Fragment>
      <Script
        src="/scripts/script-2.js"
        strategy="lazyOnload"
      ></Script>
      <div className='font-montserrat md:hidden'>
        <div className="bg-[#000213] sm:grid sm:px-2 sm:grid-cols-1 grid grid-cols-2 items-center lg:px-10 gap-x-24 px-48">
          <div>
            <p className="sm:text-[30px] sm:px-[20px] md:text-[60px] text-[80px] font-black sm:text-center sm:mt-[40px] mt-[60px] text-white leading-none">
              Drive Revenue Success
            </p>
            <p className="sm:text-[16px] lg:text-[17px] sm:px-[20px] sm:text-center text-2xl text-white mt-11">
              At Digi Expo, we have expertise in providing the best digital marketing solutions that will help your business maximize its revenue growth. Let us help you take your business to your dream result with our result-oriented digital solutions.
            </p>
          </div>
          <div>
            <Image
              src={"/assets/benefits.webp.png"}
              width={749}
              height={598}
              alt="pic"
              className=" sideChangeImage sm:hidden mt-20 sm:h-300 sm:w-300"
            />
          </div>
        </div>
        <div className="sm:pt-20  technology-gradient pt-96">
          <div className="sm:grid sm:grid-cols-1 sm:gap-x-6 sm:px-10 grid grid-cols-2 items-center gap-x-24 px-48">
            <div>
              <Image
                src={"/assets/benefits.webp.png"}
                width={749}
                height={598}
                alt="pic"
                className='md:hidden lg:hidden 2xl:hidden xl:hidden'
              />
            </div>
            <div>
              <p className="sm:text-[30px] md:text-[60px] text-[80px] font-black mt-[40px] lg:text-[60px] sm:text-center text-white leading-none">
                Pay As You Grow
              </p>
              <p className="sm:text-[16px] lg:text-[20px] sm:text-center text-2xl text-white mt-11">
                Our top digital marketing agency in Dubai believes that data-driven insights are the heart of the full potential of any marketing campaign. Our marketers are experts in utilizing the power of data to generate highly effective, customized strategies that are tailored to meet the unique requirements of each of our clients.
              </p>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto mt-[30px]">
            <p className="sm:text-[30px] md:text-[60px] text-[80px] font-black text-white text-center">
              Better discussions, better decisions{" "}
            </p>
            <p className="sm:text-[16px] sm:px-[20px] lg:text-[20px] text-2xl p-1 text-white text-center">
              Whatever your requirement - be it a simple e-commerce website, a complex web application development or a mobile app development, web design or brand design, even if you want a fully grown 360-degree digital marketing company.
            </p>
            <form className="pt-[40px] sm:pb-[50px] pb-[70px] text-center">
              <label className="block">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="sm:min-w-[200px] sm:mr-0 lg:min-w-[300px] sm:mb-5 sm:ml-0 rounded-[40px] bg-transparent outline-[#5D6BD9] outline outline-1 border-none py-4 px-9 min-w-[840px] placeholder:text-white placeholder:text-center text-base text-white mr-8"
                />
                <button className="text-white text-[20px] lg:mt-10 sm:mt-[15px] bg-[#7B41F9] rounded-[70px] py-4 px-6 font-semibold">
                  <a href='/contact'>
                  Get A proposal{" "}
                  </a>
                  <span>
                    <Image
                      src={"/assets/Send.svg"}
                      width={21}
                      height={20}
                      className="inline invert brightness-0"
                      alt="pic"
                    />
                  </span>
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HouseTechnology
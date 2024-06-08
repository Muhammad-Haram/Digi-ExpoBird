import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import webDesign from '../../../public/assets/services/Web-Design-&-Development-Services.webp'
import DigitalMarketing from '../../../public/assets/services/Digital-Marketing-Services.webp'
import UiUxServices from '../../../public/assets/services/UI-UX--Services.webp'
import UiUxDesign from '../../../public/assets/services/UI-UX-Design-Services.webp'
import AppDev from '../../../public/assets/services/Application-Development Services.webp'
import Branding from '../../../public/assets/services/Digital-Branding-and-Communication.webp'
import Animation from '../../../public/assets/services/Animation-Services.webp'
import VideoPro from '../../../public/assets/services/Video-Production-Services.webp'

const Service = () => {
  return (
    <Fragment>
      <div className="bg-[#ffffff] overflow-x-hidden font-montserrat w-full">
        <div className="sm:p-[40px] md:pt-2 xl:px-10 px-10 relative z-10">
          <div className="p-10 sm:p-0">
            <h6 className="sm:text-[30px] md:text-[60px] text-[70px] font-black sm:text-center sm:ml-[5px] ml-[60px] text-black">Our Services</h6>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
              <div className="sm:w-full md:w-full lg:h-auto w-1/3">
                <div className='sm:ml-[0px]'>
                  {/* <video  className="py-3" alt="" autoPlay muted controls={false} loop height="800" width="1200"><source src="/assets/services/Digital-Marketing-Services.mp4"></source></video> */}
                  <Image src={DigitalMarketing} height={800} width={1200} className="py-3" alt="" />
                </div>
              </div>
              <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                <div className="sm:p-2 p-5">
                  <div className='flex justify-center'>
                    <div>
                      <p className="text-[25px] text-[#252E48] font-bold pl-5 sm:text-center md:text-center" data-inviewport >Digital Marketing</p>
                      <p className="sm:text-[13px] text-[18px] text-[#545F7E] sm:text-center pl-5 py-3 md:text-center">
                        Ignite your online success with Digi Expo. As the best digital marketing agency in UAE, we will help to increase traffic, boost conversion rates, and maximize your business's revenue.</p>
                      <div className="text-[14px] sm:text-center text-[#252E48] font-medium  pl-5 py-3 leading-[3] display_services ">
                        <p className='mb-[5px]'><Link href="/services/digital"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Social Media</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/digital"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>SEO</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/digital"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>PPM</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/digital"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Email Marketing</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/digital"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Influencer Marketing</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/digital"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Public Relation(PR)</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/digital"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-5 mr-3 py-2 px-2'>ASO</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/digital"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-5 mr-3 py-2 px-2'>PPC</span></Link></p>
                      </div>
                      {/* <Link href="/services/web">
                        <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                          See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                        </button>
                      </Link> */}
                    </div>
                  </div>
                  <div className="bg-white shadow-xl p-4 rounded-xl">
                  </div>
                </div>
              </div>
            </div>

            <div className='sm:flex-col-reverse sm:gap-[30px] md:flex-col-reverse md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
              <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                <div className="sm:p-2 p-5">
                  <div className='flex justify-center'>
                    <div>
                      <p className="text-[25px] text-[#252E48] font-bold pl-5 sm:text-center md:text-center" data-inviewport >Website Development</p>
                      <p className="sm:text-[13px] text-[18px] text-[#545F7E] sm:text-center pl-5 py-3 md:text-center">Bring the digital vision of your brand to life with a user-friendly, and responsive website. Our professional web developers are there to bring your vision to fruition.</p>

                      {/* <p className="text-[18px] sm:text-center text-[#252E48] font-medium sm:text-center pl-5 py-3 md:text-center">Replaces: Your website subscription
                      </p> */}

                      <div className="text-[14px] sm:text-center text-[#252E48] font-medium  pl-5 py-3 leading-[3] display_services">
                        <p className='mb-[5px]'><Link href="services/web"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Web Design</span></Link></p>
                        <p className='mb-[5px]'><Link href="services/web"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Wordpress Development</span></Link></p>
                        <p className='mb-[5px]'><Link href="services/web"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Web Application</span></Link></p>
                        <p className='mb-[5px]'><Link href="services/web"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>CMS Development</span></Link></p>
                        <p className='mb-[5px]'><Link href="services/web"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Custom Software Development</span></Link></p>
                        <p className='mb-[5px]'><Link href="services/web"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Website Maintanance</span></Link></p>
                        <p className='mb-[5px]'><Link href="services/web"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-5 mr-3 py-2 px-2'>Laravel Developement</span></Link></p>
                        <p className='mb-[5px]'><Link href="services/web"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-5 mr-3 py-2 px-2'>Webflow Development</span></Link></p>
                      </div>
                      {/* <Link href="/services/web">
                        <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                          See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                        </button>
                      </Link> */}
                    </div>
                  </div>
                  <div className="bg-white shadow-xl p-4 rounded-xl">
                  </div>
                </div>
              </div>
              <div className="sm:w-full md:w-full lg:h-auto w-1/3">
                <div className='sm:ml-[0px]'>
                  <Image src={webDesign} height={800} width={1200} className="py-3" alt="" />
                </div>
              </div>
            </div>



            <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
              <div className="sm:w-full md:w-full lg:h-auto w-1/3">
                <div className='sm:ml-[0px]'>
                  <Image src={UiUxDesign} height={800} width={1200} className="py-3" alt="" />
                </div>
              </div>
              <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                <div className="sm:p-2 p-5">
                  <div className='flex justify-center'>
                    <div>
                      <p className="text-[25px] text-[#252E48] font-bold pl-5 sm:text-center md:text-center" data-inviewport >Ecommerce Web Development</p>
                      <p className="sm:text-[13px] text-[18px] text-[#545F7E]sm:text-center pl-5 py-3 md:text-center">We will help you to increase your brand's visibility, engagement, and business growth with our expert social media marketers. We will take your brand to new heights in the digital competition.</p>
                      {/* <p className="text-[18px] sm:text-center text-[#252E48] font-mediumsm:text-center pl-5 py-3 md:text-center">Replaces: Your website subscription
                      </p> */}
                      <div className="text-[14px] sm:text-center text-[#252E48] font-medium  pl-5 py-3 leading-[3] display_services ">
                        <p className='mb-[5px]'><Link href="/services/commerce"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Shopify Development</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/commerce"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>WooCommerce Development</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/commerce"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Wix Development</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/commerce"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Custom Ecommerce Solution</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/commerce"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Magento Web Development</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/commerce"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Big Commerce Development</span></Link></p>
                        <p className='mb-[5px]'><Link href="/services/commerce"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Ecommerce Shoot</span></Link></p>

                      </div>
                      {/* <Link href="/services/web">
                        <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                          See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                        </button>
                      </Link> */}

                    </div>
                  </div>
                  <div className="bg-white shadow-xl p-4 rounded-xl">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:flex-col-reverse sm:gap-[30px] md:flex-col-reverse md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-5">
              <div className='flex justify-center'>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 sm:text-center md:text-center" data-inviewport >Ui/Ux Designing</p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E] sm:text-center pl-5 py-3 md:text-center">With our professional team of UX/UI designers, we deliver innovative and user-centric solutions that are functional, accessible, and intuitive to grow your business forward. </p>
                  {/* <p className="text-[18px] sm:text-center text-[#252E48] font-medium sm:text-center pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link> */}
                  <div className="text-[14px] sm:text-center text-[#252E48] font-medium  pl-5 py-3 leading-[3] display_services ">
                    <p className='mb-[5px]'><Link href="/services/ui"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>PSD to Responsive HTML</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/ui"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>UX Design Workshop</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/ui"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>UX Design</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/ui"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Landing Page Design</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/ui"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>UX Audit</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/ui"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Resposive Web Design</span></Link></p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-full lg:h-auto w-1/3">
            <div className='sm:ml-[0px]'>
              <Image src={UiUxServices} height={800} width={1200} className="py-3" alt="" />
            </div>
          </div>
        </div>

        <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:w-full md:w-full lg:h-auto w-1/3">
            <div className='sm:ml-[0px]'>
              <Image src={AppDev} height={800} width={1200} className="py-3" alt="" />
            </div>
          </div>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-5">
              <div className='flex justify-center'>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 sm:text-center md:text-center" data-inviewport >Mobile Development</p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E] sm:text-center pl-5 py-3 md:text-center">Do you want a mobile application that helps you reach your target audience and increase engagement? Digi Expo offers end-to-end app development solutions that cater to your business needs.</p>
                  {/* <p className="text-[18px] sm:text-center text-[#252E48] font-medium sm:text-center pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link> */}

                  <div className="text-[14px] sm:text-center text-[#252E48] font-medium  pl-5 py-3 leading-[3] display_services ">
                    <p className='mb-[5px]'><Link href="/services/appdev"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Hybrid Apps</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/appdev"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Android App Development</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/appdev"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>IOS App Development</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/appdev"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>React Native Apps</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/appdev"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Flutter Apps</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/appdev"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Progressive Web Apps (PWAs)</span></Link></p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
        </div>

        <div className='sm:flex-col-reverse sm:gap-[30px] md:flex-col-reverse md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-5">
              <div className='flex justify-center'>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 sm:text-center md:text-center" data-inviewport >Digital Branding</p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E] sm:text-center pl-5 py-3 md:text-center">We are a reputable company that offers Amazon services and will help you maneuver the time-consuming and challenging steps of Amazon's platform and drive results for your business. </p>
                  {/* <p className="text-[18px] sm:text-center text-[#252E48] font-medium sm:text-center pl-5 py-3 md:text-center border-2 border-black rounded border-solid">Replaces: Your website subscription
                  </p>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link> */}
                  <div className="text-[14px] sm:text-center text-[#252E48] font-medium  pl-5 py-3 leading-[3] display_services ">
                    <p className='mb-[5px]'><Link href="services/social"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Company Profile Design</span></Link></p>
                    <p className='mb-[5px]'><Link href="services/social"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Brochure Design</span></Link></p>
                    <p className='mb-[5px]'><Link href="services/social"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Corporate Identity Design</span></Link></p>
                    <p className='mb-[5px]'><Link href="services/social"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Packaging Designs</span></Link></p>
                    <p className='mb-[5px]'><Link href="services/social"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Logo Designs</span></Link></p>
                    <p className='mb-[5px]'><Link href="services/social"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Business Card Design</span></Link></p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-full lg:h-auto w-1/3">
            <div className='sm:ml-[0px]'>
              <Image src={Branding} height={800} width={1200} className="py-3" alt="" />
            </div>
          </div>
        </div>


        <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:w-full md:w-full lg:h-auto w-1/3">
            <div className='sm:ml-[0px]'>
              <div className='sm:ml-[0px]'>
                <Image src={Animation} height={800} width={1200} className="py-3" alt="" />
              </div>
            </div>
          </div>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-5">
              <div className='flex justify-center'>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 sm:text-center md:text-center" data-inviewport >Animation Services</p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E] sm:text-center pl-5 py-3 md:text-center">Digi Expo would be your perfect partner to bring your brand into focus. Our creative design team specializes in creating engaging and visually staggering content that captivates and entertains.</p>
                  {/* <p className="text-[18px] sm:text-center text-[#252E48] font-medium sm:text-center pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p> */}
                  {/* <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link> */}
                  <div className="text-[14px] sm:text-center text-[#252E48] font-medium  pl-5 py-3 leading-[3] display_services ">
                    <p className='mb-[5px]'><Link href="/services/animation"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Whiteboard Animation</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/animation"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Animation Explainer Video</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/animation"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>3D Animation</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/animation"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>2D Animation</span></Link></p>

                  </div>
                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
        </div>

        <div className='sm:flex-col-reverse sm:gap-[30px] md:flex-col-reverse md:gap-[0px] flex items-center justify-center gap-[70px] w-full'>
          <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
            <div className="sm:p-2 p-5">
              <div className='flex justify-center'>
                <div>
                </div>
                <div>
                  <p className="text-[25px] text-[#252E48] font-bold pl-5 sm:text-center md:text-center" data-inviewport >
                    Video Production
                  </p>
                  <p className="sm:text-[13px] text-[18px] text-[#545F7E] sm:text-center pl-5 py-3 md:text-center">Are you interested in enhancing your online presence and driving more traffic to your website and business? Look no further because the experts at Digi Expo know how to get better results for business through our technical SEO and content creation.</p>
                  {/* <p className="text-[18px] sm:text-center text-[#252E48] font-mediumsm:text-center pl-5 py-3 md:text-center">Replaces: Your website subscription
                  </p>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link> */}
                  <div className="text-[14px] sm:text-center text-[#252E48] font-medium  pl-5 py-3 leading-[3] display_services ">
                    <p className='mb-[5px]'><Link href="/services/video"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Corporate Video Production</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/video"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Digital Video Commercials </span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/video"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>Product Unboxing</span></Link></p>
                    <p className='mb-[5px]'><Link href="/services/video"><span className='border-2 rounded-md border-[#7B41F8] border-solid mt-2 mr-3 py-2 px-2'>TV Commercial</span></Link></p>
                  </div>

                </div>
              </div>
              <div className="bg-white shadow-xl p-4 rounded-xl">
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-full lg:h-auto w-1/3">
            <div className='sm:ml-[0px]'>
              <Image src={VideoPro} height={800} width={1200} className="py-3" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <Link href="/services/digital">
        <button className="buttonv2 mb-10 flex items-center m-auto justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold md:flex md:items-left md:mx-auto">
          Get Started<span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
        </button>
      </Link> */}

    </Fragment>
  )
}

export default Service  
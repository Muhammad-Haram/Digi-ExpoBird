import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service = ({ EcommerceContent }) => {
    return (
        <Fragment>
            <div className="bg-[#ffffff] overflow-x-hidden font-montserrat w-full">

                <div className="sm:p-[40px] md:pt-2 xl:px-10 px-10 relative z-10">
                    <div className="p-10 sm:p-0">
                        <h6 className="sm:text-[30px] md:text-[60px] text-[70px] font-black sm:text-center sm:ml-[5px] ml-[60px] text-black">Our Services</h6>
                    </div>
                    
                    {EcommerceContent.map((item) => (
                        <div key={item.label} className="services-box flex items-center justify-center flex-col">
                        
                        <div className='sm:flex-col sm:gap-[30px] md:flex-col md:gap-[0px] flex items-center justify-center gap-[70px] w-full services-child'>
                            <div className="sm:w-full md:w-full lg:h-auto w-1/3 services-child-child">
                                <div className='sm:ml-[0px]'>
                                    {/* <video  className="py-3" alt="" autoPlay muted controls={false} loop height="800" width="1200"><source src="/assets/services/Digital-Marketing-Services.mp4"></source></video> */}
                                    <Image src={item.href} height={800} width={1200} className="py-3" alt="" />
                                </div>
                            </div>
                            <div className="sm:mb-[30px] sm:w-full md:w-full col-span-6 w-1/2">
                                <div className="sm:p-2 p-5">
                                    <div className='flex justify-center'>
                                        <div>
                                            <p className="text-[25px] text-[#252E48] font-bold pl-5 md:text-center" data-inviewport >{item.label}</p>
                                            <p className="sm:text-[13px] text-[18px] text-[#545F7E]  pl-5 py-3 md:text-center">{item.para}</p>
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
                    ))}
                    
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
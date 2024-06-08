"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Award.css';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <>
      <div className="font-montserrat xl:max-w-[1440px] bg-[#000213] mx-auto">
        <div className="p-10 sm:p-0">
          <h6 className="sm:text-[30px] md:text-[60px] text-[70px] sm:text-center sm:mt-10 sm:ml-[5px] ml-[60px] sm:font-extrabold text-white font-black">Testimonials</h6>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="font-montserrat swiper-card swiper-js translate-y-20  shadow-[#7B41F9] shadow-md bg-[#000213]" style={{ background: '#000213', color: 'white', height: '450px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
              <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
              <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Harris</h2>
              <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>Digi Expo is listed as Top Android App Development Companies by good firms</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md " style={{ background: '#000213', color: 'white', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
              <Image src={"/assets/test/5e30b5eb36770a7552775335_Testimonial-Andy-Haines.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
              <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Ahmed</h2>
              <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>Digi Expo is listed as Top Android App Development Companies by good firms</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="font-montserrat swiper-card translate-y-20  shadow-[#7B41F9] shadow-md  bg-[#000213]" style={{ background: '#000213', color: 'white', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
              <Image src={"/assets/test/5f17f7229a5f0f43e5882636_Testimonial-Tessa-Shreeve-02.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
              <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Jasmine</h2>
              <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>Digi Expo is listed as Top Android App Development Companies by good firms</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md" style={{ background: '#000213', color: 'white', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
              <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
              <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Azlan</h2>
              <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>Digi Expo is listed as Top Android App Development Companies by good firms</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-card bg-[#000213] text-white translate-y-20 shadow-[#7B41F9] shadow-md" style={{ background: '#000213', height: '500px', color: 'white', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
              <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
              <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Sarim</h2>
              <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>Digi Expo is listed as Top Android App Development Companies by good firms</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md " style={{ background: '#000213', color: 'white', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
              <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
              <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Ramis</h2>
              <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>Digi Expo is listed as Top Android App Development Companies by good firms</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="font-montserrat swiper-card bg-[#000213] translate-y-20 shadow-[#7B41F9] shadow-md" style={{ background: '#000213', color: 'white', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
              <Image src={"/assets/test/5f17f7229a5f0f43e5882636_Testimonial-Tessa-Shreeve-02.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
              <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Emma</h2>
              <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>Digi Expo is listed as Top Android App Development Companies by good firms</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="font-montserrat swiper-card bg-[#000213] shadow-[#7B41F9] shadow-md" style={{ background: '#000213', color: 'white', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
              <Image src={"/assets/test/5e2f6b6094e2db7f3c838090_Testimonial-Cristian-Brownlee.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
              <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Hassan</h2>
              <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>Digi Expo is listed as Top Android App Development Companies by good firms</p>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
}

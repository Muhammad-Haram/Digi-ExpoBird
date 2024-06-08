import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import About from '../components/About'
import Image from 'next/image'
import banner from '../../../public/assets/about/img.webp'
import MobileNav from '../components/MobileNav'
import Driven from '../components/Driven'

const page = () => {
    return (
        <div>
            <Navbar />
            <MobileNav />
            <About
                text1={"About Us"}
                para1={
                    "A company that is ready to lead you to the top in Online Marketing"
                } />

            <div className='w-[100%] sm:w-[90%] sm:py-10 sm:px-5 bg-white flex sm:flex-col items-center justify-between py-28'>

                <div className='w-[50%] sm:w-[100%] flex items-center justify-center'>
                    <Image className="rounded-3xl" src={banner} width={600} height={600} alt='img' />
                </div>

                <div className='w-[50%] sm:w-[100%]'>
                    <h1 className='text-[50px] sm:text-[30px] text-[#000213] sm:text-center font-montserrat font-extrabold mb-2 sm:mt-4'>Grow With DigiExpo</h1>
                    <p className='sm:text-center sm:text-[16px] text-[18px] text-[#252E48] pe-[80px] sm:pe-0'>DigiExpo is the best digital marketing company that provides all online marketing services in Pakistan with 100% client satisfaction. We strongly believe that your customer's word of mouth will help you achieve your business goals. Their opinion about your service will be the most authentic credential you can sell to others for financial gains. It is precisely the make or break moment. So DigiExpo always goes the extra mile when it comes to fulfilling client satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.</p>
                </div>

            </div>

            <div className='w-[100%] sm:w-[90%] sm:py-10 sm:px-5 bg-[#000213] flex sm:flex-col flex-row-reverse items-center justify-between py-28'>

                <div className='w-[50%] sm:w-[100%] flex items-center justify-center'>
                    <Image className="rounded-3xl" src={banner} width={600} height={600} alt='img' />
                </div>

                <div className='w-[50%] sm:w-[100%] ps-[80px] sm:p-0'>
                    <h1 className='text-[50px] sm:text-[30px] text-white sm:text-center font-montserrat font-extrabold mb-2 sm:mt-4'>Grow With DigiExpo</h1>
                    <p className='sm:text-center sm:text-[16px] text-[18px] text-white'>DigiExpo is the best digital marketing company that provides all online marketing services in Pakistan with 100% client satisfaction. We strongly believe that your customer's word of mouth will help you achieve your business goals. Their opinion about your service will be the most authentic credential you can sell to others for financial gains. It is precisely the make or break moment. So DigiExpo always goes the extra mile when it comes to fulfilling client satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.</p>
                </div>

            </div>

            <div className='w-[100%] sm:w-[90%] sm:py-10 sm:px-5 bg-white flex sm:flex-col items-center justify-between py-28'>

                <div className='w-[50%] sm:w-[100%] flex items-center justify-center'>
                    <Image className="rounded-3xl" src={banner} width={600} height={600} alt='img' />
                </div>

                <div className='w-[50%] sm:w-[100%]'>
                    <h1 className='text-[50px] sm:text-[30px] text-[#000213] sm:text-center font-montserrat font-extrabold mb-2 sm:mt-4'>Grow With DigiExpo</h1>
                    <p className='sm:text-center sm:text-[16px] text-[18px] text-[#252E48] pe-[80px] sm:pe-0'>DigiExpo is the best digital marketing company that provides all online marketing services in Pakistan with 100% client satisfaction. We strongly believe that your customer's word of mouth will help you achieve your business goals. Their opinion about your service will be the most authentic credential you can sell to others for financial gains. It is precisely the make or break moment. So DigiExpo always goes the extra mile when it comes to fulfilling client satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.</p>
                </div>

            </div>

            <div className='w-[100%] sm:w-[90%] sm:py-10 sm:px-5 bg-[#000213] flex sm:flex-col flex-row-reverse items-center justify-between py-28'>

                <div className='w-[50%] sm:w-[100%] flex items-center justify-center'>
                    <Image className="rounded-3xl" src={banner} width={600} height={600} alt='img' />
                </div>

                <div className='w-[50%] sm:w-[100%] ps-[80px] sm:p-0'>
                    <h1 className='text-[50px] sm:text-[30px] text-white sm:text-center font-montserrat font-extrabold mb-2 sm:mt-4'>Grow With DigiExpo</h1>
                    <p className='sm:text-center sm:text-[16px] text-[18px] text-white'>DigiExpo is the best digital marketing company that provides all online marketing services in Pakistan with 100% client satisfaction. We strongly believe that your customer's word of mouth will help you achieve your business goals. Their opinion about your service will be the most authentic credential you can sell to others for financial gains. It is precisely the make or break moment. So DigiExpo always goes the extra mile when it comes to fulfilling client satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.</p>
                </div>

            </div>
            <Driven/>
            <Form />
            <Footer />
        </div>
    )
}

export default page
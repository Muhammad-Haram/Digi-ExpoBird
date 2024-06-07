import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import About from '../components/About'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <Navbar />
            <About
                text1={"About Us"}
                para1={
                    "A company that is ready to lead you to the top in Online Marketing"
                } />

            <div className='w-100 bg-white flex items-center justify-between'>

                <div className='w-50'>
                    <Image src={"/public/assets/about/img.png"} width={400} height={400} />
                </div>

                <div className='w-50 text-[#000213]'>
                    <h1>Grow With ExpoBird</h1>
                    <p>ExpoBird is the best digital marketing company that provides all online marketing services in Pakistan with 100% client satisfaction. We strongly believe that your customer's word of mouth will help you achieve your business goals. Their opinion about your service will be the most authentic credential you can sell to others for financial gains. It is precisely the make or break moment. So ExpoBird always goes the extra mile when it comes to fulfilling client satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.</p>
                </div>

            </div>

            <div className='w-100 bg-[#000213] flex items-center justify-between'>

                <div className='w-50'>
                    <Image src={"/public/assets/about/img.png"} width={400} height={400} />
                </div>

                <div className='w-50 text-white'>
                    <h1>Grow With ExpoBird</h1>
                    <p>ExpoBird is the best digital marketing company that provides all online marketing services in Pakistan with 100% client satisfaction. We strongly believe that your customer's word of mouth will help you achieve your business goals. Their opinion about your service will be the most authentic credential you can sell to others for financial gains. It is precisely the make or break moment. So ExpoBird always goes the extra mile when it comes to fulfilling client satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.</p>
                </div>

            </div>

            <div className='w-100 bg-white flex items-center justify-between'>

                <div className='w-50'>
                    <Image src={"/public/assets/about/img.png"} width={400} height={400} />
                </div>

                <div className='w-50 text-[#000213]'>
                    <h1>Grow With ExpoBird</h1>
                    <p>ExpoBird is the best digital marketing company that provides all online marketing services in Pakistan with 100% client satisfaction. We strongly believe that your customer's word of mouth will help you achieve your business goals. Their opinion about your service will be the most authentic credential you can sell to others for financial gains. It is precisely the make or break moment. So ExpoBird always goes the extra mile when it comes to fulfilling client satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.</p>
                </div>

            </div>

            <div className='w-100 bg-[#000213] flex items-center justify-between'>

                <div className='w-50'>
                    <Image src={"/public/assets/about/img.png"} width={400} height={400} />
                </div>

                <div className='w-50 text-white'>
                    <h1>Grow With ExpoBird</h1>
                    <p>ExpoBird is the best digital marketing company that provides all online marketing services in Pakistan with 100% client satisfaction. We strongly believe that your customer's word of mouth will help you achieve your business goals. Their opinion about your service will be the most authentic credential you can sell to others for financial gains. It is precisely the make or break moment. So ExpoBird always goes the extra mile when it comes to fulfilling client satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.</p>
                </div>

            </div>

            <Form />
            <Footer />
        </div>
    )
}

export default page
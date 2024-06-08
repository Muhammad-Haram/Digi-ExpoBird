import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Form from '../components/Form'
import DigitalHero from '../components/About'
import Driven from '../components/Driven'

const page = () => {
  return (
    <>
      <Navbar />
      <MobileNav />
      <DigitalHero
        text1={"Contact Us"}
        para1={""} />

      <div className='px-28 pt-28 pb-20 sm:px-3 sm:text-center sm:pb-5 sm:pt-5 w-[95%] flex items-center justify-center sm:flex-col'>

        <div className='w-[50%] sm:w-[100%]'>
          <h1 className='text-[60px] sm:text-[30px] sm:text-center mb-5 text-[#000213] font-extrabold font-montserrat'>
            Let's Build Together
          </h1>

          <p className='text-[#545F7E] text-[20px] sm:text-[16px] font-medium max-w-[700px]'>Our customer service team is ready to help you ahead. Just give us a call or fill up the contact form below.Our customer service team is ready to help you ahead. Just give us a call or fill up the contact form below.Our customer service team is ready to help you ahead. Just give us a call or fill up the contact form below.Our customer service team is ready to help you ahead. Just give us a call or fill up the contact form below.Our customer service team is ready to help you ahead. Just give us a call or fill up the contact form below.</p>

          <div className='flex flex-col mt-5 sm:mb-[30px] sm:justify-center'>
            <a className='text-[#000213] text-[30px] sm:text-[20px] font-extrabold font-montserrat' href="tel:+971502230715">+971502230715</a>
            <a className='text-[#000213] text-[30px] sm:text-[20px] font-extrabold font-montserrat' href="mailto:Info@digiexpo.ae">Info@digiexpo.ae</a>
          </div>
        </div>

        <div className='w-[50%] sm:w-[100%]'>
          <iframe className='border-4 sm:border-0 w-[600px] sm:w-[100%] rounded-3xl border-[#000213]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17174.82031639626!2d55.2605368740605!3d25.18428989580361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69e0f1922a65%3A0x3f6348bbb8cf1b7b!2sDigiExpo.ae!5e0!3m2!1sen!2s!4v1717792520838!5m2!1sen!2s" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

      <Driven />
      <Form />
      <Footer />
    </>
  )
}

export default page
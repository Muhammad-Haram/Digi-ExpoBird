import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeatureWork from '../components/FeatureWork'
import MobileNav from '../components/MobileNav'
import Tab from '../components/Tab'
import Form from '../components/Form'
import Driven from '../components/Driven'
import Portfolio from "@/app/components/servicesCategory/Portfolio/PortfolioHero"

const page = () => {
  return (

    <>
    <Navbar/>
    <MobileNav/>
    <Portfolio
          text1={
            "Portfolio"
          }
          para1={
            ""
          }
        />
    <FeatureWork/>
    <Tab/>
    <Driven/>
    <Form/>
    <Footer/>
    </>

  )
}

export default page
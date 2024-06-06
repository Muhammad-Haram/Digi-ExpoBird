import Award from "@/app/components/Awards";
import EcommerceHero from "@/app/components/servicesCategory/Ecommerce/ECommerceHero";
import EcommerceReach from "@/app/components/servicesCategory/Ecommerce/ECommerceReach";
import EcommerceFeature from "@/app/components/servicesCategory/Ecommerce/ECommerceFeatures";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import EcommerceDriveRevenue from "@/app/components/servicesCategory/Ecommerce/ECommerceDriveRev";
import MobileNav from "@/app/components/MobileNav";
import Navbar from "@/app/components/Navbar";
import Clients from "@/app/components/OurClients";
// import Service from '@/app/components/Service';
import EcommerceServices from "@/app/components/servicesCategory/Ecommerce/ECommerceService";
import Tab from "@/app/components/Tab";
import Tech from "@/app/components/Tech";
import Testimonials from "@/app/components/Testimonials";
import {  EcommerceContent } from "@/app/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-hero-image w-full overflow-hidden">
        <Navbar />
        <MobileNav />
        <EcommerceHero
          text1={
            "Ecommerce Development Services in Dubai to Improve Brand Outreach and Sales"
          }
          para1={
            "Are you facing issues with your eCommerce venture? With unparalleled flexibility and a foundation built on in-depth market research, DigiExpo provides the best eCommerce development services in UAE. We will assist your business in selling online to increase conversions and provide a remarkable client experience."
          }
        />
      </div>
      <EcommerceServices EcommerceContent={ EcommerceContent } />
      <EcommerceFeature
        featureHead={"Ecommerce Growth Delivered"}
        featurePara={
          "DigiExpo does more than develop websites; we also create success stories. We have e-commerce development expertise to achieve outstanding results. From revenue growth , brand exposure to higher customer happiness and streamlined operations."
        }
      />
      <Clients />
      <Testimonials />
      <EcommerceReach
        AnimDataHead={"Stand Out. Sell Smart."}
        AnimDataPara={
          "Are you looking for an eCommerce development company in Dubai that can take you beyond cookie-cutter solutions? Our expert will help your eCommerce business with top technology and deep research of Dubai’s competitive market. Our crafted eCommerce websites will resonate with your potential audience."
        }
      />
      <Award />
      <Tech />
      <EcommerceDriveRevenue
        adrHead1={"Boost Conversions"}
        adrPara1={
          "Our eCommerce development services are intended to help you grow your business. We design online stores that look great and drive sales, increase consumer engagement, and provide vital data insights to help you plan your growth strategy—partner with DigiExpo to realize the full potential of e-commerce for your business."
        }
        adrHead2={"Analytics-Fueled Business Growth"}
        adrPara2={
          "We are data-driven and results-oriented. DigiExpo expert developers go beyond creating beautifully designed websites. We help your business convert website visitors into buyers and boost revenue. We will assist you in having clear data and analytics to track your success and refine your future strategies for long-lasting growth."
        }
        formHead={"Let's Build The E-commerce Future Together"}
        formPara={
          "Let's turn website traffic into revenue.  We can create an eCommerce website that helps with conversion, sustainability, and growth. Contact us today to discuss your targeted growth roadmap."
        }
      />
      <Tab />
      <Form />
      <Footer />
    </>
  );
};
export default Home;

import Award from "@/app/components/Awards";
import DigiMarkHero from "@/app/components/servicesCategory/DigitalMarketing/DigiMarketingHero";
import DigiMarkReach from "@/app/components/servicesCategory/DigitalMarketing/DigiMarketingReach";
import DigiMarkFeature from "@/app/components/servicesCategory/DigitalMarketing/DigiMarketingFeatures";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import DigiMarkDriveRevenue from "@/app/components/servicesCategory/DigitalMarketing/DigiMarkDriveRev";
import MobileNav from "@/app/components/MobileNav";
import Navbar from "@/app/components/Navbar";
import Clients from "@/app/components/OurClients";
import DigiMarkServices from "@/app/components/servicesCategory/DigitalMarketing/DigiMarketingService";
import Tab from "@/app/components/Tab";
import Tech from "@/app/components/Tech";
import Testimonials from "@/app/components/Testimonials";
import { DigitalMarketing } from "@/app/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-hero-image w-full overflow-hidden">
        <Navbar />
        <MobileNav />
        <DigiMarkHero
          text1={
            "Get More Website Traffic, Leads, And Sales With Our All In One Digital Marketing Solutions"
          }
          para1={
            "With DigiExpo, your business can get service from professional social media marketers, SEO experts, Paid Media Marketers, and Influencer Marketers. Our digital marketing agency offers all these services to assist your brand’s unique business and customer base."
          }
        />
      </div>
      <DigiMarkServices DigitalMarketing={DigitalMarketing} />
      <DigiMarkFeature
        featureHead={"Numbers That Speak Our Success"}
        featurePara={
          "Don't just take our word for it. Go through the impressive results that we have achieved for our clients. We focus on the key metrics to deliver the actual ROI."
        }
      />
      <Clients />
      <Testimonials />
      <DigiMarkReach
        AnimDataHead={"We Turn Ideas Into Reality"}
        AnimDataPara={
          "We are not just a digital marketing agency. We are your growth partner. With our cutting-edge services and data-driven insights, we help your business to connect with your potential audience, nurture leads, and attain enduring results."
        }
      />
      <Award />
      <Tech />
      <DigiMarkDriveRevenue
        adrHead1={"Proven Strategies to Maximize ROI"}
        adrPara1={
          "Are you tired of empty promises? We focus on the strategies that truly matter and increase your return on investment (ROI). Our proven strategies provide measurable success, assisting businesses in achieving their targeted goals."
        }
        adrHead2={"Double Your Conversions"}
        adrPara2={
          "Watch your conversions skyrocket! We use holistic approaches and strategies that will significantly double your conversion rates, transforming website visitors into paying customers. Join hands with us to grow your business."
        }
        formHead={
          "Need SEO? SMM? Performance Marketing? We've got you covered."
        }
        formPara={
          "Know more about our 360° digital marketing service packages—partner with our expert team of marketers and innovators to challenge the status quo and grow your business.Get a free Audit of your Website and Social media Pages."
        }
      />
      <Tab />
      <Form />
      <Footer />
    </>
  );
};
export default Home;

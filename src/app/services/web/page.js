import Award from "@/app/components/Awards";
import WebHero from "@/app/components/servicesCategory/Web/WebHero";
import WebReach from "@/app/components/servicesCategory/Web/WebReach";
import WebFeature from "@/app/components/servicesCategory/Web/WebFeatures";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import WebDriveRevenue from "@/app/components/servicesCategory/Web/WebDriveRev";
import MobileNav from "@/app/components/MobileNav";
import Navbar from "@/app/components/Navbar";
import Clients from "@/app/components/OurClients";
// import Service from '@/app/components/Service';
import WebServices from "@/app/components/servicesCategory/Web/WebService";
import Tab from "@/app/components/Tab";
import Tech from "@/app/components/Tech";
import Testimonials from "@/app/components/Testimonials";
import {  WebContent } from "@/app/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-hero-image w-full overflow-hidden">
        <Navbar />
        <MobileNav />
        <WebHero
          text1={
            "Your Vision. Our Code. Websites That Convert, Guaranteed."
          }
          para1={
            "At DigiExpo, our professional web developers understand your vision, target audience, and business goals. Our experts will assist your business in digital transformation by building a user-responsive website that scales and adapts to your requirements. "
          }
        />
      </div>
      <WebServices WebContent={ WebContent } />
      <WebFeature
        featureHead={"We Have Built Websites to Convert"}
        featurePara={
          "A user-friendly and eye-catching website is just the beginning. Our focus is to craft websites that look impressive and generate results for your business. Here, we unveil some of our most successful projects."
        }
      />
      <Clients />
      <Testimonials />
      <WebReach
        AnimDataHead={"Results-Driven Development"}
        AnimDataPara={
          "DigiExpo provides the best web development services in UAE. We have a team of expert developers who can meet your project needs. Our specialist web developers have pertinent certifications and comprehensive knowledge about the industry."
        }
      />
      <Award />
      <Tech />
      <WebDriveRevenue
        adrHead1={"Dedicated Web Developers"}
        adrPara1={
          "Prioritize your website development in Dubai by hiring a dedicated team for extra control. We allocate developers' exclusivity to your demands and projects with their entire attention and tailored skills."
        }
        adrHead2={"End-to-end development"}
        adrPara2={
          "At DigiExpo, we provide end-to-end web application development services that cover every collaboration stage. Whether it's designing, prototyping or migrating, our team can step in to support the process."
        }
        formHead={"Ready to Dominate Online?"}
        formPara={
          "Enhance your online presence with a top web development company in Dubai. Contact us today for a powerful digital transformation."
        }
      />
      <Tab />
      <Form />
      <Footer />
    </>
  );
};
export default Home;

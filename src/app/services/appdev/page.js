import Award from "@/app/components/Awards";
import AppDevHero from "@/app/components/servicesCategory/Application/AppDevHero";
import AppDevReach from "@/app/components/servicesCategory/Application/AppDevReach";
import AppDevFeature from "@/app/components/servicesCategory/Application/AppDevFeature";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import AppDevDriveRevenue from "@/app/components/servicesCategory/Application/AppDevDriveRevenue";
import MobileNav from "@/app/components/MobileNav";
import Navbar from "@/app/components/Navbar";
import Clients from "@/app/components/OurClients";
// import Service from '@/app/components/Service';
import AppDevServices from "@/app/components/servicesCategory/Application/AppDevService";
import Tab from "@/app/components/Tab";
import Tech from "@/app/components/Tech";
import Testimonials from "@/app/components/Testimonials";
import { appDevContent } from "@/app/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-hero-image w-full overflow-hidden">
        <Navbar />
        <MobileNav />
        <AppDevHero
          text1={
            "Redefine Your Mobile Experience With our Mobile App Development Company"
          }
          para1={
            "If you are looking for a partner to enhance your project and create intuitive and user-friendly mobile applications, look no further than DigiExpo, the best mobile app development company in Dubai."
          }
        />
      </div>
      <AppDevServices animationContent={appDevContent} />
      <AppDevFeature
        featureHead={"Spotlight on Success"}
        featurePara={
          "Through our exceptional services, we have provided our clients with standout projects. From robust backend solutions to user-friendly interfaces, our previous work highlights innovative apps that drive engagement and deliver results. "
        }
      />
      <Clients />
      <Testimonials />
      <AppDevReach
        AnimDataHead={"Innovate. Create. Dominate"}
        AnimDataPara={
          "DigiExpo specializes in mobile app development services Dubai. Our creative team of specialists thrives on creativity, transforming concepts into great apps that engage users. With our cutting-edge technologies and creative competence, we help businesses conquer the mobile industry and achieve exceptional success. "
        }
      />
      <Award />
      <Tech />
      <AppDevDriveRevenue
        adrHead1={"Experience in App Development"}
        adrPara1={
          "DigiExpo recognizes how significant an opportunity the mobile environment can be. We understand how mobile app users consume content in the space. Thus, we base our design strategy on simplicity, accessibility, and usability."
        }
        adrHead2={"Integrated Development Process"}
        adrPara2={
          "Our reliable mobile app development company in Dubai is tightly connected and works closely with you throughout the mobile design process. Your idea becomes our vision, and we take satisfaction in keeping the authenticity of the creative concept."
        }
        formHead={"Kickstart Your Dream Project With Us"}
        formPara={
          "Whether you are a startup or looking to develop an enterprise app, our designers and developers have expertise in creating the best universal apps that meet your brand's requirements."
        }
      />
      <Tab />
      <Form />
      <Footer />
    </>
  );
};
export default Home;

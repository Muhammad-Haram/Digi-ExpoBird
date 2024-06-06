import Award from "@/app/components/Awards";
import UiUxHero from "@/app/components/servicesCategory/UiUx/UiUxHero";
import UiUxReach from "@/app/components/servicesCategory/UiUx/UiUxReach";
import UiUxFeature from "@/app/components/servicesCategory/UiUx/UiUxFeatures";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import UiUxDriveRevenue from "@/app/components/servicesCategory/UiUx/UiUxDriveRev";
import MobileNav from "@/app/components/MobileNav";
import Navbar from "@/app/components/Navbar";
import Clients from "@/app/components/OurClients";
// import Service from '@/app/components/Service';
import UiUxServices from "@/app/components/servicesCategory/UiUx/UiUxService";
import Tab from "@/app/components/Tab";
import Tech from "@/app/components/Tech";
import Testimonials from "@/app/components/Testimonials";
import { UiUx } from "@/app/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-hero-image w-full overflow-hidden">
        <Navbar />
        <MobileNav />
        <UiUxHero
          text1={
            "Get Your Desired Business Growth with Intuitive UI/UX Design Services in Dubai"
          }
          para1={
            "As a leading UI/UX design service company in Dubai, We design visually attractive and incredibly intuitive user interfaces for your app. Our skilled UI/UX designers ensure that each project's user interfaces are engaging and provide memorable user experiences."
          }
        />
      </div>
      <UiUxServices UiUx={ UiUx } />
      <UiUxFeature
        featureHead={"Design Impact Showcase"}
        featurePara={
          "Experience smooth interfaces, intuitive interactions, and breathtaking visuals through our reliable UI/UX design. See how our design skills enhance companies and fascinate users."
        }
      />
      <Clients />
      <Testimonials />
      <UiUxReach
        AnimDataHead={"Redefining UX/UI Standards"}
        AnimDataPara={
          "Along with DigiExpo, start your never-ending journey of innovation. We are not just following trends; we are setting them. Witness firsthand how our innovative approach to UX/UI design alters industry norms, pushes limits, and produces exceptional experiences."
        }
      />
      <Award />
      <Tech />
      <UiUxDriveRevenue
        adrHead1={"Experience Matters"}
        adrPara1={
          "We make every touchpoint memorable with our carefully designed interfaces and intuitive interactions. Design isn't enough—it's about building relationships that keep people engaged and committed. DigiExpo creates audience-resonating, inspiring, and memorable experiences that set your company apart in a congested digital landscape."
        }
        adrHead2={"Design Distinction"}
        adrPara2={
          "With a design that captures attention and piques interest, you can set your brand apart from the competition. From concept to execution, we infuse each pixel with meaning, creating digital experiences that not only engage consumers but also reinforce brand identification, distinguishing your company as a true industry leader."
        }
        formHead={"Let Us Transform Your Digital Journey"}
        formPara={
          "Our professional designers will help you to elevate your business image through their exceptional designers. Join hands to grow your business further."
        }
      />
      <Tab />
      <Form />
      <Footer />
    </>
  );
};
export default Home;

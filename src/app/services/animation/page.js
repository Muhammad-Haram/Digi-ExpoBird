import Award from "@/app/components/Awards";
import DigitalHero from "@/app/components/servicesCategory/Animation/DigitalHero";
import AnimReach from "@/app/components/servicesCategory/Animation/AnimReach";
import AnimFeature from "@/app/components/servicesCategory/Animation/AnimFeature";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import AnimDriveRevenue from "@/app/components/servicesCategory/Animation/AnimDriveRevenue";
import MobileNav from "@/app/components/MobileNav";
import Navbar from "@/app/components/Navbar";
import Clients from "@/app/components/OurClients";
// import Service from '@/app/components/Service';
import AnimationServices from "@/app/components/servicesCategory/Animation/AnimationService";
import Tab from "@/app/components/Tab";
import Tech from "@/app/components/Tech";
import Testimonials from "@/app/components/Testimonials";
import { animationContent } from "@/app/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-hero-image w-full overflow-hidden">
        <Navbar />
        <MobileNav />
        <DigitalHero
          text1={"Transform Your Vision with DigiExpo—Expertise in Every Frame"}
          para1={
            "DigiExpo Productions, the best animation services in Dubai, offers perfection. Our creative team creates stories with unmatched creativity and technical skill. Animation, at its best, blends quality and inventiveness."
          }
        />
      </div>
      <AnimationServices animationContent={animationContent} />
      <AnimFeature
        featureHead={"DigiExpo's Animations Changed Brands"}
        featurePara={
          "DigiExpo, the best animation services provider in UAE, has helped many struggling brands through their creativity, storytelling, and dedication. We strive for quality and excellence. Discover how our animations have helped and envision what we can accomplish for you."
        }
      />
      <Clients />
      <Testimonials />
      <AnimReach
        AnimDataHead={"Maximize Reach"}
        AnimDataPara={
          "Go viral with an animated video. No one has time to read your ad; they're simply watching animated videos for product explanations and information. DigiExpo brings your designs to life so your brand can connect successfully and stand out in business."
        }
      />
      <Award />
      <Tech />
      <AnimDriveRevenue
        adrHead1={"Animation with Impact"}
        adrPara1={
          "We are known for our innovation, quality and customer satisfaction. DigiExpo professional animators and storytellers love bringing your idea to life with precision and originality. We customize each project to your demands. Our cutting-edge technologies and collaborative approach ensure beautiful and strategic results."
        }
        adrHead2={"Boost Sales with Animation"}
        adrPara2={
          "Imagine increasing sales with captivating animations. DigiExpo animations are more than pretty—they work. Our professionally created animations promote marketing, engagement, and customer acquisition. Our compelling brand storytelling helps you attract and retain customers, increasing sales and revenue."
        }
        formHead={"Let's Talk, Meet, Cooperate."}
        formPara={
          "At DigiExpo, we are a team of big minds and professional animators. They will help you execute your idea with uniqueness, competence, and dedication. Let's build something extraordinary together."
        }
      />
      <Tab />
      <Form />
      <Footer />
    </>
  );
};
export default Home;

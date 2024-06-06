import Award from "@/app/components/Awards";
import BrandingHero from "@/app/components/servicesCategory/Branding/BrandingHero";
import BrandingReach from "@/app/components/servicesCategory/Branding/BrandingReach";
import BrandingFeature from "@/app/components/servicesCategory/Branding/BrandingFeatures";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import BrandingDriveRevenue from "@/app/components/servicesCategory/Branding/BrandingDriveRev";
import MobileNav from "@/app/components/MobileNav";
import Navbar from "@/app/components/Navbar";
import Clients from "@/app/components/OurClients";
// import Service from '@/app/components/Service';
import BrandingServices from "@/app/components/servicesCategory/Branding/BrandingService";
import Tab from "@/app/components/Tab";
import Tech from "@/app/components/Tech";
import Testimonials from "@/app/components/Testimonials";
import { Branding } from "@/app/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-hero-image w-full overflow-hidden">
        <Navbar />
        <MobileNav />
        <BrandingHero
          text1={
            "Crafting Creatives To Polish and Conceptualize Impactful Brand Communication"
          }
          para1={
            "Let ExpoDigi be your digital branding and communication agency in Dubai. We create an engaging and exceptional brand identity. We help businesses get their deserved attention through our strategic brand positioning, targeted marketing, and precise segmentation. We attract the potential audience to evoke emotions and drive engagement."
          }
        />
      </div>
      <BrandingServices Branding={ Branding } />
      <BrandingFeature
        featureHead={"We Build Effective Digital Branding for Diverse Clients"}
        featurePara={
          "We help businesses of all kinds develop powerful digital brands. Our team creates effective methods. We'll help you stand out online, reach your ideal audience, and succeed in business."
        }
      />
      <Clients />
      <Testimonials />
      <BrandingReach
        AnimDataHead={"We Optimize, Grow, And Transform Businesses."}
        AnimDataPara={
          "Our digital branding and communication agency in Dubai excels in the shifting digital landscape. We create customized plans and approaches for maximizing the flow of sales. We integrate different marketing channels to fuel significant growth."
        }
      />
      <Award />
      <Tech />
      <BrandingDriveRevenue
        adrHead1={"Partner with the Experts"}
        adrPara1={
          "DigiExpo values your vision. We have dedicated designers and communicators who can execute your ideas. Our talented designers will make your concept engaging, and our communicators will connect with your audience using plain language."
        }
        adrHead2={"Measurable Results"}
        adrPara2={
          "We don't just create beautiful designs; we track results. DigiExpo provides data-driven insights and clear metrics to demonstrate the tangible impact of our work on your business growth. We help you understand how our designs are driving conversions, increasing sales, and achieving your marketing goals."
        }
        formHead={"Ready to unlock the power of strategic branding and communication?"}
        formPara={
          "To learn how DigiExpo can help your Dubai business grow, schedule a free consultation today."
        }
      />
      <Tab />
      <Form />
      <Footer />
    </>
  );
};
export default Home;

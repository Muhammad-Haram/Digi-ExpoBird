import Award from "@/app/components/Awards";
import VideoHero from "@/app/components/servicesCategory/Video/VideoHero";
import VideoReach from "@/app/components/servicesCategory/Video/VideoReach";
import VideoFeature from "@/app/components/servicesCategory/Video/VideoFeatures";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import VideoDriveRevenue from "@/app/components/servicesCategory/Video/VideoDriveRev";
import MobileNav from "@/app/components/MobileNav";
import Navbar from "@/app/components/Navbar";
import Clients from "@/app/components/OurClients";
// import Service from '@/app/components/Service';
import VideoServices from "@/app/components/servicesCategory/Video/VideoService";
import Tab from "@/app/components/Tab";
import Tech from "@/app/components/Tech";
import Testimonials from "@/app/components/Testimonials";
import { VideoPro } from "@/app/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-hero-image w-full overflow-hidden">
        <Navbar />
        <MobileNav />
        <VideoHero
          text1={
            "Hook Your Audience With Soulful, Meaningful & Powerful Videos"
          }
          para1={
            "DigiExpo helps to transform your ideas into reality with our creative vision and technical expertise.  Whether you are an up-and-coming startup or a reputable brand, we, Dubai's top video production company, are here to convey your story and increase your engagement through videos."
          }
        />
      </div>
      <VideoServices VideoPro={VideoPro} />
      <VideoFeature
        featureHead={"Crafting Stories, Building Success"}
        featurePara={
          "DigiExpo, the top video production company in Dubai, has a committed and skilled team which always prioritises customer satisfaction. We are proud of our work and take delight in forming great, long-term partnerships in the video marketing journey. We have helped our clients meet sales targets and increase brand awareness."
        }
      />
      <Clients />
      <Testimonials />
      <VideoReach
        AnimDataHead={"Empowering Your Brand"}
        AnimDataPara={
          "The ExpoDigi team of videographers and editors create stories that immediately affect the viewers' hearts. We don't only capture the moments. Instead, we create memories that spark brand love. We produce beloved treasures rather than transient clips, building a relationship that drives loyalty. Let DigiExpo create your story, a legacy of shared experiences rather than just a collection."
        }
      />
      <Award />
      <Tech />
      <VideoDriveRevenue
        adrHead1={"Creative Storytelling"}
        adrPara1={
          "Our team of experts is known for their creative content. At DigiExpo, we know how to tell engaging and compelling stories that help your brand connect with the potential audience. We adapt swiftly to the changing media landscape; therefore, no photo, travel, or idea is too big for us to accomplish."
        }
        adrHead2={"Video Versatility Experts"}
        adrPara2={
          "Every video is unique and different. DigiExpo team create content in a variety of genres, from interior corporate, explainer, and product how-to videos to animation safety induction videos and social media marketing videos, and we have a flexible portfolio and adaptive eye to ensure the optimum conclusion for any project."
        }
        formHead={"Ready to Make Your Mark? We're Here to Help."}
        formPara={
          "Where stunning visuals meet captivating stories. Contact us today and let's create video content that sets you apart."
        }
      />
      <Tab />
      <Form />
      <Footer />
    </>
  );
};
export default Home;

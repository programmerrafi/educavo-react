import React from "react";
import SliderSec from "./1-SliderSection/SliderSec";
import Newsletter from "./10-Newsletter/Newsletter";
import ServiceSection from "./2-service/ServiceSection";
import AboutSec from "./3-About/AboutSec";
import DegreeSec from "./4-Degree/DegreeSec";
import VideoSec from "./5-video/VideoSec";
import LetesEvent from "./6-LetestEvent/LetesEvent";
import LogoSlide from "./7-LogoSlide/LogoSlide";
import Testmonial from "./8-Testmonial/Testmonial";
import BLogSec from "./9-Blog/BLogSec";

const MainBody = () => {
  return (
    <main className="main_body">
      <SliderSec />
      <ServiceSection />
      <AboutSec />
      <DegreeSec />
      <VideoSec />
      <LetesEvent />
      <LogoSlide />
      <Testmonial />
      <BLogSec />
      <Newsletter />
    </main>
  );
};

export default MainBody;

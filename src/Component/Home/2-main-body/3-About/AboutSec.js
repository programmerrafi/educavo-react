import React from "react";
import "./AboutSec.css";
import AboutStd from "./AboutStd/AboutStd";
import Point from "./Point/Point";
import ImagesCom from "./ImgCom/ImagesCom";
import img from "../../../Data/AboutData/img";

const AboutSec = () => {
  return (
    <section className="about_section">
      <div className="container">
        <div className="student-container">
          <AboutStd />
          {/* great-point */}
          <div className="great-point-main">
            <div className="great-point">
              <Point st="2k+" info="Students" />
              <Point st="3.50" info="Average CGPA" />
              <Point st="95%" info="Graduates" />
            </div>
            {/* Api */}
            <ImagesCom img={img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;

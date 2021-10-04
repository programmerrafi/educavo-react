import React from "react";
import "./SliderSec.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { photos } from "../../../Data/SlideData/SlideData";
import { Button } from "@mui/material";
import SampleNextArrow from "./custom-btn/SampleNextArrow";
import SamplePrevArrow from "./custom-btn/SamplePrevArrow";

const SliderSec = () => {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="slider_section">
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div className="slide" key={photo.id}>
              <div>
                <img src={photo.url} alt="slide-img" />
              </div>
              <div className="container">
                <div className="silde-info">
                  <h2>World Leading University</h2>
                  <h1>Educavo University</h1>
                  <div className="btn-sec">
                    <Button variant="contained">Discover More</Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default SliderSec;

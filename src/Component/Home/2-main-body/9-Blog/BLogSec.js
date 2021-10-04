import React from "react";
import BlogCom from "./BlogCom/BlogCom";
import "./BLogSec.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { blogs } from "../../../Data/BLogData/BlogSlide";

const BLogSec = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="blog_section">
      <div className="container">
        <div className="blog_wrapper">
          <div className="blog_wrapper_head">
            <h2>NEWS UPDATE</h2>
            <h1>Latest News & Events</h1>
          </div>

          <div className="blog_wrap_box">
            <Slider {...settings}>
              {blogs.map((blog) => {
                return <BlogCom key={blog.id} blog={blog} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLogSec;

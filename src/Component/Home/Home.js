import React from "react";
import Header from "./1-Header/Header";
import MainBody from "./2-main-body/MainBody";
import Footer from "./3-Footer/Footer";
import PopUp from "./PopUp/PopUp";

const Home = () => {
  return (
    <div className="home" style={{ position: "relative" }}>
      <PopUp />
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};

export default Home;

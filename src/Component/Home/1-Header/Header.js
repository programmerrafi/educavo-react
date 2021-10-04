import React from "react";
import TopHeader from "./1-TopHeader/TopHeader";
import Navbar from "./2-Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <Navbar />
    </header>
  );
};

export default Header;

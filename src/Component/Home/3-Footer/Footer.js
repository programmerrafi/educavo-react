import React from "react";
import { footTitle } from "../../Data/FooterData/footerD";
import "./Footer.css";
import FooterBtm from "./FooterBottom/FooterBtm";
import FuLicom from "./FulLi/FuLicom";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="images/12-footer/footer-bg.png" alt="footer-img" />
      <div className="footer_top">
        <div className="container">
          <div className="footer_top_wrapper">
            {footTitle.map((foot) => {
              return <FuLicom key={foot.id} foot={foot} />;
            })}
          </div>
        </div>
      </div>

      <FooterBtm />
    </footer>
  );
};

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Button } from "@mui/material";

const FooterBtm = () => {
  const time = new Date().getFullYear();
  return (
    <div className="footer_bottom">
      <div className="container">
        <div className="footer_bottom_wrapper">
          <NavLink to="#">
            <img src="images/12-footer/logo.png" alt="footer-logo" />
          </NavLink>
          <div className="development">
            <h3>© {time} All Rights Reserved. Developed By</h3>
            <span> Md Rafi</span>
          </div>
          <div className="social_icon">
            <Button variant="contained">
              <FacebookIcon />
            </Button>
            <Button variant="contained">
              <TwitterIcon />
            </Button>
            <Button variant="contained">
              <InstagramIcon />
            </Button>
            <Button variant="contained">
              <GoogleIcon />
            </Button>
            <Button variant="contained">
              <PinterestIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBtm;

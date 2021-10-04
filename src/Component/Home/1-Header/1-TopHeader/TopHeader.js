import React from "react";
import { NavLink } from "react-router-dom";
import "./TopHeader.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WifiCallingIcon from "@mui/icons-material/WifiCalling";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";

const TopHeader = () => {
  return (
    <div className="top_header">
      <div className="container">
        <div className="top_header_content">
          <div className="header_support_mail">
            <MailOutlineIcon />
            <NavLink to="#">support@rstheme.com</NavLink>
          </div>
          <div className="header_support_others">
            <div className="header_contact">
              <WifiCallingIcon />
              <span>(+088) 589-8745</span>
            </div>
            <div className="login_apply">
              <div className="login_sinup">
                <LoginIcon />
                <NavLink to="#"> Login/</NavLink>
                <NavLink to="#">Register</NavLink>
              </div>
              <div className="apply_btn">
                <Button variant="contained">Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

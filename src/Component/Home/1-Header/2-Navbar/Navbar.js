import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import NavLi from "./NavLi/NavLi";
import DropDownLI from "./NavLi/DropDown/DropDownLI";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useVarContext } from "../../../../ContextApi/createConText";

const Navbar = () => {
  const [show, setShow] = useState("");
  const global = useVarContext();

  const toggle = () => {
    if (show === "active") {
      setShow("");
    } else {
      setShow("active");
    }
  };

  return (
    <nav className={global.showNav ? "activeNav" : "navbar"}>
      <div className="container">
        <div className="navbar-header">
          <div className="nav_logo">
            <NavLink to="/">
              <img
                src={
                  global.showNav
                    ? "images/12-footer/logo.png"
                    : "images/1-logo/logo-dark.png"
                }
                alt="logo"
              />
            </NavLink>
          </div>

          <div className="categoris">
            <CalendarViewMonthIcon
              className={`'nai' ${global.showNav && "activeColor"}`}
            />
            <span className={`'nai' ${global.showNav && "activeColor"}`}>
              CATEGORIES
            </span>
          </div>

          <div className="toggel-button1">
            <DehazeIcon
              className={`nav-toggel-button btn-disable ${
                global.showNav && "activeColor"
              }`}
              onClick={toggle}
            />
          </div>

          <div className={`nav-menu  ${show}`}>
            <ul className="main-menu d-flex ">
              <NavLi text="home" />
              <NavLi text="About " />

              {/* Drop Down start */}
              <DropDownLI text="Courses" icon="+" icon1="-" />
              <DropDownLI text="Pages" icon="+" icon1="-" />
              {/* Drop Down end */}

              <NavLi text="Blog" />
              <NavLi text="contact" />
            </ul>

            <ul className="right-main-menu">
              <li>
                <SearchIcon
                  className={`'nai' ${global.showNav && "activeColor"}`}
                />
              </li>
              <li>
                <LockIcon
                  className={`'nai' ${global.showNav && "activeColor"}`}
                />
              </li>
              <li>
                <DehazeIcon
                  className={`'nai' ${global.showNav && "activeColor"}`}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

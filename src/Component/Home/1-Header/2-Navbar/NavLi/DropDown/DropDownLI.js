import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SUbli from "./SubLI/SUbli";
import { pages, service } from "../../../../../Data/NavData/NavData";
import { useVarContext } from "../../../../../../ContextApi/createConText";

const DropDownLI = ({ text, icon, icon1 }) => {
  const [navToggele, setnavToggele] = useState("");
  const global = useVarContext();

  const handleToggel = () => {
    if (navToggele === "") {
      setnavToggele("toggel-button");
    } else if (navToggele === "toggel-button") {
      setnavToggele("");
    }
  };
  return (
    <li
      className={`sub-menu-head ${
        global.srnSmall ? "activePadding2" : global.showNav && "activePadding"
      }`}
      onClick={handleToggel}
    >
      <NavLink
        to="#"
        className={`'nai' ${
          global.srnSmall ? "activeColor2" : global.showNav && "activeColor"
        }`}
      >
        {text} <span className="plus">{icon}</span>
        <span className="negetive">{icon1}</span>
      </NavLink>
      <SUbli
        pages={text === "Courses" ? pages : service}
        navToggele={navToggele}
        page
      />
    </li>
  );
};

export default DropDownLI;

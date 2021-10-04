import React from "react";
import { NavLink } from "react-router-dom";
import { useVarContext } from "../../../../../ContextApi/createConText";

const NavLi = ({ text }) => {
  const global = useVarContext();
  return (
    <li
      className={`'nai' ${
        global.srnSmall ? "activePadding2" : global.showNav && "activePadding"
      }`}
    >
      <NavLink
        to="#"
        className={`'nai' ${
          global.srnSmall ? "activeColor2" : global.showNav && "activeColor"
        }`}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavLi;

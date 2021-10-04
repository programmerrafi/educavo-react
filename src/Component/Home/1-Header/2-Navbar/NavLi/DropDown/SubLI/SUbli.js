import React from "react";
import { NavLink } from "react-router-dom";
import { useVarContext } from "../../../../../../../ContextApi/createConText";

const SUbli = ({ pages, navToggele, page }) => {
  const global = useVarContext();
  return (
    <ul
      className={`sub-menu  ${page && navToggele} ${
        global.showNav && "activeSub-Menu"
      }`}
    >
      {pages.map((menu) => {
        return (
          <li key={menu.id}>
            <NavLink to="#">{menu.text}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SUbli;

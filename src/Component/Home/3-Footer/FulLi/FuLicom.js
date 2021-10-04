import React from "react";
import { NavLink } from "react-router-dom";

const FuLicom = ({ foot }) => {
  return (
    <div className="singel_footer_top_info">
      <h2>{foot.title}</h2>
      <ul>
        <li>
          {foot.id === 4 ? foot.icon1 : null}
          <NavLink to="#">{foot.info1}</NavLink>
        </li>
        <li>
          {foot.id === 4 ? foot.icon2 : null}
          <NavLink to="#">{foot.info2}</NavLink>
        </li>
        <li>
          {foot.id === 4 ? foot.icon3 : null}
          <NavLink to="#">{foot.info3}</NavLink>
        </li>
        <li>
          <NavLink to="#">{foot.info4}</NavLink>
        </li>
        <li>
          <NavLink to="#">{foot.info5}</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FuLicom;

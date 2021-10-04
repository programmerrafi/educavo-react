import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { NavLink } from "react-router-dom";
import { useVarContext } from "../../../../../ContextApi/createConText";

const PalyVideo = () => {
  const global = useVarContext();
  return (
    <div className="video_admission_wrap">
      <img src="images/6-admission/left-bg.jpg" alt="video-img" />
      <div className="video_admission_wrap_content">
        <NavLink to="#" className="video_info" onClick={global.hadlePopUp}>
          <div className="video_icon">
            <ArrowRightIcon />
          </div>
          <h2>
            Take a Video <br /> Tour at Educavo
          </h2>
        </NavLink>
      </div>
    </div>
  );
};

export default PalyVideo;

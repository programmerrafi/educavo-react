import React from "react";
import { Button } from "@mui/material";

const AdmissionC = () => {
  return (
    <div className="video_admission_wrap">
      <img src="images/6-admission/right-bg.jpg" alt="video-img" />
      <div className="video_admission_wrap_content">
        <div className="admission_info">
          <h1>Admission Open for 2020</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius
            to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims
            ad minim veniam. Aenean massa. Cum sociis natoque penatibus et
            magnis. Apply Now
          </p>
          <div className="btn">
            <Button variant="contained">Apply Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionC;

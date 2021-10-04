import React from "react";
import "./VideoSec.css";
import AdmissionC from "./Admission/AdmissionC";
import PalyVideo from "./PlayVideo/PalyVideo";

const VideoSec = () => {
  return (
    <section className="video_section">
      <div className="video_wrapper">
        <PalyVideo />
        <AdmissionC />
      </div>
    </section>
  );
};

export default VideoSec;

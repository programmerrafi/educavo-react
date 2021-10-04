import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#21a7d0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <ArrowBackIcon />
    </div>
  );
};

export default SamplePrevArrow;

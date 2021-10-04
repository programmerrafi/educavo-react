import React from "react";

const EducavoCard = ({ title, img }) => {
  return (
    <div className="edcavo-student-img-info">
      <div className="student-img-info">
        <div className="student-img1">
          <img src={img} alt="std-img" />
          <h1>{title}</h1>
        </div>
        <div className="student-info">
          <h1>{title}</h1>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod
          </p>
          <span>READ MORE</span>
        </div>
      </div>
    </div>
  );
};

export default EducavoCard;

import React from "react";

const Donar = ({ img, name, teacher }) => {
  return (
    <div className="single_donar">
      <img src={img} alt="donetion" />
      <div className="donetaion_info">
        <p>
          Education is the passport to the future for tomorrow belongs to those
          who prepare for it today
        </p>
        <h3>{name}</h3>
        <h4>{teacher}</h4>
      </div>
    </div>
  );
};

export default Donar;

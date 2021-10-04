import React from "react";

const Point = ({ st, info }) => {
  return (
    <>
      <div className="point">
        <h1>{st}</h1>
        <h4>{info}</h4>
      </div>
    </>
  );
};

export default Point;

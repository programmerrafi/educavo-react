import React from "react";

const Events = ({ num }) => {
  return (
    <div className="single_category_info">
      <div className="category_date">
        <h3>June</h3>
        <h1>{num}</h1>
      </div>
      <div className="category_info">
        <h4>Math & English</h4>
        <h2>Educational Technology and Mobile Accessories Learning</h2>
      </div>
    </div>
  );
};

export default Events;

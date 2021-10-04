import React from "react";
import "./DegreeSec.css";
import EducavoCard from "./DegreeCard/EducavoCard";

const DegreeSec = () => {
  return (
    <section className="degree_section">
      <div className="container">
        <div className="educavo-student-head">
          <div className="edcavo-student-info">
            <h2>DEGREE CATEGORIS</h2>
            <h1>Successfully Complete A Degree at Educavo University</h1>
          </div>
          <EducavoCard title="Undergraduate" img="images/5-degree/1.jpg" />
          <EducavoCard title="Postgraduate" img="images/5-degree/2.jpg" />
          <EducavoCard title="PHD Scholarships" img="images/5-degree/3.jpg" />
          <EducavoCard title="International Hubs" img="images/5-degree/4.jpg" />
          <EducavoCard title="PHD Scholarships" img="images/5-degree/5.jpg" />
        </div>
      </div>
    </section>
  );
};

export default DegreeSec;

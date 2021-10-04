import React from "react";
import { serviced } from "../../../Data/Service/servicedata";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <section className="service_section">
      <div className="service_head">
        {serviced.map((srvice) => {
          return (
            <div className="service_item" key={srvice.id}>
              <img src={srvice.url} alt="service" />
              <div className="service_info">
                {srvice.icon}
                <h2>{srvice.text}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;

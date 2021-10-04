import React from "react";
import Events from "./Event/Events";
import "./LetesEvent.css";

const LetesEvent = () => {
  return (
    <section className="letest_event">
      <div className="container">
        <div className="letest_event_wrapper">
          <div className="event_info_img">
            <div className="event_info">
              <h2>LATEST EVENTS</h2>
              <h1>Educavo Events</h1>
            </div>
            <img src="images/7-events/single.jpg" alt="event-img" />
          </div>

          <div className="event_category">
            <Events num="20" />
            <Events num="21" />
            <Events num="22" />
            <h2>VIEW ALL EVENTS</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetesEvent;

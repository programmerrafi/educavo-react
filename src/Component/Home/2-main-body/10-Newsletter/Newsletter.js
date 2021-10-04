import React from "react";
import "./Newsletter.css";
import { Button } from "@mui/material";

const Newsletter = () => {
  return (
    <section className="newsletter_section">
      <div className="container">
        <div className="newsletter_wrapper">
          <img src="images/11-bgnewsL/newsletter-bg.jpg" alt="bg-img" />
          <div className="newesletter_flex">
            <div className="newsletter_info">
              <h2>NEWSLETTER</h2>
              <h1>
                Subscribe Us to join <br /> Our Community
              </h1>
            </div>
            <div className="newsletter_input">
              <input type="text" placeholder="Enter Your Email" required />
              <Button variant="contained">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

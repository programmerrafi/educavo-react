import React from "react";
import "./Testmonial.css";
import { Button } from "@mui/material";
import Donar from "./Donaar/Donar";

const Testmonial = () => {
  return (
    <section className="testmonial_section">
      <div className="container">
        <div className="testmonial_wrapper">
          <div className="testmonial_donor">
            <img src="images/9-donetion/1.jpg" alt="donar" />
            <h1>Donation helps us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed
              eius to mod tempors incididunt ut labore et dolore magna this
              aliqua enims ad minim.
            </p>
            <div className="btn">
              <Button variant="contained">BECOME A DONOR</Button>
            </div>
          </div>

          <div className="tesmonial_donation">
            <Donar
              img="images/9-donetion/1 (1).jpg"
              name="Mahadi mansura"
              teacher="Head Teacher"
            />
            <Donar
              img="images/9-donetion/2.jpg"
              name="Jonathon Lary"
              teacher="Math Teacher"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;

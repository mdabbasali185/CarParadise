import React from "react";
import MercedesBenz from "../image/marcedesBenz.png";
import "./About.css";

const About = () => {
  return (
    <div className="row container mt-3 align-items-center">
      <h1 className="text-secondary">About</h1>
      <div className="car col-lg-6 col-md-5">
        <p className="fw-bold">
          Mercedes-Benz Classic Store. Store. Parts search. Mercedes-Benz
          Classic Online Store. You will be redirected to an external website.
          Museumsshop. AMG-Collection-Shop. Host Event. Cap for windshield
          washer container.
        </p>
      </div>
      <div className="col-lg-6 col-md-7">
        <img className="img-fluid car" src={MercedesBenz} alt="" />
      </div>
    </div>
  );
};

export default About;

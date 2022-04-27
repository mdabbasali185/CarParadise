import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mercedes from "../image/Mercedes.png";
import useCard from "../Card/Card";

import "./Home.css";
import Review from "../Review/Review";
const Home = () => {
  const [card, setCard] = useCard();
  return (
    <main>
      <div className="row container mt-3 align-items-center">
        <div className="car col-lg-6 col-md-5">
          <img className="img-fluid" src={Mercedes} alt="Mercedes" />
        </div>
        <div className="col-lg-6 col-md-7">
          <h1 className="text-secondary fw-bold">
            <span className="text-success fst-italic">Mercedes</span>
            -AMG-GT-Roadster
          </h1>
          <h2 className="text-secondary fw-bold">Your best Car</h2>
          <p className="mb-4 mt-3">
            The Mercedes-Benz V-Class combines comfort and luxury on a large
            scale. GUARD: Special protection version of the new S-Class. Unique
            integrated concept meets highest protection level for civilian
            vehicles. The new S 680 GUARD 4MATIC.
          </p>
          <Link to="/" className="animated-button ">
            <span>Buy Now</span>
          </Link>
        </div>
      </div>
      <div className="container mb-5">
        <h1 className="text-center text-secondary fw-bold mt-5 animate-charcter">
          Customer Review {card.length}
        </h1>
        <div className="card-compo">
          {card.map(
            (item, index) => index < 3 && <Review key={index} product={item}></Review>
          )}
        </div>
        <div className=" d-flex justify-content-center"><Link className="reviewBtn" to="/review"> See more</Link></div>
      </div>
    </main>
  );
};

export default Home;

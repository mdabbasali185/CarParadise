import React from "react";
import "./Review.css";

const Review = (props) => {
  const { about, name, rating, picture } = props.product;
  return (
    <div className="p-4 user-card">
      <div className="text-center">
        <img className="user-img mb-3" src={picture} alt="" />
      </div>
      <div className="text-center">
        <h4>Name: {name}</h4>
        <p>{about}</p>
        <p className="fw-bold">Rating:{rating}</p>
      </div>
    </div>
  );
};

export default Review;

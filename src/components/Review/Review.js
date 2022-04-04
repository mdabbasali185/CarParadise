import React from "react";

const Review = (props) => {
  const { about, name, rating, picture } = props.product;
  return (
    <div className="">
      <img src={picture} alt="" />
      <div className="">
        <h4>Name: {name}</h4>
        <p>{about}</p>
        <p>
          <strong>Rating:</strong> {rating}
        </p>
      </div>
    </div>
  );
};

export default Review;

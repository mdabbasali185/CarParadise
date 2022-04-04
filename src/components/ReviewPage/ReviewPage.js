import React from "react";
import useCard from "../Card/Card";
import Review from "../Review/Review";

const ReviewPage = () => {
  const [card, setCard] = useCard();
  return (
    <div>
      {card.map((item) => (
        <Review product={item}></Review>
      ))}
    </div>
  );
};

export default ReviewPage;

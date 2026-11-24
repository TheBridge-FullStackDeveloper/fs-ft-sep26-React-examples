import React from "react";

const WishCard = ({ data }) => {
  return <article>
    <h4>{data.title}</h4>
    <p>{data.description}</p>

  </article>;
};

export default WishCard;

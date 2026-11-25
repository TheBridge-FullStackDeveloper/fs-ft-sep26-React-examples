import React from "react";

const StaffCard = ({ data }) => {
  const { name, url } = data
  return <article>
    <h5>{name}</h5>
    <a href={url}>URL</a>
  </article>;
};

export default StaffCard;

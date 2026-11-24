import React from "react";
import WishCard from "./WishCard"

const WishItems = ({ list }) => {

  const printList = () => list.map((item, index) => <WishCard key={index} data={item} />)

  return <div>
    <h3>Lista de deseos</h3>
    {printList()}
  </div>;
};

export default WishItems;

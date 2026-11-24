import Form from "./Form"
import WishItems from "./WishItems"
import { useState } from "react"


const WishList = () => {

  const [list, setList] = useState([]);

  const addItem = (newItem) => setList([...list, newItem]);


  return <div>

    <Form add={addItem} />
    <WishItems list={list} />

  </div>;
};

export default WishList;

import React from "react";
import { getBasketTotal, getTotalItems } from "../Reducer";
import { useStateValue } from "../StateProvider";

const SubTotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <span>Sub-Total: ${getBasketTotal(basket)}</span>
       <span>Total-items: {getTotalItems(basket)}</span>
    </div>
  );
};

export default SubTotal;

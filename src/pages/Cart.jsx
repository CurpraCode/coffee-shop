import React from "react";
import CartProduct from "../components/CartProduct";
import { useStateValue } from "../StateProvider";

const Cart = () => {
  const [{ basket }] = useStateValue();
  return (
    <div>
      {basket.map((item) => {
        return (
          <CartProduct
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default Cart;

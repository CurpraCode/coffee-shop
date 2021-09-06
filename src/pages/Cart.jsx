import React from "react";
import CartProduct from "../components/CartProduct";
import { useStateValue } from "../StateProvider";
import Header from "../components/Header"

const Cart = () => {
  const [{ basket }] = useStateValue();
  return (
    <div>
        <Header/>
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

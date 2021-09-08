import React from "react";
import CartProduct from "../components/CartProduct";
import { useStateValue } from "../StateProvider";
import Header from "../components/Header";
import SubTotal from "../components/SubTotal";

const Cart = () => {
  const [{ basket }] = useStateValue();
  return (
    <div>
      <Header />
      {basket.map((item) => {
        return (
          <CartProduct
            id={item.id}
            quantity={item.quantity}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            discount={item.discount}
            originalPrice={item.originalPrice}
          />
        );
      })}
      <SubTotal />
    </div>
  );
};

export default Cart;

import React from "react";
import CartProduct from "../components/CartProduct";
import { useStateValue } from "../StateProvider";
import Header from "../components/Header";
import SubTotal from "../components/SubTotal";
import styled from "styled-components"

const Cart = () => {
  const [{ basket }] = useStateValue();
  return (
    <div>
      <Header />
      <Dis>
        <div>
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
      </div>
      <SubTotal />
      </Dis>

    </div>
  );
};

export default Cart;

const Dis =styled.div`
display:flex;
justify-content:space-evenly;
flex-flow: wrap;
`
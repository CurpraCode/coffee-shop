import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

const CartProduct = ({
  id,
  title,
  image,
  price,
  discount,
  description,
  originalPrice,
  quantity,
}) => {
  const [{ }, dispatch] = useStateValue();

  const plusQuantity = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
      },
    });
  };

  const minusQuantity = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Card>
      <InnerBox>
        <Dis>
          <div>
            <img src={image} alt="item" />
          </div>
          <div className="detail-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="dis-flex">
              <h4>${(price * quantity)}</h4>
           { (
             discount
           ) && <small>
              <del>${(originalPrice * quantity)}</del>
            </small>}
        
            </div>
            <div className="cartItem__buttons">
            <button onClick={minusQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={plusQuantity}>+</button>
          </div>
          </div>
        </Dis>
        <button onClick={removeFromBasket}>REMOVE TO CART</button>
      </InnerBox>
    </Card>
  );
};

export default CartProduct;
const Card = styled.div`
  margin: 1rem;
`;

const InnerBox = styled.div`
  border: 1px solid rgba(67, 172, 247, 0.96);
  margin: 1rem;
  flex: 1;
  border-radius: 2rem;
  border-radius: 12.8028px;
  background-color: ${(props) => props.theme.cardColor};
  box-shadow: ${(props) => props.theme.cardShadow};
  text-align: center;
  padding: 0.5rem 0.5rem;
  max-width: 400px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 160px;
    border-radius: 1rem;
  }
  .detail-card {
    padding: 0rem 1rem;
    text-align: center;
  }
  button {
    border: 0px;
    background-color: rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    padding: 0.99rem 1.2rem;
    color: white;
    border-radius: 2rem;
    margin-bottom: 1rem;
    font-family: "Space Grotesk", sans-serif;
  }
  a {
    text-decoration: none;
  }
  p {
    font-family: "Space Grotesk", sans-serif;
    font-size: 0.95rem;
    /* line-height: 1rem; */
  }
  h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .dis-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    del {
      color: red;
      margin-left: 1rem;
    }
  }
`;

const Dis = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

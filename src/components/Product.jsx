import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

const Product = ({ title, image, discount, price, description }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: 1,
        title: title,
        image: image,
        price: price,
        description: description,
        discount: discount,
      },
    });
  };
  return (
    <div>
      <InnerBox>
        <div>
          <img src={image} alt="items" />
        </div>
        <div className="detail-card">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <p>{price}</p>
        <button onClick={addToBasket}>ADD TO CART</button>
      </InnerBox>
    </div>
  );
};

export default Product;

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
/* width:100%; */
  img {
    width: 100%;
    height: 260px;
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
`;

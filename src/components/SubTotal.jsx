import React from "react";
import { getBasketTotal, getTotalItems } from "../Reducer";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import {Link} from "react-router-dom"

const SubTotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <Check>
      <h4>Checkout</h4>
      <p>Sub-Total: ${getBasketTotal(basket)}</p>
       <p>Total-items: {getTotalItems(basket)}</p>
       <div className="buttons">
              <Link to="/payment">
                <button className="buttonPrimary">Proceed to Payment</button>
              </Link>
            </div>
    </Check>
  );
};

export default SubTotal;

const Check = styled.div`
 background: #fff;
  margin-left: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(26, 26, 44, 0.05);
  align-self: flex-start;
  padding: 2rem;
  /* width:50%; */
  h4{
    font-size:1.5rem;
    margin-bottom: 3rem;
  }
  .buttons{
    margin-top:1rem;
  }
  button {
    border: 0px;
    background-color: rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    padding: 0.69rem 0.9rem;
    color: white;
    border-radius: 2rem;
    margin-bottom: 1rem;
    font-family: "Space Grotesk", sans-serif;
  }
  `
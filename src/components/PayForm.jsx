import React from "react";
import styled from "styled-components";
import { getBasketTotal } from "../Reducer";
import { useStateValue } from "../StateProvider";

const PayForm = () => {
  const [{basket}] = useStateValue();
  return (
    <Container>
      <h2>Payment Page</h2>
      <Form action="">
        <input type="text" placeholder="Full Name" required /> <br />
        <input type="email" placeholder="Email" required /> <br />
        <input type="text" placeholder="Home Address" /> <br />
        <h4>Card details</h4>
        <input type="text" placeholder="Card Name" required /> <br />
        <input type="number" placeholder="Card Number" required /> <br />
        <button>Pay ${getBasketTotal(basket)}</button>
      </Form>
    </Container>
  );
};

export default PayForm;

const Container = styled.div`
  /* max-width: 380px; */
  /* margin: 0 auto; */
  width: 100%;
  h2 {
    text-align: center;
  }
`;
const Form = styled.form`
width: 100%;
max-width: 480px;
margin: 0 auto;
  input {
    width: 100%;
    margin: 1rem;
    border: 0px;
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: 0 0.25rem 0.5rem rgba(26, 26, 44, 0.05);
    padding: 1rem 1.9rem;
    :focus {
      outline: none;
    }
  }
  h4{
      text-align:center;
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
    :focus {
      outline: none;
    }
  }
`;

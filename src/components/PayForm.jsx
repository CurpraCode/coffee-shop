import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getBasketTotal } from "../Reducer";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

const PayForm = () => {
  const [{ basket }] = useStateValue();
  // const [loading, setLoading] = useState(true);
  // useEffect(()=>{
  //   setTimeout(()=> setLoading(false), 2000)
  // }, [])
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/message")
  };

  return (
    <Container>
      <h2>Payment Page</h2>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required />{" "}
        <br />
        <input type="email" name="email" placeholder="Email" required /> <br />
        <input type="text" name="address" placeholder="Home Address" /> <br />
        <input type="text" name="name" placeholder="Card Name" required />{" "}
        <br />
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          required
        />{" "}
        <br />
        <div>
          <button type="submit" value="submit" >
            Pay ${getBasketTotal(basket)}
          </button>
        </div>
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
    width: 80%;
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
  h4 {
    text-align: center;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border: 0px;
    background-color: rgba(67, 172, 247, 0.96);
    box-shadow: 0 18.2571px 21.6157px -15.9059px #3189f4;
    padding: 0.69rem 0.9rem;
    color: white;
    border-radius: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    font-family: "Space Grotesk", sans-serif;
    :focus {
      outline: none;
    }
  }
`;

import React from "react";
import styled from "styled-components"


export const Confirmation = React.forwardRef((props, ref) =>
(
    <Center ref={ref}>
         <h2>CoffeeShop</h2>
      <div>
        <h3>Payment Successful</h3>
        <h4>Your Order Will Be Ready Soon</h4>
      </div>
    </Center>
  ));

  const Center = styled.div`
   max-width: 380px;
  margin: 0 auto;
  margin-bottom:2rem;
  margin-top: 5rem;
  border-radius: 2rem;
  border-radius: 12.8028px;
  background-color: #fff;
  box-shadow: 0 0.25rem 0.5rem rgba(26, 26, 44, 0.05);
  text-align: center;
  padding: 0.5rem 0.5rem;`




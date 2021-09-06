import React from "react";
import cart from "../assets/cart.svg";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [{ basket }] = useStateValue();

  return (
    <Bg>
      <NavBar>
        <Link to="/">
          <h1>CoffeeShop</h1>
        </Link>

        <Nav>
          <p>Order</p>
          <div>
            <Link to="/cart">
              <span>{basket?.length}</span>
              <img src={cart} alt="cart" />
            </Link>
          </div>
        </Nav>
      </NavBar>
    </Bg>
  );
};

export default Header;

const Bg = styled.div`
   background-color: pink;
   margin-bottom: 3rem
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1240px;
  height: 70px;
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media screen and (max-width: 590px) {
    margin-left: 20px !important;
    margin-right: 70px !important;
  }
  @media screen and (max-width: 840px) {
    margin-left: 70px;
    margin-right: 70px;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-right: 20px;
  }
  div {
    position: relative;
  }
  span {
    background-color: red;
    position: absolute;
    top: -7px;
    left: 18px;
    color: white;
    text-decoration: none;
    padding: 0.02rem 0.25rem;
    border-radius: 5rem;
  }
`;

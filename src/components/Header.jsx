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
          <h2>CoffeeShop</h2>
        </Link>

        <Nav>
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
  background-color: #fff;
  box-shadow: 0 0.25rem 0.5rem rgba(26, 26, 44, 0.05);
  margin-bottom: 3rem;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1240px;
  height: 70px;
  a {
    text-decoration: none;
    color:rgba(67, 172, 247, 0.941);
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
    background-color: rgba(67, 172, 247, 0.96);
    position: absolute;
    top: -7px;
    left: 18px;
    color: white;
    text-decoration: none;
    padding: 0.02rem 0.35rem;
    border-radius: 10rem;
  }
`;

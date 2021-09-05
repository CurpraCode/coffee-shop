import React from "react";
import cart from "../assets/cart.svg";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <div>
        <h1>CoffeShop</h1>
        <div>
          <p>Order</p>
          <div>
            <Link to="/cart">
              <span>{basket?.length}</span>
              <img src={cart} alt="cart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

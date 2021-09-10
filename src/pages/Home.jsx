import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Product from "../components/Product";
import cappucino from "../assets/cappucino.jpg";
import bread from "../assets/bread.jpg";
import juice from "../assets/juice.jpg";
import expresso from "../assets/expresso.jpg";
import pizza from "../assets/pizza.jpg";
import strawberry from "../assets/strawberry.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <Box>
        <Product
          id="1"
          quantity={1}
          title="Fresh Cappucino"
          image={cappucino}
          description="Hot fresh Cappucino served well"
          price={28}
        />
        <Product
          id="2"
          quantity={1}
          title="Baked Bread"
          image={bread}
          description="Freash Bread for your breakfast"
          originalPrice={15}
          discount={14.25}
          price={14.25}
          status="5%"
        />
        <Product
          id="3"
          quantity={1}
          title="Fresh Expresso"
          image={expresso}
          description="Hot fresh Expresso for your day"
          price={26}
        />
      </Box>
      <Box>
        <Product
          id="4"
          quantity={1}
          title="Fresh Juice"
          image={juice}
          description="Cool and Cold Juice for your taste"
          originalPrice={20}
          discount={19.4}
          price={19.4}
          status="3%"
        />
        <Product
          id="5"
          quantity={1}
          title="Cheesy Pizza"
          image={pizza}
          description="Yummy pizza at your reach now"
          originalPrice={25}
          discount={24.5}
          price={24.5}
          status="2%"
        />
        <Product
          id="6"
          quantity={1}
          title="Fresh Expresso"
          image={strawberry}
          description="Hot fresh Expresso for your day"
          price={30}
        />
      </Box>
    </div>
  );
};

export default Home;

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 999px) {
    flex-flow: wrap;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
  }
`;

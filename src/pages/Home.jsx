import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Product from "../components/Product";
import cappucino from "../assets/cappucino.jpg";
import bread from "../assets/bread.jpg";
import juice from "../assets/juice.jpg";
import expresso from "../assets/expresso.jpg";
import pizza from "../assets/pizza.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <Box>
        <Product
          title="Fresh Cappucino"
          image={cappucino}
          description="Hot fresh Cappucino served well"
          price="$20"
          status="discount"
        />
        <Product
          title="Baked Bread"
          image={bread}
          description="Freash Bread for your breakfast"
          price="$15"
          status="actual price"
        />
         <Product
          title="Fresh Expresso"
          image={expresso}
          description="Hot fresh Expresso for your day"
          price="$10"
          status="free"
        />
      </Box>
      <Box>
        <Product
          title="Fresh Juice"
          image={juice}
          description="Cool and Cold Juice for your taste"
          price="$25"
          status="actual price"
        />
        <Product
          title="Baked Bread"
          image={pizza}
          description="Yummy pizza at your reach now"
          price="$30"
          status="discount"
        />
         <Product
          title="Fresh Expresso"
          image={expresso}
          description="Hot fresh Expresso for your day"
          price="$10"
          status="free"
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
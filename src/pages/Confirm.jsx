import React, { useRef, useState, useEffect } from "react";
import { Confirmation } from "../components/Confirmation";
import { useReactToPrint } from "react-to-print";
import Spinner from "../components/Spinner";
import styled from "styled-components";

const Confirm = () => {
  const componentRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      {loading === false ? (
        <Container>
         
          <Confirmation ref={componentRef} />
          <button onClick={handlePrint}>Print Message</button>
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Confirm;

const Container = styled.div`
  max-width: 580px;
  margin: 0 auto;
  margin-top: 5rem;
  border-radius: 2rem;
  border-radius: 12.8028px;
  background-color: #fff;
  box-shadow: 0 0.25rem 0.5rem rgba(26, 26, 44, 0.05);
  text-align: center;
  padding: 0.5rem 0.5rem;
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
  
`;

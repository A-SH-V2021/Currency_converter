import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Converter from "./Converter";
const baseURL = "http://api.exchangeratesapi.io/v1/latest";
const accessKey = process.env.REACT_APP_ACCESS_KEY;
const App = () => {
  const [rates, setRates] = useState([]);
  const fetchData = () => {
    const URL = `${baseURL}?access_key=${accessKey}`;
     fetch(URL)
      .then((res) => res.json())
      .then((data) => setRates([data.base, ...Object.keys(data.rates)]));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Wrapper>
      <h1>convert</h1>
      <div className="conver">
        <Converter currency={rates} />
        =
        <Converter currency={rates}/>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  height: 100vh;
  text-transform: capitalize;
  h1 {
    color: #ced345;
    margin-bottom: 0.8rem;
  }
  .conver {
    width: 80%;
    text-align: center;
    color: white;
  }
`;
export default App;

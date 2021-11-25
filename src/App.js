import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Converter from "./Converter";
const baseURL = "http://api.exchangeratesapi.io/v1/latest";
const accessKey = process.env.REACT_APP_ACCESS_KEY;
const App = () => {
  const [rates, setRates] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);

  let fromAmount, toAmount;
  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }
  const fetchData = () => {
    const URL = `${baseURL}?access_key=${accessKey}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setRates([...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  };
  const changeFromHandler = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(true);
  };
  const changeToHandler = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Wrapper>
      <h1>convert</h1>
      <div className="conver">
        <Converter
          currency={rates}
          amount={fromAmount}
          selectedCurrency={fromCurrency}
          changeHandler={(e) => setFromCurrency(e.target.value)}
          onChangeHandle={changeFromHandler}
        />
        =
        <Converter
          currency={rates}
          amount={toAmount}
          selectedCurrency={toCurrency}
          changeHandler={(e) => setToCurrency(e.target.value)}
          onChangeHandle={changeToHandler}
        />
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

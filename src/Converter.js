import React from "react";
import styled from "styled-components";
const Converter = (props) => {
  const {currency} = props
  
  return (
    <Wrapper>
      <input type="number" />
      <select>
        {currency.map(item =>(
           <option value={item}>{item}</option>
        ))}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  input,
  select {
    padding: 0.7rem 0.3rem;
    border-radius: 0.5rem;
  }
  input {
    outline: none;
    margin-right: 0.2rem;
  }
`;
export default Converter;

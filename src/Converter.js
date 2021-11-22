import React from "react";
import styled from "styled-components";
const Converter = () => {
  return (
    <Wrapper>
      <input type="number" />
      <select>
        <option value="hi">hi</option>
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

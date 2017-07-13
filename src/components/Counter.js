import React from "react";
import styled from "styled-components";

const CounterDiv = styled.div`
  font-family: Arial;
  font-size: 22pt;
  color: ${props => props.count < 0 ? 'red' : 'green'};
`;

const Counter = ({ count }) =>
  <CounterDiv count={count}>
    {count}
  </CounterDiv>;

export default Counter;

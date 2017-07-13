import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement } from "./actions/counterActions";

import "./App.css";
import Counter from "./components/Counter";
import Plus from "./components/Plus";
import Minus from "./components/Minus";

import styled from "styled-components"

const Wrapper = styled.div`
  border: 2px solid blue;
  background-color: palevioletred;
  padding: 20px;
`;

const App = ({ count, decrement, increment }) =>
  <Wrapper className="App">
    <Plus decrement={decrement} />
    <Counter count={count} />
    <Minus increment={increment} />
  </Wrapper>;

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ decrement, increment }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

// For Testing, export unconnected Component
export { App };

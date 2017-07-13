import React from "react";
import { mount } from "enzyme";

import { App } from "./App";
import Plus from "./components/Plus";
import Minus from "./components/Minus"
import Counter from "./components/Counter";

import renderer from "react-test-renderer";

describe("App Component", () => {
  let wrapper;
  // this resets our component to a clean state before each test
  // ensuring that tests are not interefering with each other
  beforeEach(() => {
    wrapper = mount(<App count={0} />);
  });

  it("handles a click on Plus", () => {
    const spy = jest.fn(); //gibt einfach eine Funktion zurück, die benutzt werden kann
    wrapper.setProps({
      increment: spy
    });
    //console.log(wrapper.debug()); // anschauen, was die Component gerade gerendert hat
    wrapper.find(Plus).simulate("click");
    expect(spy).toBeCalled();
  });

  it("handles a click on Minus", () => {

    const spy = jest.fn();
    wrapper.setProps({
      decrement: spy
    });

    wrapper.find(Minus).simulate("click");
    expect(spy).toBeCalled();
  });

  it("renders all sub components correctly", () => {
    // render tree to JSON
    // expect snapshot to match
    const tree = renderer.create(<App count={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

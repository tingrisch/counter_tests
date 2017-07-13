import React from "react";
import Counter from "./Counter";
import renderer from "react-test-renderer";

describe("Counter", () => {
  it("renders without crashing", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays the correct count passed in props", () => {
    const tree = renderer.create(<Counter count={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

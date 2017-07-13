import * as types from "../constants/counterActionTypes";
import { increment, decrement } from "./counterActions";

describe("counter action creator", function() {
  it("creates the correct action increment", () => {
    const expected = {
      type: types.INCREMENT
    };

    expect(increment()).toEqual(expected);
  });

  it("creates the correct action decrement", () => {
    const expected = {
      type: types.DECREMENT
    };

    expect(decrement()).toEqual(expected);
  });
});

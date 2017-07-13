import * as types from "../constants/counterActionTypes";

const initialState = {
  count: 0
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        count: state.count + 1
      };

    case types.DECREMENT:
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
}

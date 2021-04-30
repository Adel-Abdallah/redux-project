import { createStore } from "redux";
const initState = { counter: 0 };
const counterReducer = (state = initState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};
const store = createStore(counterReducer);

export default store;

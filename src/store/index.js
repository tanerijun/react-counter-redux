import { legacy_createStore as createStore } from "redux";

const initialCounterState = {
  counter: 0,
};

const counterReducer = (state = initialCounterState, action) => {
  return state;
};

const store = createStore(counterReducer);

export default store;

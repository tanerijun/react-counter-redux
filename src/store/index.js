import { legacy_createStore as createStore } from "redux";

const initialCounterState = {
  counter: 0,
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "counter/inc":
      return { ...state, counter: state.counter + 1 };
    case "counter/dec":
      return { ...state, counter: state.counter - 1 };
    case "counter/incByN":
      return { ...state, counter: state.counter + action.payload };
    case "counter/decByN":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;

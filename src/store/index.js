import { createStore } from "redux";

const reducer = (state = { counter: 1000 }, action) => {
  //NUNCA MUTAR EL ESTADO ORIGINAL

  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "INCREMENTTEN") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

const store = createStore(reducer);
export default store;

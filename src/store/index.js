import { createStore } from "redux";

// step 1 create a reducer--------------------------------------------------
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "incrementBy5") {
    return {
      counter: state.counter + 5,
    };
  }

  if (action.type === "decrementBy5") {
    return {
      counter: state.counter - 5,
    };
  }

  return state;
};

//step 2 create a store  --->>>>  step 3 pass the reducer in the create store function
const store = createStore(counterReducer);

// step 3 is to connect this store to components so that they can dispatch actions and listen to store state values.
export default store;

import { createSlice, configureStore } from "@reduxjs/toolkit";

// step 1 create a reducer -------------------------------------------------- used createSlice to create a reducers of 2 kind 
// 1: counter and 2: auth
// then we combine both reducers in one using configureStore ehich creates a store for both reducers actions and initial states.

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//step 2 create a store  --->>>>  step 3 pass the reducer in the configureStore function as object
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// step 3 is to connect this store to components so that they can dispatch actions and listen to store state values.

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

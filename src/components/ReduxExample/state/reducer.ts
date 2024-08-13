import { createAction, createReducer } from "@reduxjs/toolkit";

export type CounterState = {
  value: number;
};

export const initialState: CounterState = {
  value: 0,
};

const ADD_ONE = "addOne";
const SUBTRACT_ONE = "subtractOne";
const ADD_NUMBER = "addNumber";
const RESET = "reset";

const addOne = createAction(ADD_ONE);
const subtractOne = createAction(SUBTRACT_ONE);
const addNumber = createAction<number>(ADD_NUMBER);
const reset = createAction(RESET);

export const actions = {
  addOne,
  subtractOne,
  addNumber,
  reset,
};

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addOne, (state) => {
        state.value += 1;
        })
        .addCase(subtractOne, (state) => {
        state.value -= 1;
        })
        .addCase(addNumber, (state, action) => {
        state.value += action.payload;
        })
        .addCase(reset, () => initialState);
    });
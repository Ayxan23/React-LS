import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1; //state icinde oldugu slice'i temsil edire
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state,action) =>{
      state.value+= action.payload
    }
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

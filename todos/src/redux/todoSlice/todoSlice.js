import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: uuid(),
        value: action.payload,
        isComplated: false,
      });
    },
    deleteTodo: (state, action) => {
      const target = state.items.find((item) => item.id === action.payload);
      const indexOfTarget = state.items.indexOf(target);
      state.items.splice(indexOfTarget, 1);
    },
    toggleIsComplated: (state, action) => {
      const target = state.items.find((item) => item.id === action.payload);
      target.isComplated = !target.isComplated;
    },
    clearComplated: (state) => {
      state.items = state.items.filter((item) => item.isComplated == false);
    },
  },
});

export const { addTodo, deleteTodo, toggleIsComplated, clearComplated } =
  todoSlice.actions;
export default todoSlice.reducer;

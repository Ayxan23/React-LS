import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counterSlice/counterSlice";

const Form = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispath = useDispatch();
  const inputRef = useRef();
  return (
    <div>
      <h1>Form</h1>
      <button
        onClick={() => {
          dispath(decrement());
        }}
      >
        -
      </button>
      <p>counter:{counter}</p>
      <button
        onClick={() => {
          dispath(increment());
        }}
      >
        +
      </button>
      <br />
      <input ref={inputRef} type="text" placeholder="enter ..." />
      <button
        onClick={() => {
          dispath(incrementByAmount(Number.parseInt(inputRef.current.value)));
        }}
      >
        Increament by amount
      </button>
    </div>
  );
};

export default Form;

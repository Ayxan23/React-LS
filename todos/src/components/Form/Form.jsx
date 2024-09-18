import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice/todoSlice";

const Form = () => {
  const inputRef = useRef();
  const dispath = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispath(addTodo(inputRef.current.value));
        inputRef.current.value = "";
      }}
    >
      <input
        ref={inputRef}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
};

export default Form;

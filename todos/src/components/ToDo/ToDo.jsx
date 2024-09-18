import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleIsComplated } from "../../redux/todoSlice/todoSlice";

const ToDo = ({ item }) => {
  const dispath = useDispatch();
  return (
    <li className={item.isComplated ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={() => {
            dispath(toggleIsComplated(item.id));
          }}
        />
        <label>{item.value}</label>
        <button
          className="destroy"
          onClick={() => {
            dispath(deleteTodo(item.id));
          }}
        ></button>
      </div>
    </li>
  );
};

export default ToDo;

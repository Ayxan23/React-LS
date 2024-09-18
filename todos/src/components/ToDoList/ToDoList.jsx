import React from "react";
import { useSelector } from "react-redux";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {/* <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn React</label>
            <button className="destroy"></button>
          </div>
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Have a life!</label>
            <button className="destroy"></button>
          </div>
        </li> */}
        {items.map((item, i) => {
          return <ToDo key={i} item={item}/>;
        })}
      </ul>
    </section>
  );
};

export default ToDoList;

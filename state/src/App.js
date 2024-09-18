import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  let counter = 0;

  const increase = () => {
    counter++;
    setState((prev) => (prev += 1));
    console.log("state:", state);
    console.log("counter:", counter);
  };
  const decrease = () => {
    counter--;
    setState((prev) => (prev -= 1));
    console.log("state:", state);
    console.log("counter:", counter);
  };

  const [todos, setTodos] = useState([]);
  const [inputVaule, setInputValue] = useState("");

  const [bools, setBool] = useState(false);
  
  return (
    <div className="App">
      <div>
        <button onClick={increase}>+</button>
        <div>
          counter: {counter} <br /> state: {state}
        </div>
        <button onClick={decrease}>-</button>
      </div>

      <input
        type="text"
        placeholder="todo"
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputVaule);
        }}
      />
      <button
        onClick={() => {
          //setTodos((prev) => [...prev, inputVaule]);
          setTodos([...todos, inputVaule]); //...arr - spret
        }}
      >
        Add ToDo
      </button>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}> {todo} </li>;
        })}
      </ul>

      <button onClick={() => setBool(!bools)}>bool: {bools.toString()}</button>
    </div>
  );
}

export default App;

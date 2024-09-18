import { useState } from "react";
import "./App.css";
import ClassComponent from "./component/ClassComponent";
import FunctionComponent from "./component/FunctionComponent";

function App() {
  const[visible,setVisible] = useState(true)
  return (
    <div className="App">
      <button onClick={()=>setVisible(!visible)}>Display</button>
      {visible ? <ClassComponent /> : ""}
      {visible ? <FunctionComponent /> : ""}
    </div>
  );
}

export default App;

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ToDoFooter from "./components/ToDoFooter/ToDoFooter";
import ToDoList from "./components/ToDoList/ToDoList";
import "./App.css";
import useToggle from "./hooks/useToggle";
import Component1 from "./components/Component1";

function App() {
  const [isOpen, changeStatus] = useToggle();
  return (
    <>
        <Component1/>
        <button onClick={()=>{
          changeStatus()
        }}>toggle</button>
        {isOpen ? <div style={{ width: "100px", height: "100px", border: "1px solid black" }}></div> : ""}
      <section className="todoapp">
        <Header />
        <ToDoList />
        <ToDoFooter />
      </section>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";

import BasicCard from "./components/MaterialUi/BasicCard";
import { DatePicker } from "antd";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Footer />

      <BasicCard />
      <DatePicker/>
    </div>
  );
}

export default App;

import { useSelector } from "react-redux";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const counter = useSelector((state) => state.counter.value);
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

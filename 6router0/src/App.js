import "./App.css";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Joke from "./pages/Joke/Joke";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/norris" element={<Joke />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

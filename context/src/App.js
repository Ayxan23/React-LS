import { useState } from "react";
import MainContext from "./context/MainContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./components/Basket";

function App() {
  /* const [counter, setCounter] = useState(0);

     const data = {
       counter,
       setCounter,
  }; */

  const products = [
    {
      id: 1,
      name: "Asus Rog Strix G15",
      price: 2500,
      image:
        "https://amazoncomp.az/wp-content/uploads/2022/04/ASUS-ROG-Strix-G15-G513IM-HN057-90NR0522-M00940-3.png",
    },
    {
      id: 2,
      name: "MSI Katana",
      price: 2000,
      image:
        "https://strgimgr.umico.az/sized/840/723281-1579a68a2dd8248fc19140835533c3e6.jpg",
    },
    {
      id: 3,
      name: "Acer Nitro 5",
      price: 1500,
      image:
        "https://media.wired.com/photos/632500d9eecde8c117e7f429/master/w_1600%2Cc_limit/Acer-Nitro-5-Gaming-Laptop-Front-Gear.jpg",
    },
    {
      id: 4,
      name: "Macbook Pro",
      price: 5000,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200",
    },
    {
      id: 5,
      name: "Macbook Air",
      price: 3500,
      image:
        "https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Air-13-Inch-56295.jpg",
    },
    {
      id: 6,
      name: "Lenovo Legion 5 pro",
      price: 1000,
      image:
        "https://bestel.az/storage/28701/conversions/media-libraryaWBCZJ-lg.jpg",
    },
  ];

  const [basketItems, setBasketItems] = useState([]);

  const data = {
    products,
    basketItems,
    setBasketItems,
  };

  return (
    <MainContext.Provider value={data}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;

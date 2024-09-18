import React, { useContext } from "react";
import MainContext from "../context/MainContext";

const Basket = () => {
  //   const products = JSON.parse(localStorage.getItem("basketItems"));
  const { basketItems, setBasketItems } = useContext(MainContext);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {basketItems.map((product, i) => {
            return (
              <div key={i} className="col-4 mb-5" >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    height={"200px"}
                    className="card-img-top"
                    src={product.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}$</p>
                  </div>
                  <button className="btn btn-danger" onClick={()=>{
                        setBasketItems([...basketItems.filter(basketItem=> basketItem.id !== product.id)])
                  }}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Basket;

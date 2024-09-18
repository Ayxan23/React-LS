import React, { useContext } from "react";
import MainContext from "../context/MainContext";
import Increase from "./Increase";

const List = () => {
  const { products, basketItems, setBasketItems } = useContext(MainContext);
  /*<div>List counter: {context.counter} <Increase/> </div>*/
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {products.map((product, i) => {
            return (
              <div key={i} className="col-4 mb-5">
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
                    <button className="btn btn-primary" onClick={()=>{
                      setBasketItems([...basketItems,product])
                    //  localStorage.setItem("basketItems", JSON.stringify(basketItems))
                    }}>Add to basket</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default List;

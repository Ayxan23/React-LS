import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&authuser=0";
    // axios.get(url).then((res) => {
    //   setData(res.data);
    //   setLoading(true);
    // });
  }, []);

  return (
    <table className="table table-sm table-dark">
      <thead>
        <tr>
          <th scope="col">Symbol</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Detail</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
          {/* <span className="sr-only">Loading...</span> */}
        </div>
        ) : (
          data.map((coin, i) => {
            return (
              <tr key={i}>
                <th scope="row">{coin.symbol}</th>
                <td>
                  <img style={{ width: "50px" }} src={coin.image} alt="" />
                </td>
                <td>{coin.name}</td>
                <td>{coin.current_price}</td>
                <td>
                  <Link className="btn btn-primary" to={`/products/${coin.id}`}>
                    Go Detail
                  </Link>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default Products;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    axios.get(url).then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h1>Product Detail</h1>
      <table class="table table-sm table-dark">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{data.symbol}</th>
            <td>
              <img style={{ width: "50px" }} src={data.image} alt="" />
            </td>
            <td>{data.name}</td>
            <td>{data.current_price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductDetail;

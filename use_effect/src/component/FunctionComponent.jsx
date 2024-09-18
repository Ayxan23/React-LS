import axios from "axios";
import React, { useEffect, useState } from "react";

const FunctionComponent = (props) => {
  const [counter, setCounter] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://northwind.vercel.app/api/categories";
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div>FunctionComponent</div>
      <button
        onClick={() => {
          setCounter((p) => p + 1);
        }}
      >
        increase
      </button>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter((p) => p - 1);
        }}
      >
        decrease
      </button>

      <ul>
        {data.map((item, i) => {
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default FunctionComponent;

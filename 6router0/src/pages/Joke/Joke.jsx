import React, { useEffect, useState } from "react";
import "./Joke.scss";
import axios from "axios";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const url = "https://api.chucknorris.io/jokes/random";
  useEffect(() => {
    axios.get(url).then((res) => setJoke(res.data.value));
  }, []);
  return (
    <div className="norris__card">
      <div className="norris__card__header">
        <img
          src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
          alt=""
        />
      </div>
      <div className="norris__card__body">
        <p>{joke}</p>
      </div>
      <div className="norris__card__footer">
        <button
          className="btn btn-warning"
          onClick={() => {
            axios.get(url).then((res) => setJoke(res.data.value));
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Joke;

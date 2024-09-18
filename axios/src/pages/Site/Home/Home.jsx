import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url).then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{ justifyContent: "space-between", gap: "15px" }}
        >
          {posts.map((post, i) => {
            return (
              <div key={i} className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <Link className="btn btn-primary" to={`/posts/${post.id}`}>Go Detail</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

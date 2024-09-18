import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Posts.scss";
import { toast, Toaster } from "react-hot-toast";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const url = "https://jsonplaceholder.typicode.com/posts";
  const url = "https://northwind.vercel.app/api/products";

  useEffect(() => {
    axios.get(url).then((res) => {
      setLoading(false);
      setPosts(res.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
        {/* <button
            className="btn btn-success"
            onClick={() => {
              const id = prompt("id");
              const name = prompt("name");
              const body = prompt("body");
              axios.post(url, { id, name, body }).then((res) => {
                console.log(res);
              });
            }}
          >
            Add
          </button> */}
          <Link to={`/admin/posts/add`}></Link>
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Detail</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <div
                  class="spinner-border text-dark spinner"
                  role="status"
                ></div>
              ) : (
                posts.map((post, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{post.id}</th>
                      <td>{post.name}</td>
                      <td>{post.quantityPerUnit}</td>
                      <td>
                        <Link className="btn btn-info" to={`${post.id}`}>
                          Detail
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-light"
                          onClick={() => {
                            const name = prompt("name");
                            const quantityPerUnit = prompt("quantityPerUnit");
                            /* old:{...post, body: body, title: title}*/
                            axios
                              .put(`${url}/${post.id}`, {
                                ...post,
                                name,
                                quantityPerUnit,
                              })
                              .then((res) => {
                                console.log(res);
                              });
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            axios.delete(`${url}/${post.id}`).then((res) => {
                              toast.success("item deleted");
                            });
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default Post;

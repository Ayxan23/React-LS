import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const url = "https://northwind.vercel.app/api/products";
  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        if (err) {
          navigate("/admin/posts");
        }
      });
  }, []);

  // Admin
  return (
    <div className="container">
      <div className="row">
        id: {post.id} <br /> name: {post.name}
      </div>
    </div>
  );
};

export default PostDetail;

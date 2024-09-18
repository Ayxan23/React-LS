import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios.get(`${url}/${id}`).then((res) => setPost(res.data));
  }, [post]);

  return (
    <div className="container">
      <div className="row">
        id: {post.id} <br /> title: {post.title}
      </div>
    </div>
  );
};

export default PostDetail;

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ArticlesDetail() {
  const [article, setArticle] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setArticle(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <div>
      <h1 className="text-amber-900 font-bold text-lg">{article.title}</h1>
      <p className="text-gray-700">{article.body}</p>
    </div>
  );
}

export default ArticlesDetail;

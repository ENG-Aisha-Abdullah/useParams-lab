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
    <div className=" bg-gray-200 p-4 h-screen flex items-center justify-center">
    <div className="flex flex-col bg-white p-4 mb-4 rounded shadow  w-[80%] mx-auto ">
      <h1 className="text-amber-900 font-bold text-lg">
        {article.title}
        </h1>
      <p className="text-gray-700 pt-5">{article.body}</p>
    </div>
    </div>
  );
}

export default ArticlesDetail;

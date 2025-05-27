import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router';

function ArticlesDetail() {
    const [article, setArticle] = useState("");
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setArticle(data));
    }, [id]);
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-700">{article.body}</p>
        

    </div>
  )
}

export default ArticlesDetail;
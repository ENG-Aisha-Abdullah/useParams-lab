import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" bg-gray-200 p-4">
      {articles.map((article) => (
        <div key={article.id} className="flex flex-col bg-white p-4 mb-4 rounded shadow text-center w-[80%] mx-auto">
          <Link to={`/articlesDetail/${article.id}`}>
            <h2 className="text-amber-900 font-bold text-lg">
              {article.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;

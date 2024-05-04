import "./Articles.css";
import { Route, Routes } from "react-router-dom";

function Articles(article) {

  return (
    <div>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        {article.description ? (
            <p>{article.description}</p>
        ):(
            <p>No description</p>
        )}
    </div>
  );
}

export default Articles;

import "./Home.css";
import { useState, useEffect } from "react";
import Articles from "../Articles/Articales";
import { getArticles } from "../../fetchCalls";

function Home({ apiKey, setArticle }) {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getArticles(apiKey)
      .then((fetchArticles) => {
        if (fetchArticles) {
          setArticles(fetchArticles.articles);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey]);

  function filterArticles() {
    if (!search) {
      return articles;
    } else {
      return articles.filter((article) => {
        if (article && article.title && article.author) {
          return (
            article.title.toLowerCase().includes(search.toLowerCase()) ||
            article.author.toLowerCase().includes(search.toLowerCase())
          );
        }
      });
    }
  }

  return (
    <>
      <h1>News</h1>
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <li className="article-container">
      {filterArticles().map((article, index) => (
        <Articles key={index} article={article} setArticle={setArticle} />
      ))}
      </li>
    </>
  );
}

export default Home;

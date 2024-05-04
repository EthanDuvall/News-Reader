import "./Home.css";
import { useState, useEffect} from "react";
//  import { Route, Routes } from "react-router-dom";
import Articles from "../Articles/Articales";
import {getArticles} from "../../fetchCalls"

function Home({apiKey}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(getArticles(apiKey));
  }, [apiKey]);

  function displayArticles() {
    if (articles) {
      return articles.map((article) => {
        return <Articles article={article} />;
      });
    }
  }
  return (
    <>
      <h1>home!</h1>
      {displayArticles()}
    </>
  );
}

export default Home;

import "./Articles.css";
import { useNavigate } from "react-router-dom";

function Articles({ article, setArticle }) {
  const Navigate = useNavigate();

  function showDetails(e) {
    setArticle(article);
    Navigate(`/details/${article.publishedAt}`);
  }

  return (
    <div className="article">
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <p>{article.publishedAt}</p>
      {article.description ? (
        <p>{article.description}</p>
      ) : (
        <p>No description</p>
      )}
       <img src={article.urlToImage} alt="Article Thumbnail" />
        <button className="details-button" onClick={(e) => showDetails(e)}>
          Details
        </button>
    
     
    </div>
  );
}

export default Articles;
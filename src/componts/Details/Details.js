import { Link } from "react-router-dom";

function Details({ article }) {
  return (
    <div className="details-container">
      <div className="details-content">
        <h2>{article.title}</h2>
        <h3>By: {article.author}</h3>
        <p>{article.publishedAt}</p>
        <p>Source: {article.source.name}</p>
        <p>{article.content}</p>
      </div>
      <Link to={article.url}>Read More</Link>

      <div className="details-image">
        <img src={article.urlToImage} alt={article.title} />
      </div>
    </div>
  );
}

export default Details;

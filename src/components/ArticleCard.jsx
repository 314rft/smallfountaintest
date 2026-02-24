import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <Link to={`/article/${article.id}`}>
        <h2>{article.title}</h2>
      </Link>
      <p>{article.content.substring(0, 120)}...</p>
      <small>
        {article.createdAt?.toDate().toLocaleDateString()}
      </small>
    </div>
  );
}
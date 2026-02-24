import Layout from "../components/Layout";
import ArticleCard from "../components/ArticleCard";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Impact() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const q = query(collection(db, "impactNews"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      setArticles(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));
    };

    fetchArticles();
  }, []);

  return (
    <Layout>
      <header>
        <h1>News about AI's impact!</h1>
      </header>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Layout>
  );
}


/*
export default function Impact() {
  return (
    <Layout>
      <header>
        <h1>News about AI's impact!</h1>
      </header>
      <p>Stay updated on the real world impact of AI! It's not a fad, it's the future; and that's why you've chosen the right side of history.</p>
    </Layout>
  );
}
*/

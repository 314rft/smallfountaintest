import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, "impactNews", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle(docSnap.data());
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return (
    <Layout>
      <p>Loading article...</p>;
    </Layout>
  )

  return (
    <Layout>
      <header>
        <h1>{article.title}</h1>
      </header>
      <h5>{article.author}</h5>
      <p>{article.content}</p>
    </Layout>
  );
}
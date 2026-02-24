import Layout from "../components/Layout";
import ArticleForm from "../components/ArticleForm";
import { useState, useContext } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  //console.log("Current user:", getAuth().currentUser);

  if (user === null) {
    //return <p>Not logged in.</p>;
    return navigate("/admin");
  }

  const publishArticle = async (data) => {
    await addDoc(collection(db, "impactNews"), {
      ...data,
      createdAt: serverTimestamp()
    });

    alert("Article Published!");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin"); // redirect to login page
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Layout>
      <h3>Welcome {user.email}!</h3>
      <h1>Publish Article</h1>
      <ArticleForm onSubmit={publishArticle} />
      <br/>
      <button onClick={handleLogout}>Logout</button>
    </Layout>
  );
}
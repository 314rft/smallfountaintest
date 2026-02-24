import { useState } from "react";

export default function ArticleForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
  const [author, setAuthor] = useState(initialData.author || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, imageUrl, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="AI Wins yet again"
        required
      />

      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="SmallFountain"
        required
      />

      <textarea
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="https://minecraft.wiki/images/Far_Lands_Infdev_20100227-1433.jpg"
        //required
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Article Content"
        required
      />

      <button type="submit">Publish</button>
    </form>
  );
}
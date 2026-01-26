import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <header>
        <h1>The Success of Artificial Intelligence</h1>
        <p>How AI is transforming the world</p>
      </header>

      <div className="cards">
        <div className="card">
          <h3>🚀 Automation</h3>
          <p>AI automates repetitive tasks.</p>
        </div>
        <div className="card">
          <h3>📊 Intelligence</h3>
          <p>AI turns data into insights.</p>
        </div>
        <div className="card">
          <h3>🤝 Collaboration</h3>
          <p>AI enhances human creativity.</p>
        </div>
      </div>
    </Layout>
  );
}

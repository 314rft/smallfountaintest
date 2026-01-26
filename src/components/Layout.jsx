import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Breadcrumbs />
        {children}
      </main>
    </div>
  );
}

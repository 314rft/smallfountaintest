import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {path.map((item, index) => (
        <span key={index}>
          {" › "}
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </span>
      ))}
    </nav>
  );
}

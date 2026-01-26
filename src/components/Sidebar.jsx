import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>AI Success</h2>
      <NavLink to="/">🏠 Home</NavLink>
      <NavLink to="/impact">🌍 Impact</NavLink>
      <NavLink to="/future">🔮 Future</NavLink>
      <NavLink to="/about">ℹ️ About</NavLink>
    </aside>
  );
}

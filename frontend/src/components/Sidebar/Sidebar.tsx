import "./Sidebar.css";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">AIDOS</h2>

      <div className="nav-links">
        <Link to="/">🏠 Dashboard</Link>

        <Link to="/chat">💬 Chat</Link>

        <Link to="/files">📁 Files</Link>

        <Link to="/browser">🌐 Browser</Link>

        <Link to="/memory">🧠 Memory</Link>

        <Link to="/history">📝 History</Link>

        <Link to="/settings">⚙ Settings</Link>
      </div>
    </div>
  );
}
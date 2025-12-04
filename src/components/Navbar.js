import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">FitTrack</h2>
      <div className="nav-links">
        <Link to="/">🏠 בית</Link>
        <Link to="/form">📝 טופס יעד</Link>
        <Link to="/api">🌍 API</Link>
        <Link to="/register">👤 הרשמה</Link>
      </div>
    </nav>
  );
};

export default Navbar;


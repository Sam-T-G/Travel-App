import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        Logo Placeholder
      </Link>
      <ul className="navbar-menu">
        <li className="navbar-button">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-button">
          <Link to="/" className="navbar-link">
            About
          </Link>
        </li>
        <li className="navbar-button">
          <Link to="/" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

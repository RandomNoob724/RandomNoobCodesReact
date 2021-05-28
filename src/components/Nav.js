import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ title }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin Panel
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

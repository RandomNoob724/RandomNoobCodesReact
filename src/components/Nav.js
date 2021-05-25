import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ title }) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          {title}
        </Link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/admin">
              Admin Panel
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

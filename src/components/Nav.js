import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-dark">
          <Link class="navbar-brand" to="/">
            RandomNoobCodes
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
              <Link class="nav-link" to="/blog/0">
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
      </Router>
    </div>
  );
};

export default Nav;

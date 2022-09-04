import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsHunt
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ fontSize: "0.5rem" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <div className="container d-flex justify-content-between">
                <Link
                  style={{ fontSize: "0.8rem" }}
                  className="nav-link mx-1"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  style={{ fontSize: "0.8rem" }}
                  className="nav-link mx-1"
                  to="/business"
                >
                  Business
                </Link>
                <Link
                  style={{ fontSize: "0.8rem" }}
                  className="nav-link mx-1"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
                <Link
                  style={{ fontSize: "0.8rem" }}
                  className="nav-link mx-1"
                  to="/"
                >
                  General
                </Link>
                <Link
                  style={{ fontSize: "0.8rem" }}
                  className="nav-link mx-1"
                  to="/health"
                >
                  Health
                </Link>
                <Link
                  style={{ fontSize: "0.8rem" }}
                  className="nav-link mx-1"
                  to="/science"
                >
                  Science
                </Link>
                <Link
                  style={{ fontSize: "0.8rem" }}
                  className="nav-link mx-1"
                  to="/sports"
                >
                  Sports
                </Link>
                <Link
                  style={{ fontSize: "0.8rem" }}
                  className="nav-link mx-1"
                  to="/technology"
                >
                  Technology
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

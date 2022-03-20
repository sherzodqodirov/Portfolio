import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "./menu.css";
const Menu = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                 to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/worksPage'>
                  Works
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/blog'>
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to='#'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default Menu;

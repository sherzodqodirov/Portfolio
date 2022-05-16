import React from "react";
import { NavLink, Link } from "react-router-dom";
import useSound from "use-sound";
import click from "../../sounds/click.mp3";
import "./navbar.scss";


function Navbar() {
  const [play] = useSound(click);
  return (
    <nav className="navbar navbar-expand-lg " onContextMenu={(e)=> e.preventDefault()} >
      <div className="container">
        <Link onClick={play} to="/" className="navbar-brand">
          <h3>Developer</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink onClick={play} to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={play} to="features" className="nav-link">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={play} to="pricing" className="nav-link">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

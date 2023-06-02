import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Import the CSS file for styling

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://echio.in/assets/images/logo.png" alt="" />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/product">Campaign</Link>
      </div>
      <div className="icons">
        <Link to="#">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon={faBell} />
        </Link>
      </div>
    </div>
  );
}

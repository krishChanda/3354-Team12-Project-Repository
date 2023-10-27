import React from "react";
import logo from "../logo.svg";
import blank_profile from "/public/Blank_Profile.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="Navbar">
      <nav className="Navbar-header">
        <div className="Navbar-logo">
          <a href="/" rel="noreferrer">
            <img
              src={logo}
              alt="logo"
              placeholder="blur"
              width="auto"
              height="32px"
              style={{ objectFit: "object-fill" }}
            />
          </a>
        </div>
        <div className="Navbar-links">
          {/* blank for now, we might not have links but here is a template incase we do*/}
        </div>
        <div className="Navbar-profile">
          <a href="/" rel="noreferrer">
            <img
              src={blank_profile}
              alt="blank_profile"
              placeholder="blur"
              width="auto"
              height="32px"
              style={{ objectFit: "object-fill" }}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

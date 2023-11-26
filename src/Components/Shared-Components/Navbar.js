// Author: Hayden Bell

import React from "react";
import logo from "../../logo.svg";
import blank_profile from "/public/Blank_Profile.svg";
import Home from "../Home-Page/Home";
import ViewAccount from "../ViewAccount/ViewAccount";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="Navbar">
            <BrowserRouter>
                <nav className="Navbar-header">
                    <div className="Navbar-logo">
                        <NavLink to="/home">
                            {/* Adds the logo and styles it */}
                            <img
                                src={logo}
                                alt="logo"
                                placeholder="blur"
                                width="auto"
                                height="32px"
                                style={{ objectFit: "object-fill" }}
                            />
                        </NavLink>
                    </div>
                    <div className="Navbar-links">
                        {/* blank for now, we might not have links but here is a template incase we do*/}
                    </div>
                    <div className="Navbar-profile">
                        <NavLink to="/viewaccount">
                            {/* Adds the profile icon in the top right */}
                            <img
                                src={blank_profile}
                                alt="blank_profile"
                                placeholder="blur"
                                width="auto"
                                height="32px"
                                style={{ objectFit: "object-fill" }}
                            />
                        </NavLink>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route
                        exact
                        path="/viewaccount"
                        element={<ViewAccount />}
                    />
                </Routes>
            </BrowserRouter>
        </header>
    );
};

export default Navbar;

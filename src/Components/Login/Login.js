// Author: Saipravallika Akula
// Test Case 1: The system shall allow a user who has an account to log in
// Test Case 2: The system validates user credentials (email/password/confirm password) and warns user of any errors

// imports for react and firebase
import React from "react";
import "./Login.css";
import "../../globals.css";
import logo from "../../logo.svg";
import email_icon from "../../../public/icons/email_icon.svg";
import password_icon from "../../../public/icons/password_icon.svg";
import arrow_icon from "../../../public/icons/arrow_icon.svg";

import { useState } from "react"; // useState --> keeps track of user status (logged in or not logged in)
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // import authentication function
import { useNavigate, Link } from "react-router-dom"; // navigation import
import FormTextBox from "../Shared-Components/FormTextBox";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(); // Create User into Firebase Database
    const navigate = useNavigate(); // define nagivation function

    async function handleSignIn(e) {
        e.preventDefault();

        // API Call for creating a new user
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home");
        } catch (error) {
            // else there is an error in creating the account
            alert(error); // API call handels the error exception in this case
        }
    }

    return (
        <div className="Login">
            {/* Adds the logo at the top of the page */}
            <div className="Login-logo">
                <img
                    src={logo}
                    style={{ height: 66, width: 66 }}
                    alt="Reviewify Logo"
                />
            </div>

            {/* Adds header "Login" */}
            <h1 className="Login-title">Login</h1>

            {/* Adds sub-heading */}
            <h2 className="Login-subtitle">Please sign in to continue.</h2>

            {/* Adds textbox for the email */}

            <FormTextBox
                onChange={(e) => setEmail(e)}
                type="email"
                name="email"
                icon={email_icon}
                placeholder="EMAIL"
            />

            {/* Adds textbox for the password */}
            <FormTextBox
                onChange={(e) => setPassword(e)}
                type="password"
                name="password"
                icon={password_icon}
                placeholder="PASSWORD"
            />

            {/* This is the login button */}
            <button
                className="Login-button"
                onClick={(e) => {
                    handleSignIn(e);
                }}
            >
                <span className="Login-button-text"> LOGIN </span>
                {/* This adds the arrow icon to the right of the word "login" */}
                <img src={arrow_icon} alt="arrow icon" />
            </button>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* Adds the text at the bottom of the page */}
            <span className="Login-ptext"> Don't have an account? </span>
            {/* The words "Sign up" take you to the create account page */}
            <span className="Login-signup-text">
                {" "}
                <Link className="Link-color" to="/createaccount">
                    {" "}
                    Sign up
                </Link>{" "}
            </span>

            <br></br>
            <br></br>
        </div>
    );
}

export default Login;

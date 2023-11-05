import React from 'react';
import "./Login.css";
import logo from "../../logo.svg";

import { useState } from "react"; // useState --> keeps track of user status (logged in or not logged in)
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"; // import authentication function
import { useNavigate, Link } from "react-router-dom"; // navigation import

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth() // Create User into Firebase Database
    const navigate = useNavigate(); // define nagivation function

    async function handleSignIn(e){
        e.preventDefault();
    
        // API Call for creating a new user
        try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/home");
        }
       
        // else there is an error in creating the account
        catch(error) {
            alert(error); // API call handels the error exception in this case
        }
    }
        
        
    

  return (
    <div className="Login">
        <div classname="Login-logo">
            <img
                src={logo}
                style={{ height: 66, width: 66 }}
                alt="Reviewify Logo"
            />
        </div>

        <h1 className="Login-title">
            Login
        </h1>

        <h2 className="Login-subtitle">
            Please sign in to continue.
        </h2>

        <br></br>
        
        <div className="FormTextBox-outer">
            <div className="container">
                <form> 
                    <div className="FormTextBox-input">
                        <input
                            type="text"
                            name="email"
                            placeholder="EMAIL"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>

        <br></br>

        <div className="FormTextBox-outer"> 
            <div className="container">
                <form>
                    <div className="FormTextBox-input"> 
                        <input
                            type="password"
                            name="password"
                            placeholder="PASSWORD"
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                </form>
            </div>
        </div>

        <br></br>
        <br></br>

        <button className="Login-button" onClick={(e) => {handleSignIn(e)}}>
            <span className="Login-button-text"> LOGIN </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                <path d="M1 5.5H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 1L15 5.5L8 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <span className="Login-ptext"> Don't have an account? </span>
        <span className="Login-signup-text"> <Link to="/createaccount"> Sign up</Link> </span>
        
        <br></br>
        <br></br>

    </div>
  );
}

export default Login;
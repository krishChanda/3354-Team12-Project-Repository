// Author: Hayden
// Test Case 3: The system should register the user account to the system
// Test Case 4: The system should store the user’s email, first name, and last name in the database 

//Create Account page

// react and firebase imports
import React from "react";
import FormTextBox from "../Shared-Components/FormTextBox";
import email_icon from "../../../public/icons/email_icon.svg";
import password_icon from "../../../public/icons/password_icon.svg";
import "./CreateAccount.css";

import { useState } from "react"; // useState --> keeps track of user status (logged in or not logged in)
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"; // import authentication function
import { useNavigate, Link } from "react-router-dom"; // navigation import
import { useAddUser } from "../../Hooks/useAddUser"; // adduser function database import

const CreateAccount = () => {
    //Define AddUser to Database Function 
    const {addUser} = useAddUser();

    // user data variable declerations
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    
    const auth = getAuth() // Create User into Firebase Database
    const navigate = useNavigate(); // define nagivation function

    // when "create account button is clicked"
    async function handleSignUp(e){
        e.preventDefault();
        // checks if password and confirm password match
        if (password === confirmPassword){
            // API Call for creating a new user
            createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => { // then after creating user --> add user info to database
                const user = userCredential.user;
                // gets the current userID
                if (user) {
                    const userID = user.uid;
                    // go to home page
                    navigate("/home");
                    // add user Info to database
                    addUser({ userID, firstname, lastname, email });
                }  
                // else there is an authentication error   
                else {
                    alert("Error: User not authenticated.");
                }
            })
            // else there is an error in creating the account
            .catch((error) => {
                alert(error); // API call handels the error exception in this case
            });
        }
        // else return an error
        else{
            alert("Error, confirm password does not match password");
        }
        
    }
    
    return (
        <div className="Create-Account">
            <h2 className="Create-Account-title">
                <span>Create Account</span>
            </h2>
            <FormTextBox 
                onChange={(e) => setEmail(e)}
                type="email"
                name="email"
                icon={email_icon}
                placeholder="EMAIL"
            />
            <FormTextBox 
                onChange={(e) => setFirstName(e)}
                type="firstname"
                name="firstname"
                icon={email_icon}
                placeholder="FIRST NAME"
            />
            <FormTextBox 
                onChange={(e) => setLastName(e)}
                type="lastname"
                name="lastname"
                icon={email_icon}
                placeholder="LASTNAME"
            />
            <FormTextBox 
                onChange={(e) => setPassword(e)}
                type="password"
                name="password"
                icon={password_icon}
                placeholder="PASSWORD"
            />
            <FormTextBox
                onChange={(e) => setConfirmPassword(e)}
                type="password"
                name="confirm password"
                icon={password_icon}
                placeholder="CONFIRM PASSWORD"
            />
            <span>
                <button className="Create-Account-button" onClick={(e) => {handleSignUp(e)}}>
                    Sign Up 
                </button>
            </span>
            <span className="Create-Account-ptext"> Returning User? </span>
            <span className="Create-Account-signin-text"> <Link to="/"> Login in</Link> </span>
        </div>
    );
};

export default CreateAccount;

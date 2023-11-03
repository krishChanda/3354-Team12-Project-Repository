import React from "react";
import FormTextBox from "../Shared-Components/FormTextBox";
import email_icon from "../../../public/icons/email_icon.svg";
import password_icon from "../../../public/icons/password_icon.svg";
import "./CreateAccount.css";

import { useState } from "react"; // useState --> keeps track of user status (logged in or not logged in)
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"; // import authentication function
import { useNavigate } from "react-router-dom";
import { useAddUser } from "../../Hooks/useAddUser";

const CreateAccount = () => {
    //Define Add To Database Function 
    const {addUser} = useAddUser();

    // user data variable declerations
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");

    // Create User into Firebase Database
    const auth = getAuth()
    const navigate = useNavigate();
    async function handleSignUp(e){
        e.preventDefault();
        if (password === confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                if (user) {
                    const userID = user.uid;
                    navigate("/home");
                    addUser({ userID, firstname, lastname, email });
                }     
                else {
                    alert("Error: User not authenticated.");
                }
            })
            .catch((error) => {
                alert(error);
            });
        }
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
            <button onClick={(e) => {handleSignUp(e)}}>
                Sign Up 
            </button>
        </div>
    );
};

export default CreateAccount;

import React from 'react'
import { useState, useEffect } from 'react';
import profile_pic from "../../../public/Blank_Profile.svg"
import "./EditAccount.css";
import { useNavigate } from "react-router-dom"; // navigation import
import { useUpdateUserInfo } from '../../Hooks/useUpdateUser';


const EditAccount = () => {

    const {updateUserInfo} = useUpdateUserInfo();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profilePic, setProfilePic] = useState(profile_pic);
    const navigate = useNavigate(); // Get the navigation function

  const handleSaveProfile = () => {
    // Check if firstName and lastName are not empty
    if (firstName.trim() === "" || lastName.trim() === "") {
        alert("Please enter a valid first and last name.");
    } else {
        // Perform any saving actions here if needed
        // For example, you can save user data to a database
        updateUserInfo(firstName, lastName);
        // Navigate to the "/home" path
        navigate('/viewaccount');
    }
  };

  return (
    <div className='Body'>
        <div className='Profile'>
            <img src={profilePic} className='Image'/>
        </div>
        <div className='ChangeProfile'>
            <input type="file" id='fileInput' placeholder='Change Image' style={{display: 'none'}} onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))}/>
            <button onClick={(e) => document.querySelector('#fileInput').click()} className='ChangeImage'>Change Image</button>
        </div>
        <div className='Form'>
            <input className="Text" type='text' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            <input className="Text" type='text' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className='SaveButton'>
            <button className='Button' onClick={handleSaveProfile}>Save Profile</button>
        </div>
    </div>
  )
}

export default EditAccount;
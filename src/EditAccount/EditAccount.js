import React from 'react'
import { useState, useEffect } from 'react';
import profile_pic from "../../public/Blank_Profile.svg"
import "./EditAccount.css";


const EditAccount = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profilePic, setProfilePic] = useState(profile_pic)


  return (
    <div className='Body'>
        <div className='Profile'>
            <img src={profilePic} className='Image'/>
        </div>
        <div className='ChangeProfile'>
            <input type="file" id='fileInput' placeholder='Change Image' style={{display: 'none'}} onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))}/>
            <a onClick={(e) => document.querySelector('#fileInput').click()} className='ChangeImage'>Change Image</a>
        </div>
        <div className='Form'>
            <input className="Text" type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input className="Text" type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="Text" type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className='SaveButton'>
            <button className='Button'>Save Profile</button>
        </div>

    </div>
  )
}

export default EditAccount
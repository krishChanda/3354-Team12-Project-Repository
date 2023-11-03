import React from "react";
import "./ViewAccount.css";


function ViewAccount(){
  return(
    <div className="app-container">

    
    <div className="ViewAccount">
    <div className="pf-picture">
    <br></br>
    <br></br>
  

    <img src ='/pfp.png' 
    alt = "Profile Picture"
    width="80"
    height="80"
    />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    </div>
    <div className="white-box">
        <div className="input-container">
          
          <p className="input-label"> Username</p>
          <br></br>
          <br></br>
          <p className="input-label">Email</p>
          <br></br>
          <br></br>
          <p className="input-label">Password</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
    <div className="edit-profile">
      <div className="container">
      <button className="edit-button">Edit Profile</button>
      </div>
      
    </div>
    </div>
    </div>
  )
}
export default ViewAccount;

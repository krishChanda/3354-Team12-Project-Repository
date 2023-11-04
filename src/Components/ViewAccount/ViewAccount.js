import React from "react";
import "./ViewAccount.css";
import { useGetUser } from "../../Hooks/useGetUser";

function ViewAccount(){
  const {userInfo} = useGetUser();
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
        <ul>
          {userInfo.length > 0 ? (
            userInfo.map((user) => {
              const { email, firstname, lastname } = user;
              return (
                <li key={user.id}>
                  <h4>Email: {email}</h4>
                  <h4>First Name: {firstname}</h4>
                  <h4>Last Name: {lastname}</h4>
                </li>
              );
            })
          ) : (
            <li>Loading</li>
          )}
        </ul>
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

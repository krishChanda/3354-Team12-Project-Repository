import React from "react";
import "./ViewAccount.css";
import { useGetUser } from "../../Hooks/useGetUser";
import { useNavigate } from "react-router-dom"; // navigation import

function ViewAccount(){
  const {userInfo} = useGetUser();
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/editaccount');
  };
  const handleHome = () => {
    navigate('/home');
  };
  

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
                  <h4 className="ViewAccount-text">Email: {email}</h4>
                  <h4 className="ViewAccount-text">First Name: {firstname}</h4>
                  <h4 className="ViewAccount-text">Last Name: {lastname}</h4>
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
        <button className="edit-button" onClick={handleEditProfile}>Edit Profile</button>
      
      </div>
      <div className="container">
        <button className="edit-button" onClick={handleHome}> Home </button>
      </div>
      
    </div>
    </div>
    </div>
  )
}
export default ViewAccount;
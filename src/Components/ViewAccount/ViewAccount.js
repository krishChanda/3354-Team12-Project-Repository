// Author: Khaled Elkhaled
// Test Case 9: The user should be able to view their Account

import React from "react";
import "./ViewAccount.css";
import { useGetUser } from "../../Hooks/useGetUser";
import { useNavigate } from "react-router-dom"; // navigation import

// sets up navigation to the Edit Account and Home pages
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
    <div className="ViewAccount">

      {/* profile photo */}
      <img src ='/pfp.png' alt = "Profile" width="80" height="80"/>

      {/* Displays the email, first name, and last name of the registered user */}

      <ul>
        {userInfo.length > 0 ? (
          userInfo.map((user) => {
            const { email, firstname, lastname } = user;
              return (
               <div key={user.id}>
                  {/* Email Box */}
                  <h3 className="box-heading">Email</h3>
                  <div className="input-container">
                      <p className="ViewAccount-text">{email}</p>
                  </div>

                  {/* First Name Box */}
                  <h3 className="box-heading">First Name</h3>
                  <div className="input-container">
                      <p className="ViewAccount-text">{firstname}</p>
                  </div>

                  {/* Last Name Box */}
                  <h3 className="box-heading">Last Name</h3>
                  <div className="input-container">
                      <p className="ViewAccount-text">{lastname}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Loading</div>
          )}
      </ul>
        
      {/* Buttons which allow the user to navigate through the pages */}
      <div className="edit-profile">
        <div className="container">
          <button className="edit-button" onClick={handleEditProfile}>Edit Profile</button>      
        </div>

        <div className="container">
          <button className="edit-button" onClick={handleHome}> Home </button>
        </div>          
      </div>
      
    </div>
  )
}
export default ViewAccount;
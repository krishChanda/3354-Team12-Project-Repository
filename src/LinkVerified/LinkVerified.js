// LinkVerified.js


import React from "react";
import "./LinkVerified.css";


function LinkVerified() {
 return (
   <div className="app-container">
     <img
       src="/checkmark.svg"
       alt="checkmark"
       width="200"
       height="200"
     />
     <div className="instruction-text">
       Link Successfully<br />Verified!
     </div>
     <div className="container">
       <button className="insert-button">Generate Sentiment Score</button>
       <br />
       <button className="cancel-button">Cancel</button>
     </div>
   </div>
 );
}


export default LinkVerified;




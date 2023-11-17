// LinkVerified.js

import React from "react";
import "./LinkVerified.css";
import checkmark from "../../../public/checkmark.svg";


function LinkVerified() {
 return (
   <div className="app-container">
     <img
       src={checkmark}
       alt="checkmark"
       width="100"
       height="100"
     />
     <div className="instruction-text">
       Link Successfully<br />Verified!
     </div>
     <button className="insert-button">Generate Sentiment Score</button>
       <br />
     <button className="cancel-button">Cancel</button>
   </div>
 );
}


export default LinkVerified;
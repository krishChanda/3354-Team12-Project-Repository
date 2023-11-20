// Author: Saipravallika Akula
// Test Case 15: The system should allow the user to create a sentiment score 
// Test Case 22: The system should store the Amazon link to the user’s profile if the user clicks on save sentiment score
// LinkVerified.js

import React from "react";
import "./LinkVerified.css";
import { useLocation } from "react-router-dom";
import checkmark from "../../../public/checkmark.svg";
import { useState, useEffect } from "react";
import getSentimentScore from "../../Hooks/getSentimentScore";
import { useNavigate } from "react-router-dom";

function LinkVerified() {
  // declare functions from other libraries
  const location = useLocation();
  const navigate = useNavigate();


  // product data
  const { productLink } = location.state || {};
  // use this instead of temp declaration
  //const [productName, setProductName] = useState("");
  //const [keywords, setKeywords] = useState("");
  const [sentimentScore, setSentimentScore] = useState(0);
  const productName = "Airpods Pro";
  const keywords = "great good quality expensive durable pricy"

  useEffect(() => {
    if (sentimentScore !== 0) {
      navigate('/savesentimentscore', {
        state: { productLink, keywords, productName, sentimentScore },
      });
    }
  }, [sentimentScore, productLink, keywords, productName, navigate]);

  const createSentimentScore = async () => {
    try {
      let score = await getSentimentScore(keywords);
      score = score.replace(/\D/g, '');
      
      // Update the state with the new sentiment score
      setSentimentScore(parseInt(score));
  
    } catch (error) {
      console.error('Error getting sentiment score:', error);
    }
  }

  
  const handleGenerateSentimentScore = async () => {
    // get product name (Temp for now)
    
    // generate key words (Temp for now)
    
    // generate sentiment score and navigate to savesentimentscore page
    await createSentimentScore();
    
  }


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
     <button className="insert-button" onClick={() => handleGenerateSentimentScore()}>Generate Sentiment Score</button>
       <br />
     <button className="cancel-button">Cancel</button>
   </div>
 );
}


export default LinkVerified;
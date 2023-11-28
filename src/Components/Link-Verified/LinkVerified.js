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
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../index';

function LinkVerified() {
  // declare functions from other libraries
  const location = useLocation();
  const navigate = useNavigate();


  // product data
  const { productLink } = location.state || {};
  const [productName, setProductName] = useState("");
  const [keywords, setKeywords] = useState("");
  const [sentimentScore, setSentimentScore] = useState(0);

  // delete the temp link
  const tempProductLink = "https://www.amazon.com/Introduction-Quantum-Mechanics-David-Griffiths/dp/1107189632/?_encoding=UTF8&pd_rd_w=PWk58&content-id=amzn1.sym.35cab78c-35e3-4fc1-aab0-27eaa6c86063%3Aamzn1.symc.e5c80209-769f-4ade-a325-2eaec14b8e0e&pf_rd_p=35cab78c-35e3-4fc1-aab0-27eaa6c86063&pf_rd_r=V3P2QE3EZFKWKZZFAQ16&pd_rd_wg=07iTr&pd_rd_r=ee807f4e-89ac-4127-85b4-da50bf548908&ref_=pd_gw_ci_mcx_mr_hp_atf_m";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Query the 'keywords' collection where 'amazonLink' matches the provided productLink
        
        // * NOTE * in the where() replace tempProductLink with ProductLink variable
        const q = query(collection(db, "keywords"), where("amazonLink", "==", tempProductLink));
        const querySnapshot = await getDocs(q);

        // Assume there is only one matching document
        const doc = querySnapshot.docs[0];

        if (doc.exists()) {
          const data = doc.data();
          setProductName(data.productName);
          setKeywords(data.keywords.join(" ")); // Convert the string array to a single string
        } else {
          console.error("Document not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productLink]);

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
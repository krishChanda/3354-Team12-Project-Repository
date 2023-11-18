// Author: Saipravallika Akula

import React, { useState } from 'react';
import "./SaveSentimentScore.css";
import { getAuth } from 'firebase/auth';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAddProduct } from '../../Hooks/useAddProduct';
import { Link } from 'react-router-dom';

const SaveSentimentScore = () => {
  const location = useLocation();
  const auth = getAuth();
  const navigate = useNavigate();
  const {addProduct} = useAddProduct();

  const user = auth.currentUser;
  const { productLink, keywords, sentimentScore, productName } = location.state || {};
  const keywordsLst = keywords.split(' ');

  // puts the keywords into the outline << formating
  const renderKeywords = () => {
    return keywordsLst.map((keyword, index) => (
      <div key={index} className="keyword-outline">
        {keyword}
      </div>
    ));
  };

  // changes the height of rectangle 3
  const calculateRectangle3Height = () => {
    const numberOfRows = Math.ceil(keywordsLst.length / 3); // Assuming 3 keywords per row
    // Calculate the height based on the number of rows
    const rowHeight = 45; // Adjust the row height as needed
    const padding = 15;
    const borderRadius = 5;
    return numberOfRows * rowHeight + 2 * padding + 2 * borderRadius;
  };

  // changes color base on score value
  const getScoreColor = () => {
    if (sentimentScore >= 7) {
      return 'green';
    } else if (sentimentScore >= 4) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  // changes the size of the progress bar
  const progressBarStyle = {
    width: `${(sentimentScore / 10) * 100}%`,
    backgroundColor: getScoreColor(), // Use the color based on sentiment score
  };

  // displays review text based on score value
  const getReviewText = () => {
    if (sentimentScore >= 9) {
      return "Reviews consistently highlight the overall outstanding quality of this product.";
    } else if (sentimentScore >= 7) {
      return "Reviews consistently highlight the overall above-average quality of this product.";
    } else if (sentimentScore >= 5) {
      return "Reviews consistently highlight the overall average quality of this product.";
    } else if (sentimentScore >= 3) {
      return "Reviews consistently highlight the overall below-average quality of this product.";
    } else {
      return "Reviews consistently highlight the overall poor quality of this product.";
    }
  };

  // changes color base on score value
  const handleSaveSentiment = async () => {
    try {
      await addProduct({
        userID: user.uid,
        amazonLink: productLink,
        keywords: keywords,
        productName: productName,
        sentimentScore: sentimentScore,
      });
      navigate("/viewsentimentscore");
    } catch (error) {
      console.error('Error saving sentiment score:', error);
    }
  };

  return (
 
    <div className="SaveSentimentScore">
      <h1 className="Save-title">Product Summary</h1>
      <p className="review-text">{productName}</p>
      {/* Score display section */}
      <div className="rectangle-container">
        <div className="rectangle1">
         
          <p className="subtitle-text">Sentiment Score</p>
          {/* gets the score and changes color to display */}
          <span className={`score-text ${getScoreColor()}`}>{sentimentScore}</span> 
          <span> /10</span>

          <br></br>
          <br></br>

          <div className="progressBar-bg"></div>
          <div className="progress-bar-container">
            {/* changes size and color of progress bar */}
            <div className="progress-bar" style={progressBarStyle}></div>
          </div>

        </div>
      </div>

      {/* Review text section */}
      <div className="rectangle-container">
        <div className="rectangle2">
          <p className="review-text">{getReviewText()}</p>
        </div>
      </div>

      {/* Key words section */}
      <div className="rectangle-container">
        {/* changes height of keyword section based on number of words */}
        <div className="rectangle3" style={{ height: `${calculateRectangle3Height()}px` }}>
          <p className="subtitle-text">Most Mentioned Keywords</p>
          <div className="keywords-container">
            {/* gets the keywords and formats them */}
            {renderKeywords()}
          </div>
        </div>
      </div>

      <button className="Save-button">
            <span className="Save-button-text" onClick={() => handleSaveSentiment()}> Save Sentiment Score </span>
      </button>
      <br></br>
      <span><Link className="Link-color" to="/home">Home</Link></span>

    </div>

  );
};

export default SaveSentimentScore;
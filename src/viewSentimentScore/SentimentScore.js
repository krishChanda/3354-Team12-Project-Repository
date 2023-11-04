import React from "react";
import "./SentimentScore.css";

function SentimentScore(){
    return(
        <div className="app-container">

            <h1 className="title-text"> Past Sentiment Scores </h1>

            <button className="delete-scores-button">
                need the trashcan icon
            </button>

            <br></br>
            <br></br>
            
            <div className="scores-container">
                <div className="viewScore-container">
                    <div className="product-image">

                    </div>

                    <div className="product-name">

                    </div>

                    <div className="product-description">

                    </div>

                </div>


            </div>
        </div>
    )
}
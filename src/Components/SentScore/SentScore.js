import React from "react";
import "./SentScore.css";
import Delete from './trace.svg'


function SentScore() {
    const handleButtonClick = (index) => {
        // Implement logic for the button click
        console.log(`Button clicked in box ${index}`);
    };

    return (
        <div className="app-container">
            {/* ... (previous code) ... */}

            <br></br>
            <br></br>

            <div className="scores-container">
                <h1 className="title-text"> Past Sentiment Scores </h1>
                <br></br>
                
                {/* Adding 5 separate empty white boxes with text and a clickable ">" button */}
                {[1].map((index) => (
                    <div key={index} className="empty-box">
                        <br></br>
                        <h2>Product Name {index}</h2>
                        

                        {/* Clickable ">" button */}
                        <button className="arrow-button" onClick={() => handleButtonClick(index)}>
                            &gt;
                        </button>
                        <button className="image-button" onClick={() => handleButtonClick(index)}>
                            <img src= {Delete} alt="D" width="40" height="40" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SentScore;

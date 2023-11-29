// Author: Khaled and Brandon
import React from "react";
import "./SentScore.css";
import { useGetProduct } from "../../Hooks/useGetProduct";
import ProductBox from "../Shared-Components/ProductBox";
import { useNavigate } from "react-router-dom";

// user profile page that displays all past saved scores
function SentScore() {
    // function and data declaration
    const {productData} = useGetProduct();
    const navigate = useNavigate();

    // go to insert link page if user wants to create a new page
    const handleCreateScore = async () => {
        navigate("/insertlink");
    }
    
    return (
        <div className="SentScore">
            <br></br>
            <br></br>

            <h1 className="title-text"> Past Sentiment Scores </h1>

            <br></br>
            <button className="create-button" onClick={() => handleCreateScore()}>Create New Sentiment Score</button>
            <br></br>
            <br></br>
            <div className="product-box">
                {productData.map((product) => (
                    <ProductBox 
                        key={product.id} 
                        id={product.id} 
                        productName={product.productName} 
                        keywords={product.keywords} 
                        sentimentScore={product.sentimentScore}
                        productLink={product.amazonLink}
                    />
                    
                ))}
            </div>


        </div>
    );
}

export default SentScore;
// Author: Krish Chanda

// ProductBox.js
// this file contains the react component that displays the container for each product that the user saves to their profile
// container for the SentScore.js file
import React from "react";
import { useDeleteProduct } from "../../Hooks/useDeleteProduct";
import deleteIcon from "../../../public/trace.svg"
import { useNavigate } from "react-router-dom";
import "./ProductBox.css";

const ProductBox = ({ id, productName, productLink, keywords, sentimentScore }) => {
    const { deleteProduct } = useDeleteProduct(); // Get the delete function
    const navigate = useNavigate();

    // function that deletes product from the database
    const handleDelete = async () => {
      try {
        // Call the delete function with the product's id
        await deleteProduct(id);
      } catch (error) {
        console.error("Error deleting product:", error);
        // Handle error or show a user-friendly message
      }
    };
    // function that opens a new page to allow users to view score
    const handleViewScore = async () => {
      navigate('/viewpastscore', {
        state: { productLink, keywords, productName, sentimentScore },
      });
    }

    return (
      <div className="score-container">

          <button className="delete-button" onClick={() => handleDelete()}>
            {/* <img src= {deleteIcon} alt="D" width="40" height="40" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M1 5.40002H3.44444H23" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.5564 5.4V20.8C20.5564 21.3835 20.2989 21.9431 19.8405 22.3556C19.382 22.7682 18.7603 23 18.112 23H5.88976C5.24145 23 4.6197 22.7682 4.16127 22.3556C3.70285 21.9431 3.44531 21.3835 3.44531 20.8V5.4M7.11198 5.4V3.2C7.11198 2.61652 7.36952 2.05695 7.82794 1.64436C8.28636 1.23178 8.90812 1 9.55642 1H14.4453C15.0936 1 15.7154 1.23178 16.1738 1.64436C16.6322 2.05695 16.8898 2.61652 16.8898 3.2V5.4" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.55469 10.9V17.5" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.4434 10.9V17.5" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <button className="view-score-button" onClick={() => handleViewScore()} >
            <span className="product-name-text"> {productName} </span>
          </button>

          <button className="view-score-button-arrow" onClick={() => handleViewScore()} >
            <span className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                <path d="M1 13.3933L7.19666 7.19666L1 1" stroke="#505050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>

      </div>
    );
};

export default ProductBox;
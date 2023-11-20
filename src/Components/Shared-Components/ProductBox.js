// Author: Krish Chanda

// ProductBox.js
// this file contains the react component that displays the container for each product that the user saves to their profile
// container for the SentScore.js file
import React from "react";
import { useDeleteProduct } from "../../Hooks/useDeleteProduct";
import deleteIcon from "../../../public/trace.svg"
import { useNavigate } from "react-router-dom";

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
        <h3>{productName}</h3>
        {/* Add more details or styling as needed */}
        <br></br>
        <button onClick={() => handleViewScore()} >View Score</button>
        <br></br>
        <button onClick={() => handleDelete()}>
          <img src= {deleteIcon} alt="D" width="40" height="40" />
        </button>
        <br></br>
        <br></br>
    </div>
    );
};

export default ProductBox;
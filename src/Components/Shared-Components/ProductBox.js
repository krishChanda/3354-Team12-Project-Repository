// ProductBox.js
// this file contains the react component that displays the container for each product that the user saves to their profile
import React from "react";
import { useDeleteProduct } from "../../Hooks/useDeleteProduct";

const ProductBox = ({ id, productName }) => {
    const { deleteProduct } = useDeleteProduct(); // Get the delete function

    const handleDelete = async () => {
      try {
        // Call the delete function with the product's id
        await deleteProduct(id);
      } catch (error) {
        console.error("Error deleting product:", error);
        // Handle error or show a user-friendly message
      }
    };

    return (
    <div className="purple-box">
        <h3>{productName}</h3>
        {/* Add more details or styling as needed */}
        <button className="product-button" onClick={handleDelete}>
            Delete
        </button>
    </div>
    );
};

export default ProductBox;
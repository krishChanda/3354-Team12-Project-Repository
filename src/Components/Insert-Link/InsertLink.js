// Author: Daniel Ng
// Test Case 13: System should be able to validate different product links
// Test Case 14: System should allow the user to insert different Amazon product links

// InsertLink.js
import React from "react";
import "./InsertLink.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InsertLink() {
  const navigate = useNavigate();
  const [productLink, setProductLink] = useState("");

  const handleHome = () => {
    navigate('/home');
  };

  const handleInsertLink = () => {
    // Check if the productLink contains "www.amazon.com"
    if (productLink.includes("www.amazon.com")) {
      // The link contains "www.amazon.com"
      alert("Amazon link is valid.");
    } else {
      // The link doesn't contain "www.amazon.com"
      alert("Please enter a valid Amazon link.");
    }
  }

  return (
    <div className="app-container">
      <h1 className="instruction-text">
        Open the Product Page and Insert Below
      </h1>
      <input
        type="text"
        name="productlink"
        placeholder="INSERT PRODUCT LINK"
        onChange={(e) => setProductLink(e.target.value)} 
      />
      <button className="insert-button" onClick={handleInsertLink}>Insert Link</button>
      <button className="insert-button" onClick={handleHome}> Cancel </button>
    </div>
  );
}

export default InsertLink;
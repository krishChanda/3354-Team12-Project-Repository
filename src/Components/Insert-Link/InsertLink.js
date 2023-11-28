// Author: Daniel Ng
// Test Case 13: System should be able to validate different product links
// Test Case 14: System should allow the user to insert different Amazon product links

// InsertLink.js
import React from "react";
import "./InsertLink.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostLink } from "../../api/API";

function InsertLink() {
  const navigate = useNavigate();
  const [productLink, setProductLink] = useState("");

  const handleHome = () => {
    navigate('/home');
  };

  const handleInsertLink = async () => {
    // Check if the productLink contains "www.amazon.com"
    if (productLink.includes("www.amazon.com")) {
      const product = await PostLink({ url: productLink });
      console.log(product);
      //alert("Finished parsing product link.")
      // The link contains "www.amazon.com" --> take to link verifed page
      navigate('/linkverified', { state: { productLink } });
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
      <br></br>
      <input
        type="text"
        name="productlink"
        placeholder="INSERT PRODUCT LINK"
        onChange={(e) => setProductLink(e.target.value)} 
      />
      <br></br>
      <button className="insert-button" onClick={handleInsertLink}>Insert Link</button>
      <br></br>
      <button className="insert-button" onClick={handleHome}> Cancel </button>
      <br></br>
    </div>
  );
}

export default InsertLink;
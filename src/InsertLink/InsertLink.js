// InsertLink.js

import React from "react";
import "./InsertLink.css";

function InsertLink() {
  return (
    <div className="app-container">
      <div className="instruction-text">
      Open the Product Page and Insert Below
      </div>
      <div className="product-preview">
        Product Preview:
      </div>
      <div className="white-box">
        <div className="input-container">
          {/* Content for input-container */}
        </div>
        <div className="container">
          <button className="insert-button">Insert Link</button>
        </div>
      </div>
    </div>
  );
}

export default InsertLink;

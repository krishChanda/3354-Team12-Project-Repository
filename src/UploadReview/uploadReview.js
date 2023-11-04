import React from 'react';
import "./uploadReview.css";
import logo from "../logo.svg";

function uploadReview() {

    return (
        <div className="uploadReview">
            <div classname="uploadReview-logo">
                <img
                    src={logo}
                    style={{ height: 66, width: 66 }}
                    alt="Reviewify Logo"
                />
            </div>

            <h1 className="confirmUpload-title">
                Confirm Upload
            </h1>

            <br></br>

            <div className="container">
                <h2 className="review-text-body">
                    review details go here
                </h2>
            </div>

            <br></br>

            <button className="Confirm-button">
            <span className="Confirm-button-text"> Upload </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                <path d="M1 5.5H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 1L15 5.5L8 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>

        <br></br>
        <br></br>

        </div>
    )




}
// Author: Brandon Plant
// Test Case 5: The system should open the extension when the icon on Chrome is clicked

// Main webframe for chrome extension

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Shared-Components/Navbar";
import fbconfig from "./Context/fbconfig"; // User authentication API Key
import { initializeApp} from "firebase/app"; // Firebase import
import { getFirestore } from "firebase/firestore";
import ViewAccount from "./Components/ViewAccount/ViewAccount";

const app = initializeApp(fbconfig); //User Authentication API Call
export const db = getFirestore(app); //Database API Call --> sets connection to the cloud firestore

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar/>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

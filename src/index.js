import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Shared-Components/Navbar";
import CreateAccount from "./Components/Create-Account/CreateAccount";
import fbconfig from "./Context/fbconfig"; // User authentication API Key
import { initializeApp} from "firebase/app"; // Firebase import

const app = initializeApp(fbconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar />
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

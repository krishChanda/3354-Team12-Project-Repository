// Author: Krish Chanda

import logo from "../../../src/logo.svg";
import "./Home.css";
import "../../../src/globals.css";
import { Link } from "react-router-dom"; // navigation import
import { useNavigate } from "react-router-dom";
import InsertLink from "../Insert-Link/InsertLink";


// DELETE link to view account after navbar nagivation is fixed

function Home() {
  const navigate = useNavigate();

  const handleInsertLink = () => {
    navigate('/insertlink');
  };

  return (
    <div className="Home">
      <header className="Home-header Main-bg">
        <div className="Home-header-div">
          <h1 className="Home-header-title">
            <span>Welcome to </span>
            <span>Reviewify</span>
          </h1>
        </div>
        <img src={logo} className="Home-logo" alt="logo" />
        <button className="Home-button" onClick={handleInsertLink}> Create Sentiment Score </button>
        <span><Link to="/viewaccount">View Account</Link></span>
      </header>
    </div>
  );
}

export default Home;
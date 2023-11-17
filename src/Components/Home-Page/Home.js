// Author: Krish Chanda

import logo from "../../../src/logo.svg";
import "./Home.css";
import "../../../src/globals.css";
import { Link } from "react-router-dom"; // navigation import
import { useNavigate } from "react-router-dom";
import InsertLink from "../Insert-Link/InsertLink";
import { getAuth } from "firebase/auth"; //test
import { useAddProduct } from "../../Hooks/useAddProduct"; // test
import { useGetProduct } from "../../Hooks/useGetProduct"; // test
import ProductBox from "../Shared-Components/ProductBox"; // test

// DELETE link to view account after navbar nagivation is fixed

function Home() {
  const navigate = useNavigate();
  const {addProduct} = useAddProduct(); // test
  const auth = getAuth() //test
  const user = auth.currentUser; // test
  const { productData } = useGetProduct(); //test

  const handleInsertLink = () => {
    //navigate('/insertlink');
    if(user !== null){ // test
      addProduct({userID:user.uid, amazonLink:"www.amazon.com", keywords:"good mid ok", productName:"Bike", sentimentScore:"4"}); // test
    } // test
    else { //test
      alert("error in adding product data"); //test
    } //test
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

        {/* Display each productName using ProductBox component */}
        <div>
          {productData.map((product) => (
            <ProductBox key={product.id} id={product.id} productName={product.productName} />
          ))}
        </div>


      </header>
    </div>

  );
}

export default Home;
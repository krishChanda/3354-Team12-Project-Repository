import logo from "../../../src/logo.svg";
import "./Home.css";
import "../../../src/globals.css";

function Home() {
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
        <a
          className="Link-color"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create Your Sentiment Score
        </a>
      </header>
    </div>
  );
}

export default Home;
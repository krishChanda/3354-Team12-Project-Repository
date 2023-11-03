import logo from "./logo.svg";
import "./App.css";
import "./globals.css";
//import Login from "./Login"
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header Main-bg">
        <div className="App-header-div">
          <div>
            <Login />
          </div>
          <h1 className="App-header-title">
            <span>Welcome to </span>
            <span>Reviewify</span>
          </h1>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;

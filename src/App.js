import logo from "./logo.svg";
import "./App.css";
import "./globals.css";

function App() {
  return (
    <div className="App">
      <header className="App-header Main-bg">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Reviewify!</p>
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

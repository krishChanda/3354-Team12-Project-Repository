import logo from "../../../src/logo.svg";
import "./Home.css";
import "../../../src/globals.css";
import { useGetUser } from "../../Hooks/useGetUser";

function Home() {
  const {userInfo} = useGetUser();
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
        <ul>
          {userInfo.length > 0 ? (
            userInfo.map((user) => {
              const { email, firstname, lastname } = user;
              return (
                <li key={user.id}>
                  <h4>Email: {email}</h4>
                  <h4>First Name: {firstname}</h4>
                  <h4>Last Name: {lastname}</h4>
                </li>
              );
            })
          ) : (
            <li>No user data available</li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Home;
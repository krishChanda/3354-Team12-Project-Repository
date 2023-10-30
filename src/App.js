import "./logo.svg"
import "./App.css";
import "./globals.css";

import CreateAccount from "./Components/Create-Account/CreateAccount"; // create account page import
import Home from "./Components/Home-Page/Home"; // home page import
import { AuthContext } from "./Context/AuthContext"; // Webpage security import
import { Protected } from "./Context/Protected"; // Protects pages from non-users
import { createHashRouter, RouterProvider } from "react-router-dom"; // navigation libary import

function App() {

  //nagivation for pages: --> "<Protected> Page <Protected/>" ensures if a person is not logged in, they do not have access to other pages
  const router = createHashRouter([
    {
      path:"/temppath",
      element:<Protected><Home/></Protected>
    },
    {
      path:"/home",
      element:<Protected><Home/></Protected>
    },
    {
      path:"/",
      element:<CreateAccount></CreateAccount>
    }

  ])

  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
    
  );
}

export default App;

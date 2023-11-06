import "./logo.svg"
import "./App.css";
import "./globals.css";

import CreateAccount from "./Components/Create-Account/CreateAccount"; // create account page import
import Home from "./Components/Home-Page/Home"; // home page import
import Login from "./Components/Login/Login"; // login page import
import ViewAccount from "./Components/ViewAccount/ViewAccount"; // view account import
import EditAccount from "./Components/Edit-Account/EditAccount";
import InsertLink from "./Components/Insert-Link/InsertLink";

import { AuthContext } from "./Context/AuthContext"; // Webpage security import
import { Protected } from "./Context/Protected"; // Protects pages from non-users
import { createHashRouter, RouterProvider } from "react-router-dom"; // navigation libary import

function App() {

  //nagivation for pages: --> "<Protected> Page <Protected/>" ensures if a person is not logged in, they do not have access to other pages
  const router = createHashRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/home",
      element:<Protected><Home/></Protected>
    },
    {
      path:"/createaccount",
      element:<CreateAccount></CreateAccount>
    },
    {
      path:"/viewaccount",
      element:<Protected><ViewAccount/></Protected>
    },
    {
      path:"editaccount",
      element:<Protected><EditAccount/></Protected>
    },
    {
      path:"insertlink",
      element:<Protected><InsertLink/></Protected>
    }

  ])

  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
    
  );
}

export default App;

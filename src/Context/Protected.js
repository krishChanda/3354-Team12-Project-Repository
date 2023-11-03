// .js File that protects all pages except login from non-users 
// for example: this function tag will ensure a user who does not have an account can't access the view account page

// react imports
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/AuthContext";

export function Protected({children}){
    const {user} = useContext(Context);
    // if not user navigate them back to login page
    if(!user){
        return <Navigate to=" /createaccount" replace/> // *change return to /login path
    }
    // else continue
    else{
        return children;
    }
}
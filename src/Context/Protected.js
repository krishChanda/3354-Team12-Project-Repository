// .js File that protects all pages except login from non-users

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/AuthContext";

export function Protected({children}){
    const {user} = useContext(Context);

    if(!user){
        return <Navigate to=" /createaccount" replace/> // *change return to /login path
    }
    else{
        return children;
    }

}
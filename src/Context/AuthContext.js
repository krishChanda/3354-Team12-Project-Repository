// Author: Krish Chanda
// Test Case 7: The system should make an API call for user Authentication 
// Test Case 8: The system should make an API call for Account Creation

// JS File that checks the state of the user --> (signed in or not)

//react and firebase imports
import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Function that exports context state of user
export const Context = createContext();

// Function that calls firebase auth to check if valid user is signed in
export function AuthContext({children}){
    // firebase auth decleration
    const auth = getAuth();

    // variable declarations for user state
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // function that checks if a valid user is signed in
    useEffect(() => {
        let unsubscribe;
        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            if(currentUser) setUser(currentUser);
            else{setUser(null)}
        });
        return () => {
            if(unsubscribe) unsubscribe();
        }
    },[])
    const values = {
        user: user,
        setUser: setUser
    }

    // return the user state to the function call
    return <Context.Provider value={values}>
        {!loading &&
            children
        }
    </Context.Provider>
}
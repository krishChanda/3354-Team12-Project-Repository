// Author: Khaled Elkhaled
// Test Case 10: The System should retrieve user info from the database

// JS file that contains getUser function call --> will retrieve the user information of the current user logged in

// react/firebase/firestore imports
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from ".."; // database connection import
import { getAuth, onAuthStateChanged } from "firebase/auth"; 

// useGetUser --> sets up a function call that gives access to getUser() function 
export const useGetUser = () => {

    // variable declarations
    const auth = getAuth(); // checks user authentication
    const [userInfo, setUserInfo] = useState([]); // holds a list of user info
    const userCollectionRef = collection(db, "userinfo"); // establish a refrence to userinfo collection
    const [userID, setUserID] = useState(""); // creates a state for the user

    // function call to check if valid user is signed in, if so, get their userID
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user

            // set the userID to user.id
            setUserID(user.uid);
            // ...
        } else {
            // give error and state cannot get user ID
            alert("Error Cannot get User ID");
        }
        

    });

    // getUser function call that gets user data from the cloud database
    const getUser = async () => {
        let unsubscribe; // defining a trash cleanup after function is done (helps code for optimal efficiency)
        try {
            // if valid user is signedIn --> only then access database, else it is a security breach
            if(userID){
                // (NoSQL query) collect user data from the database where userID matches current userID
                const queryUserInfo = query(
                    userCollectionRef, 
                    where("userID", "==", userID)
                );
                // data collection method
                unsubscribe = onSnapshot(queryUserInfo, (snapshot) => {
                    // empty list declaration
                    let docs = []; 
                    
                    // add all user info to list docs
                    snapshot.forEach((doc) => {
                        const firstname = doc.data().firstname;
                        const lastname = doc.data().lastname;
                        const email = doc.data().email;
                        
                        const id = doc.id;
                        docs.push({ email, firstname, lastname, id });
                    });
                    // send the docs list to user data list (which is return parameter)
                    setUserInfo(docs);
                });
            }
        // else if error, then catch the error
        } catch (error) {
            alert(error)
        }
        // delete terms for optimal performance
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    };

    // defines that function should run 2 seconds after being called to ensure and updates in the database are done before function call
    useEffect(() => {
        // Introduce a 2-3 second delay before calling getUser
        const delay = 500; // 2 seconds
        const timer = setTimeout(() => {
            getUser();
        }, delay);

        return () => clearTimeout(timer);
    }, [userID]);

    // return the userInfo
    return {userInfo};
};
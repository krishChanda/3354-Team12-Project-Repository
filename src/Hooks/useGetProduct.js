// Js file that provides function call to retrive product and sentiment score data from database

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from ".."; // database connection import
import { getAuth, onAuthStateChanged } from "firebase/auth"; 

export const useGetProduct = () => {
    // variable declarations
    const auth = getAuth(); // checks user authentication
    const [productData, setProductData] = useState([]); // holds a list of amazon product data
    const userCollectionRef = collection(db, "sentimentdoc"); // establish a refrence to product data collection
    const [userID, setUserID] = useState(""); // creates a state for the user

    // function to collect the userID
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

    const getProduct = async () => {
        let unsubscribe; // defining a trash cleanup after function is done (helps code for optimal efficiency)
        try {
            // if valid user is signedIn --> only then access database, else it is a security breach
            if(userID){
                // collect user data from the database where userID matches current userID
                const queryUserInfo = query(
                    userCollectionRef, 
                    where("userID", "==", userID)
                );
                // data collection method
                unsubscribe = onSnapshot(queryUserInfo, (snapshot) => {
                    // empty list declaration --> is a list that holds the product data
                    let docs = []; 
                    
                    // add all user info to list docs
                    snapshot.forEach((doc) => {
                        const amazonLink = doc.data().amazonLink;
                        const keywords = doc.data().keywords;
                        const productName = doc.data().productName;
                        const sentimentScore = doc.data().sentimentScore;
                        const id = doc.id;

                        docs.push({ amazonLink, keywords, productName, sentimentScore, id });
                    });
                    // send the docs list to user data list (which is return parameter)
                    setProductData(docs);
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

    useEffect(() => {
        // Introduce a 2-3 second delay before calling getUser
        const delay = 500; // 2 seconds
        const timer = setTimeout(() => {
            getProduct();
        }, delay);

        return () => clearTimeout(timer);
    }, [userID]);

    // return the product data
    return {productData};

}
// JS file that has function which updates the database when user wants to change first name or last name

import { collection, query, where, updateDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from ".."; // database connection import
import { getAuth, onAuthStateChanged } from "firebase/auth"; 

export const useUpdateUserInfo = () => {
    // variable declarations
    const auth = getAuth(); // checks user authentication
    const userCollectionRef = collection(db, "userinfo"); // establish a reference to the userinfo collection
    const [userID, setUserID] = useState(""); // creates a state for the user

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

    // function to update user info with new firstname and lastname
    const updateUserInfo = async (newFirstName, newLastName) => {
        try {
            if (userID) {
                // Create a query to find the document based on the userID field
                const q = query(userCollectionRef, where("userID", "==", userID));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.docs.length === 1) {
                    // Assuming there's only one matching document
                    const userDocRef = querySnapshot.docs[0].ref;

                    // Update the fields in the document
                    await updateDoc(userDocRef, {
                        firstname: newFirstName,
                        lastname: newLastName,
                    });
                } else {
                    alert("User not found or multiple users found with the same ID.");
                }
            }
        } catch (error) {
            alert(error);
        }
    };

    return { updateUserInfo };
};
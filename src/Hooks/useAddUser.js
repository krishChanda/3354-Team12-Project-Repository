// Author: Brandon Plant
// Test Case 6: The system should make an API call to db


// File that contains an addUser Function --> when user creates account, this function call stores info (first/last name/email/userID) to database

// react and firebase imports
import { addDoc, collection } from "firebase/firestore"
import { db } from ".."; // database import

// function to add user to the database
export const useAddUser = () => {
    // create a reference to the database collection: userinfo
    const userCollectionRef = collection(db, "userinfo");
    
    // add user input to the database
    const addUser = async ({userID, firstname, lastname, email}) => { 
        await addDoc(userCollectionRef, {
            userID,
            firstname,
            lastname,
            email,
        });
    } 
    // return the function to call 
    return { addUser };
}
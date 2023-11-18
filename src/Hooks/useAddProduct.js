import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from ".."; // database import

// function to add product to the database
export const useAddProduct = () => {
    // create a reference to the database collection: sentimentdoc --> database that holds amazon product info
    const productCollectionRef = collection(db, "sentimentdoc");
    
    // add user input to the database
    const addProduct = async ({userID, amazonLink, keywords, productName, sentimentScore}) => { 
        await addDoc(productCollectionRef, {
            userID,
            amazonLink,
            createdAt: serverTimestamp(),
            keywords,
            productName,
            sentimentScore
        });
    } 
    // return the function to call 
    return { addProduct };
}


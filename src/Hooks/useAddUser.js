// File that contains an addUser Function --> when user creates account, stores info (first/last name) to database
import { addDoc, collection } from "firebase/firestore"
import { db } from "..";

export const useAddUser = () => {
    const userCollectionRef = collection(db, "userinfo");
    
    const addUser = async ({userID, firstname, lastname, email}) => { 
        await addDoc(userCollectionRef, {
            userID,
            firstname,
            lastname,
            email,
        });
    } 
    return { addUser };
}
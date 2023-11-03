import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "..";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useGetUser = () => {
    const auth = getAuth();
    const [userInfo, setUserInfo] = useState([]);
    const userCollectionRef = collection(db, "userinfo");
    const [userID, setUserID] = useState("");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            setUserID(user.uid);
            // ...
        } else {
            alert("Error Cannot get User ID");
        }
        

    });


    const getUser = async () => {
        let unsubscribe;
        try {
            if(userID){
                const queryUserInfo = query(
                    userCollectionRef, 
                    where("userID", "==", userID)
                );
                unsubscribe = onSnapshot(queryUserInfo, (snapshot) => {
                    let docs = [];

                    snapshot.forEach((doc) => {
                        const firstname = doc.data().firstname;
                        const lastname = doc.data().lastname;
                        const email = doc.data().email;
                        
                        const id = doc.id;
                        docs.push({ email, firstname, lastname, id });
                    });
                    
                    setUserInfo(docs);
                });
            }
        } catch (error) {
            alert(error)
        }

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    };

    //useEffect(() => {
        //getUser();
    //}, []);

    useEffect(() => {
        // Introduce a 2-3 second delay before calling getUser
        const delay = 2000; // 2 seconds
        const timer = setTimeout(() => {
            getUser();
        }, delay);

        return () => clearTimeout(timer);
    }, [userID]);

    return {userInfo};
};
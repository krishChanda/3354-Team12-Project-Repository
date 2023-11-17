import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from ".."; // Adjust the path accordingly

// Function to delete a product document from the sentimentdoc collection
export const useDeleteProduct = () => {
    // Create a reference to the sentimentdoc collection in Firestore
    const productCollectionRef = collection(db, "sentimentdoc");

    // Function to delete a product document based on docId of the specific doc
    const deleteProduct = async (docId) => {
        try {
            // Create a reference to the specific document using the provided docId
            const productDocRef = doc(productCollectionRef, docId);

            // Delete the document
            await deleteDoc(productDocRef);
            alert("successfully deleted document!");

        } catch (error) {
            alert("Error deleting document:", error);
        }
    };

    // Return the function to call for deleting a product document
    return { deleteProduct };
};
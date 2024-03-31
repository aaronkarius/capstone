import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default async function fetcher(collectionName) {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
}

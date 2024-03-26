import {
    browserLocalPersistence,
    browserSessionPersistence,
    createUserWithEmailAndPassword,
    setPersistence,
    signInWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebaseConfig";
import { toast } from "react-toastify";

const handleSignUp = (firstName, lastName, email, password, rememberMe) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async response => {
            // unique id for the user
            const uid = response.user.uid;
            const data = {
                id: uid,
                firstName,
                lastName,
                email,
                password
            };

            try {
                // save the user data to the database
                await setDoc(doc(db, "users", uid), data);

                setPersistence(
                    auth,
                    rememberMe
                        ? browserLocalPersistence
                        : browserSessionPersistence
                ).then(() => {
                    signInWithEmailAndPassword(auth, email, password);
                });

                toast.success("Sign up successful!");
            } catch (error) {
                toast.error(
                    "An error has occurred trying to save user data. Please try again later."
                );
            }
        })
        .catch(error => {
            // trying to make the error a little prettier
            toast.error(
                error.message
                    .replace("Firebase: ", "")
                    .replace("auth/", "")
                    .replaceAll("-", " ")
            );
        });
};

export default handleSignUp;

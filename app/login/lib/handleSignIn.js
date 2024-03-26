import { auth } from "@/app/firebaseConfig";
import {
    browserLocalPersistence,
    browserSessionPersistence,
    setPersistence,
    signInWithEmailAndPassword
} from "firebase/auth";
import { toast } from "react-toastify";

const handleSignIn = (email, password, rememberMe) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            setPersistence(
                auth,
                rememberMe ? browserLocalPersistence : browserSessionPersistence
            );
            toast.success("Sign in successful!");
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

export default handleSignIn;

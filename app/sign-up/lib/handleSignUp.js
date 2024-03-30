import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

const handleSignUp = (
    { firstName, lastName, email, password },
    toast,
    router
) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            try {
                router.prefetch("/login");
            } catch (_) {}

            updateProfile(auth.currentUser, {
                displayName: `${firstName} ${lastName}`
            });

            toast({
                title: "Sign up successful!",
                description: "Redirecting you now.",
                variant: "success"
            });
        })
        .catch(error => {
            // trying to make the error a little prettier
            toast({
                title: "Uh oh! Something went wrong.",
                description: error.message
                    .replace("Firebase: ", "")
                    .replace("auth/", "")
                    .replaceAll("-", " "),
                variant: "destructive"
            });
        });

    setTimeout(() => {
        router.push("/");
    }, 2000);
};

export default handleSignUp;

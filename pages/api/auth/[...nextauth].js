import { auth } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    pages: {
        signIn: "/welcome"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials) {
                return await signInWithEmailAndPassword(
                    auth,
                    credentials.email || "",
                    credentials.password || ""
                )
                    .then(userCredential => {
                        if (userCredential.user) {
                            return userCredential.user;
                        }
                        return null;
                    })
                    .catch(error => {
                        throw new Error(error.message);
                    });
            }
        })
    ]
};

export default NextAuth(authOptions);

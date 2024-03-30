"use client";
import UnauthenticatedNavbar from "@/components/Navigation/UnauthenticatedNavbar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
    // const [firstName, setFirstName] = React.useState("");
    // const [lastName, setLastName] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [confirmEmail, setConfirmEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");
    // const [confirmPassword, setConfirmPassword] = React.useState("");
    // const [rememberMe, setRememberMe] = React.useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            // validate form
            // await signUpSchema.validate(
            //     {
            //         firstName,
            //         lastName,
            //         email,
            //         confirmEmail,
            //         password,
            //         confirmPassword
            //     },
            //     { abortEarly: false }
            // );
            // if no error is thrown, try sign up
            // handleSignUp(firstName, lastName, email, password, rememberMe);
        } catch (error) {
            // if error, show the first one
            // toast.error(error.inner[0].message);
        }
    };

    return (
        <>
            <UnauthenticatedNavbar />
            <main className="h-screen">
                <div className="flex h-screen items-center justify-center p-8">
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl">
                                Create an account
                            </CardTitle>
                            <CardDescription>
                                All fields are required.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <SignUpForm />
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Toaster />
        </>
    );
}

// <div className="flex h-full grow flex-col items-center justify-center bg-gray-100 px-4 py-8 dark:bg-gray-800 sm:px-6 lg:px-8">
//             <div className="w-full max-w-md space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold">
//                         Create an account
//                     </h2>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="-space-y-px rounded-md shadow-sm">
//                         <div>
//                             <input
//                                 className="input rounded-t-md"
//                                 id="first-name"
//                                 name="first-name"
//                                 placeholder="First Name"
//                                 type="text"
//                                 onChange={e => setFirstName(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 className="input rounded-b-md"
//                                 id="last-name"
//                                 name="last-name"
//                                 placeholder="Last Name"
//                                 type="text"
//                                 onChange={e => setLastName(e.target.value)}
//                             />
//                         </div>
//                     </div>
//                     <div className="-space-y-px rounded-md shadow-sm">
//                         <div>
//                             <input
//                                 className="input rounded-t-md"
//                                 id="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 type="text"
//                                 onChange={e => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 className="input rounded-b-md"
//                                 id="confirm-email"
//                                 name="confirm-email"
//                                 placeholder="Confirm Email"
//                                 type="text"
//                                 onChange={e => setConfirmEmail(e.target.value)}
//                             />
//                         </div>
//                     </div>
//                     <div className="-space-y-px rounded-md shadow-sm">
//                         <div>
//                             <input
//                                 className="input rounded-t-md"
//                                 id="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 type="password"
//                                 onChange={e => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 className="input rounded-b-md"
//                                 id="confirm-password"
//                                 name="confirm-password"
//                                 placeholder="Confirm Password"
//                                 type="password"
//                                 onChange={e =>
//                                     setConfirmPassword(e.target.value)
//                                 }
//                             />
//                         </div>
//                     </div>
//                     <div className="flex items-center">
//                         <input
//                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                             id="remember-me"
//                             name="remember-me"
//                             type="checkbox"
//                             onChange={() => setRememberMe(!rememberMe)}
//                         />
//                         <div
//                             className="ml-2 block text-sm"
//                             htmlFor="remember-me"
//                         >
//                             Remember me
//                         </div>
//                     </div>
//                     <div>
//                         <button className="purple-button">Sign up</button>
//                     </div>
//                 </form>
//                 <div className="text-center text-sm">
//                     <div>
//                         Already have an account?{" "}
//                         <Link className="purple-text" href="/login">
//                             Sign in
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

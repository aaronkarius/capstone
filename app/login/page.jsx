"use client";
import Link from "next/link";
import handleSignIn from "./lib/handleSignIn";
import signInSchema from "./lib/useSignInValidator";
import React from "react";
import { toast } from "react-toastify";
import ToastHolder from "../components/ToastHolder";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rememberMe, setRememberMe] = React.useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            // validate form
            await signInSchema.validate(
                {
                    email,
                    password
                },
                { abortEarly: false }
            );

            // if no error is thrown, try sign in
            handleSignIn(email, password, rememberMe);
        } catch (error) {
            // if error, show the first one
            toast.error(error.inner[0].message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full px-4 py-8 bg-gray-100 grow dark:bg-gray-800 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <input
                                className="input rounded-t-md"
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="text"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="input rounded-b-md"
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <div
                                className="block ml-2 text-sm"
                                htmlFor="remember-me"
                            >
                                Remember me
                            </div>
                        </div>
                        <div className="text-sm">
                            {/* todo */}
                            <Link className="purple-text" href="#">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button className="purple-button">Sign in</button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <div>
                        Don&apos;t have an account?{" "}
                        <Link className="purple-text" href="/sign-up">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <ToastHolder />
        </div>
    );
};

export default Login;

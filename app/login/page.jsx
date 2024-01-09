import Link from "next/link";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full px-4 py-8 bg-gray-100 grow dark:bg-gray-800 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <input
                                className="input rounded-t-md"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                type="email"
                            />
                        </div>
                        <div>
                            <input
                                className="input rounded-b-md"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                                type="password"
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
                            />
                            <div
                                className="block ml-2 text-sm"
                                htmlFor="remember-me"
                            >
                                Remember me
                            </div>
                        </div>
                        <div className="text-sm">
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
                        <Link className="purple-text" href="#">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

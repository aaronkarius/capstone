import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default async function middleware(req, event) {
    const token = await getToken({ req });
    const isAuthenticated = !!token;

    // if the user is already authenticated and tries to access one of the auth pages
    // redirect to the home page
    if (
        (req.nextUrl.pathname.startsWith("/login") ||
            req.nextUrl.pathname.startsWith("/sign-up") ||
            req.nextUrl.pathname.startsWith("/forgot-password")) &&
        isAuthenticated
    ) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    // if the user is not authenticated, allow them to visit the auth pages
    if (
        req.nextUrl.pathname.startsWith("/welcome") ||
        req.nextUrl.pathname.startsWith("/login") ||
        req.nextUrl.pathname.startsWith("/sign-up") ||
        req.nextUrl.pathname.startsWith("/forgot-password")
    ) {
        return fetch(req);
    }

    // if the user is not authenticated and tries to access any other page
    // redirect to the login page
    const authMiddleware = withAuth({
        pages: {
            signIn: `/welcome`
        }
    });

    return authMiddleware(req, event);
}

// config to match all pages
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"]
};

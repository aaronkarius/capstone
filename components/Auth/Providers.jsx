"use client";
import { SessionProvider as Provider } from "next-auth/react";
import AuthCheckWrapper from "./AuthCheckWrapper";
import NextTopLoader from "nextjs-toploader";

export default function SessionProvider({ children }) {
    return (
        <Provider>
            <AuthCheckWrapper>
                <NextTopLoader showSpinner={false} />
                {children}
            </AuthCheckWrapper>
        </Provider>
    );
}

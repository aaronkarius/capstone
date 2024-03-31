"use client";
import { ThemeProvider } from "next-themes";
import Navbar from "../Navigation/Authenticated/Navbar";
import { useSession } from "next-auth/react";
import LoadingScreen from "../Fallbacks/LoadingScreen";
import { usePathname } from "next/navigation";

export default function AuthCheckWrapper({ children }) {
    const { status } = useSession();
    const pathname = usePathname();

    return (
        <ThemeProvider enableSystem={false} attribute="class">
            {status === "loading" ? (
                <div className="h-svh">
                    <LoadingScreen />
                </div>
            ) : status === "authenticated" &&
              !pathname.includes("/login") &&
              !pathname.includes("/sign-up") &&
              !pathname.includes("/forgot-password") &&
              !pathname.includes("/welcome") ? (
                <Navbar>{children}</Navbar>
            ) : (
                children
            )}
        </ThemeProvider>
    );
}

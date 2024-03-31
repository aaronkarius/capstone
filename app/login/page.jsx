"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import UnauthenticatedNavbar from "@/components/Navigation/UnauthenticatedNavbar";
import LoginForm from "./LoginForm";
import { Toaster } from "@/components/ui/toaster";

export default function Login() {
    return (
        <>
            <UnauthenticatedNavbar />
            <main className="h-screen">
                <div className="flex h-screen items-center justify-center p-8">
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl">Login</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <LoginForm />
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Toaster />
        </>
    );
}

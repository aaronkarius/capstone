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
import SignUpForm from "./SignUpForm";

export default function SignUp() {
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

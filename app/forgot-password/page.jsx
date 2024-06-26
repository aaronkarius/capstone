"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import UnauthenticatedNavbar from "@/components/Navigation/UnauthenticatedNavbar";
import { Toaster } from "@/components/ui/toaster";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function ForgotPassword() {
    return (
        <>
            <UnauthenticatedNavbar />
            <main className="h-svh">
                <div className="flex h-svh items-center justify-center p-8">
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl">
                                Forgot your password?
                            </CardTitle>
                            <CardDescription>
                                Enter your email below and if it exists
                                we&apos;ll send you a link to reset your
                                password.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ForgotPasswordForm />
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Toaster />
        </>
    );
}

"use client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import EmailField from "@/components/fields/AuthFields/EmailField";
import { useToast } from "@/components/ui/use-toast";
import { auth } from "@/lib/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const schema = z.object({
    email: z.string().email().max(50)
});

export default function ForgotPasswordForm() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: ""
        }
    });

    const handleSubmit = ({ email }) => {
        setLoading(true);

        sendPasswordResetEmail(auth, email).then(() => {
            router.prefetch("/login");

            toast({
                title: "Password reset email sent!",
                description: "Redirecting you now.",
                variant: "success"
            });

            setTimeout(() => {
                router.push("/");
            }, 2000);
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="grid gap-4"
            >
                <EmailField form={form} disabled={loading} />
                <Button
                    className="mt-6 w-full"
                    type="submit"
                    disabled={loading}
                >
                    {loading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Send
                </Button>
            </form>
        </Form>
    );
}

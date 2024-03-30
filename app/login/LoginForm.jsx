"use client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import PasswordEyeField from "@/components/fields/AuthFields/PasswordEyeField";
import EmailField from "@/components/fields/AuthFields/EmailField";
// import RememberMeField from "@/components/fields/AuthFields/RememberMeField";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
    email: z.string().email().max(50),
    password: z.string().min(6).max(20)
    // rememberMe: z.boolean().default(false).optional()
});

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: ""
            // rememberMe: false
        }
    });

    const handleSubmit = async ({ email, password }) => {
        setLoading(true);

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false
        });

        if (result.error) {
            setLoading(false);

            // trying to make the error a little prettier
            toast({
                title: "Uh oh! Something went wrong.",
                description: result.error
                    .replace("Firebase: ", "")
                    .replace("auth/", "")
                    .replaceAll("-", " "),
                variant: "destructive"
            });
        } else {
            router.prefetch("/");

            toast({
                title: "Sign in successful!",
                description: "Redirecting you now.",
                variant: "success"
            });

            setTimeout(() => {
                router.push("/");
            }, 2000);
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="grid gap-4"
            >
                <EmailField form={form} disabled={loading} />
                <PasswordEyeField form={form} disabled={loading} />
                {/* <RememberMeField form={form} /> */}
                <Button
                    variant="link"
                    className="justify-start text-sm text-primary"
                    type="button"
                    disabled={loading}
                >
                    <Link href="/forgot-password">Forgot your password?</Link>
                </Button>
                <Button className="w-full" type="submit" disabled={loading}>
                    {loading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign in
                </Button>
                <Button
                    variant="link"
                    className="text-sm text-primary"
                    type="button"
                    disabled={loading}
                >
                    <Link href="/sign-up">
                        Don&apos;t have an account? Sign up here.
                    </Link>
                </Button>
            </form>
        </Form>
    );
}

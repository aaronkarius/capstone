"use client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import PasswordEyeField from "@/components/fields/AuthFields/PasswordEyeField";
import EmailField from "@/components/fields/AuthFields/EmailField";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import handleSignUp from "./lib/handleSignUp";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const schema = z.object({
    firstName: z
        .string()
        .min(1, { message: "Must contain at least 1 character" })
        .max(20, { message: "Must contain at most 20 characters" })
        .regex(/^[a-zA-z]+$/, { message: "Must contain only letters" }),
    lastName: z
        .string()
        .min(1, { message: "Must contain at least 1 character" })
        .max(20, { message: "Must contain at most 20 characters" })
        .regex(/^[a-zA-z]+$/, { message: "Must contain only letters" }),
    email: z
        .string()
        .email()
        .max(50, { message: "Must contain at most 50 characters" }),
    password: z
        .string()
        .min(6, { message: "Must contain at least 6 characters" })
        .max(20, { message: "Must contain at most 20 characters" })
        .regex(/^\S+$/, { message: "Cannot contain whitespace" })
});

export default function SignUpForm() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    });

    const handleSubmit = data => {
        setLoading(true);
        handleSignUp(data, toast, router);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="grid gap-4"
            >
                <div className="flex gap-4">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Jane"
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Doe"
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <EmailField form={form} disabled={loading} />
                <PasswordEyeField form={form} disabled={loading} />
                <Button
                    className="mt-6 w-full"
                    type="submit"
                    disabled={loading}
                >
                    {loading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign up
                </Button>
            </form>
        </Form>
    );
}

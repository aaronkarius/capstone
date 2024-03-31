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
import EmailField from "@/components/fields/AuthFields/EmailField";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import {
    emailSchema,
    firstNameSchema,
    lastNameSchema
} from "./../../lib/schemas";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import PatientAccordion from "./_Patients/PatientAccordion";
import handleCreateOrUpdateClient from "./lib/handleCreateOrUpdateClient";

// todo: add patients schema?
const schema = z.object({
    ...firstNameSchema,
    ...lastNameSchema,
    ...emailSchema
});

export default function ClientForm({ setOpen, toast, edit, previousData }) {
    const [loading, setLoading] = useState(false);

    // todo: add patients

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: previousData?.firstName ?? "",
            lastName: previousData?.lastName ?? "",
            email: previousData?.email ?? ""
        }
    });

    const handleSubmit = async data => {
        setLoading(true);
        await handleCreateOrUpdateClient(
            data,
            toast,
            setOpen,
            edit,
            previousData
        );
        setLoading(false);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="grid gap-4"
            >
                <div className="flex justify-between gap-4">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="flex-1">
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
                            <FormItem className="flex-1">
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
                {!edit && <PatientAccordion />}
                <DialogFooter>
                    <Button type="submit" disabled={loading} className="flex-1">
                        {loading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {edit ? "Update" : "Create"}
                    </Button>
                    <DialogClose asChild>
                        <Button
                            variant="secondary"
                            className="flex-1"
                            disabled={loading}
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </form>
        </Form>
    );
}

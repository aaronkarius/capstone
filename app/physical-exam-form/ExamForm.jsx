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
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import {
    emailSchema,
    firstNameSchema,
    lastNameSchema
} from "../../lib/schemas";
import DatePicker from "@/components/fields/DatePicker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
// import { ScrollArea } from "@/components/ui/scroll-area";
import RecordingInput from "@/components/fields/RecordingInput";

const schema = z.object({
    ...firstNameSchema,
    ...lastNameSchema,
    dob: z.date(),
    examDate: z.date(),
    breed: z
        .string()
        .min(1, { message: "Must contain at least 1 character" })
        .max(20, { message: "Must contain at most 20 characters" })
        .regex(/^[a-zA-z]+$/, { message: "Must contain only letters" }),
    sex: z.string({
        required_error: "Please select an option"
    }),
    healthy: z.string({
        required_error: "Please select an option"
    })
});

export default function ExamForm({ handleSubmit, notesValue, setNotesValue }) {
    const [loading, setLoading] = useState(false);
    const [dobOpen, setDobOpen] = useState(false);
    const [examDateOpen, setExamDateOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            examDate: new Date(),
            breed: ""
        }
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="grid gap-4"
            >
                {/* todo: figure out scroll area */}
                {/* <ScrollArea className="pr-4"> */}
                {/* <div className="grid gap-4"> */}
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
                <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Date of birth</FormLabel>
                            <DatePicker
                                open={dobOpen}
                                setOpen={setDobOpen}
                                field={field}
                                loading={loading}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="examDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Exam Date</FormLabel>
                            <DatePicker
                                open={examDateOpen}
                                setOpen={setExamDateOpen}
                                field={field}
                                loading={loading}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="breed"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>Breed</FormLabel>
                            <FormControl>
                                <Input disabled={loading} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-between gap-4">
                    <FormField
                        control={form.control}
                        name="sex"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Sex</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    disabled={loading}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Male">
                                            Male
                                        </SelectItem>
                                        <SelectItem value="Female">
                                            Female
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="healthy"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Healthy</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    disabled={loading}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Yes">Yes</SelectItem>
                                        <SelectItem value="No">No</SelectItem>
                                        <SelectItem value="Unsure">
                                            Unsure
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <RecordingInput
                    id="notes"
                    label="Notes"
                    form={form}
                    disabled={loading}
                    value={notesValue}
                    setValue={setNotesValue}
                />
                {/* </div> */}
                {/* </ScrollArea> */}
                <Button
                    type="submit"
                    disabled={loading}
                    className="mt-6 flex-1"
                >
                    {loading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Submit
                </Button>
            </form>
        </Form>
    );
}

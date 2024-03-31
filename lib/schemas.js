import { z } from "zod";

export const firstNameSchema = {
    firstName: z
        .string()
        .min(1, { message: "Must contain at least 1 character" })
        .max(20, { message: "Must contain at most 20 characters" })
        .regex(/^[a-zA-z]+$/, { message: "Must contain only letters" })
};

export const lastNameSchema = {
    lastName: z
        .string()
        .min(1, { message: "Must contain at least 1 character" })
        .max(20, { message: "Must contain at most 20 characters" })
        .regex(/^[a-zA-z]+$/, { message: "Must contain only letters" })
};

export const emailSchema = {
    email: z
        .string()
        .email()
        .max(50, { message: "Must contain at most 50 characters" })
};

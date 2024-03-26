import { object, string } from "yup";

const signUpSchema = object().shape({
    firstName: string()
        .required("First Name is required")
        .matches(/^[a-zA-z]+$/, "First Name must contain only letters")
        .max(20, "Password must be less than 20 characters"),
    lastName: string()
        .required("Last Name is required")
        .matches(/^[a-zA-z]+$/, "Last Name must contain only letters")
        .max(20, "Password must be less than 20 characters"),
    email: string()
        .email("Email is not valid")
        .required("Email is required")
        .max(50, "Password must be less than 50 characters"),
    confirmEmail: string()
        .required("Emails must match")
        .test(
            "email-match",
            "Emails must match",
            (value, context) => value === context.parent.email
        ),
    password: string()
        .required("Password is required")
        .matches(/^\S+$/, "Password cannot contain whitespace")
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be less than 20 characters"),
    confirmPassword: string()
        .required("Passwords must match")
        .test(
            "password-match",
            "Passwords must match",
            (value, context) => value === context.parent.password
        )
});

export default signUpSchema;

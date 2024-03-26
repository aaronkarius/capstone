import { object, string } from "yup";

const signInSchema = object().shape({
    email: string().required("Email is required"),
    password: string().required("Password is required")
});

export default signInSchema;

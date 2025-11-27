import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; //klasik şifre endeksi

export const signupSchema = yup.object().shape({
    username: yup.string().required("Username is required")
        .min(4,"Username is must above four characters"),

    email: yup.string()
        .email("Please enter a valid email address")
        .required("E-mail is required"),

    password: yup.string().required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(passwordRules, "Password is not strong enough"),

    confirmPassword: yup.string().required("Confirm passwords are required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),

    age: yup.number().required("Age is required")
        .typeError("Age must be a number")
        .min(18,"You must be older than 18"),
})
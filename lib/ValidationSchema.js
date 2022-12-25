import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
});
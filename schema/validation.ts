import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("Required field")
    .min(2, "Minimum 2 characters")
    .max(10, "Maximum 10 characters")
    .matches(/^[A-Za-z]+$/i, "Only characters are allowed"),
  last_name: yup
    .string()
    .required("Required field")
    .min(2, "Minimum 2 characters")
    .max(10, "Maximum 10 characters")
    .matches(/^[A-Za-z]+$/i, "Only characters are allowed"),
  username: yup
    .string()
    .required("Required field")
    .min(2, "Minimum 2 character")
    .max(10, "Maximum 10 character")
    .matches(/^[A-Za-z0-9]+$/i, "Only characters and numbers are allowed"),
  email: yup.string().required("Required field").email("Must be a valid email"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .max(32, "Maximum 32 characters"),
});

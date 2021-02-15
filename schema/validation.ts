import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("Required field")
    .min(2, "Minimum 2 character")
    .max(10, "Maximum 10 character")
    .matches(/^[A-Za-z]+$/i, "Only characters are allowed"),
  last_name: yup
    .string()
    .required("Required field")
    .min(2, "Minimum 2 character")
    .max(10, "Maximum 10 character")
    .matches(/^[A-Za-z]+$/i, "Only characters are allowed"),
  username: yup
    .string()
    .required("Required field")
    .min(2, "Minimum 2 character")
    .max(10, "Maximum 10 character"),
  email: yup.string().required("Required field").email("Must be a valid email"),
  password: yup
    .string()
    .min(6, "Minimum 6 character")
    .max(32, "Minimum 32 character"),
});

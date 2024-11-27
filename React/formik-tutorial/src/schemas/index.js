// schemas
// It will basically defined the from properties. Its gonna defined what those properties should be or what types they should be.

import * as yup from "yup";

// min 5 characters, at least one uppercase, one lowercase, one number
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// basicSchema is the name of the schema we're defining
// It will be equal to an object that we'll define using the yup.object().shape({})
export const basicSchema = yup.object().shape({
  //Defining the validation for the form properties
  email: yup.string().email("Please enter a valid email").required("Required"),
  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" }),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

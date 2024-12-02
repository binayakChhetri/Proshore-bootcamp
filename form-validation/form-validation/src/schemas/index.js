import * as yup from "yup";

// min 5 characters, at least one uppercase, one lowercase, one number
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  password: yup.string().min(5),
});

export const signupSchema = yup.object().shape({
  username: yup.string().min(4).required(),
  email: yup.string().email("Please enter a valid email").required(),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Password must contain min 5 characters, at least one uppercase, one lowercase, one number",
    })
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

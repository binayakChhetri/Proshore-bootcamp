import React from "react";
import "./signup.css";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      countryName: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
    validationSchema: signupSchema,
  });

  console.log(formik.errors);
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h2 className="title">Sign Up</h2>

        <div style={{ marginBottom: "0.5rem" }}>
          <label htmlFor="firstName">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            required
          />
          {formik.errors.username && (
            <p className="error">{formik.errors.username}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="lastName">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <p className="error">{formik.errors.email}</p>
          )}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          {formik.errors.password && (
            <p className="error">{formik.errors.password}</p>
          )}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          {formik.errors.confirmPassword && (
            <p className="error">{formik.errors.confirmPassword}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="country">Country</label>
          <select
            id="countryName"
            name="countryName"
            value={formik.values.countryName}
            onChange={formik.handleChange}
          >
            <option value="us">US</option>
            <option value="nep">Nepal</option>
            <option value="in">India</option>
            <option value="ch">China</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={{ marginBottom: "1.5rem", display: "flex" }}>
          <input type="checkbox" id="agreeTerms" name="agreeTerms" required />
          <label htmlFor="agreeTerms" style={{ color: "gray-700" }}>
            I agree to the terms and conditions
          </label>
        </div>

        <div className="flex justify-between">
          <button type="submit">Sign Up</button>
          <button type="button" onClick={() => formik.resetForm()}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

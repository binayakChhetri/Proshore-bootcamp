import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import Error from "../UI/Error";
import { Title } from "../UI/Title";
import { Input } from "../UI/Input";

const SignupForm = () => {
  const { values, errors, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      countryName: "",
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
    validationSchema: signupSchema,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
      <Title>Sign Up</Title>

      <div className="input-section">
        <Input
          inputType="text"
          name="username"
          handleChange={handleChange}
          values={values}
          errors={errors}
        >
          Username
        </Input>
      </div>
      <div className="input-section">
        <Input
          inputType="email"
          name="email"
          handleChange={handleChange}
          values={values}
          errors={errors}
        >
          Email
        </Input>
      </div>

      <div className="input-section" id="password">
        <Input
          inputType="password"
          name="password"
          handleChange={handleChange}
          values={values}
          errors={errors}
        >
          Password
        </Input>
      </div>

      <div className="input-section">
        <Input
          inputType="password"
          name="confirmPassword"
          handleChange={handleChange}
          values={values}
          errors={errors}
        >
          Confirm password
        </Input>
      </div>

      <div className="input-section">
        <label htmlFor="country">Country</label>
        <select
          id="countryName"
          name="countryName"
          value={values.countryName}
          onChange={handleChange}
        >
          <option value="us">US</option>
          <option value="nep">Nepal</option>
          <option value="in">India</option>
          <option value="ch">China</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="terms-conditions">
        <input type="checkbox" id="agreeTerms" name="agreeTerms" required />
        <label htmlFor="agreeTerms" style={{ color: "gray-700" }}>
          I agree the terms and conditions
        </label>
      </div>

      <div className="login-signup-container">
        <button type="submit">Sign Up</button>
        <button type="button" onClick={() => resetForm()}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default SignupForm;

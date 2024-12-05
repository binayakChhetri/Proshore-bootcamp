import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { Title } from "../UI/Title";
import { Input } from "../UI/Input";
import { SelectInput } from "../UI/SelectInput";
import { Button } from "../UI/Button";
import { AboutMe } from "../UI/AboutMe";

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
        <SelectInput
          name="countryName"
          values={values}
          handleChange={handleChange}
        >
          Country
        </SelectInput>
      </div>

      <div className="terms-conditions">
        <Input
          inputType="checkbox"
          name="agreeTerms"
          values={values}
          handleChange={handleChange}
        >
          I agree the terms and conditions
        </Input>
      </div>

      <div className="login-signup-container">
        <Button btnType="submit">Sign Up</Button>
        <Button btnType="button" resetForm={resetForm}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;

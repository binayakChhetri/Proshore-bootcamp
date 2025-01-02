import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { Title } from "../UI/Title";
import { Input } from "../UI/Input";
import { SelectInput } from "../UI/SelectInput";
import { Button } from "../UI/Button";
import toast, { Toaster } from "react-hot-toast";
import { apiPost } from "../services/apiPost";
import { useNavigate } from "react-router";

const SignupForm = () => {
  const naviagte = useNavigate();

  const { values, handleChange, errors, handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      countryName: "",
    },
    onSubmit: async (values) => {
      // Fetch data to validate if user already exists
      const res = await fetch("http://localhost:3000/userInfo");
      const data = await res.json();
      let userExists = false;
      data.forEach((user) => {
        if (user.email === values.email || user.username === values.username) {
          userExists = true;
        }
      });

      if (userExists) {
        toast.error("Account already exists with the given credientials.");
        return;
      } else {
        const postData = {
          username: values.username,
          email: values.email,
          password: values.password,
          description: "",
        };
        apiPost(postData);
        naviagte("/login");
      }

      console.log(values);
      resetForm();
    },
    validationSchema: signupSchema,
  });

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            textAlign: "center",
            fontSize: "1rem",
          },
        }}
      />
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

        <div
          id="login-signup-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button btnType="submit">Sign Up</Button>
          <Button btnType="button" onClick={resetForm}>
            Reset
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;

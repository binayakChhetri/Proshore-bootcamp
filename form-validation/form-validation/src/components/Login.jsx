import { Link } from "react-router";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import Error from "../UI/Error";
import { Input } from "../UI/Input";
import { Title } from "../UI/Title";

function Login() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
    validationSchema: basicSchema,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Title>Login</Title>
      <div className="input-section">
        <Input
          inputType="email"
          handleChange={handleChange}
          values={values}
          errors={errors}
          name="email"
        >
          Email
        </Input>
      </div>
      <div className="input-section">
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

      <div className="input-section checkbox-section">
        <input type="checkbox" id="checkbox" required />
        <label style={{ display: "inline" }} htmlFor="checkbox">
          {" "}
          Remember password ?
        </label>
      </div>

      <Link className="navigate" to="/sign-up">
        Click to signup
      </Link>
      <div className="input-section">
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
